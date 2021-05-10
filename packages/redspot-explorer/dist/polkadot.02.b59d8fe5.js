(('undefined' != typeof self ? self : this).webpackChunk_polkadot_apps =
  ('undefined' != typeof self ? self : this).webpackChunk_polkadot_apps ||
  []).push([
  [949],
  {
    25697: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = { rpc: {}, types: { PalletBalanceOf: 'Balance' } });
    },
    47889: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            CollateralAuctionItem: {
              refundRecipient: 'AccountId',
              currencyId: 'CurrencyId',
              initialAmount: 'Compact<Balance>',
              amount: 'Compact<Balance>',
              target: 'Compact<Balance>',
              startTime: 'BlockNumber'
            },
            DebitAuctionItem: {
              initialAmount: 'Compact<Balance>',
              amount: 'Compact<Balance>',
              fix: 'Compact<Balance>',
              startTime: 'BlockNumber'
            },
            SurplusAuctionItem: {
              amount: 'Compact<Balance>',
              startTime: 'BlockNumber'
            }
          }
        });
    },
    88593: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            LiquidationStrategy: { _enum: ['Auction', 'Exchange'] },
            OptionRate: 'Option<Rate>',
            OptionRatio: 'Option<Ratio>',
            ChangeOptionRate: {
              _enum: { NoChange: 'Null', NewValue: 'OptionRate' }
            },
            ChangeOptionRatio: {
              _enum: { NoChange: 'Null', NewValue: 'OptionRatio' }
            },
            ChangeBalance: { _enum: { NoChange: 'Null', NewValue: 'Balance' } },
            RiskManagementParams: {
              maximumTotalDebitValue: 'Balance',
              stabilityFee: 'Option<Rate>',
              liquidationRatio: 'Option<Rate>',
              liquidationPenalty: 'Option<Rate>',
              requiredCollateralRatio: 'Option<Rate>'
            }
          }
        });
    },
    78718: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            getSupplyAmount: {
              description: 'Get supply amount',
              params: [
                { name: 'supplyCurrencyId', type: 'CurrencyId' },
                { name: 'targetCurrencyId', type: 'CurrencyId' },
                { name: 'targetCurrencyAmount', type: 'BalanceRequest' }
              ],
              type: 'BalanceWrapper'
            },
            getTargetAmount: {
              description: 'Get target amount',
              params: [
                { name: 'supplyCurrencyId', type: 'CurrencyId' },
                { name: 'targetCurrencyId', type: 'CurrencyId' },
                { name: 'supplyCurrencyAmount', type: 'BalanceRequest' }
              ],
              type: 'BalanceWrapper'
            }
          },
          types: {
            TradingPairProvisionParameters: {
              minContribution: '(Balance, Balance)',
              targetProvision: '(Balance, Balance)',
              accumulatedProvision: '(Balance, Balance)',
              notBefore: 'BlockNumber'
            },
            BalanceWrapper: { amount: 'Balance' },
            BalanceRequest: { amount: 'Balance' },
            TradingPairStatus: {
              _enum: {
                NotEnabled: 'Null',
                Provisioning: 'TradingPairProvisionParameters',
                Enabled: 'Null'
              }
            }
          }
        });
    },
    77790: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            call: {
              description: 'eth call',
              params: [
                { name: 'data', type: 'CallRequest' },
                {
                  name: 'at',
                  type: 'BlockHash',
                  isHistoric: !0,
                  isOptional: !0
                }
              ],
              type: 'Raw'
            },
            estimateResources: {
              description: 'eth estimateResources',
              params: [
                { name: 'from', type: 'H160' },
                { name: 'unsignedExtrinsic', type: 'Bytes' },
                {
                  name: 'at',
                  type: 'BlockHash',
                  isHistoric: !0,
                  isOptional: !0
                }
              ],
              type: 'EstimateResourcesResponse'
            }
          },
          typesAlias: {
            evm: {
              AccountInfo: 'EvmAccountInfo',
              ContractInfo: 'EvmContractInfo'
            }
          },
          types: {
            EstimateResourcesResponse: {
              gas: 'u256',
              storage: 'i32',
              weightFee: 'u256'
            },
            EvmAccountInfo: {
              nonce: 'Index',
              contractInfo: 'Option<EvmContractInfo>',
              developerDeposit: 'Option<Balance>'
            },
            CodeInfo: { codeSize: 'u32', refCount: 'u32' },
            EvmContractInfo: {
              codeHash: 'H256',
              maintainer: 'H160',
              deployed: 'bool'
            },
            EvmAddress: 'H160',
            CallRequest: {
              from: 'Option<H160>',
              to: 'Option<H160>',
              gasLimit: 'Option<u32>',
              storageLimit: 'Option<u32>',
              value: 'Option<U128>',
              data: 'Option<Bytes>'
            }
          }
        });
    },
    61278: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            RelaychainAccountId: 'AccountId',
            SlashInfo: {
              validator: 'RelaychainAccountId',
              relaychainTokenAmount: 'Balance'
            },
            ValidatorBacking: { totalInsurance: 'Balance', isFrozen: 'bool' },
            Guarantee: {
              total: 'Balance',
              bonded: 'Balance',
              unbonding: 'Option<(Balance, BlockNumber)>'
            }
          }
        });
    },
    73951: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            RedeemStrategy: {
              _enum: {
                Immediately: 'Null',
                Target: 'EraIndex',
                WaitForUnbonding: 'Null'
              }
            }
          }
        });
    },
    1408: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            PoolId: {
              _enum: {
                LoansIncentive: 'CurrencyId',
                DexIncentive: 'CurrencyId',
                HomaIncentive: 'Null',
                DexSaving: 'CurrencyId',
                HomaValidatorAllowance: 'AccountId'
              }
            }
          }
        });
    },
    10196: (e, t, r) => {
      'use strict';
      var n = r(14859);
      t.bC = void 0;
      var a = n(r(81260)),
        o = r(25509),
        s = r(45859),
        i = n(r(25697)),
        c = n(r(47889)),
        u = n(r(88593)),
        d = n(r(78718)),
        l = n(r(77790)),
        p = n(r(73951)),
        f = n(r(61278)),
        h = n(r(1408)),
        m = n(r(16610)),
        y = n(r(80552)),
        b = n(r(64048)),
        g = n(r(43862)),
        v = n(r(12626)),
        w = n(r(2709)),
        O = r(26719),
        A = n(r(91158)),
        k = n(r(77763)),
        _ = n(r(67171));
      function I(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      const S = {
          accounts: i.default,
          auctionManager: c.default,
          cdpEngine: u.default,
          dex: d.default,
          evm: l.default,
          homa: p.default,
          homaValidatorList: f.default,
          incentives: h.default,
          loans: m.default,
          nft: y.default,
          nomineesElection: b.default,
          primitives: g.default,
          runtime: w.default,
          stakingPool: A.default,
          support: k.default,
          renvmBridge: v.default
        },
        x = P(P(P({}, o.types), (0, s.typesFromDefs)(S)), {
          Keys: 'SessionKeys2',
          PalletsOrigin: {
            _enum: {
              System: 'SystemOrigin',
              Timestamp: 'Null',
              RandomnessCollectiveFlip: 'Null',
              Balances: 'Null',
              Accounts: 'Null',
              Currencies: 'Null',
              Tokens: 'Null',
              Vesting: 'Null',
              AcalaTreasury: 'Null',
              Utility: 'Null',
              Multisig: 'Null',
              Recovery: 'Null',
              Proxy: 'Null',
              Scheduler: 'Null',
              Indices: 'Null',
              GraduallyUpdate: 'Null',
              Authorship: 'Null',
              Babe: 'Null',
              Grandpa: 'Null',
              Staking: 'Null',
              Session: 'Null',
              Historical: 'Null',
              GeneralCouncil: 'CollectiveOrigin',
              GeneralCouncilMembership: 'Null',
              HonzonCouncil: 'CollectiveOrigin',
              HonzonCouncilMembership: 'Null',
              HomaCouncil: 'CollectiveOrigin',
              HomaCouncilMembership: 'Null',
              TechnicalCommittee: 'CollectiveOrigin',
              TechnicalCommitteeMembership: 'Null',
              Authority: 'DelayedOrigin',
              ElectionsPhragmen: 'Null',
              AcalaOracle: 'Null',
              BandOracle: 'Null',
              OperatorMembershipAcala: 'Null',
              OperatorMembershipBand: 'Null',
              Auction: 'Null',
              Rewards: 'Null',
              OrmlNFT: 'Null',
              Prices: 'Null',
              Dex: 'Null',
              AuctionManager: 'Null',
              Loans: 'Null',
              Honzon: 'Null',
              CdpTreasury: 'Null',
              CdpEngine: 'Null',
              EmergencyShutdown: 'Null',
              Homa: 'Null',
              NomineesElection: 'Null',
              StakingPool: 'Null',
              PolkadotBridge: 'Null',
              Incentives: 'Null',
              AirDrop: 'Null',
              NFT: 'Null',
              RenVmBridge: 'Null',
              Contracts: 'Null',
              EVM: 'Null',
              Sudo: 'Null',
              TransactionPayment: 'Null'
            }
          }
        });
      _.default, _.default;
      const E = (0, s.jsonrpcFromDefs)(S, P({}, o.rpc)),
        T = (0, s.typesAliasFromDefs)(S, P({}, o.typesAlias)),
        N = {
          rpc: E,
          types: [..._.default].map((e) => ({
            minmax: e.minmax,
            types: P(P({}, x), e.types)
          })),
          alias: T
        },
        C = { spec: { acala: N, mandala: N } };
      (t.bC = C), O.signedExtensions;
    },
    16610: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: { Position: { collateral: 'Balance', debit: 'Balance' } }
        });
    },
    80552: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            CID: 'Vec<u8>',
            ClassId: 'u32',
            ClassIdOf: 'ClassId',
            TokenId: 'u64',
            TokenIdOf: 'TokenId',
            ClassInfoOf: {
              metadata: 'CID',
              totalIssuance: 'TokenId',
              owner: 'AccountId',
              data: 'ClassData'
            },
            TokenInfoOf: {
              metadata: 'CID',
              owner: 'AccountId',
              data: 'TokenData'
            },
            ClassData: { deposit: 'Balance', properties: 'Properties' },
            TokenData: { deposit: 'Balance' },
            Properties: {
              _set: { _bitLength: 8, Transferable: 1, Burnable: 2 }
            }
          }
        });
    },
    1808: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            CallOf: 'Call',
            DispatchTime: {
              _enum: { At: 'BlockNumber', After: 'BlockNumber' }
            },
            ScheduleTaskIndex: 'u32',
            DelayedOrigin: { delay: 'BlockNumber', origin: 'PalletsOrigin' }
          }
        });
    },
    13591: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            StorageValue: 'Vec<u8>',
            GraduallyUpdate: {
              key: 'StorageKey',
              targetValue: 'StorageValue',
              perBlock: 'StorageValue'
            },
            StorageKeyBytes: 'Vec<u8>',
            StorageValueBytes: 'Vec<u8>'
          }
        });
    },
    25509: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.typesAlias = t.rpc = t.types = void 0);
      var a = n(r(1808)),
        o = n(r(13591)),
        s = n(r(11811)),
        i = n(r(84553)),
        c = n(r(64057)),
        u = n(r(55092)),
        d = n(r(78219)),
        l = n(r(16515)),
        p = r(45859),
        f = n(r(88602));
      const h = {
          authority: a.default,
          graduallyUpdates: o.default,
          oracle: s.default,
          tokens: u.default,
          traits: d.default,
          vesting: f.default,
          rewards: i.default,
          xTokens: l.default,
          runtime: c.default
        },
        m = (0, p.typesFromDefs)(h);
      t.types = m;
      const y = (0, p.jsonrpcFromDefs)(h);
      t.rpc = y;
      const b = (0, p.typesAliasFromDefs)(h);
      t.typesAlias = b;
    },
    11811: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            getValue: {
              description: 'Retrieves the oracle value for a given key.',
              params: [
                { name: 'providerId', type: 'RpcDataProviderId' },
                { name: 'key', type: 'OracleKey' }
              ],
              type: 'Option<TimestampedValue>'
            },
            getAllValues: {
              description: 'Retrieves all oracle values.',
              params: [{ name: 'providerId', type: 'RpcDataProviderId' }],
              type: 'Vec<(OracleKey, Option<TimestampedValue>)>'
            }
          },
          types: {
            RpcDataProviderId: 'Text',
            DataProviderId: 'u8',
            TimestampedValue: { value: 'OracleValue', timestamp: 'Moment' },
            TimestampedValueOf: 'TimestampedValue',
            OrderedSet: 'Vec<AccountId>'
          }
        });
    },
    84553: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            PoolInfo: {
              totalShares: 'Compact<Share>',
              totalRewards: 'Compact<Balance>',
              totalWithdrawnRewards: 'Compact<Balance>'
            },
            Share: 'u128'
          }
        });
    },
    64057: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = { rpc: {}, types: { OracleValue: 'FixedU128' } });
    },
    55092: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            OrmlAccountData: {
              free: 'Balance',
              frozen: 'Balance',
              reserved: 'Balance'
            },
            OrmlBalanceLock: { amount: 'Balance', id: 'LockIdentifier' }
          },
          typesAlias: {
            tokens: {
              AccountData: 'OrmlAccountData',
              BalanceLock: 'OrmlBalanceLock'
            }
          }
        });
    },
    78219: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            AuctionInfo: {
              bid: 'Option<(AccountId, Balance)>',
              start: 'BlockNumber',
              end: 'Option<BlockNumber>'
            },
            DelayedDispatchTime: {
              _enum: { At: 'BlockNumber', After: 'BlockNumber' }
            },
            DispatchId: 'u32',
            Price: 'FixedU128'
          }
        });
    },
    45859: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'jsonrpcFromDefs', {
          enumerable: !0,
          get: function () {
            return a.default;
          }
        }),
        Object.defineProperty(t, 'typesAliasFromDefs', {
          enumerable: !0,
          get: function () {
            return o.default;
          }
        }),
        Object.defineProperty(t, 'typesFromDefs', {
          enumerable: !0,
          get: function () {
            return s.default;
          }
        });
      var a = n(r(99172)),
        o = n(r(95886)),
        s = n(r(70752));
    },
    99172: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = {}) {
          return (
            Object.keys(e)
              .filter((t) => {
                var r;
                return (
                  0 !==
                  Object.keys(
                    (null === (r = e[t]) || void 0 === r ? void 0 : r.rpc) || {}
                  ).length
                );
              })
              .forEach((r) => {
                (t[r] = {}),
                  Object.entries(e[r].rpc).forEach(([e, n]) => {
                    const a = !!n.pubsub;
                    t[r][e] = s(
                      s({}, n),
                      {},
                      {
                        isSubscription: a,
                        jsonrpc: `${r}_${e}`,
                        method: e,
                        section: r
                      }
                    );
                  });
              }),
            t
          );
        });
      var a = n(r(81260));
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
    },
    95886: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = {}) {
          return Object.values(e).reduce(
            (e, { typesAlias: t }) => s(s({}, e), t),
            t
          );
        });
      var a = n(r(81260));
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
    },
    70752: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = {}) {
          return Object.values(e).reduce(
            (e, { types: t }) => s(s({}, e), t),
            t
          );
        });
      var a = n(r(81260));
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
    },
    88602: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            OrmlVestingSchedule: {
              start: 'BlockNumber',
              period: 'BlockNumber',
              periodCount: 'u32',
              perPeriod: 'Compact<Balance>'
            },
            VestingScheduleOf: 'OrmlVestingSchedule'
          }
        });
    },
    16515: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            ChainId: { _enum: { RelayChain: 'Null', ParaChain: 'ParaId' } },
            XCurrencyId: { chainId: 'ChainId', currencyId: 'Vec<u8>' }
          }
        });
    },
    64048: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            HomaUnlockChunk: { value: 'Balance', era: 'EraIndex' },
            BondingLedger: {
              total: 'Balance',
              active: 'Balance',
              unlocking: 'Vec<UnlockChunk>'
            }
          },
          typesAlias: { nomineesElection: { UnlockChunk: 'HomaUnlockChunk' } }
        });
    },
    43862: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            Amount: 'i128',
            AmountOf: 'Amount',
            AuctionId: 'u32',
            AuctionIdOf: 'AuctionId',
            Share: 'u128',
            TokenSymbol: {
              _enum: {
                ACA: 0,
                AUSD: 1,
                DOT: 2,
                LDOT: 3,
                XBTC: 4,
                RENBTC: 5,
                POLKABTC: 6,
                PLM: 7,
                PHA: 8,
                HDT: 9,
                BCG: 11,
                KAR: 128,
                KUSD: 129,
                KSM: 130,
                LKSM: 131,
                SDN: 135,
                KILT: 138
              }
            },
            CurrencyId: {
              _enum: {
                Token: 'TokenSymbol',
                DEXShare: '(TokenSymbol, TokenSymbol)',
                ERC20: 'EvmAddress'
              }
            },
            CurrencyIdOf: 'CurrencyId',
            AirDropCurrencyId: { _enum: ['KAR', 'ACA'] },
            AuthoritysOriginId: {
              _enum: [
                'Root',
                'AcalaTreasury',
                'HonzonTreasury',
                'HomaTreasury',
                'DSWF'
              ]
            },
            DataProviderId: { _enum: ['Aggregated', 'Acala', 'Band'] },
            TradingPair: '(CurrencyId,  CurrencyId)',
            NFTBalance: 'u128'
          }
        });
    },
    12626: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: { PublicKey: '[u8; 20]', DestAddress: 'Vec<u8>' }
        });
    },
    2709: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            OracleKey: 'CurrencyId',
            OracleValue: 'Price',
            AsOriginId: 'AuthoritysOriginId'
          }
        });
    },
    26719: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.signedExtensions = void 0),
        (t.signedExtensions = { SetEvmOrigin: { extrinsic: {}, payload: {} } });
    },
    91158: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            getAvailableUnbonded: {
              description: 'Get Available Unbonded',
              params: [{ name: 'account', type: 'AccountId' }],
              type: 'BalanceInfo'
            },
            getLiquidStakingExchangeRate: {
              description: 'get liquid staking exchange rate',
              params: [],
              type: 'ExchangeRate'
            }
          },
          types: {
            SubAccountStatus: {
              bonded: 'Balance',
              available: 'Balance',
              unbonding: 'Vec<(EraIndex,Balance)>',
              mockRewardRate: 'Rate'
            },
            Params: {
              targetMaxFreeUnbondedRatio: 'Ratio',
              targetMinFreeUnbondedRatio: 'Ratio',
              targetUnbondingToFreeRatio: 'Ratio',
              unbondingToFreeAdjustment: 'Ratio',
              baseFeeRate: 'Rate'
            },
            StakingPoolPhase: {
              _enum: [
                'Started',
                'RelaychainUpdated',
                'LedgerUpdated',
                'Finished'
              ]
            },
            Ledger: {
              bonded: 'Balance',
              unbondingToFree: 'Balance',
              freePool: 'Balance',
              toUnbondNextEra: '(Balance, Balance)'
            },
            ChangeRate: { _enum: { NoChange: 'Null', NewValue: 'Rate' } },
            ChangeRatio: { _enum: { NoChange: 'Null', NewValue: 'Ratio' } },
            BalanceInfo: { amount: 'Balance' },
            PolkadotAccountId: 'AccountId',
            PolkadotAccountIdOf: 'PolkadotAccountId'
          },
          typesAlias: { stakingPool: { Phase: 'StakingPoolPhase' } }
        });
    },
    77763: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            ExchangeRate: 'FixedU128',
            Rate: 'FixedU128',
            Ratio: 'FixedU128'
          }
        });
    },
    67171: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      t.default = [
        {
          minmax: [600, 699],
          types: {
            Address: 'LookupSource',
            LookupSource: 'IndicesLookupSource',
            TokenSymbol: {
              _enum: ['ACA', 'AUSD', 'DOT', 'XBTC', 'LDOT', 'RENBTC']
            }
          }
        },
        {
          minmax: [700, 719],
          types: {
            Address: 'GenericMultiAddress',
            LookupSource: 'GenericMultiAddress',
            TokenSymbol: {
              _enum: ['ACA', 'AUSD', 'DOT', 'XBTC', 'LDOT', 'RENBTC']
            }
          }
        },
        {
          minmax: [720, void 0],
          types: {
            Address: 'GenericMultiAddress',
            LookupSource: 'GenericMultiAddress'
          }
        },
        {
          minmax: [600, 722],
          types: {
            PoolId: {
              _enum: {
                Loans: 'CurrencyId',
                DexIncentive: 'CurrencyId',
                DexSaving: 'CurrencyId',
                Homa: 'Null'
              }
            }
          }
        }
      ];
    },
    42475: function (e, t, r) {
      'use strict';
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              'default' === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.spec = void 0);
      var s = r(29912);
      Object.defineProperty(t, 'spec', {
        enumerable: !0,
        get: function () {
          return o(s).default;
        }
      }),
        a(r(59741), t);
    },
    46264: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          types: {
            ChainId: 'u8',
            DepositNonce: 'u64',
            ResourceId: '[u8; 32]',
            ProposalStatus: { _enum: ['Initiated', 'Approved', 'Rejected'] },
            ProposalVotes: {
              votes_for: 'Vec<AccountId>',
              votes_against: 'Vec<AccountId>',
              staus: 'ProposalStatus',
              expiry: 'BlockNumber'
            }
          }
        });
    },
    11903: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    81819: function (e, t, r) {
      'use strict';
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.signaling = t.voting = t.chainBridge = t.treasuryRewards = void 0);
      var a = r(49120);
      Object.defineProperty(t, 'treasuryRewards', {
        enumerable: !0,
        get: function () {
          return n(a).default;
        }
      });
      var o = r(46264);
      Object.defineProperty(t, 'chainBridge', {
        enumerable: !0,
        get: function () {
          return n(o).default;
        }
      });
      var s = r(32197);
      Object.defineProperty(t, 'voting', {
        enumerable: !0,
        get: function () {
          return n(s).default;
        }
      });
      var i = r(89176);
      Object.defineProperty(t, 'signaling', {
        enumerable: !0,
        get: function () {
          return n(i).default;
        }
      });
    },
    59741: function (e, t, r) {
      'use strict';
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              'default' === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      Object.defineProperty(t, '__esModule', { value: !0 }), a(r(13457), t);
    },
    89176: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          types: {
            ProposalRecord: {
              index: 'u32',
              author: 'AccountId',
              stage: 'VoteStage',
              transition_time: 'u32',
              title: 'Text',
              contents: 'Text',
              vote_id: 'u64'
            },
            ProposalContents: 'Bytes',
            ProposalTitle: 'Bytes'
          }
        });
    },
    58861: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    49120: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = { types: { Balance2: 'u128' } });
    },
    46022: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    13457: function (e, t, r) {
      'use strict';
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              'default' === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        a(r(46022), t),
        a(r(11903), t),
        a(r(59738), t),
        a(r(58861), t);
    },
    32197: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          types: {
            VoteStage: {
              _enum: ['PreVoting', 'Commit', 'Voting', 'Completed']
            },
            VoteType: { _enum: ['Binary', 'MultiOption', 'RankedChoice'] },
            TallyType: { _enum: ['OnePerson', 'OneCoin'] },
            VoteOutcome: '[u8; 32]',
            VotingTally: 'Option<Vec<(VoteOutcome, u128)>>',
            VoteData: {
              initiator: 'AccountId',
              stage: 'VoteStage',
              vote_type: 'VoteType',
              tally_type: 'TallyType',
              is_commit_reveal: 'bool'
            },
            Commitments: 'Vec<(AccountId, VoteOutcome)>',
            Reveals: 'Vec<(AccountId, Vec<VoteOutcome>)>',
            VoteRecord: {
              id: 'u64',
              commitments: 'Commitments',
              reveals: 'Reveals',
              data: 'VoteData',
              outcomes: 'Vec<VoteOutcome>'
            }
          }
        });
    },
    59738: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    29912: function (e, t, r) {
      'use strict';
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      const a = n(r(48739)),
        o = n(r(41692)),
        s = n(r(47523)),
        i = n(r(41685)),
        c = {
          spec: {
            edgeware: {
              alias: { voting: { Tally: 'VotingTally' } },
              types: [
                { minmax: [0, 32], types: a.default.types },
                { minmax: [32, 39], types: o.default.types },
                { minmax: [39, 42], types: s.default.types },
                { minmax: [42, void 0], types: i.default.types }
              ]
            }
          }
        };
      t.default = { typesBundle: c };
    },
    48739: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          types: {
            ProposalRecord: {
              index: 'u32',
              author: 'AccountId',
              stage: 'VoteStage',
              transition_time: 'u32',
              title: 'Text',
              contents: 'Text',
              vote_id: 'u64'
            },
            ProposalContents: 'Bytes',
            ProposalTitle: 'Bytes',
            Balance2: 'u128',
            VoteStage: {
              _enum: ['PreVoting', 'Commit', 'Voting', 'Completed']
            },
            VoteType: { _enum: ['Binary', 'MultiOption', 'RankedChoice'] },
            TallyType: { _enum: ['OnePerson', 'OneCoin'] },
            VoteOutcome: '[u8; 32]',
            VotingTally: 'Option<Vec<(VoteOutcome, u128)>>',
            VoteData: {
              initiator: 'AccountId',
              stage: 'VoteStage',
              vote_type: 'VoteType',
              tally_type: 'TallyType',
              is_commit_reveal: 'bool'
            },
            Commitments: 'Vec<(AccountId, VoteOutcome)>',
            Reveals: 'Vec<(AccountId, Vec<VoteOutcome>)>',
            VoteRecord: {
              id: 'u64',
              commitments: 'Commitments',
              reveals: 'Reveals',
              data: 'VoteData',
              outcomes: 'Vec<VoteOutcome>'
            },
            'voting::VoteType': 'VoteType',
            'voting::TallyType': 'TallyType',
            'voting::Tally': 'VotingTally',
            Keys: 'SessionKeys4',
            StakingLedger: 'StakingLedgerTo240',
            Votes: 'VotesTo230',
            ReferendumInfo: 'ReferendumInfoTo239',
            Weight: 'u32',
            DispatchInfo: 'DispatchInfoTo244',
            OpenTip: 'OpenTipTo225',
            ContractExecResult: 'ContractExecResultTo255',
            CompactAssignments: 'CompactAssignmentsTo257',
            RewardDestination: 'RewardDestinationTo257',
            RefCount: 'RefCountTo259',
            AccountInfo: 'AccountInfoWithRefCount',
            Address: 'IndicesLookupSource',
            LookupSource: 'IndicesLookupSource'
          },
          typesAlias: { voting: { Tally: 'VotingTally' } }
        });
    },
    41692: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          types: {
            ProposalRecord: {
              index: 'u32',
              author: 'AccountId',
              stage: 'VoteStage',
              transition_time: 'u32',
              title: 'Text',
              contents: 'Text',
              vote_id: 'u64'
            },
            ProposalContents: 'Bytes',
            ProposalTitle: 'Bytes',
            Balance2: 'u128',
            VoteStage: {
              _enum: ['PreVoting', 'Commit', 'Voting', 'Completed']
            },
            VoteType: { _enum: ['Binary', 'MultiOption', 'RankedChoice'] },
            TallyType: { _enum: ['OnePerson', 'OneCoin'] },
            VoteOutcome: '[u8; 32]',
            VotingTally: 'Option<Vec<(VoteOutcome, u128)>>',
            VoteData: {
              initiator: 'AccountId',
              stage: 'VoteStage',
              vote_type: 'VoteType',
              tally_type: 'TallyType',
              is_commit_reveal: 'bool'
            },
            Commitments: 'Vec<(AccountId, VoteOutcome)>',
            Reveals: 'Vec<(AccountId, Vec<VoteOutcome>)>',
            VoteRecord: {
              id: 'u64',
              commitments: 'Commitments',
              reveals: 'Reveals',
              data: 'VoteData',
              outcomes: 'Vec<VoteOutcome>'
            },
            'voting::VoteType': 'VoteType',
            'voting::TallyType': 'TallyType',
            'voting::Tally': 'VotingTally',
            CompactAssignments: 'CompactAssignmentsTo257',
            ContractExecResult: 'ContractExecResultTo255',
            RewardDestination: 'RewardDestinationTo257',
            RefCount: 'u32',
            AccountInfo: 'AccountInfoWithRefCount',
            Address: 'IndicesLookupSource',
            LookupSource: 'IndicesLookupSource'
          },
          typesAlias: { voting: { Tally: 'VotingTally' } }
        });
    },
    47523: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          types: {
            ProposalRecord: {
              index: 'u32',
              author: 'AccountId',
              stage: 'VoteStage',
              transition_time: 'u32',
              title: 'Text',
              contents: 'Text',
              vote_id: 'u64'
            },
            ProposalContents: 'Bytes',
            ProposalTitle: 'Bytes',
            Balance2: 'u128',
            VoteStage: {
              _enum: ['PreVoting', 'Commit', 'Voting', 'Completed']
            },
            VoteType: { _enum: ['Binary', 'MultiOption', 'RankedChoice'] },
            TallyType: { _enum: ['OnePerson', 'OneCoin'] },
            VoteOutcome: '[u8; 32]',
            VotingTally: 'Option<Vec<(VoteOutcome, u128)>>',
            VoteData: {
              initiator: 'AccountId',
              stage: 'VoteStage',
              vote_type: 'VoteType',
              tally_type: 'TallyType',
              is_commit_reveal: 'bool'
            },
            Commitments: 'Vec<(AccountId, VoteOutcome)>',
            Reveals: 'Vec<(AccountId, Vec<VoteOutcome>)>',
            VoteRecord: {
              id: 'u64',
              commitments: 'Commitments',
              reveals: 'Reveals',
              data: 'VoteData',
              outcomes: 'Vec<VoteOutcome>'
            },
            'voting::VoteType': 'VoteType',
            'voting::TallyType': 'TallyType',
            'voting::Tally': 'VotingTally',
            RefCount: 'u32',
            AccountInfo: 'AccountInfoWithRefCount',
            Address: 'IndicesLookupSource',
            LookupSource: 'IndicesLookupSource'
          },
          typesAlias: { voting: { Tally: 'VotingTally' } }
        });
    },
    41685: function (e, t, r) {
      'use strict';
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, 'default', {
                  enumerable: !0,
                  value: t
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                'default' !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return a(t, e), t;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      const s = o(r(81819)),
        i = {
          ...Object.values(s).reduce((e, { types: t }) => ({ ...e, ...t }), {}),
          AccountInfo: 'AccountInfoWithRefCount',
          Address: 'MultiAddress',
          LookupSource: 'MultiAddress'
        };
      t.default = { types: i };
    },
    98647: (e, t, r) => {
      'use strict';
      var n = r(14859);
      t.bC = void 0;
      var a = n(r(81260)),
        o = r(48183),
        s = r(56563),
        i = n(r(16241)),
        c = n(r(94473)),
        u = n(r(94222)),
        d = n(r(9042));
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      const f = { margin: i.default, runtime: c.default, synthetic: u.default },
        h = p(p(p({}, o.types), (0, s.typesFromDefs)(f)), {
          Keys: 'SessionKeys2'
        });
      d.default,
        (0, s.jsonrpcFromDefs)(f, p({}, o.rpc)),
        (0, s.typesAliasFromDefs)(f, p({}, o.typesAlias));
      const m = {
        spec: {
          laminar: {
            types: [...d.default].map((e) => ({
              minmax: e.minmax,
              types: p(p({}, h), e.types)
            }))
          }
        }
      };
      t.bC = m;
    },
    16241: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            poolState: {
              description: '',
              params: [
                { name: 'pool_id', type: 'u32' },
                { name: 'at', type: 'BlockHash', isOptional: !0 }
              ],
              type: 'MarginPoolState'
            },
            traderState: {
              description: '',
              params: [
                { name: 'who', type: 'AccountId' },
                { name: 'pool_id', type: 'LiquidityPoolId' },
                { name: 'at', type: 'BlockHash', isOptional: !0 }
              ],
              type: 'MarginTraderState'
            }
          },
          types: {
            MarginPoolState: {
              enp: 'FixedI128',
              ell: 'FixedI128',
              required_deposit: 'FixedI128'
            },
            MarginTraderState: {
              equity: 'FixedI128',
              margin_held: 'FixedI128',
              margin_level: 'FixedI128',
              free_margin: 'FixedI128',
              unrealized_pl: 'FixedI128'
            }
          }
        });
    },
    94473: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            CurrencyId: {
              _enum: [
                'LAMI',
                'AUSD',
                'DOT',
                'FEUR',
                'FJPY',
                'FBTC',
                'FETH',
                'FAUD',
                'FCAD',
                'FCHF',
                'FXAU',
                'FOIL',
                'FGBP'
              ]
            },
            Leverage: {
              _enum: [
                'LongTwo',
                'LongThree',
                'LongFive',
                'LongTen',
                'LongTwenty',
                'LongThirty',
                'LongFifty',
                'LongReserved',
                'ShortTwo',
                'ShortThree',
                'ShortFive',
                'ShortTen',
                'ShortTwenty',
                'ShortThirty',
                'ShortFifty',
                'ShortReserved'
              ]
            },
            SwapRate: { long: 'Rate', short: 'Rate' },
            CurrencyIdOf: 'CurrencyId',
            Amount: 'FixedI128',
            AmountOf: 'Amount',
            OracleKey: 'CurrencyId',
            OracleValue: 'Price',
            LiquidityPoolId: 'u32',
            Leverages: {
              _set: {
                _bitLength: 16,
                LongTwo: 1,
                LongThree: 2,
                LongFive: 4,
                LongTen: 8,
                LongTwenty: 16,
                LongThirty: 32,
                LongFifty: 64,
                LongReserved: 128,
                ShortTwo: 256,
                ShortThree: 512,
                ShortFive: 1024,
                ShortTen: 2048,
                ShortTwenty: 4096,
                ShortThirty: 8192,
                ShortFifty: 16384,
                ShortReserved: 32768
              }
            },
            TradingPair: { base: 'CurrencyId', quote: 'CurrencyId' },
            AccumulateConfig: { frequency: 'Moment', offset: 'Moment' },
            IdentityDepositBalanceOf: 'Balance',
            Pool: { owner: 'AccountId', balance: 'Balance' },
            MarginTradingPairOption: {
              enabled: 'bool',
              maxSpread: 'Option<FixedU128>',
              swapRate: 'SwapRate',
              accumulateConfig: 'Option<AccumulateConfig>'
            },
            MarginPoolOption: {
              additionalSwapRate: 'FixedI128',
              minLeveragedAmount: 'FixedU128'
            },
            MarginPoolTradingPairOption: {
              enabled: 'bool',
              bidSpread: 'Option<FixedU128>',
              askSpread: 'Option<FixedU128>',
              enabledTrades: 'Leverages'
            },
            SyntheticPoolCurrencyOption: {
              bidSpread: 'Option<FixedU128>',
              askSpread: 'Option<FixedU128>',
              additionalCollateralRatio: 'Option<Permill>',
              syntheticEnabled: 'bool'
            },
            MarginPosition: {
              owner: 'AccountId',
              poolId: 'LiquidityPoolId',
              pair: 'TradingPair',
              leverage: 'Leverage',
              leveragedHeld: 'FixedI128',
              leveragedDebits: 'FixedI128',
              openAccumulatedSwapRate: 'Rate',
              marginHeld: 'FixedI128'
            },
            SyntheticPosition: {
              collateral: 'FixedU128',
              synthetic: 'FixedU128'
            },
            RiskThreshold: { marginCall: 'Permill', stopOut: 'Permill' },
            PositionId: 'u64',
            Rate: 'FixedI128',
            PoolTraderInfo: {
              positionNum: 'PositionId',
              long: 'PairInfo',
              short: 'PairInfo'
            },
            PairInfo: { baseAmount: 'FixedI128', quoteAmount: 'FixedI128' },
            TradingPairRiskThreshold: {
              trader: 'Option<RiskThreshold>',
              enp: 'Option<RiskThreshold>',
              ell: 'Option<RiskThreshold>'
            },
            SyntheticTokensRatio: {
              extreme: 'Option<Permill>',
              liquidation: 'Option<Permill>',
              collateral: 'Option<Permill>'
            },
            PositionsSnapshot: {
              positionsCount: 'PositionId',
              long: 'LeveragedAmounts',
              short: 'LeveragedAmounts'
            },
            LeveragedAmounts: { held: 'FixedI128', debits: 'FixedI128' },
            LiquidityPoolIdentityInfo: {
              legalName: 'Vec<u8>',
              displayName: 'Vec<u8>',
              web: 'Vec<u8>',
              email: 'Vec<u8>',
              image_url: 'Vec<u8>'
            }
          },
          typesAlias: {
            marginProtocol: { Position: 'MarginPosition' },
            baseLiquidityPoolsForMargin: {
              IdentityInfo: 'LiquidityPoolIdentityInfo'
            },
            syntheticTokens: { Position: 'SyntheticPosition' },
            baseLiquidityPoolsForSynthetic: {
              IdentityInfo: 'LiquidityPoolIdentityInfo'
            }
          }
        });
    },
    94222: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            poolState: {
              description: '',
              params: [
                { name: 'pool_id', type: 'u32' },
                { name: 'currency_id', type: 'CurrencyId' }
              ],
              type: 'SyntheticPoolState'
            }
          },
          types: {
            SyntheticPoolState: {
              collateral_ratio: 'FixedI128',
              is_safe: 'boolean'
            }
          }
        });
    },
    9042: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      t.default = [
        { minmax: [0, 299], types: { RefCount: 'RefCountTo259' } },
        {
          minmax: [300, 399],
          types: {
            CurrencyId: {
              _enum: [
                'LAMI',
                'AUSD',
                'FEUR',
                'FJPY',
                'FBTC',
                'FETH',
                'FAUD',
                'FCAD',
                'FCHF',
                'FXAU',
                'FOIL',
                'FGBP'
              ]
            }
          }
        },
        { minmax: [400, void 0], types: {} }
      ];
    },
    15842: (e, t, r) => {
      'use strict';
      var n = r(48834).Buffer;
      t.Z = void 0;
      var a = r(22263);
      function o(e) {
        const t = n.alloc(2);
        return t.writeUInt16BE(e, 0), t;
      }
      const s = { data: n.alloc(0), dataLength: 0, sequence: 0 };
      t.Z = (e, t) => ({
        makeBlocks(r) {
          let a = n.concat([o(r.length), r]);
          const s = t - 5,
            i = Math.ceil(a.length / s);
          a = n.concat([a, n.alloc(i * s - a.length + 1).fill(0)]);
          const c = [];
          for (let t = 0; t < i; t++) {
            const r = n.alloc(5);
            r.writeUInt16BE(e, 0), r.writeUInt8(5, 2), r.writeUInt16BE(t, 3);
            const o = a.slice(t * s, (t + 1) * s);
            c.push(n.concat([r, o]));
          }
          return c;
        },
        reduceResponse(t, r) {
          let { data: o, dataLength: i, sequence: c } = t || s;
          if (r.readUInt16BE(0) !== e)
            throw new a.TransportError('Invalid channel', 'InvalidChannel');
          if (5 !== r.readUInt8(2))
            throw new a.TransportError('Invalid tag', 'InvalidTag');
          if (r.readUInt16BE(3) !== c)
            throw new a.TransportError('Invalid sequence', 'InvalidSequence');
          t || (i = r.readUInt16BE(5)), c++;
          const u = r.slice(t ? 5 : 7);
          return (
            (o = n.concat([o, u])),
            o.length > i && (o = o.slice(0, i)),
            { data: o, dataLength: i, sequence: c }
          );
        },
        getReducedResult(e) {
          if (e && e.dataLength === e.data.length) return e.data;
        }
      });
    },
    22263: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          AccountNameRequiredError: () => d,
          AccountNotSupported: () => l,
          AmountRequired: () => p,
          BluetoothRequired: () => f,
          BtcUnmatchedApp: () => h,
          CantOpenDevice: () => m,
          CantScanQRCode: () => Be,
          CashAddrNotSupported: () => y,
          CurrencyNotSupported: () => b,
          DBNotReset: () => $e,
          DBWrongPassword: () => We,
          DeviceAppVerifyNotSupported: () => g,
          DeviceGenuineSocketEarlyClose: () => v,
          DeviceHalted: () => _,
          DeviceInOSUExpected: () => k,
          DeviceNameInvalid: () => I,
          DeviceNotGenuineError: () => w,
          DeviceOnDashboardExpected: () => O,
          DeviceOnDashboardUnexpected: () => A,
          DeviceShouldStayInApp: () => Ne,
          DeviceSocketFail: () => P,
          DeviceSocketNoBulkStatus: () => S,
          DisconnectedDevice: () => x,
          DisconnectedDeviceDuringOperation: () => E,
          ETHAddressNonEIP: () => Ue,
          EnpointConfigError: () => T,
          EthAppPleaseEnableContractData: () => N,
          FeeEstimationFailed: () => C,
          FeeNotLoaded: () => Me,
          FeeRequired: () => Le,
          FeeTooHigh: () => Fe,
          FirmwareNotRecognized: () => j,
          FirmwareOrAppUpdateRequired: () => Ge,
          GasLessThanEstimate: () => ie,
          GenuineCheckFailed: () => He,
          HardResetFail: () => D,
          InvalidAddress: () => U,
          InvalidAddressBecauseDestinationIsAlsoSource: () => B,
          InvalidXRPTag: () => R,
          LatestMCUInstalledError: () => M,
          LedgerAPI4xx: () => qe,
          LedgerAPI5xx: () => Ze,
          LedgerAPIError: () => F,
          LedgerAPIErrorWithMessage: () => V,
          LedgerAPINotAvailable: () => K,
          MCUNotGenuineToDashboard: () => he,
          ManagerAppAlreadyInstalledError: () => H,
          ManagerAppDepInstallRequired: () => Z,
          ManagerAppDepUninstallRequired: () => G,
          ManagerAppRelyOnBTCError: () => q,
          ManagerDeviceLockedError: () => z,
          ManagerFirmwareNotEnoughSpaceError: () => W,
          ManagerNotEnoughSpaceError: () => $,
          ManagerUninstallBTCDep: () => Y,
          NetworkDown: () => X,
          NoAccessToCamera: () => ae,
          NoAddressesFound: () => J,
          NoDBPathGiven: () => ze,
          NotEnoughBalance: () => Q,
          NotEnoughBalanceBecauseDestinationNotCreated: () => ne,
          NotEnoughBalanceInParentAccount: () => te,
          NotEnoughBalanceToDelegate: () => ee,
          NotEnoughGas: () => oe,
          NotEnoughSpendableBalance: () => re,
          NotSupportedLegacyAddress: () => se,
          PairingFailed: () => Ke,
          PasswordIncorrectError: () => ue,
          PasswordsDontMatchError: () => ce,
          RecipientRequired: () => me,
          RecommendSubAccountsToEmpty: () => de,
          RecommendUndelegation: () => le,
          StatusCodes: () => Xe,
          SyncError: () => Ve,
          TimeoutTagged: () => pe,
          TransportError: () => Ye,
          TransportInterfaceNotAvailable: () => xe,
          TransportOpenUserCancelled: () => Se,
          TransportRaceCondition: () => Ee,
          TransportStatusError: () => Qe,
          TransportWebUSBGestureRequired: () => Te,
          UnavailableTezosOriginatedAccountReceive: () => ye,
          UnavailableTezosOriginatedAccountSend: () => be,
          UnexpectedBootloader: () => fe,
          UnknownMCU: () => L,
          UpdateFetchFileFail: () => ge,
          UpdateIncorrectHash: () => ve,
          UpdateIncorrectSig: () => we,
          UpdateYourApp: () => Oe,
          UserRefusedAddress: () => ke,
          UserRefusedAllowManager: () => Ie,
          UserRefusedDeviceNameChange: () => Ae,
          UserRefusedFirmwareUpdate: () => _e,
          UserRefusedOnDevice: () => Pe,
          WebsocketConnectionError: () => Ce,
          WebsocketConnectionFailed: () => je,
          WrongAppForCurrency: () => Re,
          WrongDeviceForAccount: () => De,
          addCustomErrorDeserializer: () => o,
          createCustomErrorClass: () => s,
          deserializeError: () => i,
          getAltStatusMessage: () => Je,
          serializeError: () => c
        });
      var n = {},
        a = {},
        o = function (e, t) {
          a[e] = t;
        },
        s = function (e) {
          var t = function (t, r) {
            Object.assign(this, r),
              (this.name = e),
              (this.message = t || e),
              (this.stack = new Error().stack);
          };
          return (t.prototype = new Error()), (n[e] = t), t;
        },
        i = function (e) {
          if ('object' == typeof e && e) {
            try {
              var t = JSON.parse(e.message);
              t.message && t.name && (e = t);
            } catch (e) {}
            var r = void 0;
            if ('string' == typeof e.name) {
              var o = e.name,
                c = a[o];
              if (c) r = c(e);
              else {
                var u = 'Error' === o ? Error : n[o];
                u ||
                  (console.warn("deserializing an unknown class '" + o + "'"),
                  (u = s(o))),
                  (r = Object.create(u.prototype));
                try {
                  for (var d in e) e.hasOwnProperty(d) && (r[d] = e[d]);
                } catch (e) {}
              }
            } else r = new Error(e.message);
            return (
              !r.stack &&
                Error.captureStackTrace &&
                Error.captureStackTrace(r, i),
              r
            );
          }
          return new Error(String(e));
        },
        c = function (e) {
          return e
            ? 'object' == typeof e
              ? u(e, [])
              : 'function' == typeof e
              ? '[Function: ' + (e.name || 'anonymous') + ']'
              : e
            : e;
        };
      function u(e, t) {
        var r = {};
        t.push(e);
        for (var n = 0, a = Object.keys(e); n < a.length; n++) {
          var o = a[n],
            s = e[o];
          'function' != typeof s &&
            (s && 'object' == typeof s
              ? -1 !== t.indexOf(e[o])
                ? (r[o] = '[Circular]')
                : (r[o] = u(e[o], t.slice(0)))
              : (r[o] = s));
        }
        return (
          'string' == typeof e.name && (r.name = e.name),
          'string' == typeof e.message && (r.message = e.message),
          'string' == typeof e.stack && (r.stack = e.stack),
          r
        );
      }
      var d = s('AccountNameRequired'),
        l = s('AccountNotSupported'),
        p = s('AmountRequired'),
        f = s('BluetoothRequired'),
        h = s('BtcUnmatchedApp'),
        m = s('CantOpenDevice'),
        y = s('CashAddrNotSupported'),
        b = s('CurrencyNotSupported'),
        g = s('DeviceAppVerifyNotSupported'),
        v = s('DeviceGenuineSocketEarlyClose'),
        w = s('DeviceNotGenuine'),
        O = s('DeviceOnDashboardExpected'),
        A = s('DeviceOnDashboardUnexpected'),
        k = s('DeviceInOSUExpected'),
        _ = s('DeviceHalted'),
        I = s('DeviceNameInvalid'),
        P = s('DeviceSocketFail'),
        S = s('DeviceSocketNoBulkStatus'),
        x = s('DisconnectedDevice'),
        E = s('DisconnectedDeviceDuringOperation'),
        T = s('EnpointConfig'),
        N = s('EthAppPleaseEnableContractData'),
        C = s('FeeEstimationFailed'),
        j = s('FirmwareNotRecognized'),
        D = s('HardResetFail'),
        R = s('InvalidXRPTag'),
        U = s('InvalidAddress'),
        B = s('InvalidAddressBecauseDestinationIsAlsoSource'),
        M = s('LatestMCUInstalledError'),
        L = s('UnknownMCU'),
        F = s('LedgerAPIError'),
        V = s('LedgerAPIErrorWithMessage'),
        K = s('LedgerAPINotAvailable'),
        H = s('ManagerAppAlreadyInstalled'),
        q = s('ManagerAppRelyOnBTC'),
        Z = s('ManagerAppDepInstallRequired'),
        G = s('ManagerAppDepUninstallRequired'),
        z = s('ManagerDeviceLocked'),
        W = s('ManagerFirmwareNotEnoughSpace'),
        $ = s('ManagerNotEnoughSpace'),
        Y = s('ManagerUninstallBTCDep'),
        X = s('NetworkDown'),
        J = s('NoAddressesFound'),
        Q = s('NotEnoughBalance'),
        ee = s('NotEnoughBalanceToDelegate'),
        te = s('NotEnoughBalanceInParentAccount'),
        re = s('NotEnoughSpendableBalance'),
        ne = s('NotEnoughBalanceBecauseDestinationNotCreated'),
        ae = s('NoAccessToCamera'),
        oe = s('NotEnoughGas'),
        se = s('NotSupportedLegacyAddress'),
        ie = s('GasLessThanEstimate'),
        ce = s('PasswordsDontMatch'),
        ue = s('PasswordIncorrect'),
        de = s('RecommendSubAccountsToEmpty'),
        le = s('RecommendUndelegation'),
        pe = s('TimeoutTagged'),
        fe = s('UnexpectedBootloader'),
        he = s('MCUNotGenuineToDashboard'),
        me = s('RecipientRequired'),
        ye = s('UnavailableTezosOriginatedAccountReceive'),
        be = s('UnavailableTezosOriginatedAccountSend'),
        ge = s('UpdateFetchFileFail'),
        ve = s('UpdateIncorrectHash'),
        we = s('UpdateIncorrectSig'),
        Oe = s('UpdateYourApp'),
        Ae = s('UserRefusedDeviceNameChange'),
        ke = s('UserRefusedAddress'),
        _e = s('UserRefusedFirmwareUpdate'),
        Ie = s('UserRefusedAllowManager'),
        Pe = s('UserRefusedOnDevice'),
        Se = s('TransportOpenUserCancelled'),
        xe = s('TransportInterfaceNotAvailable'),
        Ee = s('TransportRaceCondition'),
        Te = s('TransportWebUSBGestureRequired'),
        Ne = s('DeviceShouldStayInApp'),
        Ce = s('WebsocketConnectionError'),
        je = s('WebsocketConnectionFailed'),
        De = s('WrongDeviceForAccount'),
        Re = s('WrongAppForCurrency'),
        Ue = s('ETHAddressNonEIP'),
        Be = s('CantScanQRCode'),
        Me = s('FeeNotLoaded'),
        Le = s('FeeRequired'),
        Fe = s('FeeTooHigh'),
        Ve = s('SyncError'),
        Ke = s('PairingFailed'),
        He = s('GenuineCheckFailed'),
        qe = s('LedgerAPI4xx'),
        Ze = s('LedgerAPI5xx'),
        Ge = s('FirmwareOrAppUpdateRequired'),
        ze = s('NoDBPathGiven'),
        We = s('DBWrongPassword'),
        $e = s('DBNotReset');
      function Ye(e, t) {
        (this.name = 'TransportError'),
          (this.message = e),
          (this.stack = new Error().stack),
          (this.id = t);
      }
      (Ye.prototype = new Error()),
        o('TransportError', function (e) {
          return new Ye(e.message, e.id);
        });
      var Xe = {
        PIN_REMAINING_ATTEMPTS: 25536,
        INCORRECT_LENGTH: 26368,
        MISSING_CRITICAL_PARAMETER: 26624,
        COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009,
        SECURITY_STATUS_NOT_SATISFIED: 27010,
        CONDITIONS_OF_USE_NOT_SATISFIED: 27013,
        INCORRECT_DATA: 27264,
        NOT_ENOUGH_MEMORY_SPACE: 27268,
        REFERENCED_DATA_NOT_FOUND: 27272,
        FILE_ALREADY_EXISTS: 27273,
        INCORRECT_P1_P2: 27392,
        INS_NOT_SUPPORTED: 27904,
        CLA_NOT_SUPPORTED: 28160,
        TECHNICAL_PROBLEM: 28416,
        OK: 36864,
        MEMORY_PROBLEM: 37440,
        NO_EF_SELECTED: 37888,
        INVALID_OFFSET: 37890,
        FILE_NOT_FOUND: 37892,
        INCONSISTENT_FILE: 37896,
        ALGORITHM_NOT_SUPPORTED: 38020,
        INVALID_KCV: 38021,
        CODE_NOT_INITIALIZED: 38914,
        ACCESS_CONDITION_NOT_FULFILLED: 38916,
        CONTRADICTION_SECRET_CODE_STATUS: 38920,
        CONTRADICTION_INVALIDATION: 38928,
        CODE_BLOCKED: 38976,
        MAX_VALUE_REACHED: 38992,
        GP_AUTH_FAILED: 25344,
        LICENSING: 28482,
        HALTED: 28586
      };
      function Je(e) {
        switch (e) {
          case 26368:
            return 'Incorrect length';
          case 26624:
            return 'Missing critical parameter';
          case 27010:
            return 'Security not satisfied (dongle locked or have invalid access rights)';
          case 27013:
            return 'Condition of use not satisfied (denied by the user?)';
          case 27264:
            return 'Invalid data received';
          case 27392:
            return 'Invalid parameter received';
        }
        if (28416 <= e && e <= 28671) return 'Internal error, please report';
      }
      function Qe(e) {
        this.name = 'TransportStatusError';
        var t =
            Object.keys(Xe).find(function (t) {
              return Xe[t] === e;
            }) || 'UNKNOWN_ERROR',
          r = Je(e) || t,
          n = e.toString(16);
        (this.message = 'Ledger device: ' + r + ' (0x' + n + ')'),
          (this.stack = new Error().stack),
          (this.statusCode = e),
          (this.statusText = t);
      }
      (Qe.prototype = new Error()),
        o('TransportStatusError', function (e) {
          return new Qe(e.statusCode);
        });
    },
    12196: (e, t, r) => {
      'use strict';
      r.d(t, { Z: () => k });
      var n = r(22699),
        a = r.n(n),
        o = r(22263),
        s = r(48834).Buffer;
      class i {
        constructor() {
          (this.exchangeTimeout = 3e4),
            (this.unresponsiveTimeout = 15e3),
            (this.deviceModel = null),
            (this._events = new (a())()),
            (this.send = async (
              e,
              t,
              r,
              n,
              a = s.alloc(0),
              i = [o.StatusCodes.OK]
            ) => {
              if (a.length >= 256)
                throw new o.TransportError(
                  'data.length exceed 256 bytes limit. Got: ' + a.length,
                  'DataLengthTooBig'
                );
              const c = await this.exchange(
                  s.concat([s.from([e, t, r, n]), s.from([a.length]), a])
                ),
                u = c.readUInt16BE(c.length - 2);
              if (!i.some((e) => e === u)) throw new o.TransportStatusError(u);
              return c;
            }),
            (this.exchangeBusyPromise = void 0),
            (this.exchangeAtomicImpl = async (e) => {
              if (this.exchangeBusyPromise)
                throw new o.TransportRaceCondition(
                  'An action was already pending on the Ledger device. Please deny or reconnect.'
                );
              let t;
              const r = new Promise((e) => {
                t = e;
              });
              this.exchangeBusyPromise = r;
              let n = !1;
              const a = setTimeout(() => {
                (n = !0), this.emit('unresponsive');
              }, this.unresponsiveTimeout);
              try {
                const r = await e();
                return n && this.emit('responsive'), r;
              } finally {
                clearTimeout(a), t && t(), (this.exchangeBusyPromise = null);
              }
            }),
            (this._appAPIlock = null);
        }
        exchange(e) {
          throw new Error('exchange not implemented');
        }
        setScrambleKey(e) {}
        close() {
          return Promise.resolve();
        }
        on(e, t) {
          this._events.on(e, t);
        }
        off(e, t) {
          this._events.removeListener(e, t);
        }
        emit(e, ...t) {
          this._events.emit(e, ...t);
        }
        setDebugMode() {
          console.warn(
            'setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.'
          );
        }
        setExchangeTimeout(e) {
          this.exchangeTimeout = e;
        }
        setExchangeUnresponsiveTimeout(e) {
          this.unresponsiveTimeout = e;
        }
        static create(e = 3e3, t) {
          return new Promise((r, n) => {
            let a = !1;
            const s = this.listen({
                next: (t) => {
                  (a = !0),
                    s && s.unsubscribe(),
                    i && clearTimeout(i),
                    this.open(t.descriptor, e).then(r, n);
                },
                error: (e) => {
                  i && clearTimeout(i), n(e);
                },
                complete: () => {
                  i && clearTimeout(i),
                    a ||
                      n(
                        new o.TransportError(
                          this.ErrorMessage_NoDeviceFound,
                          'NoDeviceFound'
                        )
                      );
                }
              }),
              i = t
                ? setTimeout(() => {
                    s.unsubscribe(),
                      n(
                        new o.TransportError(
                          this.ErrorMessage_ListenTimeout,
                          'ListenTimeout'
                        )
                      );
                  }, t)
                : null;
          });
        }
        decorateAppAPIMethods(e, t, r) {
          for (let n of t) e[n] = this.decorateAppAPIMethod(n, e[n], e, r);
        }
        decorateAppAPIMethod(e, t, r, n) {
          return async (...a) => {
            const { _appAPIlock: s } = this;
            if (s)
              return Promise.reject(
                new o.TransportError(
                  'Ledger Device is busy (lock ' + s + ')',
                  'TransportLocked'
                )
              );
            try {
              return (
                (this._appAPIlock = e),
                this.setScrambleKey(n),
                await t.apply(r, a)
              );
            } finally {
              this._appAPIlock = null;
            }
          };
        }
      }
      (i.isSupported = void 0),
        (i.list = void 0),
        (i.listen = void 0),
        (i.open = void 0),
        (i.ErrorMessage_ListenTimeout = 'No Ledger device found (timeout)'),
        (i.ErrorMessage_NoDeviceFound = 'No Ledger device found');
      var c = r(15842),
        u = r(97699),
        d = r.n(u);
      const l = {
          blue: {
            id: 'blue',
            productName: 'Ledger Blue',
            productIdMM: 0,
            legacyUsbProductId: 0,
            usbOnly: !0,
            memorySize: 491520,
            blockSize: 4096,
            getBlockSize: (e) => 4096
          },
          nanoS: {
            id: 'nanoS',
            productName: 'Ledger Nano S',
            productIdMM: 16,
            legacyUsbProductId: 1,
            usbOnly: !0,
            memorySize: 327680,
            blockSize: 4096,
            getBlockSize: (e) => (d().lt(d().coerce(e), '2.0.0') ? 4096 : 2048)
          },
          nanoX: {
            id: 'nanoX',
            productName: 'Ledger Nano X',
            productIdMM: 64,
            legacyUsbProductId: 4,
            usbOnly: !1,
            memorySize: 2097152,
            blockSize: 4096,
            getBlockSize: (e) => 4096,
            bluetoothSpec: [
              {
                serviceUuid: 'd973f2e0-b19e-11e2-9e96-0800200c9a66',
                notifyUuid: 'd973f2e1-b19e-11e2-9e96-0800200c9a66',
                writeUuid: 'd973f2e2-b19e-11e2-9e96-0800200c9a66'
              },
              {
                serviceUuid: '13d63400-2c97-0004-0000-4c6564676572',
                notifyUuid: '13d63400-2c97-0004-0001-4c6564676572',
                writeUuid: '13d63400-2c97-0004-0002-4c6564676572'
              }
            ]
          }
        },
        p = Object.values(l),
        f = (e) => {
          const t = p.find((t) => t.legacyUsbProductId === e);
          if (t) return t;
          const r = e >> 8;
          return p.find((e) => e.productIdMM === r);
        },
        h = [],
        m = {};
      for (let e in l) {
        const t = l[e],
          { bluetoothSpec: r } = t;
        if (r)
          for (let e = 0; e < r.length; e++) {
            const n = r[e];
            h.push(n.serviceUuid),
              (m[n.serviceUuid] = m[n.serviceUuid.replace(/-/g, '')] = {
                deviceModel: t,
                ...n
              });
          }
      }
      let y = 0;
      const b = [],
        g = (e, t, r) => {
          const n = { type: e, id: String(++y), date: new Date() };
          t && (n.message = t),
            r && (n.data = r),
            (function (e) {
              for (let t = 0; t < b.length; t++)
                try {
                  b[t](e);
                } catch (e) {
                  console.error(e);
                }
            })(n);
        };
      'undefined' != typeof window &&
        (window.__ledgerLogsListen = (e) => (
          b.push(e),
          () => {
            const t = b.indexOf(e);
            -1 !== t && ((b[t] = b[b.length - 1]), b.pop());
          }
        ));
      const v = [{ vendorId: 11415 }];
      async function w() {
        return await navigator.usb.requestDevice({ filters: v });
      }
      async function O() {
        return (await navigator.usb.getDevices()).filter(
          (e) => 11415 === e.vendorId
        );
      }
      var A = r(48834).Buffer;
      class k extends i {
        constructor(e, t) {
          super(),
            (this.device = void 0),
            (this.deviceModel = void 0),
            (this.channel = Math.floor(65535 * Math.random())),
            (this.packetSize = 64),
            (this.interfaceNumber = void 0),
            (this._disconnectEmitted = !1),
            (this._emitDisconnect = (e) => {
              this._disconnectEmitted ||
                ((this._disconnectEmitted = !0), this.emit('disconnect', e));
            }),
            (this.exchange = (e) =>
              this.exchangeAtomicImpl(async () => {
                const { channel: t, packetSize: r } = this;
                g('apdu', '=> ' + e.toString('hex'));
                const n = (0, c.Z)(t, r),
                  a = n.makeBlocks(e);
                for (let e = 0; e < a.length; e++)
                  await this.device.transferOut(3, a[e]);
                let o, s;
                for (; !(o = n.getReducedResult(s)); ) {
                  const e = await this.device.transferIn(3, r),
                    t = A.from(e.data.buffer);
                  s = n.reduceResponse(s, t);
                }
                return g('apdu', '<= ' + o.toString('hex')), o;
              }).catch((e) => {
                if (e && e.message && e.message.includes('disconnected'))
                  throw (
                    (this._emitDisconnect(e),
                    new o.DisconnectedDeviceDuringOperation(e.message))
                  );
                throw e;
              })),
            (this.device = e),
            (this.interfaceNumber = t),
            (this.deviceModel = f(e.productId));
        }
        static async request() {
          const e = await w();
          return k.open(e);
        }
        static async openConnected() {
          const e = await O();
          return 0 === e.length ? null : k.open(e[0]);
        }
        static async open(e) {
          await e.open(),
            null === e.configuration && (await e.selectConfiguration(1)),
            await _(e);
          const t = e.configurations[0].interfaces.find(({ alternates: e }) =>
            e.some((e) => 255 === e.interfaceClass)
          );
          if (!t)
            throw new o.TransportInterfaceNotAvailable(
              'No WebUSB interface found for your Ledger device. Please upgrade firmware or contact techsupport.'
            );
          const r = t.interfaceNumber;
          try {
            await e.claimInterface(r);
          } catch (t) {
            throw (
              (await e.close(), new o.TransportInterfaceNotAvailable(t.message))
            );
          }
          const n = new k(e, r),
            a = (t) => {
              e === t.device &&
                (navigator.usb.removeEventListener('disconnect', a),
                n._emitDisconnect(new o.DisconnectedDevice()));
            };
          return navigator.usb.addEventListener('disconnect', a), n;
        }
        async close() {
          await this.exchangeBusyPromise,
            await this.device.releaseInterface(this.interfaceNumber),
            await _(this.device),
            await this.device.close();
        }
        setScrambleKey() {}
      }
      async function _(e) {
        try {
          await e.reset();
        } catch (e) {
          console.warn(e);
        }
      }
      (k.isSupported = () =>
        Promise.resolve(
          !!navigator &&
            !!navigator.usb &&
            'function' == typeof navigator.usb.getDevices
        )),
        (k.list = O),
        (k.listen = (e) => {
          let t = !1;
          return (
            (async function () {
              const e = await O();
              return e.length > 0 ? e[0] : w();
            })().then(
              (r) => {
                if (!t) {
                  const t = f(r.productId);
                  e.next({ type: 'add', descriptor: r, deviceModel: t }),
                    e.complete();
                }
              },
              (t) => {
                window.DOMException &&
                t instanceof window.DOMException &&
                18 === t.code
                  ? e.error(new o.TransportWebUSBGestureRequired(t.message))
                  : e.error(new o.TransportOpenUserCancelled(t.message));
              }
            ),
            {
              unsubscribe: function () {
                t = !0;
              }
            }
          );
        });
    },
    21386: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            CallOf: 'Call',
            DispatchTime: {
              _enum: { At: 'BlockNumber', After: 'BlockNumber' }
            },
            ScheduleTaskIndex: 'u32',
            DelayedOrigin: { delay: 'BlockNumber', origin: 'PalletsOrigin' }
          }
        });
    },
    13915: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            StorageValue: 'Vec<u8>',
            GraduallyUpdate: {
              key: 'StorageKey',
              targetValue: 'StorageValue',
              perBlock: 'StorageValue'
            },
            StorageKeyBytes: 'Vec<u8>',
            StorageValueBytes: 'Vec<u8>'
          }
        });
    },
    48183: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.typesAlias = t.rpc = t.types = void 0);
      var a = n(r(21386)),
        o = n(r(13915)),
        s = n(r(61006)),
        i = n(r(62680)),
        c = n(r(46955)),
        u = n(r(62857)),
        d = n(r(91496)),
        l = n(r(49222)),
        p = r(56563),
        f = n(r(35621));
      const h = {
          authority: a.default,
          graduallyUpdates: o.default,
          oracle: s.default,
          tokens: u.default,
          traits: d.default,
          vesting: f.default,
          rewards: i.default,
          xTokens: l.default,
          runtime: c.default
        },
        m = (0, p.typesFromDefs)(h);
      t.types = m;
      const y = (0, p.jsonrpcFromDefs)(h);
      t.rpc = y;
      const b = (0, p.typesAliasFromDefs)(h);
      t.typesAlias = b;
    },
    61006: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            getValue: {
              description: 'Retrieves the oracle value for a given key.',
              params: [
                { name: 'providerId', type: 'RpcDataProviderId' },
                { name: 'key', type: 'OracleKey' }
              ],
              type: 'Option<TimestampedValue>'
            },
            getAllValues: {
              description: 'Retrieves all oracle values.',
              params: [{ name: 'providerId', type: 'RpcDataProviderId' }],
              type: 'Vec<(OracleKey, Option<TimestampedValue>)>'
            }
          },
          types: {
            RpcDataProviderId: 'Text',
            DataProviderId: 'u8',
            TimestampedValue: { value: 'OracleValue', timestamp: 'Moment' },
            TimestampedValueOf: 'TimestampedValue',
            OrderedSet: 'Vec<AccountId>'
          }
        });
    },
    62680: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            PoolInfo: {
              totalShares: 'Compact<Share>',
              totalRewards: 'Compact<Balance>',
              totalWithdrawnRewards: 'Compact<Balance>'
            },
            Share: 'u128'
          }
        });
    },
    46955: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = { rpc: {}, types: { OracleValue: 'FixedU128' } });
    },
    62857: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            OrmlAccountData: {
              free: 'Balance',
              frozen: 'Balance',
              reserved: 'Balance'
            },
            OrmlBalanceLock: { amount: 'Balance', id: 'LockIdentifier' }
          },
          typesAlias: {
            tokens: {
              AccountData: 'OrmlAccountData',
              BalanceLock: 'OrmlBalanceLock'
            }
          }
        });
    },
    91496: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            AuctionInfo: {
              bid: 'Option<(AccountId, Balance)>',
              start: 'BlockNumber',
              end: 'Option<BlockNumber>'
            },
            DelayedDispatchTime: {
              _enum: { At: 'BlockNumber', After: 'BlockNumber' }
            },
            DispatchId: 'u32',
            Price: 'FixedU128'
          }
        });
    },
    56563: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'jsonrpcFromDefs', {
          enumerable: !0,
          get: function () {
            return a.default;
          }
        }),
        Object.defineProperty(t, 'typesAliasFromDefs', {
          enumerable: !0,
          get: function () {
            return o.default;
          }
        }),
        Object.defineProperty(t, 'typesFromDefs', {
          enumerable: !0,
          get: function () {
            return s.default;
          }
        });
      var a = n(r(90640)),
        o = n(r(5195)),
        s = n(r(19579));
    },
    90640: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = {}) {
          return (
            Object.keys(e)
              .filter((t) => {
                var r;
                return (
                  0 !==
                  Object.keys(
                    (null === (r = e[t]) || void 0 === r ? void 0 : r.rpc) || {}
                  ).length
                );
              })
              .forEach((r) => {
                (t[r] = {}),
                  Object.entries(e[r].rpc).forEach(([e, n]) => {
                    const a = !!n.pubsub;
                    t[r][e] = s(
                      s({}, n),
                      {},
                      {
                        isSubscription: a,
                        jsonrpc: `${r}_${e}`,
                        method: e,
                        section: r
                      }
                    );
                  });
              }),
            t
          );
        });
      var a = n(r(81260));
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
    },
    5195: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = {}) {
          return Object.values(e).reduce(
            (e, { typesAlias: t }) => s(s({}, e), t),
            t
          );
        });
      var a = n(r(81260));
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
    },
    19579: (e, t, r) => {
      'use strict';
      var n = r(14859);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = {}) {
          return Object.values(e).reduce(
            (e, { types: t }) => s(s({}, e), t),
            t
          );
        });
      var a = n(r(81260));
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
    },
    35621: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            OrmlVestingSchedule: {
              start: 'BlockNumber',
              period: 'BlockNumber',
              periodCount: 'u32',
              perPeriod: 'Compact<Balance>'
            },
            VestingScheduleOf: 'OrmlVestingSchedule'
          }
        });
    },
    49222: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            ChainId: { _enum: { RelayChain: 'Null', ParaChain: 'ParaId' } },
            XCurrencyId: { chainId: 'ChainId', currencyId: 'Vec<u8>' }
          }
        });
    },
    32363: (e, t, r) => {
      'use strict';
      r.d(t, { LW: () => l, vK: () => h, $y: () => f, R0: () => m });
      var n = r(51119),
        a = r(12733),
        o = r(87602);
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      const c = window;
      function u() {
        return 0 !== Object.keys(c.injectedWeb3).length;
      }
      function d(e) {
        throw new Error(
          `${e}: web3Enable(originName) needs to be called before ${e}`
        );
      }
      c.injectedWeb3 = c.injectedWeb3 || {};
      let l = u(),
        p = null;
      function f(e) {
        if (!e)
          throw new Error(
            'You must pass a name for your app to the web3Enable function'
          );
        var t;
        return (
          (t = () =>
            (function (e) {
              return Promise.all(
                Object.entries(c.injectedWeb3).map(
                  ([t, { enable: r, version: n }]) =>
                    Promise.all([
                      Promise.resolve({ name: t, version: n }),
                      r(e).catch((e) => {
                        console.error(`Error initializing ${t}: ${e.message}`);
                      })
                    ])
                )
              );
            })(e)
              .then((e) =>
                e
                  .filter((e) => !!e[1])
                  .map(
                    ([e, t]) => (
                      t.accounts.subscribe ||
                        (t.accounts.subscribe = (e) => (
                          t.accounts.get().then(e).catch(console.error),
                          () => {}
                        )),
                      i(i({}, e), t)
                    )
                  )
              )
              .catch(() => [])
              .then((e) => {
                const t = e.map(({ name: e, version: t }) => `${e}/${t}`);
                return (
                  (l = u()),
                  console.log(
                    `web3Enable: Enabled ${e.length} extension${
                      1 !== e.length ? 's' : ''
                    }: ${t.join(', ')}`
                  ),
                  e
                );
              })),
          (p = new Promise((e) => {
            'complete' === document.readyState
              ? e(t())
              : window.addEventListener('load', () => e(t()));
          })),
          p
        );
      }
      async function h({ ss58Format: e } = {}) {
        if (!p) return d('web3Accounts');
        const t = [],
          r = await p;
        (
          await Promise.all(
            r.map(async ({ accounts: t, name: r }) => {
              try {
                return (function (e, t, r) {
                  return t.map(({ address: t, genesisHash: n, name: s }) => ({
                    address: (0, a.m)((0, o.m)(t), r),
                    meta: { genesisHash: n, name: s, source: e }
                  }));
                })(r, await t.get(), e);
              } catch (e) {
                return [];
              }
            })
          )
        ).forEach((e) => {
          t.push(...e);
        });
        const n = t.map(({ address: e }) => e);
        return (
          console.log(
            `web3Accounts: Found ${t.length} address${
              1 !== t.length ? 'es' : ''
            }: ${n.join(', ')}`
          ),
          t
        );
      }
      async function m(e) {
        if (!p) return d('web3FromSource');
        const t = await p,
          r = e && t.find(({ name: t }) => t === e);
        if (!r)
          throw new Error(`web3FromSource: Unable to find an injected ${e}`);
        return r;
      }
    },
    77289: (e, t, r) => {
      'use strict';
      r.d(t, { g: () => n });
      const n =
        'bottom drive obey lake curtain smoke basket hold race lonely fit walk';
    },
    5442: (e, t, r) => {
      'use strict';
      r.d(t, { Y: () => j });
      var n = r(89539),
        a = r(38879),
        o = r(71555),
        s = r(85818),
        i = r(14842),
        c = r(25754),
        u = r(8431),
        d = r(47174),
        l = r(38340),
        p = r(37703),
        f = r(87602),
        h = r(72580),
        m = r(12733),
        y = r(78263),
        b = r(58456),
        g = r(34394),
        v = r(79718),
        w = r(98932),
        O = r(59205),
        A = r(77289),
        k = r(99026),
        _ = r(20987),
        I = r(68631),
        P = r(90791),
        S = (0, a.Z)('map');
      class x {
        constructor() {
          Object.defineProperty(this, S, { writable: !0, value: {} });
        }
        add(e) {
          return ((0, n.Z)(this, S)[S][(0, f.m)(e.address).toString()] = e), e;
        }
        all() {
          return Object.values((0, n.Z)(this, S)[S]);
        }
        get(e) {
          const t = (0, n.Z)(this, S)[S][(0, f.m)(e).toString()];
          return (
            (0, s.h)(
              t,
              () =>
                `Unable to retrieve keypair '${
                  (0, _.U)(e) || (0, i.v)(e) ? (0, I.c)((0, P.Y)(e)) : e
                }'`
            ),
            t
          );
        }
        remove(e) {
          delete (0, n.Z)(this, S)[S][(0, f.m)(e).toString()];
        }
      }
      const E = {
        ecdsa: (e) => (0, d.M)(e),
        ed25519: (e) => (0, l.Q)(e),
        ethereum: (e) => (0, d.M)(e),
        sr25519: (e) => (0, p.p)(e)
      };
      var T = (0, a.Z)('pairs'),
        N = (0, a.Z)('type'),
        C = (0, a.Z)('ss58');
      class j {
        constructor(e = {}) {
          Object.defineProperty(this, T, { writable: !0, value: void 0 }),
            Object.defineProperty(this, N, { writable: !0, value: void 0 }),
            Object.defineProperty(this, C, { writable: !0, value: void 0 }),
            (this.decodeAddress = f.m),
            (this.encodeAddress = (e, t) =>
              'ethereum' === this.type
                ? (0, h.K)(e)
                : (0, m.m)(e, (0, o.o)(t) ? (0, n.Z)(this, C)[C] : t)),
            (e.type = e.type || 'ed25519'),
            (0, s.h)(
              ['ecdsa', 'ethereum', 'ed25519', 'sr25519'].includes(
                e.type || 'undefined'
              ),
              () =>
                `Expected a keyring type of either 'ed25519', 'sr25519', 'ethereum' or 'ecdsa', found '${
                  e.type || 'unknown'
                }`
            ),
            ((0, n.Z)(this, T)[T] = new x()),
            ((0, n.Z)(this, C)[C] = e.ss58Format),
            ((0, n.Z)(this, N)[N] = e.type);
        }
        get pairs() {
          return this.getPairs();
        }
        get publicKeys() {
          return this.getPublicKeys();
        }
        get type() {
          return (0, n.Z)(this, N)[N];
        }
        addPair(e) {
          return (0, n.Z)(this, T)[T].add(e);
        }
        addFromAddress(e, t = {}, r = null, n = this.type, a, o) {
          const s = this.decodeAddress(e, a);
          return this.addPair(
            (0, k.s)(
              { toSS58: this.encodeAddress, type: n },
              { publicKey: s, secretKey: new Uint8Array() },
              t,
              r,
              o
            )
          );
        }
        addFromJson(e, t) {
          return this.addPair(this.createFromJson(e, t));
        }
        addFromMnemonic(e, t = {}, r = this.type) {
          return this.addFromUri(e, t, r);
        }
        addFromPair(e, t = {}, r = this.type) {
          return this.addPair(this.createFromPair(e, t, r));
        }
        addFromSeed(e, t = {}, r = this.type) {
          return this.addPair(
            (0, k.s)({ toSS58: this.encodeAddress, type: r }, E[r](e), t, null)
          );
        }
        addFromUri(e, t = {}, r = this.type) {
          return this.addPair(this.createFromUri(e, t, r));
        }
        createFromJson(
          {
            address: e,
            encoded: t,
            encoding: { content: r, type: n, version: a },
            meta: o
          },
          u
        ) {
          (0, s.h)(
            '3' !== a || 'pkcs8' === r[0],
            () => `Unable to decode non-pkcs8 type, [${r.join(',')}] found}`
          );
          const d = '0' !== a && Array.isArray(r) ? r[1] : this.type,
            l = Array.isArray(n) ? n : [n];
          (0, s.h)(
            ['ed25519', 'sr25519', 'ecdsa', 'ethereum'].includes(d),
            () => `Unknown crypto type ${d}`
          );
          const p = (0, i.v)(e) ? (0, c.G)(e) : this.decodeAddress(e, u),
            f = (0, i.v)(t) ? (0, c.G)(t) : (0, y.t)(t);
          return (0, k.s)(
            { toSS58: this.encodeAddress, type: d },
            { publicKey: p, secretKey: new Uint8Array() },
            o,
            f,
            l
          );
        }
        createFromPair(e, t = {}, r = this.type) {
          return (0, k.s)({ toSS58: this.encodeAddress, type: r }, e, t, null);
        }
        createFromUri(e, t = {}, r = this.type) {
          const n = e.startsWith('//') ? `${A.g}${e}` : e,
            { derivePath: a, password: o, path: d, phrase: l } = (0, b.Q)(n);
          let p;
          const f = (0, i.v)(l, 256);
          if (f) p = (0, c.G)(l);
          else {
            const e = l,
              t = e.split(' ');
            [12, 15, 18, 21, 24].includes(t.length)
              ? (p =
                  'ethereum' === r ? (0, g.r)(l, '', !1, 64) : (0, v.S)(l, o))
              : ((0, s.h)(
                  e.length <= 32,
                  'specified phrase is not a valid mnemonic and is invalid as a raw seed at > 32 bytes'
                ),
                (p = (0, u.d)(e.padEnd(32))));
          }
          const h =
            'ethereum' === r
              ? f
                ? E[r](p)
                : (0, w.d)(p, a.substring(1))
              : (0, O.p)(E[r](p), d, r);
          return (0, k.s)({ toSS58: this.encodeAddress, type: r }, h, t, null);
        }
        getPair(e) {
          return (0, n.Z)(this, T)[T].get(e);
        }
        getPairs() {
          return (0, n.Z)(this, T)[T].all();
        }
        getPublicKeys() {
          return (0, n.Z)(this, T)
            [T].all()
            .map(({ publicKey: e }) => e);
        }
        removePair(e) {
          (0, n.Z)(this, T)[T].remove(e);
        }
        setSS58Format(e) {
          (0, n.Z)(this, C)[C] = e;
        }
        toJson(e, t) {
          return (0, n.Z)(this, T)[T].get(e).toJson(t);
        }
      }
    },
    99026: (e, t, r) => {
      'use strict';
      r.d(t, { s: () => Z });
      var n = r(51119),
        a = r(87672),
        o = r(85818),
        s = r(90791),
        i = r(68631),
        c = r(23050),
        u = r(47174),
        d = r(38340),
        l = r(37703),
        p = r(1815),
        f = r(92183),
        h = r(79275),
        m = r(13085),
        y = r(80013),
        b = r(62161),
        g = r(72580),
        v = r(67584),
        w = r(59205),
        O = r(78987),
        A = r(20982),
        k = r(39883),
        _ = r(31131),
        I = r(71555),
        P = r(53139);
      const S = new Uint8Array([161, 35, 3, 33, 0]),
        x = new Uint8Array([
          48,
          83,
          2,
          1,
          1,
          48,
          5,
          6,
          3,
          43,
          101,
          112,
          4,
          34,
          4,
          32
        ]),
        E = x.length;
      var T = r(66255),
        N = r(92098),
        C = r(92249),
        j = r(93374);
      function D(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function U(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      const M = new Uint8Array(),
        L = { ecdsa: u.M, ed25519: d.Q, ethereum: u.M, sr25519: l.p },
        F = {
          ecdsa: new Uint8Array([2]),
          ed25519: new Uint8Array([0]),
          ethereum: new Uint8Array([2]),
          sr25519: new Uint8Array([1])
        },
        V = {
          ecdsa: (e, t) => (0, p.y)(e, t, 'blake2'),
          ed25519: f.b,
          ethereum: (e, t) => (0, p.y)(e, t, 'keccak'),
          sr25519: h.U
        },
        K = {
          ecdsa: (e) => (e.length > 32 ? (0, m.b)(e) : e),
          ed25519: (e) => e,
          ethereum: (e) => (0, y.i)((0, b.o)(e)),
          sr25519: (e) => e
        };
      function H(e) {
        return !e || 0 === e.length || e.every((e) => 0 === e);
      }
      function q(e, t, r) {
        return (0, m.b)((0, a.e)(t || '', r || '', e));
      }
      function Z(
        { toSS58: e, type: t },
        { publicKey: r, secretKey: n },
        u = {},
        d = null,
        l
      ) {
        const p = (e, a) => {
            const s = (function (e, t, r) {
              const n = Array.isArray(r) || (0, I.o)(r) ? r : [r],
                a = (0, P.g)(t, e, n),
                s = a.subarray(0, x.length);
              (0, o.h)((0, c.S)(s, x), 'Invalid Pkcs8 header found in body');
              let i = a.subarray(E, E + 64),
                u = E + 64,
                d = a.subarray(u, u + S.length);
              (0, c.S)(d, S) ||
                ((u = E + 32),
                (i = a.subarray(E, u)),
                (d = a.subarray(u, u + S.length)),
                (0, o.h)(
                  (0, c.S)(d, S),
                  'Invalid Pkcs8 divider found in body'
                ));
              const l = u + S.length;
              return { publicKey: a.subarray(l, l + 32), secretKey: i };
            })(e, a || d, l);
            if (64 === s.secretKey.length) (r = s.publicKey), (n = s.secretKey);
            else {
              const e = L[t](s.secretKey);
              (r = e.publicKey), (n = e.secretKey);
            }
          },
          f = (e) => (
            H(n) && d && p(e, d),
            (d = (function ({ publicKey: e, secretKey: t }, r) {
              (0, o.h)(t, 'Expected a valid secretKey to be passed to encode');
              const n = (0, a.e)(x, t, S, e);
              if (!r) return n;
              const { params: s, password: i, salt: c } = (0, T.z)(r),
                { encrypted: u, nonce: d } = (0, N.V)(n, i.subarray(0, 32));
              return (0, a.e)((0, C.e)(c, s), d, u);
            })({ publicKey: r, secretKey: n }, e)),
            (l = void 0),
            d
          ),
          h = () => {
            const n = K[t](r);
            return 'ethereum' === t ? (0, g.K)(n) : e(n);
          };
        return {
          get address() {
            return h();
          },
          get addressRaw() {
            const e = K[t](r);
            return 'ethereum' === t ? e.slice(-20) : e;
          },
          get isLocked() {
            return H(n);
          },
          get meta() {
            return u;
          },
          get publicKey() {
            return r;
          },
          get type() {
            return t;
          },
          decodePkcs8: p,
          derive: (a, s) => {
            (0, o.h)('ethereum' !== t, 'Unable to derive on this keypair'),
              (0, o.h)(!H(n), 'Cannot derive on a locked keypair');
            const { path: i } = (0, v.c)(a),
              c = (0, w.p)({ publicKey: r, secretKey: n }, i, t);
            return Z({ toSS58: e, type: t }, c, s, null);
          },
          encodePkcs8: (e) => f(e),
          lock: () => {
            n = new Uint8Array();
          },
          setMeta: (e) => {
            u = B(B({}, u), e);
          },
          sign: (e, i = {}) => (
            (0, o.h)(!H(n), 'Cannot sign with a locked key pair'),
            (0, a.e)(
              i.withType ? F[t] : M,
              V[t]((0, s.Y)(e), { publicKey: r, secretKey: n })
            )
          ),
          toJson: (e) => {
            const n = ['ecdsa', 'ethereum'].includes(t)
              ? (0, i.c)((0, O.R)(r))
              : h();
            return (function (e, { address: t, meta: r }, n, a) {
              return R(
                R({}, (0, j.T)(n, ['pkcs8', e], a)),
                {},
                { address: t, meta: r }
              );
            })(t, { address: n, meta: u }, f(e), !!e);
          },
          unlock: (e) => p(e),
          verify: (e, r, n) => (0, A.D)(e, r, K[t]((0, s.Y)(n))).isValid,
          vrfSign: (e, i, c) => {
            if (
              ((0, o.h)(!H(n), 'Cannot sign with a locked key pair'),
              'sr25519' === t)
            )
              return (0, k.$)(e, { secretKey: n }, i, c);
            const u = V[t]((0, s.Y)(e), { publicKey: r, secretKey: n });
            return (0, a.e)(q(u, i, c), u);
          },
          vrfVerify: (e, n, o, i, u) => {
            const d = K[t]((0, s.Y)(o));
            return 'sr25519' === t
              ? (0, _.n)(e, n, r, i, u)
              : (0, A.D)(e, (0, a.e)(F[t], n.subarray(32)), d).isValid &&
                  (0, c.S)(n.subarray(0, 32), q(n.subarray(32), i, u));
          }
        };
      }
    },
    45648: (e, t, r) => {
      'use strict';
      r.d(t, { cZ: () => c, ZP: () => u });
      const n = {
          'dock-mainnet': [
            '0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9'
          ],
          edgeware: [
            '0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b'
          ],
          hydradx: [
            '0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047',
            '0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2'
          ],
          kulupu: [
            '0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba'
          ],
          kusama: [
            '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
            '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
            '0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf'
          ],
          plasm: [
            '0x3e86364d4b4894021cb2a0390bcf2feb5517d5292f2de2bb9404227e908b0b8b'
          ],
          polkadot: [
            '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3'
          ],
          polymesh: [
            '0x9deeb940c92ae02111c3bd5baca89970384f4c9849f02a1b2e53e66414d30f9f'
          ],
          subsocial: [
            '0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8'
          ]
        },
        a = { kusama: 'polkadot', polkadot: 'polkadot' },
        o = { 'dock-mainnet': 594, kusama: 434, polkadot: 354, polymesh: 595 },
        s = {
          'dock-testnet': !0,
          jupiter: !0,
          'mathchain-testnet': !0,
          'zero-alphaville': !0
        },
        i = [0, 2, 42],
        c = [
          {
            decimals: [10],
            displayName: 'Polkadot Relay Chain',
            network: 'polkadot',
            prefix: 0,
            standardAccount: '*25519',
            symbols: ['DOT'],
            website: 'https://polkadot.network'
          },
          {
            decimals: null,
            displayName:
              'Bare 32-bit Schnorr/Ristretto (S/R 25519) public key.',
            network: null,
            prefix: 1,
            standardAccount: null,
            symbols: null,
            website: null
          },
          {
            decimals: [12],
            displayName: 'Kusama Relay Chain',
            network: 'kusama',
            prefix: 2,
            standardAccount: '*25519',
            symbols: ['KSM'],
            website: 'https://kusama.network'
          },
          {
            decimals: null,
            displayName: 'Bare 32-bit Ed25519 public key.',
            network: null,
            prefix: 3,
            standardAccount: null,
            symbols: null,
            website: null
          },
          {
            decimals: null,
            displayName: 'Katal Chain',
            network: 'katalchain',
            prefix: 4,
            standardAccount: '*25519',
            symbols: null,
            website: null
          },
          {
            decimals: [15],
            displayName: 'Plasm Network',
            network: 'plasm',
            prefix: 5,
            standardAccount: '*25519',
            symbols: ['PLM'],
            website: 'https://plasmnet.io'
          },
          {
            decimals: [12],
            displayName: 'Bifrost',
            network: 'bifrost',
            prefix: 6,
            standardAccount: '*25519',
            symbols: ['BNC'],
            website: 'https://bifrost.finance/'
          },
          {
            decimals: [18],
            displayName: 'Edgeware',
            network: 'edgeware',
            prefix: 7,
            standardAccount: '*25519',
            symbols: ['EDG'],
            website: 'https://edgewa.re'
          },
          {
            decimals: [18],
            displayName: 'Acala Karura Canary',
            network: 'karura',
            prefix: 8,
            standardAccount: '*25519',
            symbols: ['KAR'],
            website: 'https://acala.network/'
          },
          {
            decimals: [18],
            displayName: 'Laminar Reynolds Canary',
            network: 'reynolds',
            prefix: 9,
            standardAccount: '*25519',
            symbols: ['REY'],
            website: 'http://laminar.network/'
          },
          {
            decimals: [18],
            displayName: 'Acala',
            network: 'acala',
            prefix: 10,
            standardAccount: '*25519',
            symbols: ['ACA'],
            website: 'https://acala.network/'
          },
          {
            decimals: [18],
            displayName: 'Laminar',
            network: 'laminar',
            prefix: 11,
            standardAccount: '*25519',
            symbols: ['LAMI'],
            website: 'http://laminar.network/'
          },
          {
            decimals: [6],
            displayName: 'Polymesh',
            network: 'polymesh',
            prefix: 12,
            standardAccount: '*25519',
            symbols: ['POLYX'],
            website: 'https://polymath.network/'
          },
          {
            decimals: null,
            displayName: 'SubstraTEE',
            network: 'substratee',
            prefix: 13,
            standardAccount: '*25519',
            symbols: null,
            website: 'https://www.substratee.com'
          },
          {
            decimals: [0],
            displayName: 'Totem',
            network: 'totem',
            prefix: 14,
            standardAccount: '*25519',
            symbols: ['XTX'],
            website: 'https://totemaccounting.com'
          },
          {
            decimals: [12],
            displayName: 'Synesthesia',
            network: 'synesthesia',
            prefix: 15,
            standardAccount: '*25519',
            symbols: ['SYN'],
            website: 'https://synesthesia.network/'
          },
          {
            decimals: [12],
            displayName: 'Kulupu',
            network: 'kulupu',
            prefix: 16,
            standardAccount: '*25519',
            symbols: ['KLP'],
            website: 'https://kulupu.network/'
          },
          {
            decimals: null,
            displayName: 'Dark Mainnet',
            network: 'dark',
            prefix: 17,
            standardAccount: '*25519',
            symbols: null,
            website: null
          },
          {
            decimals: [9, 9],
            displayName: 'Darwinia Network',
            network: 'darwinia',
            prefix: 18,
            standardAccount: '*25519',
            symbols: ['RING', 'KTON'],
            website: 'https://darwinia.network/'
          },
          {
            decimals: [12],
            displayName: 'GeekCash',
            network: 'geek',
            prefix: 19,
            standardAccount: '*25519',
            symbols: ['GEEK'],
            website: 'https://geekcash.org'
          },
          {
            decimals: [12],
            displayName: 'Stafi',
            network: 'stafi',
            prefix: 20,
            standardAccount: '*25519',
            symbols: ['FIS'],
            website: 'https://stafi.io'
          },
          {
            decimals: [6],
            displayName: 'Dock Testnet',
            network: 'dock-testnet',
            prefix: 21,
            standardAccount: '*25519',
            symbols: ['DCK'],
            website: 'https://dock.io'
          },
          {
            decimals: [6],
            displayName: 'Dock Mainnet',
            network: 'dock-mainnet',
            prefix: 22,
            standardAccount: '*25519',
            symbols: ['DCK'],
            website: 'https://dock.io'
          },
          {
            decimals: null,
            displayName: 'ShiftNrg',
            network: 'shift',
            prefix: 23,
            standardAccount: '*25519',
            symbols: null,
            website: null
          },
          {
            decimals: [18],
            displayName: 'ZERO',
            network: 'zero',
            prefix: 24,
            standardAccount: '*25519',
            symbols: ['PLAY'],
            website: 'https://zero.io'
          },
          {
            decimals: [18],
            displayName: 'ZERO Alphaville',
            network: 'zero-alphaville',
            prefix: 25,
            standardAccount: '*25519',
            symbols: ['PLAY'],
            website: 'https://zero.io'
          },
          {
            decimals: [10],
            displayName: 'Jupiter',
            network: 'jupiter',
            prefix: 26,
            standardAccount: '*25519',
            symbols: ['jDOT'],
            website: 'https://jupiter.patract.io'
          },
          {
            decimals: [10, 12],
            displayName: 'Patract',
            network: 'patract',
            prefix: 27,
            standardAccount: '*25519',
            symbols: ['pDOT', 'pKSM'],
            website: 'https://patract.network'
          },
          {
            decimals: null,
            displayName: 'Subsocial',
            network: 'subsocial',
            prefix: 28,
            standardAccount: '*25519',
            symbols: null,
            website: null
          },
          {
            decimals: [18],
            displayName: 'Dhiway CORD Network',
            network: 'cord',
            prefix: 29,
            standardAccount: '*25519',
            symbols: ['DCU'],
            website: 'https://dhiway.com/'
          },
          {
            decimals: [12],
            displayName: 'Phala Network',
            network: 'phala',
            prefix: 30,
            standardAccount: '*25519',
            symbols: ['PHA'],
            website: 'https://phala.network'
          },
          {
            decimals: [12],
            displayName: 'Litentry Network',
            network: 'litentry',
            prefix: 31,
            standardAccount: '*25519',
            symbols: ['LIT'],
            website: 'https://litentry.com/'
          },
          {
            decimals: [9],
            displayName: 'Robonomics',
            network: 'robonomics',
            prefix: 32,
            standardAccount: '*25519',
            symbols: ['XRT'],
            website: 'https://robonomics.network'
          },
          {
            decimals: null,
            displayName: 'DataHighway',
            network: 'datahighway',
            prefix: 33,
            standardAccount: '*25519',
            symbols: null,
            website: null
          },
          {
            decimals: [12],
            displayName: 'Ares Protocol',
            network: 'ares',
            prefix: 34,
            standardAccount: '*25519',
            symbols: ['ARES'],
            website: 'https://www.aresprotocol.com/'
          },
          {
            decimals: [15],
            displayName: 'Valiu Liquidity Network',
            network: 'vln',
            prefix: 35,
            standardAccount: '*25519',
            symbols: ['USDv'],
            website: 'https://valiu.com/'
          },
          {
            decimals: [18],
            displayName: 'Centrifuge Chain',
            network: 'centrifuge',
            prefix: 36,
            standardAccount: '*25519',
            symbols: ['RAD'],
            website: 'https://centrifuge.io/'
          },
          {
            decimals: [18],
            displayName: 'Nodle Chain',
            network: 'nodle',
            prefix: 37,
            standardAccount: '*25519',
            symbols: ['NODL'],
            website: 'https://nodle.io/'
          },
          {
            decimals: [18],
            displayName: 'KILT Chain',
            network: 'kilt',
            prefix: 38,
            standardAccount: '*25519',
            symbols: ['KILT'],
            website: 'https://kilt.io/'
          },
          {
            decimals: [18],
            displayName: 'MathChain mainnet',
            network: 'mathchain',
            prefix: 39,
            standardAccount: '*25519',
            symbols: ['MATH'],
            website: 'https://mathwallet.org'
          },
          {
            decimals: [18],
            displayName: 'MathChain testnet',
            network: 'mathchain-testnet',
            prefix: 40,
            standardAccount: '*25519',
            symbols: ['MATH'],
            website: 'https://mathwallet.org'
          },
          {
            decimals: null,
            displayName: 'Polimec Chain',
            network: 'poli',
            prefix: 41,
            standardAccount: '*25519',
            symbols: null,
            website: 'https://polimec.io/'
          },
          {
            decimals: null,
            displayName: 'Substrate',
            network: 'substrate',
            prefix: 42,
            standardAccount: '*25519',
            symbols: null,
            website: 'https://substrate.dev/'
          },
          {
            decimals: null,
            displayName: 'Bare 32-bit ECDSA SECP-256k1 public key.',
            network: null,
            prefix: 43,
            standardAccount: null,
            symbols: null,
            website: null
          },
          {
            decimals: [8],
            displayName: 'ChainX',
            network: 'chainx',
            prefix: 44,
            standardAccount: '*25519',
            symbols: ['PCX'],
            website: 'https://chainx.org/'
          },
          {
            decimals: [12, 12],
            displayName: 'UniArts Network',
            network: 'uniarts',
            prefix: 45,
            standardAccount: '*25519',
            symbols: ['UART', 'UINK'],
            website: 'https://uniarts.me'
          },
          {
            decimals: null,
            displayName: 'This prefix is reserved.',
            network: 'reserved46',
            prefix: 46,
            standardAccount: null,
            symbols: null,
            website: null
          },
          {
            decimals: null,
            displayName: 'This prefix is reserved.',
            network: 'reserved47',
            prefix: 47,
            standardAccount: null,
            symbols: null,
            website: null
          },
          {
            decimals: [12],
            displayName: 'Neatcoin Mainnet',
            network: 'neatcoin',
            prefix: 48,
            standardAccount: '*25519',
            symbols: ['NEAT'],
            website: 'https://neatcoin.org'
          },
          {
            decimals: [12],
            displayName: 'HydraDX',
            network: 'hydradx',
            prefix: 63,
            standardAccount: '*25519',
            symbols: ['HDX'],
            website: 'https://hydradx.io'
          },
          {
            decimals: [18],
            displayName: 'AvN Mainnet',
            network: 'aventus',
            prefix: 65,
            standardAccount: '*25519',
            symbols: ['AVT'],
            website: 'https://aventus.io'
          },
          {
            decimals: [12],
            displayName: 'Crust Network',
            network: 'crust',
            prefix: 66,
            standardAccount: '*25519',
            symbols: ['CRU'],
            website: 'https://crust.network'
          },
          {
            decimals: [18],
            displayName: 'SORA Network',
            network: 'sora',
            prefix: 69,
            standardAccount: '*25519',
            symbols: ['XOR'],
            website: 'https://sora.org'
          },
          {
            decimals: [18],
            displayName: 'Social Network',
            network: 'social-network',
            prefix: 252,
            standardAccount: '*25519',
            symbols: ['NET'],
            website: 'https://social.network'
          }
        ]
          .map((e) => {
            const t = e.network || '',
              r = e;
            return (
              (r.slip44 = o[t]),
              (r.hasLedgerSupport = !!r.slip44),
              (r.genesisHash = n[t] || []),
              (r.icon = a[t] || 'substrate'),
              (r.isIgnored = !t || !!s[t] || t.startsWith('reserved')),
              r
            );
          })
          .filter((e) => !e.isIgnored && !!e.network)
          .sort((e, t) =>
            i.includes(e.prefix) === i.includes(t.prefix)
              ? 0
              : i.includes(e.prefix)
              ? -1
              : i.includes(t.prefix)
              ? 1
              : e.displayName.localeCompare(t.displayName)
          ),
        u = c.filter((e) => e.genesisHash.length || 42 === e.prefix);
    },
    66977: (e, t, r) => {
      'use strict';
      r.d(t, { h: () => n });
      const n = ('undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : void 0
      ).fetch;
    },
    36504: (e, t, r) => {
      'use strict';
      r.d(t, { ZP: () => Y });
      var n = r(21065);
      (0, r(228).E)(
        { name: '@polkadot/react-identicon', version: '0.74.2-0' },
        'undefined' != typeof __dirname && __dirname,
        [n.b, { name: '@polkadot/ui-shared', version: '0.74.2-0' }]
      );
      var a = r(51119),
        o = r(2784),
        s = r(72282),
        i = r(52275),
        c = r(33835),
        u = r(11942),
        d = r(20987),
        l = r(14842),
        p = r(68631),
        f = r(72580),
        h = r(12733),
        m = r(87602);
      const y = [
        '#ffe119',
        '#4363d8',
        '#f58231',
        '#fabebe',
        '#e6beff',
        '#800000',
        '#000075',
        '#a9a9a9',
        '#ffffff',
        '#000000'
      ];
      function b(e) {
        return document.createElementNS('http://www.w3.org/2000/svg', e);
      }
      function g(e, t, r) {
        const n = b('circle');
        return (
          n.setAttributeNS('', 'cx', `${t}`),
          n.setAttributeNS('', 'cy', `${r}`),
          n.setAttributeNS('', 'r', `${e}`),
          n
        );
      }
      function v(e, t, r, n) {
        const a = r / 2,
          o = 360 * e(),
          s = ((5 - n) / 5) * (r / 2) + (r / 8) * e(),
          i = (r / 4) * (e() + (n + 1) / 5),
          c = g(s, i * Math.sin(o) + a, i * Math.cos(o) + a);
        return c.setAttributeNS('', 'fill', t), c;
      }
      function w(e, t = 'svg', r = 0, n = 0) {
        const a = b(t);
        return (
          a.setAttributeNS('', 'x', `${r}`),
          a.setAttributeNS('', 'y', `${n}`),
          a.setAttributeNS('', 'width', `${e}`),
          a.setAttributeNS('', 'height', `${e}`),
          a
        );
      }
      var O = r(71346);
      function A(e, t = 'white', r = '', n = {}) {
        const a = document.createElement('div'),
          o = Object.assign(
            {
              background: t,
              borderRadius: e / 2 + 'px',
              display: 'inline-block',
              height: `${e}px`,
              margin: '0px',
              overflow: 'hidden',
              padding: '0px',
              width: `${e}px`
            },
            n
          );
        return (
          (a.className = r),
          (a.style.background = t),
          Object.keys(o).forEach((e) => {
            a.style[e] = o[e];
          }),
          a
        );
      }
      var k = r(8431);
      var _ = r(52322);
      function I({ address: e, className: t = '', size: r, style: n }) {
        const a = (0, o.useCallback)(
          (t) => {
            t &&
              t.appendChild(
                (function (e, { size: t = 256 }, r = '', n) {
                  const a = (function (e = new Uint8Array(32)) {
                      const t = (0, d.U)(e) ? e : (0, k.d)(e);
                      let r = (t[Math.floor(t.length / 2)] % t.length) - 1;
                      const n = () => (
                        (r += 1), r === t.length && (r = 0), t[r]
                      );
                      return () => (256 * n() + n()) / 65536;
                    })(e),
                    o = (function (e) {
                      const t = 30 * e() - 15,
                        r = y.map((e) => O(e).rotate(t));
                      return (t = 1) => {
                        const n = Math.floor(r.length * e());
                        return r.splice(n, 1)[0].alpha(t).string();
                      };
                    })(a),
                    s = A(t, 'white', r, n),
                    i = A(t, o()),
                    c = w(t);
                  s.appendChild(i), i.appendChild(c);
                  for (let e = 0; e < 5; e++) {
                    const r = v(a, o(), t, e);
                    c.appendChild(r);
                  }
                  return s;
                })(e, { isAlternative: !1, size: r })
              );
          },
          [e, r]
        );
        return (0, _.jsx)('div', { className: t, ref: a, style: n });
      }
      const P = o.memo(I);
      function S({ className: e = '', size: t, style: r }) {
        return (0, _.jsx)('svg', {
          className: e,
          height: t,
          style: r,
          viewBox: '0 0 64 64',
          width: t
        });
      }
      const x = o.memo(S);
      var E = r(88617);
      const T = o.memo(
        (0, i.ZP)(function ({ address: e, className: t = '', style: r }) {
          const n = (0, o.useMemo)(() => E(e), [e]);
          return (0, _.jsx)('img', { className: t, src: n, style: r });
        }).withConfig({ displayName: 'Ethereum', componentId: 'osop9v-0' })(
          ({ size: e }) =>
            `\n  display: block;\n  height: ${e}px;\n  width: ${e}px;\n`
        )
      );
      var N = r(29762);
      function C({ className: e = '', publicKey: t, size: r, style: n }) {
        return (0, _.jsx)('div', {
          className: e,
          dangerouslySetInnerHTML: { __html: N.KT(t.substr(2), r) },
          style: n
        });
      }
      const j = o.memo(C);
      var D = r(13085);
      const R = (e) => (0, D.b)(e, 512),
        U = 32,
        B = R(new Uint8Array(32)),
        M = {
          target: {
            colors: [
              0,
              28,
              0,
              0,
              28,
              0,
              0,
              28,
              0,
              0,
              28,
              0,
              0,
              28,
              0,
              0,
              28,
              0,
              1
            ],
            freq: 1
          },
          cube: {
            colors: [0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 5],
            freq: 20
          },
          quazar: {
            colors: [1, 2, 3, 1, 2, 4, 5, 5, 4, 1, 2, 3, 1, 2, 4, 5, 5, 4, 0],
            freq: 16
          },
          flower: {
            colors: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3],
            freq: 32
          },
          cyclic: {
            colors: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6],
            freq: 32
          },
          vmirror: {
            colors: [0, 1, 2, 3, 4, 5, 3, 4, 2, 0, 1, 6, 7, 8, 9, 7, 8, 6, 10],
            freq: 128
          },
          hmirror: {
            colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 7, 5, 3, 4, 2, 11],
            freq: 128
          }
        },
        L = { cx: U, cy: U, fill: '#eee', r: U };
      function F(e, { isAlternative: t }) {
        const r = (function (e) {
          const t = Object.values(M)
              .map((e) => e.freq)
              .reduce((e, t) => e + t),
            r = (function (e) {
              return R((0, m.m)(e)).map((e, t) => (e + 256 - B[t]) % 256);
            })(e),
            n = Math.floor((r[30] + 256 * r[31]) % t),
            a = (r[28] % 6) * 3,
            o = (Math.floor((70 * r[29]) / 256 + 26) % 80) + 30,
            s = (function (e) {
              let t = 0;
              const r = Object.values(M).find((r) => ((t += r.freq), e < t));
              if (!r) throw new Error('Unable to find schema');
              return r;
            })(n),
            i = Array.from(r).map((e, t) => {
              const r = (e + (t % 28) * 58) % 256;
              if (0 === r) return '#444';
              if (255 === r) return 'transparent';
              const n = Math.floor(((r % 64) * 360) / 64),
                a = [53, 15, 35, 75][Math.floor(r / 64)];
              return `hsl(${n}, ${o}%, ${a}%)`;
            });
          return s.colors.map(
            (e, t) => i[s.colors[t < 18 ? (t + a) % 18 : 18]]
          );
        })(e);
        return [L].concat(
          (function (e) {
            const {
              r: t,
              r3o4: r,
              ro2: n,
              ro4: a,
              rroot3o2: o,
              rroot3o4: s
            } = (function (e) {
              const t = e ? 20 : 24;
              return {
                r: t,
                r3o4: (3 * t) / 4,
                ro2: t / 2,
                ro4: t / 4,
                rroot3o2: (t * Math.sqrt(3)) / 2,
                rroot3o4: (t * Math.sqrt(3)) / 4
              };
            })(e);
            return [
              [U, U - t],
              [U, U - n],
              [U - s, U - r],
              [U - o, U - n],
              [U - s, U - a],
              [U - o, U],
              [U - o, U + n],
              [U - s, U + a],
              [U - s, U + r],
              [U, U + t],
              [U, U + n],
              [U + s, U + r],
              [U + o, U + n],
              [U + s, U + a],
              [U + o, U],
              [U + o, U - n],
              [U + s, U - a],
              [U + s, U - r],
              [U, U]
            ];
          })(t).map(([e, t], n) => ({ cx: e, cy: t, fill: r[n], r: 5 }))
        );
      }
      function V({ cx: e, cy: t, fill: r, r: n }, a) {
        return (0, _.jsx)('circle', { cx: e, cy: t, fill: r, r: n }, a);
      }
      function K({
        address: e,
        className: t = '',
        isAlternative: r = !1,
        size: n,
        style: a
      }) {
        return (0, _.jsx)('svg', {
          className: t,
          height: n,
          id: e,
          name: e,
          style: a,
          viewBox: '0 0 64 64',
          width: n,
          children: F(e, { isAlternative: r }).map(V)
        });
      }
      function H(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      const q = P,
        Z = 64,
        G = {
          beachball: P,
          empty: x,
          ethereum: T,
          jdenticon: j,
          polkadot: o.memo(K),
          substrate: j
        },
        z = i.ZP.div.withConfig({
          displayName: 'Identicon__Wrapper',
          componentId: 'sc-1gm2vek-0'
        })([
          "cursor:copy;display:inline-block;line-height:0;> .container{position:relative;> div,> svg{position:relative;}&.highlight:before{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;box-shadow:0 0 5px 2px #aaa;content:'';}}"
        ]);
      class W extends o.PureComponent {
        constructor(...e) {
          super(...e),
            (this.state = { address: '', publicKey: '0x' }),
            (this.onCopy = () => {
              const { onCopy: e } = this.props,
                { address: t } = this.state;
              t && e && e(t);
            });
        }
        static setDefaultPrefix(e) {
          W.prefix = e;
        }
        static getDerivedStateFromProps(
          { prefix: e = W.prefix, theme: t, value: r },
          n
        ) {
          if ('ethereum' === t)
            return {
              address: (0, d.U)(r) ? (0, f.K)(r) : r || '',
              publicKey: ''
            };
          try {
            const t = (0, d.U)(r) || (0, l.v)(r) ? (0, h.m)(r, e) : r || '',
              a = (0, p.c)((0, m.m)(t, !1, e));
            return t === n.address ? null : { address: t, publicKey: a };
          } catch (e) {
            return { address: '', publicKey: '0x' };
          }
        }
        render() {
          const { address: e } = this.state,
            t = this.getWrapped(this.state, this.props);
          return e
            ? (0, _.jsx)(s, { onCopy: this.onCopy, text: e, children: t })
            : t;
        }
        getWrapped({ address: e, publicKey: t }, { Custom: r }) {
          const {
              className: n = '',
              isAlternative: a,
              isHighlight: o,
              size: s = Z,
              style: i,
              theme: d = c.X.icon
            } = this.props,
            l = e ? r || G['default' === d ? u.Oi : d] || q : x;
          return (0, _.jsx)(
            z,
            {
              className: `ui--IdentityIcon  ${n}`,
              style: i,
              children: (0, _.jsx)(l, {
                address: e,
                className: o ? 'highlight' : '',
                isAlternative: a,
                publicKey: t,
                size: s
              })
            },
            e
          );
        }
      }
      function $(e) {
        return (0, _.jsx)(
          W,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? H(Object(r), !0).forEach(function (t) {
                    (0, a.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : H(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({}, e)
        );
      }
      W.prefix = void 0;
      const Y = o.memo($);
    },
    16395: (e, t, r) => {
      'use strict';
      r.d(t, { r_: () => _, K0: () => D, CU: () => T, lB: () => C });
      var n = r(2784),
        a = r(51119),
        o = r(52275),
        s = r(51336);
      const i = r(4133);
      i.stringToBytes = (e) => e;
      var c = r(87672),
        u = r(90791),
        d = r(33298),
        l = r(87602);
      const p = 'substrate',
        f = new Uint8Array([83]),
        h = new Uint8Array([1]),
        m =
          (new Uint8Array([0]),
          new Uint8Array([1]),
          new Uint8Array([2]),
          new Uint8Array([3]),
          new Uint8Array([0]));
      function y(e) {
        return new Uint8Array([e >> 8, 255 & e]);
      }
      function b(e) {
        if (!e) return { height: 'auto', width: '100%' };
        const t = (0, d.H)(e) ? e : `${e}px`;
        return { height: t, width: t };
      }
      var g = r(52322);
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function O(e) {
        const t = i(0, 'M');
        return t.addData(e, 'Byte'), t.make(), t.createDataURL(16, 0);
      }
      const A = n.memo(
        (0, o.ZP)(function ({
          className: e,
          size: t,
          skipEncoding: r,
          style: a,
          value: o
        }) {
          const [{ image: i }, u] = (0, n.useState)({
              frameIdx: 0,
              frames: [],
              image: null,
              valueHash: null
            }),
            d = (0, n.useRef)({ timerDelay: 2500, timerId: null }),
            l = (0, n.useMemo)(() => b(t), [t]);
          return (
            (0, n.useEffect)(() => {
              const e = () =>
                u((t) => {
                  if (t.frames.length <= 1) return t;
                  let r = t.frameIdx + 1;
                  return (
                    r === t.frames.length &&
                      ((r = 0),
                      (d.current.timerDelay = d.current.timerDelay + 500)),
                    (d.current.timerId = setTimeout(e, d.current.timerDelay)),
                    w(w({}, t), {}, { frameIdx: r, image: O(t.frames[r]) })
                  );
                });
              return (
                (d.current.timerId = window.setTimeout(e, 2500)),
                () => {
                  d.current.timerId && clearTimeout(d.current.timerId);
                }
              );
            }, []),
            (0, n.useEffect)(() => {
              u((e) => {
                const t = (0, s.R)(o);
                if (t === e.valueHash) return e;
                const n = r
                  ? [o]
                  : (function (e) {
                      const t = [];
                      let r = 0;
                      for (; r < e.length; )
                        t.push(e.subarray(r, r + 1024)), (r += 1024);
                      return t.map((e, r) => (0, c.e)(m, y(t.length), y(r), e));
                    })(o);
                return { frameIdx: 0, frames: n, image: O(n[0]), valueHash: t };
              });
            }, [r, o]),
            i
              ? (0, g.jsx)('div', {
                  className: e,
                  style: l,
                  children: (0, g.jsx)('div', {
                    className: 'ui--qr-Display',
                    style: a,
                    children: (0, g.jsx)('img', { src: i })
                  })
                })
              : null
          );
        }).withConfig({
          displayName: 'Display__QrDisplay',
          componentId: 'f0xthb-0'
        })([
          '.ui--qr-Display{height:100%;width:100%;img,svg{background:white;height:auto !important;max-height:100%;max-width:100%;width:auto !important;}}'
        ])
      );
      function k({
        address: e,
        className: t,
        cmd: r,
        genesisHash: a,
        payload: o,
        size: s,
        style: i
      }) {
        const d = (0, n.useMemo)(
          () =>
            (function (e, t, r, n) {
              return (0, c.e)(
                f,
                h,
                new Uint8Array([t]),
                (0, l.m)(e),
                (0, u.Y)(r),
                (0, u.Y)(n)
              );
            })(e, r, o, a),
          [e, r, o, a]
        );
        return d
          ? (0, g.jsx)(A, { className: t, size: s, style: i, value: d })
          : null;
      }
      const _ = n.memo(k);
      var I = r(85818),
        P = r(53789);
      const S = (e) => {
          console.error('@polkadot/react-qr:Scan', e.message);
        },
        x = n.memo(
          (0, o.ZP)(function ({
            className: e,
            delay: t = 150,
            onError: r = S,
            onScan: a,
            size: o,
            style: s
          }) {
            const i = (0, n.useMemo)(() => b(o), [o]),
              c = (0, n.useCallback)((e) => r(e), [r]),
              u = (0, n.useCallback)((e) => e && a(e), [a]);
            return (0, g.jsx)('div', {
              className: e,
              style: i,
              children: (0, g.jsx)(P, {
                className: 'ui--qr-Scan',
                delay: t,
                onError: c,
                onScan: u,
                style: s
              })
            });
          }).withConfig({
            displayName: 'Scan__QrScan',
            componentId: 'zwjyub-0'
          })([
            '.ui--qr-Scan{display:inline-block;height:100%;transform:matrix(-1,0,0,1,0,0);width:100%;video{margin:0;}}'
          ])
        );
      function E({ className: e, onError: t, onScan: r, size: a, style: o }) {
        const s = (0, n.useCallback)(
          (e) => {
            if (e)
              try {
                const [t, n, a, ...o] = e.split(':'),
                  s = t === p || 'secret' === t;
                (0, I.h)(
                  s,
                  `Invalid prefix received, expected 'substrate/secret' , found '${t}'`
                );
                const i = t === p;
                i && (0, l.m)(n),
                  r({
                    content: n,
                    genesisHash: a,
                    isAddress: i,
                    name: null != o && o.length ? o.join(':') : void 0
                  });
              } catch (t) {
                console.error('@polkadot/react-qr:QrScanAddress', t.message, e);
              }
          },
          [r]
        );
        return (0, g.jsx)(x, {
          className: e,
          onError: t,
          onScan: s,
          size: a,
          style: o
        });
      }
      const T = n.memo(E);
      function N({ className: e, onError: t, onScan: r, size: a, style: o }) {
        const s = (0, n.useCallback)((e) => e && r({ signature: `0x${e}` }), [
          r
        ]);
        return (0, g.jsx)(x, {
          className: e,
          onError: t,
          onScan: s,
          size: a,
          style: o
        });
      }
      const C = n.memo(N);
      function j({ className: e, networkSpecs: t, size: r, style: a }) {
        const o = (0, n.useMemo)(
          () =>
            (function (e) {
              const t = new Uint8Array(e.length);
              for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
              return t;
            })(JSON.stringify(t)),
          [t]
        );
        return o
          ? (0, g.jsx)(A, {
              className: e,
              size: r,
              skipEncoding: !0,
              style: a,
              value: o
            })
          : null;
      }
      const D = n.memo(j);
    },
    38490: (e, t, r) => {
      'use strict';
      r.d(t, { ZP: () => ue, Nn: () => ce });
      var n = r(21065),
        a = r(228);
      (0, a.E)(
        { name: '@polkadot/ui-keyring', version: '0.74.2-0' },
        'undefined' != typeof __dirname && __dirname,
        [n.b]
      );
      var o = r(51119),
        s = r(89539),
        i = r(38879),
        c = r(99026),
        u = r(74039),
        d = r(94542),
        l = r(68991),
        p = r(8431),
        f = r(33298),
        h = r(14842),
        m = r(25754),
        y = r(69835),
        b = r(76235),
        g = r(69333),
        v = r(78263),
        w = r(53594),
        O = r(61679);
      const A = new O.Xe(!1),
        k = {
          isDevelopment: () => A.getValue(),
          set: (e) => {
            A.next(e);
          },
          subject: A
        };
      var _ = r(40412),
        I = r(58534);
      (0, a.E)(
        { name: '@polkadot/keyring', version: '6.2.2-7' },
        'undefined' != typeof __dirname && __dirname,
        [_.b, I.b]
      );
      const P = r(5442).Y,
        S = [
          {
            publicKey: (0, m.G)(
              '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d'
            ),
            secretKey: (0, m.G)(
              '0x98319d4ff8a9508c4bb0cf0b5a78d760a0b2082c02775e6e82370816fedfff48925a225d97aa00682d6a59b95b18780c10d7032336e88f3442b42361f4a66011'
            ),
            seed: 'Alice',
            type: 'sr25519'
          },
          {
            publicKey: (0, m.G)(
              '0xbe5ddb1579b72e84524fc29e78609e3caf42e85aa118ebfe0b0ad404b5bdd25f'
            ),
            secretKey: (0, m.G)(
              '0xe8da6c9d810e020f5e3c7f5af2dea314cbeaa0d72bc6421e92c0808a0c584a6046ab28e97c3ffc77fe12b5a4d37e8cd4afbfebbf2391ffc7cb07c0f38c023efd'
            ),
            seed: 'Alice//stash',
            type: 'sr25519'
          },
          {
            publicKey: (0, m.G)(
              '0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48'
            ),
            secretKey: (0, m.G)(
              '0x081ff694633e255136bdb456c20a5fc8fed21f8b964c11bb17ff534ce80ebd5941ae88f85d0c1bfc37be41c904e1dfc01de8c8067b0d6d5df25dd1ac0894a325'
            ),
            seed: 'Bob',
            type: 'sr25519'
          },
          {
            publicKey: (0, m.G)(
              '0xfe65717dad0447d715f660a0a58411de509b42e6efb8375f562f58a554d5860e'
            ),
            secretKey: (0, m.G)(
              '0xc006507cdfc267a21532394c49ca9b754ca71de21e15a1cdf807c7ceab6d0b6c3ed408d9d35311540dcd54931933e67cf1ea10d46f75408f82b789d9bd212fde'
            ),
            seed: 'Bob//stash',
            type: 'sr25519'
          },
          {
            publicKey: (0, m.G)(
              '0x90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22'
            ),
            secretKey: (0, m.G)(
              '0xa8f2d83016052e5d6d77b2f6fd5d59418922a09024cda701b3c34369ec43a7668faf12ff39cd4e5d92bb773972f41a7a5279ebc2ed92264bed8f47d344f8f18c'
            ),
            seed: 'Charlie',
            type: 'sr25519'
          },
          {
            publicKey: (0, m.G)(
              '0x306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc20'
            ),
            secretKey: (0, m.G)(
              '0x20e05482ca4677e0edbc58ae9a3a59f6ed3b1a9484ba17e64d6fe8688b2b7b5d108c4487b9323b98b11fe36cb301b084e920f7b7895536809a6d62a451b25568'
            ),
            seed: 'Dave',
            type: 'sr25519'
          },
          {
            publicKey: (0, m.G)(
              '0xe659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e'
            ),
            secretKey: (0, m.G)(
              '0x683576abfd5dc35273e4264c23095a1bf21c14517bece57c7f0cc5c0ed4ce06a3dbf386b7828f348abe15d76973a72009e6ef86a5c91db2990cb36bb657c6587'
            ),
            seed: 'Eve',
            type: 'sr25519'
          },
          {
            publicKey: (0, m.G)(
              '0x1cbd2d43530a44705ad088af313e18f80b53ef16b36177cd4b77b846f2a5f07c'
            ),
            secretKey: (0, m.G)(
              '0xb835c20f450079cf4f513900ae9faf8df06ad86c681884122c752a4b2bf74d4303e4f21bc6cc62bb4eeed5a9cce642c25e2d2ac1464093b50f6196d78e3a7426'
            ),
            seed: 'Ferdie',
            type: 'sr25519'
          }
        ],
        x = [
          {
            name: 'Alith',
            publicKey: (0, m.G)(
              '0x02509540919faacf9ab52146c9aa40db68172d83777250b28e4679176e49ccdd9f'
            ),
            secretKey: (0, m.G)(
              '0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133'
            ),
            seed: "m/44'/40'/0'/0",
            type: 'ethereum'
          },
          {
            name: 'Baltathar',
            publicKey: (0, m.G)(
              '0x033bc19e36ff1673910575b6727a974a9abd80c9a875d41ab3e2648dbfb9e4b518'
            ),
            secretKey: (0, m.G)(
              '0x8075991ce870b93a8870eca0c0f91913d12f47948ca0fd25b49c6fa7cdbeee8b'
            ),
            seed: "m/44'/40'/0'/0",
            type: 'ethereum'
          },
          {
            name: 'Charleth',
            publicKey: (0, m.G)(
              '0x0234637bdc0e89b5d46543bcbf8edff329d2702bc995e27e9af4b1ba009a3c2a5e'
            ),
            secretKey: (0, m.G)(
              '0x0b6e18cafb6ed99687ec547bd28139cafdd2bffe70e6b688025de6b445aa5c5b'
            ),
            seed: "m/44'/40'/0'/0",
            type: 'ethereum'
          },
          {
            name: 'Dorothy',
            publicKey: (0, m.G)(
              '0x02a00d60b2b408c2a14c5d70cdd2c205db8985ef737a7e55ad20ea32cc9e7c417c'
            ),
            secretKey: (0, m.G)(
              '0x39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68'
            ),
            seed: "m/44'/40'/0'/0",
            type: 'ethereum'
          },
          {
            name: 'Ethan',
            publicKey: (0, m.G)(
              '0x025cdc005b752651cd3f728fb9192182acb3a9c89e19072cbd5b03f3ee1f1b3ffa'
            ),
            secretKey: (0, m.G)(
              '0x7dce9bc8babb68fec1409be38c8e1a52650206a7ed90ff956ae8a6d15eeaaef4'
            ),
            seed: "m/44'/40'/0'/0",
            type: 'ethereum'
          },
          {
            name: 'Faith',
            publicKey: (0, m.G)(
              '0x037964b6c9d546da4646ada28a99e34acaa1d14e7aba861a9055f9bd200c8abf74'
            ),
            secretKey: (0, m.G)(
              '0xb9d2ea9a615f3165812e8d44de0d24da9bbd164b65c4f0573e1ce2c8dbd9c8df'
            ),
            seed: "m/44'/40'/0'/0",
            type: 'ethereum'
          },
          {
            name: 'Gerald',
            publicKey: new Uint8Array([
              3,
              98,
              79,
              114,
              14,
              174,
              103,
              106,
              4,
              17,
              22,
              49,
              201,
              202,
              51,
              140,
              17,
              208,
              245,
              168,
              14,
              228,
              34,
              16,
              198,
              190,
              114,
              152,
              60,
              235,
              98,
              15,
              191
            ]),
            secretKey: (0, m.G)(
              '0x99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342'
            ),
            seed: "m/44'/40'/0'/0",
            type: 'ethereum'
          }
        ];
      var E = r(18608),
        T = r(87602),
        N = r(68631);
      function C(e) {
        return (0, N.c)((0, T.m)(e, !0));
      }
      const j = (e) => `account:${C(e)}`,
        D = (e) => `address:${C(e)}`,
        R = (e) => `contract:${C(e)}`,
        U = new RegExp('^account:0x[0-9a-f]*', ''),
        B = new RegExp('^address:0x[0-9a-f]*', ''),
        M = new RegExp('^contract:0x[0-9a-f]*', '');
      var L = r(59879);
      function F(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : F(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function K(e, t = !1) {
        let r = {};
        const n = new O.Xe({}),
          a = () =>
            (function (e, t, r) {
              const n = k.isDevelopment(),
                a = {};
              Object.keys(e).forEach((t) => {
                const { json: { meta: { isTesting: o = !1 } = {} } = {} } = e[
                  t
                ];
                (r && !n && !0 === o) || (a[t] = e[t]);
              }),
                t.next(a);
            })(r, n, t);
        return (
          k.subject.subscribe(a),
          {
            add: (t, n, o, s) => (
              (r = V({}, r)),
              (r[n] = {
                json: V(V({}, o), {}, { address: n }),
                option: (0, L.e)(n, o.meta.name),
                type: s
              }),
              o.meta.isInjected ||
                (o.meta.isTesting && !k.isDevelopment()) ||
                t.set(e(n), o),
              a(),
              r[n]
            ),
            remove: (t, n) => {
              (r = V({}, r)), delete r[n], t.remove(e(n)), a();
            },
            subject: n
          }
        );
      }
      const H = K(j, !0),
        q = K(D),
        Z = K(R);
      var G = r(23729);
      class z {
        all(e) {
          G.each((t, r) => {
            e(r, t);
          });
        }
        get(e, t) {
          t(G.get(e));
        }
        remove(e, t) {
          G.remove(e), t && t();
        }
        set(e, t, r) {
          G.set(e, t), r && r();
        }
      }
      var W = (0, i.Z)('accounts'),
        $ = (0, i.Z)('addresses'),
        Y = (0, i.Z)('contracts'),
        X = (0, i.Z)('keyring'),
        J = r(85818),
        Q = r(3191);
      const ee = (0, O.aj)(H.subject, q.subject, Z.subject).pipe(
        (0, Q.UI)(([e, t, r]) => ({ accounts: e, addresses: t, contracts: r }))
      );
      let te = !1;
      const re = (e, t) => {
          const r = e.option.name,
            n = t.option.name;
          return r.localeCompare(n);
        },
        ne = (e, t) => {
          const r = e.json.meta.whenCreated || 0,
            n = t.json.meta.whenCreated || 0;
          return r < n ? 1 : r > n ? -1 : 0;
        };
      class ae {
        constructor() {
          this.optionsSubject = new O.Xe(this.emptyOptions());
        }
        createOptionHeader(e) {
          return { key: `header-${e.toLowerCase()}`, name: e, value: null };
        }
        init(e) {
          (0, J.h)(!te, 'Unable to initialise options more than once'),
            ee.subscribe(() => {
              const t = this.emptyOptions();
              this.addAccounts(e, t),
                this.addAddresses(e, t),
                this.addContracts(e, t),
                (t.address = this.linkItems({
                  Addresses: t.address,
                  Recent: t.recent
                })),
                (t.account = this.linkItems({
                  Accounts: t.account,
                  Development: t.testing
                })),
                (t.contract = this.linkItems({ Contracts: t.contract })),
                (t.all = [].concat(t.account, t.address)),
                (t.allPlus = [].concat(t.account, t.address, t.contract)),
                this.optionsSubject.next(t);
            }),
            (te = !0);
        }
        linkItems(e) {
          return Object.keys(e).reduce((t, r) => {
            const n = e[r];
            return t.concat(n.length ? [this.createOptionHeader(r)] : [], n);
          }, []);
        }
        addAccounts(e, t) {
          const r = e.accounts.subject.getValue();
          Object.values(r)
            .sort(re)
            .forEach(
              ({
                json: {
                  meta: { isTesting: e = !1 }
                },
                option: r
              }) => {
                e ? t.testing.push(r) : t.account.push(r);
              }
            );
        }
        addAddresses(e, t) {
          const r = e.addresses.subject.getValue();
          Object.values(r)
            .filter(({ json: e }) => !!e.meta.isRecent)
            .sort(ne)
            .forEach(({ option: e }) => {
              t.recent.push(e);
            }),
            Object.values(r)
              .filter(({ json: e }) => !e.meta.isRecent)
              .sort(re)
              .forEach(({ option: e }) => {
                t.address.push(e);
              });
        }
        addContracts(e, t) {
          const r = e.contracts.subject.getValue();
          Object.values(r)
            .sort(re)
            .forEach(({ option: e }) => {
              t.contract.push(e);
            });
        }
        emptyOptions() {
          return {
            account: [],
            address: [],
            all: [],
            allPlus: [],
            contract: [],
            recent: [],
            testing: []
          };
        }
      }
      function oe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? oe(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : oe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ie = (0, i.Z)('stores');
      const ce = new (class extends class {
          constructor() {
            Object.defineProperty(this, W, { writable: !0, value: void 0 }),
              Object.defineProperty(this, $, { writable: !0, value: void 0 }),
              Object.defineProperty(this, Y, { writable: !0, value: void 0 }),
              Object.defineProperty(this, X, { writable: !0, value: void 0 }),
              (this._store = void 0),
              (this._genesisHash = void 0),
              (this.decodeAddress = (e, t, r) =>
                this.keyring.decodeAddress(e, t, r)),
              (this.encodeAddress = (e, t) => this.keyring.encodeAddress(e, t)),
              ((0, s.Z)(this, W)[W] = H),
              ((0, s.Z)(this, $)[$] = q),
              ((0, s.Z)(this, Y)[Y] = Z),
              (this._store = new z());
          }
          get accounts() {
            return (0, s.Z)(this, W)[W];
          }
          get addresses() {
            return (0, s.Z)(this, $)[$];
          }
          get contracts() {
            return (0, s.Z)(this, Y)[Y];
          }
          get keyring() {
            if ((0, s.Z)(this, X)[X]) return (0, s.Z)(this, X)[X];
            throw new Error(
              "Keyring should be initialised via 'loadAll' before use"
            );
          }
          get genesisHash() {
            return this._genesisHash;
          }
          getPair(e) {
            return this.keyring.getPair(e);
          }
          getPairs() {
            return this.keyring
              .getPairs()
              .filter((e) => k.isDevelopment() || !0 !== e.meta.isTesting);
          }
          isAvailable(e) {
            const t = this.accounts.subject.getValue(),
              r = this.addresses.subject.getValue(),
              n = this.contracts.subject.getValue(),
              a = (0, f.H)(e) ? e : this.encodeAddress(e);
            return !t[a] && !r[a] && !n[a];
          }
          isPassValid(e) {
            return e.length > 0;
          }
          setSS58Format(e) {
            (0, s.Z)(this, X)[X] && e && (0, s.Z)(this, X)[X].setSS58Format(e);
          }
          setDevMode(e) {
            k.set(e);
          }
          initKeyring(e) {
            const t = (function (e = {}, t = !0) {
              const r = new P(e);
              return (
                (e.type && 'ethereum' === e.type ? x : S).forEach(
                  ({
                    name: n,
                    publicKey: a,
                    secretKey: o,
                    seed: s,
                    type: i
                  }) => {
                    const u = {
                      isTesting: !0,
                      name: n || s.replace('//', '_').toLowerCase()
                    };
                    (t || n
                      ? r.addPair(
                          (0, c.s)(
                            { toSS58: r.encodeAddress, type: i },
                            { publicKey: a, secretKey: o },
                            u
                          )
                        )
                      : r.addFromUri(s, u, e.type)
                    ).lock = () => {};
                  }
                ),
                r
              );
            })(e, !0);
            (0, E.j)(e.isDevelopment) && this.setDevMode(e.isDevelopment),
              ((0, s.Z)(this, X)[X] = t),
              (this._genesisHash =
                e.genesisHash &&
                ((0, f.H)(e.genesisHash)
                  ? e.genesisHash.toString()
                  : e.genesisHash.toHex())),
              (this._store = e.store || this._store),
              this.addAccountPairs();
          }
          addAccountPairs() {
            this.keyring.getPairs().forEach(({ address: e, meta: t }) => {
              this.accounts.add(this._store, e, { address: e, meta: t });
            });
          }
          addTimestamp(e) {
            e.meta.whenCreated || e.setMeta({ whenCreated: Date.now() });
          }
        } {
          constructor(...e) {
            super(...e),
              (this.keyringOption = new ae()),
              Object.defineProperty(this, ie, {
                writable: !0,
                value: {
                  account: () => this.accounts,
                  address: () => this.addresses,
                  contract: () => this.contracts
                }
              });
          }
          addExternal(e, t = {}) {
            const r = this.keyring.addFromAddress(
              e,
              se(se({}, t), {}, { isExternal: !0 }),
              null
            );
            return { json: this.saveAccount(r), pair: r };
          }
          addHardware(e, t, r = {}) {
            return this.addExternal(
              e,
              se(se({}, r), {}, { hardwareType: t, isHardware: !0 })
            );
          }
          addMultisig(e, t, r = {}) {
            const n = (0, b.i)(e, t),
              a = (0, d.x)(e.map((e) => this.decodeAddress(e))).map((e) =>
                this.encodeAddress(e)
              );
            return this.addExternal(
              n,
              se(
                se({}, r),
                {},
                { isMultisig: !0, threshold: (0, l.G)(t).toNumber(), who: a }
              )
            );
          }
          addPair(e, t) {
            return (
              this.keyring.addPair(e), { json: this.saveAccount(e, t), pair: e }
            );
          }
          addUri(e, t, r = {}, n) {
            const a = this.keyring.addFromUri(e, r, n);
            return { json: this.saveAccount(a, t), pair: a };
          }
          backupAccount(e, t) {
            return e.isLocked || e.lock(), e.decodePkcs8(t), e.toJson(t);
          }
          async backupAccounts(e, t) {
            const r = e.map(
                (e) =>
                  new Promise((t) => {
                    this._store.get(j(e), t);
                  })
              ),
              n = await Promise.all(r);
            return se(
              se({}, (0, g.m)((0, p.d)(JSON.stringify(n)), ['batch-pkcs8'], t)),
              {},
              { accounts: n.map((e) => ({ address: e.address, meta: e.meta })) }
            );
          }
          createFromJson(e, t = {}) {
            return this.keyring.createFromJson(
              se(
                se({}, e),
                {},
                { meta: se(se({}, e.meta || {}), {}, { meta: t }) }
              )
            );
          }
          createFromUri(e, t = {}, r) {
            return this.keyring.createFromUri(e, t, r);
          }
          encryptAccount(e, t) {
            const r = e.toJson(t);
            (r.meta.whenEdited = Date.now()),
              this.keyring.addFromJson(r),
              this.accounts.add(this._store, e.address, r, e.type);
          }
          forgetAccount(e) {
            this.keyring.removePair(e), this.accounts.remove(this._store, e);
          }
          forgetAddress(e) {
            this.addresses.remove(this._store, e);
          }
          forgetContract(e) {
            this.contracts.remove(this._store, e);
          }
          getAccount(e) {
            return this.getAddress(e, 'account');
          }
          getAccounts() {
            const e = this.accounts.subject.getValue();
            return Object.keys(e)
              .map((e) => this.getAddress(e, 'account'))
              .filter((e) => k.isDevelopment() || !0 !== e.meta.isTesting);
          }
          getAddress(e, t = null) {
            const r = (0, f.H)(e) ? e : this.encodeAddress(e),
              n = this.decodeAddress(r),
              a = (t
                ? [(0, s.Z)(this, ie)[ie][t]]
                : Object.values((0, s.Z)(this, ie)[ie])
              ).reduce((e, t) => t().subject.getValue()[r] || e, void 0);
            return a && { address: r, meta: a.json.meta, publicKey: n };
          }
          getAddresses() {
            const e = this.addresses.subject.getValue();
            return Object.keys(e).map((e) => this.getAddress(e));
          }
          getContract(e) {
            return this.getAddress(e, 'contract');
          }
          getContracts() {
            const e = this.contracts.subject.getValue();
            return Object.entries(e)
              .filter(
                ([
                  ,
                  {
                    json: {
                      meta: { contract: e }
                    }
                  }
                ]) => !!e && e.genesisHash === this.genesisHash
              )
              .map(([e]) => this.getContract(e));
          }
          rewriteKey(e, t, r, n) {
            '0x' !== r.substr(0, 2) &&
              (this._store.remove(t), this._store.set(n(r), e));
          }
          loadAccount(e, t) {
            if (!e.meta.isTesting && e.encoded) {
              const t = this.keyring.addFromJson(e, !0);
              this.accounts.add(this._store, t.address, e, t.type);
            }
            const [, r] = t.split(':');
            this.rewriteKey(e, t, r.trim(), j);
          }
          loadAddress(e, t) {
            const { isRecent: r, whenCreated: n = 0 } = e.meta;
            if (r && Date.now() - n > 86400) return void this._store.remove(t);
            const a =
                (0, h.v)(e.address) && 66 !== e.address.length
                  ? e.address
                  : this.encodeAddress(
                      (0, h.v)(e.address)
                        ? (0, m.G)(e.address)
                        : this.decodeAddress(e.address, !0)
                    ),
              [, o] = t.split(':');
            this.addresses.add(this._store, a, e), this.rewriteKey(e, t, o, D);
          }
          loadContract(e, t) {
            const r = this.encodeAddress(this.decodeAddress(e.address)),
              [, n] = t.split(':');
            (e.meta.genesisHash =
              e.meta.genesisHash ||
              (e.meta.contract && e.meta.contract.genesisHash)),
              this.contracts.add(this._store, r, e),
              this.rewriteKey(e, t, n, R);
          }
          loadInjected(e, t) {
            const r = {
                address: e,
                meta: se(se({}, t), {}, { isInjected: !0 })
              },
              n = this.keyring.addFromAddress(e, r.meta);
            this.accounts.add(this._store, n.address, r, n.type);
          }
          allowGenesis(e) {
            if (e && e.meta && this.genesisHash) {
              const t = Object.values(u.p).find((e) =>
                e.includes(this.genesisHash || '')
              ) || [this.genesisHash];
              if (e.meta.genesisHash) return t.includes(e.meta.genesisHash);
              if (e.meta.contract)
                return t.includes(e.meta.contract.genesisHash);
            }
            return !0;
          }
          loadAll(e, t = []) {
            super.initKeyring(e),
              this._store.all((t, r) => {
                if (!e.filter || e.filter(r))
                  try {
                    this.allowGenesis(r) &&
                      (U.test(t)
                        ? this.loadAccount(r, t)
                        : B.test(t)
                        ? this.loadAddress(r, t)
                        : M.test(t) && this.loadContract(r, t));
                  } catch (e) {}
              }),
              t.forEach((e) => {
                if (this.allowGenesis(e))
                  try {
                    this.loadInjected(e.address, e.meta);
                  } catch (e) {}
              }),
              this.keyringOption.init(this);
          }
          restoreAccount(e, t) {
            const r = Array.isArray(e.encoding.content)
                ? e.encoding.content[1]
                : 'ed25519',
              n = Array.isArray(e.encoding.type)
                ? e.encoding.type
                : [e.encoding.type],
              a = (0, c.s)(
                { toSS58: this.encodeAddress, type: r },
                { publicKey: this.decodeAddress(e.address, !0) },
                e.meta,
                (0, h.v)(e.encoded) ? (0, m.G)(e.encoded) : (0, v.t)(e.encoded),
                n
              );
            return a.decodePkcs8(t), this.addPair(a, t), a.lock(), a;
          }
          restoreAccounts(e, t) {
            JSON.parse((0, y.z)((0, w.t)(e, t))).forEach((e) => {
              this.loadAccount(e, j(e.address));
            });
          }
          saveAccount(e, t) {
            this.addTimestamp(e);
            const r = e.toJson(t);
            return (
              this.keyring.addFromJson(r),
              this.accounts.add(this._store, e.address, r, e.type),
              r
            );
          }
          saveAccountMeta(e, t) {
            const r = e.address;
            this._store.get(j(r), (n) => {
              e.setMeta(t),
                (n.meta = e.meta),
                this.accounts.add(this._store, r, n, e.type);
            });
          }
          saveAddress(e, t, r = 'address') {
            const n = this.addresses.subject.getValue(),
              a = (n[e] && n[e].json) || {
                address: e,
                meta: { isRecent: void 0, whenCreated: Date.now() }
              };
            return (
              Object.keys(t).forEach((e) => {
                a.meta[e] = t[e];
              }),
              delete a.meta.isRecent,
              (0, s.Z)(this, ie)[ie][r]().add(this._store, e, a),
              a
            );
          }
          saveContract(e, t) {
            return this.saveAddress(e, t, 'contract');
          }
          saveRecent(e) {
            return (
              this.addresses.subject.getValue()[e] ||
                this.addresses.add(this._store, e, {
                  address: e,
                  meta: {
                    genesisHash: this.genesisHash,
                    isRecent: !0,
                    whenCreated: Date.now()
                  }
                }),
              this.addresses.subject.getValue()[e]
            );
          }
        })(),
        ue = ce;
    },
    59879: (e, t, r) => {
      'use strict';
      r.d(t, { e: () => a });
      var n = r(71555);
      function a(e, t) {
        const r = (0, n.o)(t)
          ? e.length > 15
            ? `${e.slice(0, 6)}…${e.slice(-6)}`
            : e
          : t;
        return { key: e, name: r, value: e };
      }
    },
    33835: (e, t, r) => {
      'use strict';
      r.d(t, { X: () => x });
      var n = r(89539),
        a = r(38879),
        o = r(10161),
        s = r(23729),
        i = r(71555);
      const c = [
          {
            info: 'local',
            text: 'Local Node (Own, 127.0.0.1:9944)',
            value: 'ws://127.0.0.1:9944/'
          }
        ],
        u = c[0],
        d = [
          { info: 'none', text: 'Do not attach Ledger devices', value: 'none' },
          { info: 'webusb', text: 'Attach Ledger via WebUSB', value: 'webusb' }
        ];
      const l = [
          {
            info: 'default',
            text: 'Default for the connected node',
            value: -1
          },
          ...r(45648).cZ.map(({ displayName: e, network: t, prefix: r }) => ({
            info: t,
            text: e,
            value: r
          }))
        ],
        p = [
          {
            info: 'sr25519',
            text: 'Schnorrkel (sr25519, recommended)',
            value: 'sr25519'
          },
          {
            info: 'ed25519',
            text: 'Edwards (ed25519, alternative)',
            value: 'ed25519'
          },
          {
            info: 'ecdsa',
            text: 'ECDSA (Non BTC/ETH compatible)',
            value: 'ecdsa'
          }
        ],
        f = [
          {
            info: 'ethereum',
            text: 'ECDSA (ETH compatible)',
            value: 'ethereum'
          }
        ],
        h = [
          ...p,
          {
            info: 'ed25519-ledger',
            text: 'Ledger (ed25519, BIP32 derivation)',
            value: 'ed25519-ledger'
          }
        ];
      var m = r(18339),
        y = r(11942);
      function b(e, t, r) {
        const n = t || r;
        return e.some(({ value: e }) => e === n) ? n : r;
      }
      var g = (0, a.Z)('emitter'),
        v = (0, a.Z)('apiUrl'),
        w = (0, a.Z)('camera'),
        O = (0, a.Z)('i18nLang'),
        A = (0, a.Z)('icon'),
        k = (0, a.Z)('ledgerConn'),
        _ = (0, a.Z)('locking'),
        I = (0, a.Z)('prefix'),
        P = (0, a.Z)('uiMode'),
        S = (0, a.Z)('uiTheme');
      const x = new (class {
        constructor() {
          Object.defineProperty(this, g, { writable: !0, value: void 0 }),
            Object.defineProperty(this, v, { writable: !0, value: void 0 }),
            Object.defineProperty(this, w, { writable: !0, value: void 0 }),
            Object.defineProperty(this, O, { writable: !0, value: void 0 }),
            Object.defineProperty(this, A, { writable: !0, value: void 0 }),
            Object.defineProperty(this, k, { writable: !0, value: void 0 }),
            Object.defineProperty(this, _, { writable: !0, value: void 0 }),
            Object.defineProperty(this, I, { writable: !0, value: void 0 }),
            Object.defineProperty(this, P, { writable: !0, value: void 0 }),
            Object.defineProperty(this, S, { writable: !0, value: void 0 });
          const e = s.get('settings') || {};
          ((0, n.Z)(this, g)[g] = new o()),
            ((0, n.Z)(this, v)[v] =
              ('string' == typeof e.apiUrl && e.apiUrl) || u.value),
            ((0, n.Z)(this, w)[w] = b(m.bl, e.camera, m.wB)),
            ((0, n.Z)(this, k)[k] = b(d, e.ledgerConn, 'none')),
            ((0, n.Z)(this, O)[O] = e.i18nLang || m.cr),
            ((0, n.Z)(this, A)[A] = e.icon || y.Ur),
            ((0, n.Z)(this, _)[_] = e.locking || m.hs),
            ((0, n.Z)(this, I)[I] = (0, i.o)(e.prefix) ? -1 : e.prefix),
            ((0, n.Z)(this, P)[P] = e.uiMode || y.IN),
            ((0, n.Z)(this, S)[S] = e.uiTheme || y.IH);
        }
        get camera() {
          return (0, n.Z)(this, w)[w];
        }
        get apiUrl() {
          return (0, n.Z)(this, v)[v];
        }
        get i18nLang() {
          return (0, n.Z)(this, O)[O];
        }
        get icon() {
          return (0, n.Z)(this, A)[A];
        }
        get ledgerConn() {
          return (0, n.Z)(this, k)[k];
        }
        get locking() {
          return (0, n.Z)(this, _)[_];
        }
        get prefix() {
          return (0, n.Z)(this, I)[I];
        }
        get uiMode() {
          return (0, n.Z)(this, P)[P];
        }
        get uiTheme() {
          return (0, n.Z)(this, S)[S];
        }
        get availableCamera() {
          return m.bl;
        }
        get availableCryptos() {
          return p;
        }
        get availableCryptosEth() {
          return f;
        }
        get availableCryptosLedger() {
          return h;
        }
        get availableIcons() {
          return y.UZ;
        }
        get availableLedgerConn() {
          return d;
        }
        get availableLocking() {
          return m.zI;
        }
        get availableNodes() {
          return c;
        }
        get availablePrefixes() {
          return l;
        }
        get availableUIModes() {
          return y._j;
        }
        get availableUIThemes() {
          return y.FJ;
        }
        get() {
          return {
            apiUrl: (0, n.Z)(this, v)[v],
            camera: (0, n.Z)(this, w)[w],
            i18nLang: (0, n.Z)(this, O)[O],
            icon: (0, n.Z)(this, A)[A],
            ledgerConn: (0, n.Z)(this, k)[k],
            locking: (0, n.Z)(this, _)[_],
            prefix: (0, n.Z)(this, I)[I],
            uiMode: (0, n.Z)(this, P)[P],
            uiTheme: (0, n.Z)(this, S)[S]
          };
        }
        set(e) {
          ((0, n.Z)(this, v)[v] = e.apiUrl || (0, n.Z)(this, v)[v]),
            ((0, n.Z)(this, w)[w] = e.camera || (0, n.Z)(this, w)[w]),
            ((0, n.Z)(this, k)[k] = e.ledgerConn || (0, n.Z)(this, k)[k]),
            ((0, n.Z)(this, O)[O] = e.i18nLang || (0, n.Z)(this, O)[O]),
            ((0, n.Z)(this, A)[A] = e.icon || (0, n.Z)(this, A)[A]),
            ((0, n.Z)(this, _)[_] = e.locking || (0, n.Z)(this, _)[_]),
            ((0, n.Z)(this, I)[I] = (0, i.o)(e.prefix)
              ? (0, n.Z)(this, I)[I]
              : e.prefix),
            ((0, n.Z)(this, P)[P] = e.uiMode || (0, n.Z)(this, P)[P]),
            ((0, n.Z)(this, S)[S] = e.uiTheme || (0, n.Z)(this, S)[S]);
          const t = this.get();
          s.set('settings', t), (0, n.Z)(this, g)[g].emit('change', t);
        }
        on(e, t) {
          (0, n.Z)(this, g)[g].on(e, t);
        }
      })();
    },
    74039: (e, t, r) => {
      'use strict';
      r.d(t, { p: () => s });
      var n = r(51119);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      const s = r(45648)
        .ZP.filter((e) => e.genesisHash.length)
        .reduce(
          (e, { genesisHash: t, network: r }) => o(o({}, e), {}, { [r]: t }),
          {}
        );
    },
    18339: (e, t, r) => {
      'use strict';
      r.d(t, {
        wB: () => n,
        bl: () => a,
        cr: () => o,
        hs: () => s,
        zI: () => i
      });
      const n = 'off',
        a = [
          { info: 'on', text: 'Allow camera access', value: 'on' },
          { info: 'off', text: 'Do not allow camera access', value: 'off' }
        ],
        o = 'default',
        s = 'session',
        i = [
          { info: 'session', text: 'Once per session', value: 'session' },
          { info: 'tx', text: 'On each transaction', value: 'tx' }
        ];
    },
    11942: (e, t, r) => {
      'use strict';
      r.d(t, {
        UZ: () => d,
        Ur: () => c,
        Oi: () => u,
        _j: () => o,
        IN: () => a,
        FJ: () => i,
        IH: () => s
      });
      const n =
          'undefined' != typeof window &&
          window.location.host.includes('polkadot'),
        a =
          !n &&
          'undefined' != typeof window &&
          window.location.host.includes('ui-light')
            ? 'light'
            : 'full',
        o = [
          { info: 'full', text: 'Fully featured', value: 'full' },
          { info: 'light', text: 'Basic features only', value: 'light' }
        ],
        s = n ? 'polkadot' : 'substrate',
        i = [
          { info: 'polkadot', text: 'Polkadot', value: 'polkadot' },
          { info: 'substrate', text: 'Substrate', value: 'substrate' }
        ],
        c = 'default',
        u = n ? 'polkadot' : 'substrate',
        d = [
          {
            info: 'default',
            text: 'Default for the connected node',
            value: 'default'
          },
          { info: 'polkadot', text: 'Polkadot', value: 'polkadot' },
          { info: 'substrate', text: 'Substrate', value: 'substrate' },
          { info: 'beachball', text: 'Beachball', value: 'beachball' }
        ];
    },
    5828: (e, t, r) => {
      'use strict';
      r.d(t, { ZP: () => n });
      const n = r(33835).X;
    },
    21065: (e, t, r) => {
      'use strict';
      r.d(t, { b: () => n });
      const n = { name: '@polkadot/ui-settings', version: '0.74.2-0' };
    },
    13496: (e, t, r) => {
      'use strict';
      r.d(t, { l: () => a });
      var n = r(43431);
      function a(e) {
        const t = 64 & e[0] ? 2 : 1,
          r =
            1 === t
              ? e[0]
              : ((63 & e[0]) << 2) | (e[1] >> 6) | ((63 & e[1]) << 8),
          a = [34 + t, 35 + t].includes(e.length),
          o = e.length - (a ? 2 : 1),
          s = (0, n.b)(e.subarray(0, o));
        return [
          0 == (128 & e[0]) &&
            ![46, 47].includes(e[0]) &&
            (a
              ? e[e.length - 2] === s[0] && e[e.length - 1] === s[1]
              : e[e.length - 1] === s[0]),
          o,
          t,
          r
        ];
      }
    },
    87602: (e, t, r) => {
      'use strict';
      r.d(t, { m: () => d });
      var n = r(85818),
        a = r(20987),
        o = r(14842),
        s = r(90791),
        i = r(43282),
        c = r(13496),
        u = r(23425);
      function d(e, t, r = -1) {
        if (
          ((0, n.h)(e, 'Invalid empty address passed'),
          (0, a.U)(e) || (0, o.v)(e))
        )
          return (0, s.Y)(e);
        try {
          const a = (0, i.M)(e);
          (0, n.h)(
            u.c.allowedEncodedLengths.includes(a.length),
            'Invalid decoded address length'
          );
          const [o, s, d, l] = (0, c.l)(a);
          return (
            (0, n.h)(t || o, 'Invalid decoded address checksum'),
            (0, n.h)(
              [-1, l].includes(r),
              () => `Expected ss58Format ${r}, received ${l}`
            ),
            a.slice(d, s)
          );
        } catch (t) {
          throw new Error(`Decoding ${e}: ${t.message}`);
        }
      }
    },
    23425: (e, t, r) => {
      'use strict';
      r.d(t, { c: () => n });
      const n = {
        allowedDecodedLengths: [1, 2, 4, 8, 32, 33],
        allowedEncodedLengths: [3, 4, 6, 10, 35, 36, 37, 38],
        allowedPrefix: r(45648).cZ.map(({ prefix: e }) => e),
        prefix: 42
      };
    },
    12733: (e, t, r) => {
      'use strict';
      r.d(t, { m: () => u });
      var n = r(85818),
        a = r(87672),
        o = r(62636),
        s = r(87602),
        i = r(23425),
        c = r(43431);
      function u(e, t = i.c.prefix) {
        const r = (0, s.m)(e);
        (0, n.h)(
          t >= 0 && t <= 16383 && ![46, 47].includes(t),
          'Out of range ss58Format specified'
        ),
          (0, n.h)(
            i.c.allowedDecodedLengths.includes(r.length),
            () =>
              `Expected a valid key to convert, with length ${i.c.allowedDecodedLengths.join(
                ', '
              )}`
          );
        const u = (0, a.e)(
          t < 64 ? [t] : [((252 & t) >> 2) | 64, (t >> 8) | ((3 & t) << 6)],
          r
        );
        return (0, o.n)(
          (0, a.e)(
            u,
            (0, c.b)(u).subarray(0, [32, 33].includes(r.length) ? 2 : 1)
          )
        );
      }
    },
    47891: (e, t, r) => {
      'use strict';
      r.d(t, { Q: () => o });
      var n = r(23050),
        a = r(87602);
      function o(e, t) {
        return (0, n.S)((0, a.m)(e), (0, a.m)(t));
      }
    },
    76235: (e, t, r) => {
      'use strict';
      r.d(t, { i: () => l });
      var n = r(8431),
        a = r(87672),
        o = r(16257),
        s = r(94542),
        i = r(80081),
        c = r(13085),
        u = r(87602);
      const d = (0, n.d)('modlpy/utilisuba');
      function l(e, t) {
        return (0, c.b)(
          (0, a.e)(
            d,
            (0, o.Y)(e.length),
            ...(0, s.x)(e.map((e) => (0, u.m)(e))),
            (0, i.a)(t, { bitLength: 16, isLe: !0 })
          )
        );
      }
    },
    68259: (e, t, r) => {
      'use strict';
      r.d(t, { S: () => a });
      var n = r(23425);
      function a(e) {
        n.c.prefix = e;
      }
    },
    63951: (e, t, r) => {
      'use strict';
      r.d(t, { i: () => s });
      var n = r(94542),
        a = r(87602),
        o = r(12733);
      function s(e, t) {
        return (0, n.x)(e.map((e) => (0, a.m)(e))).map((e) => (0, o.m)(e, t));
      }
    },
    43431: (e, t, r) => {
      'use strict';
      r.d(t, { b: () => i });
      var n = r(8431),
        a = r(87672),
        o = r(13085);
      const s = (0, n.d)('SS58PRE');
      function i(e) {
        return (0, o.b)((0, a.e)(s, e), 512);
      }
    },
    20771: (e, t, r) => {
      'use strict';
      r.d(t, { K: () => a, U: () => o });
      var n = r(18166);
      const a = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        o = n(a);
    },
    43282: (e, t, r) => {
      'use strict';
      r.d(t, { M: () => s });
      var n = r(65094),
        a = r(20771),
        o = r(82716);
      function s(e, t) {
        return (0, o.v)(e, t), (0, n.r)(a.U.decode(e.substr(t ? 1 : 0)));
      }
    },
    62636: (e, t, r) => {
      'use strict';
      r.d(t, { n: () => o });
      var n = r(90791),
        a = r(20771);
      function o(e, t) {
        const r = a.U.encode((0, n.Y)(e));
        return t ? `z${r}` : r;
      }
    },
    82716: (e, t, r) => {
      'use strict';
      r.d(t, { n: () => o, v: () => s });
      var n = r(85818);
      const a = { alphabet: r(20771).K, ipfsChar: 'z', type: 'base58' };
      function o({ alphabet: e, ipfsChar: t, type: r }, a, o) {
        (0, n.h)(a, () => `Expected non-null, non-empty ${r} input`),
          (0, n.h)(
            !o || a[0] === t,
            () => `Expected ${r} to start with '${t}'`
          );
        for (let t = o ? 1 : 0; t < a.length; t++)
          (0, n.h)(
            e.includes(a[t]),
            () =>
              `Invalid ${r} character "${a[t]}" (0x${a
                .charCodeAt(t)
                .toString(16)}) at index ${t}`
          );
        return !0;
      }
      function s(e, t) {
        return o(a, e, t);
      }
    },
    78263: (e, t, r) => {
      'use strict';
      r.d(t, { t: () => o });
      var n = r(95766),
        a = r(33875);
      function o(e) {
        return (0, a.O)(e), n.toByteArray(e);
      }
    },
    54765: (e, t, r) => {
      'use strict';
      r.d(t, { h: () => o });
      var n = r(95766),
        a = r(90791);
      function o(e) {
        return n.fromByteArray((0, a.Y)(e));
      }
    },
    33875: (e, t, r) => {
      'use strict';
      r.d(t, { O: () => a });
      var n = r(85818);
      function a(e) {
        return (
          (0, n.h)(e, 'Expected non-null, non-empty base64 input'),
          (0, n.h)(
            /^(?:[A-Za-z0-9+/]{2}[A-Za-z0-9+/]{2})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
              e
            ),
            'Invalid base64 encoding'
          ),
          !0
        );
      }
    },
    87286: (e, t, r) => {
      'use strict';
      r.d(t, { $: () => o });
      var n = r(68631),
        a = r(13085);
      function o(e, t = 256) {
        return (0, n.c)((0, a.b)(e, t));
      }
    },
    13085: (e, t, r) => {
      'use strict';
      r.d(t, { b: () => s });
      var n = r(81395),
        a = r(90791),
        o = r(43243);
      function s(e, t = 256, r = null, s = !1) {
        const i = Math.ceil(t / 8);
        return (0, o.DK)() && !s
          ? (0, o.Rg)((0, a.Y)(e), (0, a.Y)(r), i)
          : n.blake2b((0, a.Y)(e), r, i);
      }
    },
    36315: (e, t, r) => {
      'use strict';
      r.d(t, { G: () => a, I: () => o });
      var n = r(43243);
      function a() {
        return (0, n.DK)();
      }
      function o() {
        return (0, n.q$)()
          .then(() => !0)
          .catch(
            (e) => (
              console.error('Unable to initialize @polkadot/util-crypto', e), !1
            )
          );
      }
    },
    72580: (e, t, r) => {
      'use strict';
      r.d(t, { K: () => c });
      var n = r(90791),
        a = r(85818),
        o = r(68631),
        s = r(80013),
        i = r(62161);
      function c(e) {
        if (!e) return '0x';
        const t = (0, n.Y)(e);
        (0, a.h)(
          [20, 32, 33, 65].includes(t.length),
          'Invalid address or publicKey passed'
        );
        const r = (0, o.c)(
          ([33, 65].includes((c = t).length) && (c = (0, s.i)((0, i.o)(c))),
          c.slice(-20)),
          -1,
          !1
        );
        var c;
        const u = (0, o.c)((0, s.i)(r), -1, !1);
        let d = '';
        for (let e = 0; e < 40; e++)
          d = `${d}${parseInt(u[e], 16) > 7 ? r[e].toUpperCase() : r[e]}`;
        return `0x${d}`;
      }
    },
    20122: (e, t, r) => {
      'use strict';
      r.d(t, { u: () => o });
      var n = r(14842),
        a = r(68418);
      function o(e) {
        return (
          !(!e || 42 !== e.length || !(0, n.v)(e)) &&
          (!(
            !/^(0x)?[0-9a-f]{40}$/.test(e) && !/^(0x)?[0-9A-F]{40}$/.test(e)
          ) ||
            (0, a.V)(e))
        );
      }
    },
    68418: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => o });
      var n = r(68631),
        a = r(80013);
      function o(e) {
        const t = e.replace('0x', ''),
          r = (0, n.c)((0, a.i)(t.toLowerCase()), -1, !1);
        for (let e = 0; e < 40; e++)
          if (
            ((o = t[e]),
            ((s = parseInt(r[e], 16)) > 7 && o !== o.toUpperCase()) ||
              (s <= 7 && o !== o.toLowerCase()))
          )
            return !1;
        var o, s;
        return !0;
      }
    },
    98932: (e, t, r) => {
      'use strict';
      r.d(t, { d: () => h });
      var n = r(8431),
        a = r(80081),
        o = r(87672),
        s = r(85818),
        i = r(55036),
        c = r(47174),
        u = r(51215),
        d = r(85302);
      const l = (0, n.d)('Bitcoin seed');
      function p(e, t) {
        return { chainCode: t, publicKey: (0, c.M)(e).publicKey, secretKey: e };
      }
      function f(e, t) {
        const r = (0, a.a)(t, { bitLength: 32, isLe: !1 }),
          n =
            t >= d.s
              ? (0, o.e)(new Uint8Array(1), e.secretKey, r)
              : (0, o.e)(e.publicKey, r);
        try {
          const t = (0, i.c)(e.chainCode, n);
          return p((0, u.n)(e.secretKey, t.slice(0, 32)), t.slice(32));
        } catch (r) {
          return f(e, t + 1);
        }
      }
      function h(e, t = '') {
        const r = (0, i.c)(l, e),
          n = p(r.slice(0, 32), r.slice(32));
        return t && 'm' !== t && 'M' !== t && "m'" !== t && "M'" !== t
          ? ((0, s.h)((0, d.p)(t), 'Invalid derivation path'),
            t
              .split('/')
              .slice(1)
              .reduce(
                (e, t) =>
                  f(
                    e,
                    parseInt(t, 10) +
                      (t.length > 1 && t.endsWith("'") ? d.s : 0)
                  ),
                n
              ))
          : n;
      }
    },
    12873: (e, t, r) => {
      'use strict';
      r.d(t, { O: () => m });
      var n = r(85818),
        a = r(47590),
        o = r(38340),
        s = r(85302),
        i = r(87672),
        c = r(80081),
        u = r(19699),
        d = r(24642),
        l = r(55036),
        p = r(40929),
        f = r(48617);
      const h = 'ed25519 seed';
      function m(e, t) {
        return (
          (0, n.h)((0, a.S)(e), 'Invalid mnemonic passed to ledger derivation'),
          (0, n.h)((0, s.p)(t), 'Invalid derivation path'),
          (0, o.Q)(
            t
              .split('/')
              .slice(1)
              .map((e) => parseInt(e.replace("'", ''), 10))
              .map((e) => (e < s.s ? e + s.s : e))
              .reduce(
                (e, t) =>
                  (function (e, t) {
                    const r = e.subarray(0, 32),
                      n = e.subarray(32, 64),
                      a = e.subarray(64, 96),
                      o = (0, i.e)(
                        [0],
                        r,
                        n,
                        (0, c.a)(t, { bitLength: 32, isLe: !0 })
                      ),
                      s = (0, l.c)(a, o);
                    return (
                      (o[0] = 1),
                      (0, i.e)(
                        (0, c.a)(
                          (0, u._)(r, { isLe: !0 }).iadd(
                            (0, u._)(s.subarray(0, 28), { isLe: !0 }).imul(d.ru)
                          ),
                          { bitLength: 512, isLe: !0 }
                        ).subarray(0, 32),
                        (0, c.a)(
                          (0, u._)(n, { isLe: !0 }).iadd(
                            (0, u._)(s.subarray(32, 64), { isLe: !0 })
                          ),
                          { bitLength: 512, isLe: !0 }
                        ).subarray(0, 32),
                        (0, l.c)(a, o).subarray(32, 64)
                      )
                    );
                  })(e, t),
                (function (e) {
                  const t = (0, f.Z1)(e),
                    r = (0, p.S)(h, new Uint8Array([1, ...t]));
                  let n;
                  for (; !n || 32 & n[31]; ) n = (0, l.c)(h, n || t);
                  return (
                    (n[0] &= 248), (n[31] &= 127), (n[31] |= 64), (0, i.e)(n, r)
                  );
                })(e)
              )
              .slice(0, 32)
          )
        );
      }
    },
    85302: (e, t, r) => {
      'use strict';
      r.d(t, { s: () => n, p: () => a });
      const n = 2147483648;
      function a(e) {
        if (!e.startsWith('m/')) return !1;
        const t = e.split('/').slice(1);
        return (
          t.every((e) => /^\d+'?$/.test(e)) &&
          !t
            .map((e) => parseInt(e.replace("'", ''), 10))
            .some((e) => isNaN(e) || e >= n || e < 0)
        );
      }
    },
    40929: (e, t, r) => {
      'use strict';
      r.d(t, { S: () => a });
      var n = r(34485);
      function a(e, t) {
        return Uint8Array.from(n.hmac(n.sha256, e).update(t).digest());
      }
    },
    55036: (e, t, r) => {
      'use strict';
      r.d(t, { c: () => a });
      var n = r(34485);
      function a(e, t) {
        return Uint8Array.from(n.hmac(n.sha512, e).update(t).digest());
      }
    },
    4371: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          addressEq: () => E.Q,
          addressToEvm: () => i,
          base32Decode: () => L,
          base32Encode: () => V,
          base32Validate: () => B,
          base58Decode: () => c.M,
          base58Encode: () => q.n,
          base58Validate: () => R.v,
          base64Decode: () => G.t,
          base64Encode: () => z.h,
          base64Pad: () => W,
          base64Trim: () => $,
          base64Validate: () => Y.O,
          blake2AsHex: () => J.$,
          blake2AsU8a: () => y.b,
          checkAddress: () => l,
          checkAddressChecksum: () => u.l,
          createKeyDerived: () => g,
          createKeyMulti: () => p.i,
          cryptoIsReady: () => Q.G,
          cryptoWaitReady: () => Q.I,
          decodeAddress: () => s.m,
          deriveAddress: () => _,
          encodeAddress: () => k.m,
          encodeDerivedAddress: () => I,
          encodeMultiAddress: () => P,
          ethereumEncode: () => ee.K,
          evmToAddress: () => x,
          hdEthereum: () => ne.d,
          hdLedger: () => ae.O,
          hdValidatePath: () => oe.p,
          hmacSha256: () => se.S,
          hmacSha512: () => ie.c,
          isAddress: () => N,
          isBase32: () => H,
          isBase58: () => Z,
          isBase64: () => X,
          isEthereumAddress: () => te.u,
          isEthereumChecksum: () => re.V,
          jsonDecrypt: () => ce.t,
          jsonDecryptData: () => ue.g,
          jsonEncrypt: () => de.m,
          jsonEncryptFormat: () => le.T,
          keccakAsHex: () => he,
          keccakAsU8a: () => fe.i,
          keyExtractPath: () => w.c,
          keyExtractSuri: () => me.Q,
          keyFromPath: () => ye.p,
          keyHdkdEcdsa: () => ve.m,
          keyHdkdEd25519: () => be.A,
          keyHdkdSr25519: () => ge.J,
          mnemonicGenerate: () => we._,
          mnemonicToEntropy: () => Oe.o,
          mnemonicToLegacySeed: () => Ae.r,
          mnemonicToMiniSecret: () => ke.S,
          mnemonicValidate: () => _e.S,
          naclBoxKeypairFromSecret: () => De,
          naclDecrypt: () => Ie.d,
          naclEncrypt: () => Pe.V,
          naclKeypairFromRandom: () => xe,
          naclKeypairFromSecret: () => Ee,
          naclKeypairFromSeed: () => Te.Q,
          naclKeypairFromString: () => Ne,
          naclOpen: () => Re,
          naclSeal: () => Be,
          naclSign: () => Ce.b,
          naclVerify: () => je.C,
          packageInfo: () => o.b,
          pbkdf2Encode: () => Me.P,
          randomAsHex: () => Le.f,
          randomAsNumber: () => He,
          randomAsU8a: () => Ue.F,
          schnorrkelDeriveHard: () => qe.N,
          schnorrkelDerivePublic: () => A,
          schnorrkelDeriveSoft: () => Ze.A,
          schnorrkelKeypairFromSeed: () => Ge.p,
          schnorrkelSign: () => ze.U,
          schnorrkelVerify: () => We.P,
          schnorrkelVrfSign: () => $e.$,
          schnorrkelVrfVerify: () => Ye.n,
          scryptEncode: () => Xe.z,
          scryptFromU8a: () => Je.O,
          scryptToU8a: () => Qe.e,
          secp256k1Compress: () => et.R,
          secp256k1Expand: () => tt.o,
          secp256k1KeypairFromSeed: () => rt.M,
          secp256k1PrivateKeyTweakAdd: () => st.n,
          secp256k1Recover: () => at,
          secp256k1Sign: () => ot.y,
          secp256k1Verify: () => it.L,
          setSS58Format: () => C.S,
          sha512AsU8a: () => ct,
          signatureVerify: () => ut.D,
          sortAddresses: () => j.i,
          validateAddress: () => T,
          xxhashAsHex: () => dt.R,
          xxhashAsU8a: () => lt.r
        });
      var n = r(228),
        a = r(40412),
        o = r(58534);
      (0, n.E)(o.b, 'undefined' != typeof __dirname && __dirname, [
        { name: '@polkadot/networks', version: '6.2.2-7' },
        a.b,
        { name: '@polkadot/x-randomvalues', version: '6.2.2-7' }
      ]);
      var s = r(87602);
      function i(e, t) {
        return (0, s.m)(e, t).subarray(0, 20);
      }
      var c = r(43282),
        u = r(13496),
        d = r(23425);
      function l(e, t) {
        let r;
        try {
          r = (0, c.M)(e);
        } catch (e) {
          return [!1, e.message];
        }
        const [n, , , a] = (0, u.l)(r);
        return a !== t
          ? [!1, `Prefix mismatch, expected ${t}, found ${a}`]
          : d.c.allowedEncodedLengths.includes(r.length)
          ? [n, n ? null : 'Invalid decoded address checksum']
          : [!1, 'Invalid decoded address length'];
      }
      var p = r(76235),
        f = r(8431),
        h = r(87672),
        m = r(80081),
        y = r(13085);
      const b = (0, f.d)('modlpy/utilisuba');
      function g(e, t) {
        return (0, y.b)(
          (0, h.e)(b, (0, s.m)(e), (0, m.a)(t, { bitLength: 16, isLe: !0 }))
        );
      }
      var v = r(85818),
        w = r(67584),
        O = r(43243);
      function A(e, t) {
        return (0, O.HH)(e, t);
      }
      var k = r(12733);
      function _(e, t, r) {
        const { path: n } = (0, w.c)(t);
        return (
          (0, v.h)(
            n.length && !n.some((e) => e.isHard),
            'Expected suri to contain a combination of non-hard paths'
          ),
          (0, k.m)(
            n.reduce((e, t) => A(e, t.chainCode), (0, s.m)(e)),
            r
          )
        );
      }
      function I(e, t, r) {
        return (0, k.m)(g((0, s.m)(e), t), r);
      }
      function P(e, t, r) {
        return (0, k.m)((0, p.i)(e, t), r);
      }
      var S = r(90979);
      function x(e, t, r = 'blake2') {
        const n = (0, h.e)('evm:', e);
        if (24 !== n.length)
          throw new Error(`Converting ${e}: Invalid evm address length`);
        const a = (0, S.G)(r, n);
        return (0, k.m)(a, t);
      }
      var E = r(47891);
      function T(e, t, r) {
        return !!(0, s.m)(e, t, r);
      }
      function N(e, t, r) {
        try {
          return T(e, t, r);
        } catch (e) {
          return !1;
        }
      }
      var C = r(68259),
        j = r(63951);
      const D = 'abcdefghijklmnopqrstuvwxyz234567';
      var R = r(82716);
      const U = { alphabet: D, ipfsChar: 'b', type: 'base32' };
      function B(e, t) {
        return (0, R.n)(U, e, t);
      }
      const M = D.split('').reduce((e, t, r) => ((e[t] = r), e), {});
      function L(e, t = !1) {
        B(e, t);
        const r = t ? 1 : 0,
          [n, a, o] = (function (e, t, r) {
            let n = 0,
              a = 0,
              o = 0;
            for (let s = r; s < t.length; s++)
              (a = (a << 5) | M[t[s]]),
                (n += 5),
                n >= 8 && ((n -= 8), (e[o++] = 255 & (a >> n)));
            return [e, n, a];
          })(new Uint8Array(((5 * (e.length - r)) / 8) | 0), e, r);
        return (
          (0, v.h)(!(a >= 5 || 255 & (o << (8 - a))), 'Unexpected end of data'),
          n
        );
      }
      var F = r(90791);
      function V(e, t = !1) {
        const r = (0, F.Y)(e);
        let n = '',
          a = 0,
          o = 0;
        for (let e = 0; e < r.length; ++e)
          for (o = (o << 8) | r[e], a += 8; a > 5; )
            (a -= 5), (n += D[31 & (o >> a)]);
        return a && (n += D[31 & (o << (5 - a))]), t ? `b${n}` : n;
      }
      function K(e, t, r) {
        try {
          return e(t, r);
        } catch (e) {
          return !1;
        }
      }
      function H(e, t) {
        return K(B, e, t);
      }
      var q = r(62636);
      function Z(e, t) {
        return K(R.v, e, t);
      }
      var G = r(78263),
        z = r(54765);
      function W(e) {
        return e.padEnd(e.length + (e.length % 4), '=');
      }
      function $(e) {
        for (; e.length && '=' === e[e.length - 1]; ) e = e.slice(0, -1);
        return e;
      }
      var Y = r(33875);
      function X(e) {
        try {
          return (0, Y.O)(e);
        } catch (e) {
          return !1;
        }
      }
      var J = r(87286),
        Q = r(36315),
        ee = r(72580),
        te = r(20122),
        re = r(68418),
        ne = r(98932),
        ae = r(12873),
        oe = r(85302),
        se = r(40929),
        ie = r(55036),
        ce = r(53594),
        ue = r(53139),
        de = r(69333),
        le = r(93374),
        pe = r(68631),
        fe = r(80013);
      function he(e, t) {
        return (0, pe.c)((0, fe.i)(e, t));
      }
      var me = r(58456),
        ye = r(59205),
        be = r(24034),
        ge = r(67559),
        ve = r(73747),
        we = r(31900),
        Oe = r(79960),
        Ae = r(34394),
        ke = r(79718),
        _e = r(47590),
        Ie = r(32336),
        Pe = r(92098),
        Se = r(60464);
      function xe() {
        return Se.sign.keyPair();
      }
      function Ee(e) {
        return Se.sign.keyPair.fromSecretKey(e);
      }
      var Te = r(38340);
      function Ne(e) {
        return (0, Te.Q)((0, y.b)((0, f.d)(e), 256));
      }
      var Ce = r(92183),
        je = r(90820);
      function De(e) {
        return Se.box.keyPair.fromSecretKey(e.slice(0, 32));
      }
      function Re(e, t, r, n) {
        return Se.box.open(e, t, r, n) || null;
      }
      var Ue = r(57592);
      function Be(e, t, r, n = (0, Ue.F)(24)) {
        return { nonce: n, sealed: Se.box(e, n, r, t) };
      }
      var Me = r(98180),
        Le = r(98040),
        Fe = r(62197),
        Ve = r(40757);
      const Ke = new Fe(9007199254740991);
      function He() {
        return (0, Ve.m)((0, Le.f)(8))
          .and(Ke)
          .toNumber();
      }
      var qe = r(7345),
        Ze = r(22106),
        Ge = r(37703),
        ze = r(79275),
        We = r(11980),
        $e = r(39883),
        Ye = r(31131),
        Xe = r(66255),
        Je = r(34464),
        Qe = r(92249),
        et = r(78987),
        tt = r(62161),
        rt = r(47174),
        nt = r(68937);
      function at(e, t, r) {
        return new Uint8Array(
          nt.k
            .recoverPubKey(e, { r: t.slice(0, 32), s: t.slice(32, 64) }, r)
            .encode(null, !0)
        );
      }
      var ot = r(1815),
        st = r(51215),
        it = r(84265);
      function ct(e, t = !1) {
        return (0, O.DK)() && !t ? (0, O.o)(e) : Se.hash(e);
      }
      var ut = r(20982),
        dt = r(51336),
        lt = r(27005);
    },
    33382: (e, t, r) => {
      'use strict';
      r.d(t, {
        Ls: () => n,
        Z1: () => a,
        IV: () => o,
        WH: () => s,
        gV: () => i
      });
      const n = ['scrypt', 'xsalsa20-poly1305'],
        a = ['none'],
        o = '3',
        s = 24,
        i = 44;
    },
    53594: (e, t, r) => {
      'use strict';
      r.d(t, { t: () => c });
      var n = r(85818),
        a = r(14842),
        o = r(25754),
        s = r(78263),
        i = r(53139);
      function c({ encoded: e, encoding: t }, r) {
        return (
          (0, n.h)(e, 'No encrypted data available to decode'),
          (0, i.g)(
            (0, a.v)(e) ? (0, o.G)(e) : (0, s.t)(e),
            r,
            Array.isArray(t.type) ? t.type : [t.type]
          )
        );
      }
    },
    53139: (e, t, r) => {
      'use strict';
      r.d(t, { g: () => d });
      var n = r(85818),
        a = r(8431),
        o = r(13137),
        s = r(32336),
        i = r(34464),
        c = r(66255),
        u = r(33382);
      function d(e, t, r = u.Ls) {
        (0, n.h)(e, 'No encrypted data available to decode'),
          (0, n.h)(
            t || !r.includes('xsalsa20-poly1305'),
            'Password required to decode encypted data'
          );
        let d = e;
        if (t) {
          let n;
          if (r.includes('scrypt')) {
            const { params: r, salt: a } = (0, i.O)(e);
            (n = (0, c.z)(t, a, r).password), (e = e.subarray(u.gV));
          } else n = (0, a.d)(t);
          d = (0, s.d)(
            e.subarray(u.WH),
            e.subarray(0, u.WH),
            (0, o.v)(n, 256, !0)
          );
        }
        return (0, n.h)(d, 'Unable to decode using the supplied passphrase'), d;
      }
    },
    69333: (e, t, r) => {
      'use strict';
      r.d(t, { m: () => c });
      var n = r(87672),
        a = r(92098),
        o = r(66255),
        s = r(92249),
        i = r(93374);
      function c(e, t, r) {
        let c = !1,
          u = e;
        if (r) {
          const { params: e, password: t, salt: i } = (0, o.z)(r),
            { encrypted: d, nonce: l } = (0, a.V)(u, t.subarray(0, 32));
          (c = !0), (u = (0, n.e)((0, s.e)(i, e), l, d));
        }
        return (0, i.T)(u, t, c);
      }
    },
    93374: (e, t, r) => {
      'use strict';
      r.d(t, { T: () => o });
      var n = r(54765),
        a = r(33382);
      function o(e, t, r) {
        return {
          encoded: (0, n.h)(e),
          encoding: { content: t, type: r ? a.Ls : a.Z1, version: a.IV }
        };
      }
    },
    80013: (e, t, r) => {
      'use strict';
      r.d(t, { i: () => s });
      var n = r(83669),
        a = r(90791),
        o = r(43243);
      function s(e, t = 256, r = !1) {
        const s = 256 === t;
        return (0, o.DK)() && s && !r
          ? (0, o.wn)((0, a.Y)(e))
          : new Uint8Array(
              (s ? n.keccak256 : n.keccak512).update((0, a.Y)(e)).arrayBuffer()
            );
      }
    },
    67584: (e, t, r) => {
      'use strict';
      r.d(t, { c: () => A });
      var n = r(85818),
        a = r(89539),
        o = r(38879),
        s = r(41216),
        i = r(7962),
        c = r(75041),
        u = r(15466),
        d = r(33298),
        l = r(14842),
        p = r(25754),
        f = r(85836),
        h = r(8431),
        m = r(13085);
      const y = /^\d+$/,
        b = { bitLength: 256, isLe: !0 };
      var g = (0, o.Z)('chainCode'),
        v = (0, o.Z)('isHard');
      class w {
        constructor() {
          Object.defineProperty(this, g, {
            writable: !0,
            value: new Uint8Array(32)
          }),
            Object.defineProperty(this, v, { writable: !0, value: !1 });
        }
        static from(e) {
          const t = new w(),
            [r, n] = e.startsWith('/') ? [e.substr(1), !0] : [e, !1];
          return t.soft(y.test(r) ? parseInt(r, 10) : r), n ? t.harden() : t;
        }
        get chainCode() {
          return (0, a.Z)(this, g)[g];
        }
        get isHard() {
          return (0, a.Z)(this, v)[v];
        }
        get isSoft() {
          return !(0, a.Z)(this, v)[v];
        }
        hard(e) {
          return this.soft(e).harden();
        }
        harden() {
          return ((0, a.Z)(this, v)[v] = !0), this;
        }
        soft(e) {
          return (0, s.h)(e) || (0, i.H)(e) || (0, c.C)(e)
            ? this.soft((0, u.G)(e, b))
            : (0, d.H)(e)
            ? (0, l.v)(e)
              ? this.soft((0, p.G)(e))
              : this.soft((0, f.N)((0, h.d)(e)))
            : e.length > 32
            ? this.soft((0, m.b)(e))
            : ((0, a.Z)(this, g)[g].fill(0),
              (0, a.Z)(this, g)[g].set(e, 0),
              this);
        }
        soften() {
          return ((0, a.Z)(this, v)[v] = !1), this;
        }
      }
      const O = /\/(\/?)([^/]+)/g;
      function A(e) {
        const t = e.match(O),
          r = [];
        let a = '';
        return (
          t &&
            ((a = t.join('')),
            t.forEach((e) => {
              r.push(w.from(e.substr(1)));
            })),
          (0, n.h)(
            a === e,
            () => `Re-constructed path "${a}" does not match input`
          ),
          { parts: t, path: r }
        );
      }
    },
    58456: (e, t, r) => {
      'use strict';
      r.d(t, { Q: () => i });
      var n = r(85818),
        a = r(19329),
        o = r(67584);
      const s = /^(\w+( \w+)*)((\/\/?[^/]+)*)(\/\/\/(.*))?$/;
      function i(e) {
        const t = e.match(s);
        (0, n.h)(
          !(0, a.F)(t),
          'Unable to match provided value to a secret URI'
        );
        const [, r, , i, , , c] = t,
          { path: u } = (0, o.c)(i);
        return { derivePath: i, password: c, path: u, phrase: r };
      }
    },
    59205: (e, t, r) => {
      'use strict';
      r.d(t, { p: () => i });
      var n = r(73747),
        a = r(24034),
        o = r(67559);
      const s = { ecdsa: n.m, ed25519: a.A, ethereum: n.m, sr25519: o.J };
      function i(e, t, r) {
        const n = s[r];
        return t.reduce((e, t) => n(e, t), e);
      }
    },
    73747: (e, t, r) => {
      'use strict';
      r.d(t, { m: () => d });
      var n = r(85818),
        a = r(85836),
        o = r(8431),
        s = r(87672),
        i = r(13085);
      const c = (0, a.N)((0, o.d)('Secp256k1HDKD'));
      var u = r(47174);
      function d(e, { chainCode: t, isHard: r }) {
        return (
          (0, n.h)(r, 'A soft key was found in the path (and is unsupported)'),
          (0, u.M)(
            (function (e, t) {
              return (0, i.b)((0, s.e)(c, e, t), 256);
            })(e.secretKey.subarray(0, 32), t)
          )
        );
      }
    },
    24034: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => d });
      var n = r(85818),
        a = r(85836),
        o = r(8431),
        s = r(87672),
        i = r(13085);
      const c = (0, a.N)((0, o.d)('Ed25519HDKD'));
      var u = r(38340);
      function d(e, { chainCode: t, isHard: r }) {
        return (
          (0, n.h)(r, 'A soft key was found in the path (and is unsupported)'),
          (0, u.Q)(
            (function (e, t) {
              return (0, i.b)((0, s.e)(c, e, t));
            })(e.secretKey.subarray(0, 32), t)
          )
        );
      }
    },
    67559: (e, t, r) => {
      'use strict';
      r.d(t, { J: () => o });
      var n = r(7345),
        a = r(22106);
      function o(e, { chainCode: t, isSoft: r }) {
        return r ? (0, a.A)(e, t) : (0, n.N)(e, t);
      }
    },
    48617: (e, t, r) => {
      'use strict';
      r.d(t, { OF: () => g, oy: () => b, Z1: () => y, _I: () => v });
      var n = r(34485),
        a = r(8431),
        o = r(85818),
        s = r(90791),
        i = r(98180),
        c = r(57592);
      const u = [
          'abandon',
          'ability',
          'able',
          'about',
          'above',
          'absent',
          'absorb',
          'abstract',
          'absurd',
          'abuse',
          'access',
          'accident',
          'account',
          'accuse',
          'achieve',
          'acid',
          'acoustic',
          'acquire',
          'across',
          'act',
          'action',
          'actor',
          'actress',
          'actual',
          'adapt',
          'add',
          'addict',
          'address',
          'adjust',
          'admit',
          'adult',
          'advance',
          'advice',
          'aerobic',
          'affair',
          'afford',
          'afraid',
          'again',
          'age',
          'agent',
          'agree',
          'ahead',
          'aim',
          'air',
          'airport',
          'aisle',
          'alarm',
          'album',
          'alcohol',
          'alert',
          'alien',
          'all',
          'alley',
          'allow',
          'almost',
          'alone',
          'alpha',
          'already',
          'also',
          'alter',
          'always',
          'amateur',
          'amazing',
          'among',
          'amount',
          'amused',
          'analyst',
          'anchor',
          'ancient',
          'anger',
          'angle',
          'angry',
          'animal',
          'ankle',
          'announce',
          'annual',
          'another',
          'answer',
          'antenna',
          'antique',
          'anxiety',
          'any',
          'apart',
          'apology',
          'appear',
          'apple',
          'approve',
          'april',
          'arch',
          'arctic',
          'area',
          'arena',
          'argue',
          'arm',
          'armed',
          'armor',
          'army',
          'around',
          'arrange',
          'arrest',
          'arrive',
          'arrow',
          'art',
          'artefact',
          'artist',
          'artwork',
          'ask',
          'aspect',
          'assault',
          'asset',
          'assist',
          'assume',
          'asthma',
          'athlete',
          'atom',
          'attack',
          'attend',
          'attitude',
          'attract',
          'auction',
          'audit',
          'august',
          'aunt',
          'author',
          'auto',
          'autumn',
          'average',
          'avocado',
          'avoid',
          'awake',
          'aware',
          'away',
          'awesome',
          'awful',
          'awkward',
          'axis',
          'baby',
          'bachelor',
          'bacon',
          'badge',
          'bag',
          'balance',
          'balcony',
          'ball',
          'bamboo',
          'banana',
          'banner',
          'bar',
          'barely',
          'bargain',
          'barrel',
          'base',
          'basic',
          'basket',
          'battle',
          'beach',
          'bean',
          'beauty',
          'because',
          'become',
          'beef',
          'before',
          'begin',
          'behave',
          'behind',
          'believe',
          'below',
          'belt',
          'bench',
          'benefit',
          'best',
          'betray',
          'better',
          'between',
          'beyond',
          'bicycle',
          'bid',
          'bike',
          'bind',
          'biology',
          'bird',
          'birth',
          'bitter',
          'black',
          'blade',
          'blame',
          'blanket',
          'blast',
          'bleak',
          'bless',
          'blind',
          'blood',
          'blossom',
          'blouse',
          'blue',
          'blur',
          'blush',
          'board',
          'boat',
          'body',
          'boil',
          'bomb',
          'bone',
          'bonus',
          'book',
          'boost',
          'border',
          'boring',
          'borrow',
          'boss',
          'bottom',
          'bounce',
          'box',
          'boy',
          'bracket',
          'brain',
          'brand',
          'brass',
          'brave',
          'bread',
          'breeze',
          'brick',
          'bridge',
          'brief',
          'bright',
          'bring',
          'brisk',
          'broccoli',
          'broken',
          'bronze',
          'broom',
          'brother',
          'brown',
          'brush',
          'bubble',
          'buddy',
          'budget',
          'buffalo',
          'build',
          'bulb',
          'bulk',
          'bullet',
          'bundle',
          'bunker',
          'burden',
          'burger',
          'burst',
          'bus',
          'business',
          'busy',
          'butter',
          'buyer',
          'buzz',
          'cabbage',
          'cabin',
          'cable',
          'cactus',
          'cage',
          'cake',
          'call',
          'calm',
          'camera',
          'camp',
          'can',
          'canal',
          'cancel',
          'candy',
          'cannon',
          'canoe',
          'canvas',
          'canyon',
          'capable',
          'capital',
          'captain',
          'car',
          'carbon',
          'card',
          'cargo',
          'carpet',
          'carry',
          'cart',
          'case',
          'cash',
          'casino',
          'castle',
          'casual',
          'cat',
          'catalog',
          'catch',
          'category',
          'cattle',
          'caught',
          'cause',
          'caution',
          'cave',
          'ceiling',
          'celery',
          'cement',
          'census',
          'century',
          'cereal',
          'certain',
          'chair',
          'chalk',
          'champion',
          'change',
          'chaos',
          'chapter',
          'charge',
          'chase',
          'chat',
          'cheap',
          'check',
          'cheese',
          'chef',
          'cherry',
          'chest',
          'chicken',
          'chief',
          'child',
          'chimney',
          'choice',
          'choose',
          'chronic',
          'chuckle',
          'chunk',
          'churn',
          'cigar',
          'cinnamon',
          'circle',
          'citizen',
          'city',
          'civil',
          'claim',
          'clap',
          'clarify',
          'claw',
          'clay',
          'clean',
          'clerk',
          'clever',
          'click',
          'client',
          'cliff',
          'climb',
          'clinic',
          'clip',
          'clock',
          'clog',
          'close',
          'cloth',
          'cloud',
          'clown',
          'club',
          'clump',
          'cluster',
          'clutch',
          'coach',
          'coast',
          'coconut',
          'code',
          'coffee',
          'coil',
          'coin',
          'collect',
          'color',
          'column',
          'combine',
          'come',
          'comfort',
          'comic',
          'common',
          'company',
          'concert',
          'conduct',
          'confirm',
          'congress',
          'connect',
          'consider',
          'control',
          'convince',
          'cook',
          'cool',
          'copper',
          'copy',
          'coral',
          'core',
          'corn',
          'correct',
          'cost',
          'cotton',
          'couch',
          'country',
          'couple',
          'course',
          'cousin',
          'cover',
          'coyote',
          'crack',
          'cradle',
          'craft',
          'cram',
          'crane',
          'crash',
          'crater',
          'crawl',
          'crazy',
          'cream',
          'credit',
          'creek',
          'crew',
          'cricket',
          'crime',
          'crisp',
          'critic',
          'crop',
          'cross',
          'crouch',
          'crowd',
          'crucial',
          'cruel',
          'cruise',
          'crumble',
          'crunch',
          'crush',
          'cry',
          'crystal',
          'cube',
          'culture',
          'cup',
          'cupboard',
          'curious',
          'current',
          'curtain',
          'curve',
          'cushion',
          'custom',
          'cute',
          'cycle',
          'dad',
          'damage',
          'damp',
          'dance',
          'danger',
          'daring',
          'dash',
          'daughter',
          'dawn',
          'day',
          'deal',
          'debate',
          'debris',
          'decade',
          'december',
          'decide',
          'decline',
          'decorate',
          'decrease',
          'deer',
          'defense',
          'define',
          'defy',
          'degree',
          'delay',
          'deliver',
          'demand',
          'demise',
          'denial',
          'dentist',
          'deny',
          'depart',
          'depend',
          'deposit',
          'depth',
          'deputy',
          'derive',
          'describe',
          'desert',
          'design',
          'desk',
          'despair',
          'destroy',
          'detail',
          'detect',
          'develop',
          'device',
          'devote',
          'diagram',
          'dial',
          'diamond',
          'diary',
          'dice',
          'diesel',
          'diet',
          'differ',
          'digital',
          'dignity',
          'dilemma',
          'dinner',
          'dinosaur',
          'direct',
          'dirt',
          'disagree',
          'discover',
          'disease',
          'dish',
          'dismiss',
          'disorder',
          'display',
          'distance',
          'divert',
          'divide',
          'divorce',
          'dizzy',
          'doctor',
          'document',
          'dog',
          'doll',
          'dolphin',
          'domain',
          'donate',
          'donkey',
          'donor',
          'door',
          'dose',
          'double',
          'dove',
          'draft',
          'dragon',
          'drama',
          'drastic',
          'draw',
          'dream',
          'dress',
          'drift',
          'drill',
          'drink',
          'drip',
          'drive',
          'drop',
          'drum',
          'dry',
          'duck',
          'dumb',
          'dune',
          'during',
          'dust',
          'dutch',
          'duty',
          'dwarf',
          'dynamic',
          'eager',
          'eagle',
          'early',
          'earn',
          'earth',
          'easily',
          'east',
          'easy',
          'echo',
          'ecology',
          'economy',
          'edge',
          'edit',
          'educate',
          'effort',
          'egg',
          'eight',
          'either',
          'elbow',
          'elder',
          'electric',
          'elegant',
          'element',
          'elephant',
          'elevator',
          'elite',
          'else',
          'embark',
          'embody',
          'embrace',
          'emerge',
          'emotion',
          'employ',
          'empower',
          'empty',
          'enable',
          'enact',
          'end',
          'endless',
          'endorse',
          'enemy',
          'energy',
          'enforce',
          'engage',
          'engine',
          'enhance',
          'enjoy',
          'enlist',
          'enough',
          'enrich',
          'enroll',
          'ensure',
          'enter',
          'entire',
          'entry',
          'envelope',
          'episode',
          'equal',
          'equip',
          'era',
          'erase',
          'erode',
          'erosion',
          'error',
          'erupt',
          'escape',
          'essay',
          'essence',
          'estate',
          'eternal',
          'ethics',
          'evidence',
          'evil',
          'evoke',
          'evolve',
          'exact',
          'example',
          'excess',
          'exchange',
          'excite',
          'exclude',
          'excuse',
          'execute',
          'exercise',
          'exhaust',
          'exhibit',
          'exile',
          'exist',
          'exit',
          'exotic',
          'expand',
          'expect',
          'expire',
          'explain',
          'expose',
          'express',
          'extend',
          'extra',
          'eye',
          'eyebrow',
          'fabric',
          'face',
          'faculty',
          'fade',
          'faint',
          'faith',
          'fall',
          'false',
          'fame',
          'family',
          'famous',
          'fan',
          'fancy',
          'fantasy',
          'farm',
          'fashion',
          'fat',
          'fatal',
          'father',
          'fatigue',
          'fault',
          'favorite',
          'feature',
          'february',
          'federal',
          'fee',
          'feed',
          'feel',
          'female',
          'fence',
          'festival',
          'fetch',
          'fever',
          'few',
          'fiber',
          'fiction',
          'field',
          'figure',
          'file',
          'film',
          'filter',
          'final',
          'find',
          'fine',
          'finger',
          'finish',
          'fire',
          'firm',
          'first',
          'fiscal',
          'fish',
          'fit',
          'fitness',
          'fix',
          'flag',
          'flame',
          'flash',
          'flat',
          'flavor',
          'flee',
          'flight',
          'flip',
          'float',
          'flock',
          'floor',
          'flower',
          'fluid',
          'flush',
          'fly',
          'foam',
          'focus',
          'fog',
          'foil',
          'fold',
          'follow',
          'food',
          'foot',
          'force',
          'forest',
          'forget',
          'fork',
          'fortune',
          'forum',
          'forward',
          'fossil',
          'foster',
          'found',
          'fox',
          'fragile',
          'frame',
          'frequent',
          'fresh',
          'friend',
          'fringe',
          'frog',
          'front',
          'frost',
          'frown',
          'frozen',
          'fruit',
          'fuel',
          'fun',
          'funny',
          'furnace',
          'fury',
          'future',
          'gadget',
          'gain',
          'galaxy',
          'gallery',
          'game',
          'gap',
          'garage',
          'garbage',
          'garden',
          'garlic',
          'garment',
          'gas',
          'gasp',
          'gate',
          'gather',
          'gauge',
          'gaze',
          'general',
          'genius',
          'genre',
          'gentle',
          'genuine',
          'gesture',
          'ghost',
          'giant',
          'gift',
          'giggle',
          'ginger',
          'giraffe',
          'girl',
          'give',
          'glad',
          'glance',
          'glare',
          'glass',
          'glide',
          'glimpse',
          'globe',
          'gloom',
          'glory',
          'glove',
          'glow',
          'glue',
          'goat',
          'goddess',
          'gold',
          'good',
          'goose',
          'gorilla',
          'gospel',
          'gossip',
          'govern',
          'gown',
          'grab',
          'grace',
          'grain',
          'grant',
          'grape',
          'grass',
          'gravity',
          'great',
          'green',
          'grid',
          'grief',
          'grit',
          'grocery',
          'group',
          'grow',
          'grunt',
          'guard',
          'guess',
          'guide',
          'guilt',
          'guitar',
          'gun',
          'gym',
          'habit',
          'hair',
          'half',
          'hammer',
          'hamster',
          'hand',
          'happy',
          'harbor',
          'hard',
          'harsh',
          'harvest',
          'hat',
          'have',
          'hawk',
          'hazard',
          'head',
          'health',
          'heart',
          'heavy',
          'hedgehog',
          'height',
          'hello',
          'helmet',
          'help',
          'hen',
          'hero',
          'hidden',
          'high',
          'hill',
          'hint',
          'hip',
          'hire',
          'history',
          'hobby',
          'hockey',
          'hold',
          'hole',
          'holiday',
          'hollow',
          'home',
          'honey',
          'hood',
          'hope',
          'horn',
          'horror',
          'horse',
          'hospital',
          'host',
          'hotel',
          'hour',
          'hover',
          'hub',
          'huge',
          'human',
          'humble',
          'humor',
          'hundred',
          'hungry',
          'hunt',
          'hurdle',
          'hurry',
          'hurt',
          'husband',
          'hybrid',
          'ice',
          'icon',
          'idea',
          'identify',
          'idle',
          'ignore',
          'ill',
          'illegal',
          'illness',
          'image',
          'imitate',
          'immense',
          'immune',
          'impact',
          'impose',
          'improve',
          'impulse',
          'inch',
          'include',
          'income',
          'increase',
          'index',
          'indicate',
          'indoor',
          'industry',
          'infant',
          'inflict',
          'inform',
          'inhale',
          'inherit',
          'initial',
          'inject',
          'injury',
          'inmate',
          'inner',
          'innocent',
          'input',
          'inquiry',
          'insane',
          'insect',
          'inside',
          'inspire',
          'install',
          'intact',
          'interest',
          'into',
          'invest',
          'invite',
          'involve',
          'iron',
          'island',
          'isolate',
          'issue',
          'item',
          'ivory',
          'jacket',
          'jaguar',
          'jar',
          'jazz',
          'jealous',
          'jeans',
          'jelly',
          'jewel',
          'job',
          'join',
          'joke',
          'journey',
          'joy',
          'judge',
          'juice',
          'jump',
          'jungle',
          'junior',
          'junk',
          'just',
          'kangaroo',
          'keen',
          'keep',
          'ketchup',
          'key',
          'kick',
          'kid',
          'kidney',
          'kind',
          'kingdom',
          'kiss',
          'kit',
          'kitchen',
          'kite',
          'kitten',
          'kiwi',
          'knee',
          'knife',
          'knock',
          'know',
          'lab',
          'label',
          'labor',
          'ladder',
          'lady',
          'lake',
          'lamp',
          'language',
          'laptop',
          'large',
          'later',
          'latin',
          'laugh',
          'laundry',
          'lava',
          'law',
          'lawn',
          'lawsuit',
          'layer',
          'lazy',
          'leader',
          'leaf',
          'learn',
          'leave',
          'lecture',
          'left',
          'leg',
          'legal',
          'legend',
          'leisure',
          'lemon',
          'lend',
          'length',
          'lens',
          'leopard',
          'lesson',
          'letter',
          'level',
          'liar',
          'liberty',
          'library',
          'license',
          'life',
          'lift',
          'light',
          'like',
          'limb',
          'limit',
          'link',
          'lion',
          'liquid',
          'list',
          'little',
          'live',
          'lizard',
          'load',
          'loan',
          'lobster',
          'local',
          'lock',
          'logic',
          'lonely',
          'long',
          'loop',
          'lottery',
          'loud',
          'lounge',
          'love',
          'loyal',
          'lucky',
          'luggage',
          'lumber',
          'lunar',
          'lunch',
          'luxury',
          'lyrics',
          'machine',
          'mad',
          'magic',
          'magnet',
          'maid',
          'mail',
          'main',
          'major',
          'make',
          'mammal',
          'man',
          'manage',
          'mandate',
          'mango',
          'mansion',
          'manual',
          'maple',
          'marble',
          'march',
          'margin',
          'marine',
          'market',
          'marriage',
          'mask',
          'mass',
          'master',
          'match',
          'material',
          'math',
          'matrix',
          'matter',
          'maximum',
          'maze',
          'meadow',
          'mean',
          'measure',
          'meat',
          'mechanic',
          'medal',
          'media',
          'melody',
          'melt',
          'member',
          'memory',
          'mention',
          'menu',
          'mercy',
          'merge',
          'merit',
          'merry',
          'mesh',
          'message',
          'metal',
          'method',
          'middle',
          'midnight',
          'milk',
          'million',
          'mimic',
          'mind',
          'minimum',
          'minor',
          'minute',
          'miracle',
          'mirror',
          'misery',
          'miss',
          'mistake',
          'mix',
          'mixed',
          'mixture',
          'mobile',
          'model',
          'modify',
          'mom',
          'moment',
          'monitor',
          'monkey',
          'monster',
          'month',
          'moon',
          'moral',
          'more',
          'morning',
          'mosquito',
          'mother',
          'motion',
          'motor',
          'mountain',
          'mouse',
          'move',
          'movie',
          'much',
          'muffin',
          'mule',
          'multiply',
          'muscle',
          'museum',
          'mushroom',
          'music',
          'must',
          'mutual',
          'myself',
          'mystery',
          'myth',
          'naive',
          'name',
          'napkin',
          'narrow',
          'nasty',
          'nation',
          'nature',
          'near',
          'neck',
          'need',
          'negative',
          'neglect',
          'neither',
          'nephew',
          'nerve',
          'nest',
          'net',
          'network',
          'neutral',
          'never',
          'news',
          'next',
          'nice',
          'night',
          'noble',
          'noise',
          'nominee',
          'noodle',
          'normal',
          'north',
          'nose',
          'notable',
          'note',
          'nothing',
          'notice',
          'novel',
          'now',
          'nuclear',
          'number',
          'nurse',
          'nut',
          'oak',
          'obey',
          'object',
          'oblige',
          'obscure',
          'observe',
          'obtain',
          'obvious',
          'occur',
          'ocean',
          'october',
          'odor',
          'off',
          'offer',
          'office',
          'often',
          'oil',
          'okay',
          'old',
          'olive',
          'olympic',
          'omit',
          'once',
          'one',
          'onion',
          'online',
          'only',
          'open',
          'opera',
          'opinion',
          'oppose',
          'option',
          'orange',
          'orbit',
          'orchard',
          'order',
          'ordinary',
          'organ',
          'orient',
          'original',
          'orphan',
          'ostrich',
          'other',
          'outdoor',
          'outer',
          'output',
          'outside',
          'oval',
          'oven',
          'over',
          'own',
          'owner',
          'oxygen',
          'oyster',
          'ozone',
          'pact',
          'paddle',
          'page',
          'pair',
          'palace',
          'palm',
          'panda',
          'panel',
          'panic',
          'panther',
          'paper',
          'parade',
          'parent',
          'park',
          'parrot',
          'party',
          'pass',
          'patch',
          'path',
          'patient',
          'patrol',
          'pattern',
          'pause',
          'pave',
          'payment',
          'peace',
          'peanut',
          'pear',
          'peasant',
          'pelican',
          'pen',
          'penalty',
          'pencil',
          'people',
          'pepper',
          'perfect',
          'permit',
          'person',
          'pet',
          'phone',
          'photo',
          'phrase',
          'physical',
          'piano',
          'picnic',
          'picture',
          'piece',
          'pig',
          'pigeon',
          'pill',
          'pilot',
          'pink',
          'pioneer',
          'pipe',
          'pistol',
          'pitch',
          'pizza',
          'place',
          'planet',
          'plastic',
          'plate',
          'play',
          'please',
          'pledge',
          'pluck',
          'plug',
          'plunge',
          'poem',
          'poet',
          'point',
          'polar',
          'pole',
          'police',
          'pond',
          'pony',
          'pool',
          'popular',
          'portion',
          'position',
          'possible',
          'post',
          'potato',
          'pottery',
          'poverty',
          'powder',
          'power',
          'practice',
          'praise',
          'predict',
          'prefer',
          'prepare',
          'present',
          'pretty',
          'prevent',
          'price',
          'pride',
          'primary',
          'print',
          'priority',
          'prison',
          'private',
          'prize',
          'problem',
          'process',
          'produce',
          'profit',
          'program',
          'project',
          'promote',
          'proof',
          'property',
          'prosper',
          'protect',
          'proud',
          'provide',
          'public',
          'pudding',
          'pull',
          'pulp',
          'pulse',
          'pumpkin',
          'punch',
          'pupil',
          'puppy',
          'purchase',
          'purity',
          'purpose',
          'purse',
          'push',
          'put',
          'puzzle',
          'pyramid',
          'quality',
          'quantum',
          'quarter',
          'question',
          'quick',
          'quit',
          'quiz',
          'quote',
          'rabbit',
          'raccoon',
          'race',
          'rack',
          'radar',
          'radio',
          'rail',
          'rain',
          'raise',
          'rally',
          'ramp',
          'ranch',
          'random',
          'range',
          'rapid',
          'rare',
          'rate',
          'rather',
          'raven',
          'raw',
          'razor',
          'ready',
          'real',
          'reason',
          'rebel',
          'rebuild',
          'recall',
          'receive',
          'recipe',
          'record',
          'recycle',
          'reduce',
          'reflect',
          'reform',
          'refuse',
          'region',
          'regret',
          'regular',
          'reject',
          'relax',
          'release',
          'relief',
          'rely',
          'remain',
          'remember',
          'remind',
          'remove',
          'render',
          'renew',
          'rent',
          'reopen',
          'repair',
          'repeat',
          'replace',
          'report',
          'require',
          'rescue',
          'resemble',
          'resist',
          'resource',
          'response',
          'result',
          'retire',
          'retreat',
          'return',
          'reunion',
          'reveal',
          'review',
          'reward',
          'rhythm',
          'rib',
          'ribbon',
          'rice',
          'rich',
          'ride',
          'ridge',
          'rifle',
          'right',
          'rigid',
          'ring',
          'riot',
          'ripple',
          'risk',
          'ritual',
          'rival',
          'river',
          'road',
          'roast',
          'robot',
          'robust',
          'rocket',
          'romance',
          'roof',
          'rookie',
          'room',
          'rose',
          'rotate',
          'rough',
          'round',
          'route',
          'royal',
          'rubber',
          'rude',
          'rug',
          'rule',
          'run',
          'runway',
          'rural',
          'sad',
          'saddle',
          'sadness',
          'safe',
          'sail',
          'salad',
          'salmon',
          'salon',
          'salt',
          'salute',
          'same',
          'sample',
          'sand',
          'satisfy',
          'satoshi',
          'sauce',
          'sausage',
          'save',
          'say',
          'scale',
          'scan',
          'scare',
          'scatter',
          'scene',
          'scheme',
          'school',
          'science',
          'scissors',
          'scorpion',
          'scout',
          'scrap',
          'screen',
          'script',
          'scrub',
          'sea',
          'search',
          'season',
          'seat',
          'second',
          'secret',
          'section',
          'security',
          'seed',
          'seek',
          'segment',
          'select',
          'sell',
          'seminar',
          'senior',
          'sense',
          'sentence',
          'series',
          'service',
          'session',
          'settle',
          'setup',
          'seven',
          'shadow',
          'shaft',
          'shallow',
          'share',
          'shed',
          'shell',
          'sheriff',
          'shield',
          'shift',
          'shine',
          'ship',
          'shiver',
          'shock',
          'shoe',
          'shoot',
          'shop',
          'short',
          'shoulder',
          'shove',
          'shrimp',
          'shrug',
          'shuffle',
          'shy',
          'sibling',
          'sick',
          'side',
          'siege',
          'sight',
          'sign',
          'silent',
          'silk',
          'silly',
          'silver',
          'similar',
          'simple',
          'since',
          'sing',
          'siren',
          'sister',
          'situate',
          'six',
          'size',
          'skate',
          'sketch',
          'ski',
          'skill',
          'skin',
          'skirt',
          'skull',
          'slab',
          'slam',
          'sleep',
          'slender',
          'slice',
          'slide',
          'slight',
          'slim',
          'slogan',
          'slot',
          'slow',
          'slush',
          'small',
          'smart',
          'smile',
          'smoke',
          'smooth',
          'snack',
          'snake',
          'snap',
          'sniff',
          'snow',
          'soap',
          'soccer',
          'social',
          'sock',
          'soda',
          'soft',
          'solar',
          'soldier',
          'solid',
          'solution',
          'solve',
          'someone',
          'song',
          'soon',
          'sorry',
          'sort',
          'soul',
          'sound',
          'soup',
          'source',
          'south',
          'space',
          'spare',
          'spatial',
          'spawn',
          'speak',
          'special',
          'speed',
          'spell',
          'spend',
          'sphere',
          'spice',
          'spider',
          'spike',
          'spin',
          'spirit',
          'split',
          'spoil',
          'sponsor',
          'spoon',
          'sport',
          'spot',
          'spray',
          'spread',
          'spring',
          'spy',
          'square',
          'squeeze',
          'squirrel',
          'stable',
          'stadium',
          'staff',
          'stage',
          'stairs',
          'stamp',
          'stand',
          'start',
          'state',
          'stay',
          'steak',
          'steel',
          'stem',
          'step',
          'stereo',
          'stick',
          'still',
          'sting',
          'stock',
          'stomach',
          'stone',
          'stool',
          'story',
          'stove',
          'strategy',
          'street',
          'strike',
          'strong',
          'struggle',
          'student',
          'stuff',
          'stumble',
          'style',
          'subject',
          'submit',
          'subway',
          'success',
          'such',
          'sudden',
          'suffer',
          'sugar',
          'suggest',
          'suit',
          'summer',
          'sun',
          'sunny',
          'sunset',
          'super',
          'supply',
          'supreme',
          'sure',
          'surface',
          'surge',
          'surprise',
          'surround',
          'survey',
          'suspect',
          'sustain',
          'swallow',
          'swamp',
          'swap',
          'swarm',
          'swear',
          'sweet',
          'swift',
          'swim',
          'swing',
          'switch',
          'sword',
          'symbol',
          'symptom',
          'syrup',
          'system',
          'table',
          'tackle',
          'tag',
          'tail',
          'talent',
          'talk',
          'tank',
          'tape',
          'target',
          'task',
          'taste',
          'tattoo',
          'taxi',
          'teach',
          'team',
          'tell',
          'ten',
          'tenant',
          'tennis',
          'tent',
          'term',
          'test',
          'text',
          'thank',
          'that',
          'theme',
          'then',
          'theory',
          'there',
          'they',
          'thing',
          'this',
          'thought',
          'three',
          'thrive',
          'throw',
          'thumb',
          'thunder',
          'ticket',
          'tide',
          'tiger',
          'tilt',
          'timber',
          'time',
          'tiny',
          'tip',
          'tired',
          'tissue',
          'title',
          'toast',
          'tobacco',
          'today',
          'toddler',
          'toe',
          'together',
          'toilet',
          'token',
          'tomato',
          'tomorrow',
          'tone',
          'tongue',
          'tonight',
          'tool',
          'tooth',
          'top',
          'topic',
          'topple',
          'torch',
          'tornado',
          'tortoise',
          'toss',
          'total',
          'tourist',
          'toward',
          'tower',
          'town',
          'toy',
          'track',
          'trade',
          'traffic',
          'tragic',
          'train',
          'transfer',
          'trap',
          'trash',
          'travel',
          'tray',
          'treat',
          'tree',
          'trend',
          'trial',
          'tribe',
          'trick',
          'trigger',
          'trim',
          'trip',
          'trophy',
          'trouble',
          'truck',
          'true',
          'truly',
          'trumpet',
          'trust',
          'truth',
          'try',
          'tube',
          'tuition',
          'tumble',
          'tuna',
          'tunnel',
          'turkey',
          'turn',
          'turtle',
          'twelve',
          'twenty',
          'twice',
          'twin',
          'twist',
          'two',
          'type',
          'typical',
          'ugly',
          'umbrella',
          'unable',
          'unaware',
          'uncle',
          'uncover',
          'under',
          'undo',
          'unfair',
          'unfold',
          'unhappy',
          'uniform',
          'unique',
          'unit',
          'universe',
          'unknown',
          'unlock',
          'until',
          'unusual',
          'unveil',
          'update',
          'upgrade',
          'uphold',
          'upon',
          'upper',
          'upset',
          'urban',
          'urge',
          'usage',
          'use',
          'used',
          'useful',
          'useless',
          'usual',
          'utility',
          'vacant',
          'vacuum',
          'vague',
          'valid',
          'valley',
          'valve',
          'van',
          'vanish',
          'vapor',
          'various',
          'vast',
          'vault',
          'vehicle',
          'velvet',
          'vendor',
          'venture',
          'venue',
          'verb',
          'verify',
          'version',
          'very',
          'vessel',
          'veteran',
          'viable',
          'vibrant',
          'vicious',
          'victory',
          'video',
          'view',
          'village',
          'vintage',
          'violin',
          'virtual',
          'virus',
          'visa',
          'visit',
          'visual',
          'vital',
          'vivid',
          'vocal',
          'voice',
          'void',
          'volcano',
          'volume',
          'vote',
          'voyage',
          'wage',
          'wagon',
          'wait',
          'walk',
          'wall',
          'walnut',
          'want',
          'warfare',
          'warm',
          'warrior',
          'wash',
          'wasp',
          'waste',
          'water',
          'wave',
          'way',
          'wealth',
          'weapon',
          'wear',
          'weasel',
          'weather',
          'web',
          'wedding',
          'weekend',
          'weird',
          'welcome',
          'west',
          'wet',
          'whale',
          'what',
          'wheat',
          'wheel',
          'when',
          'where',
          'whip',
          'whisper',
          'wide',
          'width',
          'wife',
          'wild',
          'will',
          'win',
          'window',
          'wine',
          'wing',
          'wink',
          'winner',
          'winter',
          'wire',
          'wisdom',
          'wise',
          'wish',
          'witness',
          'wolf',
          'woman',
          'wonder',
          'wood',
          'wool',
          'word',
          'work',
          'world',
          'worry',
          'worth',
          'wrap',
          'wreck',
          'wrestle',
          'wrist',
          'write',
          'wrong',
          'yard',
          'year',
          'yellow',
          'you',
          'young',
          'youth',
          'zebra',
          'zero',
          'zone',
          'zoo'
        ],
        d = 'Invalid mnemonic',
        l = 'Invalid entropy';
      function p(e) {
        return (e || '').normalize('NFKD');
      }
      function f(e) {
        return parseInt(e, 2);
      }
      function h(e) {
        return e.map((e) => e.toString(2).padStart(8, '0')).join('');
      }
      function m(e) {
        const t = (8 * e.length) / 32,
          r = n.sha256().update(e).digest();
        return h(Array.from(r)).slice(0, t);
      }
      function y(e, t) {
        const r = (0, a.d)(p(e)),
          n = (0, a.d)(`mnemonic${p(t)}`);
        return (0, i.P)(r, n).password;
      }
      function b(e) {
        var t;
        const r = p(e).split(' ');
        (0, o.h)(r.length % 3 == 0, d);
        const n = r
            .map((e) => {
              const t = u.indexOf(e);
              return (0, o.h)(-1 !== t, d), t.toString(2).padStart(11, '0');
            })
            .join(''),
          a = 32 * Math.floor(n.length / 33),
          i = n.slice(0, a),
          c = n.slice(a),
          h =
            null === (t = i.match(/(.{1,8})/g)) || void 0 === t
              ? void 0
              : t.map(f);
        (0, o.h)(h && h.length % 4 == 0 && h.length >= 16 && h.length <= 32, l);
        const y = (0, s.Y)(h),
          b = m(y);
        return (0, o.h)(b === c, 'Invalid mnemonic checksum'), y;
      }
      function g(e) {
        return (
          (e = e || 128),
          (0, o.h)(e % 32 == 0, l),
          (t = (0, c.F)(e / 8)),
          (0, o.h)(t.length % 4 == 0 && t.length >= 16 && t.length <= 32, l),
          (h(Array.from(t)) + m(t))
            .match(/(.{1,11})/g)
            .map((e) => u[f(e)])
            .join(' ')
        );
        var t;
      }
      function v(e) {
        try {
          b(e);
        } catch (e) {
          return !1;
        }
        return !0;
      }
    },
    31900: (e, t, r) => {
      'use strict';
      r.d(t, { _: () => s });
      var n = r(43243),
        a = r(48617);
      const o = { 12: 128, 15: 160, 18: 192, 21: 224, 24: 256 };
      function s(e = 12, t = !1) {
        return (0, n.DK)() && !t ? (0, n.s)(e) : (0, a.OF)(o[e]);
      }
    },
    79960: (e, t, r) => {
      'use strict';
      r.d(t, { o: () => o });
      var n = r(43243),
        a = r(48617);
      function o(e, t = !1) {
        return (0, n.DK)() && !t ? (0, n.ud)(e) : (0, a.oy)(e);
      }
    },
    34394: (e, t, r) => {
      'use strict';
      r.d(t, { r: () => i });
      var n = r(85818),
        a = r(43243),
        o = r(48617),
        s = r(47590);
      function i(e, t = '', r = !1, i = 32) {
        return (
          (0, n.h)((0, s.S)(e), 'Invalid bip39 mnemonic specified'),
          (0, n.h)(
            [32, 64].includes(i),
            () => `Invalid seed length ${i}, expected 32 or 64`
          ),
          i && 32 === i
            ? (0, a.DK)() && !r
              ? (0, a.Fq)(e, t)
              : (0, o.Z1)(e, t).subarray(0, 32)
            : 64 === i
            ? (0, o.Z1)(e, t)
            : new Uint8Array()
        );
      }
    },
    79718: (e, t, r) => {
      'use strict';
      r.d(t, { S: () => u });
      var n = r(85818),
        a = r(8431),
        o = r(43243),
        s = r(98180),
        i = r(79960),
        c = r(47590);
      function u(e, t = '', r = !1) {
        if (
          ((0, n.h)((0, c.S)(e), 'Invalid bip39 mnemonic specified'),
          (0, o.DK)() && !r)
        )
          return (0, o.gU)(e, t);
        const u = (0, i.o)(e),
          d = (0, a.d)(`mnemonic${t}`);
        return (0, s.P)(u, d).password.slice(0, 32);
      }
    },
    47590: (e, t, r) => {
      'use strict';
      r.d(t, { S: () => o });
      var n = r(43243),
        a = r(48617);
      function o(e, t = !1) {
        return (0, n.DK)() && !t ? (0, n.h9)(e) : (0, a._I)(e);
      }
    },
    32336: (e, t, r) => {
      'use strict';
      r.d(t, { d: () => a });
      var n = r(60464);
      function a(e, t, r) {
        return n.secretbox.open(e, t, r) || null;
      }
    },
    92098: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => o });
      var n = r(60464),
        a = r(57592);
      function o(e, t, r = (0, a.F)(24)) {
        return { encrypted: n.secretbox(e, r, t), nonce: r };
      }
    },
    38340: (e, t, r) => {
      'use strict';
      r.d(t, { Q: () => o });
      var n = r(60464),
        a = r(43243);
      function o(e) {
        if ((0, a.DK)()) {
          const t = (0, a.kE)(e);
          return { publicKey: t.slice(32), secretKey: t.slice(0, 64) };
        }
        return n.sign.keyPair.fromSeed(e);
      }
    },
    92183: (e, t, r) => {
      'use strict';
      r.d(t, { b: () => i });
      var n = r(60464),
        a = r(85818),
        o = r(90791),
        s = r(43243);
      function i(e, { publicKey: t, secretKey: r }, i = !1) {
        (0, a.h)(r, 'Expected a valid secretKey');
        const c = (0, o.Y)(e);
        return (0, s.DK)() && !i
          ? (0, s.P1)(t, r.subarray(0, 32), c)
          : n.sign.detached(c, r);
      }
    },
    90820: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => i });
      var n = r(60464),
        a = r(90791),
        o = r(85818),
        s = r(43243);
      function i(e, t, r, i = !1) {
        const c = (0, a.Y)(e),
          u = (0, a.Y)(r),
          d = (0, a.Y)(t);
        return (
          (0, o.h)(
            32 === u.length,
            () => `Invalid publicKey, received ${u.length}, expected 32`
          ),
          (0, o.h)(
            64 === d.length,
            () => `Invalid signature, received ${d.length} bytes, expected 64`
          ),
          (0, s.DK)() && !i
            ? (0, s.B8)(d, c, u)
            : n.sign.detached.verify(c, d, u)
        );
      }
    },
    60464: (e, t, r) => {
      !(function (e) {
        'use strict';
        var t = function (e) {
            var t,
              r = new Float64Array(16);
            if (e) for (t = 0; t < e.length; t++) r[t] = e[t];
            return r;
          },
          n = function () {
            throw new Error('no PRNG');
          },
          a = new Uint8Array(16),
          o = new Uint8Array(32);
        o[0] = 9;
        var s = t(),
          i = t([1]),
          c = t([56129, 1]),
          u = t([
            30883,
            4953,
            19914,
            30187,
            55467,
            16705,
            2637,
            112,
            59544,
            30585,
            16505,
            36039,
            65139,
            11119,
            27886,
            20995
          ]),
          d = t([
            61785,
            9906,
            39828,
            60374,
            45398,
            33411,
            5274,
            224,
            53552,
            61171,
            33010,
            6542,
            64743,
            22239,
            55772,
            9222
          ]),
          l = t([
            54554,
            36645,
            11616,
            51542,
            42930,
            38181,
            51040,
            26924,
            56412,
            64982,
            57905,
            49316,
            21502,
            52590,
            14035,
            8553
          ]),
          p = t([
            26200,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214,
            26214
          ]),
          f = t([
            41136,
            18958,
            6951,
            50414,
            58488,
            44335,
            6150,
            12099,
            55207,
            15867,
            153,
            11085,
            57099,
            20417,
            9344,
            11139
          ]);
        function h(e, t, r, n) {
          (e[t] = (r >> 24) & 255),
            (e[t + 1] = (r >> 16) & 255),
            (e[t + 2] = (r >> 8) & 255),
            (e[t + 3] = 255 & r),
            (e[t + 4] = (n >> 24) & 255),
            (e[t + 5] = (n >> 16) & 255),
            (e[t + 6] = (n >> 8) & 255),
            (e[t + 7] = 255 & n);
        }
        function m(e, t, r, n, a) {
          var o,
            s = 0;
          for (o = 0; o < a; o++) s |= e[t + o] ^ r[n + o];
          return (1 & ((s - 1) >>> 8)) - 1;
        }
        function y(e, t, r, n) {
          return m(e, t, r, n, 16);
        }
        function b(e, t, r, n) {
          return m(e, t, r, n, 32);
        }
        function g(e, t, r, n) {
          !(function (e, t, r, n) {
            for (
              var a,
                o =
                  (255 & n[0]) |
                  ((255 & n[1]) << 8) |
                  ((255 & n[2]) << 16) |
                  ((255 & n[3]) << 24),
                s =
                  (255 & r[0]) |
                  ((255 & r[1]) << 8) |
                  ((255 & r[2]) << 16) |
                  ((255 & r[3]) << 24),
                i =
                  (255 & r[4]) |
                  ((255 & r[5]) << 8) |
                  ((255 & r[6]) << 16) |
                  ((255 & r[7]) << 24),
                c =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                u =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                d =
                  (255 & n[4]) |
                  ((255 & n[5]) << 8) |
                  ((255 & n[6]) << 16) |
                  ((255 & n[7]) << 24),
                l =
                  (255 & t[0]) |
                  ((255 & t[1]) << 8) |
                  ((255 & t[2]) << 16) |
                  ((255 & t[3]) << 24),
                p =
                  (255 & t[4]) |
                  ((255 & t[5]) << 8) |
                  ((255 & t[6]) << 16) |
                  ((255 & t[7]) << 24),
                f =
                  (255 & t[8]) |
                  ((255 & t[9]) << 8) |
                  ((255 & t[10]) << 16) |
                  ((255 & t[11]) << 24),
                h =
                  (255 & t[12]) |
                  ((255 & t[13]) << 8) |
                  ((255 & t[14]) << 16) |
                  ((255 & t[15]) << 24),
                m =
                  (255 & n[8]) |
                  ((255 & n[9]) << 8) |
                  ((255 & n[10]) << 16) |
                  ((255 & n[11]) << 24),
                y =
                  (255 & r[16]) |
                  ((255 & r[17]) << 8) |
                  ((255 & r[18]) << 16) |
                  ((255 & r[19]) << 24),
                b =
                  (255 & r[20]) |
                  ((255 & r[21]) << 8) |
                  ((255 & r[22]) << 16) |
                  ((255 & r[23]) << 24),
                g =
                  (255 & r[24]) |
                  ((255 & r[25]) << 8) |
                  ((255 & r[26]) << 16) |
                  ((255 & r[27]) << 24),
                v =
                  (255 & r[28]) |
                  ((255 & r[29]) << 8) |
                  ((255 & r[30]) << 16) |
                  ((255 & r[31]) << 24),
                w =
                  (255 & n[12]) |
                  ((255 & n[13]) << 8) |
                  ((255 & n[14]) << 16) |
                  ((255 & n[15]) << 24),
                O = o,
                A = s,
                k = i,
                _ = c,
                I = u,
                P = d,
                S = l,
                x = p,
                E = f,
                T = h,
                N = m,
                C = y,
                j = b,
                D = g,
                R = v,
                U = w,
                B = 0;
              B < 20;
              B += 2
            )
              (O ^=
                ((a =
                  ((j ^=
                    ((a =
                      ((E ^=
                        ((a =
                          ((I ^= ((a = (O + j) | 0) << 7) | (a >>> 25)) + O) |
                          0) <<
                          9) |
                        (a >>> 23)) +
                        I) |
                      0) <<
                      13) |
                    (a >>> 19)) +
                    E) |
                  0) <<
                  18) |
                (a >>> 14)),
                (P ^=
                  ((a =
                    ((A ^=
                      ((a =
                        ((D ^=
                          ((a =
                            ((T ^= ((a = (P + A) | 0) << 7) | (a >>> 25)) + P) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          T) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      D) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (N ^=
                  ((a =
                    ((S ^=
                      ((a =
                        ((k ^=
                          ((a =
                            ((R ^= ((a = (N + S) | 0) << 7) | (a >>> 25)) + N) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          R) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      k) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (U ^=
                  ((a =
                    ((C ^=
                      ((a =
                        ((x ^=
                          ((a =
                            ((_ ^= ((a = (U + C) | 0) << 7) | (a >>> 25)) + U) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          _) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      x) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (O ^=
                  ((a =
                    ((_ ^=
                      ((a =
                        ((k ^=
                          ((a =
                            ((A ^= ((a = (O + _) | 0) << 7) | (a >>> 25)) + O) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          A) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      k) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (P ^=
                  ((a =
                    ((I ^=
                      ((a =
                        ((x ^=
                          ((a =
                            ((S ^= ((a = (P + I) | 0) << 7) | (a >>> 25)) + P) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          S) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      x) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (N ^=
                  ((a =
                    ((T ^=
                      ((a =
                        ((E ^=
                          ((a =
                            ((C ^= ((a = (N + T) | 0) << 7) | (a >>> 25)) + N) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          C) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      E) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (U ^=
                  ((a =
                    ((R ^=
                      ((a =
                        ((D ^=
                          ((a =
                            ((j ^= ((a = (U + R) | 0) << 7) | (a >>> 25)) + U) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          j) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      D) |
                    0) <<
                    18) |
                  (a >>> 14));
            (O = (O + o) | 0),
              (A = (A + s) | 0),
              (k = (k + i) | 0),
              (_ = (_ + c) | 0),
              (I = (I + u) | 0),
              (P = (P + d) | 0),
              (S = (S + l) | 0),
              (x = (x + p) | 0),
              (E = (E + f) | 0),
              (T = (T + h) | 0),
              (N = (N + m) | 0),
              (C = (C + y) | 0),
              (j = (j + b) | 0),
              (D = (D + g) | 0),
              (R = (R + v) | 0),
              (U = (U + w) | 0),
              (e[0] = (O >>> 0) & 255),
              (e[1] = (O >>> 8) & 255),
              (e[2] = (O >>> 16) & 255),
              (e[3] = (O >>> 24) & 255),
              (e[4] = (A >>> 0) & 255),
              (e[5] = (A >>> 8) & 255),
              (e[6] = (A >>> 16) & 255),
              (e[7] = (A >>> 24) & 255),
              (e[8] = (k >>> 0) & 255),
              (e[9] = (k >>> 8) & 255),
              (e[10] = (k >>> 16) & 255),
              (e[11] = (k >>> 24) & 255),
              (e[12] = (_ >>> 0) & 255),
              (e[13] = (_ >>> 8) & 255),
              (e[14] = (_ >>> 16) & 255),
              (e[15] = (_ >>> 24) & 255),
              (e[16] = (I >>> 0) & 255),
              (e[17] = (I >>> 8) & 255),
              (e[18] = (I >>> 16) & 255),
              (e[19] = (I >>> 24) & 255),
              (e[20] = (P >>> 0) & 255),
              (e[21] = (P >>> 8) & 255),
              (e[22] = (P >>> 16) & 255),
              (e[23] = (P >>> 24) & 255),
              (e[24] = (S >>> 0) & 255),
              (e[25] = (S >>> 8) & 255),
              (e[26] = (S >>> 16) & 255),
              (e[27] = (S >>> 24) & 255),
              (e[28] = (x >>> 0) & 255),
              (e[29] = (x >>> 8) & 255),
              (e[30] = (x >>> 16) & 255),
              (e[31] = (x >>> 24) & 255),
              (e[32] = (E >>> 0) & 255),
              (e[33] = (E >>> 8) & 255),
              (e[34] = (E >>> 16) & 255),
              (e[35] = (E >>> 24) & 255),
              (e[36] = (T >>> 0) & 255),
              (e[37] = (T >>> 8) & 255),
              (e[38] = (T >>> 16) & 255),
              (e[39] = (T >>> 24) & 255),
              (e[40] = (N >>> 0) & 255),
              (e[41] = (N >>> 8) & 255),
              (e[42] = (N >>> 16) & 255),
              (e[43] = (N >>> 24) & 255),
              (e[44] = (C >>> 0) & 255),
              (e[45] = (C >>> 8) & 255),
              (e[46] = (C >>> 16) & 255),
              (e[47] = (C >>> 24) & 255),
              (e[48] = (j >>> 0) & 255),
              (e[49] = (j >>> 8) & 255),
              (e[50] = (j >>> 16) & 255),
              (e[51] = (j >>> 24) & 255),
              (e[52] = (D >>> 0) & 255),
              (e[53] = (D >>> 8) & 255),
              (e[54] = (D >>> 16) & 255),
              (e[55] = (D >>> 24) & 255),
              (e[56] = (R >>> 0) & 255),
              (e[57] = (R >>> 8) & 255),
              (e[58] = (R >>> 16) & 255),
              (e[59] = (R >>> 24) & 255),
              (e[60] = (U >>> 0) & 255),
              (e[61] = (U >>> 8) & 255),
              (e[62] = (U >>> 16) & 255),
              (e[63] = (U >>> 24) & 255);
          })(e, t, r, n);
        }
        function v(e, t, r, n) {
          !(function (e, t, r, n) {
            for (
              var a,
                o =
                  (255 & n[0]) |
                  ((255 & n[1]) << 8) |
                  ((255 & n[2]) << 16) |
                  ((255 & n[3]) << 24),
                s =
                  (255 & r[0]) |
                  ((255 & r[1]) << 8) |
                  ((255 & r[2]) << 16) |
                  ((255 & r[3]) << 24),
                i =
                  (255 & r[4]) |
                  ((255 & r[5]) << 8) |
                  ((255 & r[6]) << 16) |
                  ((255 & r[7]) << 24),
                c =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                u =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                d =
                  (255 & n[4]) |
                  ((255 & n[5]) << 8) |
                  ((255 & n[6]) << 16) |
                  ((255 & n[7]) << 24),
                l =
                  (255 & t[0]) |
                  ((255 & t[1]) << 8) |
                  ((255 & t[2]) << 16) |
                  ((255 & t[3]) << 24),
                p =
                  (255 & t[4]) |
                  ((255 & t[5]) << 8) |
                  ((255 & t[6]) << 16) |
                  ((255 & t[7]) << 24),
                f =
                  (255 & t[8]) |
                  ((255 & t[9]) << 8) |
                  ((255 & t[10]) << 16) |
                  ((255 & t[11]) << 24),
                h =
                  (255 & t[12]) |
                  ((255 & t[13]) << 8) |
                  ((255 & t[14]) << 16) |
                  ((255 & t[15]) << 24),
                m =
                  (255 & n[8]) |
                  ((255 & n[9]) << 8) |
                  ((255 & n[10]) << 16) |
                  ((255 & n[11]) << 24),
                y =
                  (255 & r[16]) |
                  ((255 & r[17]) << 8) |
                  ((255 & r[18]) << 16) |
                  ((255 & r[19]) << 24),
                b =
                  (255 & r[20]) |
                  ((255 & r[21]) << 8) |
                  ((255 & r[22]) << 16) |
                  ((255 & r[23]) << 24),
                g =
                  (255 & r[24]) |
                  ((255 & r[25]) << 8) |
                  ((255 & r[26]) << 16) |
                  ((255 & r[27]) << 24),
                v =
                  (255 & r[28]) |
                  ((255 & r[29]) << 8) |
                  ((255 & r[30]) << 16) |
                  ((255 & r[31]) << 24),
                w =
                  (255 & n[12]) |
                  ((255 & n[13]) << 8) |
                  ((255 & n[14]) << 16) |
                  ((255 & n[15]) << 24),
                O = 0;
              O < 20;
              O += 2
            )
              (o ^=
                ((a =
                  ((b ^=
                    ((a =
                      ((f ^=
                        ((a =
                          ((u ^= ((a = (o + b) | 0) << 7) | (a >>> 25)) + o) |
                          0) <<
                          9) |
                        (a >>> 23)) +
                        u) |
                      0) <<
                      13) |
                    (a >>> 19)) +
                    f) |
                  0) <<
                  18) |
                (a >>> 14)),
                (d ^=
                  ((a =
                    ((s ^=
                      ((a =
                        ((g ^=
                          ((a =
                            ((h ^= ((a = (d + s) | 0) << 7) | (a >>> 25)) + d) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          h) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      g) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (m ^=
                  ((a =
                    ((l ^=
                      ((a =
                        ((i ^=
                          ((a =
                            ((v ^= ((a = (m + l) | 0) << 7) | (a >>> 25)) + m) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          v) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      i) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (w ^=
                  ((a =
                    ((y ^=
                      ((a =
                        ((p ^=
                          ((a =
                            ((c ^= ((a = (w + y) | 0) << 7) | (a >>> 25)) + w) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          c) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      p) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (o ^=
                  ((a =
                    ((c ^=
                      ((a =
                        ((i ^=
                          ((a =
                            ((s ^= ((a = (o + c) | 0) << 7) | (a >>> 25)) + o) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          s) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      i) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (d ^=
                  ((a =
                    ((u ^=
                      ((a =
                        ((p ^=
                          ((a =
                            ((l ^= ((a = (d + u) | 0) << 7) | (a >>> 25)) + d) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          l) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      p) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (m ^=
                  ((a =
                    ((h ^=
                      ((a =
                        ((f ^=
                          ((a =
                            ((y ^= ((a = (m + h) | 0) << 7) | (a >>> 25)) + m) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          y) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      f) |
                    0) <<
                    18) |
                  (a >>> 14)),
                (w ^=
                  ((a =
                    ((v ^=
                      ((a =
                        ((g ^=
                          ((a =
                            ((b ^= ((a = (w + v) | 0) << 7) | (a >>> 25)) + w) |
                            0) <<
                            9) |
                          (a >>> 23)) +
                          b) |
                        0) <<
                        13) |
                      (a >>> 19)) +
                      g) |
                    0) <<
                    18) |
                  (a >>> 14));
            (e[0] = (o >>> 0) & 255),
              (e[1] = (o >>> 8) & 255),
              (e[2] = (o >>> 16) & 255),
              (e[3] = (o >>> 24) & 255),
              (e[4] = (d >>> 0) & 255),
              (e[5] = (d >>> 8) & 255),
              (e[6] = (d >>> 16) & 255),
              (e[7] = (d >>> 24) & 255),
              (e[8] = (m >>> 0) & 255),
              (e[9] = (m >>> 8) & 255),
              (e[10] = (m >>> 16) & 255),
              (e[11] = (m >>> 24) & 255),
              (e[12] = (w >>> 0) & 255),
              (e[13] = (w >>> 8) & 255),
              (e[14] = (w >>> 16) & 255),
              (e[15] = (w >>> 24) & 255),
              (e[16] = (l >>> 0) & 255),
              (e[17] = (l >>> 8) & 255),
              (e[18] = (l >>> 16) & 255),
              (e[19] = (l >>> 24) & 255),
              (e[20] = (p >>> 0) & 255),
              (e[21] = (p >>> 8) & 255),
              (e[22] = (p >>> 16) & 255),
              (e[23] = (p >>> 24) & 255),
              (e[24] = (f >>> 0) & 255),
              (e[25] = (f >>> 8) & 255),
              (e[26] = (f >>> 16) & 255),
              (e[27] = (f >>> 24) & 255),
              (e[28] = (h >>> 0) & 255),
              (e[29] = (h >>> 8) & 255),
              (e[30] = (h >>> 16) & 255),
              (e[31] = (h >>> 24) & 255);
          })(e, t, r, n);
        }
        var w = new Uint8Array([
          101,
          120,
          112,
          97,
          110,
          100,
          32,
          51,
          50,
          45,
          98,
          121,
          116,
          101,
          32,
          107
        ]);
        function O(e, t, r, n, a, o, s) {
          var i,
            c,
            u = new Uint8Array(16),
            d = new Uint8Array(64);
          for (c = 0; c < 16; c++) u[c] = 0;
          for (c = 0; c < 8; c++) u[c] = o[c];
          for (; a >= 64; ) {
            for (g(d, u, s, w), c = 0; c < 64; c++) e[t + c] = r[n + c] ^ d[c];
            for (i = 1, c = 8; c < 16; c++)
              (i = (i + (255 & u[c])) | 0), (u[c] = 255 & i), (i >>>= 8);
            (a -= 64), (t += 64), (n += 64);
          }
          if (a > 0)
            for (g(d, u, s, w), c = 0; c < a; c++) e[t + c] = r[n + c] ^ d[c];
          return 0;
        }
        function A(e, t, r, n, a) {
          var o,
            s,
            i = new Uint8Array(16),
            c = new Uint8Array(64);
          for (s = 0; s < 16; s++) i[s] = 0;
          for (s = 0; s < 8; s++) i[s] = n[s];
          for (; r >= 64; ) {
            for (g(c, i, a, w), s = 0; s < 64; s++) e[t + s] = c[s];
            for (o = 1, s = 8; s < 16; s++)
              (o = (o + (255 & i[s])) | 0), (i[s] = 255 & o), (o >>>= 8);
            (r -= 64), (t += 64);
          }
          if (r > 0) for (g(c, i, a, w), s = 0; s < r; s++) e[t + s] = c[s];
          return 0;
        }
        function k(e, t, r, n, a) {
          var o = new Uint8Array(32);
          v(o, n, a, w);
          for (var s = new Uint8Array(8), i = 0; i < 8; i++) s[i] = n[i + 16];
          return A(e, t, r, s, o);
        }
        function _(e, t, r, n, a, o, s) {
          var i = new Uint8Array(32);
          v(i, o, s, w);
          for (var c = new Uint8Array(8), u = 0; u < 8; u++) c[u] = o[u + 16];
          return O(e, t, r, n, a, c, i);
        }
        var I = function (e) {
          var t, r, n, a, o, s, i, c;
          (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (t = (255 & e[0]) | ((255 & e[1]) << 8)),
            (this.r[0] = 8191 & t),
            (r = (255 & e[2]) | ((255 & e[3]) << 8)),
            (this.r[1] = 8191 & ((t >>> 13) | (r << 3))),
            (n = (255 & e[4]) | ((255 & e[5]) << 8)),
            (this.r[2] = 7939 & ((r >>> 10) | (n << 6))),
            (a = (255 & e[6]) | ((255 & e[7]) << 8)),
            (this.r[3] = 8191 & ((n >>> 7) | (a << 9))),
            (o = (255 & e[8]) | ((255 & e[9]) << 8)),
            (this.r[4] = 255 & ((a >>> 4) | (o << 12))),
            (this.r[5] = (o >>> 1) & 8190),
            (s = (255 & e[10]) | ((255 & e[11]) << 8)),
            (this.r[6] = 8191 & ((o >>> 14) | (s << 2))),
            (i = (255 & e[12]) | ((255 & e[13]) << 8)),
            (this.r[7] = 8065 & ((s >>> 11) | (i << 5))),
            (c = (255 & e[14]) | ((255 & e[15]) << 8)),
            (this.r[8] = 8191 & ((i >>> 8) | (c << 8))),
            (this.r[9] = (c >>> 5) & 127),
            (this.pad[0] = (255 & e[16]) | ((255 & e[17]) << 8)),
            (this.pad[1] = (255 & e[18]) | ((255 & e[19]) << 8)),
            (this.pad[2] = (255 & e[20]) | ((255 & e[21]) << 8)),
            (this.pad[3] = (255 & e[22]) | ((255 & e[23]) << 8)),
            (this.pad[4] = (255 & e[24]) | ((255 & e[25]) << 8)),
            (this.pad[5] = (255 & e[26]) | ((255 & e[27]) << 8)),
            (this.pad[6] = (255 & e[28]) | ((255 & e[29]) << 8)),
            (this.pad[7] = (255 & e[30]) | ((255 & e[31]) << 8));
        };
        function P(e, t, r, n, a, o) {
          var s = new I(o);
          return s.update(r, n, a), s.finish(e, t), 0;
        }
        function S(e, t, r, n, a, o) {
          var s = new Uint8Array(16);
          return P(s, 0, r, n, a, o), y(e, t, s, 0);
        }
        function x(e, t, r, n, a) {
          var o;
          if (r < 32) return -1;
          for (
            _(e, 0, t, 0, r, n, a), P(e, 16, e, 32, r - 32, e), o = 0;
            o < 16;
            o++
          )
            e[o] = 0;
          return 0;
        }
        function E(e, t, r, n, a) {
          var o,
            s = new Uint8Array(32);
          if (r < 32) return -1;
          if ((k(s, 0, 32, n, a), 0 !== S(t, 16, t, 32, r - 32, s))) return -1;
          for (_(e, 0, t, 0, r, n, a), o = 0; o < 32; o++) e[o] = 0;
          return 0;
        }
        function T(e, t) {
          var r;
          for (r = 0; r < 16; r++) e[r] = 0 | t[r];
        }
        function N(e) {
          var t,
            r,
            n = 1;
          for (t = 0; t < 16; t++)
            (r = e[t] + n + 65535),
              (n = Math.floor(r / 65536)),
              (e[t] = r - 65536 * n);
          e[0] += n - 1 + 37 * (n - 1);
        }
        function C(e, t, r) {
          for (var n, a = ~(r - 1), o = 0; o < 16; o++)
            (n = a & (e[o] ^ t[o])), (e[o] ^= n), (t[o] ^= n);
        }
        function j(e, r) {
          var n,
            a,
            o,
            s = t(),
            i = t();
          for (n = 0; n < 16; n++) i[n] = r[n];
          for (N(i), N(i), N(i), a = 0; a < 2; a++) {
            for (s[0] = i[0] - 65517, n = 1; n < 15; n++)
              (s[n] = i[n] - 65535 - ((s[n - 1] >> 16) & 1)),
                (s[n - 1] &= 65535);
            (s[15] = i[15] - 32767 - ((s[14] >> 16) & 1)),
              (o = (s[15] >> 16) & 1),
              (s[14] &= 65535),
              C(i, s, 1 - o);
          }
          for (n = 0; n < 16; n++)
            (e[2 * n] = 255 & i[n]), (e[2 * n + 1] = i[n] >> 8);
        }
        function D(e, t) {
          var r = new Uint8Array(32),
            n = new Uint8Array(32);
          return j(r, e), j(n, t), b(r, 0, n, 0);
        }
        function R(e) {
          var t = new Uint8Array(32);
          return j(t, e), 1 & t[0];
        }
        function U(e, t) {
          var r;
          for (r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
          e[15] &= 32767;
        }
        function B(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] + r[n];
        }
        function M(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] - r[n];
        }
        function L(e, t, r) {
          var n,
            a,
            o = 0,
            s = 0,
            i = 0,
            c = 0,
            u = 0,
            d = 0,
            l = 0,
            p = 0,
            f = 0,
            h = 0,
            m = 0,
            y = 0,
            b = 0,
            g = 0,
            v = 0,
            w = 0,
            O = 0,
            A = 0,
            k = 0,
            _ = 0,
            I = 0,
            P = 0,
            S = 0,
            x = 0,
            E = 0,
            T = 0,
            N = 0,
            C = 0,
            j = 0,
            D = 0,
            R = 0,
            U = r[0],
            B = r[1],
            M = r[2],
            L = r[3],
            F = r[4],
            V = r[5],
            K = r[6],
            H = r[7],
            q = r[8],
            Z = r[9],
            G = r[10],
            z = r[11],
            W = r[12],
            $ = r[13],
            Y = r[14],
            X = r[15];
          (o += (n = t[0]) * U),
            (s += n * B),
            (i += n * M),
            (c += n * L),
            (u += n * F),
            (d += n * V),
            (l += n * K),
            (p += n * H),
            (f += n * q),
            (h += n * Z),
            (m += n * G),
            (y += n * z),
            (b += n * W),
            (g += n * $),
            (v += n * Y),
            (w += n * X),
            (s += (n = t[1]) * U),
            (i += n * B),
            (c += n * M),
            (u += n * L),
            (d += n * F),
            (l += n * V),
            (p += n * K),
            (f += n * H),
            (h += n * q),
            (m += n * Z),
            (y += n * G),
            (b += n * z),
            (g += n * W),
            (v += n * $),
            (w += n * Y),
            (O += n * X),
            (i += (n = t[2]) * U),
            (c += n * B),
            (u += n * M),
            (d += n * L),
            (l += n * F),
            (p += n * V),
            (f += n * K),
            (h += n * H),
            (m += n * q),
            (y += n * Z),
            (b += n * G),
            (g += n * z),
            (v += n * W),
            (w += n * $),
            (O += n * Y),
            (A += n * X),
            (c += (n = t[3]) * U),
            (u += n * B),
            (d += n * M),
            (l += n * L),
            (p += n * F),
            (f += n * V),
            (h += n * K),
            (m += n * H),
            (y += n * q),
            (b += n * Z),
            (g += n * G),
            (v += n * z),
            (w += n * W),
            (O += n * $),
            (A += n * Y),
            (k += n * X),
            (u += (n = t[4]) * U),
            (d += n * B),
            (l += n * M),
            (p += n * L),
            (f += n * F),
            (h += n * V),
            (m += n * K),
            (y += n * H),
            (b += n * q),
            (g += n * Z),
            (v += n * G),
            (w += n * z),
            (O += n * W),
            (A += n * $),
            (k += n * Y),
            (_ += n * X),
            (d += (n = t[5]) * U),
            (l += n * B),
            (p += n * M),
            (f += n * L),
            (h += n * F),
            (m += n * V),
            (y += n * K),
            (b += n * H),
            (g += n * q),
            (v += n * Z),
            (w += n * G),
            (O += n * z),
            (A += n * W),
            (k += n * $),
            (_ += n * Y),
            (I += n * X),
            (l += (n = t[6]) * U),
            (p += n * B),
            (f += n * M),
            (h += n * L),
            (m += n * F),
            (y += n * V),
            (b += n * K),
            (g += n * H),
            (v += n * q),
            (w += n * Z),
            (O += n * G),
            (A += n * z),
            (k += n * W),
            (_ += n * $),
            (I += n * Y),
            (P += n * X),
            (p += (n = t[7]) * U),
            (f += n * B),
            (h += n * M),
            (m += n * L),
            (y += n * F),
            (b += n * V),
            (g += n * K),
            (v += n * H),
            (w += n * q),
            (O += n * Z),
            (A += n * G),
            (k += n * z),
            (_ += n * W),
            (I += n * $),
            (P += n * Y),
            (S += n * X),
            (f += (n = t[8]) * U),
            (h += n * B),
            (m += n * M),
            (y += n * L),
            (b += n * F),
            (g += n * V),
            (v += n * K),
            (w += n * H),
            (O += n * q),
            (A += n * Z),
            (k += n * G),
            (_ += n * z),
            (I += n * W),
            (P += n * $),
            (S += n * Y),
            (x += n * X),
            (h += (n = t[9]) * U),
            (m += n * B),
            (y += n * M),
            (b += n * L),
            (g += n * F),
            (v += n * V),
            (w += n * K),
            (O += n * H),
            (A += n * q),
            (k += n * Z),
            (_ += n * G),
            (I += n * z),
            (P += n * W),
            (S += n * $),
            (x += n * Y),
            (E += n * X),
            (m += (n = t[10]) * U),
            (y += n * B),
            (b += n * M),
            (g += n * L),
            (v += n * F),
            (w += n * V),
            (O += n * K),
            (A += n * H),
            (k += n * q),
            (_ += n * Z),
            (I += n * G),
            (P += n * z),
            (S += n * W),
            (x += n * $),
            (E += n * Y),
            (T += n * X),
            (y += (n = t[11]) * U),
            (b += n * B),
            (g += n * M),
            (v += n * L),
            (w += n * F),
            (O += n * V),
            (A += n * K),
            (k += n * H),
            (_ += n * q),
            (I += n * Z),
            (P += n * G),
            (S += n * z),
            (x += n * W),
            (E += n * $),
            (T += n * Y),
            (N += n * X),
            (b += (n = t[12]) * U),
            (g += n * B),
            (v += n * M),
            (w += n * L),
            (O += n * F),
            (A += n * V),
            (k += n * K),
            (_ += n * H),
            (I += n * q),
            (P += n * Z),
            (S += n * G),
            (x += n * z),
            (E += n * W),
            (T += n * $),
            (N += n * Y),
            (C += n * X),
            (g += (n = t[13]) * U),
            (v += n * B),
            (w += n * M),
            (O += n * L),
            (A += n * F),
            (k += n * V),
            (_ += n * K),
            (I += n * H),
            (P += n * q),
            (S += n * Z),
            (x += n * G),
            (E += n * z),
            (T += n * W),
            (N += n * $),
            (C += n * Y),
            (j += n * X),
            (v += (n = t[14]) * U),
            (w += n * B),
            (O += n * M),
            (A += n * L),
            (k += n * F),
            (_ += n * V),
            (I += n * K),
            (P += n * H),
            (S += n * q),
            (x += n * Z),
            (E += n * G),
            (T += n * z),
            (N += n * W),
            (C += n * $),
            (j += n * Y),
            (D += n * X),
            (w += (n = t[15]) * U),
            (s += 38 * (A += n * M)),
            (i += 38 * (k += n * L)),
            (c += 38 * (_ += n * F)),
            (u += 38 * (I += n * V)),
            (d += 38 * (P += n * K)),
            (l += 38 * (S += n * H)),
            (p += 38 * (x += n * q)),
            (f += 38 * (E += n * Z)),
            (h += 38 * (T += n * G)),
            (m += 38 * (N += n * z)),
            (y += 38 * (C += n * W)),
            (b += 38 * (j += n * $)),
            (g += 38 * (D += n * Y)),
            (v += 38 * (R += n * X)),
            (o =
              (n = (o += 38 * (O += n * B)) + (a = 1) + 65535) -
              65536 * (a = Math.floor(n / 65536))),
            (s = (n = s + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (i = (n = i + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (c = (n = c + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (u = (n = u + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (d = (n = d + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (l = (n = l + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (p = (n = p + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (f = (n = f + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (h = (n = h + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (m = (n = m + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (y = (n = y + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (b = (n = b + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (g = (n = g + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (v = (n = v + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (w = (n = w + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (o =
              (n = (o += a - 1 + 37 * (a - 1)) + (a = 1) + 65535) -
              65536 * (a = Math.floor(n / 65536))),
            (s = (n = s + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (i = (n = i + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (c = (n = c + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (u = (n = u + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (d = (n = d + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (l = (n = l + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (p = (n = p + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (f = (n = f + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (h = (n = h + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (m = (n = m + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (y = (n = y + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (b = (n = b + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (g = (n = g + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (v = (n = v + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (w = (n = w + a + 65535) - 65536 * (a = Math.floor(n / 65536))),
            (o += a - 1 + 37 * (a - 1)),
            (e[0] = o),
            (e[1] = s),
            (e[2] = i),
            (e[3] = c),
            (e[4] = u),
            (e[5] = d),
            (e[6] = l),
            (e[7] = p),
            (e[8] = f),
            (e[9] = h),
            (e[10] = m),
            (e[11] = y),
            (e[12] = b),
            (e[13] = g),
            (e[14] = v),
            (e[15] = w);
        }
        function F(e, t) {
          L(e, t, t);
        }
        function V(e, r) {
          var n,
            a = t();
          for (n = 0; n < 16; n++) a[n] = r[n];
          for (n = 253; n >= 0; n--) F(a, a), 2 !== n && 4 !== n && L(a, a, r);
          for (n = 0; n < 16; n++) e[n] = a[n];
        }
        function K(e, r) {
          var n,
            a = t();
          for (n = 0; n < 16; n++) a[n] = r[n];
          for (n = 250; n >= 0; n--) F(a, a), 1 !== n && L(a, a, r);
          for (n = 0; n < 16; n++) e[n] = a[n];
        }
        function H(e, r, n) {
          var a,
            o,
            s = new Uint8Array(32),
            i = new Float64Array(80),
            u = t(),
            d = t(),
            l = t(),
            p = t(),
            f = t(),
            h = t();
          for (o = 0; o < 31; o++) s[o] = r[o];
          for (
            s[31] = (127 & r[31]) | 64, s[0] &= 248, U(i, n), o = 0;
            o < 16;
            o++
          )
            (d[o] = i[o]), (p[o] = u[o] = l[o] = 0);
          for (u[0] = p[0] = 1, o = 254; o >= 0; --o)
            C(u, d, (a = (s[o >>> 3] >>> (7 & o)) & 1)),
              C(l, p, a),
              B(f, u, l),
              M(u, u, l),
              B(l, d, p),
              M(d, d, p),
              F(p, f),
              F(h, u),
              L(u, l, u),
              L(l, d, f),
              B(f, u, l),
              M(u, u, l),
              F(d, u),
              M(l, p, h),
              L(u, l, c),
              B(u, u, p),
              L(l, l, u),
              L(u, p, h),
              L(p, d, i),
              F(d, f),
              C(u, d, a),
              C(l, p, a);
          for (o = 0; o < 16; o++)
            (i[o + 16] = u[o]),
              (i[o + 32] = l[o]),
              (i[o + 48] = d[o]),
              (i[o + 64] = p[o]);
          var m = i.subarray(32),
            y = i.subarray(16);
          return V(m, m), L(y, y, m), j(e, y), 0;
        }
        function q(e, t) {
          return H(e, t, o);
        }
        function Z(e, t) {
          return n(t, 32), q(e, t);
        }
        function G(e, t, r) {
          var n = new Uint8Array(32);
          return H(n, r, t), v(e, a, n, w);
        }
        (I.prototype.blocks = function (e, t, r) {
          for (
            var n,
              a,
              o,
              s,
              i,
              c,
              u,
              d,
              l,
              p,
              f,
              h,
              m,
              y,
              b,
              g,
              v,
              w,
              O,
              A = this.fin ? 0 : 2048,
              k = this.h[0],
              _ = this.h[1],
              I = this.h[2],
              P = this.h[3],
              S = this.h[4],
              x = this.h[5],
              E = this.h[6],
              T = this.h[7],
              N = this.h[8],
              C = this.h[9],
              j = this.r[0],
              D = this.r[1],
              R = this.r[2],
              U = this.r[3],
              B = this.r[4],
              M = this.r[5],
              L = this.r[6],
              F = this.r[7],
              V = this.r[8],
              K = this.r[9];
            r >= 16;

          )
            (p = l = 0),
              (p +=
                (k += 8191 & (n = (255 & e[t + 0]) | ((255 & e[t + 1]) << 8))) *
                j),
              (p +=
                (_ +=
                  8191 &
                  ((n >>> 13) |
                    ((a = (255 & e[t + 2]) | ((255 & e[t + 3]) << 8)) << 3))) *
                (5 * K)),
              (p +=
                (I +=
                  8191 &
                  ((a >>> 10) |
                    ((o = (255 & e[t + 4]) | ((255 & e[t + 5]) << 8)) << 6))) *
                (5 * V)),
              (p +=
                (P +=
                  8191 &
                  ((o >>> 7) |
                    ((s = (255 & e[t + 6]) | ((255 & e[t + 7]) << 8)) << 9))) *
                (5 * F)),
              (l =
                (p +=
                  (S +=
                    8191 &
                    ((s >>> 4) |
                      ((i = (255 & e[t + 8]) | ((255 & e[t + 9]) << 8)) <<
                        12))) *
                  (5 * L)) >>> 13),
              (p &= 8191),
              (p += (x += (i >>> 1) & 8191) * (5 * M)),
              (p +=
                (E +=
                  8191 &
                  ((i >>> 14) |
                    ((c = (255 & e[t + 10]) | ((255 & e[t + 11]) << 8)) <<
                      2))) *
                (5 * B)),
              (p +=
                (T +=
                  8191 &
                  ((c >>> 11) |
                    ((u = (255 & e[t + 12]) | ((255 & e[t + 13]) << 8)) <<
                      5))) *
                (5 * U)),
              (p +=
                (N +=
                  8191 &
                  ((u >>> 8) |
                    ((d = (255 & e[t + 14]) | ((255 & e[t + 15]) << 8)) <<
                      8))) *
                (5 * R)),
              (f = l += (p += (C += (d >>> 5) | A) * (5 * D)) >>> 13),
              (f += k * D),
              (f += _ * j),
              (f += I * (5 * K)),
              (f += P * (5 * V)),
              (l = (f += S * (5 * F)) >>> 13),
              (f &= 8191),
              (f += x * (5 * L)),
              (f += E * (5 * M)),
              (f += T * (5 * B)),
              (f += N * (5 * U)),
              (l += (f += C * (5 * R)) >>> 13),
              (f &= 8191),
              (h = l),
              (h += k * R),
              (h += _ * D),
              (h += I * j),
              (h += P * (5 * K)),
              (l = (h += S * (5 * V)) >>> 13),
              (h &= 8191),
              (h += x * (5 * F)),
              (h += E * (5 * L)),
              (h += T * (5 * M)),
              (h += N * (5 * B)),
              (m = l += (h += C * (5 * U)) >>> 13),
              (m += k * U),
              (m += _ * R),
              (m += I * D),
              (m += P * j),
              (l = (m += S * (5 * K)) >>> 13),
              (m &= 8191),
              (m += x * (5 * V)),
              (m += E * (5 * F)),
              (m += T * (5 * L)),
              (m += N * (5 * M)),
              (y = l += (m += C * (5 * B)) >>> 13),
              (y += k * B),
              (y += _ * U),
              (y += I * R),
              (y += P * D),
              (l = (y += S * j) >>> 13),
              (y &= 8191),
              (y += x * (5 * K)),
              (y += E * (5 * V)),
              (y += T * (5 * F)),
              (y += N * (5 * L)),
              (b = l += (y += C * (5 * M)) >>> 13),
              (b += k * M),
              (b += _ * B),
              (b += I * U),
              (b += P * R),
              (l = (b += S * D) >>> 13),
              (b &= 8191),
              (b += x * j),
              (b += E * (5 * K)),
              (b += T * (5 * V)),
              (b += N * (5 * F)),
              (g = l += (b += C * (5 * L)) >>> 13),
              (g += k * L),
              (g += _ * M),
              (g += I * B),
              (g += P * U),
              (l = (g += S * R) >>> 13),
              (g &= 8191),
              (g += x * D),
              (g += E * j),
              (g += T * (5 * K)),
              (g += N * (5 * V)),
              (v = l += (g += C * (5 * F)) >>> 13),
              (v += k * F),
              (v += _ * L),
              (v += I * M),
              (v += P * B),
              (l = (v += S * U) >>> 13),
              (v &= 8191),
              (v += x * R),
              (v += E * D),
              (v += T * j),
              (v += N * (5 * K)),
              (w = l += (v += C * (5 * V)) >>> 13),
              (w += k * V),
              (w += _ * F),
              (w += I * L),
              (w += P * M),
              (l = (w += S * B) >>> 13),
              (w &= 8191),
              (w += x * U),
              (w += E * R),
              (w += T * D),
              (w += N * j),
              (O = l += (w += C * (5 * K)) >>> 13),
              (O += k * K),
              (O += _ * V),
              (O += I * F),
              (O += P * L),
              (l = (O += S * M) >>> 13),
              (O &= 8191),
              (O += x * B),
              (O += E * U),
              (O += T * R),
              (O += N * D),
              (k = p =
                8191 &
                (l =
                  ((l = (((l += (O += C * j) >>> 13) << 2) + l) | 0) +
                    (p &= 8191)) |
                  0)),
              (_ = f += l >>>= 13),
              (I = h &= 8191),
              (P = m &= 8191),
              (S = y &= 8191),
              (x = b &= 8191),
              (E = g &= 8191),
              (T = v &= 8191),
              (N = w &= 8191),
              (C = O &= 8191),
              (t += 16),
              (r -= 16);
          (this.h[0] = k),
            (this.h[1] = _),
            (this.h[2] = I),
            (this.h[3] = P),
            (this.h[4] = S),
            (this.h[5] = x),
            (this.h[6] = E),
            (this.h[7] = T),
            (this.h[8] = N),
            (this.h[9] = C);
        }),
          (I.prototype.finish = function (e, t) {
            var r,
              n,
              a,
              o,
              s = new Uint16Array(10);
            if (this.leftover) {
              for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++)
                this.buffer[o] = 0;
              (this.fin = 1), this.blocks(this.buffer, 0, 16);
            }
            for (r = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++)
              (this.h[o] += r), (r = this.h[o] >>> 13), (this.h[o] &= 8191);
            for (
              this.h[0] += 5 * r,
                r = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += r,
                r = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += r,
                s[0] = this.h[0] + 5,
                r = s[0] >>> 13,
                s[0] &= 8191,
                o = 1;
              o < 10;
              o++
            )
              (s[o] = this.h[o] + r), (r = s[o] >>> 13), (s[o] &= 8191);
            for (s[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++) s[o] &= n;
            for (n = ~n, o = 0; o < 10; o++) this.h[o] = (this.h[o] & n) | s[o];
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] =
                  65535 &
                  ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                a = this.h[0] + this.pad[0],
                this.h[0] = 65535 & a,
                o = 1;
              o < 8;
              o++
            )
              (a = (((this.h[o] + this.pad[o]) | 0) + (a >>> 16)) | 0),
                (this.h[o] = 65535 & a);
            (e[t + 0] = (this.h[0] >>> 0) & 255),
              (e[t + 1] = (this.h[0] >>> 8) & 255),
              (e[t + 2] = (this.h[1] >>> 0) & 255),
              (e[t + 3] = (this.h[1] >>> 8) & 255),
              (e[t + 4] = (this.h[2] >>> 0) & 255),
              (e[t + 5] = (this.h[2] >>> 8) & 255),
              (e[t + 6] = (this.h[3] >>> 0) & 255),
              (e[t + 7] = (this.h[3] >>> 8) & 255),
              (e[t + 8] = (this.h[4] >>> 0) & 255),
              (e[t + 9] = (this.h[4] >>> 8) & 255),
              (e[t + 10] = (this.h[5] >>> 0) & 255),
              (e[t + 11] = (this.h[5] >>> 8) & 255),
              (e[t + 12] = (this.h[6] >>> 0) & 255),
              (e[t + 13] = (this.h[6] >>> 8) & 255),
              (e[t + 14] = (this.h[7] >>> 0) & 255),
              (e[t + 15] = (this.h[7] >>> 8) & 255);
          }),
          (I.prototype.update = function (e, t, r) {
            var n, a;
            if (this.leftover) {
              for ((a = 16 - this.leftover) > r && (a = r), n = 0; n < a; n++)
                this.buffer[this.leftover + n] = e[t + n];
              if (
                ((r -= a), (t += a), (this.leftover += a), this.leftover < 16)
              )
                return;
              this.blocks(this.buffer, 0, 16), (this.leftover = 0);
            }
            if (
              (r >= 16 &&
                ((a = r - (r % 16)), this.blocks(e, t, a), (t += a), (r -= a)),
              r)
            ) {
              for (n = 0; n < r; n++) this.buffer[this.leftover + n] = e[t + n];
              this.leftover += r;
            }
          });
        var z = x,
          W = E,
          $ = [
            1116352408,
            3609767458,
            1899447441,
            602891725,
            3049323471,
            3964484399,
            3921009573,
            2173295548,
            961987163,
            4081628472,
            1508970993,
            3053834265,
            2453635748,
            2937671579,
            2870763221,
            3664609560,
            3624381080,
            2734883394,
            310598401,
            1164996542,
            607225278,
            1323610764,
            1426881987,
            3590304994,
            1925078388,
            4068182383,
            2162078206,
            991336113,
            2614888103,
            633803317,
            3248222580,
            3479774868,
            3835390401,
            2666613458,
            4022224774,
            944711139,
            264347078,
            2341262773,
            604807628,
            2007800933,
            770255983,
            1495990901,
            1249150122,
            1856431235,
            1555081692,
            3175218132,
            1996064986,
            2198950837,
            2554220882,
            3999719339,
            2821834349,
            766784016,
            2952996808,
            2566594879,
            3210313671,
            3203337956,
            3336571891,
            1034457026,
            3584528711,
            2466948901,
            113926993,
            3758326383,
            338241895,
            168717936,
            666307205,
            1188179964,
            773529912,
            1546045734,
            1294757372,
            1522805485,
            1396182291,
            2643833823,
            1695183700,
            2343527390,
            1986661051,
            1014477480,
            2177026350,
            1206759142,
            2456956037,
            344077627,
            2730485921,
            1290863460,
            2820302411,
            3158454273,
            3259730800,
            3505952657,
            3345764771,
            106217008,
            3516065817,
            3606008344,
            3600352804,
            1432725776,
            4094571909,
            1467031594,
            275423344,
            851169720,
            430227734,
            3100823752,
            506948616,
            1363258195,
            659060556,
            3750685593,
            883997877,
            3785050280,
            958139571,
            3318307427,
            1322822218,
            3812723403,
            1537002063,
            2003034995,
            1747873779,
            3602036899,
            1955562222,
            1575990012,
            2024104815,
            1125592928,
            2227730452,
            2716904306,
            2361852424,
            442776044,
            2428436474,
            593698344,
            2756734187,
            3733110249,
            3204031479,
            2999351573,
            3329325298,
            3815920427,
            3391569614,
            3928383900,
            3515267271,
            566280711,
            3940187606,
            3454069534,
            4118630271,
            4000239992,
            116418474,
            1914138554,
            174292421,
            2731055270,
            289380356,
            3203993006,
            460393269,
            320620315,
            685471733,
            587496836,
            852142971,
            1086792851,
            1017036298,
            365543100,
            1126000580,
            2618297676,
            1288033470,
            3409855158,
            1501505948,
            4234509866,
            1607167915,
            987167468,
            1816402316,
            1246189591
          ];
        function Y(e, t, r, n) {
          for (
            var a,
              o,
              s,
              i,
              c,
              u,
              d,
              l,
              p,
              f,
              h,
              m,
              y,
              b,
              g,
              v,
              w,
              O,
              A,
              k,
              _,
              I,
              P,
              S,
              x,
              E,
              T = new Int32Array(16),
              N = new Int32Array(16),
              C = e[0],
              j = e[1],
              D = e[2],
              R = e[3],
              U = e[4],
              B = e[5],
              M = e[6],
              L = e[7],
              F = t[0],
              V = t[1],
              K = t[2],
              H = t[3],
              q = t[4],
              Z = t[5],
              G = t[6],
              z = t[7],
              W = 0;
            n >= 128;

          ) {
            for (A = 0; A < 16; A++)
              (k = 8 * A + W),
                (T[A] =
                  (r[k + 0] << 24) |
                  (r[k + 1] << 16) |
                  (r[k + 2] << 8) |
                  r[k + 3]),
                (N[A] =
                  (r[k + 4] << 24) |
                  (r[k + 5] << 16) |
                  (r[k + 6] << 8) |
                  r[k + 7]);
            for (A = 0; A < 80; A++)
              if (
                ((a = C),
                (o = j),
                (s = D),
                (i = R),
                (c = U),
                (u = B),
                (d = M),
                (p = F),
                (f = V),
                (h = K),
                (m = H),
                (y = q),
                (b = Z),
                (g = G),
                (P = 65535 & (I = z)),
                (S = I >>> 16),
                (x = 65535 & (_ = L)),
                (E = _ >>> 16),
                (P +=
                  65535 &
                  (I =
                    ((q >>> 14) | (U << 18)) ^
                    ((q >>> 18) | (U << 14)) ^
                    ((U >>> 9) | (q << 23)))),
                (S += I >>> 16),
                (x +=
                  65535 &
                  (_ =
                    ((U >>> 14) | (q << 18)) ^
                    ((U >>> 18) | (q << 14)) ^
                    ((q >>> 9) | (U << 23)))),
                (E += _ >>> 16),
                (P += 65535 & (I = (q & Z) ^ (~q & G))),
                (S += I >>> 16),
                (x += 65535 & (_ = (U & B) ^ (~U & M))),
                (E += _ >>> 16),
                (P += 65535 & (I = $[2 * A + 1])),
                (S += I >>> 16),
                (x += 65535 & (_ = $[2 * A])),
                (E += _ >>> 16),
                (_ = T[A % 16]),
                (S += (I = N[A % 16]) >>> 16),
                (x += 65535 & _),
                (E += _ >>> 16),
                (x += (S += (P += 65535 & I) >>> 16) >>> 16),
                (P = 65535 & (I = O = (65535 & P) | (S << 16))),
                (S = I >>> 16),
                (x = 65535 & (_ = w = (65535 & x) | ((E += x >>> 16) << 16))),
                (E = _ >>> 16),
                (P +=
                  65535 &
                  (I =
                    ((F >>> 28) | (C << 4)) ^
                    ((C >>> 2) | (F << 30)) ^
                    ((C >>> 7) | (F << 25)))),
                (S += I >>> 16),
                (x +=
                  65535 &
                  (_ =
                    ((C >>> 28) | (F << 4)) ^
                    ((F >>> 2) | (C << 30)) ^
                    ((F >>> 7) | (C << 25)))),
                (E += _ >>> 16),
                (S += (I = (F & V) ^ (F & K) ^ (V & K)) >>> 16),
                (x += 65535 & (_ = (C & j) ^ (C & D) ^ (j & D))),
                (E += _ >>> 16),
                (l =
                  (65535 & (x += (S += (P += 65535 & I) >>> 16) >>> 16)) |
                  ((E += x >>> 16) << 16)),
                (v = (65535 & P) | (S << 16)),
                (P = 65535 & (I = m)),
                (S = I >>> 16),
                (x = 65535 & (_ = i)),
                (E = _ >>> 16),
                (S += (I = O) >>> 16),
                (x += 65535 & (_ = w)),
                (E += _ >>> 16),
                (j = a),
                (D = o),
                (R = s),
                (U = i =
                  (65535 & (x += (S += (P += 65535 & I) >>> 16) >>> 16)) |
                  ((E += x >>> 16) << 16)),
                (B = c),
                (M = u),
                (L = d),
                (C = l),
                (V = p),
                (K = f),
                (H = h),
                (q = m = (65535 & P) | (S << 16)),
                (Z = y),
                (G = b),
                (z = g),
                (F = v),
                A % 16 == 15)
              )
                for (k = 0; k < 16; k++)
                  (_ = T[k]),
                    (P = 65535 & (I = N[k])),
                    (S = I >>> 16),
                    (x = 65535 & _),
                    (E = _ >>> 16),
                    (_ = T[(k + 9) % 16]),
                    (P += 65535 & (I = N[(k + 9) % 16])),
                    (S += I >>> 16),
                    (x += 65535 & _),
                    (E += _ >>> 16),
                    (w = T[(k + 1) % 16]),
                    (P +=
                      65535 &
                      (I =
                        (((O = N[(k + 1) % 16]) >>> 1) | (w << 31)) ^
                        ((O >>> 8) | (w << 24)) ^
                        ((O >>> 7) | (w << 25)))),
                    (S += I >>> 16),
                    (x +=
                      65535 &
                      (_ =
                        ((w >>> 1) | (O << 31)) ^
                        ((w >>> 8) | (O << 24)) ^
                        (w >>> 7))),
                    (E += _ >>> 16),
                    (w = T[(k + 14) % 16]),
                    (S +=
                      (I =
                        (((O = N[(k + 14) % 16]) >>> 19) | (w << 13)) ^
                        ((w >>> 29) | (O << 3)) ^
                        ((O >>> 6) | (w << 26))) >>> 16),
                    (x +=
                      65535 &
                      (_ =
                        ((w >>> 19) | (O << 13)) ^
                        ((O >>> 29) | (w << 3)) ^
                        (w >>> 6))),
                    (E += _ >>> 16),
                    (E += (x += (S += (P += 65535 & I) >>> 16) >>> 16) >>> 16),
                    (T[k] = (65535 & x) | (E << 16)),
                    (N[k] = (65535 & P) | (S << 16));
            (P = 65535 & (I = F)),
              (S = I >>> 16),
              (x = 65535 & (_ = C)),
              (E = _ >>> 16),
              (_ = e[0]),
              (S += (I = t[0]) >>> 16),
              (x += 65535 & _),
              (E += _ >>> 16),
              (E += (x += (S += (P += 65535 & I) >>> 16) >>> 16) >>> 16),
              (e[0] = C = (65535 & x) | (E << 16)),
              (t[0] = F = (65535 & P) | (S << 16)),
              (P = 65535 & (I = V)),
              (S = I >>> 16),
              (x = 65535 & (_ = j)),
              (E = _ >>> 16),
              (_ = e[1]),
              (S += (I = t[1]) >>> 16),
              (x += 65535 & _),
              (E += _ >>> 16),
              (E += (x += (S += (P += 65535 & I) >>> 16) >>> 16) >>> 16),
              (e[1] = j = (65535 & x) | (E << 16)),
              (t[1] = V = (65535 & P) | (S << 16)),
              (P = 65535 & (I = K)),
              (S = I >>> 16),
              (x = 65535 & (_ = D)),
              (E = _ >>> 16),
              (_ = e[2]),
              (S += (I = t[2]) >>> 16),
              (x += 65535 & _),
              (E += _ >>> 16),
              (E += (x += (S += (P += 65535 & I) >>> 16) >>> 16) >>> 16),
              (e[2] = D = (65535 & x) | (E << 16)),
              (t[2] = K = (65535 & P) | (S << 16)),
              (P = 65535 & (I = H)),
              (S = I >>> 16),
              (x = 65535 & (_ = R)),
              (E = _ >>> 16),
              (_ = e[3]),
              (S += (I = t[3]) >>> 16),
              (x += 65535 & _),
              (E += _ >>> 16),
              (E += (x += (S += (P += 65535 & I) >>> 16) >>> 16) >>> 16),
              (e[3] = R = (65535 & x) | (E << 16)),
              (t[3] = H = (65535 & P) | (S << 16)),
              (P = 65535 & (I = q)),
              (S = I >>> 16),
              (x = 65535 & (_ = U)),
              (E = _ >>> 16),
              (_ = e[4]),
              (S += (I = t[4]) >>> 16),
              (x += 65535 & _),
              (E += _ >>> 16),
              (E += (x += (S += (P += 65535 & I) >>> 16) >>> 16) >>> 16),
              (e[4] = U = (65535 & x) | (E << 16)),
              (t[4] = q = (65535 & P) | (S << 16)),
              (P = 65535 & (I = Z)),
              (S = I >>> 16),
              (x = 65535 & (_ = B)),
              (E = _ >>> 16),
              (_ = e[5]),
              (S += (I = t[5]) >>> 16),
              (x += 65535 & _),
              (E += _ >>> 16),
              (E += (x += (S += (P += 65535 & I) >>> 16) >>> 16) >>> 16),
              (e[5] = B = (65535 & x) | (E << 16)),
              (t[5] = Z = (65535 & P) | (S << 16)),
              (P = 65535 & (I = G)),
              (S = I >>> 16),
              (x = 65535 & (_ = M)),
              (E = _ >>> 16),
              (_ = e[6]),
              (S += (I = t[6]) >>> 16),
              (x += 65535 & _),
              (E += _ >>> 16),
              (E += (x += (S += (P += 65535 & I) >>> 16) >>> 16) >>> 16),
              (e[6] = M = (65535 & x) | (E << 16)),
              (t[6] = G = (65535 & P) | (S << 16)),
              (P = 65535 & (I = z)),
              (S = I >>> 16),
              (x = 65535 & (_ = L)),
              (E = _ >>> 16),
              (_ = e[7]),
              (S += (I = t[7]) >>> 16),
              (x += 65535 & _),
              (E += _ >>> 16),
              (E += (x += (S += (P += 65535 & I) >>> 16) >>> 16) >>> 16),
              (e[7] = L = (65535 & x) | (E << 16)),
              (t[7] = z = (65535 & P) | (S << 16)),
              (W += 128),
              (n -= 128);
          }
          return n;
        }
        function X(e, t, r) {
          var n,
            a = new Int32Array(8),
            o = new Int32Array(8),
            s = new Uint8Array(256),
            i = r;
          for (
            a[0] = 1779033703,
              a[1] = 3144134277,
              a[2] = 1013904242,
              a[3] = 2773480762,
              a[4] = 1359893119,
              a[5] = 2600822924,
              a[6] = 528734635,
              a[7] = 1541459225,
              o[0] = 4089235720,
              o[1] = 2227873595,
              o[2] = 4271175723,
              o[3] = 1595750129,
              o[4] = 2917565137,
              o[5] = 725511199,
              o[6] = 4215389547,
              o[7] = 327033209,
              Y(a, o, t, r),
              r %= 128,
              n = 0;
            n < r;
            n++
          )
            s[n] = t[i - r + n];
          for (
            s[r] = 128,
              s[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0,
              h(s, r - 8, (i / 536870912) | 0, i << 3),
              Y(a, o, s, r),
              n = 0;
            n < 8;
            n++
          )
            h(e, 8 * n, a[n], o[n]);
          return 0;
        }
        function J(e, r) {
          var n = t(),
            a = t(),
            o = t(),
            s = t(),
            i = t(),
            c = t(),
            u = t(),
            l = t(),
            p = t();
          M(n, e[1], e[0]),
            M(p, r[1], r[0]),
            L(n, n, p),
            B(a, e[0], e[1]),
            B(p, r[0], r[1]),
            L(a, a, p),
            L(o, e[3], r[3]),
            L(o, o, d),
            L(s, e[2], r[2]),
            B(s, s, s),
            M(i, a, n),
            M(c, s, o),
            B(u, s, o),
            B(l, a, n),
            L(e[0], i, c),
            L(e[1], l, u),
            L(e[2], u, c),
            L(e[3], i, l);
        }
        function Q(e, t, r) {
          var n;
          for (n = 0; n < 4; n++) C(e[n], t[n], r);
        }
        function ee(e, r) {
          var n = t(),
            a = t(),
            o = t();
          V(o, r[2]),
            L(n, r[0], o),
            L(a, r[1], o),
            j(e, a),
            (e[31] ^= R(n) << 7);
        }
        function te(e, t, r) {
          var n, a;
          for (
            T(e[0], s), T(e[1], i), T(e[2], i), T(e[3], s), a = 255;
            a >= 0;
            --a
          )
            Q(e, t, (n = (r[(a / 8) | 0] >> (7 & a)) & 1)),
              J(t, e),
              J(e, e),
              Q(e, t, n);
        }
        function re(e, r) {
          var n = [t(), t(), t(), t()];
          T(n[0], l), T(n[1], p), T(n[2], i), L(n[3], l, p), te(e, n, r);
        }
        function ne(e, r, a) {
          var o,
            s = new Uint8Array(64),
            i = [t(), t(), t(), t()];
          for (
            a || n(r, 32),
              X(s, r, 32),
              s[0] &= 248,
              s[31] &= 127,
              s[31] |= 64,
              re(i, s),
              ee(e, i),
              o = 0;
            o < 32;
            o++
          )
            r[o + 32] = e[o];
          return 0;
        }
        var ae = new Float64Array([
          237,
          211,
          245,
          92,
          26,
          99,
          18,
          88,
          214,
          156,
          247,
          162,
          222,
          249,
          222,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          16
        ]);
        function oe(e, t) {
          var r, n, a, o;
          for (n = 63; n >= 32; --n) {
            for (r = 0, a = n - 32, o = n - 12; a < o; ++a)
              (t[a] += r - 16 * t[n] * ae[a - (n - 32)]),
                (r = Math.floor((t[a] + 128) / 256)),
                (t[a] -= 256 * r);
            (t[a] += r), (t[n] = 0);
          }
          for (r = 0, a = 0; a < 32; a++)
            (t[a] += r - (t[31] >> 4) * ae[a]), (r = t[a] >> 8), (t[a] &= 255);
          for (a = 0; a < 32; a++) t[a] -= r * ae[a];
          for (n = 0; n < 32; n++) (t[n + 1] += t[n] >> 8), (e[n] = 255 & t[n]);
        }
        function se(e) {
          var t,
            r = new Float64Array(64);
          for (t = 0; t < 64; t++) r[t] = e[t];
          for (t = 0; t < 64; t++) e[t] = 0;
          oe(e, r);
        }
        function ie(e, r, n, a) {
          var o,
            s,
            i = new Uint8Array(64),
            c = new Uint8Array(64),
            u = new Uint8Array(64),
            d = new Float64Array(64),
            l = [t(), t(), t(), t()];
          X(i, a, 32), (i[0] &= 248), (i[31] &= 127), (i[31] |= 64);
          var p = n + 64;
          for (o = 0; o < n; o++) e[64 + o] = r[o];
          for (o = 0; o < 32; o++) e[32 + o] = i[32 + o];
          for (
            X(u, e.subarray(32), n + 32), se(u), re(l, u), ee(e, l), o = 32;
            o < 64;
            o++
          )
            e[o] = a[o];
          for (X(c, e, n + 64), se(c), o = 0; o < 64; o++) d[o] = 0;
          for (o = 0; o < 32; o++) d[o] = u[o];
          for (o = 0; o < 32; o++)
            for (s = 0; s < 32; s++) d[o + s] += c[o] * i[s];
          return oe(e.subarray(32), d), p;
        }
        function ce(e, r, n, a) {
          var o,
            c = new Uint8Array(32),
            d = new Uint8Array(64),
            l = [t(), t(), t(), t()],
            p = [t(), t(), t(), t()];
          if (n < 64) return -1;
          if (
            (function (e, r) {
              var n = t(),
                a = t(),
                o = t(),
                c = t(),
                d = t(),
                l = t(),
                p = t();
              return (
                T(e[2], i),
                U(e[1], r),
                F(o, e[1]),
                L(c, o, u),
                M(o, o, e[2]),
                B(c, e[2], c),
                F(d, c),
                F(l, d),
                L(p, l, d),
                L(n, p, o),
                L(n, n, c),
                K(n, n),
                L(n, n, o),
                L(n, n, c),
                L(n, n, c),
                L(e[0], n, c),
                F(a, e[0]),
                L(a, a, c),
                D(a, o) && L(e[0], e[0], f),
                F(a, e[0]),
                L(a, a, c),
                D(a, o)
                  ? -1
                  : (R(e[0]) === r[31] >> 7 && M(e[0], s, e[0]),
                    L(e[3], e[0], e[1]),
                    0)
              );
            })(p, a)
          )
            return -1;
          for (o = 0; o < n; o++) e[o] = r[o];
          for (o = 0; o < 32; o++) e[o + 32] = a[o];
          if (
            (X(d, e, n),
            se(d),
            te(l, p, d),
            re(p, r.subarray(32)),
            J(l, p),
            ee(c, l),
            (n -= 64),
            b(r, 0, c, 0))
          ) {
            for (o = 0; o < n; o++) e[o] = 0;
            return -1;
          }
          for (o = 0; o < n; o++) e[o] = r[o + 64];
          return n;
        }
        var ue = 64,
          de = 32,
          le = 64;
        function pe(e, t) {
          if (32 !== e.length) throw new Error('bad key size');
          if (24 !== t.length) throw new Error('bad nonce size');
        }
        function fe() {
          for (var e = 0; e < arguments.length; e++)
            if (!(arguments[e] instanceof Uint8Array))
              throw new TypeError('unexpected type, use Uint8Array');
        }
        function he(e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
        }
        (e.lowlevel = {
          crypto_core_hsalsa20: v,
          crypto_stream_xor: _,
          crypto_stream: k,
          crypto_stream_salsa20_xor: O,
          crypto_stream_salsa20: A,
          crypto_onetimeauth: P,
          crypto_onetimeauth_verify: S,
          crypto_verify_16: y,
          crypto_verify_32: b,
          crypto_secretbox: x,
          crypto_secretbox_open: E,
          crypto_scalarmult: H,
          crypto_scalarmult_base: q,
          crypto_box_beforenm: G,
          crypto_box_afternm: z,
          crypto_box: function (e, t, r, n, a, o) {
            var s = new Uint8Array(32);
            return G(s, a, o), z(e, t, r, n, s);
          },
          crypto_box_open: function (e, t, r, n, a, o) {
            var s = new Uint8Array(32);
            return G(s, a, o), W(e, t, r, n, s);
          },
          crypto_box_keypair: Z,
          crypto_hash: X,
          crypto_sign: ie,
          crypto_sign_keypair: ne,
          crypto_sign_open: ce,
          crypto_secretbox_KEYBYTES: 32,
          crypto_secretbox_NONCEBYTES: 24,
          crypto_secretbox_ZEROBYTES: 32,
          crypto_secretbox_BOXZEROBYTES: 16,
          crypto_scalarmult_BYTES: 32,
          crypto_scalarmult_SCALARBYTES: 32,
          crypto_box_PUBLICKEYBYTES: 32,
          crypto_box_SECRETKEYBYTES: 32,
          crypto_box_BEFORENMBYTES: 32,
          crypto_box_NONCEBYTES: 24,
          crypto_box_ZEROBYTES: 32,
          crypto_box_BOXZEROBYTES: 16,
          crypto_sign_BYTES: ue,
          crypto_sign_PUBLICKEYBYTES: de,
          crypto_sign_SECRETKEYBYTES: le,
          crypto_sign_SEEDBYTES: 32,
          crypto_hash_BYTES: 64,
          gf: t,
          D: u,
          L: ae,
          pack25519: j,
          unpack25519: U,
          M: L,
          A: B,
          S: F,
          Z: M,
          pow2523: K,
          add: J,
          set25519: T,
          modL: oe,
          scalarmult: te,
          scalarbase: re
        }),
          (e.randomBytes = function (e) {
            var t = new Uint8Array(e);
            return n(t, e), t;
          }),
          (e.secretbox = function (e, t, r) {
            fe(e, t, r), pe(r, t);
            for (
              var n = new Uint8Array(32 + e.length),
                a = new Uint8Array(n.length),
                o = 0;
              o < e.length;
              o++
            )
              n[o + 32] = e[o];
            return x(a, n, n.length, t, r), a.subarray(16);
          }),
          (e.secretbox.open = function (e, t, r) {
            fe(e, t, r), pe(r, t);
            for (
              var n = new Uint8Array(16 + e.length),
                a = new Uint8Array(n.length),
                o = 0;
              o < e.length;
              o++
            )
              n[o + 16] = e[o];
            return n.length < 32 || 0 !== E(a, n, n.length, t, r)
              ? null
              : a.subarray(32);
          }),
          (e.secretbox.keyLength = 32),
          (e.secretbox.nonceLength = 24),
          (e.secretbox.overheadLength = 16),
          (e.scalarMult = function (e, t) {
            if ((fe(e, t), 32 !== e.length)) throw new Error('bad n size');
            if (32 !== t.length) throw new Error('bad p size');
            var r = new Uint8Array(32);
            return H(r, e, t), r;
          }),
          (e.scalarMult.base = function (e) {
            if ((fe(e), 32 !== e.length)) throw new Error('bad n size');
            var t = new Uint8Array(32);
            return q(t, e), t;
          }),
          (e.scalarMult.scalarLength = 32),
          (e.scalarMult.groupElementLength = 32),
          (e.box = function (t, r, n, a) {
            var o = e.box.before(n, a);
            return e.secretbox(t, r, o);
          }),
          (e.box.before = function (e, t) {
            fe(e, t),
              (function (e, t) {
                if (32 !== e.length) throw new Error('bad public key size');
                if (32 !== t.length) throw new Error('bad secret key size');
              })(e, t);
            var r = new Uint8Array(32);
            return G(r, e, t), r;
          }),
          (e.box.after = e.secretbox),
          (e.box.open = function (t, r, n, a) {
            var o = e.box.before(n, a);
            return e.secretbox.open(t, r, o);
          }),
          (e.box.open.after = e.secretbox.open),
          (e.box.keyPair = function () {
            var e = new Uint8Array(32),
              t = new Uint8Array(32);
            return Z(e, t), { publicKey: e, secretKey: t };
          }),
          (e.box.keyPair.fromSecretKey = function (e) {
            if ((fe(e), 32 !== e.length))
              throw new Error('bad secret key size');
            var t = new Uint8Array(32);
            return q(t, e), { publicKey: t, secretKey: new Uint8Array(e) };
          }),
          (e.box.publicKeyLength = 32),
          (e.box.secretKeyLength = 32),
          (e.box.sharedKeyLength = 32),
          (e.box.nonceLength = 24),
          (e.box.overheadLength = e.secretbox.overheadLength),
          (e.sign = function (e, t) {
            if ((fe(e, t), t.length !== le))
              throw new Error('bad secret key size');
            var r = new Uint8Array(ue + e.length);
            return ie(r, e, e.length, t), r;
          }),
          (e.sign.open = function (e, t) {
            if ((fe(e, t), t.length !== de))
              throw new Error('bad public key size');
            var r = new Uint8Array(e.length),
              n = ce(r, e, e.length, t);
            if (n < 0) return null;
            for (var a = new Uint8Array(n), o = 0; o < a.length; o++)
              a[o] = r[o];
            return a;
          }),
          (e.sign.detached = function (t, r) {
            for (
              var n = e.sign(t, r), a = new Uint8Array(ue), o = 0;
              o < a.length;
              o++
            )
              a[o] = n[o];
            return a;
          }),
          (e.sign.detached.verify = function (e, t, r) {
            if ((fe(e, t, r), t.length !== ue))
              throw new Error('bad signature size');
            if (r.length !== de) throw new Error('bad public key size');
            var n,
              a = new Uint8Array(ue + e.length),
              o = new Uint8Array(ue + e.length);
            for (n = 0; n < ue; n++) a[n] = t[n];
            for (n = 0; n < e.length; n++) a[n + ue] = e[n];
            return ce(o, a, a.length, r) >= 0;
          }),
          (e.sign.keyPair = function () {
            var e = new Uint8Array(de),
              t = new Uint8Array(le);
            return ne(e, t), { publicKey: e, secretKey: t };
          }),
          (e.sign.keyPair.fromSecretKey = function (e) {
            if ((fe(e), e.length !== le))
              throw new Error('bad secret key size');
            for (var t = new Uint8Array(de), r = 0; r < t.length; r++)
              t[r] = e[32 + r];
            return { publicKey: t, secretKey: new Uint8Array(e) };
          }),
          (e.sign.keyPair.fromSeed = function (e) {
            if ((fe(e), 32 !== e.length)) throw new Error('bad seed size');
            for (
              var t = new Uint8Array(de), r = new Uint8Array(le), n = 0;
              n < 32;
              n++
            )
              r[n] = e[n];
            return ne(t, r, !0), { publicKey: t, secretKey: r };
          }),
          (e.sign.publicKeyLength = de),
          (e.sign.secretKeyLength = le),
          (e.sign.seedLength = 32),
          (e.sign.signatureLength = ue),
          (e.hash = function (e) {
            fe(e);
            var t = new Uint8Array(64);
            return X(t, e, e.length), t;
          }),
          (e.hash.hashLength = 64),
          (e.verify = function (e, t) {
            return (
              fe(e, t),
              0 !== e.length &&
                0 !== t.length &&
                e.length === t.length &&
                0 === m(e, 0, t, 0, e.length)
            );
          }),
          (e.setPRNG = function (e) {
            n = e;
          }),
          (function () {
            var t =
              'undefined' != typeof self ? self.crypto || self.msCrypto : null;
            t && t.getRandomValues
              ? e.setPRNG(function (e, r) {
                  var n,
                    a = new Uint8Array(r);
                  for (n = 0; n < r; n += 65536)
                    t.getRandomValues(
                      a.subarray(n, n + Math.min(r - n, 65536))
                    );
                  for (n = 0; n < r; n++) e[n] = a[n];
                  he(a);
                })
              : (t = r(72002)) &&
                t.randomBytes &&
                e.setPRNG(function (e, r) {
                  var n,
                    a = t.randomBytes(r);
                  for (n = 0; n < r; n++) e[n] = a[n];
                  he(a);
                });
          })();
      })(e.exports ? e.exports : (self.nacl = self.nacl || {}));
    },
    58534: (e, t, r) => {
      'use strict';
      r.d(t, { b: () => n });
      const n = { name: '@polkadot/util-crypto', version: '6.2.2-7' };
    },
    98180: (e, t, r) => {
      'use strict';
      r.d(t, { P: () => u });
      var n = r(90791),
        a = r(43243),
        o = r(57592),
        s = r(87672),
        i = r(80081),
        c = r(55036);
      function u(e, t = (0, o.F)(), r = 2048, u = !1) {
        const d = (0, n.Y)(e),
          l = (0, n.Y)(t);
        return {
          password:
            (0, a.DK)() && !u
              ? (0, a.nk)(d, l, r)
              : (function (e, t, r, n = 64) {
                  let a = new Uint8Array(),
                    o = 0;
                  const u = (0, s.e)(t, new Uint8Array(4));
                  for (; a.length < n; ) {
                    o++,
                      u.set((0, i.a)(o, { bitLength: 32, isLe: !1 }), t.length);
                    let n = (0, c.c)(e, u);
                    const d = n;
                    let l = 0;
                    for (; ++l < r; ) {
                      n = (0, c.c)(e, n);
                      let t = -1;
                      for (; ++t < n.length; ) d[t] ^= n[t];
                    }
                    a = (0, s.e)(a, d);
                  }
                  return a.slice(0, n);
                })(d, l, r),
          rounds: r,
          salt: t
        };
      }
    },
    98040: (e, t, r) => {
      'use strict';
      r.d(t, { f: () => o });
      var n = r(68631),
        a = r(57592);
      function o(e = 32) {
        return (0, n.c)((0, a.F)(e));
      }
    },
    57592: (e, t, r) => {
      'use strict';
      r.d(t, { F: () => a });
      var n = r(80931);
      function a(e = 32) {
        return (0, n.P)(new Uint8Array(e));
      }
    },
    7345: (e, t, r) => {
      'use strict';
      r.d(t, { N: () => s });
      var n = r(43243),
        a = r(6349),
        o = r(97796);
      function s(e, t) {
        return (0, a.k)((0, n.vV)((0, o.e)(e), t));
      }
    },
    22106: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => s });
      var n = r(43243),
        a = r(6349),
        o = r(97796);
      function s(e, t) {
        return (0, a.k)((0, n.Tc)((0, o.e)(e), t));
      }
    },
    37703: (e, t, r) => {
      'use strict';
      r.d(t, { p: () => o });
      var n = r(43243),
        a = r(6349);
      function o(e) {
        return (0, a.k)((0, n.Mw)(e));
      }
    },
    6349: (e, t, r) => {
      'use strict';
      function n(e) {
        return { publicKey: e.slice(64, 96), secretKey: e.slice(0, 64) };
      }
      r.d(t, { k: () => n });
    },
    97796: (e, t, r) => {
      'use strict';
      r.d(t, { e: () => a });
      var n = r(87672);
      function a({ publicKey: e, secretKey: t }) {
        return (0, n.e)(t, e).slice();
      }
    },
    79275: (e, t, r) => {
      'use strict';
      r.d(t, { U: () => s });
      var n = r(85818),
        a = r(90791),
        o = r(43243);
      function s(e, { publicKey: t, secretKey: r }) {
        return (
          (0, n.h)(
            32 === (null == t ? void 0 : t.length),
            'Expected a valid publicKey, 32-bytes'
          ),
          (0, n.h)(
            64 === (null == r ? void 0 : r.length),
            'Expected a valid secretKey, 64-bytes'
          ),
          (0, o.x1)(t, r, (0, a.Y)(e))
        );
      }
    },
    11980: (e, t, r) => {
      'use strict';
      r.d(t, { P: () => s });
      var n = r(90791),
        a = r(85818),
        o = r(43243);
      function s(e, t, r) {
        const s = (0, n.Y)(r),
          i = (0, n.Y)(t);
        return (
          (0, a.h)(
            32 === s.length,
            () => `Invalid publicKey, received ${s.length} bytes, expected 32`
          ),
          (0, a.h)(
            64 === i.length,
            () => `Invalid signature, received ${i.length} bytes, expected 64`
          ),
          (0, o.QK)(i, (0, n.Y)(e), s)
        );
      }
    },
    39883: (e, t, r) => {
      'use strict';
      r.d(t, { $: () => i });
      var n = r(85818),
        a = r(90791),
        o = r(43243);
      const s = new Uint8Array();
      function i(e, { secretKey: t }, r = s, i = s) {
        return (
          (0, n.h)(
            64 === (null == t ? void 0 : t.length),
            'Invalid secretKey, expected 64-bytes'
          ),
          (0, o.p_)(t, (0, a.Y)(r), (0, a.Y)(e), (0, a.Y)(i))
        );
      }
    },
    31131: (e, t, r) => {
      'use strict';
      r.d(t, { n: () => i });
      var n = r(90791),
        a = r(85818),
        o = r(43243);
      const s = new Uint8Array();
      function i(e, t, r, i = s, c = s) {
        const u = (0, n.Y)(r),
          d = (0, n.Y)(t);
        return (
          (0, a.h)(32 === u.length, 'Invalid publicKey, expected 32-bytes'),
          (0, a.h)(
            96 === d.length,
            'Invalid vrfSign output, expected 96 bytes'
          ),
          (0, o.vp)(u, (0, n.Y)(i), (0, n.Y)(e), (0, n.Y)(c), d)
        );
      }
    },
    12139: (e, t, r) => {
      'use strict';
      r.d(t, { t: () => n });
      const n = { N: 32768, p: 1, r: 8 };
    },
    66255: (e, t, r) => {
      'use strict';
      r.d(t, { z: () => d });
      var n = r(74237),
        a = r(90791),
        o = r(65094),
        s = r(84457),
        i = r(43243),
        c = r(57592),
        u = r(12139);
      function d(e, t = (0, c.F)(), r = u.t) {
        return {
          params: r,
          password: (0, i.DK)()
            ? (0, i.f3)((0, a.Y)(e), t, Math.log2(r.N), r.r, r.p)
            : (0, o.r)(
                n((0, s.Y)((0, a.Y)(e)), (0, s.Y)(t), r.N, r.r, r.p, 64)
              ),
          salt: t
        };
      }
    },
    34464: (e, t, r) => {
      'use strict';
      r.d(t, { O: () => s });
      var n = r(19699),
        a = r(85818),
        o = r(12139);
      function s(e) {
        const t = e.subarray(0, 32),
          r = (0, n._)(e.subarray(32, 36), { isLe: !0 }).toNumber(),
          s = (0, n._)(e.subarray(36, 40), { isLe: !0 }).toNumber(),
          i = (0, n._)(e.subarray(40, 44), { isLe: !0 }).toNumber();
        return (
          (0, a.h)(
            r === o.t.N && s === o.t.p && i === o.t.r,
            'Invalid injected scrypt params found'
          ),
          { params: { N: r, p: s, r: i }, salt: t }
        );
      }
    },
    92249: (e, t, r) => {
      'use strict';
      r.d(t, { e: () => o });
      var n = r(87672),
        a = r(80081);
      function o(e, { N: t, p: r, r: o }) {
        return (0, n.e)(
          e,
          (0, a.a)(t, { bitLength: 32, isLe: !0 }),
          (0, a.a)(r, { bitLength: 32, isLe: !0 }),
          (0, a.a)(o, { bitLength: 32, isLe: !0 })
        );
      }
    },
    78987: (e, t, r) => {
      'use strict';
      r.d(t, { R: () => o });
      var n = r(85818),
        a = r(68937);
      function o(e) {
        return (
          (0, n.h)([33, 65].includes(e.length), 'Invalid publicKey provided'),
          new Uint8Array(a.k.keyFromPublic(e).getPublic().encodeCompressed())
        );
      }
    },
    62161: (e, t, r) => {
      'use strict';
      r.d(t, { o: () => i });
      var n = r(85818),
        a = r(87672),
        o = r(80081),
        s = r(68937);
      function i(e) {
        (0, n.h)([33, 65].includes(e.length), 'Invalid publicKey provided');
        const t = s.k.keyFromPublic(e).getPublic();
        return (0, a.e)((0, o.a)(t.getX(), s.U), (0, o.a)(t.getY(), s.U));
      }
    },
    90979: (e, t, r) => {
      'use strict';
      r.d(t, { G: () => s });
      var n = r(13085),
        a = r(80013);
      const o = ['blake2', 'keccak'];
      function s(e, t) {
        if ('blake2' === e) return (0, n.b)(t);
        if ('keccak' === e) return (0, a.i)(t);
        throw new Error(
          `Unsupported secp256k1 hasher '${e}', expected one of ${o.join(', ')}`
        );
      }
    },
    47174: (e, t, r) => {
      'use strict';
      r.d(t, { M: () => s });
      var n = r(85818),
        a = r(80081),
        o = r(68937);
      function s(e) {
        (0, n.h)(
          32 === e.length,
          'Expected valid 32-byte private key as a seed'
        );
        const t = o.k.keyFromPrivate(e);
        return {
          publicKey: new Uint8Array(t.getPublic().encodeCompressed()),
          secretKey: (0, a.a)(t.getPrivate(), o.U)
        };
      }
    },
    68937: (e, t, r) => {
      'use strict';
      r.d(t, { k: () => n, U: () => a });
      const n = new (0, r(87554).ec)('secp256k1'),
        a = { bitLength: 256, isLe: !1 };
    },
    1815: (e, t, r) => {
      'use strict';
      r.d(t, { y: () => c });
      var n = r(85818),
        a = r(87672),
        o = r(80081),
        s = r(90979),
        i = r(68937);
      function c(e, { secretKey: t }, r = 'blake2') {
        (0, n.h)(
          32 === (null == t ? void 0 : t.length),
          'Expected valid secp256k1 secretKey, 32-bytes'
        );
        const c = i.k.keyFromPrivate(t).sign((0, s.G)(r, e));
        return (0, a.e)(
          (0, o.a)(c.r, i.U),
          (0, o.a)(c.s, i.U),
          new Uint8Array([c.recoveryParam || 0])
        );
      }
    },
    51215: (e, t, r) => {
      'use strict';
      r.d(t, { n: () => c });
      var n = r(62197),
        a = r(85818),
        o = r(20987),
        s = r(80081);
      const i = r(68937).k.curve;
      function c(e, t) {
        (0, a.h)(
          (0, o.U)(e) && 32 === e.length,
          'Expected seckey to be an Uint8Array with length 32'
        ),
          (0, a.h)(
            (0, o.U)(t) && 32 === t.length,
            'Expected tweak to be an Uint8Array with length 32'
          );
        const r = new n(t);
        return (
          (0, a.h)(r.cmp(i.n) < 0, 'Tweak parameter is out of range'),
          r.iadd(new n(e)),
          r.cmp(i.n) >= 0 && r.isub(i.n),
          (0, a.h)(!r.isZero(), 'Invalid resulting private key'),
          (0, s.a)(r, { bitLength: 256, isLe: !1 })
        );
      }
    },
    84265: (e, t, r) => {
      'use strict';
      r.d(t, { L: () => u });
      var n = r(90791),
        a = r(85818),
        o = r(23050),
        s = r(62161),
        i = r(90979),
        c = r(68937);
      function u(e, t, r, u = 'blake2') {
        const d = 'keccak' === u,
          l = (0, n.Y)(t);
        (0, a.h)(
          65 === l.length,
          `Expected signature with 65 bytes, ${l.length} found instead`
        );
        const p = new Uint8Array(
            c.k
              .recoverPubKey(
                (0, i.G)(u, e),
                { r: l.slice(0, 32), s: l.slice(32, 64) },
                l[64]
              )
              .encodeCompressed()
          ),
          f = (0, i.G)(u, d ? (0, s.o)(p) : p),
          h = (0, n.Y)(r);
        return d ? (0, o.S)(f.slice(-20), h.slice(-20)) : (0, o.S)(f, h);
      }
    },
    20982: (e, t, r) => {
      'use strict';
      r.d(t, { D: () => h });
      var n = r(85818),
        a = r(90791),
        o = r(87602),
        s = r(90820),
        i = r(11980),
        c = r(84265);
      const u = (e) => (t, r, n) => (0, c.L)(t, r, n, e),
        d = [
          ['ecdsa', u('blake2')],
          ['ethereum', u('keccak')]
        ],
        l = [['ed25519', s.C], ['sr25519', i.P], ...d],
        p = ['ed25519', 'sr25519', 'ecdsa'];
      function f(e, { message: t, publicKey: r, signature: n }, a = l) {
        return (
          (e.isValid = a.some(([a, o]) => {
            try {
              if (o(t, n, r)) return (e.crypto = a), !0;
            } catch (e) {}
            return !1;
          })),
          e
        );
      }
      function h(e, t, r) {
        const c = (0, a.Y)(t);
        (0, n.h)(
          [64, 65, 66].includes(c.length),
          () =>
            `Invalid signature length, expected [64..66] bytes, found ${c.length}`
        );
        const u = (0, o.m)(r),
          l = { message: e, publicKey: u, signature: c },
          h = { crypto: 'none', isValid: !1, publicKey: u };
        return [0, 1, 2].includes(c[0]) && [65, 66].includes(c.length)
          ? (function (e, { message: t, publicKey: r, signature: a }) {
              (0, n.h)(
                [0, 1, 2].includes(a[0]),
                () =>
                  `Unknown crypto type, expected signature prefix [0..2], found ${a[0]}`
              );
              const o = p[a[0]] || 'none';
              e.crypto = o;
              try {
                e.isValid = {
                  ecdsa: () =>
                    f(
                      e,
                      { message: t, publicKey: r, signature: a.subarray(1) },
                      d
                    ).isValid,
                  ed25519: () => (0, s.C)(t, a.subarray(1), r),
                  none: () => {
                    throw Error('no verify for `none` crypto type');
                  },
                  sr25519: () => (0, i.P)(t, a.subarray(1), r)
                }[o]();
              } catch (e) {}
              return e;
            })(h, l)
          : f(h, l);
      }
    },
    51336: (e, t, r) => {
      'use strict';
      r.d(t, { R: () => o });
      var n = r(68631),
        a = r(27005);
      function o(e, t = 64) {
        return (0, n.c)((0, a.r)(e, t));
      }
    },
    27005: (e, t, r) => {
      'use strict';
      r.d(t, { r: () => l });
      var n = r(90791),
        a = r(43243),
        o = r(62197),
        s = r(77567),
        i = r(94033),
        c = r(33298),
        u = r(84457);
      function d(e, t) {
        return new o(
          (function (e, t) {
            return (function (e, t) {
              return (0, i.z)(e) || (0, c.H)(e)
                ? s.h64(e, t)
                : s.h64((0, u.Y)(e), t);
            })(e, t).toString(16);
          })(e, t),
          16
        );
      }
      function l(e, t = 64, r = !1) {
        const o = Math.ceil(t / 64);
        if ((0, a.DK)() && !r) return (0, a.Qf)((0, n.Y)(e), o);
        const s = new Uint8Array(Math.ceil(t / 8));
        for (let t = 0; t < o; t++) s.set(d(e, t).toArray('le', 8), 8 * t);
        return s;
      }
    },
    74269: (e, t, r) => {
      'use strict';
      function n(e, t) {
        const r = Math.ceil(e.length / t),
          n = Array(r);
        for (let a = 0; a < r; a++) {
          const r = a * t;
          n[a] = e.slice(r, r + t);
        }
        return n;
      }
      r.d(t, { Z: () => n });
    },
    56094: (e, t, r) => {
      'use strict';
      function n(e) {
        const t = new Array(e.reduce((e, t) => e + t.length, 0));
        let r = -1;
        for (let n = 0; n < e.length; n++) {
          const a = e[n];
          for (let e = 0; e < a.length; e++) t[++r] = a[e];
        }
        return t;
      }
      r.d(t, { a: () => n });
    },
    85818: (e, t, r) => {
      'use strict';
      r.d(t, { h: () => o, k: () => s });
      var n = r(63029),
        a = r(71555);
      function o(e, t) {
        if (!e) throw new Error((0, n.m)(t) ? t() : t);
      }
      function s(e, t) {
        return o(!(0, a.o)(e), t), e;
      }
    },
    24642: (e, t, r) => {
      'use strict';
      r.d(t, {
        nw: () => a,
        If: () => o,
        um: () => s,
        Jo: () => i,
        bX: () => c,
        nr: () => u,
        Ln: () => d,
        wJ: () => l,
        ru: () => p,
        xZ: () => f,
        aP: () => h,
        S8: () => m,
        D_: () => y,
        uy: () => b,
        ed: () => g,
        Wi: () => v,
        Ew: () => w
      });
      var n = r(62197);
      const a = new n(0),
        o = new n(1),
        s = new n(2),
        i = new n(3),
        c = new n(4),
        u = new n(5),
        d = new n(6),
        l = new n(7),
        p = new n(8),
        f = new n(9),
        h = new n(10),
        m = new n(100),
        y = new n(1e3),
        b = new n(1e6),
        g = new n(1e9),
        v = g.mul(g),
        w = new n(Number.MAX_SAFE_INTEGER);
    },
    61207: (e, t, r) => {
      'use strict';
      r.d(t, { x: () => a });
      var n = r(70999);
      function a(...e) {
        return (0, n.V)('max', e);
      }
    },
    60121: (e, t, r) => {
      'use strict';
      r.d(t, { D: () => c });
      var n = r(62197),
        a = r(85818),
        o = r(24642),
        s = r(68991);
      const i = new n(94906265);
      function c(e) {
        const t = (0, s.G)(e);
        if (
          ((0, a.h)(
            t.gte(o.nw),
            'square root of negative numbers is not supported'
          ),
          t.lte(o.Ew))
        )
          return new n(Math.floor(Math.sqrt(t.toNumber())));
        let r = i.clone();
        for (;;) {
          const e = t.div(r).iadd(r).ishrn(1);
          if (r.eq(e) || r.eq(e.sub(o.If))) return r;
          r = e;
        }
      }
    },
    68991: (e, t, r) => {
      'use strict';
      r.d(t, { G: () => c });
      var n = r(62197),
        a = r(40757),
        o = r(75041),
        s = r(14842),
        i = r(14848);
      function c(e) {
        return e
          ? (0, s.v)(e)
            ? (0, a.m)(e.toString())
            : (0, o.C)(e)
            ? new n(e.toString())
            : n.isBN(e)
            ? e
            : (0, i.S)(e)
            ? e.toBn()
            : new n(e)
          : new n(0);
      }
    },
    15466: (e, t, r) => {
      'use strict';
      r.d(t, { G: () => c });
      var n = r(51119),
        a = r(41216),
        o = r(68631),
        s = r(80081);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e, t = { bitLength: -1, isLe: !1, isNegative: !1 }, r) {
        if (!e) return '0x00';
        const c = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(r), !0).forEach(function (t) {
                  (0, n.Z)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        })(
          { isLe: !1, isNegative: !1 },
          (0, a.h)(t) ? { bitLength: t, isLe: r } : t
        );
        return (0, o.c)((0, s.a)(e, c));
      }
    },
    80081: (e, t, r) => {
      'use strict';
      r.d(t, { a: () => i });
      var n = r(51119),
        a = r(41216),
        o = r(68991);
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e, t = { bitLength: -1, isLe: !0, isNegative: !1 }, r) {
        const i = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? s(Object(r), !0).forEach(function (t) {
                    (0, n.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : s(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })(
            { bitLength: -1, isLe: !0, isNegative: !1 },
            (0, a.h)(t) ? { bitLength: t, isLe: r } : t
          ),
          c = (0, o.G)(e),
          u =
            -1 === i.bitLength
              ? Math.ceil(c.bitLength() / 8)
              : Math.ceil((i.bitLength || 0) / 8);
        return e
          ? (function (e, t, { isLe: r, isNegative: n }) {
              const a = new Uint8Array(t),
                o = n ? e.toTwos(8 * t) : e;
              return a.set(o.toArray(r ? 'le' : 'be', t), 0), a;
            })(c, u, i)
          : (function (e, t) {
              return -1 === t.bitLength ? new Uint8Array() : new Uint8Array(e);
            })(u, i);
      }
    },
    70999: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => o });
      var n = r(62197),
        a = r(85818);
      function o(e, t) {
        return (
          (0, a.h)(t.length >= 1, 'Must provide one or more BN arguments'),
          t.reduce((t, r) => n[e](t, r), t[0])
        );
      }
    },
    65094: (e, t, r) => {
      'use strict';
      function n(e) {
        return new Uint8Array(e || []);
      }
      r.d(t, { r: () => n });
    },
    85836: (e, t, r) => {
      'use strict';
      r.d(t, { N: () => o });
      var n = r(87672),
        a = r(16257);
      function o(e) {
        return (0, n.e)((0, a.Y)(e.length), e);
      }
    },
    67301: (e, t, r) => {
      'use strict';
      r.d(t, { P: () => i });
      var n = r(62197),
        a = r(24642),
        o = r(90791),
        s = r(19699);
      function i(e) {
        const t = (0, o.Y)(e),
          r = 3 & t[0];
        if (0 === r) return [1, new n(t[0]).ishrn(2)];
        if (1 === r) return [2, (0, s._)(t.slice(0, 2), !0).ishrn(2)];
        if (2 === r) return [4, (0, s._)(t.slice(0, 4), !0).ishrn(2)];
        const i = 1 + new n(t[0]).ishrn(2).iadd(a.bX).toNumber();
        return [i, (0, s._)(t.subarray(1, i), !0)];
      }
    },
    8063: (e, t, r) => {
      'use strict';
      r.d(t, { o: () => a });
      var n = r(67301);
      function a(e) {
        const [t, r] = (0, n.P)(e),
          a = t + r.toNumber();
        return [a, e.subarray(t, a)];
      }
    },
    16257: (e, t, r) => {
      'use strict';
      r.d(t, { Y: () => p });
      var n = r(62197),
        a = r(85818),
        o = r(68991),
        s = r(80081),
        i = r(24642),
        c = r(87672);
      const u = new n(2).pow(new n(6)).subn(1),
        d = new n(2).pow(new n(14)).subn(1),
        l = new n(2).pow(new n(30)).subn(1);
      function p(e) {
        const t = (0, o.G)(e);
        if (t.lte(u)) return new Uint8Array([t.toNumber() << 2]);
        if (t.lte(d)) return (0, s.a)(t.shln(2).iadd(i.If), 16, !0);
        if (t.lte(l)) return (0, s.a)(t.shln(2).iadd(i.um), 32, !0);
        const r = (0, s.a)(t);
        let n = r.length;
        for (; 0 === r[n - 1]; ) n--;
        return (
          (0, a.h)(
            n >= 4,
            'Invalid length, previous checks match anything less than 2^30'
          ),
          (0, c.e)([3 + ((n - 4) << 2)], r.subarray(0, n))
        );
      }
    },
    76103: (e, t, r) => {
      'use strict';
      r.d(t, { E: () => u });
      var n = r(51119);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        return {
          days: e.days + t.days,
          hours: e.hours + t.hours,
          milliseconds: e.milliseconds + t.milliseconds,
          minutes: e.minutes + t.minutes,
          seconds: e.seconds + t.seconds
        };
      }
      const i = { days: 0, hours: 0, milliseconds: 0, minutes: 0, seconds: 0 };
      function c(e) {
        const t = e / 1e3;
        if (t < 60) {
          const r = Math.floor(t);
          return s(o(o({}, i), {}, { seconds: r }), u(e - 1e3 * r));
        }
        return (function (e, t) {
          const r = t / 60;
          if (r < 60) {
            const t = Math.floor(r);
            return s(o(o({}, i), {}, { minutes: t }), u(e - 60 * t * 1e3));
          }
          return (function (e, t) {
            const r = t / 60;
            if (r < 24) {
              const t = Math.floor(r);
              return s(o(o({}, i), {}, { hours: t }), u(e - 3600 * t * 1e3));
            }
            return (function (e, t) {
              const r = Math.floor(t / 24);
              return s(o(o({}, i), {}, { days: r }), u(e - 86400 * r * 1e3));
            })(e, r);
          })(e, r);
        })(e, t);
      }
      function u(e) {
        return e ? (e < 1e3 ? o(o({}, i), {}, { milliseconds: e }) : c(e)) : i;
      }
    },
    8118: (e, t, r) => {
      'use strict';
      r.d(t, { a: () => l });
      var n = r(68991),
        a = r(18608),
        o = r(71555),
        s = r(85901),
        i = r(13285);
      const c = i.SI[i.iA].text;
      let u = 0,
        d = c;
      const l = function (e, t = !0, r = u) {
        let o = (0, n.G)(e).toString();
        if (0 === o.length || '0' === o) return '0';
        const c = o[0].startsWith('-');
        c && (o = o.substr(1));
        const {
            decimals: d = r,
            forceUnit: l,
            withSi: p = !0,
            withSiFull: f = !1,
            withUnit: h = !0
          } = (0, a.j)(t) ? { withSi: t } : t,
          m = (0, i.Xx)(o, d, l),
          y = o.length - (d + m.power),
          b = o.substr(0, y),
          g = `${`${new Array(1 + (y < 0 ? 0 - y : 0)).join('0')}${o}`.substr(
            y < 0 ? 0 : y
          )}0000`.substr(0, 4),
          v =
            p || f
              ? '-' === m.value
                ? h
                  ? ` ${(0, a.j)(h) ? m.text : h}`
                  : ''
                : ` ${f ? m.text : m.value}${
                    h
                      ? `${f ? ' ' : ''}${(0, a.j)(h) ? i.SI[i.iA].text : h}`
                      : ''
                  }`
              : '';
        return `${c ? '-' : ''}${(0, s.V)(b || '0')}.${g}${v}`;
      };
      (l.calcSi = (e, t = u) => (0, i.Xx)(e, t)),
        (l.findSi = i.Ns),
        (l.getDefaults = () => ({ decimals: u, unit: d })),
        (l.getOptions = (e = u) =>
          i.SI.filter(({ power: t }) => !(t < 0) || e + t >= 0)),
        (l.setDefaults = ({ decimals: e, unit: t }) => {
          (u = (0, o.o)(e) ? u : Array.isArray(e) ? e[0] : e),
            (d = (0, o.o)(t) ? d : Array.isArray(t) ? t[0] : t),
            (i.SI[i.iA].text = d);
        });
    },
    55784: (e, t, r) => {
      'use strict';
      function n(e) {
        return e.toString().padStart(2, '0');
      }
      function a(e) {
        return `${e.getFullYear().toString()}-${n(e.getMonth() + 1)}-${n(
          e.getDate()
        )} ${n(e.getHours())}:${n(e.getMinutes())}:${n(e.getSeconds())}`;
      }
      r.d(t, { p: () => a });
    },
    85901: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => a });
      const n = new RegExp('(\\d+?)(?=(\\d{3})+(?!\\d)|$)', 'g');
      function a(e) {
        const t = e[0].startsWith('-'),
          r = t ? e.substr(1).match(n) : e.match(n);
        return r ? `${t ? '-' : ''}${r.join(',')}` : e;
      }
    },
    26472: (e, t, r) => {
      'use strict';
      r.d(t, { u: () => o });
      var n = r(68991),
        a = r(85901);
      function o(e) {
        return (0, a.V)((0, n.G)(e).toString());
      }
    },
    13285: (e, t, r) => {
      'use strict';
      r.d(t, { iA: () => n, SI: () => a, Ns: () => o, Xx: () => s });
      const n = 8,
        a = [
          { power: -24, text: 'yocto', value: 'y' },
          { power: -21, text: 'zepto', value: 'z' },
          { power: -18, text: 'atto', value: 'a' },
          { power: -15, text: 'femto', value: 'f' },
          { power: -12, text: 'pico', value: 'p' },
          { power: -9, text: 'nano', value: 'n' },
          { power: -6, text: 'micro', value: 'µ' },
          { power: -3, text: 'milli', value: 'm' },
          { power: 0, text: 'Unit', value: '-' },
          { power: 3, text: 'Kilo', value: 'k' },
          { power: 6, text: 'Mill', value: 'M' },
          { power: 9, text: 'Bill', value: 'B' },
          { power: 12, text: 'Tril', value: 'T' },
          { power: 15, text: 'Peta', value: 'P' },
          { power: 18, text: 'Exa', value: 'E' },
          { power: 21, text: 'Zeta', value: 'Z' },
          { power: 24, text: 'Yotta', value: 'Y' }
        ];
      function o(e) {
        for (let t = 0; t < a.length; t++) if (a[t].value === e) return a[t];
        return a[n];
      }
      function s(e, t, r) {
        if (r) return o(r);
        const s = n - 1 + Math.ceil((e.length - t) / 3);
        return a[s] || a[s < 0 ? 0 : a.length - 1];
      }
    },
    59947: (e, t, r) => {
      'use strict';
      r.d(t, { z: () => a });
      var n = r(14842);
      function a(e) {
        return !(!e || !(0, n.v)(e, -1, !0) || '0x' !== e.substr(0, 2));
      }
    },
    40557: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => o });
      var n = r(59947);
      const a = /^[a-fA-F0-9]+$/;
      function o(e) {
        if (!e) return '';
        if ((0, n.z)(e)) return e.substr(2);
        if (a.test(e)) return e;
        throw new Error(`Invalid hex ${e} passed to hexStripPrefix`);
      }
    },
    40757: (e, t, r) => {
      'use strict';
      r.d(t, { m: () => c });
      var n = r(51119),
        a = r(62197),
        o = r(18608),
        s = r(40557);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e, t = { isLe: !1, isNegative: !1 }) {
        if (!e) return new a(0);
        const r = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(r), !0).forEach(function (t) {
                    (0, n.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : i(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({ isLe: !1, isNegative: !1 }, (0, o.j)(t) ? { isLe: t } : t),
          c = (0, s.V)(e),
          u = new a(
            (r.isLe
              ? (function (e) {
                  return (e.match(/.{1,2}/g) || []).reverse().join('');
                })(c)
              : c) || '00',
            16
          );
        return r.isNegative ? u.fromTwos(4 * c.length) : u;
      }
    },
    61022: (e, t, r) => {
      'use strict';
      r.d(t, { r: () => o });
      var n = r(69835),
        a = r(25754);
      function o(e) {
        return (0, n.z)((0, a.G)(e));
      }
    },
    25754: (e, t, r) => {
      'use strict';
      r.d(t, { G: () => s });
      var n = r(85818),
        a = r(14842),
        o = r(40557);
      function s(e, t = -1) {
        if (!e) return new Uint8Array();
        (0, n.h)(
          (0, a.v)(e),
          () => `Expected hex value to convert, found '${e}'`
        );
        const r = (0, o.V)(e),
          s = r.length / 2,
          i = Math.ceil(-1 === t ? s : t / 8),
          c = new Uint8Array(i),
          u = Math.max(0, i - s);
        for (let e = 0; e < i; e++) c[e + u] = parseInt(r.substr(2 * e, 2), 16);
        return c;
      }
    },
    32096: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          BN_BILLION: () => l.ed,
          BN_EIGHT: () => l.ru,
          BN_FIVE: () => l.nr,
          BN_FOUR: () => l.bX,
          BN_HUNDRED: () => l.S8,
          BN_MAX_INTEGER: () => l.Ew,
          BN_MILLION: () => l.uy,
          BN_NINE: () => l.xZ,
          BN_ONE: () => l.If,
          BN_QUINTILL: () => l.Wi,
          BN_SEVEN: () => l.wJ,
          BN_SIX: () => l.Ln,
          BN_TEN: () => l.aP,
          BN_THOUSAND: () => l.D_,
          BN_THREE: () => l.Jo,
          BN_TWO: () => l.um,
          BN_ZERO: () => l.nw,
          arrayChunk: () => o.Z,
          arrayFilter: () => c,
          arrayFlatten: () => u.a,
          assert: () => d.h,
          assertReturn: () => d.k,
          bnFromHex: () => p.m,
          bnMax: () => f.x,
          bnMin: () => m,
          bnSqrt: () => y.D,
          bnToBn: () => b.G,
          bnToHex: () => g.G,
          bnToU8a: () => v.a,
          bufferToU8a: () => w.r,
          calcSi: () => N.Xx,
          compactAddLength: () => O.N,
          compactFromU8a: () => k.P,
          compactStripLength: () => A.o,
          compactToU8a: () => _.Y,
          detectPackage: () => a.E,
          extractTime: () => I.E,
          findSi: () => N.Ns,
          formatBalance: () => P.a,
          formatDate: () => S.p,
          formatDecimal: () => x.V,
          formatElapsed: () => E,
          formatNumber: () => T.u,
          hexAddPrefix: () => j,
          hexFixLength: () => R,
          hexHasPrefix: () => C.z,
          hexStripPrefix: () => D.V,
          hexToBn: () => p.m,
          hexToNumber: () => U,
          hexToString: () => B.r,
          hexToU8a: () => M.G,
          isAscii: () => L._,
          isBigInt: () => F.C,
          isBn: () => V.H,
          isBoolean: () => H.j,
          isBuffer: () => K.z,
          isChildClass: () => q.H,
          isError: () => Z.V,
          isFunction: () => G.m,
          isHex: () => z.v,
          isInstanceOf: () => W.V,
          isIp: () => Y,
          isJsonObject: () => X.b,
          isNull: () => s.F,
          isNumber: () => J.h,
          isObject: () => Q.K,
          isObservable: () => ee.b,
          isString: () => te.H,
          isTestChain: () => re.s,
          isToBn: () => ne.S,
          isU8a: () => ae.U,
          isUndefined: () => i.o,
          isUtf8: () => oe.O,
          isWasm: () => se.F,
          logger: () => ie.k,
          loggerFormat: () => ie.a,
          memoize: () => ce.H,
          numberToHex: () => ue,
          numberToU8a: () => de,
          packageInfo: () => n.b,
          promisify: () => le,
          stringCamelCase: () => pe.y,
          stringLowerFirst: () => fe.d,
          stringShorten: () => he,
          stringToHex: () => me.$,
          stringToU8a: () => ye.d,
          stringUpperFirst: () => be.k,
          stringify: () => ge.P,
          u8aConcat: () => ve.e,
          u8aEq: () => we.S,
          u8aFixLength: () => Oe.v,
          u8aSorted: () => Ae.x,
          u8aToBn: () => ke._,
          u8aToBuffer: () => _e.Y,
          u8aToHex: () => Ie.c,
          u8aToString: () => Pe.z,
          u8aToU8a: () => Se.Y
        });
      var n = r(40412),
        a = r(228);
      (0, a.E)(n.b, 'undefined' != typeof __dirname && __dirname, [
        { name: '@polkadot/x-textdecoder', version: '6.2.2-7' },
        { name: '@polkadot/x-textencoder', version: '6.2.2-7' }
      ]);
      var o = r(74269),
        s = r(19329),
        i = r(71555);
      function c(e, t = !0) {
        return e.filter((e) => !(0, i.o)(e) && (t || !(0, s.F)(e)));
      }
      var u = r(56094),
        d = r(85818),
        l = r(24642),
        p = r(40757),
        f = r(61207),
        h = r(70999);
      function m(...e) {
        return (0, h.V)('min', e);
      }
      var y = r(60121),
        b = r(68991),
        g = r(15466),
        v = r(80081),
        w = r(65094),
        O = r(85836),
        A = r(8063),
        k = r(67301),
        _ = r(16257),
        I = r(76103),
        P = r(8118),
        S = r(55784),
        x = r(85901);
      function E(e, t) {
        const r = (e && e.getTime()) || 0,
          n = t instanceof Date ? t.getTime() : (0, b.G)(t).toNumber();
        return r && n
          ? (a = Math.max(Math.abs(r - n), 0) / 1e3) < 15
            ? `${a.toFixed(1)}s`
            : a < 60
            ? (0 | a) + 's'
            : a < 3600
            ? ((a / 60) | 0) + 'm'
            : ((a / 3600) | 0) + 'h'
          : '0.0s';
        var a;
      }
      var T = r(26472),
        N = r(13285),
        C = r(59947);
      function j(e) {
        return e && (0, C.z)(e)
          ? e
          : `0x${e && e.length % 2 == 1 ? '0' : ''}${e || ''}`;
      }
      var D = r(40557);
      function R(e, t = -1, r = !1) {
        const n = Math.ceil(t / 4),
          a = n + 2;
        return j(
          -1 === t || e.length === a || (!r && e.length < a)
            ? (0, D.V)(e)
            : e.length > a
            ? (0, D.V)(e).slice(-1 * n)
            : `${'0'.repeat(n)}${(0, D.V)(e)}`.slice(-1 * n)
        );
      }
      function U(e) {
        return e ? (0, p.m)(e).toNumber() : NaN;
      }
      var B = r(61022),
        M = r(25754),
        L = r(38397),
        F = r(75041),
        V = r(7962),
        K = r(94033),
        H = r(18608),
        q = r(19810),
        Z = r(59070),
        G = r(63029),
        z = r(14842),
        W = r(82991),
        $ = r(42648);
      function Y(e, t) {
        return 'v4' === t
          ? $.v4({ exact: !0 }).test(e)
          : 'v6' === t
          ? $.v6({ exact: !0 }).test(e)
          : $({ exact: !0 }).test(e);
      }
      var X = r(68431),
        J = r(41216),
        Q = r(2276),
        ee = r(39694),
        te = r(33298),
        re = r(41486),
        ne = r(14848),
        ae = r(20987),
        oe = r(94968),
        se = r(83237),
        ie = r(48118),
        ce = r(43100);
      function ue(e, t = -1) {
        return (0, i.o)(e) || (0, s.F)(e) || isNaN(e)
          ? '0x'
          : R(e.toString(16), t, !0);
      }
      function de(e, t = -1) {
        return (0, i.o)(e) || (0, s.F)(e) || isNaN(e)
          ? new Uint8Array()
          : (0, M.G)(ue(e, t));
      }
      function le(e, t, ...r) {
        return new Promise((n, a) => {
          t.apply(
            e,
            r.concat((e, t) => {
              e ? a(e) : n(t);
            })
          );
        });
      }
      var pe = r(57200),
        fe = r(87145);
      function he(e, t = 6) {
        return e.length <= 2 + 2 * t
          ? e.toString()
          : `${e.substr(0, t)}…${e.slice(-t)}`;
      }
      var me = r(20736),
        ye = r(8431),
        be = r(41166),
        ge = r(93170),
        ve = r(87672),
        we = r(23050),
        Oe = r(13137),
        Ae = r(94542),
        ke = r(19699),
        _e = r(84457),
        Ie = r(68631),
        Pe = r(69835),
        Se = r(90791);
    },
    38397: (e, t, r) => {
      'use strict';
      r.d(t, { _: () => s });
      var n = r(90791),
        a = r(33298);
      const o = [9, 10, 13];
      function s(e) {
        return e
          ? !(0, n.Y)(e).some((e) => e >= 127 || (e < 32 && !o.includes(e)))
          : (0, a.H)(e);
      }
    },
    75041: (e, t, r) => {
      'use strict';
      function n(e) {
        return 'bigint' == typeof e;
      }
      r.d(t, { C: () => n });
    },
    7962: (e, t, r) => {
      'use strict';
      r.d(t, { H: () => a });
      var n = r(62197);
      function a(e) {
        return n.isBN(e);
      }
    },
    18608: (e, t, r) => {
      'use strict';
      function n(e) {
        return 'boolean' == typeof e;
      }
      r.d(t, { j: () => n });
    },
    94033: (e, t, r) => {
      'use strict';
      r.d(t, { z: () => a });
      var n = r(48834).Buffer;
      function a(e) {
        return n.isBuffer(e);
      }
    },
    19810: (e, t, r) => {
      'use strict';
      function n(e, t) {
        return !!t && (e === t || e.isPrototypeOf(t));
      }
      r.d(t, { H: () => n });
    },
    59070: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => a });
      var n = r(82991);
      function a(e) {
        return (0, n.V)(e, Error);
      }
    },
    63029: (e, t, r) => {
      'use strict';
      function n(e) {
        return 'function' == typeof e;
      }
      r.d(t, { m: () => n });
    },
    14842: (e, t, r) => {
      'use strict';
      r.d(t, { v: () => o });
      var n = r(33298);
      const a = /^0x[a-fA-F0-9]+$/;
      function o(e, t = -1, r = !1) {
        const o = '0x' === e || ((0, n.H)(e) && a.test(e.toString()));
        return o && -1 !== t
          ? e.length === 2 + Math.ceil(t / 4)
          : o && (r || e.length % 2 == 0);
      }
    },
    82991: (e, t, r) => {
      'use strict';
      function n(e, t) {
        return e instanceof t;
      }
      r.d(t, { V: () => n });
    },
    68431: (e, t, r) => {
      'use strict';
      r.d(t, { b: () => a });
      var n = r(93170);
      function a(e) {
        const t = 'string' != typeof e ? (0, n.P)(e) : e;
        try {
          const e = JSON.parse(t);
          return 'object' == typeof e && null !== e;
        } catch (e) {
          return !1;
        }
      }
    },
    19329: (e, t, r) => {
      'use strict';
      function n(e) {
        return null === e;
      }
      r.d(t, { F: () => n });
    },
    41216: (e, t, r) => {
      'use strict';
      function n(e) {
        return 'number' == typeof e;
      }
      r.d(t, { h: () => n });
    },
    2276: (e, t, r) => {
      'use strict';
      function n(e) {
        return 'object' == typeof e;
      }
      r.d(t, { K: () => n });
    },
    39694: (e, t, r) => {
      'use strict';
      r.d(t, { b: () => o });
      var n = r(63029),
        a = r(2276);
      function o(e) {
        return (0, a.K)(e) && (0, n.m)(e.next);
      }
    },
    33298: (e, t, r) => {
      'use strict';
      function n(e) {
        return 'string' == typeof e || e instanceof String;
      }
      r.d(t, { H: () => n });
    },
    41486: (e, t, r) => {
      'use strict';
      r.d(t, { s: () => a });
      const n = /(Development|Local Testnet)$/;
      function a(e) {
        return !!e && !!n.test(e.toString());
      }
    },
    14848: (e, t, r) => {
      'use strict';
      r.d(t, { S: () => a });
      var n = r(63029);
      function a(e) {
        return !!e && (0, n.m)(e.toBn);
      }
    },
    20987: (e, t, r) => {
      'use strict';
      r.d(t, { U: () => a });
      var n = r(82991);
      function a(e) {
        return (0, n.V)(e, Uint8Array);
      }
    },
    71555: (e, t, r) => {
      'use strict';
      function n(e) {
        return void 0 === e;
      }
      r.d(t, { o: () => n });
    },
    94968: (e, t, r) => {
      'use strict';
      r.d(t, { O: () => o });
      var n = r(90791),
        a = r(33298);
      function o(e) {
        if (!e) return (0, a.H)(e);
        const t = (0, n.Y)(e),
          r = t.length;
        let o = 0;
        for (; o < r; )
          if (t[o] <= 127) o += 1;
          else if (t[o] >= 194 && t[o] <= 223) {
            if (!(o + 1 < r)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 191) return !1;
            o += 2;
          } else if (224 === t[o]) {
            if (!(o + 2 < r)) return !1;
            if (t[o + 1] < 160 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            o += 3;
          } else if (t[o] >= 225 && t[o] <= 236) {
            if (!(o + 2 < r)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            o += 3;
          } else if (237 === t[o]) {
            if (!(o + 2 < r)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 159) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            o += 3;
          } else if (t[o] >= 238 && t[o] <= 239) {
            if (!(o + 2 < r)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            o += 3;
          } else if (240 === t[o]) {
            if (!(o + 3 < r)) return !1;
            if (t[o + 1] < 144 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            if (t[o + 3] < 128 || t[o + 3] > 191) return !1;
            o += 4;
          } else if (t[o] >= 241 && t[o] <= 243) {
            if (!(o + 3 < r)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            if (t[o + 3] < 128 || t[o + 3] > 191) return !1;
            o += 4;
          } else {
            if (244 !== t[o]) return !1;
            if (!(o + 3 < r)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 143) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            if (t[o + 3] < 128 || t[o + 3] > 191) return !1;
            o += 4;
          }
        return !0;
      }
    },
    83237: (e, t, r) => {
      'use strict';
      r.d(t, { F: () => o });
      var n = r(23050);
      const a = new Uint8Array([0, 97, 115, 109]);
      function o(e) {
        return !!e && (0, n.S)(e.subarray(0, 4), a);
      }
    },
    48118: (e, t, r) => {
      'use strict';
      r.d(t, { a: () => f, k: () => y });
      var n = r(55784),
        a = r(7962),
        o = r(94033),
        s = r(63029),
        i = r(2276),
        c = r(20987),
        u = r(68631),
        d = r(90791),
        l = r(34406);
      const p = { debug: 'log', error: 'error', log: 'log', warn: 'warn' };
      function f(e) {
        return Array.isArray(e)
          ? e.map(f)
          : (0, a.H)(e)
          ? e.toString()
          : (0, c.U)(e) || (0, o.z)(e)
          ? (0, u.c)((0, d.Y)(e))
          : (function (e) {
              return e && (0, i.K)(e) && e.constructor === Object
                ? Object.keys(e).reduce((t, r) => ((t[r] = f(e[r])), t), {})
                : e;
            })(e);
      }
      function h(e, t, r, a = -1) {
        if (1 === r.length && (0, s.m)(r[0])) {
          const n = r[0]();
          return h(e, t, Array.isArray(n) ? n : [n], a);
        }
        console[p[e]](
          (0, n.p)(new Date()),
          t,
          ...r.map(f).map((e) => {
            if (a <= 0) return e;
            const t = `${e}`;
            return t.length < a ? e : `${t.substr(0, a)} ...`;
          })
        );
      }
      function m() {}
      function y(e) {
        const t = `${e.toUpperCase()}:`.padStart(16),
          [r, n] = (function (e) {
            const t = ('object' == typeof l ? l : {}).env || {},
              r = parseInt(t.DEBUG_MAX || '-1', 10);
            let n = !1;
            return (
              (t.DEBUG || '')
                .toLowerCase()
                .split(',')
                .forEach((t) => {
                  t &&
                    ('*' === t ||
                      e === t ||
                      (t.endsWith('*') && e.startsWith(t.slice(0, -1)))) &&
                    (n = !0),
                    t &&
                      t.startsWith('-') &&
                      (e === t.slice(1) ||
                        (t.endsWith('*') && e.startsWith(t.slice(1, -1)))) &&
                      (n = !1);
                }),
              [n, isNaN(r) ? -1 : r]
            );
          })(e.toLowerCase());
        return {
          debug: r ? (...e) => h('debug', t, e, n) : m,
          error: (...e) => h('error', t, e),
          log: (...e) => h('log', t, e),
          noop: m,
          warn: (...e) => h('warn', t, e)
        };
      }
    },
    43100: (e, t, r) => {
      'use strict';
      r.d(t, { H: () => s });
      var n = r(71555),
        a = r(93170);
      function o() {
        return 'none';
      }
      function s(e, { getInstanceId: t = o } = {}) {
        const r = {},
          s = (...o) => {
            const s = (0, a.P)(o),
              i = t();
            return (
              r[i] || (r[i] = {}),
              (0, n.o)(r[i][s]) && (r[i][s] = e(...o)),
              r[i][s]
            );
          };
        return (
          (s.unmemoize = (...e) => {
            const o = (0, a.P)(e),
              s = t();
            r[s] && !(0, n.o)(r[s][o]) && delete r[s][o];
          }),
          s
        );
      }
    },
    40412: (e, t, r) => {
      'use strict';
      r.d(t, { b: () => n });
      const n = { name: '@polkadot/util', version: '6.2.2-7' };
    },
    57200: (e, t, r) => {
      'use strict';
      r.d(t, { y: () => a });
      var n = r(78783);
      function a(e) {
        return n(e.toString());
      }
    },
    87145: (e, t, r) => {
      'use strict';
      function n(e) {
        return e ? e.charAt(0).toLowerCase() + e.slice(1) : '';
      }
      r.d(t, { d: () => n });
    },
    20736: (e, t, r) => {
      'use strict';
      r.d(t, { $: () => o });
      var n = r(68631),
        a = r(8431);
      function o(e) {
        return (0, n.c)((0, a.d)(e));
      }
    },
    8431: (e, t, r) => {
      'use strict';
      r.d(t, { d: () => o });
      var n = r(64513);
      const a = new (void 0 === n.U.TextEncoder
        ? class {
            encode(e) {
              const t = new Uint8Array(e.length);
              for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
              return t;
            }
          }
        : n.U.TextEncoder)();
      function o(e) {
        return e ? a.encode(e.toString()) : new Uint8Array();
      }
    },
    41166: (e, t, r) => {
      'use strict';
      function n(e) {
        return e ? e.charAt(0).toUpperCase() + e.slice(1) : '';
      }
      r.d(t, { k: () => n });
    },
    93170: (e, t, r) => {
      'use strict';
      r.d(t, { P: () => a });
      var n = r(75041);
      function a(e, t) {
        return JSON.stringify(e, (e, t) => ((0, n.C)(t) ? t.toString() : t), t);
      }
    },
    87672: (e, t, r) => {
      'use strict';
      r.d(t, { e: () => a });
      var n = r(90791);
      function a(...e) {
        let t = 0,
          r = 0;
        const a = new Array(e.length);
        for (let r = 0; r < e.length; r++)
          (a[r] = (0, n.Y)(e[r])), (t += a[r].length);
        const o = new Uint8Array(t);
        for (let e = 0; e < a.length; e++) o.set(a[e], r), (r += a[e].length);
        return o;
      }
    },
    23050: (e, t, r) => {
      'use strict';
      r.d(t, { S: () => a });
      var n = r(90791);
      function a(e, t) {
        return (function (e, t) {
          if (e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
          return !0;
        })((0, n.Y)(e), (0, n.Y)(t));
      }
    },
    13137: (e, t, r) => {
      'use strict';
      function n(e, t = -1, r = !1) {
        const n = Math.ceil(t / 8);
        if (-1 === t || e.length === n) return e;
        if (e.length > n) return e.subarray(0, n);
        const a = new Uint8Array(n);
        return r ? a.set(e, 0) : a.set(e, n - e.length), a;
      }
      r.d(t, { v: () => n });
    },
    94542: (e, t, r) => {
      'use strict';
      r.d(t, { x: () => a });
      var n = r(71555);
      function a(e) {
        return e.sort((e, t) => {
          let r = 0;
          for (;;) {
            if ((0, n.o)(e[r]) && (0, n.o)(t[r])) return 0;
            if ((0, n.o)(e[r])) return -1;
            if ((0, n.o)(t[r])) return 1;
            const a = e[r] - t[r];
            if (0 !== a) return a;
            r++;
          }
        });
      }
    },
    19699: (e, t, r) => {
      'use strict';
      r.d(t, { _: () => o });
      var n = r(40757),
        a = r(68631);
      function o(e, t = { isLe: !0, isNegative: !1 }) {
        return (0, n.m)((0, a.c)(e), t);
      }
    },
    84457: (e, t, r) => {
      'use strict';
      r.d(t, { Y: () => a });
      var n = r(48834).Buffer;
      function a(e) {
        return n.from(e || []);
      }
    },
    68631: (e, t, r) => {
      'use strict';
      r.d(t, { c: () => a });
      const n = new Array(256)
        .fill(0)
        .map((e, t) => t.toString(16).padStart(2, '0'));
      function a(e, t = -1, r = !0) {
        const o = r ? '0x' : '';
        if (null == e || !e.length) return o;
        const s = Math.ceil(t / 8);
        return (
          o +
          (s > 0 && e.length > s
            ? (function (e, t) {
                return `${a(e.subarray(0, t), -1, !1)}…${a(
                  e.subarray(e.length - t),
                  -1,
                  !1
                )}`;
              })(e, Math.ceil(s / 2))
            : (function (e) {
                const t = new Array(e.length);
                for (let r = 0; r < e.length; r++) t[r] = n[e[r]];
                return t.join('');
              })(e))
        );
      }
    },
    69835: (e, t, r) => {
      'use strict';
      r.d(t, { z: () => o });
      var n = r(64513);
      const a = new (void 0 === n.U.TextDecoder
        ? class {
            constructor(e) {}
            decode(e) {
              return e.reduce((e, t) => e + String.fromCharCode(t), '');
            }
          }
        : n.U.TextDecoder)('utf-8');
      function o(e) {
        return null != e && e.length ? a.decode(e) : '';
      }
    },
    90791: (e, t, r) => {
      'use strict';
      r.d(t, { Y: () => d });
      var n = r(85818),
        a = r(25754),
        o = r(94033),
        s = r(14842),
        i = r(33298),
        c = r(20987),
        u = r(8431);
      function d(e) {
        return e
          ? (0, i.H)(e)
            ? (0, s.v)(e)
              ? (0, a.G)(e)
              : (0, u.d)(e)
            : Array.isArray(e) || (0, o.z)(e)
            ? new Uint8Array(e)
            : ((0, n.h)(
                (0, c.U)(e),
                () =>
                  `Unable to convert ${e.toString()} (typeof ${typeof e}) to a Uint8Array`
              ),
              e)
          : new Uint8Array();
      }
    },
    228: (e, t, r) => {
      'use strict';
      r.d(t, { E: () => d });
      var n = r(64513),
        a = r(63029),
        o = r(33298),
        s = r(85818);
      const i =
        'Either remove and explicitly install matching versions or dedupe using your package manager.\nThe following conflicting packages were found:';
      function c(e) {
        return e.reduce((e, { version: t }) => Math.max(e, t.length), 0);
      }
      function u(e) {
        if ((0, a.m)(e))
          try {
            return e() || '';
          } catch (e) {
            return '';
          }
        return e || '';
      }
      function d({ name: e, version: t }, r, a = []) {
        (0, s.h)(
          e.startsWith('@polkadot'),
          () => `Invalid package descriptor ${e}`
        );
        const d = (function (e) {
          const t = n.U;
          return (
            t.__polkadotjs || (t.__polkadotjs = {}),
            t.__polkadotjs[e] || (t.__polkadotjs[e] = []),
            t.__polkadotjs[e]
          );
        })(e);
        if ((d.push({ path: u(r), version: t }), 1 !== d.length))
          console.warn(
            `${e} has multiple versions, ensure that there is only one installed.\n${i}\n${(function (
              e
            ) {
              const t = e.map((e) => ((0, o.H)(e) ? { version: e } : e)),
                r = c(t);
              return t
                .map(
                  ({ path: e, version: t }) =>
                    `\t${t.padEnd(r)}\t${!e || e.length < 5 ? '<unknown>' : e}`
                )
                .join('\n');
            })(d)}`
          );
        else {
          const r = a.filter((e) => e && e.version !== t);
          r.length &&
            console.warn(
              `${e} requires direct dependencies exactly matching version ${t}.\n${i}\n${(function (
                e
              ) {
                const t = c(e);
                return e
                  .map(({ name: e, version: r }) => `\t${r.padEnd(t)}\t${e}`)
                  .join('\n');
              })(r)}`
            );
        }
      }
    },
    64513: (e, t, r) => {
      'use strict';
      r.d(t, { U: () => n });
      const n =
        'undefined' != typeof globalThis
          ? globalThis
          : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : void 0;
    },
    80931: (e, t, r) => {
      'use strict';
      function n(e) {
        return crypto.getRandomValues(e);
      }
      r.d(t, { P: () => n });
    },
    61679: (e, t, r) => {
      const n = r(24496);
      (t.y$ = n.Observable),
        n.ConnectableObservable,
        n.GroupedObservable,
        n.observable,
        n.Subject,
        (t.Xe = n.BehaviorSubject),
        n.ReplaySubject,
        n.AsyncSubject,
        n.asap,
        (t.Ef = n.asapScheduler),
        n.async,
        n.asyncScheduler,
        n.queue,
        n.queueScheduler,
        n.animationFrame,
        n.animationFrameScheduler,
        n.VirtualTimeScheduler,
        n.VirtualAction,
        n.Scheduler,
        (t.w0 = n.Subscription),
        n.Subscriber,
        n.Notification,
        n.NotificationKind,
        n.pipe,
        n.noop,
        n.identity,
        n.isObservable,
        n.ArgumentOutOfRangeError,
        n.EmptyError,
        n.ObjectUnsubscribedError,
        n.UnsubscriptionError,
        n.TimeoutError,
        n.bindCallback,
        n.bindNodeCallback,
        (t.aj = n.combineLatest),
        n.concat,
        n.defer,
        n.empty,
        n.forkJoin,
        n.from,
        n.fromEvent,
        n.fromEventPattern,
        n.generate,
        n.iif,
        (t.FG = n.interval),
        n.merge,
        n.never,
        (t.of = n.of),
        n.onErrorResumeNext,
        n.pairs,
        n.partition,
        n.race,
        n.range,
        n.throwError,
        n.timer,
        n.using,
        n.zip,
        n.scheduled,
        (t.E_ = n.EMPTY),
        n.NEVER,
        n.config;
    },
    3191: (e, t, r) => {
      const n = r(56276);
      n.audit,
        n.auditTime,
        n.buffer,
        n.bufferCount,
        n.bufferTime,
        n.bufferToggle,
        n.bufferWhen,
        (t.KQ = n.catchError),
        n.combineAll,
        n.combineLatest,
        n.concat,
        n.concatAll,
        n.concatMap,
        n.concatMapTo,
        n.count,
        n.debounce,
        n.debounceTime,
        n.defaultIfEmpty,
        n.delay,
        n.delayWhen,
        n.dematerialize,
        n.distinct,
        (t.xb = n.distinctUntilChanged),
        n.distinctUntilKeyChanged,
        n.elementAt,
        n.endWith,
        n.every,
        n.exhaust,
        n.exhaustMap,
        n.expand,
        n.filter,
        n.finalize,
        n.find,
        n.findIndex,
        (t.Ps = n.first),
        n.groupBy,
        n.ignoreElements,
        n.isEmpty,
        n.last,
        (t.UI = n.map),
        (t.hZ = n.mapTo),
        n.materialize,
        n.max,
        n.merge,
        n.mergeAll,
        (t.zg = n.mergeMap),
        n.flatMap,
        n.mergeMapTo,
        n.mergeScan,
        n.min,
        n.multicast,
        n.observeOn,
        n.onErrorResumeNext,
        n.pairwise,
        n.partition,
        n.pluck,
        n.publish,
        n.publishBehavior,
        n.publishLast,
        (t._g = n.publishReplay),
        n.race,
        n.reduce,
        n.repeat,
        n.repeatWhen,
        n.retry,
        n.retryWhen,
        (t.Gz = n.refCount),
        n.sample,
        n.sampleTime,
        n.scan,
        n.sequenceEqual,
        n.share,
        n.shareReplay,
        n.single,
        n.skip,
        n.skipLast,
        n.skipUntil,
        n.skipWhile,
        (t.O4 = n.startWith),
        n.subscribeOn,
        n.switchAll,
        (t.wt = n.switchMap),
        n.switchMapTo,
        (t.qn = n.take),
        n.takeLast,
        n.takeUntil,
        n.takeWhile,
        (t.bw = n.tap),
        n.throttle,
        n.throttleTime,
        n.throwIfEmpty,
        n.timeInterval,
        n.timeout,
        n.timeoutWith,
        n.timestamp,
        (t.qo = n.toArray),
        n.window,
        n.windowCount,
        n.windowTime,
        n.windowToggle,
        n.windowWhen,
        n.withLatestFrom,
        n.zip,
        n.zipAll;
    },
    24648: (e, t, r) => {
      'use strict';
      r.d(t, { X: () => n });
      const n = r(64513).U.WebSocket;
    },
    44639: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            freeBalance: {
              description: 'Get free balance of particular asset for account.',
              params: [
                { name: 'accountId', type: 'AccountId' },
                { name: 'assetId', type: 'AssetId' }
              ],
              type: 'Option<BalanceInfo>'
            },
            usableBalance: {
              description:
                'Get usable (free and non-frozen, except for network fees) balance of particular asset for account.',
              params: [
                { name: 'accountId', type: 'AccountId' },
                { name: 'assetId', type: 'AssetId' }
              ],
              type: 'Option<BalanceInfo>'
            },
            totalBalance: {
              description:
                'Get total balance (free + reserved) of particular asset for account.',
              params: [
                { name: 'accountId', type: 'AccountId' },
                { name: 'assetId', type: 'AssetId' }
              ],
              type: 'Option<BalanceInfo>'
            },
            totalSupply: {
              description: 'Get total supply of particular asset on chain.',
              params: [{ name: 'assetId', type: 'AssetId' }],
              type: 'Option<BalanceInfo>'
            },
            listAssetIds: {
              description: 'List Ids of all assets registered on chain.',
              params: [],
              type: 'Vec<AssetId>'
            },
            listAssetInfos: {
              description: 'List Infos of all assets registered on chain.',
              params: [],
              type: 'Vec<AssetInfo>'
            },
            getAssetInfo: {
              description: 'Get Info for particular asset on chain.',
              params: [{ name: 'assetId', type: 'AssetId' }],
              type: 'Option<AssetInfo>'
            }
          },
          types: {
            BalanceInfo: { balance: 'Balance' },
            AssetInfo: {
              asset_id: 'AssetId',
              symbol: 'AssetSymbolStr',
              name: 'AssetNameStr',
              precision: 'u8',
              is_mintable: 'bool'
            },
            AssetSymbolStr: 'String',
            AssetNameStr: 'String',
            AssetRecord: 'Null'
          }
        });
    },
    74576: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            canExchange: {
              description:
                'Query capability to exchange particular tokens on DEX.',
              params: [
                { name: 'dexId', type: 'DEXId' },
                { name: 'liquiditySourceType', type: 'LiquiditySourceType' },
                { name: 'inputAssetId', type: 'AssetId' },
                { name: 'outputAssetId', type: 'AssetId' }
              ],
              type: 'bool'
            },
            listSupportedSources: {
              description: 'List liquidity source types enabled on chain.',
              params: [],
              type: 'Vec<LiquiditySourceType>'
            },
            quote: {
              description:
                'Get price for a given input or output token amount.',
              params: [
                { name: 'dexId', type: 'DEXId' },
                { name: 'liquiditySourceType', type: 'LiquiditySourceType' },
                { name: 'inputAssetId', type: 'AssetId' },
                { name: 'outputAssetId', type: 'AssetId' },
                { name: 'amount', type: 'String' },
                { name: 'swapVariant', type: 'SwapVariant' }
              ],
              type: 'Option<SwapOutcomeInfo>'
            }
          },
          types: {}
        });
    },
    60295: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            listDEXIds: {
              description: 'Enumerate available ids of DEXes',
              params: [],
              type: 'Vec<DEXId>'
            },
            testBalance: {
              description: 'Test type of Balance',
              params: [],
              type: 'Fixed'
            }
          },
          types: {}
        });
    },
    12984: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            getRequests: {
              description: 'Get registered requests and their statuses.',
              params: [
                { name: 'requestHashes', type: 'Vec<H256>' },
                { name: 'networkId', type: 'Option<BridgeNetworkId>' },
                { name: 'redirectFinishedLoadRequests', type: 'Option<bool>' }
              ],
              type:
                'Result<Vec<(OffchainRequest, RequestStatus)>, DispatchError>'
            },
            getApprovedRequests: {
              description: 'Get approved encoded requests and their approvals.',
              params: [
                { name: 'requestHashes', type: 'Vec<H256>' },
                { name: 'networkId', type: 'Option<BridgeNetworkId>' }
              ],
              type:
                'Result<Vec<(OutgoingRequestEncoded, Vec<SignatureParams>)>, DispatchError>'
            },
            getApprovals: {
              description: 'Get approvals of the given requests.',
              params: [
                { name: 'requestHashes', type: 'Vec<H256>' },
                { name: 'networkId', type: 'Option<BridgeNetworkId>' }
              ],
              type: 'Result<Vec<Vec<SignatureParams>>, DispatchError>'
            },
            getAccountRequests: {
              description: 'Get account requests hashes.',
              params: [
                { name: 'accountId', type: 'AccountId' },
                { name: 'statusFilter', type: 'Option<RequestStatus>' }
              ],
              type: 'Result<Vec<(BridgeNetworkId, H256)>, DispatchError>'
            },
            getRegisteredAssets: {
              description: 'Get registered assets and tokens.',
              params: [{ name: 'networkId', type: 'Option<BridgeNetworkId>' }],
              type:
                'Result<Vec<(AssetKind, (AssetId, BalancePrecision), Option<(H160, BalancePrecision)>)>, DispatchError>'
            }
          },
          types: {
            EthPeersSync: {
              is_bridge_ready: 'bool',
              is_xor_ready: 'bool',
              is_val_ready: 'bool'
            },
            BridgeStatus: { _enum: ['Initialized', 'Migrating'] },
            BridgeNetworkId: 'u32',
            AssetKind: { _enum: ['Thischain', 'Sidechain', 'SidechainOwned'] },
            RequestStatus: {
              _enum: ['Pending', 'Frozen', 'ApprovalsReady', 'Failed', 'Done']
            },
            SignatureParams: { r: '[u8; 32]', s: '[u8; 32]', v: 'u8' },
            IncomingTransactionRequestKind: {
              _enum: [
                'Transfer',
                'AddAsset',
                'AddPeer',
                'RemovePeer',
                'PrepareForMigration',
                'Migrate',
                'AddPeerCompat',
                'RemovePeerCompat',
                'TransferXOR'
              ]
            },
            IncomingMetaRequestKind: {
              _enum: ['CancelOutgoingRequest', 'MarkAsDone']
            },
            IncomingRequestKind: {
              _enum: {
                Transaction: 'IncomingTransactionRequestKind',
                Meta: 'IncomingMetaRequestKind'
              }
            },
            ChangePeersContract: { _enum: ['XOR', 'VAL'] },
            CurrencyIdEncoded: {
              _enum: { AssetId: 'H256', TokenAddress: 'H160' }
            },
            FixedBytes: 'Vec<u8>',
            OutgoingTransfer: {
              from: 'AccountId',
              to: 'EthereumAddress',
              asset_id: 'AssetId',
              amount: 'Balance',
              nonce: 'Index',
              network_id: 'BridgeNetworkId',
              timepoint: 'Timepoint'
            },
            OutgoingTransferEncoded: {
              currency_id: 'CurrencyIdEncoded',
              amount: 'U256',
              to: 'EthereumAddress',
              from: 'EthereumAddress',
              tx_hash: 'H256',
              network_id: 'H256',
              raw: 'Vec<u8>'
            },
            OutgoingAddAsset: {
              author: 'AccountId',
              asset_id: 'AssetId',
              supply: 'Balance',
              nonce: 'Index',
              network_id: 'BridgeNetworkId',
              timepoint: 'Timepoint'
            },
            OutgoingAddAssetEncoded: {
              name: 'String',
              symbol: 'String',
              decimal: 'u8',
              supply: 'U256',
              sidechain_asset_id: 'FixedBytes',
              hash: 'H256',
              network_id: 'H256',
              raw: 'Vec<u8>'
            },
            OutgoingAddToken: {
              author: 'AccountId',
              token_address: 'EthereumAddress',
              ticker: 'String',
              name: 'String',
              decimals: 'u8',
              nonce: 'Index',
              network_id: 'BridgeNetworkId',
              timepoint: 'Timepoint'
            },
            OutgoingAddTokenEncoded: {
              token_address: 'EthereumAddress',
              ticker: 'String',
              name: 'String',
              decimals: 'u8',
              hash: 'H256',
              network_id: 'H256',
              raw: 'Vec<u8>'
            },
            OutgoingAddPeer: {
              author: 'AccountId',
              peer_address: 'EthereumAddress',
              peer_account_id: 'AccountId',
              nonce: 'Index',
              network_id: 'BridgeNetworkId',
              timepoint: 'Timepoint'
            },
            OutgoingAddPeerCompat: {
              author: 'AccountId',
              peer_address: 'EthereumAddress',
              peer_account_id: 'AccountId',
              nonce: 'Index',
              network_id: 'BridgeNetworkId',
              timepoint: 'Timepoint'
            },
            OutgoingAddPeerEncoded: {
              peer_address: 'EthereumAddress',
              tx_hash: 'H256',
              network_id: 'H256',
              raw: 'Vec<u8>'
            },
            OutgoingRemovePeer: {
              author: 'AccountId',
              peer_account_id: 'AccountId',
              peer_address: 'EthereumAddress',
              nonce: 'Index',
              network_id: 'BridgeNetworkId',
              timepoint: 'Timepoint'
            },
            OutgoingRemovePeerCompat: {
              author: 'AccountId',
              peer_account_id: 'AccountId',
              peer_address: 'EthereumAddress',
              nonce: 'Index',
              network_id: 'BridgeNetworkId',
              timepoint: 'Timepoint'
            },
            OutgoingRemovePeerEncoded: {
              peer_address: 'EthereumAddress',
              tx_hash: 'H256',
              network_id: 'H256',
              raw: 'Vec<u8>'
            },
            OutgoingPrepareForMigration: {
              author: 'AccountId',
              nonce: 'Index',
              network_id: 'BridgeNetworkId',
              timepoint: 'Timepoint'
            },
            OutgoingPrepareForMigrationEncoded: {
              this_contract_address: 'EthereumAddress',
              tx_hash: 'H256',
              network_id: 'H256',
              raw: 'Vec<u8>'
            },
            OutgoingMigrate: {
              author: 'AccountId',
              new_contract_address: 'EthereumAddress',
              erc20_native_tokens: 'Vec<EthereumAddress>',
              nonce: 'Index',
              network_id: 'BridgeNetworkId',
              timepoint: 'Timepoint'
            },
            OutgoingMigrateEncoded: {
              this_contract_address: 'EthereumAddress',
              tx_hash: 'H256',
              new_contract_address: 'EthereumAddress',
              erc20_native_tokens: 'Vec<EthereumAddress>',
              network_id: 'H256',
              raw: 'Vec<u8>'
            },
            OutgoingRequest: {
              _enum: {
                Transfer: 'OutgoingTransfer',
                AddAsset: 'OutgoingAddAsset',
                AddToken: 'OutgoingAddToken',
                AddPeer: 'OutgoingAddPeer',
                RemovePeer: 'OutgoingRemovePeer',
                PrepareForMigration: 'OutgoingPrepareForMigration',
                Migrate: 'OutgoingMigrate'
              }
            },
            OutgoingRequestEncoded: {
              _enum: {
                Transfer: 'OutgoingTransferEncoded',
                AddAsset: 'OutgoingAddAssetEncoded',
                AddToken: 'OutgoingAddTokenEncoded',
                AddPeer: 'OutgoingAddPeerEncoded',
                RemovePeer: 'OutgoingRemovePeerEncoded',
                PrepareForMigration: 'OutgoingPrepareForMigrationEncoded',
                Migrate: 'OutgoingMigrateEncoded'
              }
            },
            IncomingTransfer: {
              from: 'EthereumAddress',
              to: 'AccountId',
              asset_id: 'AssetId',
              asset_kind: 'AssetKind',
              amount: 'Balance',
              author: 'AccountId',
              tx_hash: 'H256',
              at_height: 'u64',
              timepoint: 'Timepoint',
              network_id: 'BridgeNetworkId'
            },
            IncomingAddToken: {
              token_address: 'EthereumAddress',
              asset_id: 'AssetId',
              precision: 'BalancePrecision',
              symbol: 'AssetSymbol',
              name: 'AssetName',
              author: 'AccountId',
              tx_hash: 'H256',
              at_height: 'u64',
              timepoint: 'Timepoint',
              network_id: 'BridgeNetworkId'
            },
            IncomingChangePeers: {
              peer_account_id: 'AccountId',
              peer_address: 'EthereumAddress',
              added: 'bool',
              author: 'AccountId',
              tx_hash: 'H256',
              at_height: 'u64',
              timepoint: 'Timepoint',
              network_id: 'BridgeNetworkId'
            },
            IncomingChangePeersCompat: {
              peer_account_id: 'AccountId',
              peer_address: 'EthereumAddress',
              added: 'bool',
              contract: 'ChangePeersContract',
              author: 'AccountId',
              tx_hash: 'H256',
              at_height: 'u64',
              timepoint: 'Timepoint',
              network_id: 'BridgeNetworkId'
            },
            IncomingCancelOutgoingRequest: {
              outgoing_request: 'OutgoingRequest',
              outgoing_request_hash: 'H256',
              initial_request_hash: 'H256',
              tx_input: 'Vec<u8>',
              author: 'AccountId',
              tx_hash: 'H256',
              at_height: 'u64',
              timepoint: 'Timepoint',
              network_id: 'BridgeNetworkId'
            },
            IncomingMarkAsDoneRequest: {
              outgoing_request_hash: 'H256',
              initial_request_hash: 'H256',
              author: 'AccountId',
              at_height: 'u64',
              timepoint: 'Timepoint',
              network_id: 'BridgeNetworkId'
            },
            IncomingPrepareForMigration: {
              author: 'AccountId',
              tx_hash: 'H256',
              at_height: 'u64',
              timepoint: 'Timepoint',
              network_id: 'BridgeNetworkId'
            },
            IncomingMigrate: {
              new_contract_address: 'EthereumAddress',
              author: 'AccountId',
              tx_hash: 'H256',
              at_height: 'u64',
              timepoint: 'Timepoint',
              network_id: 'BridgeNetworkId'
            },
            IncomingRequest: {
              _enum: {
                Transfer: 'IncomingTransfer',
                AddToken: 'IncomingAddToken',
                ChangePeers: 'IncomingChangePeers',
                CancelOutgoingRequest: 'IncomingCancelOutgoingRequest',
                MarkAsDone: 'IncomingMarkAsDoneRequest',
                PrepareForMigration: 'IncomingPrepareForMigration',
                Migrate: 'IncomingMigrate'
              }
            },
            LoadIncomingTransactionRequest: {
              author: 'AccountId',
              hash: 'H256',
              timepoint: 'Timepoint',
              kind: 'IncomingTransactionRequestKind',
              network_id: 'BridgeNetworkId'
            },
            LoadIncomingMetaRequest: {
              author: 'AccountId',
              hash: 'H256',
              timepoint: 'Timepoint',
              kind: 'IncomingMetaRequestKind',
              network_id: 'BridgeNetworkId'
            },
            LoadIncomingRequest: {
              _enum: {
                Transaction: 'LoadIncomingTransactionRequest',
                Meta: '(LoadIncomingMetaRequest, H256)'
              }
            },
            OffchainRequest: {
              _enum: {
                Outgoing: '(OutgoingRequest, H256)',
                LoadIncoming: 'LoadIncomingRequest',
                Incoming: '(IncomingRequest, H256)'
              }
            }
          }
        });
    },
    36581: (e, t, r) => {
      'use strict';
      var n = r(14859);
      t.$P = void 0;
      var a = n(r(81260)),
        o = r(48183),
        s = r(56563),
        i = n(r(92415)),
        c = n(r(74576)),
        u = n(r(60295)),
        d = n(r(19610)),
        l = n(r(45106)),
        p = n(r(44639)),
        f = n(r(99392)),
        h = n(r(12984)),
        m = n(r(90482)),
        y = n(r(93890));
      function b(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      const v = {
          runtime: i.default,
          dexApi: c.default,
          dexManager: u.default,
          tradingPair: d.default,
          template: l.default,
          assets: p.default,
          liquidityProxy: f.default,
          ethBridge: h.default,
          pswapDistribution: m.default,
          rewards: y.default
        },
        w = {
          Address: 'AccountId',
          LookupSource: 'AccountId',
          AssetId: 'AssetId32',
          Keys: 'SessionKeys3',
          RefCount: 'u32',
          Balance: 'u128',
          TAssetBalance: 'Balance',
          MultiCurrencyBalance: 'Balance',
          MultiCurrencyBalanceOf: 'MultiCurrencyBalance'
        },
        O = g(g(g({}, o.types), (0, s.typesFromDefs)(v)), w);
      g(g({}, (0, s.typesFromDefs)(v)), w);
      const A = (0, s.jsonrpcFromDefs)(v, g({}, o.rpc)),
        k = {
          spec: {
            sora: {
              alias: (0, s.typesAliasFromDefs)(v, g({}, o.typesAlias)),
              rpc: A,
              types: [{ minmax: [0, 99], types: O }]
            }
          }
        };
      t.$P = k;
    },
    99392: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            quote: {
              description:
                'Get price with indicated Asset amount and direction, filtered by selected_types',
              params: [
                { name: 'dexId', type: 'DEXId' },
                { name: 'inputAssetId', type: 'AssetId' },
                { name: 'outputAssetId', type: 'AssetId' },
                { name: 'amount', type: 'String' },
                { name: 'swapVariant', type: 'SwapVariant' },
                {
                  name: 'selectedSourceTypes',
                  type: 'Vec<LiquiditySourceType>'
                },
                { name: 'filterMode', type: 'FilterMode' }
              ],
              type: 'Option<LPSwapOutcomeInfo>'
            },
            isPathAvailable: {
              description:
                'Check if given two arbitrary tokens can be exchanged via any liquidity sources',
              params: [
                { name: 'dexId', type: 'DEXId' },
                { name: 'inputAssetId', type: 'AssetId' },
                { name: 'outputAssetId', type: 'AssetId' }
              ],
              type: 'bool'
            },
            listEnabledSourcesForPath: {
              description:
                'Given two arbitrary tokens, list liquidity sources that can be used along the path.',
              params: [
                { name: 'dexId', type: 'DEXId' },
                { name: 'inputAssetId', type: 'AssetId' },
                { name: 'outputAssetId', type: 'AssetId' }
              ],
              type: 'Vec<LiquiditySourceType>'
            }
          },
          types: {
            LPSwapOutcomeInfo: {
              amount: 'Balance',
              fee: 'Balance',
              rewards: 'Vec<LPRewardsInfo>',
              amount_without_impact: 'Balance'
            },
            LPRewardsInfo: {
              amount: 'Balance',
              currency: 'AssetId',
              reason: 'RewardReason'
            }
          }
        });
    },
    90482: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            claimableAmount: {
              description:
                'Get amount of PSWAP claimable by user (liquidity provision reward).',
              params: [{ name: 'accountId', type: 'AccountId' }],
              type: 'BalanceInfo'
            }
          },
          types: {}
        });
    },
    93890: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            claimables: {
              description: 'Get claimable rewards',
              params: [{ name: 'eth_address', type: 'EthereumAddress' }],
              type: 'Vec<BalanceInfo>'
            }
          },
          types: {}
        });
    },
    92415: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {},
          types: {
            AssetIdOf: 'AssetId',
            Amount: 'i128',
            AmountOf: 'Amount',
            CurrencyId: 'AssetId',
            CurrencyIdOf: 'AssetId',
            BasisPoints: 'u16',
            Fixed: 'FixedU128',
            FarmId: 'u64',
            DEXId: 'u32',
            DEXIdOf: 'DEXId',
            DEXInfo: {
              base_asset_id: 'AssetId',
              default_fee: 'BasisPoints',
              default_protocol_fee: 'BasisPoints'
            },
            BalancePrecision: 'u8',
            AssetSymbol: 'Vec<u8>',
            AssetName: 'Vec<u8>',
            AssetId32: '[u8; 32]',
            SwapWithDesiredInput: {
              desired_amount_in: 'Balance',
              min_amount_out: 'Balance'
            },
            SwapWithDesiredOutput: {
              desired_amount_out: 'Balance',
              max_amount_in: 'Balance'
            },
            SwapAmount: {
              _enum: {
                WithDesiredInput: 'SwapWithDesiredInput',
                WithDesiredOutput: 'SwapWithDesiredOutput'
              }
            },
            QuoteWithDesiredInput: { desired_amount_in: 'Balance' },
            QuoteWithDesiredOutput: { desired_amount_out: 'Balance' },
            QuoteAmount: {
              _enum: {
                WithDesiredInput: 'QuoteWithDesiredInput',
                WithDesiredOutput: 'QuoteWithDesiredOutput'
              }
            },
            SwapVariant: { _enum: ['WithDesiredInput', 'WithDesiredOutput'] },
            TechAmount: 'Amount',
            TechBalance: 'Balance',
            SwapOutcome: { amount: 'Balance', fee: 'Balance' },
            LiquiditySourceType: {
              _enum: [
                'XYKPool',
                'BondingCurvePool',
                'MulticollateralBondingCurvePool',
                'MockPool',
                'MockPool2',
                'MockPool3',
                'MockPool4'
              ]
            },
            FilterMode: {
              _enum: ['Disabled', 'ForbidSelected', 'AllowSelected']
            },
            SwapOutcomeInfo: { amount: 'Balance', fee: 'Balance' },
            TradingPair: {
              base_asset_id: 'AssetId',
              target_asset_id: 'AssetId'
            },
            PermissionId: 'u32',
            HolderId: 'AccountId',
            OwnerId: 'AccountId',
            Mode: { _enum: ['Permit', 'Forbid'] },
            Scope: { _enum: { Limited: 'H512', Unlimited: 'Null' } },
            TechPurpose: {
              _enum: {
                FeeCollector: 'Null',
                LiquidityKeeper: 'TradingPair',
                Identifier: 'Vec<u8>'
              }
            },
            TechAccountId: {
              _enum: {
                Pure: '(DEXId, TechPurpose)',
                Generic: '(Vec<u8>, Vec<u8>)',
                Wrapped: 'AccountId',
                WrappedRepr: 'AccountId'
              }
            },
            OracleKey: 'AssetId',
            ChargeFeeInfo: {
              tip: 'Compact<Balance>',
              target_asset_id: 'AssetId'
            },
            TechAssetId: 'Null',
            TechAccountIdPrimitive: 'Null',
            SwapAction: 'Null',
            ValidationFunction: 'Null',
            Permission: 'Null',
            DistributionAccounts: 'Null',
            MultisigAccount: 'Null',
            PendingMultisigAccount: 'Null',
            Farmer: 'Null',
            Farm: 'Null',
            SmoothPriceState: 'Null',
            MultiCurrencyBalanceOf: 'Null',
            Duration: 'Null',
            PostDispatchInfo: {
              actual_weight: 'Option<Weight>',
              pays_fee: 'Pays'
            },
            DispatchErrorWithPostInfoTPostDispatchInfo: {
              post_info: 'PostDispatchInfo',
              error: 'DispatchError'
            },
            DispatchResultWithPostInfo:
              'Result<PostDispatchInfo, DispatchErrorWithPostInfoTPostDispatchInfo>',
            Public: '[u8; 33]',
            RewardReason: { _enum: ['Unspecified', 'BuyOnBondingCurve'] }
          }
        });
    },
    45106: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            testMultiply2: {
              description: 'Test type of Balance',
              params: [{ name: 'amount', type: 'String' }],
              type: 'Option<CustomInfo>'
            }
          },
          types: { CustomInfo: { amount: 'Balance' } }
        });
    },
    19610: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = {
          rpc: {
            listEnabledPairs: {
              description: 'List enabled trading pairs for DEX.',
              params: [{ name: 'dexId', type: 'DEXId' }],
              type: 'Vec<TradingPair>'
            },
            isPairEnabled: {
              description:
                'Query if particular trading pair is enabled for DEX.',
              params: [
                { name: 'dexId', type: 'DEXId' },
                { name: 'inputAssetId', type: 'AssetId' },
                { name: 'outputAssetId', type: 'AssetId' }
              ],
              type: 'bool'
            },
            listEnabledSourcesForPair: {
              description: 'List enabled liquidity sources for trading pair.',
              params: [
                { name: 'dexId', type: 'DEXId' },
                { name: 'baseAssetId', type: 'AssetId' },
                { name: 'targetAssetId', type: 'AssetId' }
              ],
              type: 'Vec<LiquiditySourceType>'
            },
            isSourceEnabledForPair: {
              description:
                'Query if particular liquidity source is enabled for pair.',
              params: [
                { name: 'dexId', type: 'DEXId' },
                { name: 'baseAssetId', type: 'AssetId' },
                { name: 'targetAssetId', type: 'AssetId' },
                { name: 'liquiditySourceType', type: 'LiquiditySourceType' }
              ],
              type: 'bool'
            }
          },
          types: { TP: 'TradingPair' }
        });
    },
    89374: function (e, t, r) {
      'use strict';
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.subsocial = void 0);
      var a = r(32719);
      Object.defineProperty(t, 'subsocial', {
        enumerable: !0,
        get: function () {
          return n(a).default;
        }
      });
    },
    32719: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          types: {
            IpfsCid: 'Text',
            DonationId: 'u64',
            DonationRecipient: {
              _enum: { Account: 'AccountId', Space: 'SpaceId', Post: 'PostId' }
            },
            Donation: {
              id: 'DonationId',
              created: 'WhoAndWhen',
              recipient: 'DonationRecipient',
              donation_wallet: 'AccountId',
              amount: 'Balance',
              comment_id: 'Option<PostId>'
            },
            DonationSettings: {
              donations_allowed: 'bool',
              min_amount: 'Option<Balance>',
              max_amount: 'Option<Balance>'
            },
            DonationSettingsUpdate: {
              donations_allowed: 'Option<bool>',
              min_amount: 'Option<Option<Balance>>',
              max_amount: 'Option<Option<Balance>>'
            },
            DropId: 'u64',
            Drop: {
              id: 'DropId',
              first_drop_at: 'BlockNumber',
              total_dropped: 'Balance'
            },
            FaucetSettings: {
              period: 'Option<BlockNumber>',
              period_limit: 'Balance'
            },
            FaucetSettingsUpdate: {
              period: 'Option<Option<BlockNumber>>',
              period_limit: 'Option<Balance>'
            },
            ReportId: 'u64',
            EntityId: {
              _enum: {
                Content: 'Content',
                Account: 'AccountId',
                Space: 'SpaceId',
                Post: 'PostId'
              }
            },
            EntityStatus: { _enum: ['Allowed', 'Blocked'] },
            Report: {
              id: 'ReportId',
              created: 'WhoAndWhen',
              reported_entity: 'EntityId',
              reported_within: 'SpaceId',
              reason: 'Content'
            },
            SuggestedStatus: {
              suggested: 'WhoAndWhen',
              status: 'Option<EntityStatus>',
              report_id: 'Option<ReportId>'
            },
            SpaceModerationSettings: { autoblock_threshold: 'Option<u16>' },
            SpaceModerationSettingsUpdate: {
              autoblock_threshold: 'Option<Option<u16>>'
            },
            SpacePermissionSet: 'BTreeSet<SpacePermission>',
            SpacePermission: {
              _enum: [
                'ManageRoles',
                'RepresentSpaceInternally',
                'RepresentSpaceExternally',
                'UpdateSpace',
                'CreateSubspaces',
                'UpdateOwnSubspaces',
                'DeleteOwnSubspaces',
                'HideOwnSubspaces',
                'UpdateAnySubspace',
                'DeleteAnySubspace',
                'HideAnySubspace',
                'CreatePosts',
                'UpdateOwnPosts',
                'DeleteOwnPosts',
                'HideOwnPosts',
                'UpdateAnyPost',
                'DeleteAnyPost',
                'HideAnyPost',
                'CreateComments',
                'UpdateOwnComments',
                'DeleteOwnComments',
                'HideOwnComments',
                'HideAnyComment',
                'Upvote',
                'Downvote',
                'Share',
                'OverrideSubspacePermissions',
                'OverridePostPermissions',
                'SuggestEntityStatus',
                'UpdateEntityStatus',
                'UpdateSpaceSettings'
              ]
            },
            SpacePermissions: {
              none: 'Option<SpacePermissionSet>',
              everyone: 'Option<SpacePermissionSet>',
              follower: 'Option<SpacePermissionSet>',
              space_owner: 'Option<SpacePermissionSet>'
            },
            SpacePermissionsContext: {
              space_id: 'SpaceId',
              is_space_owner: 'bool',
              is_space_follower: 'bool',
              space_perms: 'Option<SpacePermissions>'
            },
            PostHistoryRecord: { edited: 'WhoAndWhen', old_data: 'PostUpdate' },
            PostId: 'u64',
            Post: {
              id: 'PostId',
              created: 'WhoAndWhen',
              updated: 'Option<WhoAndWhen>',
              owner: 'AccountId',
              extension: 'PostExtension',
              space_id: 'Option<SpaceId>',
              content: 'Content',
              hidden: 'bool',
              replies_count: 'u16',
              hidden_replies_count: 'u16',
              shares_count: 'u16',
              upvotes_count: 'u16',
              downvotes_count: 'u16',
              score: 'i32'
            },
            PostUpdate: {
              space_id: 'Option<SpaceId>',
              content: 'Option<Content>',
              hidden: 'Option<bool>'
            },
            PostExtension: {
              _enum: {
                RegularPost: 'Null',
                Comment: 'Comment',
                SharedPost: 'PostId'
              }
            },
            Comment: { parent_id: 'Option<PostId>', root_post_id: 'PostId' },
            ProfileHistoryRecord: {
              edited: 'WhoAndWhen',
              old_data: 'ProfileUpdate'
            },
            SocialAccount: {
              followers_count: 'u32',
              following_accounts_count: 'u16',
              following_spaces_count: 'u16',
              reputation: 'u32',
              profile: 'Option<Profile>'
            },
            Profile: {
              created: 'WhoAndWhen',
              updated: 'Option<WhoAndWhen>',
              content: 'Content'
            },
            ProfileUpdate: { content: 'Option<Content>' },
            ReactionId: 'u64',
            ReactionKind: { _enum: ['Upvote', 'Downvote'] },
            Reaction: {
              id: 'ReactionId',
              created: 'WhoAndWhen',
              updated: 'Option<WhoAndWhen>',
              kind: 'ReactionKind'
            },
            RoleId: 'u64',
            Role: {
              created: 'WhoAndWhen',
              updated: 'Option<WhoAndWhen>',
              id: 'RoleId',
              space_id: 'SpaceId',
              disabled: 'bool',
              expires_at: 'Option<BlockNumber>',
              content: 'Content',
              permissions: 'SpacePermissionSet'
            },
            RoleUpdate: {
              disabled: 'Option<bool>',
              content: 'Option<Content>',
              permissions: 'Option<SpacePermissionSet>'
            },
            ScoringAction: {
              _enum: [
                'UpvotePost',
                'DownvotePost',
                'SharePost',
                'CreateComment',
                'UpvoteComment',
                'DownvoteComment',
                'ShareComment',
                'FollowSpace',
                'FollowAccount'
              ]
            },
            SessionKey: {
              created: 'WhoAndWhen',
              updated: 'Option<WhoAndWhen>',
              expires_at: 'BlockNumber',
              limit: 'Option<Balance>',
              spent: 'Balance'
            },
            SpaceHistoryRecord: {
              edited: 'WhoAndWhen',
              old_data: 'SpaceUpdate'
            },
            Space: {
              id: 'SpaceId',
              created: 'WhoAndWhen',
              updated: 'Option<WhoAndWhen>',
              owner: 'AccountId',
              parent_id: 'Option<SpaceId>',
              handle: 'Option<Text>',
              content: 'Content',
              hidden: 'bool',
              posts_count: 'u32',
              hidden_posts_count: 'u32',
              followers_count: 'u32',
              score: 'i32',
              permissions: 'Option<SpacePermissions>'
            },
            SpaceUpdate: {
              parent_id: 'Option<Option<SpaceId>>',
              handle: 'Option<Option<Text>>',
              content: 'Option<Content>',
              hidden: 'Option<bool>',
              permissions: 'Option<Option<SpacePermissions>>'
            },
            SubscriptionPlanId: 'u64',
            SubscriptionId: 'u64',
            SubscriptionPeriod: {
              _enum: {
                Daily: 'Null',
                Weekly: 'Null',
                Monthly: 'Null',
                Quarterly: 'Null',
                Yearly: 'Null',
                Custom: 'BlockNumber'
              }
            },
            SubscriptionPlan: {
              id: 'SubscriptionPlanId',
              created: 'WhoAndWhen',
              updated: 'Option<WhoAndWhen>',
              is_active: 'bool',
              content: 'Content',
              space_id: 'SpaceId',
              wallet: 'Option<AccountId>',
              price: 'Balance',
              period: 'SubscriptionPeriod'
            },
            Subscription: {
              id: 'SubscriptionPlanId',
              created: 'WhoAndWhen',
              updated: 'Option<WhoAndWhen>',
              is_active: 'bool',
              wallet: 'Option<AccountId>',
              plan_id: 'SubscriptionPlanId'
            },
            SpaceId: 'u64',
            WhoAndWhen: {
              account: 'AccountId',
              block: 'BlockNumber',
              time: 'Moment'
            },
            User: { _enum: { Account: 'AccountId', Space: 'SpaceId' } },
            Content: {
              _enum: { None: 'Null', Raw: 'Text', IPFS: 'Text', Hyper: 'Text' }
            },
            Faucet: {
              enabled: 'bool',
              period: 'BlockNumber',
              period_limit: 'Balance',
              drip_limit: 'Balance',
              next_period_at: 'BlockNumber',
              dripped_in_current_period: 'Balance'
            },
            FaucetUpdate: {
              enabled: 'Option<bool>',
              period: 'Option<BlockNumber>',
              period_limit: 'Option<Balance>',
              drip_limit: 'Option<Balance>'
            },
            ChangeId: 'u64',
            SpaceOwners: {
              created: 'WhoAndWhen',
              space_id: 'SpaceId',
              owners: 'Vec<AccountId>',
              threshold: 'u16',
              changes_count: 'u16'
            },
            Change: {
              created: 'WhoAndWhen',
              id: 'ChangeId',
              space_id: 'SpaceId',
              add_owners: 'Vec<AccountId>',
              remove_owners: 'Vec<AccountId>',
              new_threshold: 'Option<u16>',
              notes: 'Text',
              confirmed_by: 'Vec<AccountId>',
              expires_at: 'BlockNumber'
            }
          }
        });
    },
    88868: (e, t, r) => {
      'use strict';
      var n = r(14859),
        a = n(r(77162)),
        o = n(r(52954)),
        s = n(r(58921)),
        i = { GET_VERSION: 0 },
        c = {
          1: 'U2F: Unknown',
          2: 'U2F: Bad request',
          3: 'U2F: Configuration unsupported',
          4: 'U2F: Device Ineligible',
          5: 'U2F: Timeout',
          14: 'Timeout',
          36864: 'No errors',
          36865: 'Device is busy',
          26626: 'Error deriving keys',
          25600: 'Execution Error',
          26368: 'Wrong Length',
          27010: 'Empty Buffer',
          27011: 'Output buffer too small',
          27012: 'Data is invalid',
          27013: 'Conditions not satisfied',
          27014: 'Transaction rejected',
          27264: 'Bad key handle',
          27392: 'Invalid P1/P2',
          27904: 'Instruction not supported',
          28160: 'App does not seem to be open',
          28416: 'Unknown error',
          28417: 'Sign/verify error'
        };
      function u(e) {
        return e in c ? c[e] : 'Unknown Status Code: '.concat(e);
      }
      function d(e) {
        if (e) {
          if (
            ((t = e),
            !(
              'object' !== (0, s.default)(t) ||
              null === t ||
              t instanceof Array ||
              t instanceof Date
            ))
          ) {
            if (Object.prototype.hasOwnProperty.call(e, 'statusCode'))
              return {
                return_code: e.statusCode,
                error_message: u(e.statusCode)
              };
            if (
              Object.prototype.hasOwnProperty.call(e, 'return_code') &&
              Object.prototype.hasOwnProperty.call(e, 'error_message')
            )
              return e;
          }
          return { return_code: 65535, error_message: e.toString() };
        }
        var t;
        return { return_code: 65535, error_message: e.toString() };
      }
      function l() {
        return (l = (0, o.default)(
          a.default.mark(function e(t, r) {
            return a.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      t.send(r, i.GET_VERSION, 0, 0).then(function (e) {
                        var t = e.slice(-2),
                          r = 256 * t[0] + t[1];
                        if (14 !== e.length)
                          return {
                            return_code: 27012,
                            error_message: u(27012)
                          };
                        var n = 256 * e[1] + e[2],
                          a = 256 * e[3] + e[4],
                          o = 256 * e[5] + e[6],
                          s = 1 === e[7],
                          i =
                            (e[8] << 24) +
                            (e[9] << 16) +
                            (e[10] << 8) +
                            (e[11] << 0);
                        return {
                          return_code: r,
                          error_message: u(r),
                          test_mode: 0 !== e[0],
                          major: n,
                          minor: a,
                          patch: o,
                          deviceLocked: s,
                          target_id: i.toString(16)
                        };
                      }, d)
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      e.exports = {
        CHUNK_SIZE: 250,
        INS: i,
        PAYLOAD_TYPE: { INIT: 0, ADD: 1, LAST: 2 },
        P1_VALUES: { ONLY_RETRIEVE: 0, SHOW_ADDRESS_IN_DEVICE: 1 },
        SCHEME: { ED25519: 0, SR25519: 1 },
        ERROR_CODE: { NoError: 36864 },
        getVersion: function (e, t) {
          return l.apply(this, arguments);
        },
        processErrorResponse: d,
        errorCodeToString: u
      };
    },
    98453: (e) => {
      'use strict';
      e.exports = {
        CLA: {
          KUSAMA: 153,
          POLKADOT: 144,
          POLYMESH: 145,
          DOCK: 146,
          CENTRIFUGE: 147,
          EDGEWARE: 148
        },
        SLIP0044: {
          KUSAMA: 2147484082,
          POLKADOT: 2147484002,
          EDGEWARE: 2147484171,
          POLYMESH: 2147484243,
          DOCK: 2147484242,
          CENTRIFUGE: 2147484395
        },
        SS58_ADDR_TYPE: {
          POLKADOT: 0,
          KUSAMA: 2,
          EDGEWARE: 7,
          POLYMESH: 12,
          DOCK: 22,
          CENTRIFUGE: 36
        }
      };
    },
    3256: (e, t, r) => {
      'use strict';
      var n = r(48834).Buffer,
        a = r(14859),
        o = a(r(77162)),
        s = a(r(75182)),
        i = a(r(52954)),
        c = a(r(50085)),
        u = a(r(15198)),
        d = r(88868),
        l = r(98453),
        p = r(36832),
        f = r(34485),
        h = r(55889),
        m = r(17022),
        y = r(81395),
        b = (function () {
          function e(t, r, n) {
            if (((0, c.default)(this, e), !t))
              throw new Error('Transport has not been defined');
            (this.transport = t), (this.cla = r), (this.slip0044 = n);
          }
          var t, r, a, l, p, f, h, m, y, b;
          return (
            (0, u.default)(
              e,
              [
                {
                  key: 'getVersion',
                  value:
                    ((b = (0, i.default)(
                      o.default.mark(function e() {
                        return o.default.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    (0, d.getVersion)(this.transport, this.cla)
                                  );
                                case 3:
                                  return e.abrupt('return', e.sent);
                                case 6:
                                  return (
                                    (e.prev = 6),
                                    (e.t0 = e.catch(0)),
                                    e.abrupt(
                                      'return',
                                      (0, d.processErrorResponse)(e.t0)
                                    )
                                  );
                                case 9:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 6]]
                        );
                      })
                    )),
                    function () {
                      return b.apply(this, arguments);
                    })
                },
                {
                  key: 'appInfo',
                  value:
                    ((y = (0, i.default)(
                      o.default.mark(function e() {
                        return o.default.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    'return',
                                    this.transport
                                      .send(176, 1, 0, 0)
                                      .then(function (e) {
                                        var t = e.slice(-2),
                                          r = 256 * t[0] + t[1],
                                          n = {},
                                          a = 'err',
                                          o = 'err',
                                          s = 0,
                                          i = 0;
                                        if (1 !== e[0])
                                          (n.error_message =
                                            'response format ID not recognized'),
                                            (n.return_code = 36865);
                                        else {
                                          var c = e[1];
                                          a = e
                                            .slice(2, 2 + c)
                                            .toString('ascii');
                                          var u = 2 + c,
                                            l = e[u];
                                          (u += 1),
                                            (o = e
                                              .slice(u, u + l)
                                              .toString('ascii')),
                                            (s = e[(u += l)]),
                                            (i = e[(u += 1)]);
                                        }
                                        return {
                                          return_code: r,
                                          error_message: (0,
                                          d.errorCodeToString)(r),
                                          appName: a,
                                          appVersion: o,
                                          flagLen: s,
                                          flagsValue: i,
                                          flag_recovery: 0 != (1 & i),
                                          flag_signed_mcu_code: 0 != (2 & i),
                                          flag_onboarded: 0 != (4 & i),
                                          flag_pin_validated: 0 != (128 & i)
                                        };
                                      }, d.processErrorResponse)
                                  );
                                case 1:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return y.apply(this, arguments);
                    })
                },
                {
                  key: 'getAddress',
                  value:
                    ((m = (0, i.default)(
                      o.default.mark(function t(r, n, a) {
                        var s,
                          i,
                          c,
                          u,
                          l,
                          p = arguments;
                        return o.default.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (s =
                                      p.length > 3 && void 0 !== p[3] && p[3]),
                                    (i =
                                      p.length > 4 && void 0 !== p[4]
                                        ? p[4]
                                        : d.SCHEME.ED25519),
                                    (c = e.serializePath(
                                      this.slip0044,
                                      r,
                                      n,
                                      a
                                    )),
                                    (u = 0),
                                    s && (u = 1),
                                    (l = 0),
                                    isNaN(i) || (l = i),
                                    t.abrupt(
                                      'return',
                                      this.transport
                                        .send(this.cla, 1, u, l, c)
                                        .then(function (e) {
                                          var t = e.slice(-2),
                                            r = 256 * t[0] + t[1];
                                          return {
                                            pubKey: e
                                              .slice(0, 32)
                                              .toString('hex'),
                                            address: e
                                              .slice(32, e.length - 2)
                                              .toString('ascii'),
                                            return_code: r,
                                            error_message: (0,
                                            d.errorCodeToString)(r)
                                          };
                                        }, d.processErrorResponse)
                                    )
                                  );
                                case 8:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    )),
                    function (e, t, r) {
                      return m.apply(this, arguments);
                    })
                },
                {
                  key: 'signSendChunk',
                  value:
                    ((h = (0, i.default)(
                      o.default.mark(function e(t, r, n) {
                        var a,
                          s,
                          i,
                          c = arguments;
                        return o.default.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (a =
                                      c.length > 3 && void 0 !== c[3]
                                        ? c[3]
                                        : d.SCHEME.ED25519),
                                    (s = d.PAYLOAD_TYPE.ADD),
                                    1 === t && (s = d.PAYLOAD_TYPE.INIT),
                                    t === r && (s = d.PAYLOAD_TYPE.LAST),
                                    (i = 0),
                                    isNaN(a) || (i = a),
                                    e.abrupt(
                                      'return',
                                      this.transport
                                        .send(this.cla, 2, s, i, n, [
                                          d.ERROR_CODE.NoError,
                                          27012,
                                          27264
                                        ])
                                        .then(function (e) {
                                          var t = e.slice(-2),
                                            r = 256 * t[0] + t[1],
                                            n = (0, d.errorCodeToString)(r),
                                            a = null;
                                          return (
                                            27264 === r || 27012 === r
                                              ? (n = e
                                                  .slice(0, e.length - 2)
                                                  .toString('ascii'))
                                              : e.length > 2 &&
                                                (a = e.slice(0, e.length - 2)),
                                            {
                                              signature: a,
                                              return_code: r,
                                              error_message: n
                                            }
                                          );
                                        }, d.processErrorResponse)
                                    )
                                  );
                                case 7:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e, t, r) {
                      return h.apply(this, arguments);
                    })
                },
                {
                  key: 'sign',
                  value:
                    ((f = (0, i.default)(
                      o.default.mark(function t(r, n, a, s) {
                        var c,
                          u,
                          l = this,
                          p = arguments;
                        return o.default.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (c =
                                      p.length > 4 && void 0 !== p[4]
                                        ? p[4]
                                        : d.SCHEME.ED25519),
                                    (u = e.signGetChunks(
                                      this.slip0044,
                                      r,
                                      n,
                                      a,
                                      s
                                    )),
                                    t.abrupt(
                                      'return',
                                      this.signSendChunk(
                                        1,
                                        u.length,
                                        u[0],
                                        c
                                      ).then(
                                        (function () {
                                          var e = (0, i.default)(
                                            o.default.mark(function e(t) {
                                              var r;
                                              return o.default.wrap(function (
                                                e
                                              ) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      r = 1;
                                                    case 1:
                                                      if (!(r < u.length)) {
                                                        e.next = 10;
                                                        break;
                                                      }
                                                      return (
                                                        (e.next = 4),
                                                        l.signSendChunk(
                                                          1 + r,
                                                          u.length,
                                                          u[r],
                                                          c
                                                        )
                                                      );
                                                    case 4:
                                                      if (
                                                        (t = e.sent)
                                                          .return_code ===
                                                        d.ERROR_CODE.NoError
                                                      ) {
                                                        e.next = 7;
                                                        break;
                                                      }
                                                      return e.abrupt(
                                                        'break',
                                                        10
                                                      );
                                                    case 7:
                                                      (r += 1), (e.next = 1);
                                                      break;
                                                    case 10:
                                                      return e.abrupt(
                                                        'return',
                                                        {
                                                          return_code:
                                                            t.return_code,
                                                          error_message:
                                                            t.error_message,
                                                          signature: t.signature
                                                        }
                                                      );
                                                    case 11:
                                                    case 'end':
                                                      return e.stop();
                                                  }
                                              },
                                              e);
                                            })
                                          );
                                          return function (t) {
                                            return e.apply(this, arguments);
                                          };
                                        })(),
                                        d.processErrorResponse
                                      )
                                    )
                                  );
                                case 3:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    )),
                    function (e, t, r, n) {
                      return f.apply(this, arguments);
                    })
                },
                {
                  key: 'getAllowlistPubKey',
                  value:
                    ((p = (0, i.default)(
                      o.default.mark(function e() {
                        return o.default.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    'return',
                                    this.transport
                                      .send(this.cla, 144, 0, 0)
                                      .then(function (e) {
                                        var t = e.slice(-2),
                                          r = 256 * t[0] + t[1];
                                        console.log(e);
                                        var n = e.slice(0, 32);
                                        return 34 !== e.length
                                          ? {
                                              return_code: 27012,
                                              error_message: (0,
                                              d.errorCodeToString)(27012)
                                            }
                                          : {
                                              return_code: r,
                                              error_message: (0,
                                              d.errorCodeToString)(r),
                                              pubkey: n
                                            };
                                      }, d.processErrorResponse)
                                  );
                                case 1:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return p.apply(this, arguments);
                    })
                },
                {
                  key: 'setAllowlistPubKey',
                  value:
                    ((l = (0, i.default)(
                      o.default.mark(function e(t) {
                        return o.default.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    'return',
                                    this.transport
                                      .send(this.cla, 145, 0, 0, t)
                                      .then(function (e) {
                                        var t = e.slice(-2),
                                          r = 256 * t[0] + t[1];
                                        return {
                                          return_code: r,
                                          error_message: (0,
                                          d.errorCodeToString)(r)
                                        };
                                      }, d.processErrorResponse)
                                  );
                                case 1:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e) {
                      return l.apply(this, arguments);
                    })
                },
                {
                  key: 'getAllowlistHash',
                  value:
                    ((a = (0, i.default)(
                      o.default.mark(function e() {
                        return o.default.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    'return',
                                    this.transport
                                      .send(this.cla, 146, 0, 0)
                                      .then(function (e) {
                                        var t = e.slice(-2),
                                          r = 256 * t[0] + t[1];
                                        console.log(e);
                                        var n = e.slice(0, 32);
                                        return 34 !== e.length
                                          ? {
                                              return_code: 27012,
                                              error_message: (0,
                                              d.errorCodeToString)(27012)
                                            }
                                          : {
                                              return_code: r,
                                              error_message: (0,
                                              d.errorCodeToString)(r),
                                              hash: n
                                            };
                                      }, d.processErrorResponse)
                                  );
                                case 1:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function () {
                      return a.apply(this, arguments);
                    })
                },
                {
                  key: 'uploadSendChunk',
                  value:
                    ((r = (0, i.default)(
                      o.default.mark(function e(t, r, n) {
                        var a;
                        return o.default.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (a = d.PAYLOAD_TYPE.ADD),
                                    1 === t && (a = d.PAYLOAD_TYPE.INIT),
                                    t === r && (a = d.PAYLOAD_TYPE.LAST),
                                    e.abrupt(
                                      'return',
                                      this.transport
                                        .send(this.cla, 147, a, 0, n, [
                                          d.ERROR_CODE.NoError
                                        ])
                                        .then(function (e) {
                                          var t = e.slice(-2),
                                            r = 256 * t[0] + t[1];
                                          return {
                                            return_code: r,
                                            error_message: (0,
                                            d.errorCodeToString)(r)
                                          };
                                        }, d.processErrorResponse)
                                    )
                                  );
                                case 4:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    )),
                    function (e, t, n) {
                      return r.apply(this, arguments);
                    })
                },
                {
                  key: 'uploadAllowlist',
                  value:
                    ((t = (0, i.default)(
                      o.default.mark(function t(r) {
                        var a,
                          c = this;
                        return o.default.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (a = []).push(n.from([0])),
                                    a.push.apply(
                                      a,
                                      (0, s.default)(e.GetChunks(r))
                                    ),
                                    t.abrupt(
                                      'return',
                                      this.uploadSendChunk(
                                        1,
                                        a.length,
                                        a[0]
                                      ).then(
                                        (function () {
                                          var e = (0, i.default)(
                                            o.default.mark(function e(t) {
                                              var r;
                                              return o.default.wrap(function (
                                                e
                                              ) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      if (
                                                        t.return_code ===
                                                        d.ERROR_CODE.NoError
                                                      ) {
                                                        e.next = 2;
                                                        break;
                                                      }
                                                      return e.abrupt(
                                                        'return',
                                                        {
                                                          return_code:
                                                            t.return_code,
                                                          error_message:
                                                            t.error_message
                                                        }
                                                      );
                                                    case 2:
                                                      r = 1;
                                                    case 3:
                                                      if (!(r < a.length)) {
                                                        e.next = 12;
                                                        break;
                                                      }
                                                      return (
                                                        (e.next = 6),
                                                        c.uploadSendChunk(
                                                          1 + r,
                                                          a.length,
                                                          a[r]
                                                        )
                                                      );
                                                    case 6:
                                                      if (
                                                        (t = e.sent)
                                                          .return_code ===
                                                        d.ERROR_CODE.NoError
                                                      ) {
                                                        e.next = 9;
                                                        break;
                                                      }
                                                      return e.abrupt(
                                                        'break',
                                                        12
                                                      );
                                                    case 9:
                                                      (r += 1), (e.next = 3);
                                                      break;
                                                    case 12:
                                                      return e.abrupt(
                                                        'return',
                                                        {
                                                          return_code:
                                                            t.return_code,
                                                          error_message:
                                                            t.error_message
                                                        }
                                                      );
                                                    case 13:
                                                    case 'end':
                                                      return e.stop();
                                                  }
                                              },
                                              e);
                                            })
                                          );
                                          return function (t) {
                                            return e.apply(this, arguments);
                                          };
                                        })(),
                                        d.processErrorResponse
                                      )
                                    )
                                  );
                                case 4:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    )),
                    function (e) {
                      return t.apply(this, arguments);
                    })
                }
              ],
              [
                {
                  key: 'serializePath',
                  value: function (e, t, r, a) {
                    if (!Number.isInteger(t))
                      throw new Error('Input must be an integer');
                    if (!Number.isInteger(r))
                      throw new Error('Input must be an integer');
                    if (!Number.isInteger(a))
                      throw new Error('Input must be an integer');
                    var o = n.alloc(20);
                    return (
                      o.writeUInt32LE(2147483692, 0),
                      o.writeUInt32LE(e, 4),
                      o.writeUInt32LE(t, 8),
                      o.writeUInt32LE(r, 12),
                      o.writeUInt32LE(a, 16),
                      o
                    );
                  }
                },
                {
                  key: 'GetChunks',
                  value: function (e) {
                    for (
                      var t = [], r = n.from(e), a = 0;
                      a < r.length;
                      a += d.CHUNK_SIZE
                    ) {
                      var o = a + d.CHUNK_SIZE;
                      a > r.length && (o = r.length), t.push(r.slice(a, o));
                    }
                    return t;
                  }
                },
                {
                  key: 'signGetChunks',
                  value: function (t, r, n, a, o) {
                    var i = [],
                      c = e.serializePath(t, r, n, a);
                    return (
                      i.push(c),
                      i.push.apply(i, (0, s.default)(e.GetChunks(o))),
                      i
                    );
                  }
                }
              ]
            ),
            e
          );
        })();
      function g(e, t) {
        var r = f.hmac(f.sha512, e).update(t).digest();
        return n.from(r);
      }
      function v(e, t) {
        if (32 !== t.byteLength) return null;
        var r = n.alloc(35);
        (r[0] = e), t.copy(r, 1);
        var a = (function (e) {
          var t = y.blake2bInit(64, null);
          return (
            y.blake2bUpdate(t, n.from('SS58PRE')),
            y.blake2bUpdate(t, e),
            y.blake2bFinal(t)
          );
        })(r.slice(0, 33));
        return (r[33] = a[0]), (r[34] = a[1]), m.encode(r);
      }
      e.exports = {
        hdKeyDerivation: function (e, t, r, a, o, s, i) {
          if (!p.validateMnemonic(e))
            return console.log('Invalid mnemonic'), null;
          var c = (function (e) {
            var t = n.alloc(65);
            (t[0] = 1), e.copy(t, 1);
            for (
              var r = (function (e, t) {
                  var r = f.hmac(f.sha256, 'ed25519 seed').update(t).digest();
                  return n.from(r);
                })(0, t),
                a = g('ed25519 seed', t.slice(1)),
                o = a.slice(0, 32),
                s = a.slice(32);
              0 != (32 & o[31]);

            )
              a.copy(t, 1),
                (o = (a = g('ed25519 seed', t.slice(1))).slice(0, 32)),
                (s = a.slice(32));
            return (
              (o[0] &= 248), (o[31] &= 127), (o[31] |= 64), n.concat([o, s, r])
            );
          })(p.mnemonicToSeedSync(e, t));
          (c = h.derivePrivate(c, 2147483692)),
            (c = h.derivePrivate(c, r)),
            (c = h.derivePrivate(c, a)),
            (c = h.derivePrivate(c, o));
          var u,
            d,
            l = (c = h.derivePrivate(c, s)).slice(0, 32),
            m = ((u = l), (d = f.sha512().update(u).digest()), n.from(d)).slice(
              0,
              32
            );
          (m[0] &= 248), (m[31] &= 127), (m[31] |= 64);
          var y = h.toPublic(m);
          return { sk: l, pk: y, address: v(i, y) };
        },
        newKusamaApp: function (e) {
          return new b(e, l.CLA.KUSAMA, l.SLIP0044.KUSAMA);
        },
        newPolkadotApp: function (e) {
          return new b(e, l.CLA.POLKADOT, l.SLIP0044.POLKADOT);
        },
        newPolymeshApp: function (e) {
          return new b(e, l.CLA.POLYMESH, l.SLIP0044.POLYMESH);
        },
        newDockApp: function (e) {
          return new b(e, l.CLA.DOCK, l.SLIP0044.DOCK);
        },
        newCentrifugeApp: function (e) {
          return new b(e, l.CLA.CENTRIFUGE, l.SLIP0044.CENTRIFUGE);
        },
        newEdgewareApp: function (e) {
          return new b(e, l.CLA.EDGEWARE, l.SLIP0044.EDGEWARE);
        }
      };
    }
  }
]);
