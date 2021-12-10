"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const chalk_1 = __importDefault(require("chalk"));
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
process.on('unhandledRejection', (err) => {
    throw err;
});
function init(appPath, appName, logLevel, originalDirectory, templateToInstall, templateName) {
    const appPackage = require(path_1.default.join(appPath, 'package.json'));
    const useYarn = fs_extra_1.default.existsSync(path_1.default.join(appPath, 'yarn.lock'));
    const templatePath = path_1.default.dirname(require.resolve(`${templateToInstall}/package.json`, { paths: [appPath] }));
    const templateJsonPath = path_1.default.join(templatePath, 'template.json');
    let templateJson = {};
    if (fs_extra_1.default.existsSync(templateJsonPath)) {
        templateJson = require(templateJsonPath);
    }
    const templatePackage = templateJson.package || {};
    if (templateJson.dependencies) {
        templatePackage.dependencies = templateJson.dependencies;
    }
    if (templateJson.scripts) {
        templatePackage.scripts = templateJson.scripts;
    }
    const templatePackageToMerge = ['dependencies', 'scripts'];
    const templatePackageToReplace = Object.keys(templatePackage).filter((key) => {
        return !templatePackageToMerge.includes(key);
    });
    appPackage.scripts = { ...(templatePackage.scripts || {}) };
    if (useYarn) {
        appPackage.scripts = Object.entries(appPackage.scripts).reduce((acc, [key, value]) => ({
            ...acc,
            [key]: value.replace(/(npm run |npm )/, 'yarn ')
        }), {});
    }
    templatePackageToReplace.forEach((key) => {
        appPackage[key] = templatePackage[key];
    });
    fs_extra_1.default.writeFileSync(path_1.default.join(appPath, 'package.json'), JSON.stringify(appPackage, null, 2) + os_1.default.EOL);
    // Copy the common files
    const commonDir = path_1.default.join(templatePath, 'common');
    if (fs_extra_1.default.existsSync(commonDir)) {
        fs_extra_1.default.copySync(commonDir, appPath);
    }
    else {
        console.error(`Could not locate template: ${chalk_1.default.green(commonDir)}`);
        return;
    }
    // Copy the files for the user
    const templateDir = path_1.default.join(templatePath, 'templates', templateName);
    if (fs_extra_1.default.existsSync(templateDir)) {
        fs_extra_1.default.copySync(templateDir, appPath);
    }
    else {
        console.error(`Could not locate template: ${chalk_1.default.green(templateDir)}`);
        return;
    }
    const gitignoreExists = fs_extra_1.default.existsSync(path_1.default.join(appPath, '.gitignore'));
    if (gitignoreExists) {
        // Append if there's already a `.gitignore` file there
        const data = fs_extra_1.default.readFileSync(path_1.default.join(appPath, 'gitignore'));
        fs_extra_1.default.appendFileSync(path_1.default.join(appPath, '.gitignore'), data);
        fs_extra_1.default.unlinkSync(path_1.default.join(appPath, 'gitignore'));
    }
    else {
        fs_extra_1.default.moveSync(path_1.default.join(appPath, 'gitignore'), path_1.default.join(appPath, '.gitignore'), []);
    }
    let command;
    let remove;
    let args;
    if (useYarn) {
        command = 'yarnpkg';
        remove = 'remove';
        args = ['add'];
    }
    else {
        command = 'npm';
        remove = 'uninstall';
        args = ['install', '--save', Number(logLevel) >= 5 && '--verbose'].filter((e) => e);
    }
    // Install additional template dependencies, if present.
    const dependenciesToInstall = Object.entries({
        ...templatePackage.dependencies,
        ...templatePackage.devDependencies
    });
    if (dependenciesToInstall.length) {
        args = args.concat(dependenciesToInstall.map(([dependency, version]) => {
            return `${dependency}@${version}`;
        }));
    }
    if (templateName && args.length > 1) {
        console.log();
        console.log(`Installing template dependencies using ${command}...`);
        const proc = cross_spawn_1.default.sync(command, args, { stdio: 'inherit' });
        if (proc.status !== 0) {
            console.error(`\`${command} ${args.join(' ')}\` failed`);
            return;
        }
    }
    // Remove template
    console.log(`Removing template package using ${command}...`);
    console.log();
    const proc = cross_spawn_1.default.sync(command, [remove, templateToInstall], {
        stdio: 'inherit'
    });
    if (proc.status !== 0) {
        console.error(`\`${command} ${args.join(' ')}\` failed`);
    }
    // Change displayed command to yarn instead of yarnpkg
    const displayedCommand = 'npx redspot';
    console.log();
    console.log(`🎉  Success! Created ${chalk_1.default.yellow(appName)} at ${chalk_1.default.green(appPath)}`);
    console.log('👉  Inside that directory, you can run several commands to help you develop the contract:');
    console.log();
    console.log(chalk_1.default.cyan(`  ${displayedCommand} compile`));
    console.log('    Compile the contract.');
    console.log('');
    console.log(chalk_1.default.cyan(`  ${displayedCommand} test`));
    console.log('    Test the contract.');
    console.log('');
    console.log(chalk_1.default.cyan(`  ${displayedCommand} help`));
    console.log('    Display the help information.');
    console.log('');
}
exports.init = init;
