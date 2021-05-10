/*! For license information please see other.02.7a8586c3.js.LICENSE.txt */
(('undefined' != typeof self ? self : this).webpackChunk_polkadot_apps =
  ('undefined' != typeof self ? self : this).webpackChunk_polkadot_apps ||
  []).push([
  [824],
  {
    18166: (e, t, r) => {
      'use strict';
      var a = r(77834).Buffer;
      e.exports = function (e) {
        if (e.length >= 255) throw new TypeError('Alphabet too long');
        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
        for (var i = 0; i < e.length; i++) {
          var o = e.charAt(i),
            n = o.charCodeAt(0);
          if (255 !== t[n]) throw new TypeError(o + ' is ambiguous');
          t[n] = i;
        }
        var s = e.length,
          c = e.charAt(0),
          f = Math.log(s) / Math.log(256),
          d = Math.log(256) / Math.log(s);
        function u(e) {
          if ('string' != typeof e) throw new TypeError('Expected String');
          if (0 === e.length) return a.alloc(0);
          var r = 0;
          if (' ' !== e[r]) {
            for (var i = 0, o = 0; e[r] === c; ) i++, r++;
            for (
              var n = ((e.length - r) * f + 1) >>> 0, d = new Uint8Array(n);
              e[r];

            ) {
              var u = t[e.charCodeAt(r)];
              if (255 === u) return;
              for (
                var h = 0, l = n - 1;
                (0 !== u || h < o) && -1 !== l;
                l--, h++
              )
                (u += (s * d[l]) >>> 0),
                  (d[l] = u % 256 >>> 0),
                  (u = (u / 256) >>> 0);
              if (0 !== u) throw new Error('Non-zero carry');
              (o = h), r++;
            }
            if (' ' !== e[r]) {
              for (var p = n - o; p !== n && 0 === d[p]; ) p++;
              var b = a.allocUnsafe(i + (n - p));
              b.fill(0, 0, i);
              for (var m = i; p !== n; ) b[m++] = d[p++];
              return b;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              ((Array.isArray(t) || t instanceof Uint8Array) && (t = a.from(t)),
              !a.isBuffer(t))
            )
              throw new TypeError('Expected Buffer');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, o = 0, n = t.length; o !== n && 0 === t[o]; )
              o++, r++;
            for (
              var f = ((n - o) * d + 1) >>> 0, u = new Uint8Array(f);
              o !== n;

            ) {
              for (
                var h = t[o], l = 0, p = f - 1;
                (0 !== h || l < i) && -1 !== p;
                p--, l++
              )
                (h += (256 * u[p]) >>> 0),
                  (u[p] = h % s >>> 0),
                  (h = (h / s) >>> 0);
              if (0 !== h) throw new Error('Non-zero carry');
              (i = l), o++;
            }
            for (var b = f - i; b !== f && 0 === u[b]; ) b++;
            for (var m = c.repeat(r); b < f; ++b) m += e.charAt(u[b]);
            return m;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var t = u(e);
            if (t) return t;
            throw new Error('Non-base' + s + ' character');
          }
        };
      };
    },
    95766: (e, t) => {
      'use strict';
      (t.byteLength = function (e) {
        var t = c(e),
          r = t[0],
          a = t[1];
        return (3 * (r + a)) / 4 - a;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            o = c(e),
            n = o[0],
            s = o[1],
            f = new i(
              (function (e, t, r) {
                return (3 * (t + r)) / 4 - r;
              })(0, n, s)
            ),
            d = 0,
            u = s > 0 ? n - 4 : n;
          for (r = 0; r < u; r += 4)
            (t =
              (a[e.charCodeAt(r)] << 18) |
              (a[e.charCodeAt(r + 1)] << 12) |
              (a[e.charCodeAt(r + 2)] << 6) |
              a[e.charCodeAt(r + 3)]),
              (f[d++] = (t >> 16) & 255),
              (f[d++] = (t >> 8) & 255),
              (f[d++] = 255 & t);
          return (
            2 === s &&
              ((t = (a[e.charCodeAt(r)] << 2) | (a[e.charCodeAt(r + 1)] >> 4)),
              (f[d++] = 255 & t)),
            1 === s &&
              ((t =
                (a[e.charCodeAt(r)] << 10) |
                (a[e.charCodeAt(r + 1)] << 4) |
                (a[e.charCodeAt(r + 2)] >> 2)),
              (f[d++] = (t >> 8) & 255),
              (f[d++] = 255 & t)),
            f
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, a = e.length, i = a % 3, o = [], n = 16383, s = 0, c = a - i;
            s < c;
            s += n
          )
            o.push(f(e, s, s + n > c ? c : s + n));
          return (
            1 === i
              ? ((t = e[a - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + '=='))
              : 2 === i &&
                ((t = (e[a - 2] << 8) + e[a - 1]),
                o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + '=')),
            o.join('')
          );
        });
      for (
        var r = [],
          a = [],
          i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          o =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          n = 0,
          s = o.length;
        n < s;
        ++n
      )
        (r[n] = o[n]), (a[o.charCodeAt(n)] = n);
      function c(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4');
        var r = e.indexOf('=');
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function f(e, t, a) {
        for (var i, o, n = [], s = t; s < a; s += 3)
          (i =
            ((e[s] << 16) & 16711680) +
            ((e[s + 1] << 8) & 65280) +
            (255 & e[s + 2])),
            n.push(
              r[((o = i) >> 18) & 63] +
                r[(o >> 12) & 63] +
                r[(o >> 6) & 63] +
                r[63 & o]
            );
        return n.join('');
      }
      (a['-'.charCodeAt(0)] = 62), (a['_'.charCodeAt(0)] = 63);
    },
    7261: (e, t, r) => {
      'use strict';
      var a = r(34485),
        i = r(87554),
        o = i.utils,
        n = o.assert,
        s = o.parseBytes,
        c = r(13797),
        f = r(6117);
      function d(e) {
        if (
          (n('ed25519' === e, 'only tested with ed25519 so far'),
          !(this instanceof d))
        )
          return new d(e);
        (e = i.curves[e].curve),
          (this.curve = e),
          (this.g = e.g),
          this.g.precompute(e.n.bitLength() + 1),
          (this.pointClass = e.point().constructor),
          (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
          (this.hash = a.sha512);
      }
      (e.exports = d),
        (d.prototype.sign = function (e, t) {
          e = s(e);
          var r = this.keyFromSecret(t),
            a = this.hashInt(r.messagePrefix(), e),
            i = this.g.mul(a),
            o = this.encodePoint(i),
            n = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
            c = a.add(n).umod(this.curve.n);
          return this.makeSignature({ R: i, S: c, Rencoded: o });
        }),
        (d.prototype.verify = function (e, t, r) {
          (e = s(e)), (t = this.makeSignature(t));
          var a = this.keyFromPublic(r),
            i = this.hashInt(t.Rencoded(), a.pubBytes(), e),
            o = this.g.mul(t.S());
          return t.R().add(a.pub().mul(i)).eq(o);
        }),
        (d.prototype.hashInt = function () {
          for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t]);
          return o.intFromLE(e.digest()).umod(this.curve.n);
        }),
        (d.prototype.keyFromPublic = function (e) {
          return c.fromPublic(this, e);
        }),
        (d.prototype.keyFromSecret = function (e) {
          return c.fromSecret(this, e);
        }),
        (d.prototype.makeSignature = function (e) {
          return e instanceof f ? e : new f(this, e);
        }),
        (d.prototype.encodePoint = function (e) {
          var t = e.getY().toArray('le', this.encodingLength);
          return (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t;
        }),
        (d.prototype.decodePoint = function (e) {
          var t = (e = o.parseBytes(e)).length - 1,
            r = e.slice(0, t).concat(-129 & e[t]),
            a = 0 != (128 & e[t]),
            i = o.intFromLE(r);
          return this.curve.pointFromY(i, a);
        }),
        (d.prototype.encodeInt = function (e) {
          return e.toArray('le', this.encodingLength);
        }),
        (d.prototype.decodeInt = function (e) {
          return o.intFromLE(e);
        }),
        (d.prototype.isPoint = function (e) {
          return e instanceof this.pointClass;
        });
    },
    13797: (e, t, r) => {
      'use strict';
      var a = r(87554).utils,
        i = a.assert,
        o = a.parseBytes,
        n = a.cachedProperty;
      function s(e, t) {
        (this.eddsa = e),
          (this._secret = o(t.secret)),
          e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = o(t.pub));
      }
      (s.fromPublic = function (e, t) {
        return t instanceof s ? t : new s(e, { pub: t });
      }),
        (s.fromSecret = function (e, t) {
          return t instanceof s ? t : new s(e, { secret: t });
        }),
        (s.prototype.secret = function () {
          return this._secret;
        }),
        n(s, 'pubBytes', function () {
          return this.eddsa.encodePoint(this.pub());
        }),
        n(s, 'pub', function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        n(s, 'privBytes', function () {
          return this.secret();
        }),
        n(s, 'priv', function () {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        n(s, 'hash', function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }),
        n(s, 'messagePrefix', function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (s.prototype.sign = function (e) {
          return (
            i(this._secret, 'KeyPair can only verify'), this.eddsa.sign(e, this)
          );
        }),
        (s.prototype.verify = function (e, t) {
          return this.eddsa.verify(e, t, this);
        }),
        (s.prototype.getSecret = function (e) {
          return (
            i(this._secret, 'KeyPair is public only'),
            a.encode(this.secret(), e)
          );
        }),
        (s.prototype.getPublic = function (e) {
          return a.encode(this.pubBytes(), e);
        }),
        (e.exports = s);
    },
    55889: (e, t, r) => {
      var a = r(48834).Buffer,
        i = r(40141),
        o = r(34485),
        n = r(87554).utils,
        s = new (r(7261))('ed25519');
      function c(e) {
        var t = o.sha512().update(e).digest();
        return a.from(t);
      }
      function f(e, t) {
        var r = o.hmac(o.sha512, e).update(t).digest();
        return a.from(r);
      }
      function d(e) {
        var t = c(e);
        return (t[0] &= 248), (t[31] &= 63), (t[31] |= 64), t;
      }
      function u(e) {
        for (var t = 1; ; ) {
          var r = f(e, 'Root Seed Chain ' + t),
            i = d(r.slice(0, 32));
          if (0 == (32 & i[31])) return a.concat([i, r.slice(32, 64)]);
          t++;
        }
      }
      function h(e) {
        if (32 !== e.length && 96 !== e.length) throw new Error('invalid xprv');
        var t = s.keyFromSecret(e.slice(0, 32).toString('hex')),
          r = a.from(t.pubBytes());
        return e.length > 64 ? a.concat([r, e.slice(64, 96)]) : r;
      }
      e.exports = {
        fromSeed2: function (e) {
          var t = f('ed25519 cardano seed', e),
            r = c(t.slice(0, 32));
          return (
            (r[0] &= 248),
            (r[31] &= 31),
            (r[31] |= 64),
            a.concat([r, t.slice(32, 64)])
          );
        },
        fromSeed: u,
        generateFromSeed: u,
        derivePrivate: function (e, t) {
          var r,
            o,
            n,
            s = e.slice(0, 32),
            c = e.slice(32, 64),
            d = e.slice(64, 96);
          t < 2147483648
            ? ((r = a.allocUnsafe(37)).writeUInt32LE(t, 33),
              h(s).copy(r, 1),
              (r[0] = 2),
              (o = f(d, r)),
              (r[0] = 3),
              (n = f(d, r)))
            : ((r = a.allocUnsafe(69)).writeUInt32LE(t, 65),
              s.copy(r, 1),
              c.copy(r, 33),
              (r[0] = 0),
              (o = f(d, r)),
              (r[0] = 1),
              (n = f(d, r)));
          var u = n.slice(32, 64),
            l = o.slice(0, 32),
            p = o.slice(32, 64),
            b = new i(s, 16, 'le')
              .add(new i(l.slice(0, 28), 16, 'le').mul(new i(8)))
              .toArrayLike(a, 'le', 32),
            m = new i(c, 16, 'le')
              .add(new i(p, 16, 'le'))
              .toArrayLike(a, 'le')
              .slice(0, 32);
          return (
            32 !== m.length && (m = a.from(m.toString('hex') + '00', 'hex')),
            a.concat([b, m, u])
          );
        },
        derivePublic: function (e, t) {
          var r,
            o = e.slice(0, 32),
            n = e.slice(32, 64),
            c = a.allocUnsafe(37);
          if ((c.writeUInt32LE(t, 33), !(t < 2147483648)))
            throw new Error('can not derive public key with harden');
          o.copy(c, 1), (c[0] = 2), (r = f(n, c)), (c[0] = 3);
          var d = f(n, c).slice(32, 64),
            u = r.slice(0, 32),
            h = new i(u.slice(0, 28), 16, 'le').mul(new i(8)),
            l = s.g.mul(h),
            p = s.decodePoint(o.toString('hex')).add(l);
          return a.concat([a.from(s.encodePoint(p)), d]);
        },
        toPublic: h,
        eddsa: s,
        sign: function (e, t) {
          'string' != typeof t && (t = t.toString('hex'));
          var r = s.keyFromSecret(n.parseBytes(t).slice(0, 32)).sign(e);
          return a.from(r.toBytes());
        },
        verify: function (e, t, r) {
          return (
            'string' != typeof r && (r = r.toString('hex')),
            s.verify(e, t.toString('hex'), n.parseBytes(r).slice(0, 32))
          );
        }
      };
    },
    40141: function (e, t, r) {
      !(function (e, t) {
        'use strict';
        function a(e, t) {
          if (!e) throw new Error(t || 'Assertion failed');
        }
        function i(e, t) {
          e.super_ = t;
          var r = function () {};
          (r.prototype = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e);
        }
        function o(e, t, r) {
          if (o.isBN(e)) return e;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== e &&
              (('le' !== t && 'be' !== t) || ((r = t), (t = 10)),
              this._init(e || 0, t || 10, r || 'be'));
        }
        var n;
        'object' == typeof e ? (e.exports = o) : (t.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          n = r(60865).Buffer;
        } catch (e) {}
        function s(e, t, r) {
          for (var i = 0, o = Math.min(e.length, r), n = 0, s = t; s < o; s++) {
            var c,
              f = e.charCodeAt(s) - 48;
            (i <<= 4),
              (i |= c =
                f >= 49 && f <= 54
                  ? f - 49 + 10
                  : f >= 17 && f <= 22
                  ? f - 17 + 10
                  : f),
              (n |= c);
          }
          return a(!(240 & n), 'Invalid character in ' + e), i;
        }
        function c(e, t, r, i) {
          for (var o = 0, n = 0, s = Math.min(e.length, r), c = t; c < s; c++) {
            var f = e.charCodeAt(c) - 48;
            (o *= i),
              (n = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f),
              a(f >= 0 && n < i, 'Invalid character'),
              (o += n);
          }
          return o;
        }
        function f(e, t) {
          (e.words = t.words),
            (e.length = t.length),
            (e.negative = t.negative),
            (e.red = t.red);
        }
        if (
          ((o.isBN = function (e) {
            return (
              e instanceof o ||
              (null !== e &&
                'object' == typeof e &&
                e.constructor.wordSize === o.wordSize &&
                Array.isArray(e.words))
            );
          }),
          (o.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t;
          }),
          (o.min = function (e, t) {
            return e.cmp(t) < 0 ? e : t;
          }),
          (o.prototype._init = function (e, t, r) {
            if ('number' == typeof e) return this._initNumber(e, t, r);
            if ('object' == typeof e) return this._initArray(e, t, r);
            'hex' === t && (t = 16), a(t === (0 | t) && t >= 2 && t <= 36);
            var i = 0;
            '-' === (e = e.toString().replace(/\s+/g, ''))[0] && i++,
              16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i),
              '-' === e[0] && (this.negative = 1),
              this._strip(),
              'le' === r && this._initArray(this.toArray(), t, r);
          }),
          (o.prototype._initNumber = function (e, t, r) {
            e < 0 && ((this.negative = 1), (e = -e)),
              e < 67108864
                ? ((this.words = [67108863 & e]), (this.length = 1))
                : e < 4503599627370496
                ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                  (this.length = 2))
                : (a(e < 9007199254740992),
                  (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              'le' === r && this._initArray(this.toArray(), t, r);
          }),
          (o.prototype._initArray = function (e, t, r) {
            if ((a('number' == typeof e.length), e.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var o,
              n,
              s = 0;
            if ('be' === r)
              for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                (n = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)),
                  (this.words[o] |= (n << s) & 67108863),
                  (this.words[o + 1] = (n >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ('le' === r)
              for (i = 0, o = 0; i < e.length; i += 3)
                (n = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)),
                  (this.words[o] |= (n << s) & 67108863),
                  (this.words[o + 1] = (n >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (e, t) {
            (this.length = Math.ceil((e.length - t) / 6)),
              (this.words = new Array(this.length));
            for (var r = 0; r < this.length; r++) this.words[r] = 0;
            var a,
              i,
              o = 0;
            for (r = e.length - 6, a = 0; r >= t; r -= 6)
              (i = s(e, r, r + 6)),
                (this.words[a] |= (i << o) & 67108863),
                (this.words[a + 1] |= (i >>> (26 - o)) & 4194303),
                (o += 24) >= 26 && ((o -= 26), a++);
            r + 6 !== t &&
              ((i = s(e, t, r + 6)),
              (this.words[a] |= (i << o) & 67108863),
              (this.words[a + 1] |= (i >>> (26 - o)) & 4194303)),
              this._strip();
          }),
          (o.prototype._parseBase = function (e, t, r) {
            (this.words = [0]), (this.length = 1);
            for (var a = 0, i = 1; i <= 67108863; i *= t) a++;
            a--, (i = (i / t) | 0);
            for (
              var o = e.length - r,
                n = o % a,
                s = Math.min(o, o - n) + r,
                f = 0,
                d = r;
              d < s;
              d += a
            )
              (f = c(e, d, d + a, t)),
                this.imuln(i),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== n) {
              var u = 1;
              for (f = c(e, d, e.length, t), d = 0; d < n; d++) u *= t;
              this.imuln(u),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
          }),
          (o.prototype.copy = function (e) {
            e.words = new Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            (e.length = this.length),
              (e.negative = this.negative),
              (e.red = this.red);
          }),
          (o.prototype._move = function (e) {
            f(e, this);
          }),
          (o.prototype.clone = function () {
            var e = new o(null);
            return this.copy(e), e;
          }),
          (o.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for('nodejs.util.inspect.custom')] = d;
          } catch (e) {
            o.prototype.inspect = d;
          }
        else o.prototype.inspect = d;
        function d() {
          return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
        }
        var u = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000'
          ],
          h = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          l = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
          ];
        function p(e, t, r) {
          r.negative = t.negative ^ e.negative;
          var a = (e.length + t.length) | 0;
          (r.length = a), (a = (a - 1) | 0);
          var i = 0 | e.words[0],
            o = 0 | t.words[0],
            n = i * o,
            s = 67108863 & n,
            c = (n / 67108864) | 0;
          r.words[0] = s;
          for (var f = 1; f < a; f++) {
            for (
              var d = c >>> 26,
                u = 67108863 & c,
                h = Math.min(f, t.length - 1),
                l = Math.max(0, f - e.length + 1);
              l <= h;
              l++
            ) {
              var p = (f - l) | 0;
              (d +=
                ((n = (i = 0 | e.words[p]) * (o = 0 | t.words[l]) + u) /
                  67108864) |
                0),
                (u = 67108863 & n);
            }
            (r.words[f] = 0 | u), (c = 0 | d);
          }
          return 0 !== c ? (r.words[f] = 0 | c) : r.length--, r._strip();
        }
        (o.prototype.toString = function (e, t) {
          var r;
          if (((t = 0 | t || 1), 16 === (e = e || 10) || 'hex' === e)) {
            r = '';
            for (var i = 0, o = 0, n = 0; n < this.length; n++) {
              var s = this.words[n],
                c = (16777215 & ((s << i) | o)).toString(16);
              (r =
                0 != (o = (s >>> (24 - i)) & 16777215) || n !== this.length - 1
                  ? u[6 - c.length] + c + r
                  : c + r),
                (i += 2) >= 26 && ((i -= 26), n--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % t != 0; )
              r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var f = h[e],
              d = l[e];
            r = '';
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var b = p.modrn(d).toString(e);
              r = (p = p.idivn(d)).isZero() ? b + r : u[f - b.length] + b + r;
            }
            for (this.isZero() && (r = '0' + r); r.length % t != 0; )
              r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          a(!1, 'Base should be between 2 and 36');
        }),
          (o.prototype.toNumber = function () {
            var e = this.words[0];
            return (
              2 === this.length
                ? (e += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (e += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  a(!1, 'Number can only safely store up to 53 bits'),
              0 !== this.negative ? -e : e
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          n &&
            (o.prototype.toBuffer = function (e, t) {
              return this.toArrayLike(n, e, t);
            }),
          (o.prototype.toArray = function (e, t) {
            return this.toArrayLike(Array, e, t);
          }),
          (o.prototype.toArrayLike = function (e, t, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            a(i <= o, 'byte array longer than desired length'),
              a(o > 0, 'Requested array length <= 0');
            var n = (function (e, t) {
              return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
            })(e, o);
            return this['_toArrayLike' + ('le' === t ? 'LE' : 'BE')](n, i), n;
          }),
          (o.prototype._toArrayLikeLE = function (e, t) {
            for (var r = 0, a = 0, i = 0, o = 0; i < this.length; i++) {
              var n = (this.words[i] << o) | a;
              (e[r++] = 255 & n),
                r < e.length && (e[r++] = (n >> 8) & 255),
                r < e.length && (e[r++] = (n >> 16) & 255),
                6 === o
                  ? (r < e.length && (e[r++] = (n >> 24) & 255),
                    (a = 0),
                    (o = 0))
                  : ((a = n >>> 24), (o += 2));
            }
            if (r < e.length) for (e[r++] = a; r < e.length; ) e[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (e, t) {
            for (
              var r = e.length - 1, a = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var n = (this.words[i] << o) | a;
              (e[r--] = 255 & n),
                r >= 0 && (e[r--] = (n >> 8) & 255),
                r >= 0 && (e[r--] = (n >> 16) & 255),
                6 === o
                  ? (r >= 0 && (e[r--] = (n >> 24) & 255), (a = 0), (o = 0))
                  : ((a = n >>> 24), (o += 2));
            }
            if (r >= 0) for (e[r--] = a; r >= 0; ) e[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (e) {
                return 32 - Math.clz32(e);
              })
            : (o.prototype._countBits = function (e) {
                var t = e,
                  r = 0;
                return (
                  t >= 4096 && ((r += 13), (t >>>= 13)),
                  t >= 64 && ((r += 7), (t >>>= 7)),
                  t >= 8 && ((r += 4), (t >>>= 4)),
                  t >= 2 && ((r += 2), (t >>>= 2)),
                  r + t
                );
              }),
          (o.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var t = e,
              r = 0;
            return (
              0 == (8191 & t) && ((r += 13), (t >>>= 13)),
              0 == (127 & t) && ((r += 7), (t >>>= 7)),
              0 == (15 & t) && ((r += 4), (t >>>= 4)),
              0 == (3 & t) && ((r += 2), (t >>>= 2)),
              0 == (1 & t) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
              t = this._countBits(e);
            return 26 * (this.length - 1) + t;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, t = 0; t < this.length; t++) {
              var r = this._zeroBits(this.words[t]);
              if (((e += r), 26 !== r)) break;
            }
            return e;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (e) {
            return 0 !== this.negative
              ? this.abs().inotn(e).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (e) {
            return this.testn(e - 1)
              ? this.notn(e).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var t = 0; t < e.length; t++)
              this.words[t] = this.words[t] | e.words[t];
            return this._strip();
          }),
          (o.prototype.ior = function (e) {
            return a(0 == (this.negative | e.negative)), this.iuor(e);
          }),
          (o.prototype.or = function (e) {
            return this.length > e.length
              ? this.clone().ior(e)
              : e.clone().ior(this);
          }),
          (o.prototype.uor = function (e) {
            return this.length > e.length
              ? this.clone().iuor(e)
              : e.clone().iuor(this);
          }),
          (o.prototype.iuand = function (e) {
            var t;
            t = this.length > e.length ? e : this;
            for (var r = 0; r < t.length; r++)
              this.words[r] = this.words[r] & e.words[r];
            return (this.length = t.length), this._strip();
          }),
          (o.prototype.iand = function (e) {
            return a(0 == (this.negative | e.negative)), this.iuand(e);
          }),
          (o.prototype.and = function (e) {
            return this.length > e.length
              ? this.clone().iand(e)
              : e.clone().iand(this);
          }),
          (o.prototype.uand = function (e) {
            return this.length > e.length
              ? this.clone().iuand(e)
              : e.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (e) {
            var t, r;
            this.length > e.length
              ? ((t = this), (r = e))
              : ((t = e), (r = this));
            for (var a = 0; a < r.length; a++)
              this.words[a] = t.words[a] ^ r.words[a];
            if (this !== t)
              for (; a < t.length; a++) this.words[a] = t.words[a];
            return (this.length = t.length), this._strip();
          }),
          (o.prototype.ixor = function (e) {
            return a(0 == (this.negative | e.negative)), this.iuxor(e);
          }),
          (o.prototype.xor = function (e) {
            return this.length > e.length
              ? this.clone().ixor(e)
              : e.clone().ixor(this);
          }),
          (o.prototype.uxor = function (e) {
            return this.length > e.length
              ? this.clone().iuxor(e)
              : e.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (e) {
            a('number' == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
              r = e % 26;
            this._expand(t), r > 0 && t--;
            for (var i = 0; i < t; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (e) {
            return this.clone().inotn(e);
          }),
          (o.prototype.setn = function (e, t) {
            a('number' == typeof e && e >= 0);
            var r = (e / 26) | 0,
              i = e % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = t
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (e) {
            var t, r, a;
            if (0 !== this.negative && 0 === e.negative)
              return (
                (this.negative = 0),
                (t = this.isub(e)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== e.negative)
              return (
                (e.negative = 0),
                (t = this.isub(e)),
                (e.negative = 1),
                t._normSign()
              );
            this.length > e.length
              ? ((r = this), (a = e))
              : ((r = e), (a = this));
            for (var i = 0, o = 0; o < a.length; o++)
              (t = (0 | r.words[o]) + (0 | a.words[o]) + i),
                (this.words[o] = 67108863 & t),
                (i = t >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (t = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & t),
                (i = t >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (e) {
            var t;
            return 0 !== e.negative && 0 === this.negative
              ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
              : 0 === e.negative && 0 !== this.negative
              ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t)
              : this.length > e.length
              ? this.clone().iadd(e)
              : e.clone().iadd(this);
          }),
          (o.prototype.isub = function (e) {
            if (0 !== e.negative) {
              e.negative = 0;
              var t = this.iadd(e);
              return (e.negative = 1), t._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(e),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              a,
              i = this.cmp(e);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((r = this), (a = e)) : ((r = e), (a = this));
            for (var o = 0, n = 0; n < a.length; n++)
              (o = (t = (0 | r.words[n]) - (0 | a.words[n]) + o) >> 26),
                (this.words[n] = 67108863 & t);
            for (; 0 !== o && n < r.length; n++)
              (o = (t = (0 | r.words[n]) + o) >> 26),
                (this.words[n] = 67108863 & t);
            if (0 === o && n < r.length && r !== this)
              for (; n < r.length; n++) this.words[n] = r.words[n];
            return (
              (this.length = Math.max(this.length, n)),
              r !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (e) {
            return this.clone().isub(e);
          });
        var b = function (e, t, r) {
          var a,
            i,
            o,
            n = e.words,
            s = t.words,
            c = r.words,
            f = 0,
            d = 0 | n[0],
            u = 8191 & d,
            h = d >>> 13,
            l = 0 | n[1],
            p = 8191 & l,
            b = l >>> 13,
            m = 0 | n[2],
            v = 8191 & m,
            g = m >>> 13,
            y = 0 | n[3],
            w = 8191 & y,
            k = y >>> 13,
            M = 0 | n[4],
            _ = 8191 & M,
            z = M >>> 13,
            x = 0 | n[5],
            A = 8191 & x,
            S = x >>> 13,
            j = 0 | n[6],
            I = 8191 & j,
            q = j >>> 13,
            E = 0 | n[7],
            B = 8191 & E,
            C = E >>> 13,
            R = 0 | n[8],
            P = 8191 & R,
            N = R >>> 13,
            O = 0 | n[9],
            L = 8191 & O,
            D = O >>> 13,
            U = 0 | s[0],
            T = 8191 & U,
            H = U >>> 13,
            F = 0 | s[1],
            Z = 8191 & F,
            J = F >>> 13,
            K = 0 | s[2],
            V = 8191 & K,
            X = K >>> 13,
            W = 0 | s[3],
            G = 8191 & W,
            Y = W >>> 13,
            Q = 0 | s[4],
            $ = 8191 & Q,
            ee = Q >>> 13,
            te = 0 | s[5],
            re = 8191 & te,
            ae = te >>> 13,
            ie = 0 | s[6],
            oe = 8191 & ie,
            ne = ie >>> 13,
            se = 0 | s[7],
            ce = 8191 & se,
            fe = se >>> 13,
            de = 0 | s[8],
            ue = 8191 & de,
            he = de >>> 13,
            le = 0 | s[9],
            pe = 8191 & le,
            be = le >>> 13;
          (r.negative = e.negative ^ t.negative), (r.length = 19);
          var me =
            (((f + (a = Math.imul(u, T))) | 0) +
              ((8191 & (i = ((i = Math.imul(u, H)) + Math.imul(h, T)) | 0)) <<
                13)) |
            0;
          (f = ((((o = Math.imul(h, H)) + (i >>> 13)) | 0) + (me >>> 26)) | 0),
            (me &= 67108863),
            (a = Math.imul(p, T)),
            (i = ((i = Math.imul(p, H)) + Math.imul(b, T)) | 0),
            (o = Math.imul(b, H));
          var ve =
            (((f + (a = (a + Math.imul(u, Z)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, J)) | 0) + Math.imul(h, Z)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, J)) | 0) + (i >>> 13)) | 0) +
              (ve >>> 26)) |
            0),
            (ve &= 67108863),
            (a = Math.imul(v, T)),
            (i = ((i = Math.imul(v, H)) + Math.imul(g, T)) | 0),
            (o = Math.imul(g, H)),
            (a = (a + Math.imul(p, Z)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, J)) | 0);
          var ge =
            (((f + (a = (a + Math.imul(u, V)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, X)) | 0) + Math.imul(h, V)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, X)) | 0) + (i >>> 13)) | 0) +
              (ge >>> 26)) |
            0),
            (ge &= 67108863),
            (a = Math.imul(w, T)),
            (i = ((i = Math.imul(w, H)) + Math.imul(k, T)) | 0),
            (o = Math.imul(k, H)),
            (a = (a + Math.imul(v, Z)) | 0),
            (i = ((i = (i + Math.imul(v, J)) | 0) + Math.imul(g, Z)) | 0),
            (o = (o + Math.imul(g, J)) | 0),
            (a = (a + Math.imul(p, V)) | 0),
            (i = ((i = (i + Math.imul(p, X)) | 0) + Math.imul(b, V)) | 0),
            (o = (o + Math.imul(b, X)) | 0);
          var ye =
            (((f + (a = (a + Math.imul(u, G)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, Y)) | 0) + Math.imul(h, G)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, Y)) | 0) + (i >>> 13)) | 0) +
              (ye >>> 26)) |
            0),
            (ye &= 67108863),
            (a = Math.imul(_, T)),
            (i = ((i = Math.imul(_, H)) + Math.imul(z, T)) | 0),
            (o = Math.imul(z, H)),
            (a = (a + Math.imul(w, Z)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(k, Z)) | 0),
            (o = (o + Math.imul(k, J)) | 0),
            (a = (a + Math.imul(v, V)) | 0),
            (i = ((i = (i + Math.imul(v, X)) | 0) + Math.imul(g, V)) | 0),
            (o = (o + Math.imul(g, X)) | 0),
            (a = (a + Math.imul(p, G)) | 0),
            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(b, G)) | 0),
            (o = (o + Math.imul(b, Y)) | 0);
          var we =
            (((f + (a = (a + Math.imul(u, $)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, ee)) | 0) + Math.imul(h, $)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, ee)) | 0) + (i >>> 13)) | 0) +
              (we >>> 26)) |
            0),
            (we &= 67108863),
            (a = Math.imul(A, T)),
            (i = ((i = Math.imul(A, H)) + Math.imul(S, T)) | 0),
            (o = Math.imul(S, H)),
            (a = (a + Math.imul(_, Z)) | 0),
            (i = ((i = (i + Math.imul(_, J)) | 0) + Math.imul(z, Z)) | 0),
            (o = (o + Math.imul(z, J)) | 0),
            (a = (a + Math.imul(w, V)) | 0),
            (i = ((i = (i + Math.imul(w, X)) | 0) + Math.imul(k, V)) | 0),
            (o = (o + Math.imul(k, X)) | 0),
            (a = (a + Math.imul(v, G)) | 0),
            (i = ((i = (i + Math.imul(v, Y)) | 0) + Math.imul(g, G)) | 0),
            (o = (o + Math.imul(g, Y)) | 0),
            (a = (a + Math.imul(p, $)) | 0),
            (i = ((i = (i + Math.imul(p, ee)) | 0) + Math.imul(b, $)) | 0),
            (o = (o + Math.imul(b, ee)) | 0);
          var ke =
            (((f + (a = (a + Math.imul(u, re)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, ae)) | 0) + Math.imul(h, re)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, ae)) | 0) + (i >>> 13)) | 0) +
              (ke >>> 26)) |
            0),
            (ke &= 67108863),
            (a = Math.imul(I, T)),
            (i = ((i = Math.imul(I, H)) + Math.imul(q, T)) | 0),
            (o = Math.imul(q, H)),
            (a = (a + Math.imul(A, Z)) | 0),
            (i = ((i = (i + Math.imul(A, J)) | 0) + Math.imul(S, Z)) | 0),
            (o = (o + Math.imul(S, J)) | 0),
            (a = (a + Math.imul(_, V)) | 0),
            (i = ((i = (i + Math.imul(_, X)) | 0) + Math.imul(z, V)) | 0),
            (o = (o + Math.imul(z, X)) | 0),
            (a = (a + Math.imul(w, G)) | 0),
            (i = ((i = (i + Math.imul(w, Y)) | 0) + Math.imul(k, G)) | 0),
            (o = (o + Math.imul(k, Y)) | 0),
            (a = (a + Math.imul(v, $)) | 0),
            (i = ((i = (i + Math.imul(v, ee)) | 0) + Math.imul(g, $)) | 0),
            (o = (o + Math.imul(g, ee)) | 0),
            (a = (a + Math.imul(p, re)) | 0),
            (i = ((i = (i + Math.imul(p, ae)) | 0) + Math.imul(b, re)) | 0),
            (o = (o + Math.imul(b, ae)) | 0);
          var Me =
            (((f + (a = (a + Math.imul(u, oe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, ne)) | 0) + Math.imul(h, oe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, ne)) | 0) + (i >>> 13)) | 0) +
              (Me >>> 26)) |
            0),
            (Me &= 67108863),
            (a = Math.imul(B, T)),
            (i = ((i = Math.imul(B, H)) + Math.imul(C, T)) | 0),
            (o = Math.imul(C, H)),
            (a = (a + Math.imul(I, Z)) | 0),
            (i = ((i = (i + Math.imul(I, J)) | 0) + Math.imul(q, Z)) | 0),
            (o = (o + Math.imul(q, J)) | 0),
            (a = (a + Math.imul(A, V)) | 0),
            (i = ((i = (i + Math.imul(A, X)) | 0) + Math.imul(S, V)) | 0),
            (o = (o + Math.imul(S, X)) | 0),
            (a = (a + Math.imul(_, G)) | 0),
            (i = ((i = (i + Math.imul(_, Y)) | 0) + Math.imul(z, G)) | 0),
            (o = (o + Math.imul(z, Y)) | 0),
            (a = (a + Math.imul(w, $)) | 0),
            (i = ((i = (i + Math.imul(w, ee)) | 0) + Math.imul(k, $)) | 0),
            (o = (o + Math.imul(k, ee)) | 0),
            (a = (a + Math.imul(v, re)) | 0),
            (i = ((i = (i + Math.imul(v, ae)) | 0) + Math.imul(g, re)) | 0),
            (o = (o + Math.imul(g, ae)) | 0),
            (a = (a + Math.imul(p, oe)) | 0),
            (i = ((i = (i + Math.imul(p, ne)) | 0) + Math.imul(b, oe)) | 0),
            (o = (o + Math.imul(b, ne)) | 0);
          var _e =
            (((f + (a = (a + Math.imul(u, ce)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, fe)) | 0) + Math.imul(h, ce)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, fe)) | 0) + (i >>> 13)) | 0) +
              (_e >>> 26)) |
            0),
            (_e &= 67108863),
            (a = Math.imul(P, T)),
            (i = ((i = Math.imul(P, H)) + Math.imul(N, T)) | 0),
            (o = Math.imul(N, H)),
            (a = (a + Math.imul(B, Z)) | 0),
            (i = ((i = (i + Math.imul(B, J)) | 0) + Math.imul(C, Z)) | 0),
            (o = (o + Math.imul(C, J)) | 0),
            (a = (a + Math.imul(I, V)) | 0),
            (i = ((i = (i + Math.imul(I, X)) | 0) + Math.imul(q, V)) | 0),
            (o = (o + Math.imul(q, X)) | 0),
            (a = (a + Math.imul(A, G)) | 0),
            (i = ((i = (i + Math.imul(A, Y)) | 0) + Math.imul(S, G)) | 0),
            (o = (o + Math.imul(S, Y)) | 0),
            (a = (a + Math.imul(_, $)) | 0),
            (i = ((i = (i + Math.imul(_, ee)) | 0) + Math.imul(z, $)) | 0),
            (o = (o + Math.imul(z, ee)) | 0),
            (a = (a + Math.imul(w, re)) | 0),
            (i = ((i = (i + Math.imul(w, ae)) | 0) + Math.imul(k, re)) | 0),
            (o = (o + Math.imul(k, ae)) | 0),
            (a = (a + Math.imul(v, oe)) | 0),
            (i = ((i = (i + Math.imul(v, ne)) | 0) + Math.imul(g, oe)) | 0),
            (o = (o + Math.imul(g, ne)) | 0),
            (a = (a + Math.imul(p, ce)) | 0),
            (i = ((i = (i + Math.imul(p, fe)) | 0) + Math.imul(b, ce)) | 0),
            (o = (o + Math.imul(b, fe)) | 0);
          var ze =
            (((f + (a = (a + Math.imul(u, ue)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, he)) | 0) + Math.imul(h, ue)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, he)) | 0) + (i >>> 13)) | 0) +
              (ze >>> 26)) |
            0),
            (ze &= 67108863),
            (a = Math.imul(L, T)),
            (i = ((i = Math.imul(L, H)) + Math.imul(D, T)) | 0),
            (o = Math.imul(D, H)),
            (a = (a + Math.imul(P, Z)) | 0),
            (i = ((i = (i + Math.imul(P, J)) | 0) + Math.imul(N, Z)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (a = (a + Math.imul(B, V)) | 0),
            (i = ((i = (i + Math.imul(B, X)) | 0) + Math.imul(C, V)) | 0),
            (o = (o + Math.imul(C, X)) | 0),
            (a = (a + Math.imul(I, G)) | 0),
            (i = ((i = (i + Math.imul(I, Y)) | 0) + Math.imul(q, G)) | 0),
            (o = (o + Math.imul(q, Y)) | 0),
            (a = (a + Math.imul(A, $)) | 0),
            (i = ((i = (i + Math.imul(A, ee)) | 0) + Math.imul(S, $)) | 0),
            (o = (o + Math.imul(S, ee)) | 0),
            (a = (a + Math.imul(_, re)) | 0),
            (i = ((i = (i + Math.imul(_, ae)) | 0) + Math.imul(z, re)) | 0),
            (o = (o + Math.imul(z, ae)) | 0),
            (a = (a + Math.imul(w, oe)) | 0),
            (i = ((i = (i + Math.imul(w, ne)) | 0) + Math.imul(k, oe)) | 0),
            (o = (o + Math.imul(k, ne)) | 0),
            (a = (a + Math.imul(v, ce)) | 0),
            (i = ((i = (i + Math.imul(v, fe)) | 0) + Math.imul(g, ce)) | 0),
            (o = (o + Math.imul(g, fe)) | 0),
            (a = (a + Math.imul(p, ue)) | 0),
            (i = ((i = (i + Math.imul(p, he)) | 0) + Math.imul(b, ue)) | 0),
            (o = (o + Math.imul(b, he)) | 0);
          var xe =
            (((f + (a = (a + Math.imul(u, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, be)) | 0) + Math.imul(h, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, be)) | 0) + (i >>> 13)) | 0) +
              (xe >>> 26)) |
            0),
            (xe &= 67108863),
            (a = Math.imul(L, Z)),
            (i = ((i = Math.imul(L, J)) + Math.imul(D, Z)) | 0),
            (o = Math.imul(D, J)),
            (a = (a + Math.imul(P, V)) | 0),
            (i = ((i = (i + Math.imul(P, X)) | 0) + Math.imul(N, V)) | 0),
            (o = (o + Math.imul(N, X)) | 0),
            (a = (a + Math.imul(B, G)) | 0),
            (i = ((i = (i + Math.imul(B, Y)) | 0) + Math.imul(C, G)) | 0),
            (o = (o + Math.imul(C, Y)) | 0),
            (a = (a + Math.imul(I, $)) | 0),
            (i = ((i = (i + Math.imul(I, ee)) | 0) + Math.imul(q, $)) | 0),
            (o = (o + Math.imul(q, ee)) | 0),
            (a = (a + Math.imul(A, re)) | 0),
            (i = ((i = (i + Math.imul(A, ae)) | 0) + Math.imul(S, re)) | 0),
            (o = (o + Math.imul(S, ae)) | 0),
            (a = (a + Math.imul(_, oe)) | 0),
            (i = ((i = (i + Math.imul(_, ne)) | 0) + Math.imul(z, oe)) | 0),
            (o = (o + Math.imul(z, ne)) | 0),
            (a = (a + Math.imul(w, ce)) | 0),
            (i = ((i = (i + Math.imul(w, fe)) | 0) + Math.imul(k, ce)) | 0),
            (o = (o + Math.imul(k, fe)) | 0),
            (a = (a + Math.imul(v, ue)) | 0),
            (i = ((i = (i + Math.imul(v, he)) | 0) + Math.imul(g, ue)) | 0),
            (o = (o + Math.imul(g, he)) | 0);
          var Ae =
            (((f + (a = (a + Math.imul(p, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, be)) | 0) + Math.imul(b, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(b, be)) | 0) + (i >>> 13)) | 0) +
              (Ae >>> 26)) |
            0),
            (Ae &= 67108863),
            (a = Math.imul(L, V)),
            (i = ((i = Math.imul(L, X)) + Math.imul(D, V)) | 0),
            (o = Math.imul(D, X)),
            (a = (a + Math.imul(P, G)) | 0),
            (i = ((i = (i + Math.imul(P, Y)) | 0) + Math.imul(N, G)) | 0),
            (o = (o + Math.imul(N, Y)) | 0),
            (a = (a + Math.imul(B, $)) | 0),
            (i = ((i = (i + Math.imul(B, ee)) | 0) + Math.imul(C, $)) | 0),
            (o = (o + Math.imul(C, ee)) | 0),
            (a = (a + Math.imul(I, re)) | 0),
            (i = ((i = (i + Math.imul(I, ae)) | 0) + Math.imul(q, re)) | 0),
            (o = (o + Math.imul(q, ae)) | 0),
            (a = (a + Math.imul(A, oe)) | 0),
            (i = ((i = (i + Math.imul(A, ne)) | 0) + Math.imul(S, oe)) | 0),
            (o = (o + Math.imul(S, ne)) | 0),
            (a = (a + Math.imul(_, ce)) | 0),
            (i = ((i = (i + Math.imul(_, fe)) | 0) + Math.imul(z, ce)) | 0),
            (o = (o + Math.imul(z, fe)) | 0),
            (a = (a + Math.imul(w, ue)) | 0),
            (i = ((i = (i + Math.imul(w, he)) | 0) + Math.imul(k, ue)) | 0),
            (o = (o + Math.imul(k, he)) | 0);
          var Se =
            (((f + (a = (a + Math.imul(v, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(v, be)) | 0) + Math.imul(g, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(g, be)) | 0) + (i >>> 13)) | 0) +
              (Se >>> 26)) |
            0),
            (Se &= 67108863),
            (a = Math.imul(L, G)),
            (i = ((i = Math.imul(L, Y)) + Math.imul(D, G)) | 0),
            (o = Math.imul(D, Y)),
            (a = (a + Math.imul(P, $)) | 0),
            (i = ((i = (i + Math.imul(P, ee)) | 0) + Math.imul(N, $)) | 0),
            (o = (o + Math.imul(N, ee)) | 0),
            (a = (a + Math.imul(B, re)) | 0),
            (i = ((i = (i + Math.imul(B, ae)) | 0) + Math.imul(C, re)) | 0),
            (o = (o + Math.imul(C, ae)) | 0),
            (a = (a + Math.imul(I, oe)) | 0),
            (i = ((i = (i + Math.imul(I, ne)) | 0) + Math.imul(q, oe)) | 0),
            (o = (o + Math.imul(q, ne)) | 0),
            (a = (a + Math.imul(A, ce)) | 0),
            (i = ((i = (i + Math.imul(A, fe)) | 0) + Math.imul(S, ce)) | 0),
            (o = (o + Math.imul(S, fe)) | 0),
            (a = (a + Math.imul(_, ue)) | 0),
            (i = ((i = (i + Math.imul(_, he)) | 0) + Math.imul(z, ue)) | 0),
            (o = (o + Math.imul(z, he)) | 0);
          var je =
            (((f + (a = (a + Math.imul(w, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, be)) | 0) + Math.imul(k, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(k, be)) | 0) + (i >>> 13)) | 0) +
              (je >>> 26)) |
            0),
            (je &= 67108863),
            (a = Math.imul(L, $)),
            (i = ((i = Math.imul(L, ee)) + Math.imul(D, $)) | 0),
            (o = Math.imul(D, ee)),
            (a = (a + Math.imul(P, re)) | 0),
            (i = ((i = (i + Math.imul(P, ae)) | 0) + Math.imul(N, re)) | 0),
            (o = (o + Math.imul(N, ae)) | 0),
            (a = (a + Math.imul(B, oe)) | 0),
            (i = ((i = (i + Math.imul(B, ne)) | 0) + Math.imul(C, oe)) | 0),
            (o = (o + Math.imul(C, ne)) | 0),
            (a = (a + Math.imul(I, ce)) | 0),
            (i = ((i = (i + Math.imul(I, fe)) | 0) + Math.imul(q, ce)) | 0),
            (o = (o + Math.imul(q, fe)) | 0),
            (a = (a + Math.imul(A, ue)) | 0),
            (i = ((i = (i + Math.imul(A, he)) | 0) + Math.imul(S, ue)) | 0),
            (o = (o + Math.imul(S, he)) | 0);
          var Ie =
            (((f + (a = (a + Math.imul(_, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(_, be)) | 0) + Math.imul(z, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(z, be)) | 0) + (i >>> 13)) | 0) +
              (Ie >>> 26)) |
            0),
            (Ie &= 67108863),
            (a = Math.imul(L, re)),
            (i = ((i = Math.imul(L, ae)) + Math.imul(D, re)) | 0),
            (o = Math.imul(D, ae)),
            (a = (a + Math.imul(P, oe)) | 0),
            (i = ((i = (i + Math.imul(P, ne)) | 0) + Math.imul(N, oe)) | 0),
            (o = (o + Math.imul(N, ne)) | 0),
            (a = (a + Math.imul(B, ce)) | 0),
            (i = ((i = (i + Math.imul(B, fe)) | 0) + Math.imul(C, ce)) | 0),
            (o = (o + Math.imul(C, fe)) | 0),
            (a = (a + Math.imul(I, ue)) | 0),
            (i = ((i = (i + Math.imul(I, he)) | 0) + Math.imul(q, ue)) | 0),
            (o = (o + Math.imul(q, he)) | 0);
          var qe =
            (((f + (a = (a + Math.imul(A, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(A, be)) | 0) + Math.imul(S, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(S, be)) | 0) + (i >>> 13)) | 0) +
              (qe >>> 26)) |
            0),
            (qe &= 67108863),
            (a = Math.imul(L, oe)),
            (i = ((i = Math.imul(L, ne)) + Math.imul(D, oe)) | 0),
            (o = Math.imul(D, ne)),
            (a = (a + Math.imul(P, ce)) | 0),
            (i = ((i = (i + Math.imul(P, fe)) | 0) + Math.imul(N, ce)) | 0),
            (o = (o + Math.imul(N, fe)) | 0),
            (a = (a + Math.imul(B, ue)) | 0),
            (i = ((i = (i + Math.imul(B, he)) | 0) + Math.imul(C, ue)) | 0),
            (o = (o + Math.imul(C, he)) | 0);
          var Ee =
            (((f + (a = (a + Math.imul(I, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(I, be)) | 0) + Math.imul(q, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(q, be)) | 0) + (i >>> 13)) | 0) +
              (Ee >>> 26)) |
            0),
            (Ee &= 67108863),
            (a = Math.imul(L, ce)),
            (i = ((i = Math.imul(L, fe)) + Math.imul(D, ce)) | 0),
            (o = Math.imul(D, fe)),
            (a = (a + Math.imul(P, ue)) | 0),
            (i = ((i = (i + Math.imul(P, he)) | 0) + Math.imul(N, ue)) | 0),
            (o = (o + Math.imul(N, he)) | 0);
          var Be =
            (((f + (a = (a + Math.imul(B, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(B, be)) | 0) + Math.imul(C, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(C, be)) | 0) + (i >>> 13)) | 0) +
              (Be >>> 26)) |
            0),
            (Be &= 67108863),
            (a = Math.imul(L, ue)),
            (i = ((i = Math.imul(L, he)) + Math.imul(D, ue)) | 0),
            (o = Math.imul(D, he));
          var Ce =
            (((f + (a = (a + Math.imul(P, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(P, be)) | 0) + Math.imul(N, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(N, be)) | 0) + (i >>> 13)) | 0) +
              (Ce >>> 26)) |
            0),
            (Ce &= 67108863);
          var Re =
            (((f + (a = Math.imul(L, pe))) | 0) +
              ((8191 & (i = ((i = Math.imul(L, be)) + Math.imul(D, pe)) | 0)) <<
                13)) |
            0;
          return (
            (f =
              ((((o = Math.imul(D, be)) + (i >>> 13)) | 0) + (Re >>> 26)) | 0),
            (Re &= 67108863),
            (c[0] = me),
            (c[1] = ve),
            (c[2] = ge),
            (c[3] = ye),
            (c[4] = we),
            (c[5] = ke),
            (c[6] = Me),
            (c[7] = _e),
            (c[8] = ze),
            (c[9] = xe),
            (c[10] = Ae),
            (c[11] = Se),
            (c[12] = je),
            (c[13] = Ie),
            (c[14] = qe),
            (c[15] = Ee),
            (c[16] = Be),
            (c[17] = Ce),
            (c[18] = Re),
            0 !== f && ((c[19] = f), r.length++),
            r
          );
        };
        function m(e, t, r) {
          (r.negative = t.negative ^ e.negative),
            (r.length = e.length + t.length);
          for (var a = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var n = i;
            i = 0;
            for (
              var s = 67108863 & a,
                c = Math.min(o, t.length - 1),
                f = Math.max(0, o - e.length + 1);
              f <= c;
              f++
            ) {
              var d = o - f,
                u = (0 | e.words[d]) * (0 | t.words[f]),
                h = 67108863 & u;
              (s = 67108863 & (h = (h + s) | 0)),
                (i +=
                  (n =
                    ((n = (n + ((u / 67108864) | 0)) | 0) + (h >>> 26)) | 0) >>>
                  26),
                (n &= 67108863);
            }
            (r.words[o] = s), (a = n), (n = i);
          }
          return 0 !== a ? (r.words[o] = a) : r.length--, r._strip();
        }
        function v(e, t, r) {
          return m(e, t, r);
        }
        function g(e, t) {
          (this.x = e), (this.y = t);
        }
        Math.imul || (b = p),
          (o.prototype.mulTo = function (e, t) {
            var r = this.length + e.length;
            return 10 === this.length && 10 === e.length
              ? b(this, e, t)
              : r < 63
              ? p(this, e, t)
              : r < 1024
              ? m(this, e, t)
              : v(this, e, t);
          }),
          (g.prototype.makeRBT = function (e) {
            for (
              var t = new Array(e), r = o.prototype._countBits(e) - 1, a = 0;
              a < e;
              a++
            )
              t[a] = this.revBin(a, r, e);
            return t;
          }),
          (g.prototype.revBin = function (e, t, r) {
            if (0 === e || e === r - 1) return e;
            for (var a = 0, i = 0; i < t; i++)
              (a |= (1 & e) << (t - i - 1)), (e >>= 1);
            return a;
          }),
          (g.prototype.permute = function (e, t, r, a, i, o) {
            for (var n = 0; n < o; n++) (a[n] = t[e[n]]), (i[n] = r[e[n]]);
          }),
          (g.prototype.transform = function (e, t, r, a, i, o) {
            this.permute(o, e, t, r, a, i);
            for (var n = 1; n < i; n <<= 1)
              for (
                var s = n << 1,
                  c = Math.cos((2 * Math.PI) / s),
                  f = Math.sin((2 * Math.PI) / s),
                  d = 0;
                d < i;
                d += s
              )
                for (var u = c, h = f, l = 0; l < n; l++) {
                  var p = r[d + l],
                    b = a[d + l],
                    m = r[d + l + n],
                    v = a[d + l + n],
                    g = u * m - h * v;
                  (v = u * v + h * m),
                    (m = g),
                    (r[d + l] = p + m),
                    (a[d + l] = b + v),
                    (r[d + l + n] = p - m),
                    (a[d + l + n] = b - v),
                    l !== s &&
                      ((g = c * u - f * h), (h = c * h + f * u), (u = g));
                }
          }),
          (g.prototype.guessLen13b = function (e, t) {
            var r = 1 | Math.max(t, e),
              a = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + a);
          }),
          (g.prototype.conjugate = function (e, t, r) {
            if (!(r <= 1))
              for (var a = 0; a < r / 2; a++) {
                var i = e[a];
                (e[a] = e[r - a - 1]),
                  (e[r - a - 1] = i),
                  (i = t[a]),
                  (t[a] = -t[r - a - 1]),
                  (t[r - a - 1] = -i);
              }
          }),
          (g.prototype.normalize13b = function (e, t) {
            for (var r = 0, a = 0; a < t / 2; a++) {
              var i =
                8192 * Math.round(e[2 * a + 1] / t) +
                Math.round(e[2 * a] / t) +
                r;
              (e[a] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return e;
          }),
          (g.prototype.convert13b = function (e, t, r, i) {
            for (var o = 0, n = 0; n < t; n++)
              (o += 0 | e[n]),
                (r[2 * n] = 8191 & o),
                (o >>>= 13),
                (r[2 * n + 1] = 8191 & o),
                (o >>>= 13);
            for (n = 2 * t; n < i; ++n) r[n] = 0;
            a(0 === o), a(0 == (-8192 & o));
          }),
          (g.prototype.stub = function (e) {
            for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
            return t;
          }),
          (g.prototype.mulp = function (e, t, r) {
            var a = 2 * this.guessLen13b(e.length, t.length),
              i = this.makeRBT(a),
              o = this.stub(a),
              n = new Array(a),
              s = new Array(a),
              c = new Array(a),
              f = new Array(a),
              d = new Array(a),
              u = new Array(a),
              h = r.words;
            (h.length = a),
              this.convert13b(e.words, e.length, n, a),
              this.convert13b(t.words, t.length, f, a),
              this.transform(n, o, s, c, a, i),
              this.transform(f, o, d, u, a, i);
            for (var l = 0; l < a; l++) {
              var p = s[l] * d[l] - c[l] * u[l];
              (c[l] = s[l] * u[l] + c[l] * d[l]), (s[l] = p);
            }
            return (
              this.conjugate(s, c, a),
              this.transform(s, c, h, o, a, i),
              this.conjugate(h, o, a),
              this.normalize13b(h, a),
              (r.negative = e.negative ^ t.negative),
              (r.length = e.length + t.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (e) {
            var t = new o(null);
            return (
              (t.words = new Array(this.length + e.length)), this.mulTo(e, t)
            );
          }),
          (o.prototype.mulf = function (e) {
            var t = new o(null);
            return (t.words = new Array(this.length + e.length)), v(this, e, t);
          }),
          (o.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
          }),
          (o.prototype.imuln = function (e) {
            var t = e < 0;
            t && (e = -e), a('number' == typeof e), a(e < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * e,
                n = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += (o / 67108864) | 0),
                (r += n >>> 26),
                (this.words[i] = 67108863 & n);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              t ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (e) {
            return this.clone().imuln(e);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (e) {
            var t = (function (e) {
              for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                var a = (r / 26) | 0,
                  i = r % 26;
                t[r] = (e.words[a] >>> i) & 1;
              }
              return t;
            })(e);
            if (0 === t.length) return new o(1);
            for (
              var r = this, a = 0;
              a < t.length && 0 === t[a];
              a++, r = r.sqr()
            );
            if (++a < t.length)
              for (var i = r.sqr(); a < t.length; a++, i = i.sqr())
                0 !== t[a] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (e) {
            a('number' == typeof e && e >= 0);
            var t,
              r = e % 26,
              i = (e - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var n = 0;
              for (t = 0; t < this.length; t++) {
                var s = this.words[t] & o,
                  c = ((0 | this.words[t]) - s) << r;
                (this.words[t] = c | n), (n = s >>> (26 - r));
              }
              n && ((this.words[t] = n), this.length++);
            }
            if (0 !== i) {
              for (t = this.length - 1; t >= 0; t--)
                this.words[t + i] = this.words[t];
              for (t = 0; t < i; t++) this.words[t] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (e) {
            return a(0 === this.negative), this.iushln(e);
          }),
          (o.prototype.iushrn = function (e, t, r) {
            var i;
            a('number' == typeof e && e >= 0),
              (i = t ? (t - (t % 26)) / 26 : 0);
            var o = e % 26,
              n = Math.min((e - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              c = r;
            if (((i -= n), (i = Math.max(0, i)), c)) {
              for (var f = 0; f < n; f++) c.words[f] = this.words[f];
              c.length = n;
            }
            if (0 === n);
            else if (this.length > n)
              for (this.length -= n, f = 0; f < this.length; f++)
                this.words[f] = this.words[f + n];
            else (this.words[0] = 0), (this.length = 1);
            var d = 0;
            for (f = this.length - 1; f >= 0 && (0 !== d || f >= i); f--) {
              var u = 0 | this.words[f];
              (this.words[f] = (d << (26 - o)) | (u >>> o)), (d = u & s);
            }
            return (
              c && 0 !== d && (c.words[c.length++] = d),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (e, t, r) {
            return a(0 === this.negative), this.iushrn(e, t, r);
          }),
          (o.prototype.shln = function (e) {
            return this.clone().ishln(e);
          }),
          (o.prototype.ushln = function (e) {
            return this.clone().iushln(e);
          }),
          (o.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
          }),
          (o.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
          }),
          (o.prototype.testn = function (e) {
            a('number' == typeof e && e >= 0);
            var t = e % 26,
              r = (e - t) / 26,
              i = 1 << t;
            return !(this.length <= r || !(this.words[r] & i));
          }),
          (o.prototype.imaskn = function (e) {
            a('number' == typeof e && e >= 0);
            var t = e % 26,
              r = (e - t) / 26;
            if (
              (a(
                0 === this.negative,
                'imaskn works only with positive numbers'
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== t && r++,
              (this.length = Math.min(r, this.length)),
              0 !== t)
            ) {
              var i = 67108863 ^ ((67108863 >>> t) << t);
              this.words[this.length - 1] &= i;
            }
            return this._strip();
          }),
          (o.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
          }),
          (o.prototype.iaddn = function (e) {
            return (
              a('number' == typeof e),
              a(e < 67108864),
              e < 0
                ? this.isubn(-e)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= e
                  ? ((this.words[0] = e - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(e),
                    (this.negative = 1),
                    this)
                : this._iaddn(e)
            );
          }),
          (o.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
              (this.words[t] -= 67108864),
                t === this.length - 1
                  ? (this.words[t + 1] = 1)
                  : this.words[t + 1]++;
            return (this.length = Math.max(this.length, t + 1)), this;
          }),
          (o.prototype.isubn = function (e) {
            if ((a('number' == typeof e), a(e < 67108864), e < 0))
              return this.iaddn(-e);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(e), (this.negative = 1), this
              );
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var t = 0; t < this.length && this.words[t] < 0; t++)
                (this.words[t] += 67108864), (this.words[t + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (e) {
            return this.clone().iaddn(e);
          }),
          (o.prototype.subn = function (e) {
            return this.clone().isubn(e);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (e, t, r) {
            var i,
              o,
              n = e.length + r;
            this._expand(n);
            var s = 0;
            for (i = 0; i < e.length; i++) {
              o = (0 | this.words[i + r]) + s;
              var c = (0 | e.words[i]) * t;
              (s = ((o -= 67108863 & c) >> 26) - ((c / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (s = (o = (0 | this.words[i + r]) + s) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === s) return this._strip();
            for (a(-1 === s), s = 0, i = 0; i < this.length; i++)
              (s = (o = -(0 | this.words[i]) + s) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (e, t) {
            var r = (this.length, e.length),
              a = this.clone(),
              i = e,
              n = 0 | i.words[i.length - 1];
            0 != (r = 26 - this._countBits(n)) &&
              ((i = i.ushln(r)), a.iushln(r), (n = 0 | i.words[i.length - 1]));
            var s,
              c = a.length - i.length;
            if ('mod' !== t) {
              ((s = new o(null)).length = c + 1),
                (s.words = new Array(s.length));
              for (var f = 0; f < s.length; f++) s.words[f] = 0;
            }
            var d = a.clone()._ishlnsubmul(i, 1, c);
            0 === d.negative && ((a = d), s && (s.words[c] = 1));
            for (var u = c - 1; u >= 0; u--) {
              var h =
                67108864 * (0 | a.words[i.length + u]) +
                (0 | a.words[i.length + u - 1]);
              for (
                h = Math.min((h / n) | 0, 67108863), a._ishlnsubmul(i, h, u);
                0 !== a.negative;

              )
                h--,
                  (a.negative = 0),
                  a._ishlnsubmul(i, 1, u),
                  a.isZero() || (a.negative ^= 1);
              s && (s.words[u] = h);
            }
            return (
              s && s._strip(),
              a._strip(),
              'div' !== t && 0 !== r && a.iushrn(r),
              { div: s || null, mod: a }
            );
          }),
          (o.prototype.divmod = function (e, t, r) {
            return (
              a(!e.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === e.negative
                ? ((s = this.neg().divmod(e, t)),
                  'mod' !== t && (i = s.div.neg()),
                  'div' !== t &&
                    ((n = s.mod.neg()), r && 0 !== n.negative && n.iadd(e)),
                  { div: i, mod: n })
                : 0 === this.negative && 0 !== e.negative
                ? ((s = this.divmod(e.neg(), t)),
                  'mod' !== t && (i = s.div.neg()),
                  { div: i, mod: s.mod })
                : 0 != (this.negative & e.negative)
                ? ((s = this.neg().divmod(e.neg(), t)),
                  'div' !== t &&
                    ((n = s.mod.neg()), r && 0 !== n.negative && n.isub(e)),
                  { div: s.div, mod: n })
                : e.length > this.length || this.cmp(e) < 0
                ? { div: new o(0), mod: this }
                : 1 === e.length
                ? 'div' === t
                  ? { div: this.divn(e.words[0]), mod: null }
                  : 'mod' === t
                  ? { div: null, mod: new o(this.modrn(e.words[0])) }
                  : {
                      div: this.divn(e.words[0]),
                      mod: new o(this.modrn(e.words[0]))
                    }
                : this._wordDiv(e, t)
            );
            var i, n, s;
          }),
          (o.prototype.div = function (e) {
            return this.divmod(e, 'div', !1).div;
          }),
          (o.prototype.mod = function (e) {
            return this.divmod(e, 'mod', !1).mod;
          }),
          (o.prototype.umod = function (e) {
            return this.divmod(e, 'mod', !0).mod;
          }),
          (o.prototype.divRound = function (e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
              a = e.ushrn(1),
              i = e.andln(1),
              o = r.cmp(a);
            return o < 0 || (1 === i && 0 === o)
              ? t.div
              : 0 !== t.div.negative
              ? t.div.isubn(1)
              : t.div.iaddn(1);
          }),
          (o.prototype.modrn = function (e) {
            var t = e < 0;
            t && (e = -e), a(e <= 67108863);
            for (var r = (1 << 26) % e, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % e;
            return t ? -i : i;
          }),
          (o.prototype.modn = function (e) {
            return this.modrn(e);
          }),
          (o.prototype.idivn = function (e) {
            var t = e < 0;
            t && (e = -e), a(e <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / e) | 0), (r = o % e);
            }
            return this._strip(), t ? this.ineg() : this;
          }),
          (o.prototype.divn = function (e) {
            return this.clone().idivn(e);
          }),
          (o.prototype.egcd = function (e) {
            a(0 === e.negative), a(!e.isZero());
            var t = this,
              r = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (
              var i = new o(1), n = new o(0), s = new o(0), c = new o(1), f = 0;
              t.isEven() && r.isEven();

            )
              t.iushrn(1), r.iushrn(1), ++f;
            for (var d = r.clone(), u = t.clone(); !t.isZero(); ) {
              for (
                var h = 0, l = 1;
                0 == (t.words[0] & l) && h < 26;
                ++h, l <<= 1
              );
              if (h > 0)
                for (t.iushrn(h); h-- > 0; )
                  (i.isOdd() || n.isOdd()) && (i.iadd(d), n.isub(u)),
                    i.iushrn(1),
                    n.iushrn(1);
              for (
                var p = 0, b = 1;
                0 == (r.words[0] & b) && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || c.isOdd()) && (s.iadd(d), c.isub(u)),
                    s.iushrn(1),
                    c.iushrn(1);
              t.cmp(r) >= 0
                ? (t.isub(r), i.isub(s), n.isub(c))
                : (r.isub(t), s.isub(i), c.isub(n));
            }
            return { a: s, b: c, gcd: r.iushln(f) };
          }),
          (o.prototype._invmp = function (e) {
            a(0 === e.negative), a(!e.isZero());
            var t = this,
              r = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (
              var i, n = new o(1), s = new o(0), c = r.clone();
              t.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var f = 0, d = 1;
                0 == (t.words[0] & d) && f < 26;
                ++f, d <<= 1
              );
              if (f > 0)
                for (t.iushrn(f); f-- > 0; )
                  n.isOdd() && n.iadd(c), n.iushrn(1);
              for (
                var u = 0, h = 1;
                0 == (r.words[0] & h) && u < 26;
                ++u, h <<= 1
              );
              if (u > 0)
                for (r.iushrn(u); u-- > 0; )
                  s.isOdd() && s.iadd(c), s.iushrn(1);
              t.cmp(r) >= 0 ? (t.isub(r), n.isub(s)) : (r.isub(t), s.isub(n));
            }
            return (i = 0 === t.cmpn(1) ? n : s).cmpn(0) < 0 && i.iadd(e), i;
          }),
          (o.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
              r = e.clone();
            (t.negative = 0), (r.negative = 0);
            for (var a = 0; t.isEven() && r.isEven(); a++)
              t.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; t.isEven(); ) t.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = t.cmp(r);
              if (i < 0) {
                var o = t;
                (t = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              t.isub(r);
            }
            return r.iushln(a);
          }),
          (o.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
          }),
          (o.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
          }),
          (o.prototype.andln = function (e) {
            return this.words[0] & e;
          }),
          (o.prototype.bincn = function (e) {
            a('number' == typeof e);
            var t = e % 26,
              r = (e - t) / 26,
              i = 1 << t;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, n = r; 0 !== o && n < this.length; n++) {
              var s = 0 | this.words[n];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[n] = s);
            }
            return 0 !== o && ((this.words[n] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (e) {
            var t,
              r = e < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) t = 1;
            else {
              r && (e = -e), a(e <= 67108863, 'Number is too big');
              var i = 0 | this.words[0];
              t = i === e ? 0 : i < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (o.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (o.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var a = 0 | this.words[r],
                i = 0 | e.words[r];
              if (a !== i) {
                a < i ? (t = -1) : a > i && (t = 1);
                break;
              }
            }
            return t;
          }),
          (o.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
          }),
          (o.prototype.gt = function (e) {
            return 1 === this.cmp(e);
          }),
          (o.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
          }),
          (o.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
          }),
          (o.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
          }),
          (o.prototype.lt = function (e) {
            return -1 === this.cmp(e);
          }),
          (o.prototype.lten = function (e) {
            return this.cmpn(e) <= 0;
          }),
          (o.prototype.lte = function (e) {
            return this.cmp(e) <= 0;
          }),
          (o.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
          }),
          (o.prototype.eq = function (e) {
            return 0 === this.cmp(e);
          }),
          (o.red = function (e) {
            return new x(e);
          }),
          (o.prototype.toRed = function (e) {
            return (
              a(!this.red, 'Already a number in reduction context'),
              a(0 === this.negative, 'red works only with positives'),
              e.convertTo(this)._forceRed(e)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              a(
                this.red,
                'fromRed works only with numbers in reduction context'
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (e) {
            return (this.red = e), this;
          }),
          (o.prototype.forceRed = function (e) {
            return (
              a(!this.red, 'Already a number in reduction context'),
              this._forceRed(e)
            );
          }),
          (o.prototype.redAdd = function (e) {
            return (
              a(this.red, 'redAdd works only with red numbers'),
              this.red.add(this, e)
            );
          }),
          (o.prototype.redIAdd = function (e) {
            return (
              a(this.red, 'redIAdd works only with red numbers'),
              this.red.iadd(this, e)
            );
          }),
          (o.prototype.redSub = function (e) {
            return (
              a(this.red, 'redSub works only with red numbers'),
              this.red.sub(this, e)
            );
          }),
          (o.prototype.redISub = function (e) {
            return (
              a(this.red, 'redISub works only with red numbers'),
              this.red.isub(this, e)
            );
          }),
          (o.prototype.redShl = function (e) {
            return (
              a(this.red, 'redShl works only with red numbers'),
              this.red.shl(this, e)
            );
          }),
          (o.prototype.redMul = function (e) {
            return (
              a(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, e),
              this.red.mul(this, e)
            );
          }),
          (o.prototype.redIMul = function (e) {
            return (
              a(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, e),
              this.red.imul(this, e)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              a(this.red, 'redSqr works only with red numbers'),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              a(this.red, 'redISqr works only with red numbers'),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              a(this.red, 'redSqrt works only with red numbers'),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              a(this.red, 'redInvm works only with red numbers'),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              a(this.red, 'redNeg works only with red numbers'),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (e) {
            return (
              a(this.red && !e.red, 'redPow(normalNum)'),
              this.red._verify1(this),
              this.red.pow(this, e)
            );
          });
        var y = { k256: null, p224: null, p192: null, p25519: null };
        function w(e, t) {
          (this.name = e),
            (this.p = new o(t, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function k() {
          w.call(
            this,
            'k256',
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
          );
        }
        function M() {
          w.call(
            this,
            'p224',
            'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
          );
        }
        function _() {
          w.call(
            this,
            'p192',
            'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
          );
        }
        function z() {
          w.call(
            this,
            '25519',
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
          );
        }
        function x(e) {
          if ('string' == typeof e) {
            var t = o._prime(e);
            (this.m = t.p), (this.prime = t);
          } else
            a(e.gtn(1), 'modulus must be greater than 1'),
              (this.m = e),
              (this.prime = null);
        }
        function A(e) {
          x.call(this, e),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (w.prototype._tmp = function () {
          var e = new o(null);
          return (e.words = new Array(Math.ceil(this.n / 13))), e;
        }),
          (w.prototype.ireduce = function (e) {
            var t,
              r = e;
            do {
              this.split(r, this.tmp),
                (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (t > this.n);
            var a = t < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === a
                ? ((r.words[0] = 0), (r.length = 1))
                : a > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (w.prototype.split = function (e, t) {
            e.iushrn(this.n, 0, t);
          }),
          (w.prototype.imulK = function (e) {
            return e.imul(this.k);
          }),
          i(k, w),
          (k.prototype.split = function (e, t) {
            for (var r = 4194303, a = Math.min(e.length, 9), i = 0; i < a; i++)
              t.words[i] = e.words[i];
            if (((t.length = a), e.length <= 9))
              return (e.words[0] = 0), void (e.length = 1);
            var o = e.words[9];
            for (t.words[t.length++] = o & r, i = 10; i < e.length; i++) {
              var n = 0 | e.words[i];
              (e.words[i - 10] = ((n & r) << 4) | (o >>> 22)), (o = n);
            }
            (o >>>= 22),
              (e.words[i - 10] = o),
              0 === o && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
          }),
          (k.prototype.imulK = function (e) {
            (e.words[e.length] = 0),
              (e.words[e.length + 1] = 0),
              (e.length += 2);
            for (var t = 0, r = 0; r < e.length; r++) {
              var a = 0 | e.words[r];
              (t += 977 * a),
                (e.words[r] = 67108863 & t),
                (t = 64 * a + ((t / 67108864) | 0));
            }
            return (
              0 === e.words[e.length - 1] &&
                (e.length--, 0 === e.words[e.length - 1] && e.length--),
              e
            );
          }),
          i(M, w),
          i(_, w),
          i(z, w),
          (z.prototype.imulK = function (e) {
            for (var t = 0, r = 0; r < e.length; r++) {
              var a = 19 * (0 | e.words[r]) + t,
                i = 67108863 & a;
              (a >>>= 26), (e.words[r] = i), (t = a);
            }
            return 0 !== t && (e.words[e.length++] = t), e;
          }),
          (o._prime = function (e) {
            if (y[e]) return y[e];
            var t;
            if ('k256' === e) t = new k();
            else if ('p224' === e) t = new M();
            else if ('p192' === e) t = new _();
            else {
              if ('p25519' !== e) throw new Error('Unknown prime ' + e);
              t = new z();
            }
            return (y[e] = t), t;
          }),
          (x.prototype._verify1 = function (e) {
            a(0 === e.negative, 'red works only with positives'),
              a(e.red, 'red works only with red numbers');
          }),
          (x.prototype._verify2 = function (e, t) {
            a(0 == (e.negative | t.negative), 'red works only with positives'),
              a(e.red && e.red === t.red, 'red works only with red numbers');
          }),
          (x.prototype.imod = function (e) {
            return this.prime
              ? this.prime.ireduce(e)._forceRed(this)
              : (f(e, e.umod(this.m)._forceRed(this)), e);
          }),
          (x.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
          }),
          (x.prototype.add = function (e, t) {
            this._verify2(e, t);
            var r = e.add(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (x.prototype.iadd = function (e, t) {
            this._verify2(e, t);
            var r = e.iadd(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (x.prototype.sub = function (e, t) {
            this._verify2(e, t);
            var r = e.sub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (x.prototype.isub = function (e, t) {
            this._verify2(e, t);
            var r = e.isub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (x.prototype.shl = function (e, t) {
            return this._verify1(e), this.imod(e.ushln(t));
          }),
          (x.prototype.imul = function (e, t) {
            return this._verify2(e, t), this.imod(e.imul(t));
          }),
          (x.prototype.mul = function (e, t) {
            return this._verify2(e, t), this.imod(e.mul(t));
          }),
          (x.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
          }),
          (x.prototype.sqr = function (e) {
            return this.mul(e, e);
          }),
          (x.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if ((a(t % 2 == 1), 3 === t)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(e, r);
            }
            for (
              var i = this.m.subn(1), n = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              n++, i.iushrn(1);
            a(!i.isZero());
            var s = new o(1).toRed(this),
              c = s.redNeg(),
              f = this.m.subn(1).iushrn(1),
              d = this.m.bitLength();
            for (
              d = new o(2 * d * d).toRed(this);
              0 !== this.pow(d, f).cmp(c);

            )
              d.redIAdd(c);
            for (
              var u = this.pow(d, i),
                h = this.pow(e, i.addn(1).iushrn(1)),
                l = this.pow(e, i),
                p = n;
              0 !== l.cmp(s);

            ) {
              for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
              a(m < p);
              var v = this.pow(u, new o(1).iushln(p - m - 1));
              (h = h.redMul(v)), (u = v.redSqr()), (l = l.redMul(u)), (p = m);
            }
            return h;
          }),
          (x.prototype.invm = function (e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative
              ? ((t.negative = 0), this.imod(t).redNeg())
              : this.imod(t);
          }),
          (x.prototype.pow = function (e, t) {
            if (t.isZero()) return new o(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = e);
            for (var a = 2; a < r.length; a++) r[a] = this.mul(r[a - 1], e);
            var i = r[0],
              n = 0,
              s = 0,
              c = t.bitLength() % 26;
            for (0 === c && (c = 26), a = t.length - 1; a >= 0; a--) {
              for (var f = t.words[a], d = c - 1; d >= 0; d--) {
                var u = (f >> d) & 1;
                i !== r[0] && (i = this.sqr(i)),
                  0 !== u || 0 !== n
                    ? ((n <<= 1),
                      (n |= u),
                      (4 == ++s || (0 === a && 0 === d)) &&
                        ((i = this.mul(i, r[n])), (s = 0), (n = 0)))
                    : (s = 0);
              }
              c = 26;
            }
            return i;
          }),
          (x.prototype.convertTo = function (e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t;
          }),
          (x.prototype.convertFrom = function (e) {
            var t = e.clone();
            return (t.red = null), t;
          }),
          (o.mont = function (e) {
            return new A(e);
          }),
          i(A, x),
          (A.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
          }),
          (A.prototype.convertFrom = function (e) {
            var t = this.imod(e.mul(this.rinv));
            return (t.red = null), t;
          }),
          (A.prototype.imul = function (e, t) {
            if (e.isZero() || t.isZero())
              return (e.words[0] = 0), (e.length = 1), e;
            var r = e.imul(t),
              a = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(a).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (A.prototype.mul = function (e, t) {
            if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
            var r = e.mul(t),
              a = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(a).iushrn(this.shift),
              n = i;
            return (
              i.cmp(this.m) >= 0
                ? (n = i.isub(this.m))
                : i.cmpn(0) < 0 && (n = i.iadd(this.m)),
              n._forceRed(this)
            );
          }),
          (A.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((e = r.nmd(e)), this);
    },
    49419: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      const a = {};
      let i;
      (t.wordlists = a), (t._default = i);
      try {
        (t._default = i = r(8934)), (a.czech = i);
      } catch (e) {}
      try {
        (t._default = i = r(43386)), (a.chinese_simplified = i);
      } catch (e) {}
      try {
        (t._default = i = r(34253)), (a.chinese_traditional = i);
      } catch (e) {}
      try {
        (t._default = i = r(13517)), (a.korean = i);
      } catch (e) {}
      try {
        (t._default = i = r(51354)), (a.french = i);
      } catch (e) {}
      try {
        (t._default = i = r(83515)), (a.italian = i);
      } catch (e) {}
      try {
        (t._default = i = r(5043)), (a.spanish = i);
      } catch (e) {}
      try {
        (t._default = i = r(884)), (a.japanese = i), (a.JA = i);
      } catch (e) {}
      try {
        (t._default = i = r(71066)), (a.english = i), (a.EN = i);
      } catch (e) {}
    },
    36832: (e, t, r) => {
      'use strict';
      var a = r(48834).Buffer;
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = r(16162),
        o = r(30499),
        n = r(95003),
        s = r(49419);
      let c = s._default;
      const f = 'Invalid mnemonic',
        d = 'Invalid entropy',
        u =
          'A wordlist is required but a default could not be found.\nPlease explicitly pass a 2048 word array explicitly.';
      function h(e) {
        return (e || '').normalize('NFKD');
      }
      function l(e, t, r) {
        for (; e.length < r; ) e = t + e;
        return e;
      }
      function p(e) {
        return parseInt(e, 2);
      }
      function b(e) {
        return e.map((e) => l(e.toString(2), '0', 8)).join('');
      }
      function m(e) {
        const t = (8 * e.length) / 32,
          r = i('sha256').update(e).digest();
        return b(Array.from(r)).slice(0, t);
      }
      function v(e) {
        return 'mnemonic' + (e || '');
      }
      function g(e, t) {
        if (!(t = t || c)) throw new Error(u);
        const r = h(e).split(' ');
        if (r.length % 3 != 0) throw new Error(f);
        const i = r
            .map((e) => {
              const r = t.indexOf(e);
              if (-1 === r) throw new Error(f);
              return l(r.toString(2), '0', 11);
            })
            .join(''),
          o = 32 * Math.floor(i.length / 33),
          n = i.slice(0, o),
          s = i.slice(o),
          b = n.match(/(.{1,8})/g).map(p);
        if (b.length < 16) throw new Error(d);
        if (b.length > 32) throw new Error(d);
        if (b.length % 4 != 0) throw new Error(d);
        const v = a.from(b);
        if (m(v) !== s) throw new Error('Invalid mnemonic checksum');
        return v.toString('hex');
      }
      function y(e, t) {
        if ((a.isBuffer(e) || (e = a.from(e, 'hex')), !(t = t || c)))
          throw new Error(u);
        if (e.length < 16) throw new TypeError(d);
        if (e.length > 32) throw new TypeError(d);
        if (e.length % 4 != 0) throw new TypeError(d);
        const r = (b(Array.from(e)) + m(e)).match(/(.{1,11})/g).map((e) => {
          const r = p(e);
          return t[r];
        });
        return 'あいこくしん' === t[0] ? r.join('　') : r.join(' ');
      }
      (t.mnemonicToSeedSync = function (e, t) {
        const r = a.from(h(e), 'utf8'),
          i = a.from(v(h(t)), 'utf8');
        return o.pbkdf2Sync(r, i, 2048, 64, 'sha512');
      }),
        (t.mnemonicToSeed = function (e, t) {
          return Promise.resolve().then(() =>
            (function (e, t, r, a, i) {
              return Promise.resolve().then(
                () =>
                  new Promise((r, a) => {
                    o.pbkdf2(e, t, 2048, 64, 'sha512', (e, t) =>
                      e ? a(e) : r(t)
                    );
                  })
              );
            })(a.from(h(e), 'utf8'), a.from(v(h(t)), 'utf8'))
          );
        }),
        (t.mnemonicToEntropy = g),
        (t.entropyToMnemonic = y),
        (t.generateMnemonic = function (e, t, r) {
          if ((e = e || 128) % 32 != 0) throw new TypeError(d);
          return y((t = t || n)(e / 8), r);
        }),
        (t.validateMnemonic = function (e, t) {
          try {
            g(e, t);
          } catch (e) {
            return !1;
          }
          return !0;
        }),
        (t.setDefaultWordlist = function (e) {
          const t = s.wordlists[e];
          if (!t)
            throw new Error('Could not find wordlist for language "' + e + '"');
          c = t;
        }),
        (t.getDefaultWordlist = function () {
          if (!c) throw new Error('No Default Wordlist set');
          return Object.keys(s.wordlists).filter(
            (e) =>
              'JA' !== e &&
              'EN' !== e &&
              s.wordlists[e].every((e, t) => e === c[t])
          )[0];
        });
      var w = r(49419);
      t.wordlists = w.wordlists;
    },
    43386: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '["的","一","是","在","不","了","有","和","人","这","中","大","为","上","个","国","我","以","要","他","时","来","用","们","生","到","作","地","于","出","就","分","对","成","会","可","主","发","年","动","同","工","也","能","下","过","子","说","产","种","面","而","方","后","多","定","行","学","法","所","民","得","经","十","三","之","进","着","等","部","度","家","电","力","里","如","水","化","高","自","二","理","起","小","物","现","实","加","量","都","两","体","制","机","当","使","点","从","业","本","去","把","性","好","应","开","它","合","还","因","由","其","些","然","前","外","天","政","四","日","那","社","义","事","平","形","相","全","表","间","样","与","关","各","重","新","线","内","数","正","心","反","你","明","看","原","又","么","利","比","或","但","质","气","第","向","道","命","此","变","条","只","没","结","解","问","意","建","月","公","无","系","军","很","情","者","最","立","代","想","已","通","并","提","直","题","党","程","展","五","果","料","象","员","革","位","入","常","文","总","次","品","式","活","设","及","管","特","件","长","求","老","头","基","资","边","流","路","级","少","图","山","统","接","知","较","将","组","见","计","别","她","手","角","期","根","论","运","农","指","几","九","区","强","放","决","西","被","干","做","必","战","先","回","则","任","取","据","处","队","南","给","色","光","门","即","保","治","北","造","百","规","热","领","七","海","口","东","导","器","压","志","世","金","增","争","济","阶","油","思","术","极","交","受","联","什","认","六","共","权","收","证","改","清","美","再","采","转","更","单","风","切","打","白","教","速","花","带","安","场","身","车","例","真","务","具","万","每","目","至","达","走","积","示","议","声","报","斗","完","类","八","离","华","名","确","才","科","张","信","马","节","话","米","整","空","元","况","今","集","温","传","土","许","步","群","广","石","记","需","段","研","界","拉","林","律","叫","且","究","观","越","织","装","影","算","低","持","音","众","书","布","复","容","儿","须","际","商","非","验","连","断","深","难","近","矿","千","周","委","素","技","备","半","办","青","省","列","习","响","约","支","般","史","感","劳","便","团","往","酸","历","市","克","何","除","消","构","府","称","太","准","精","值","号","率","族","维","划","选","标","写","存","候","毛","亲","快","效","斯","院","查","江","型","眼","王","按","格","养","易","置","派","层","片","始","却","专","状","育","厂","京","识","适","属","圆","包","火","住","调","满","县","局","照","参","红","细","引","听","该","铁","价","严","首","底","液","官","德","随","病","苏","失","尔","死","讲","配","女","黄","推","显","谈","罪","神","艺","呢","席","含","企","望","密","批","营","项","防","举","球","英","氧","势","告","李","台","落","木","帮","轮","破","亚","师","围","注","远","字","材","排","供","河","态","封","另","施","减","树","溶","怎","止","案","言","士","均","武","固","叶","鱼","波","视","仅","费","紧","爱","左","章","早","朝","害","续","轻","服","试","食","充","兵","源","判","护","司","足","某","练","差","致","板","田","降","黑","犯","负","击","范","继","兴","似","余","坚","曲","输","修","故","城","夫","够","送","笔","船","占","右","财","吃","富","春","职","觉","汉","画","功","巴","跟","虽","杂","飞","检","吸","助","升","阳","互","初","创","抗","考","投","坏","策","古","径","换","未","跑","留","钢","曾","端","责","站","简","述","钱","副","尽","帝","射","草","冲","承","独","令","限","阿","宣","环","双","请","超","微","让","控","州","良","轴","找","否","纪","益","依","优","顶","础","载","倒","房","突","坐","粉","敌","略","客","袁","冷","胜","绝","析","块","剂","测","丝","协","诉","念","陈","仍","罗","盐","友","洋","错","苦","夜","刑","移","频","逐","靠","混","母","短","皮","终","聚","汽","村","云","哪","既","距","卫","停","烈","央","察","烧","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","游","久","菜","味","旧","模","湖","货","损","预","阻","毫","普","稳","乙","妈","植","息","扩","银","语","挥","酒","守","拿","序","纸","医","缺","雨","吗","针","刘","啊","急","唱","误","训","愿","审","附","获","茶","鲜","粮","斤","孩","脱","硫","肥","善","龙","演","父","渐","血","欢","械","掌","歌","沙","刚","攻","谓","盾","讨","晚","粒","乱","燃","矛","乎","杀","药","宁","鲁","贵","钟","煤","读","班","伯","香","介","迫","句","丰","培","握","兰","担","弦","蛋","沉","假","穿","执","答","乐","谁","顺","烟","缩","征","脸","喜","松","脚","困","异","免","背","星","福","买","染","井","概","慢","怕","磁","倍","祖","皇","促","静","补","评","翻","肉","践","尼","衣","宽","扬","棉","希","伤","操","垂","秋","宜","氢","套","督","振","架","亮","末","宪","庆","编","牛","触","映","雷","销","诗","座","居","抓","裂","胞","呼","娘","景","威","绿","晶","厚","盟","衡","鸡","孙","延","危","胶","屋","乡","临","陆","顾","掉","呀","灯","岁","措","束","耐","剧","玉","赵","跳","哥","季","课","凯","胡","额","款","绍","卷","齐","伟","蒸","殖","永","宗","苗","川","炉","岩","弱","零","杨","奏","沿","露","杆","探","滑","镇","饭","浓","航","怀","赶","库","夺","伊","灵","税","途","灭","赛","归","召","鼓","播","盘","裁","险","康","唯","录","菌","纯","借","糖","盖","横","符","私","努","堂","域","枪","润","幅","哈","竟","熟","虫","泽","脑","壤","碳","欧","遍","侧","寨","敢","彻","虑","斜","薄","庭","纳","弹","饲","伸","折","麦","湿","暗","荷","瓦","塞","床","筑","恶","户","访","塔","奇","透","梁","刀","旋","迹","卡","氯","遇","份","毒","泥","退","洗","摆","灰","彩","卖","耗","夏","择","忙","铜","献","硬","予","繁","圈","雪","函","亦","抽","篇","阵","阴","丁","尺","追","堆","雄","迎","泛","爸","楼","避","谋","吨","野","猪","旗","累","偏","典","馆","索","秦","脂","潮","爷","豆","忽","托","惊","塑","遗","愈","朱","替","纤","粗","倾","尚","痛","楚","谢","奋","购","磨","君","池","旁","碎","骨","监","捕","弟","暴","割","贯","殊","释","词","亡","壁","顿","宝","午","尘","闻","揭","炮","残","冬","桥","妇","警","综","招","吴","付","浮","遭","徐","您","摇","谷","赞","箱","隔","订","男","吹","园","纷","唐","败","宋","玻","巨","耕","坦","荣","闭","湾","键","凡","驻","锅","救","恩","剥","凝","碱","齿","截","炼","麻","纺","禁","废","盛","版","缓","净","睛","昌","婚","涉","筒","嘴","插","岸","朗","庄","街","藏","姑","贸","腐","奴","啦","惯","乘","伙","恢","匀","纱","扎","辩","耳","彪","臣","亿","璃","抵","脉","秀","萨","俄","网","舞","店","喷","纵","寸","汗","挂","洪","贺","闪","柬","爆","烯","津","稻","墙","软","勇","像","滚","厘","蒙","芳","肯","坡","柱","荡","腿","仪","旅","尾","轧","冰","贡","登","黎","削","钻","勒","逃","障","氨","郭","峰","币","港","伏","轨","亩","毕","擦","莫","刺","浪","秘","援","株","健","售","股","岛","甘","泡","睡","童","铸","汤","阀","休","汇","舍","牧","绕","炸","哲","磷","绩","朋","淡","尖","启","陷","柴","呈","徒","颜","泪","稍","忘","泵","蓝","拖","洞","授","镜","辛","壮","锋","贫","虚","弯","摩","泰","幼","廷","尊","窗","纲","弄","隶","疑","氏","宫","姐","震","瑞","怪","尤","琴","循","描","膜","违","夹","腰","缘","珠","穷","森","枝","竹","沟","催","绳","忆","邦","剩","幸","浆","栏","拥","牙","贮","礼","滤","钠","纹","罢","拍","咱","喊","袖","埃","勤","罚","焦","潜","伍","墨","欲","缝","姓","刊","饱","仿","奖","铝","鬼","丽","跨","默","挖","链","扫","喝","袋","炭","污","幕","诸","弧","励","梅","奶","洁","灾","舟","鉴","苯","讼","抱","毁","懂","寒","智","埔","寄","届","跃","渡","挑","丹","艰","贝","碰","拔","爹","戴","码","梦","芽","熔","赤","渔","哭","敬","颗","奔","铅","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","仓","魏","锐","晓","氮","兼","隐","碍","赫","拨","忠","肃","缸","牵","抢","博","巧","壳","兄","杜","讯","诚","碧","祥","柯","页","巡","矩","悲","灌","龄","伦","票","寻","桂","铺","圣","恐","恰","郑","趣","抬","荒","腾","贴","柔","滴","猛","阔","辆","妻","填","撤","储","签","闹","扰","紫","砂","递","戏","吊","陶","伐","喂","疗","瓶","婆","抚","臂","摸","忍","虾","蜡","邻","胸","巩","挤","偶","弃","槽","劲","乳","邓","吉","仁","烂","砖","租","乌","舰","伴","瓜","浅","丙","暂","燥","橡","柳","迷","暖","牌","秧","胆","详","簧","踏","瓷","谱","呆","宾","糊","洛","辉","愤","竞","隙","怒","粘","乃","绪","肩","籍","敏","涂","熙","皆","侦","悬","掘","享","纠","醒","狂","锁","淀","恨","牲","霸","爬","赏","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鸭","趋","凤","晨","畜","辈","秩","卵","署","梯","炎","滩","棋","驱","筛","峡","冒","啥","寿","译","浸","泉","帽","迟","硅","疆","贷","漏","稿","冠","嫩","胁","芯","牢","叛","蚀","奥","鸣","岭","羊","凭","串","塘","绘","酵","融","盆","锡","庙","筹","冻","辅","摄","袭","筋","拒","僚","旱","钾","鸟","漆","沈","眉","疏","添","棒","穗","硝","韩","逼","扭","侨","凉","挺","碗","栽","炒","杯","患","馏","劝","豪","辽","勃","鸿","旦","吏","拜","狗","埋","辊","掩","饮","搬","骂","辞","勾","扣","估","蒋","绒","雾","丈","朵","姆","拟","宇","辑","陕","雕","偿","蓄","崇","剪","倡","厅","咬","驶","薯","刷","斥","番","赋","奉","佛","浇","漫","曼","扇","钙","桃","扶","仔","返","俗","亏","腔","鞋","棱","覆","框","悄","叔","撞","骗","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","胀","谐","抛","霉","桑","岗","嘛","衰","盗","渗","脏","赖","涌","甜","曹","阅","肌","哩","厉","烃","纬","毅","昨","伪","症","煮","叹","钉","搭","茎","笼","酷","偷","弓","锥","恒","杰","坑","鼻","翼","纶","叙","狱","逮","罐","络","棚","抑","膨","蔬","寺","骤","穆","冶","枯","册","尸","凸","绅","坯","牺","焰","轰","欣","晋","瘦","御","锭","锦","丧","旬","锻","垄","搜","扑","邀","亭","酯","迈","舒","脆","酶","闲","忧","酚","顽","羽","涨","卸","仗","陪","辟","惩","杭","姚","肚","捉","飘","漂","昆","欺","吾","郎","烷","汁","呵","饰","萧","雅","邮","迁","燕","撒","姻","赴","宴","烦","债","帐","斑","铃","旨","醇","董","饼","雏","姿","拌","傅","腹","妥","揉","贤","拆","歪","葡","胺","丢","浩","徽","昂","垫","挡","览","贪","慰","缴","汪","慌","冯","诺","姜","谊","凶","劣","诬","耀","昏","躺","盈","骑","乔","溪","丛","卢","抹","闷","咨","刮","驾","缆","悟","摘","铒","掷","颇","幻","柄","惠","惨","佳","仇","腊","窝","涤","剑","瞧","堡","泼","葱","罩","霍","捞","胎","苍","滨","俩","捅","湘","砍","霞","邵","萄","疯","淮","遂","熊","粪","烘","宿","档","戈","驳","嫂","裕","徙","箭","捐","肠","撑","晒","辨","殿","莲","摊","搅","酱","屏","疫","哀","蔡","堵","沫","皱","畅","叠","阁","莱","敲","辖","钩","痕","坝","巷","饿","祸","丘","玄","溜","曰","逻","彭","尝","卿","妨","艇","吞","韦","怨","矮","歇"]'
      );
    },
    34253: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '["的","一","是","在","不","了","有","和","人","這","中","大","為","上","個","國","我","以","要","他","時","來","用","們","生","到","作","地","於","出","就","分","對","成","會","可","主","發","年","動","同","工","也","能","下","過","子","說","產","種","面","而","方","後","多","定","行","學","法","所","民","得","經","十","三","之","進","著","等","部","度","家","電","力","裡","如","水","化","高","自","二","理","起","小","物","現","實","加","量","都","兩","體","制","機","當","使","點","從","業","本","去","把","性","好","應","開","它","合","還","因","由","其","些","然","前","外","天","政","四","日","那","社","義","事","平","形","相","全","表","間","樣","與","關","各","重","新","線","內","數","正","心","反","你","明","看","原","又","麼","利","比","或","但","質","氣","第","向","道","命","此","變","條","只","沒","結","解","問","意","建","月","公","無","系","軍","很","情","者","最","立","代","想","已","通","並","提","直","題","黨","程","展","五","果","料","象","員","革","位","入","常","文","總","次","品","式","活","設","及","管","特","件","長","求","老","頭","基","資","邊","流","路","級","少","圖","山","統","接","知","較","將","組","見","計","別","她","手","角","期","根","論","運","農","指","幾","九","區","強","放","決","西","被","幹","做","必","戰","先","回","則","任","取","據","處","隊","南","給","色","光","門","即","保","治","北","造","百","規","熱","領","七","海","口","東","導","器","壓","志","世","金","增","爭","濟","階","油","思","術","極","交","受","聯","什","認","六","共","權","收","證","改","清","美","再","採","轉","更","單","風","切","打","白","教","速","花","帶","安","場","身","車","例","真","務","具","萬","每","目","至","達","走","積","示","議","聲","報","鬥","完","類","八","離","華","名","確","才","科","張","信","馬","節","話","米","整","空","元","況","今","集","溫","傳","土","許","步","群","廣","石","記","需","段","研","界","拉","林","律","叫","且","究","觀","越","織","裝","影","算","低","持","音","眾","書","布","复","容","兒","須","際","商","非","驗","連","斷","深","難","近","礦","千","週","委","素","技","備","半","辦","青","省","列","習","響","約","支","般","史","感","勞","便","團","往","酸","歷","市","克","何","除","消","構","府","稱","太","準","精","值","號","率","族","維","劃","選","標","寫","存","候","毛","親","快","效","斯","院","查","江","型","眼","王","按","格","養","易","置","派","層","片","始","卻","專","狀","育","廠","京","識","適","屬","圓","包","火","住","調","滿","縣","局","照","參","紅","細","引","聽","該","鐵","價","嚴","首","底","液","官","德","隨","病","蘇","失","爾","死","講","配","女","黃","推","顯","談","罪","神","藝","呢","席","含","企","望","密","批","營","項","防","舉","球","英","氧","勢","告","李","台","落","木","幫","輪","破","亞","師","圍","注","遠","字","材","排","供","河","態","封","另","施","減","樹","溶","怎","止","案","言","士","均","武","固","葉","魚","波","視","僅","費","緊","愛","左","章","早","朝","害","續","輕","服","試","食","充","兵","源","判","護","司","足","某","練","差","致","板","田","降","黑","犯","負","擊","范","繼","興","似","餘","堅","曲","輸","修","故","城","夫","夠","送","筆","船","佔","右","財","吃","富","春","職","覺","漢","畫","功","巴","跟","雖","雜","飛","檢","吸","助","昇","陽","互","初","創","抗","考","投","壞","策","古","徑","換","未","跑","留","鋼","曾","端","責","站","簡","述","錢","副","盡","帝","射","草","衝","承","獨","令","限","阿","宣","環","雙","請","超","微","讓","控","州","良","軸","找","否","紀","益","依","優","頂","礎","載","倒","房","突","坐","粉","敵","略","客","袁","冷","勝","絕","析","塊","劑","測","絲","協","訴","念","陳","仍","羅","鹽","友","洋","錯","苦","夜","刑","移","頻","逐","靠","混","母","短","皮","終","聚","汽","村","雲","哪","既","距","衛","停","烈","央","察","燒","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","遊","久","菜","味","舊","模","湖","貨","損","預","阻","毫","普","穩","乙","媽","植","息","擴","銀","語","揮","酒","守","拿","序","紙","醫","缺","雨","嗎","針","劉","啊","急","唱","誤","訓","願","審","附","獲","茶","鮮","糧","斤","孩","脫","硫","肥","善","龍","演","父","漸","血","歡","械","掌","歌","沙","剛","攻","謂","盾","討","晚","粒","亂","燃","矛","乎","殺","藥","寧","魯","貴","鐘","煤","讀","班","伯","香","介","迫","句","豐","培","握","蘭","擔","弦","蛋","沉","假","穿","執","答","樂","誰","順","煙","縮","徵","臉","喜","松","腳","困","異","免","背","星","福","買","染","井","概","慢","怕","磁","倍","祖","皇","促","靜","補","評","翻","肉","踐","尼","衣","寬","揚","棉","希","傷","操","垂","秋","宜","氫","套","督","振","架","亮","末","憲","慶","編","牛","觸","映","雷","銷","詩","座","居","抓","裂","胞","呼","娘","景","威","綠","晶","厚","盟","衡","雞","孫","延","危","膠","屋","鄉","臨","陸","顧","掉","呀","燈","歲","措","束","耐","劇","玉","趙","跳","哥","季","課","凱","胡","額","款","紹","卷","齊","偉","蒸","殖","永","宗","苗","川","爐","岩","弱","零","楊","奏","沿","露","桿","探","滑","鎮","飯","濃","航","懷","趕","庫","奪","伊","靈","稅","途","滅","賽","歸","召","鼓","播","盤","裁","險","康","唯","錄","菌","純","借","糖","蓋","橫","符","私","努","堂","域","槍","潤","幅","哈","竟","熟","蟲","澤","腦","壤","碳","歐","遍","側","寨","敢","徹","慮","斜","薄","庭","納","彈","飼","伸","折","麥","濕","暗","荷","瓦","塞","床","築","惡","戶","訪","塔","奇","透","梁","刀","旋","跡","卡","氯","遇","份","毒","泥","退","洗","擺","灰","彩","賣","耗","夏","擇","忙","銅","獻","硬","予","繁","圈","雪","函","亦","抽","篇","陣","陰","丁","尺","追","堆","雄","迎","泛","爸","樓","避","謀","噸","野","豬","旗","累","偏","典","館","索","秦","脂","潮","爺","豆","忽","托","驚","塑","遺","愈","朱","替","纖","粗","傾","尚","痛","楚","謝","奮","購","磨","君","池","旁","碎","骨","監","捕","弟","暴","割","貫","殊","釋","詞","亡","壁","頓","寶","午","塵","聞","揭","炮","殘","冬","橋","婦","警","綜","招","吳","付","浮","遭","徐","您","搖","谷","贊","箱","隔","訂","男","吹","園","紛","唐","敗","宋","玻","巨","耕","坦","榮","閉","灣","鍵","凡","駐","鍋","救","恩","剝","凝","鹼","齒","截","煉","麻","紡","禁","廢","盛","版","緩","淨","睛","昌","婚","涉","筒","嘴","插","岸","朗","莊","街","藏","姑","貿","腐","奴","啦","慣","乘","夥","恢","勻","紗","扎","辯","耳","彪","臣","億","璃","抵","脈","秀","薩","俄","網","舞","店","噴","縱","寸","汗","掛","洪","賀","閃","柬","爆","烯","津","稻","牆","軟","勇","像","滾","厘","蒙","芳","肯","坡","柱","盪","腿","儀","旅","尾","軋","冰","貢","登","黎","削","鑽","勒","逃","障","氨","郭","峰","幣","港","伏","軌","畝","畢","擦","莫","刺","浪","秘","援","株","健","售","股","島","甘","泡","睡","童","鑄","湯","閥","休","匯","舍","牧","繞","炸","哲","磷","績","朋","淡","尖","啟","陷","柴","呈","徒","顏","淚","稍","忘","泵","藍","拖","洞","授","鏡","辛","壯","鋒","貧","虛","彎","摩","泰","幼","廷","尊","窗","綱","弄","隸","疑","氏","宮","姐","震","瑞","怪","尤","琴","循","描","膜","違","夾","腰","緣","珠","窮","森","枝","竹","溝","催","繩","憶","邦","剩","幸","漿","欄","擁","牙","貯","禮","濾","鈉","紋","罷","拍","咱","喊","袖","埃","勤","罰","焦","潛","伍","墨","欲","縫","姓","刊","飽","仿","獎","鋁","鬼","麗","跨","默","挖","鏈","掃","喝","袋","炭","污","幕","諸","弧","勵","梅","奶","潔","災","舟","鑑","苯","訟","抱","毀","懂","寒","智","埔","寄","屆","躍","渡","挑","丹","艱","貝","碰","拔","爹","戴","碼","夢","芽","熔","赤","漁","哭","敬","顆","奔","鉛","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","倉","魏","銳","曉","氮","兼","隱","礙","赫","撥","忠","肅","缸","牽","搶","博","巧","殼","兄","杜","訊","誠","碧","祥","柯","頁","巡","矩","悲","灌","齡","倫","票","尋","桂","鋪","聖","恐","恰","鄭","趣","抬","荒","騰","貼","柔","滴","猛","闊","輛","妻","填","撤","儲","簽","鬧","擾","紫","砂","遞","戲","吊","陶","伐","餵","療","瓶","婆","撫","臂","摸","忍","蝦","蠟","鄰","胸","鞏","擠","偶","棄","槽","勁","乳","鄧","吉","仁","爛","磚","租","烏","艦","伴","瓜","淺","丙","暫","燥","橡","柳","迷","暖","牌","秧","膽","詳","簧","踏","瓷","譜","呆","賓","糊","洛","輝","憤","競","隙","怒","粘","乃","緒","肩","籍","敏","塗","熙","皆","偵","懸","掘","享","糾","醒","狂","鎖","淀","恨","牲","霸","爬","賞","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鴨","趨","鳳","晨","畜","輩","秩","卵","署","梯","炎","灘","棋","驅","篩","峽","冒","啥","壽","譯","浸","泉","帽","遲","矽","疆","貸","漏","稿","冠","嫩","脅","芯","牢","叛","蝕","奧","鳴","嶺","羊","憑","串","塘","繪","酵","融","盆","錫","廟","籌","凍","輔","攝","襲","筋","拒","僚","旱","鉀","鳥","漆","沈","眉","疏","添","棒","穗","硝","韓","逼","扭","僑","涼","挺","碗","栽","炒","杯","患","餾","勸","豪","遼","勃","鴻","旦","吏","拜","狗","埋","輥","掩","飲","搬","罵","辭","勾","扣","估","蔣","絨","霧","丈","朵","姆","擬","宇","輯","陝","雕","償","蓄","崇","剪","倡","廳","咬","駛","薯","刷","斥","番","賦","奉","佛","澆","漫","曼","扇","鈣","桃","扶","仔","返","俗","虧","腔","鞋","棱","覆","框","悄","叔","撞","騙","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","脹","諧","拋","黴","桑","崗","嘛","衰","盜","滲","臟","賴","湧","甜","曹","閱","肌","哩","厲","烴","緯","毅","昨","偽","症","煮","嘆","釘","搭","莖","籠","酷","偷","弓","錐","恆","傑","坑","鼻","翼","綸","敘","獄","逮","罐","絡","棚","抑","膨","蔬","寺","驟","穆","冶","枯","冊","屍","凸","紳","坯","犧","焰","轟","欣","晉","瘦","禦","錠","錦","喪","旬","鍛","壟","搜","撲","邀","亭","酯","邁","舒","脆","酶","閒","憂","酚","頑","羽","漲","卸","仗","陪","闢","懲","杭","姚","肚","捉","飄","漂","昆","欺","吾","郎","烷","汁","呵","飾","蕭","雅","郵","遷","燕","撒","姻","赴","宴","煩","債","帳","斑","鈴","旨","醇","董","餅","雛","姿","拌","傅","腹","妥","揉","賢","拆","歪","葡","胺","丟","浩","徽","昂","墊","擋","覽","貪","慰","繳","汪","慌","馮","諾","姜","誼","兇","劣","誣","耀","昏","躺","盈","騎","喬","溪","叢","盧","抹","悶","諮","刮","駕","纜","悟","摘","鉺","擲","頗","幻","柄","惠","慘","佳","仇","臘","窩","滌","劍","瞧","堡","潑","蔥","罩","霍","撈","胎","蒼","濱","倆","捅","湘","砍","霞","邵","萄","瘋","淮","遂","熊","糞","烘","宿","檔","戈","駁","嫂","裕","徙","箭","捐","腸","撐","曬","辨","殿","蓮","攤","攪","醬","屏","疫","哀","蔡","堵","沫","皺","暢","疊","閣","萊","敲","轄","鉤","痕","壩","巷","餓","禍","丘","玄","溜","曰","邏","彭","嘗","卿","妨","艇","吞","韋","怨","矮","歇"]'
      );
    },
    8934: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '["abdikace","abeceda","adresa","agrese","akce","aktovka","alej","alkohol","amputace","ananas","andulka","anekdota","anketa","antika","anulovat","archa","arogance","asfalt","asistent","aspirace","astma","astronom","atlas","atletika","atol","autobus","azyl","babka","bachor","bacil","baculka","badatel","bageta","bagr","bahno","bakterie","balada","baletka","balkon","balonek","balvan","balza","bambus","bankomat","barbar","baret","barman","baroko","barva","baterka","batoh","bavlna","bazalka","bazilika","bazuka","bedna","beran","beseda","bestie","beton","bezinka","bezmoc","beztak","bicykl","bidlo","biftek","bikiny","bilance","biograf","biolog","bitva","bizon","blahobyt","blatouch","blecha","bledule","blesk","blikat","blizna","blokovat","bloudit","blud","bobek","bobr","bodlina","bodnout","bohatost","bojkot","bojovat","bokorys","bolest","borec","borovice","bota","boubel","bouchat","bouda","boule","bourat","boxer","bradavka","brambora","branka","bratr","brepta","briketa","brko","brloh","bronz","broskev","brunetka","brusinka","brzda","brzy","bublina","bubnovat","buchta","buditel","budka","budova","bufet","bujarost","bukvice","buldok","bulva","bunda","bunkr","burza","butik","buvol","buzola","bydlet","bylina","bytovka","bzukot","capart","carevna","cedr","cedule","cejch","cejn","cela","celer","celkem","celnice","cenina","cennost","cenovka","centrum","cenzor","cestopis","cetka","chalupa","chapadlo","charita","chata","chechtat","chemie","chichot","chirurg","chlad","chleba","chlubit","chmel","chmura","chobot","chochol","chodba","cholera","chomout","chopit","choroba","chov","chrapot","chrlit","chrt","chrup","chtivost","chudina","chutnat","chvat","chvilka","chvost","chyba","chystat","chytit","cibule","cigareta","cihelna","cihla","cinkot","cirkus","cisterna","citace","citrus","cizinec","cizost","clona","cokoliv","couvat","ctitel","ctnost","cudnost","cuketa","cukr","cupot","cvaknout","cval","cvik","cvrkot","cyklista","daleko","dareba","datel","datum","dcera","debata","dechovka","decibel","deficit","deflace","dekl","dekret","demokrat","deprese","derby","deska","detektiv","dikobraz","diktovat","dioda","diplom","disk","displej","divadlo","divoch","dlaha","dlouho","dluhopis","dnes","dobro","dobytek","docent","dochutit","dodnes","dohled","dohoda","dohra","dojem","dojnice","doklad","dokola","doktor","dokument","dolar","doleva","dolina","doma","dominant","domluvit","domov","donutit","dopad","dopis","doplnit","doposud","doprovod","dopustit","dorazit","dorost","dort","dosah","doslov","dostatek","dosud","dosyta","dotaz","dotek","dotknout","doufat","doutnat","dovozce","dozadu","doznat","dozorce","drahota","drak","dramatik","dravec","draze","drdol","drobnost","drogerie","drozd","drsnost","drtit","drzost","duben","duchovno","dudek","duha","duhovka","dusit","dusno","dutost","dvojice","dvorec","dynamit","ekolog","ekonomie","elektron","elipsa","email","emise","emoce","empatie","epizoda","epocha","epopej","epos","esej","esence","eskorta","eskymo","etiketa","euforie","evoluce","exekuce","exkurze","expedice","exploze","export","extrakt","facka","fajfka","fakulta","fanatik","fantazie","farmacie","favorit","fazole","federace","fejeton","fenka","fialka","figurant","filozof","filtr","finance","finta","fixace","fjord","flanel","flirt","flotila","fond","fosfor","fotbal","fotka","foton","frakce","freska","fronta","fukar","funkce","fyzika","galeje","garant","genetika","geolog","gilotina","glazura","glejt","golem","golfista","gotika","graf","gramofon","granule","grep","gril","grog","groteska","guma","hadice","hadr","hala","halenka","hanba","hanopis","harfa","harpuna","havran","hebkost","hejkal","hejno","hejtman","hektar","helma","hematom","herec","herna","heslo","hezky","historik","hladovka","hlasivky","hlava","hledat","hlen","hlodavec","hloh","hloupost","hltat","hlubina","hluchota","hmat","hmota","hmyz","hnis","hnojivo","hnout","hoblina","hoboj","hoch","hodiny","hodlat","hodnota","hodovat","hojnost","hokej","holinka","holka","holub","homole","honitba","honorace","horal","horda","horizont","horko","horlivec","hormon","hornina","horoskop","horstvo","hospoda","hostina","hotovost","houba","houf","houpat","houska","hovor","hradba","hranice","hravost","hrazda","hrbolek","hrdina","hrdlo","hrdost","hrnek","hrobka","hromada","hrot","hrouda","hrozen","hrstka","hrubost","hryzat","hubenost","hubnout","hudba","hukot","humr","husita","hustota","hvozd","hybnost","hydrant","hygiena","hymna","hysterik","idylka","ihned","ikona","iluze","imunita","infekce","inflace","inkaso","inovace","inspekce","internet","invalida","investor","inzerce","ironie","jablko","jachta","jahoda","jakmile","jakost","jalovec","jantar","jarmark","jaro","jasan","jasno","jatka","javor","jazyk","jedinec","jedle","jednatel","jehlan","jekot","jelen","jelito","jemnost","jenom","jepice","jeseter","jevit","jezdec","jezero","jinak","jindy","jinoch","jiskra","jistota","jitrnice","jizva","jmenovat","jogurt","jurta","kabaret","kabel","kabinet","kachna","kadet","kadidlo","kahan","kajak","kajuta","kakao","kaktus","kalamita","kalhoty","kalibr","kalnost","kamera","kamkoliv","kamna","kanibal","kanoe","kantor","kapalina","kapela","kapitola","kapka","kaple","kapota","kapr","kapusta","kapybara","karamel","karotka","karton","kasa","katalog","katedra","kauce","kauza","kavalec","kazajka","kazeta","kazivost","kdekoliv","kdesi","kedluben","kemp","keramika","kino","klacek","kladivo","klam","klapot","klasika","klaun","klec","klenba","klepat","klesnout","klid","klima","klisna","klobouk","klokan","klopa","kloub","klubovna","klusat","kluzkost","kmen","kmitat","kmotr","kniha","knot","koalice","koberec","kobka","kobliha","kobyla","kocour","kohout","kojenec","kokos","koktejl","kolaps","koleda","kolize","kolo","komando","kometa","komik","komnata","komora","kompas","komunita","konat","koncept","kondice","konec","konfese","kongres","konina","konkurs","kontakt","konzerva","kopanec","kopie","kopnout","koprovka","korbel","korektor","kormidlo","koroptev","korpus","koruna","koryto","korzet","kosatec","kostka","kotel","kotleta","kotoul","koukat","koupelna","kousek","kouzlo","kovboj","koza","kozoroh","krabice","krach","krajina","kralovat","krasopis","kravata","kredit","krejcar","kresba","kreveta","kriket","kritik","krize","krkavec","krmelec","krmivo","krocan","krok","kronika","kropit","kroupa","krovka","krtek","kruhadlo","krupice","krutost","krvinka","krychle","krypta","krystal","kryt","kudlanka","kufr","kujnost","kukla","kulajda","kulich","kulka","kulomet","kultura","kuna","kupodivu","kurt","kurzor","kutil","kvalita","kvasinka","kvestor","kynolog","kyselina","kytara","kytice","kytka","kytovec","kyvadlo","labrador","lachtan","ladnost","laik","lakomec","lamela","lampa","lanovka","lasice","laso","lastura","latinka","lavina","lebka","leckdy","leden","lednice","ledovka","ledvina","legenda","legie","legrace","lehce","lehkost","lehnout","lektvar","lenochod","lentilka","lepenka","lepidlo","letadlo","letec","letmo","letokruh","levhart","levitace","levobok","libra","lichotka","lidojed","lidskost","lihovina","lijavec","lilek","limetka","linie","linka","linoleum","listopad","litina","litovat","lobista","lodivod","logika","logoped","lokalita","loket","lomcovat","lopata","lopuch","lord","losos","lotr","loudal","louh","louka","louskat","lovec","lstivost","lucerna","lucifer","lump","lusk","lustrace","lvice","lyra","lyrika","lysina","madam","madlo","magistr","mahagon","majetek","majitel","majorita","makak","makovice","makrela","malba","malina","malovat","malvice","maminka","mandle","manko","marnost","masakr","maskot","masopust","matice","matrika","maturita","mazanec","mazivo","mazlit","mazurka","mdloba","mechanik","meditace","medovina","melasa","meloun","mentolka","metla","metoda","metr","mezera","migrace","mihnout","mihule","mikina","mikrofon","milenec","milimetr","milost","mimika","mincovna","minibar","minomet","minulost","miska","mistr","mixovat","mladost","mlha","mlhovina","mlok","mlsat","mluvit","mnich","mnohem","mobil","mocnost","modelka","modlitba","mohyla","mokro","molekula","momentka","monarcha","monokl","monstrum","montovat","monzun","mosaz","moskyt","most","motivace","motorka","motyka","moucha","moudrost","mozaika","mozek","mozol","mramor","mravenec","mrkev","mrtvola","mrzet","mrzutost","mstitel","mudrc","muflon","mulat","mumie","munice","muset","mutace","muzeum","muzikant","myslivec","mzda","nabourat","nachytat","nadace","nadbytek","nadhoz","nadobro","nadpis","nahlas","nahnat","nahodile","nahradit","naivita","najednou","najisto","najmout","naklonit","nakonec","nakrmit","nalevo","namazat","namluvit","nanometr","naoko","naopak","naostro","napadat","napevno","naplnit","napnout","naposled","naprosto","narodit","naruby","narychlo","nasadit","nasekat","naslepo","nastat","natolik","navenek","navrch","navzdory","nazvat","nebe","nechat","necky","nedaleko","nedbat","neduh","negace","nehet","nehoda","nejen","nejprve","neklid","nelibost","nemilost","nemoc","neochota","neonka","nepokoj","nerost","nerv","nesmysl","nesoulad","netvor","neuron","nevina","nezvykle","nicota","nijak","nikam","nikdy","nikl","nikterak","nitro","nocleh","nohavice","nominace","nora","norek","nositel","nosnost","nouze","noviny","novota","nozdra","nuda","nudle","nuget","nutit","nutnost","nutrie","nymfa","obal","obarvit","obava","obdiv","obec","obehnat","obejmout","obezita","obhajoba","obilnice","objasnit","objekt","obklopit","oblast","oblek","obliba","obloha","obluda","obnos","obohatit","obojek","obout","obrazec","obrna","obruba","obrys","obsah","obsluha","obstarat","obuv","obvaz","obvinit","obvod","obvykle","obyvatel","obzor","ocas","ocel","ocenit","ochladit","ochota","ochrana","ocitnout","odboj","odbyt","odchod","odcizit","odebrat","odeslat","odevzdat","odezva","odhadce","odhodit","odjet","odjinud","odkaz","odkoupit","odliv","odluka","odmlka","odolnost","odpad","odpis","odplout","odpor","odpustit","odpykat","odrazka","odsoudit","odstup","odsun","odtok","odtud","odvaha","odveta","odvolat","odvracet","odznak","ofina","ofsajd","ohlas","ohnisko","ohrada","ohrozit","ohryzek","okap","okenice","oklika","okno","okouzlit","okovy","okrasa","okres","okrsek","okruh","okupant","okurka","okusit","olejnina","olizovat","omak","omeleta","omezit","omladina","omlouvat","omluva","omyl","onehdy","opakovat","opasek","operace","opice","opilost","opisovat","opora","opozice","opravdu","oproti","orbital","orchestr","orgie","orlice","orloj","ortel","osada","oschnout","osika","osivo","oslava","oslepit","oslnit","oslovit","osnova","osoba","osolit","ospalec","osten","ostraha","ostuda","ostych","osvojit","oteplit","otisk","otop","otrhat","otrlost","otrok","otruby","otvor","ovanout","ovar","oves","ovlivnit","ovoce","oxid","ozdoba","pachatel","pacient","padouch","pahorek","pakt","palanda","palec","palivo","paluba","pamflet","pamlsek","panenka","panika","panna","panovat","panstvo","pantofle","paprika","parketa","parodie","parta","paruka","paryba","paseka","pasivita","pastelka","patent","patrona","pavouk","pazneht","pazourek","pecka","pedagog","pejsek","peklo","peloton","penalta","pendrek","penze","periskop","pero","pestrost","petarda","petice","petrolej","pevnina","pexeso","pianista","piha","pijavice","pikle","piknik","pilina","pilnost","pilulka","pinzeta","pipeta","pisatel","pistole","pitevna","pivnice","pivovar","placenta","plakat","plamen","planeta","plastika","platit","plavidlo","plaz","plech","plemeno","plenta","ples","pletivo","plevel","plivat","plnit","plno","plocha","plodina","plomba","plout","pluk","plyn","pobavit","pobyt","pochod","pocit","poctivec","podat","podcenit","podepsat","podhled","podivit","podklad","podmanit","podnik","podoba","podpora","podraz","podstata","podvod","podzim","poezie","pohanka","pohnutka","pohovor","pohroma","pohyb","pointa","pojistka","pojmout","pokazit","pokles","pokoj","pokrok","pokuta","pokyn","poledne","polibek","polknout","poloha","polynom","pomalu","pominout","pomlka","pomoc","pomsta","pomyslet","ponechat","ponorka","ponurost","popadat","popel","popisek","poplach","poprosit","popsat","popud","poradce","porce","porod","porucha","poryv","posadit","posed","posila","poskok","poslanec","posoudit","pospolu","postava","posudek","posyp","potah","potkan","potlesk","potomek","potrava","potupa","potvora","poukaz","pouto","pouzdro","povaha","povidla","povlak","povoz","povrch","povstat","povyk","povzdech","pozdrav","pozemek","poznatek","pozor","pozvat","pracovat","prahory","praktika","prales","praotec","praporek","prase","pravda","princip","prkno","probudit","procento","prodej","profese","prohra","projekt","prolomit","promile","pronikat","propad","prorok","prosba","proton","proutek","provaz","prskavka","prsten","prudkost","prut","prvek","prvohory","psanec","psovod","pstruh","ptactvo","puberta","puch","pudl","pukavec","puklina","pukrle","pult","pumpa","punc","pupen","pusa","pusinka","pustina","putovat","putyka","pyramida","pysk","pytel","racek","rachot","radiace","radnice","radon","raft","ragby","raketa","rakovina","rameno","rampouch","rande","rarach","rarita","rasovna","rastr","ratolest","razance","razidlo","reagovat","reakce","recept","redaktor","referent","reflex","rejnok","reklama","rekord","rekrut","rektor","reputace","revize","revma","revolver","rezerva","riskovat","riziko","robotika","rodokmen","rohovka","rokle","rokoko","romaneto","ropovod","ropucha","rorejs","rosol","rostlina","rotmistr","rotoped","rotunda","roubenka","roucho","roup","roura","rovina","rovnice","rozbor","rozchod","rozdat","rozeznat","rozhodce","rozinka","rozjezd","rozkaz","rozloha","rozmar","rozpad","rozruch","rozsah","roztok","rozum","rozvod","rubrika","ruchadlo","rukavice","rukopis","ryba","rybolov","rychlost","rydlo","rypadlo","rytina","ryzost","sadista","sahat","sako","samec","samizdat","samota","sanitka","sardinka","sasanka","satelit","sazba","sazenice","sbor","schovat","sebranka","secese","sedadlo","sediment","sedlo","sehnat","sejmout","sekera","sekta","sekunda","sekvoje","semeno","seno","servis","sesadit","seshora","seskok","seslat","sestra","sesuv","sesypat","setba","setina","setkat","setnout","setrvat","sever","seznam","shoda","shrnout","sifon","silnice","sirka","sirotek","sirup","situace","skafandr","skalisko","skanzen","skaut","skeptik","skica","skladba","sklenice","sklo","skluz","skoba","skokan","skoro","skripta","skrz","skupina","skvost","skvrna","slabika","sladidlo","slanina","slast","slavnost","sledovat","slepec","sleva","slezina","slib","slina","sliznice","slon","sloupek","slovo","sluch","sluha","slunce","slupka","slza","smaragd","smetana","smilstvo","smlouva","smog","smrad","smrk","smrtka","smutek","smysl","snad","snaha","snob","sobota","socha","sodovka","sokol","sopka","sotva","souboj","soucit","soudce","souhlas","soulad","soumrak","souprava","soused","soutok","souviset","spalovna","spasitel","spis","splav","spodek","spojenec","spolu","sponzor","spornost","spousta","sprcha","spustit","sranda","sraz","srdce","srna","srnec","srovnat","srpen","srst","srub","stanice","starosta","statika","stavba","stehno","stezka","stodola","stolek","stopa","storno","stoupat","strach","stres","strhnout","strom","struna","studna","stupnice","stvol","styk","subjekt","subtropy","suchar","sudost","sukno","sundat","sunout","surikata","surovina","svah","svalstvo","svetr","svatba","svazek","svisle","svitek","svoboda","svodidlo","svorka","svrab","sykavka","sykot","synek","synovec","sypat","sypkost","syrovost","sysel","sytost","tabletka","tabule","tahoun","tajemno","tajfun","tajga","tajit","tajnost","taktika","tamhle","tampon","tancovat","tanec","tanker","tapeta","tavenina","tazatel","technika","tehdy","tekutina","telefon","temnota","tendence","tenista","tenor","teplota","tepna","teprve","terapie","termoska","textil","ticho","tiskopis","titulek","tkadlec","tkanina","tlapka","tleskat","tlukot","tlupa","tmel","toaleta","topinka","topol","torzo","touha","toulec","tradice","traktor","tramp","trasa","traverza","trefit","trest","trezor","trhavina","trhlina","trochu","trojice","troska","trouba","trpce","trpitel","trpkost","trubec","truchlit","truhlice","trus","trvat","tudy","tuhnout","tuhost","tundra","turista","turnaj","tuzemsko","tvaroh","tvorba","tvrdost","tvrz","tygr","tykev","ubohost","uboze","ubrat","ubrousek","ubrus","ubytovna","ucho","uctivost","udivit","uhradit","ujednat","ujistit","ujmout","ukazatel","uklidnit","uklonit","ukotvit","ukrojit","ulice","ulita","ulovit","umyvadlo","unavit","uniforma","uniknout","upadnout","uplatnit","uplynout","upoutat","upravit","uran","urazit","usednout","usilovat","usmrtit","usnadnit","usnout","usoudit","ustlat","ustrnout","utahovat","utkat","utlumit","utonout","utopenec","utrousit","uvalit","uvolnit","uvozovka","uzdravit","uzel","uzenina","uzlina","uznat","vagon","valcha","valoun","vana","vandal","vanilka","varan","varhany","varovat","vcelku","vchod","vdova","vedro","vegetace","vejce","velbloud","veletrh","velitel","velmoc","velryba","venkov","veranda","verze","veselka","veskrze","vesnice","vespodu","vesta","veterina","veverka","vibrace","vichr","videohra","vidina","vidle","vila","vinice","viset","vitalita","vize","vizitka","vjezd","vklad","vkus","vlajka","vlak","vlasec","vlevo","vlhkost","vliv","vlnovka","vloupat","vnucovat","vnuk","voda","vodivost","vodoznak","vodstvo","vojensky","vojna","vojsko","volant","volba","volit","volno","voskovka","vozidlo","vozovna","vpravo","vrabec","vracet","vrah","vrata","vrba","vrcholek","vrhat","vrstva","vrtule","vsadit","vstoupit","vstup","vtip","vybavit","vybrat","vychovat","vydat","vydra","vyfotit","vyhledat","vyhnout","vyhodit","vyhradit","vyhubit","vyjasnit","vyjet","vyjmout","vyklopit","vykonat","vylekat","vymazat","vymezit","vymizet","vymyslet","vynechat","vynikat","vynutit","vypadat","vyplatit","vypravit","vypustit","vyrazit","vyrovnat","vyrvat","vyslovit","vysoko","vystavit","vysunout","vysypat","vytasit","vytesat","vytratit","vyvinout","vyvolat","vyvrhel","vyzdobit","vyznat","vzadu","vzbudit","vzchopit","vzdor","vzduch","vzdychat","vzestup","vzhledem","vzkaz","vzlykat","vznik","vzorek","vzpoura","vztah","vztek","xylofon","zabrat","zabydlet","zachovat","zadarmo","zadusit","zafoukat","zahltit","zahodit","zahrada","zahynout","zajatec","zajet","zajistit","zaklepat","zakoupit","zalepit","zamezit","zamotat","zamyslet","zanechat","zanikat","zaplatit","zapojit","zapsat","zarazit","zastavit","zasunout","zatajit","zatemnit","zatknout","zaujmout","zavalit","zavelet","zavinit","zavolat","zavrtat","zazvonit","zbavit","zbrusu","zbudovat","zbytek","zdaleka","zdarma","zdatnost","zdivo","zdobit","zdroj","zdvih","zdymadlo","zelenina","zeman","zemina","zeptat","zezadu","zezdola","zhatit","zhltnout","zhluboka","zhotovit","zhruba","zima","zimnice","zjemnit","zklamat","zkoumat","zkratka","zkumavka","zlato","zlehka","zloba","zlom","zlost","zlozvyk","zmapovat","zmar","zmatek","zmije","zmizet","zmocnit","zmodrat","zmrzlina","zmutovat","znak","znalost","znamenat","znovu","zobrazit","zotavit","zoubek","zoufale","zplodit","zpomalit","zprava","zprostit","zprudka","zprvu","zrada","zranit","zrcadlo","zrnitost","zrno","zrovna","zrychlit","zrzavost","zticha","ztratit","zubovina","zubr","zvednout","zvenku","zvesela","zvon","zvrat","zvukovod","zvyk"]'
      );
    },
    71066: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"]'
      );
    },
    51354: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '["abaisser","abandon","abdiquer","abeille","abolir","aborder","aboutir","aboyer","abrasif","abreuver","abriter","abroger","abrupt","absence","absolu","absurde","abusif","abyssal","académie","acajou","acarien","accabler","accepter","acclamer","accolade","accroche","accuser","acerbe","achat","acheter","aciduler","acier","acompte","acquérir","acronyme","acteur","actif","actuel","adepte","adéquat","adhésif","adjectif","adjuger","admettre","admirer","adopter","adorer","adoucir","adresse","adroit","adulte","adverbe","aérer","aéronef","affaire","affecter","affiche","affreux","affubler","agacer","agencer","agile","agiter","agrafer","agréable","agrume","aider","aiguille","ailier","aimable","aisance","ajouter","ajuster","alarmer","alchimie","alerte","algèbre","algue","aliéner","aliment","alléger","alliage","allouer","allumer","alourdir","alpaga","altesse","alvéole","amateur","ambigu","ambre","aménager","amertume","amidon","amiral","amorcer","amour","amovible","amphibie","ampleur","amusant","analyse","anaphore","anarchie","anatomie","ancien","anéantir","angle","angoisse","anguleux","animal","annexer","annonce","annuel","anodin","anomalie","anonyme","anormal","antenne","antidote","anxieux","apaiser","apéritif","aplanir","apologie","appareil","appeler","apporter","appuyer","aquarium","aqueduc","arbitre","arbuste","ardeur","ardoise","argent","arlequin","armature","armement","armoire","armure","arpenter","arracher","arriver","arroser","arsenic","artériel","article","aspect","asphalte","aspirer","assaut","asservir","assiette","associer","assurer","asticot","astre","astuce","atelier","atome","atrium","atroce","attaque","attentif","attirer","attraper","aubaine","auberge","audace","audible","augurer","aurore","automne","autruche","avaler","avancer","avarice","avenir","averse","aveugle","aviateur","avide","avion","aviser","avoine","avouer","avril","axial","axiome","badge","bafouer","bagage","baguette","baignade","balancer","balcon","baleine","balisage","bambin","bancaire","bandage","banlieue","bannière","banquier","barbier","baril","baron","barque","barrage","bassin","bastion","bataille","bateau","batterie","baudrier","bavarder","belette","bélier","belote","bénéfice","berceau","berger","berline","bermuda","besace","besogne","bétail","beurre","biberon","bicycle","bidule","bijou","bilan","bilingue","billard","binaire","biologie","biopsie","biotype","biscuit","bison","bistouri","bitume","bizarre","blafard","blague","blanchir","blessant","blinder","blond","bloquer","blouson","bobard","bobine","boire","boiser","bolide","bonbon","bondir","bonheur","bonifier","bonus","bordure","borne","botte","boucle","boueux","bougie","boulon","bouquin","bourse","boussole","boutique","boxeur","branche","brasier","brave","brebis","brèche","breuvage","bricoler","brigade","brillant","brioche","brique","brochure","broder","bronzer","brousse","broyeur","brume","brusque","brutal","bruyant","buffle","buisson","bulletin","bureau","burin","bustier","butiner","butoir","buvable","buvette","cabanon","cabine","cachette","cadeau","cadre","caféine","caillou","caisson","calculer","calepin","calibre","calmer","calomnie","calvaire","camarade","caméra","camion","campagne","canal","caneton","canon","cantine","canular","capable","caporal","caprice","capsule","capter","capuche","carabine","carbone","caresser","caribou","carnage","carotte","carreau","carton","cascade","casier","casque","cassure","causer","caution","cavalier","caverne","caviar","cédille","ceinture","céleste","cellule","cendrier","censurer","central","cercle","cérébral","cerise","cerner","cerveau","cesser","chagrin","chaise","chaleur","chambre","chance","chapitre","charbon","chasseur","chaton","chausson","chavirer","chemise","chenille","chéquier","chercher","cheval","chien","chiffre","chignon","chimère","chiot","chlorure","chocolat","choisir","chose","chouette","chrome","chute","cigare","cigogne","cimenter","cinéma","cintrer","circuler","cirer","cirque","citerne","citoyen","citron","civil","clairon","clameur","claquer","classe","clavier","client","cligner","climat","clivage","cloche","clonage","cloporte","cobalt","cobra","cocasse","cocotier","coder","codifier","coffre","cogner","cohésion","coiffer","coincer","colère","colibri","colline","colmater","colonel","combat","comédie","commande","compact","concert","conduire","confier","congeler","connoter","consonne","contact","convexe","copain","copie","corail","corbeau","cordage","corniche","corpus","correct","cortège","cosmique","costume","coton","coude","coupure","courage","couteau","couvrir","coyote","crabe","crainte","cravate","crayon","créature","créditer","crémeux","creuser","crevette","cribler","crier","cristal","critère","croire","croquer","crotale","crucial","cruel","crypter","cubique","cueillir","cuillère","cuisine","cuivre","culminer","cultiver","cumuler","cupide","curatif","curseur","cyanure","cycle","cylindre","cynique","daigner","damier","danger","danseur","dauphin","débattre","débiter","déborder","débrider","débutant","décaler","décembre","déchirer","décider","déclarer","décorer","décrire","décupler","dédale","déductif","déesse","défensif","défiler","défrayer","dégager","dégivrer","déglutir","dégrafer","déjeuner","délice","déloger","demander","demeurer","démolir","dénicher","dénouer","dentelle","dénuder","départ","dépenser","déphaser","déplacer","déposer","déranger","dérober","désastre","descente","désert","désigner","désobéir","dessiner","destrier","détacher","détester","détourer","détresse","devancer","devenir","deviner","devoir","diable","dialogue","diamant","dicter","différer","digérer","digital","digne","diluer","dimanche","diminuer","dioxyde","directif","diriger","discuter","disposer","dissiper","distance","divertir","diviser","docile","docteur","dogme","doigt","domaine","domicile","dompter","donateur","donjon","donner","dopamine","dortoir","dorure","dosage","doseur","dossier","dotation","douanier","double","douceur","douter","doyen","dragon","draper","dresser","dribbler","droiture","duperie","duplexe","durable","durcir","dynastie","éblouir","écarter","écharpe","échelle","éclairer","éclipse","éclore","écluse","école","économie","écorce","écouter","écraser","écrémer","écrivain","écrou","écume","écureuil","édifier","éduquer","effacer","effectif","effigie","effort","effrayer","effusion","égaliser","égarer","éjecter","élaborer","élargir","électron","élégant","éléphant","élève","éligible","élitisme","éloge","élucider","éluder","emballer","embellir","embryon","émeraude","émission","emmener","émotion","émouvoir","empereur","employer","emporter","emprise","émulsion","encadrer","enchère","enclave","encoche","endiguer","endosser","endroit","enduire","énergie","enfance","enfermer","enfouir","engager","engin","englober","énigme","enjamber","enjeu","enlever","ennemi","ennuyeux","enrichir","enrobage","enseigne","entasser","entendre","entier","entourer","entraver","énumérer","envahir","enviable","envoyer","enzyme","éolien","épaissir","épargne","épatant","épaule","épicerie","épidémie","épier","épilogue","épine","épisode","épitaphe","époque","épreuve","éprouver","épuisant","équerre","équipe","ériger","érosion","erreur","éruption","escalier","espadon","espèce","espiègle","espoir","esprit","esquiver","essayer","essence","essieu","essorer","estime","estomac","estrade","étagère","étaler","étanche","étatique","éteindre","étendoir","éternel","éthanol","éthique","ethnie","étirer","étoffer","étoile","étonnant","étourdir","étrange","étroit","étude","euphorie","évaluer","évasion","éventail","évidence","éviter","évolutif","évoquer","exact","exagérer","exaucer","exceller","excitant","exclusif","excuse","exécuter","exemple","exercer","exhaler","exhorter","exigence","exiler","exister","exotique","expédier","explorer","exposer","exprimer","exquis","extensif","extraire","exulter","fable","fabuleux","facette","facile","facture","faiblir","falaise","fameux","famille","farceur","farfelu","farine","farouche","fasciner","fatal","fatigue","faucon","fautif","faveur","favori","fébrile","féconder","fédérer","félin","femme","fémur","fendoir","féodal","fermer","féroce","ferveur","festival","feuille","feutre","février","fiasco","ficeler","fictif","fidèle","figure","filature","filetage","filière","filleul","filmer","filou","filtrer","financer","finir","fiole","firme","fissure","fixer","flairer","flamme","flasque","flatteur","fléau","flèche","fleur","flexion","flocon","flore","fluctuer","fluide","fluvial","folie","fonderie","fongible","fontaine","forcer","forgeron","formuler","fortune","fossile","foudre","fougère","fouiller","foulure","fourmi","fragile","fraise","franchir","frapper","frayeur","frégate","freiner","frelon","frémir","frénésie","frère","friable","friction","frisson","frivole","froid","fromage","frontal","frotter","fruit","fugitif","fuite","fureur","furieux","furtif","fusion","futur","gagner","galaxie","galerie","gambader","garantir","gardien","garnir","garrigue","gazelle","gazon","géant","gélatine","gélule","gendarme","général","génie","genou","gentil","géologie","géomètre","géranium","germe","gestuel","geyser","gibier","gicler","girafe","givre","glace","glaive","glisser","globe","gloire","glorieux","golfeur","gomme","gonfler","gorge","gorille","goudron","gouffre","goulot","goupille","gourmand","goutte","graduel","graffiti","graine","grand","grappin","gratuit","gravir","grenat","griffure","griller","grimper","grogner","gronder","grotte","groupe","gruger","grutier","gruyère","guépard","guerrier","guide","guimauve","guitare","gustatif","gymnaste","gyrostat","habitude","hachoir","halte","hameau","hangar","hanneton","haricot","harmonie","harpon","hasard","hélium","hématome","herbe","hérisson","hermine","héron","hésiter","heureux","hiberner","hibou","hilarant","histoire","hiver","homard","hommage","homogène","honneur","honorer","honteux","horde","horizon","horloge","hormone","horrible","houleux","housse","hublot","huileux","humain","humble","humide","humour","hurler","hydromel","hygiène","hymne","hypnose","idylle","ignorer","iguane","illicite","illusion","image","imbiber","imiter","immense","immobile","immuable","impact","impérial","implorer","imposer","imprimer","imputer","incarner","incendie","incident","incliner","incolore","indexer","indice","inductif","inédit","ineptie","inexact","infini","infliger","informer","infusion","ingérer","inhaler","inhiber","injecter","injure","innocent","inoculer","inonder","inscrire","insecte","insigne","insolite","inspirer","instinct","insulter","intact","intense","intime","intrigue","intuitif","inutile","invasion","inventer","inviter","invoquer","ironique","irradier","irréel","irriter","isoler","ivoire","ivresse","jaguar","jaillir","jambe","janvier","jardin","jauger","jaune","javelot","jetable","jeton","jeudi","jeunesse","joindre","joncher","jongler","joueur","jouissif","journal","jovial","joyau","joyeux","jubiler","jugement","junior","jupon","juriste","justice","juteux","juvénile","kayak","kimono","kiosque","label","labial","labourer","lacérer","lactose","lagune","laine","laisser","laitier","lambeau","lamelle","lampe","lanceur","langage","lanterne","lapin","largeur","larme","laurier","lavabo","lavoir","lecture","légal","léger","légume","lessive","lettre","levier","lexique","lézard","liasse","libérer","libre","licence","licorne","liège","lièvre","ligature","ligoter","ligue","limer","limite","limonade","limpide","linéaire","lingot","lionceau","liquide","lisière","lister","lithium","litige","littoral","livreur","logique","lointain","loisir","lombric","loterie","louer","lourd","loutre","louve","loyal","lubie","lucide","lucratif","lueur","lugubre","luisant","lumière","lunaire","lundi","luron","lutter","luxueux","machine","magasin","magenta","magique","maigre","maillon","maintien","mairie","maison","majorer","malaxer","maléfice","malheur","malice","mallette","mammouth","mandater","maniable","manquant","manteau","manuel","marathon","marbre","marchand","mardi","maritime","marqueur","marron","marteler","mascotte","massif","matériel","matière","matraque","maudire","maussade","mauve","maximal","méchant","méconnu","médaille","médecin","méditer","méduse","meilleur","mélange","mélodie","membre","mémoire","menacer","mener","menhir","mensonge","mentor","mercredi","mérite","merle","messager","mesure","métal","météore","méthode","métier","meuble","miauler","microbe","miette","mignon","migrer","milieu","million","mimique","mince","minéral","minimal","minorer","minute","miracle","miroiter","missile","mixte","mobile","moderne","moelleux","mondial","moniteur","monnaie","monotone","monstre","montagne","monument","moqueur","morceau","morsure","mortier","moteur","motif","mouche","moufle","moulin","mousson","mouton","mouvant","multiple","munition","muraille","murène","murmure","muscle","muséum","musicien","mutation","muter","mutuel","myriade","myrtille","mystère","mythique","nageur","nappe","narquois","narrer","natation","nation","nature","naufrage","nautique","navire","nébuleux","nectar","néfaste","négation","négliger","négocier","neige","nerveux","nettoyer","neurone","neutron","neveu","niche","nickel","nitrate","niveau","noble","nocif","nocturne","noirceur","noisette","nomade","nombreux","nommer","normatif","notable","notifier","notoire","nourrir","nouveau","novateur","novembre","novice","nuage","nuancer","nuire","nuisible","numéro","nuptial","nuque","nutritif","obéir","objectif","obliger","obscur","observer","obstacle","obtenir","obturer","occasion","occuper","océan","octobre","octroyer","octupler","oculaire","odeur","odorant","offenser","officier","offrir","ogive","oiseau","oisillon","olfactif","olivier","ombrage","omettre","onctueux","onduler","onéreux","onirique","opale","opaque","opérer","opinion","opportun","opprimer","opter","optique","orageux","orange","orbite","ordonner","oreille","organe","orgueil","orifice","ornement","orque","ortie","osciller","osmose","ossature","otarie","ouragan","ourson","outil","outrager","ouvrage","ovation","oxyde","oxygène","ozone","paisible","palace","palmarès","palourde","palper","panache","panda","pangolin","paniquer","panneau","panorama","pantalon","papaye","papier","papoter","papyrus","paradoxe","parcelle","paresse","parfumer","parler","parole","parrain","parsemer","partager","parure","parvenir","passion","pastèque","paternel","patience","patron","pavillon","pavoiser","payer","paysage","peigne","peintre","pelage","pélican","pelle","pelouse","peluche","pendule","pénétrer","pénible","pensif","pénurie","pépite","péplum","perdrix","perforer","période","permuter","perplexe","persil","perte","peser","pétale","petit","pétrir","peuple","pharaon","phobie","phoque","photon","phrase","physique","piano","pictural","pièce","pierre","pieuvre","pilote","pinceau","pipette","piquer","pirogue","piscine","piston","pivoter","pixel","pizza","placard","plafond","plaisir","planer","plaque","plastron","plateau","pleurer","plexus","pliage","plomb","plonger","pluie","plumage","pochette","poésie","poète","pointe","poirier","poisson","poivre","polaire","policier","pollen","polygone","pommade","pompier","ponctuel","pondérer","poney","portique","position","posséder","posture","potager","poteau","potion","pouce","poulain","poumon","pourpre","poussin","pouvoir","prairie","pratique","précieux","prédire","préfixe","prélude","prénom","présence","prétexte","prévoir","primitif","prince","prison","priver","problème","procéder","prodige","profond","progrès","proie","projeter","prologue","promener","propre","prospère","protéger","prouesse","proverbe","prudence","pruneau","psychose","public","puceron","puiser","pulpe","pulsar","punaise","punitif","pupitre","purifier","puzzle","pyramide","quasar","querelle","question","quiétude","quitter","quotient","racine","raconter","radieux","ragondin","raideur","raisin","ralentir","rallonge","ramasser","rapide","rasage","ratisser","ravager","ravin","rayonner","réactif","réagir","réaliser","réanimer","recevoir","réciter","réclamer","récolter","recruter","reculer","recycler","rédiger","redouter","refaire","réflexe","réformer","refrain","refuge","régalien","région","réglage","régulier","réitérer","rejeter","rejouer","relatif","relever","relief","remarque","remède","remise","remonter","remplir","remuer","renard","renfort","renifler","renoncer","rentrer","renvoi","replier","reporter","reprise","reptile","requin","réserve","résineux","résoudre","respect","rester","résultat","rétablir","retenir","réticule","retomber","retracer","réunion","réussir","revanche","revivre","révolte","révulsif","richesse","rideau","rieur","rigide","rigoler","rincer","riposter","risible","risque","rituel","rival","rivière","rocheux","romance","rompre","ronce","rondin","roseau","rosier","rotatif","rotor","rotule","rouge","rouille","rouleau","routine","royaume","ruban","rubis","ruche","ruelle","rugueux","ruiner","ruisseau","ruser","rustique","rythme","sabler","saboter","sabre","sacoche","safari","sagesse","saisir","salade","salive","salon","saluer","samedi","sanction","sanglier","sarcasme","sardine","saturer","saugrenu","saumon","sauter","sauvage","savant","savonner","scalpel","scandale","scélérat","scénario","sceptre","schéma","science","scinder","score","scrutin","sculpter","séance","sécable","sécher","secouer","sécréter","sédatif","séduire","seigneur","séjour","sélectif","semaine","sembler","semence","séminal","sénateur","sensible","sentence","séparer","séquence","serein","sergent","sérieux","serrure","sérum","service","sésame","sévir","sevrage","sextuple","sidéral","siècle","siéger","siffler","sigle","signal","silence","silicium","simple","sincère","sinistre","siphon","sirop","sismique","situer","skier","social","socle","sodium","soigneux","soldat","soleil","solitude","soluble","sombre","sommeil","somnoler","sonde","songeur","sonnette","sonore","sorcier","sortir","sosie","sottise","soucieux","soudure","souffle","soulever","soupape","source","soutirer","souvenir","spacieux","spatial","spécial","sphère","spiral","stable","station","sternum","stimulus","stipuler","strict","studieux","stupeur","styliste","sublime","substrat","subtil","subvenir","succès","sucre","suffixe","suggérer","suiveur","sulfate","superbe","supplier","surface","suricate","surmener","surprise","sursaut","survie","suspect","syllabe","symbole","symétrie","synapse","syntaxe","système","tabac","tablier","tactile","tailler","talent","talisman","talonner","tambour","tamiser","tangible","tapis","taquiner","tarder","tarif","tartine","tasse","tatami","tatouage","taupe","taureau","taxer","témoin","temporel","tenaille","tendre","teneur","tenir","tension","terminer","terne","terrible","tétine","texte","thème","théorie","thérapie","thorax","tibia","tiède","timide","tirelire","tiroir","tissu","titane","titre","tituber","toboggan","tolérant","tomate","tonique","tonneau","toponyme","torche","tordre","tornade","torpille","torrent","torse","tortue","totem","toucher","tournage","tousser","toxine","traction","trafic","tragique","trahir","train","trancher","travail","trèfle","tremper","trésor","treuil","triage","tribunal","tricoter","trilogie","triomphe","tripler","triturer","trivial","trombone","tronc","tropical","troupeau","tuile","tulipe","tumulte","tunnel","turbine","tuteur","tutoyer","tuyau","tympan","typhon","typique","tyran","ubuesque","ultime","ultrason","unanime","unifier","union","unique","unitaire","univers","uranium","urbain","urticant","usage","usine","usuel","usure","utile","utopie","vacarme","vaccin","vagabond","vague","vaillant","vaincre","vaisseau","valable","valise","vallon","valve","vampire","vanille","vapeur","varier","vaseux","vassal","vaste","vecteur","vedette","végétal","véhicule","veinard","véloce","vendredi","vénérer","venger","venimeux","ventouse","verdure","vérin","vernir","verrou","verser","vertu","veston","vétéran","vétuste","vexant","vexer","viaduc","viande","victoire","vidange","vidéo","vignette","vigueur","vilain","village","vinaigre","violon","vipère","virement","virtuose","virus","visage","viseur","vision","visqueux","visuel","vital","vitesse","viticole","vitrine","vivace","vivipare","vocation","voguer","voile","voisin","voiture","volaille","volcan","voltiger","volume","vorace","vortex","voter","vouloir","voyage","voyelle","wagon","xénon","yacht","zèbre","zénith","zeste","zoologie"]'
      );
    },
    83515: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '["abaco","abbaglio","abbinato","abete","abisso","abolire","abrasivo","abrogato","accadere","accenno","accusato","acetone","achille","acido","acqua","acre","acrilico","acrobata","acuto","adagio","addebito","addome","adeguato","aderire","adipe","adottare","adulare","affabile","affetto","affisso","affranto","aforisma","afoso","africano","agave","agente","agevole","aggancio","agire","agitare","agonismo","agricolo","agrumeto","aguzzo","alabarda","alato","albatro","alberato","albo","albume","alce","alcolico","alettone","alfa","algebra","aliante","alibi","alimento","allagato","allegro","allievo","allodola","allusivo","almeno","alogeno","alpaca","alpestre","altalena","alterno","alticcio","altrove","alunno","alveolo","alzare","amalgama","amanita","amarena","ambito","ambrato","ameba","america","ametista","amico","ammasso","ammenda","ammirare","ammonito","amore","ampio","ampliare","amuleto","anacardo","anagrafe","analista","anarchia","anatra","anca","ancella","ancora","andare","andrea","anello","angelo","angolare","angusto","anima","annegare","annidato","anno","annuncio","anonimo","anticipo","anzi","apatico","apertura","apode","apparire","appetito","appoggio","approdo","appunto","aprile","arabica","arachide","aragosta","araldica","arancio","aratura","arazzo","arbitro","archivio","ardito","arenile","argento","argine","arguto","aria","armonia","arnese","arredato","arringa","arrosto","arsenico","arso","artefice","arzillo","asciutto","ascolto","asepsi","asettico","asfalto","asino","asola","aspirato","aspro","assaggio","asse","assoluto","assurdo","asta","astenuto","astice","astratto","atavico","ateismo","atomico","atono","attesa","attivare","attorno","attrito","attuale","ausilio","austria","autista","autonomo","autunno","avanzato","avere","avvenire","avviso","avvolgere","azione","azoto","azzimo","azzurro","babele","baccano","bacino","baco","badessa","badilata","bagnato","baita","balcone","baldo","balena","ballata","balzano","bambino","bandire","baraonda","barbaro","barca","baritono","barlume","barocco","basilico","basso","batosta","battuto","baule","bava","bavosa","becco","beffa","belgio","belva","benda","benevole","benigno","benzina","bere","berlina","beta","bibita","bici","bidone","bifido","biga","bilancia","bimbo","binocolo","biologo","bipede","bipolare","birbante","birra","biscotto","bisesto","bisnonno","bisonte","bisturi","bizzarro","blando","blatta","bollito","bonifico","bordo","bosco","botanico","bottino","bozzolo","braccio","bradipo","brama","branca","bravura","bretella","brevetto","brezza","briglia","brillante","brindare","broccolo","brodo","bronzina","brullo","bruno","bubbone","buca","budino","buffone","buio","bulbo","buono","burlone","burrasca","bussola","busta","cadetto","caduco","calamaro","calcolo","calesse","calibro","calmo","caloria","cambusa","camerata","camicia","cammino","camola","campale","canapa","candela","cane","canino","canotto","cantina","capace","capello","capitolo","capogiro","cappero","capra","capsula","carapace","carcassa","cardo","carisma","carovana","carretto","cartolina","casaccio","cascata","caserma","caso","cassone","castello","casuale","catasta","catena","catrame","cauto","cavillo","cedibile","cedrata","cefalo","celebre","cellulare","cena","cenone","centesimo","ceramica","cercare","certo","cerume","cervello","cesoia","cespo","ceto","chela","chiaro","chicca","chiedere","chimera","china","chirurgo","chitarra","ciao","ciclismo","cifrare","cigno","cilindro","ciottolo","circa","cirrosi","citrico","cittadino","ciuffo","civetta","civile","classico","clinica","cloro","cocco","codardo","codice","coerente","cognome","collare","colmato","colore","colposo","coltivato","colza","coma","cometa","commando","comodo","computer","comune","conciso","condurre","conferma","congelare","coniuge","connesso","conoscere","consumo","continuo","convegno","coperto","copione","coppia","copricapo","corazza","cordata","coricato","cornice","corolla","corpo","corredo","corsia","cortese","cosmico","costante","cottura","covato","cratere","cravatta","creato","credere","cremoso","crescita","creta","criceto","crinale","crisi","critico","croce","cronaca","crostata","cruciale","crusca","cucire","cuculo","cugino","cullato","cupola","curatore","cursore","curvo","cuscino","custode","dado","daino","dalmata","damerino","daniela","dannoso","danzare","datato","davanti","davvero","debutto","decennio","deciso","declino","decollo","decreto","dedicato","definito","deforme","degno","delegare","delfino","delirio","delta","demenza","denotato","dentro","deposito","derapata","derivare","deroga","descritto","deserto","desiderio","desumere","detersivo","devoto","diametro","dicembre","diedro","difeso","diffuso","digerire","digitale","diluvio","dinamico","dinnanzi","dipinto","diploma","dipolo","diradare","dire","dirotto","dirupo","disagio","discreto","disfare","disgelo","disposto","distanza","disumano","dito","divano","divelto","dividere","divorato","doblone","docente","doganale","dogma","dolce","domato","domenica","dominare","dondolo","dono","dormire","dote","dottore","dovuto","dozzina","drago","druido","dubbio","dubitare","ducale","duna","duomo","duplice","duraturo","ebano","eccesso","ecco","eclissi","economia","edera","edicola","edile","editoria","educare","egemonia","egli","egoismo","egregio","elaborato","elargire","elegante","elencato","eletto","elevare","elfico","elica","elmo","elsa","eluso","emanato","emblema","emesso","emiro","emotivo","emozione","empirico","emulo","endemico","enduro","energia","enfasi","enoteca","entrare","enzima","epatite","epilogo","episodio","epocale","eppure","equatore","erario","erba","erboso","erede","eremita","erigere","ermetico","eroe","erosivo","errante","esagono","esame","esanime","esaudire","esca","esempio","esercito","esibito","esigente","esistere","esito","esofago","esortato","esoso","espanso","espresso","essenza","esso","esteso","estimare","estonia","estroso","esultare","etilico","etnico","etrusco","etto","euclideo","europa","evaso","evidenza","evitato","evoluto","evviva","fabbrica","faccenda","fachiro","falco","famiglia","fanale","fanfara","fango","fantasma","fare","farfalla","farinoso","farmaco","fascia","fastoso","fasullo","faticare","fato","favoloso","febbre","fecola","fede","fegato","felpa","feltro","femmina","fendere","fenomeno","fermento","ferro","fertile","fessura","festivo","fetta","feudo","fiaba","fiducia","fifa","figurato","filo","finanza","finestra","finire","fiore","fiscale","fisico","fiume","flacone","flamenco","flebo","flemma","florido","fluente","fluoro","fobico","focaccia","focoso","foderato","foglio","folata","folclore","folgore","fondente","fonetico","fonia","fontana","forbito","forchetta","foresta","formica","fornaio","foro","fortezza","forzare","fosfato","fosso","fracasso","frana","frassino","fratello","freccetta","frenata","fresco","frigo","frollino","fronde","frugale","frutta","fucilata","fucsia","fuggente","fulmine","fulvo","fumante","fumetto","fumoso","fune","funzione","fuoco","furbo","furgone","furore","fuso","futile","gabbiano","gaffe","galateo","gallina","galoppo","gambero","gamma","garanzia","garbo","garofano","garzone","gasdotto","gasolio","gastrico","gatto","gaudio","gazebo","gazzella","geco","gelatina","gelso","gemello","gemmato","gene","genitore","gennaio","genotipo","gergo","ghepardo","ghiaccio","ghisa","giallo","gilda","ginepro","giocare","gioiello","giorno","giove","girato","girone","gittata","giudizio","giurato","giusto","globulo","glutine","gnomo","gobba","golf","gomito","gommone","gonfio","gonna","governo","gracile","grado","grafico","grammo","grande","grattare","gravoso","grazia","greca","gregge","grifone","grigio","grinza","grotta","gruppo","guadagno","guaio","guanto","guardare","gufo","guidare","ibernato","icona","identico","idillio","idolo","idra","idrico","idrogeno","igiene","ignaro","ignorato","ilare","illeso","illogico","illudere","imballo","imbevuto","imbocco","imbuto","immane","immerso","immolato","impacco","impeto","impiego","importo","impronta","inalare","inarcare","inattivo","incanto","incendio","inchino","incisivo","incluso","incontro","incrocio","incubo","indagine","india","indole","inedito","infatti","infilare","inflitto","ingaggio","ingegno","inglese","ingordo","ingrosso","innesco","inodore","inoltrare","inondato","insano","insetto","insieme","insonnia","insulina","intasato","intero","intonaco","intuito","inumidire","invalido","invece","invito","iperbole","ipnotico","ipotesi","ippica","iride","irlanda","ironico","irrigato","irrorare","isolato","isotopo","isterico","istituto","istrice","italia","iterare","labbro","labirinto","lacca","lacerato","lacrima","lacuna","laddove","lago","lampo","lancetta","lanterna","lardoso","larga","laringe","lastra","latenza","latino","lattuga","lavagna","lavoro","legale","leggero","lembo","lentezza","lenza","leone","lepre","lesivo","lessato","lesto","letterale","leva","levigato","libero","lido","lievito","lilla","limatura","limitare","limpido","lineare","lingua","liquido","lira","lirica","lisca","lite","litigio","livrea","locanda","lode","logica","lombare","londra","longevo","loquace","lorenzo","loto","lotteria","luce","lucidato","lumaca","luminoso","lungo","lupo","luppolo","lusinga","lusso","lutto","macabro","macchina","macero","macinato","madama","magico","maglia","magnete","magro","maiolica","malafede","malgrado","malinteso","malsano","malto","malumore","mana","mancia","mandorla","mangiare","manifesto","mannaro","manovra","mansarda","mantide","manubrio","mappa","maratona","marcire","maretta","marmo","marsupio","maschera","massaia","mastino","materasso","matricola","mattone","maturo","mazurca","meandro","meccanico","mecenate","medesimo","meditare","mega","melassa","melis","melodia","meninge","meno","mensola","mercurio","merenda","merlo","meschino","mese","messere","mestolo","metallo","metodo","mettere","miagolare","mica","micelio","michele","microbo","midollo","miele","migliore","milano","milite","mimosa","minerale","mini","minore","mirino","mirtillo","miscela","missiva","misto","misurare","mitezza","mitigare","mitra","mittente","mnemonico","modello","modifica","modulo","mogano","mogio","mole","molosso","monastero","monco","mondina","monetario","monile","monotono","monsone","montato","monviso","mora","mordere","morsicato","mostro","motivato","motosega","motto","movenza","movimento","mozzo","mucca","mucosa","muffa","mughetto","mugnaio","mulatto","mulinello","multiplo","mummia","munto","muovere","murale","musa","muscolo","musica","mutevole","muto","nababbo","nafta","nanometro","narciso","narice","narrato","nascere","nastrare","naturale","nautica","naviglio","nebulosa","necrosi","negativo","negozio","nemmeno","neofita","neretto","nervo","nessuno","nettuno","neutrale","neve","nevrotico","nicchia","ninfa","nitido","nobile","nocivo","nodo","nome","nomina","nordico","normale","norvegese","nostrano","notare","notizia","notturno","novella","nucleo","nulla","numero","nuovo","nutrire","nuvola","nuziale","oasi","obbedire","obbligo","obelisco","oblio","obolo","obsoleto","occasione","occhio","occidente","occorrere","occultare","ocra","oculato","odierno","odorare","offerta","offrire","offuscato","oggetto","oggi","ognuno","olandese","olfatto","oliato","oliva","ologramma","oltre","omaggio","ombelico","ombra","omega","omissione","ondoso","onere","onice","onnivoro","onorevole","onta","operato","opinione","opposto","oracolo","orafo","ordine","orecchino","orefice","orfano","organico","origine","orizzonte","orma","ormeggio","ornativo","orologio","orrendo","orribile","ortensia","ortica","orzata","orzo","osare","oscurare","osmosi","ospedale","ospite","ossa","ossidare","ostacolo","oste","otite","otre","ottagono","ottimo","ottobre","ovale","ovest","ovino","oviparo","ovocito","ovunque","ovviare","ozio","pacchetto","pace","pacifico","padella","padrone","paese","paga","pagina","palazzina","palesare","pallido","palo","palude","pandoro","pannello","paolo","paonazzo","paprica","parabola","parcella","parere","pargolo","pari","parlato","parola","partire","parvenza","parziale","passivo","pasticca","patacca","patologia","pattume","pavone","peccato","pedalare","pedonale","peggio","peloso","penare","pendice","penisola","pennuto","penombra","pensare","pentola","pepe","pepita","perbene","percorso","perdonato","perforare","pergamena","periodo","permesso","perno","perplesso","persuaso","pertugio","pervaso","pesatore","pesista","peso","pestifero","petalo","pettine","petulante","pezzo","piacere","pianta","piattino","piccino","picozza","piega","pietra","piffero","pigiama","pigolio","pigro","pila","pilifero","pillola","pilota","pimpante","pineta","pinna","pinolo","pioggia","piombo","piramide","piretico","pirite","pirolisi","pitone","pizzico","placebo","planare","plasma","platano","plenario","pochezza","poderoso","podismo","poesia","poggiare","polenta","poligono","pollice","polmonite","polpetta","polso","poltrona","polvere","pomice","pomodoro","ponte","popoloso","porfido","poroso","porpora","porre","portata","posa","positivo","possesso","postulato","potassio","potere","pranzo","prassi","pratica","precluso","predica","prefisso","pregiato","prelievo","premere","prenotare","preparato","presenza","pretesto","prevalso","prima","principe","privato","problema","procura","produrre","profumo","progetto","prolunga","promessa","pronome","proposta","proroga","proteso","prova","prudente","prugna","prurito","psiche","pubblico","pudica","pugilato","pugno","pulce","pulito","pulsante","puntare","pupazzo","pupilla","puro","quadro","qualcosa","quasi","querela","quota","raccolto","raddoppio","radicale","radunato","raffica","ragazzo","ragione","ragno","ramarro","ramingo","ramo","randagio","rantolare","rapato","rapina","rappreso","rasatura","raschiato","rasente","rassegna","rastrello","rata","ravveduto","reale","recepire","recinto","recluta","recondito","recupero","reddito","redimere","regalato","registro","regola","regresso","relazione","remare","remoto","renna","replica","reprimere","reputare","resa","residente","responso","restauro","rete","retina","retorica","rettifica","revocato","riassunto","ribadire","ribelle","ribrezzo","ricarica","ricco","ricevere","riciclato","ricordo","ricreduto","ridicolo","ridurre","rifasare","riflesso","riforma","rifugio","rigare","rigettato","righello","rilassato","rilevato","rimanere","rimbalzo","rimedio","rimorchio","rinascita","rincaro","rinforzo","rinnovo","rinomato","rinsavito","rintocco","rinuncia","rinvenire","riparato","ripetuto","ripieno","riportare","ripresa","ripulire","risata","rischio","riserva","risibile","riso","rispetto","ristoro","risultato","risvolto","ritardo","ritegno","ritmico","ritrovo","riunione","riva","riverso","rivincita","rivolto","rizoma","roba","robotico","robusto","roccia","roco","rodaggio","rodere","roditore","rogito","rollio","romantico","rompere","ronzio","rosolare","rospo","rotante","rotondo","rotula","rovescio","rubizzo","rubrica","ruga","rullino","rumine","rumoroso","ruolo","rupe","russare","rustico","sabato","sabbiare","sabotato","sagoma","salasso","saldatura","salgemma","salivare","salmone","salone","saltare","saluto","salvo","sapere","sapido","saporito","saraceno","sarcasmo","sarto","sassoso","satellite","satira","satollo","saturno","savana","savio","saziato","sbadiglio","sbalzo","sbancato","sbarra","sbattere","sbavare","sbendare","sbirciare","sbloccato","sbocciato","sbrinare","sbruffone","sbuffare","scabroso","scadenza","scala","scambiare","scandalo","scapola","scarso","scatenare","scavato","scelto","scenico","scettro","scheda","schiena","sciarpa","scienza","scindere","scippo","sciroppo","scivolo","sclerare","scodella","scolpito","scomparto","sconforto","scoprire","scorta","scossone","scozzese","scriba","scrollare","scrutinio","scuderia","scultore","scuola","scuro","scusare","sdebitare","sdoganare","seccatura","secondo","sedano","seggiola","segnalato","segregato","seguito","selciato","selettivo","sella","selvaggio","semaforo","sembrare","seme","seminato","sempre","senso","sentire","sepolto","sequenza","serata","serbato","sereno","serio","serpente","serraglio","servire","sestina","setola","settimana","sfacelo","sfaldare","sfamato","sfarzoso","sfaticato","sfera","sfida","sfilato","sfinge","sfocato","sfoderare","sfogo","sfoltire","sforzato","sfratto","sfruttato","sfuggito","sfumare","sfuso","sgabello","sgarbato","sgonfiare","sgorbio","sgrassato","sguardo","sibilo","siccome","sierra","sigla","signore","silenzio","sillaba","simbolo","simpatico","simulato","sinfonia","singolo","sinistro","sino","sintesi","sinusoide","sipario","sisma","sistole","situato","slitta","slogatura","sloveno","smarrito","smemorato","smentito","smeraldo","smilzo","smontare","smottato","smussato","snellire","snervato","snodo","sobbalzo","sobrio","soccorso","sociale","sodale","soffitto","sogno","soldato","solenne","solido","sollazzo","solo","solubile","solvente","somatico","somma","sonda","sonetto","sonnifero","sopire","soppeso","sopra","sorgere","sorpasso","sorriso","sorso","sorteggio","sorvolato","sospiro","sosta","sottile","spada","spalla","spargere","spatola","spavento","spazzola","specie","spedire","spegnere","spelatura","speranza","spessore","spettrale","spezzato","spia","spigoloso","spillato","spinoso","spirale","splendido","sportivo","sposo","spranga","sprecare","spronato","spruzzo","spuntino","squillo","sradicare","srotolato","stabile","stacco","staffa","stagnare","stampato","stantio","starnuto","stasera","statuto","stelo","steppa","sterzo","stiletto","stima","stirpe","stivale","stizzoso","stonato","storico","strappo","stregato","stridulo","strozzare","strutto","stuccare","stufo","stupendo","subentro","succoso","sudore","suggerito","sugo","sultano","suonare","superbo","supporto","surgelato","surrogato","sussurro","sutura","svagare","svedese","sveglio","svelare","svenuto","svezia","sviluppo","svista","svizzera","svolta","svuotare","tabacco","tabulato","tacciare","taciturno","tale","talismano","tampone","tannino","tara","tardivo","targato","tariffa","tarpare","tartaruga","tasto","tattico","taverna","tavolata","tazza","teca","tecnico","telefono","temerario","tempo","temuto","tendone","tenero","tensione","tentacolo","teorema","terme","terrazzo","terzetto","tesi","tesserato","testato","tetro","tettoia","tifare","tigella","timbro","tinto","tipico","tipografo","tiraggio","tiro","titanio","titolo","titubante","tizio","tizzone","toccare","tollerare","tolto","tombola","tomo","tonfo","tonsilla","topazio","topologia","toppa","torba","tornare","torrone","tortora","toscano","tossire","tostatura","totano","trabocco","trachea","trafila","tragedia","tralcio","tramonto","transito","trapano","trarre","trasloco","trattato","trave","treccia","tremolio","trespolo","tributo","tricheco","trifoglio","trillo","trincea","trio","tristezza","triturato","trivella","tromba","trono","troppo","trottola","trovare","truccato","tubatura","tuffato","tulipano","tumulto","tunisia","turbare","turchino","tuta","tutela","ubicato","uccello","uccisore","udire","uditivo","uffa","ufficio","uguale","ulisse","ultimato","umano","umile","umorismo","uncinetto","ungere","ungherese","unicorno","unificato","unisono","unitario","unte","uovo","upupa","uragano","urgenza","urlo","usanza","usato","uscito","usignolo","usuraio","utensile","utilizzo","utopia","vacante","vaccinato","vagabondo","vagliato","valanga","valgo","valico","valletta","valoroso","valutare","valvola","vampata","vangare","vanitoso","vano","vantaggio","vanvera","vapore","varano","varcato","variante","vasca","vedetta","vedova","veduto","vegetale","veicolo","velcro","velina","velluto","veloce","venato","vendemmia","vento","verace","verbale","vergogna","verifica","vero","verruca","verticale","vescica","vessillo","vestale","veterano","vetrina","vetusto","viandante","vibrante","vicenda","vichingo","vicinanza","vidimare","vigilia","vigneto","vigore","vile","villano","vimini","vincitore","viola","vipera","virgola","virologo","virulento","viscoso","visione","vispo","vissuto","visura","vita","vitello","vittima","vivanda","vivido","viziare","voce","voga","volatile","volere","volpe","voragine","vulcano","zampogna","zanna","zappato","zattera","zavorra","zefiro","zelante","zelo","zenzero","zerbino","zibetto","zinco","zircone","zitto","zolla","zotico","zucchero","zufolo","zulu","zuppa"]'
      );
    },
    884: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '["あいこくしん","あいさつ","あいだ","あおぞら","あかちゃん","あきる","あけがた","あける","あこがれる","あさい","あさひ","あしあと","あじわう","あずかる","あずき","あそぶ","あたえる","あたためる","あたりまえ","あたる","あつい","あつかう","あっしゅく","あつまり","あつめる","あてな","あてはまる","あひる","あぶら","あぶる","あふれる","あまい","あまど","あまやかす","あまり","あみもの","あめりか","あやまる","あゆむ","あらいぐま","あらし","あらすじ","あらためる","あらゆる","あらわす","ありがとう","あわせる","あわてる","あんい","あんがい","あんこ","あんぜん","あんてい","あんない","あんまり","いいだす","いおん","いがい","いがく","いきおい","いきなり","いきもの","いきる","いくじ","いくぶん","いけばな","いけん","いこう","いこく","いこつ","いさましい","いさん","いしき","いじゅう","いじょう","いじわる","いずみ","いずれ","いせい","いせえび","いせかい","いせき","いぜん","いそうろう","いそがしい","いだい","いだく","いたずら","いたみ","いたりあ","いちおう","いちじ","いちど","いちば","いちぶ","いちりゅう","いつか","いっしゅん","いっせい","いっそう","いったん","いっち","いってい","いっぽう","いてざ","いてん","いどう","いとこ","いない","いなか","いねむり","いのち","いのる","いはつ","いばる","いはん","いびき","いひん","いふく","いへん","いほう","いみん","いもうと","いもたれ","いもり","いやがる","いやす","いよかん","いよく","いらい","いらすと","いりぐち","いりょう","いれい","いれもの","いれる","いろえんぴつ","いわい","いわう","いわかん","いわば","いわゆる","いんげんまめ","いんさつ","いんしょう","いんよう","うえき","うえる","うおざ","うがい","うかぶ","うかべる","うきわ","うくらいな","うくれれ","うけたまわる","うけつけ","うけとる","うけもつ","うける","うごかす","うごく","うこん","うさぎ","うしなう","うしろがみ","うすい","うすぎ","うすぐらい","うすめる","うせつ","うちあわせ","うちがわ","うちき","うちゅう","うっかり","うつくしい","うったえる","うつる","うどん","うなぎ","うなじ","うなずく","うなる","うねる","うのう","うぶげ","うぶごえ","うまれる","うめる","うもう","うやまう","うよく","うらがえす","うらぐち","うらない","うりあげ","うりきれ","うるさい","うれしい","うれゆき","うれる","うろこ","うわき","うわさ","うんこう","うんちん","うんてん","うんどう","えいえん","えいが","えいきょう","えいご","えいせい","えいぶん","えいよう","えいわ","えおり","えがお","えがく","えきたい","えくせる","えしゃく","えすて","えつらん","えのぐ","えほうまき","えほん","えまき","えもじ","えもの","えらい","えらぶ","えりあ","えんえん","えんかい","えんぎ","えんげき","えんしゅう","えんぜつ","えんそく","えんちょう","えんとつ","おいかける","おいこす","おいしい","おいつく","おうえん","おうさま","おうじ","おうせつ","おうたい","おうふく","おうべい","おうよう","おえる","おおい","おおう","おおどおり","おおや","おおよそ","おかえり","おかず","おがむ","おかわり","おぎなう","おきる","おくさま","おくじょう","おくりがな","おくる","おくれる","おこす","おこなう","おこる","おさえる","おさない","おさめる","おしいれ","おしえる","おじぎ","おじさん","おしゃれ","おそらく","おそわる","おたがい","おたく","おだやか","おちつく","おっと","おつり","おでかけ","おとしもの","おとなしい","おどり","おどろかす","おばさん","おまいり","おめでとう","おもいで","おもう","おもたい","おもちゃ","おやつ","おやゆび","およぼす","おらんだ","おろす","おんがく","おんけい","おんしゃ","おんせん","おんだん","おんちゅう","おんどけい","かあつ","かいが","がいき","がいけん","がいこう","かいさつ","かいしゃ","かいすいよく","かいぜん","かいぞうど","かいつう","かいてん","かいとう","かいふく","がいへき","かいほう","かいよう","がいらい","かいわ","かえる","かおり","かかえる","かがく","かがし","かがみ","かくご","かくとく","かざる","がぞう","かたい","かたち","がちょう","がっきゅう","がっこう","がっさん","がっしょう","かなざわし","かのう","がはく","かぶか","かほう","かほご","かまう","かまぼこ","かめれおん","かゆい","かようび","からい","かるい","かろう","かわく","かわら","がんか","かんけい","かんこう","かんしゃ","かんそう","かんたん","かんち","がんばる","きあい","きあつ","きいろ","ぎいん","きうい","きうん","きえる","きおう","きおく","きおち","きおん","きかい","きかく","きかんしゃ","ききて","きくばり","きくらげ","きけんせい","きこう","きこえる","きこく","きさい","きさく","きさま","きさらぎ","ぎじかがく","ぎしき","ぎじたいけん","ぎじにってい","ぎじゅつしゃ","きすう","きせい","きせき","きせつ","きそう","きぞく","きぞん","きたえる","きちょう","きつえん","ぎっちり","きつつき","きつね","きてい","きどう","きどく","きない","きなが","きなこ","きぬごし","きねん","きのう","きのした","きはく","きびしい","きひん","きふく","きぶん","きぼう","きほん","きまる","きみつ","きむずかしい","きめる","きもだめし","きもち","きもの","きゃく","きやく","ぎゅうにく","きよう","きょうりゅう","きらい","きらく","きりん","きれい","きれつ","きろく","ぎろん","きわめる","ぎんいろ","きんかくじ","きんじょ","きんようび","ぐあい","くいず","くうかん","くうき","くうぐん","くうこう","ぐうせい","くうそう","ぐうたら","くうふく","くうぼ","くかん","くきょう","くげん","ぐこう","くさい","くさき","くさばな","くさる","くしゃみ","くしょう","くすのき","くすりゆび","くせげ","くせん","ぐたいてき","くださる","くたびれる","くちこみ","くちさき","くつした","ぐっすり","くつろぐ","くとうてん","くどく","くなん","くねくね","くのう","くふう","くみあわせ","くみたてる","くめる","くやくしょ","くらす","くらべる","くるま","くれる","くろう","くわしい","ぐんかん","ぐんしょく","ぐんたい","ぐんて","けあな","けいかく","けいけん","けいこ","けいさつ","げいじゅつ","けいたい","げいのうじん","けいれき","けいろ","けおとす","けおりもの","げきか","げきげん","げきだん","げきちん","げきとつ","げきは","げきやく","げこう","げこくじょう","げざい","けさき","げざん","けしき","けしごむ","けしょう","げすと","けたば","けちゃっぷ","けちらす","けつあつ","けつい","けつえき","けっこん","けつじょ","けっせき","けってい","けつまつ","げつようび","げつれい","けつろん","げどく","けとばす","けとる","けなげ","けなす","けなみ","けぬき","げねつ","けねん","けはい","げひん","けぶかい","げぼく","けまり","けみかる","けむし","けむり","けもの","けらい","けろけろ","けわしい","けんい","けんえつ","けんお","けんか","げんき","けんげん","けんこう","けんさく","けんしゅう","けんすう","げんそう","けんちく","けんてい","けんとう","けんない","けんにん","げんぶつ","けんま","けんみん","けんめい","けんらん","けんり","こあくま","こいぬ","こいびと","ごうい","こうえん","こうおん","こうかん","ごうきゅう","ごうけい","こうこう","こうさい","こうじ","こうすい","ごうせい","こうそく","こうたい","こうちゃ","こうつう","こうてい","こうどう","こうない","こうはい","ごうほう","ごうまん","こうもく","こうりつ","こえる","こおり","ごかい","ごがつ","ごかん","こくご","こくさい","こくとう","こくない","こくはく","こぐま","こけい","こける","ここのか","こころ","こさめ","こしつ","こすう","こせい","こせき","こぜん","こそだて","こたい","こたえる","こたつ","こちょう","こっか","こつこつ","こつばん","こつぶ","こてい","こてん","ことがら","ことし","ことば","ことり","こなごな","こねこね","このまま","このみ","このよ","ごはん","こひつじ","こふう","こふん","こぼれる","ごまあぶら","こまかい","ごますり","こまつな","こまる","こむぎこ","こもじ","こもち","こもの","こもん","こやく","こやま","こゆう","こゆび","こよい","こよう","こりる","これくしょん","ころっけ","こわもて","こわれる","こんいん","こんかい","こんき","こんしゅう","こんすい","こんだて","こんとん","こんなん","こんびに","こんぽん","こんまけ","こんや","こんれい","こんわく","ざいえき","さいかい","さいきん","ざいげん","ざいこ","さいしょ","さいせい","ざいたく","ざいちゅう","さいてき","ざいりょう","さうな","さかいし","さがす","さかな","さかみち","さがる","さぎょう","さくし","さくひん","さくら","さこく","さこつ","さずかる","ざせき","さたん","さつえい","ざつおん","ざっか","ざつがく","さっきょく","ざっし","さつじん","ざっそう","さつたば","さつまいも","さてい","さといも","さとう","さとおや","さとし","さとる","さのう","さばく","さびしい","さべつ","さほう","さほど","さます","さみしい","さみだれ","さむけ","さめる","さやえんどう","さゆう","さよう","さよく","さらだ","ざるそば","さわやか","さわる","さんいん","さんか","さんきゃく","さんこう","さんさい","ざんしょ","さんすう","さんせい","さんそ","さんち","さんま","さんみ","さんらん","しあい","しあげ","しあさって","しあわせ","しいく","しいん","しうち","しえい","しおけ","しかい","しかく","じかん","しごと","しすう","じだい","したうけ","したぎ","したて","したみ","しちょう","しちりん","しっかり","しつじ","しつもん","してい","してき","してつ","じてん","じどう","しなぎれ","しなもの","しなん","しねま","しねん","しのぐ","しのぶ","しはい","しばかり","しはつ","しはらい","しはん","しひょう","しふく","じぶん","しへい","しほう","しほん","しまう","しまる","しみん","しむける","じむしょ","しめい","しめる","しもん","しゃいん","しゃうん","しゃおん","じゃがいも","しやくしょ","しゃくほう","しゃけん","しゃこ","しゃざい","しゃしん","しゃせん","しゃそう","しゃたい","しゃちょう","しゃっきん","じゃま","しゃりん","しゃれい","じゆう","じゅうしょ","しゅくはく","じゅしん","しゅっせき","しゅみ","しゅらば","じゅんばん","しょうかい","しょくたく","しょっけん","しょどう","しょもつ","しらせる","しらべる","しんか","しんこう","じんじゃ","しんせいじ","しんちく","しんりん","すあげ","すあし","すあな","ずあん","すいえい","すいか","すいとう","ずいぶん","すいようび","すうがく","すうじつ","すうせん","すおどり","すきま","すくう","すくない","すける","すごい","すこし","ずさん","すずしい","すすむ","すすめる","すっかり","ずっしり","ずっと","すてき","すてる","すねる","すのこ","すはだ","すばらしい","ずひょう","ずぶぬれ","すぶり","すふれ","すべて","すべる","ずほう","すぼん","すまい","すめし","すもう","すやき","すらすら","するめ","すれちがう","すろっと","すわる","すんぜん","すんぽう","せあぶら","せいかつ","せいげん","せいじ","せいよう","せおう","せかいかん","せきにん","せきむ","せきゆ","せきらんうん","せけん","せこう","せすじ","せたい","せたけ","せっかく","せっきゃく","ぜっく","せっけん","せっこつ","せっさたくま","せつぞく","せつだん","せつでん","せっぱん","せつび","せつぶん","せつめい","せつりつ","せなか","せのび","せはば","せびろ","せぼね","せまい","せまる","せめる","せもたれ","せりふ","ぜんあく","せんい","せんえい","せんか","せんきょ","せんく","せんげん","ぜんご","せんさい","せんしゅ","せんすい","せんせい","せんぞ","せんたく","せんちょう","せんてい","せんとう","せんぬき","せんねん","せんぱい","ぜんぶ","ぜんぽう","せんむ","せんめんじょ","せんもん","せんやく","せんゆう","せんよう","ぜんら","ぜんりゃく","せんれい","せんろ","そあく","そいとげる","そいね","そうがんきょう","そうき","そうご","そうしん","そうだん","そうなん","そうび","そうめん","そうり","そえもの","そえん","そがい","そげき","そこう","そこそこ","そざい","そしな","そせい","そせん","そそぐ","そだてる","そつう","そつえん","そっかん","そつぎょう","そっけつ","そっこう","そっせん","そっと","そとがわ","そとづら","そなえる","そなた","そふぼ","そぼく","そぼろ","そまつ","そまる","そむく","そむりえ","そめる","そもそも","そよかぜ","そらまめ","そろう","そんかい","そんけい","そんざい","そんしつ","そんぞく","そんちょう","ぞんび","ぞんぶん","そんみん","たあい","たいいん","たいうん","たいえき","たいおう","だいがく","たいき","たいぐう","たいけん","たいこ","たいざい","だいじょうぶ","だいすき","たいせつ","たいそう","だいたい","たいちょう","たいてい","だいどころ","たいない","たいねつ","たいのう","たいはん","だいひょう","たいふう","たいへん","たいほ","たいまつばな","たいみんぐ","たいむ","たいめん","たいやき","たいよう","たいら","たいりょく","たいる","たいわん","たうえ","たえる","たおす","たおる","たおれる","たかい","たかね","たきび","たくさん","たこく","たこやき","たさい","たしざん","だじゃれ","たすける","たずさわる","たそがれ","たたかう","たたく","ただしい","たたみ","たちばな","だっかい","だっきゃく","だっこ","だっしゅつ","だったい","たてる","たとえる","たなばた","たにん","たぬき","たのしみ","たはつ","たぶん","たべる","たぼう","たまご","たまる","だむる","ためいき","ためす","ためる","たもつ","たやすい","たよる","たらす","たりきほんがん","たりょう","たりる","たると","たれる","たれんと","たろっと","たわむれる","だんあつ","たんい","たんおん","たんか","たんき","たんけん","たんご","たんさん","たんじょうび","だんせい","たんそく","たんたい","だんち","たんてい","たんとう","だんな","たんにん","だんねつ","たんのう","たんぴん","だんぼう","たんまつ","たんめい","だんれつ","だんろ","だんわ","ちあい","ちあん","ちいき","ちいさい","ちえん","ちかい","ちから","ちきゅう","ちきん","ちけいず","ちけん","ちこく","ちさい","ちしき","ちしりょう","ちせい","ちそう","ちたい","ちたん","ちちおや","ちつじょ","ちてき","ちてん","ちぬき","ちぬり","ちのう","ちひょう","ちへいせん","ちほう","ちまた","ちみつ","ちみどろ","ちめいど","ちゃんこなべ","ちゅうい","ちゆりょく","ちょうし","ちょさくけん","ちらし","ちらみ","ちりがみ","ちりょう","ちるど","ちわわ","ちんたい","ちんもく","ついか","ついたち","つうか","つうじょう","つうはん","つうわ","つかう","つかれる","つくね","つくる","つけね","つける","つごう","つたえる","つづく","つつじ","つつむ","つとめる","つながる","つなみ","つねづね","つのる","つぶす","つまらない","つまる","つみき","つめたい","つもり","つもる","つよい","つるぼ","つるみく","つわもの","つわり","てあし","てあて","てあみ","ていおん","ていか","ていき","ていけい","ていこく","ていさつ","ていし","ていせい","ていたい","ていど","ていねい","ていひょう","ていへん","ていぼう","てうち","ておくれ","てきとう","てくび","でこぼこ","てさぎょう","てさげ","てすり","てそう","てちがい","てちょう","てつがく","てつづき","でっぱ","てつぼう","てつや","でぬかえ","てぬき","てぬぐい","てのひら","てはい","てぶくろ","てふだ","てほどき","てほん","てまえ","てまきずし","てみじか","てみやげ","てらす","てれび","てわけ","てわたし","でんあつ","てんいん","てんかい","てんき","てんぐ","てんけん","てんごく","てんさい","てんし","てんすう","でんち","てんてき","てんとう","てんない","てんぷら","てんぼうだい","てんめつ","てんらんかい","でんりょく","でんわ","どあい","といれ","どうかん","とうきゅう","どうぐ","とうし","とうむぎ","とおい","とおか","とおく","とおす","とおる","とかい","とかす","ときおり","ときどき","とくい","とくしゅう","とくてん","とくに","とくべつ","とけい","とける","とこや","とさか","としょかん","とそう","とたん","とちゅう","とっきゅう","とっくん","とつぜん","とつにゅう","とどける","ととのえる","とない","となえる","となり","とのさま","とばす","どぶがわ","とほう","とまる","とめる","ともだち","ともる","どようび","とらえる","とんかつ","どんぶり","ないかく","ないこう","ないしょ","ないす","ないせん","ないそう","なおす","ながい","なくす","なげる","なこうど","なさけ","なたでここ","なっとう","なつやすみ","ななおし","なにごと","なにもの","なにわ","なのか","なふだ","なまいき","なまえ","なまみ","なみだ","なめらか","なめる","なやむ","ならう","ならび","ならぶ","なれる","なわとび","なわばり","にあう","にいがた","にうけ","におい","にかい","にがて","にきび","にくしみ","にくまん","にげる","にさんかたんそ","にしき","にせもの","にちじょう","にちようび","にっか","にっき","にっけい","にっこう","にっさん","にっしょく","にっすう","にっせき","にってい","になう","にほん","にまめ","にもつ","にやり","にゅういん","にりんしゃ","にわとり","にんい","にんか","にんき","にんげん","にんしき","にんずう","にんそう","にんたい","にんち","にんてい","にんにく","にんぷ","にんまり","にんむ","にんめい","にんよう","ぬいくぎ","ぬかす","ぬぐいとる","ぬぐう","ぬくもり","ぬすむ","ぬまえび","ぬめり","ぬらす","ぬんちゃく","ねあげ","ねいき","ねいる","ねいろ","ねぐせ","ねくたい","ねくら","ねこぜ","ねこむ","ねさげ","ねすごす","ねそべる","ねだん","ねつい","ねっしん","ねつぞう","ねったいぎょ","ねぶそく","ねふだ","ねぼう","ねほりはほり","ねまき","ねまわし","ねみみ","ねむい","ねむたい","ねもと","ねらう","ねわざ","ねんいり","ねんおし","ねんかん","ねんきん","ねんぐ","ねんざ","ねんし","ねんちゃく","ねんど","ねんぴ","ねんぶつ","ねんまつ","ねんりょう","ねんれい","のいず","のおづま","のがす","のきなみ","のこぎり","のこす","のこる","のせる","のぞく","のぞむ","のたまう","のちほど","のっく","のばす","のはら","のべる","のぼる","のみもの","のやま","のらいぬ","のらねこ","のりもの","のりゆき","のれん","のんき","ばあい","はあく","ばあさん","ばいか","ばいく","はいけん","はいご","はいしん","はいすい","はいせん","はいそう","はいち","ばいばい","はいれつ","はえる","はおる","はかい","ばかり","はかる","はくしゅ","はけん","はこぶ","はさみ","はさん","はしご","ばしょ","はしる","はせる","ぱそこん","はそん","はたん","はちみつ","はつおん","はっかく","はづき","はっきり","はっくつ","はっけん","はっこう","はっさん","はっしん","はったつ","はっちゅう","はってん","はっぴょう","はっぽう","はなす","はなび","はにかむ","はぶらし","はみがき","はむかう","はめつ","はやい","はやし","はらう","はろうぃん","はわい","はんい","はんえい","はんおん","はんかく","はんきょう","ばんぐみ","はんこ","はんしゃ","はんすう","はんだん","ぱんち","ぱんつ","はんてい","はんとし","はんのう","はんぱ","はんぶん","はんぺん","はんぼうき","はんめい","はんらん","はんろん","ひいき","ひうん","ひえる","ひかく","ひかり","ひかる","ひかん","ひくい","ひけつ","ひこうき","ひこく","ひさい","ひさしぶり","ひさん","びじゅつかん","ひしょ","ひそか","ひそむ","ひたむき","ひだり","ひたる","ひつぎ","ひっこし","ひっし","ひつじゅひん","ひっす","ひつぜん","ぴったり","ぴっちり","ひつよう","ひてい","ひとごみ","ひなまつり","ひなん","ひねる","ひはん","ひびく","ひひょう","ひほう","ひまわり","ひまん","ひみつ","ひめい","ひめじし","ひやけ","ひやす","ひよう","びょうき","ひらがな","ひらく","ひりつ","ひりょう","ひるま","ひるやすみ","ひれい","ひろい","ひろう","ひろき","ひろゆき","ひんかく","ひんけつ","ひんこん","ひんしゅ","ひんそう","ぴんち","ひんぱん","びんぼう","ふあん","ふいうち","ふうけい","ふうせん","ぷうたろう","ふうとう","ふうふ","ふえる","ふおん","ふかい","ふきん","ふくざつ","ふくぶくろ","ふこう","ふさい","ふしぎ","ふじみ","ふすま","ふせい","ふせぐ","ふそく","ぶたにく","ふたん","ふちょう","ふつう","ふつか","ふっかつ","ふっき","ふっこく","ぶどう","ふとる","ふとん","ふのう","ふはい","ふひょう","ふへん","ふまん","ふみん","ふめつ","ふめん","ふよう","ふりこ","ふりる","ふるい","ふんいき","ぶんがく","ぶんぐ","ふんしつ","ぶんせき","ふんそう","ぶんぽう","へいあん","へいおん","へいがい","へいき","へいげん","へいこう","へいさ","へいしゃ","へいせつ","へいそ","へいたく","へいてん","へいねつ","へいわ","へきが","へこむ","べにいろ","べにしょうが","へらす","へんかん","べんきょう","べんごし","へんさい","へんたい","べんり","ほあん","ほいく","ぼうぎょ","ほうこく","ほうそう","ほうほう","ほうもん","ほうりつ","ほえる","ほおん","ほかん","ほきょう","ぼきん","ほくろ","ほけつ","ほけん","ほこう","ほこる","ほしい","ほしつ","ほしゅ","ほしょう","ほせい","ほそい","ほそく","ほたて","ほたる","ぽちぶくろ","ほっきょく","ほっさ","ほったん","ほとんど","ほめる","ほんい","ほんき","ほんけ","ほんしつ","ほんやく","まいにち","まかい","まかせる","まがる","まける","まこと","まさつ","まじめ","ますく","まぜる","まつり","まとめ","まなぶ","まぬけ","まねく","まほう","まもる","まゆげ","まよう","まろやか","まわす","まわり","まわる","まんが","まんきつ","まんぞく","まんなか","みいら","みうち","みえる","みがく","みかた","みかん","みけん","みこん","みじかい","みすい","みすえる","みせる","みっか","みつかる","みつける","みてい","みとめる","みなと","みなみかさい","みねらる","みのう","みのがす","みほん","みもと","みやげ","みらい","みりょく","みわく","みんか","みんぞく","むいか","むえき","むえん","むかい","むかう","むかえ","むかし","むぎちゃ","むける","むげん","むさぼる","むしあつい","むしば","むじゅん","むしろ","むすう","むすこ","むすぶ","むすめ","むせる","むせん","むちゅう","むなしい","むのう","むやみ","むよう","むらさき","むりょう","むろん","めいあん","めいうん","めいえん","めいかく","めいきょく","めいさい","めいし","めいそう","めいぶつ","めいれい","めいわく","めぐまれる","めざす","めした","めずらしい","めだつ","めまい","めやす","めんきょ","めんせき","めんどう","もうしあげる","もうどうけん","もえる","もくし","もくてき","もくようび","もちろん","もどる","もらう","もんく","もんだい","やおや","やける","やさい","やさしい","やすい","やすたろう","やすみ","やせる","やそう","やたい","やちん","やっと","やっぱり","やぶる","やめる","ややこしい","やよい","やわらかい","ゆうき","ゆうびんきょく","ゆうべ","ゆうめい","ゆけつ","ゆしゅつ","ゆせん","ゆそう","ゆたか","ゆちゃく","ゆでる","ゆにゅう","ゆびわ","ゆらい","ゆれる","ようい","ようか","ようきゅう","ようじ","ようす","ようちえん","よかぜ","よかん","よきん","よくせい","よくぼう","よけい","よごれる","よさん","よしゅう","よそう","よそく","よっか","よてい","よどがわく","よねつ","よやく","よゆう","よろこぶ","よろしい","らいう","らくがき","らくご","らくさつ","らくだ","らしんばん","らせん","らぞく","らたい","らっか","られつ","りえき","りかい","りきさく","りきせつ","りくぐん","りくつ","りけん","りこう","りせい","りそう","りそく","りてん","りねん","りゆう","りゅうがく","りよう","りょうり","りょかん","りょくちゃ","りょこう","りりく","りれき","りろん","りんご","るいけい","るいさい","るいじ","るいせき","るすばん","るりがわら","れいかん","れいぎ","れいせい","れいぞうこ","れいとう","れいぼう","れきし","れきだい","れんあい","れんけい","れんこん","れんさい","れんしゅう","れんぞく","れんらく","ろうか","ろうご","ろうじん","ろうそく","ろくが","ろこつ","ろじうら","ろしゅつ","ろせん","ろてん","ろめん","ろれつ","ろんぎ","ろんぱ","ろんぶん","ろんり","わかす","わかめ","わかやま","わかれる","わしつ","わじまし","わすれもの","わらう","われる"]'
      );
    },
    13517: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '["가격","가끔","가난","가능","가득","가르침","가뭄","가방","가상","가슴","가운데","가을","가이드","가입","가장","가정","가족","가죽","각오","각자","간격","간부","간섭","간장","간접","간판","갈등","갈비","갈색","갈증","감각","감기","감소","감수성","감자","감정","갑자기","강남","강당","강도","강력히","강변","강북","강사","강수량","강아지","강원도","강의","강제","강조","같이","개구리","개나리","개방","개별","개선","개성","개인","객관적","거실","거액","거울","거짓","거품","걱정","건강","건물","건설","건조","건축","걸음","검사","검토","게시판","게임","겨울","견해","결과","결국","결론","결석","결승","결심","결정","결혼","경계","경고","경기","경력","경복궁","경비","경상도","경영","경우","경쟁","경제","경주","경찰","경치","경향","경험","계곡","계단","계란","계산","계속","계약","계절","계층","계획","고객","고구려","고궁","고급","고등학생","고무신","고민","고양이","고장","고전","고집","고춧가루","고통","고향","곡식","골목","골짜기","골프","공간","공개","공격","공군","공급","공기","공동","공무원","공부","공사","공식","공업","공연","공원","공장","공짜","공책","공통","공포","공항","공휴일","과목","과일","과장","과정","과학","관객","관계","관광","관념","관람","관련","관리","관습","관심","관점","관찰","광경","광고","광장","광주","괴로움","굉장히","교과서","교문","교복","교실","교양","교육","교장","교직","교통","교환","교훈","구경","구름","구멍","구별","구분","구석","구성","구속","구역","구입","구청","구체적","국가","국기","국내","국립","국물","국민","국수","국어","국왕","국적","국제","국회","군대","군사","군인","궁극적","권리","권위","권투","귀국","귀신","규정","규칙","균형","그날","그냥","그늘","그러나","그룹","그릇","그림","그제서야","그토록","극복","극히","근거","근교","근래","근로","근무","근본","근원","근육","근처","글씨","글자","금강산","금고","금년","금메달","금액","금연","금요일","금지","긍정적","기간","기관","기념","기능","기독교","기둥","기록","기름","기법","기본","기분","기쁨","기숙사","기술","기억","기업","기온","기운","기원","기적","기준","기침","기혼","기획","긴급","긴장","길이","김밥","김치","김포공항","깍두기","깜빡","깨달음","깨소금","껍질","꼭대기","꽃잎","나들이","나란히","나머지","나물","나침반","나흘","낙엽","난방","날개","날씨","날짜","남녀","남대문","남매","남산","남자","남편","남학생","낭비","낱말","내년","내용","내일","냄비","냄새","냇물","냉동","냉면","냉방","냉장고","넥타이","넷째","노동","노란색","노력","노인","녹음","녹차","녹화","논리","논문","논쟁","놀이","농구","농담","농민","농부","농업","농장","농촌","높이","눈동자","눈물","눈썹","뉴욕","느낌","늑대","능동적","능력","다방","다양성","다음","다이어트","다행","단계","단골","단독","단맛","단순","단어","단위","단점","단체","단추","단편","단풍","달걀","달러","달력","달리","닭고기","담당","담배","담요","담임","답변","답장","당근","당분간","당연히","당장","대규모","대낮","대단히","대답","대도시","대략","대량","대륙","대문","대부분","대신","대응","대장","대전","대접","대중","대책","대출","대충","대통령","대학","대한민국","대합실","대형","덩어리","데이트","도대체","도덕","도둑","도망","도서관","도심","도움","도입","도자기","도저히","도전","도중","도착","독감","독립","독서","독일","독창적","동화책","뒷모습","뒷산","딸아이","마누라","마늘","마당","마라톤","마련","마무리","마사지","마약","마요네즈","마을","마음","마이크","마중","마지막","마찬가지","마찰","마흔","막걸리","막내","막상","만남","만두","만세","만약","만일","만점","만족","만화","많이","말기","말씀","말투","맘대로","망원경","매년","매달","매력","매번","매스컴","매일","매장","맥주","먹이","먼저","먼지","멀리","메일","며느리","며칠","면담","멸치","명단","명령","명예","명의","명절","명칭","명함","모금","모니터","모델","모든","모범","모습","모양","모임","모조리","모집","모퉁이","목걸이","목록","목사","목소리","목숨","목적","목표","몰래","몸매","몸무게","몸살","몸속","몸짓","몸통","몹시","무관심","무궁화","무더위","무덤","무릎","무슨","무엇","무역","무용","무조건","무지개","무척","문구","문득","문법","문서","문제","문학","문화","물가","물건","물결","물고기","물론","물리학","물음","물질","물체","미국","미디어","미사일","미술","미역","미용실","미움","미인","미팅","미혼","민간","민족","민주","믿음","밀가루","밀리미터","밑바닥","바가지","바구니","바나나","바늘","바닥","바닷가","바람","바이러스","바탕","박물관","박사","박수","반대","반드시","반말","반발","반성","반응","반장","반죽","반지","반찬","받침","발가락","발걸음","발견","발달","발레","발목","발바닥","발생","발음","발자국","발전","발톱","발표","밤하늘","밥그릇","밥맛","밥상","밥솥","방금","방면","방문","방바닥","방법","방송","방식","방안","방울","방지","방학","방해","방향","배경","배꼽","배달","배드민턴","백두산","백색","백성","백인","백제","백화점","버릇","버섯","버튼","번개","번역","번지","번호","벌금","벌레","벌써","범위","범인","범죄","법률","법원","법적","법칙","베이징","벨트","변경","변동","변명","변신","변호사","변화","별도","별명","별일","병실","병아리","병원","보관","보너스","보라색","보람","보름","보상","보안","보자기","보장","보전","보존","보통","보편적","보험","복도","복사","복숭아","복습","볶음","본격적","본래","본부","본사","본성","본인","본질","볼펜","봉사","봉지","봉투","부근","부끄러움","부담","부동산","부문","부분","부산","부상","부엌","부인","부작용","부장","부정","부족","부지런히","부친","부탁","부품","부회장","북부","북한","분노","분량","분리","분명","분석","분야","분위기","분필","분홍색","불고기","불과","불교","불꽃","불만","불법","불빛","불안","불이익","불행","브랜드","비극","비난","비닐","비둘기","비디오","비로소","비만","비명","비밀","비바람","비빔밥","비상","비용","비율","비중","비타민","비판","빌딩","빗물","빗방울","빗줄기","빛깔","빨간색","빨래","빨리","사건","사계절","사나이","사냥","사람","사랑","사립","사모님","사물","사방","사상","사생활","사설","사슴","사실","사업","사용","사월","사장","사전","사진","사촌","사춘기","사탕","사투리","사흘","산길","산부인과","산업","산책","살림","살인","살짝","삼계탕","삼국","삼십","삼월","삼촌","상관","상금","상대","상류","상반기","상상","상식","상업","상인","상자","상점","상처","상추","상태","상표","상품","상황","새벽","색깔","색연필","생각","생명","생물","생방송","생산","생선","생신","생일","생활","서랍","서른","서명","서민","서비스","서양","서울","서적","서점","서쪽","서클","석사","석유","선거","선물","선배","선생","선수","선원","선장","선전","선택","선풍기","설거지","설날","설렁탕","설명","설문","설사","설악산","설치","설탕","섭씨","성공","성당","성명","성별","성인","성장","성적","성질","성함","세금","세미나","세상","세월","세종대왕","세탁","센터","센티미터","셋째","소규모","소극적","소금","소나기","소년","소득","소망","소문","소설","소속","소아과","소용","소원","소음","소중히","소지품","소질","소풍","소형","속담","속도","속옷","손가락","손길","손녀","손님","손등","손목","손뼉","손실","손질","손톱","손해","솔직히","솜씨","송아지","송이","송편","쇠고기","쇼핑","수건","수년","수단","수돗물","수동적","수면","수명","수박","수상","수석","수술","수시로","수업","수염","수영","수입","수준","수집","수출","수컷","수필","수학","수험생","수화기","숙녀","숙소","숙제","순간","순서","순수","순식간","순위","숟가락","술병","술집","숫자","스님","스물","스스로","스승","스웨터","스위치","스케이트","스튜디오","스트레스","스포츠","슬쩍","슬픔","습관","습기","승객","승리","승부","승용차","승진","시각","시간","시골","시금치","시나리오","시댁","시리즈","시멘트","시민","시부모","시선","시설","시스템","시아버지","시어머니","시월","시인","시일","시작","시장","시절","시점","시중","시즌","시집","시청","시합","시험","식구","식기","식당","식량","식료품","식물","식빵","식사","식생활","식초","식탁","식품","신고","신규","신념","신문","신발","신비","신사","신세","신용","신제품","신청","신체","신화","실감","실내","실력","실례","실망","실수","실습","실시","실장","실정","실질적","실천","실체","실컷","실태","실패","실험","실현","심리","심부름","심사","심장","심정","심판","쌍둥이","씨름","씨앗","아가씨","아나운서","아드님","아들","아쉬움","아스팔트","아시아","아울러","아저씨","아줌마","아직","아침","아파트","아프리카","아픔","아홉","아흔","악기","악몽","악수","안개","안경","안과","안내","안녕","안동","안방","안부","안주","알루미늄","알코올","암시","암컷","압력","앞날","앞문","애인","애정","액수","앨범","야간","야단","야옹","약간","약국","약속","약수","약점","약품","약혼녀","양념","양력","양말","양배추","양주","양파","어둠","어려움","어른","어젯밤","어쨌든","어쩌다가","어쩐지","언니","언덕","언론","언어","얼굴","얼른","얼음","얼핏","엄마","업무","업종","업체","엉덩이","엉망","엉터리","엊그제","에너지","에어컨","엔진","여건","여고생","여관","여군","여권","여대생","여덟","여동생","여든","여론","여름","여섯","여성","여왕","여인","여전히","여직원","여학생","여행","역사","역시","역할","연결","연구","연극","연기","연락","연설","연세","연속","연습","연애","연예인","연인","연장","연주","연출","연필","연합","연휴","열기","열매","열쇠","열심히","열정","열차","열흘","염려","엽서","영국","영남","영상","영양","영역","영웅","영원히","영하","영향","영혼","영화","옆구리","옆방","옆집","예감","예금","예방","예산","예상","예선","예술","예습","예식장","예약","예전","예절","예정","예컨대","옛날","오늘","오락","오랫동안","오렌지","오로지","오른발","오븐","오십","오염","오월","오전","오직","오징어","오페라","오피스텔","오히려","옥상","옥수수","온갖","온라인","온몸","온종일","온통","올가을","올림픽","올해","옷차림","와이셔츠","와인","완성","완전","왕비","왕자","왜냐하면","왠지","외갓집","외국","외로움","외삼촌","외출","외침","외할머니","왼발","왼손","왼쪽","요금","요일","요즘","요청","용기","용서","용어","우산","우선","우승","우연히","우정","우체국","우편","운동","운명","운반","운전","운행","울산","울음","움직임","웃어른","웃음","워낙","원고","원래","원서","원숭이","원인","원장","원피스","월급","월드컵","월세","월요일","웨이터","위반","위법","위성","위원","위험","위협","윗사람","유난히","유럽","유명","유물","유산","유적","유치원","유학","유행","유형","육군","육상","육십","육체","은행","음력","음료","음반","음성","음식","음악","음주","의견","의논","의문","의복","의식","의심","의외로","의욕","의원","의학","이것","이곳","이념","이놈","이달","이대로","이동","이렇게","이력서","이론적","이름","이민","이발소","이별","이불","이빨","이상","이성","이슬","이야기","이용","이웃","이월","이윽고","이익","이전","이중","이튿날","이틀","이혼","인간","인격","인공","인구","인근","인기","인도","인류","인물","인생","인쇄","인연","인원","인재","인종","인천","인체","인터넷","인하","인형","일곱","일기","일단","일대","일등","일반","일본","일부","일상","일생","일손","일요일","일월","일정","일종","일주일","일찍","일체","일치","일행","일회용","임금","임무","입대","입력","입맛","입사","입술","입시","입원","입장","입학","자가용","자격","자극","자동","자랑","자부심","자식","자신","자연","자원","자율","자전거","자정","자존심","자판","작가","작년","작성","작업","작용","작은딸","작품","잔디","잔뜩","잔치","잘못","잠깐","잠수함","잠시","잠옷","잠자리","잡지","장관","장군","장기간","장래","장례","장르","장마","장면","장모","장미","장비","장사","장소","장식","장애인","장인","장점","장차","장학금","재능","재빨리","재산","재생","재작년","재정","재채기","재판","재학","재활용","저것","저고리","저곳","저녁","저런","저렇게","저번","저울","저절로","저축","적극","적당히","적성","적용","적응","전개","전공","전기","전달","전라도","전망","전문","전반","전부","전세","전시","전용","전자","전쟁","전주","전철","전체","전통","전혀","전후","절대","절망","절반","절약","절차","점검","점수","점심","점원","점점","점차","접근","접시","접촉","젓가락","정거장","정도","정류장","정리","정말","정면","정문","정반대","정보","정부","정비","정상","정성","정오","정원","정장","정지","정치","정확히","제공","제과점","제대로","제목","제발","제법","제삿날","제안","제일","제작","제주도","제출","제품","제한","조각","조건","조금","조깅","조명","조미료","조상","조선","조용히","조절","조정","조직","존댓말","존재","졸업","졸음","종교","종로","종류","종소리","종업원","종종","종합","좌석","죄인","주관적","주름","주말","주머니","주먹","주문","주민","주방","주변","주식","주인","주일","주장","주전자","주택","준비","줄거리","줄기","줄무늬","중간","중계방송","중국","중년","중단","중독","중반","중부","중세","중소기업","중순","중앙","중요","중학교","즉석","즉시","즐거움","증가","증거","증권","증상","증세","지각","지갑","지경","지극히","지금","지급","지능","지름길","지리산","지방","지붕","지식","지역","지우개","지원","지적","지점","지진","지출","직선","직업","직원","직장","진급","진동","진로","진료","진리","진짜","진찰","진출","진통","진행","질문","질병","질서","짐작","집단","집안","집중","짜증","찌꺼기","차남","차라리","차량","차림","차별","차선","차츰","착각","찬물","찬성","참가","참기름","참새","참석","참여","참외","참조","찻잔","창가","창고","창구","창문","창밖","창작","창조","채널","채점","책가방","책방","책상","책임","챔피언","처벌","처음","천국","천둥","천장","천재","천천히","철도","철저히","철학","첫날","첫째","청년","청바지","청소","청춘","체계","체력","체온","체육","체중","체험","초등학생","초반","초밥","초상화","초순","초여름","초원","초저녁","초점","초청","초콜릿","촛불","총각","총리","총장","촬영","최근","최상","최선","최신","최악","최종","추석","추억","추진","추천","추측","축구","축소","축제","축하","출근","출발","출산","출신","출연","출입","출장","출판","충격","충고","충돌","충분히","충청도","취업","취직","취향","치약","친구","친척","칠십","칠월","칠판","침대","침묵","침실","칫솔","칭찬","카메라","카운터","칼국수","캐릭터","캠퍼스","캠페인","커튼","컨디션","컬러","컴퓨터","코끼리","코미디","콘서트","콜라","콤플렉스","콩나물","쾌감","쿠데타","크림","큰길","큰딸","큰소리","큰아들","큰어머니","큰일","큰절","클래식","클럽","킬로","타입","타자기","탁구","탁자","탄생","태권도","태양","태풍","택시","탤런트","터널","터미널","테니스","테스트","테이블","텔레비전","토론","토마토","토요일","통계","통과","통로","통신","통역","통일","통장","통제","통증","통합","통화","퇴근","퇴원","퇴직금","튀김","트럭","특급","특별","특성","특수","특징","특히","튼튼히","티셔츠","파란색","파일","파출소","판결","판단","판매","판사","팔십","팔월","팝송","패션","팩스","팩시밀리","팬티","퍼센트","페인트","편견","편의","편지","편히","평가","평균","평생","평소","평양","평일","평화","포스터","포인트","포장","포함","표면","표정","표준","표현","품목","품질","풍경","풍속","풍습","프랑스","프린터","플라스틱","피곤","피망","피아노","필름","필수","필요","필자","필통","핑계","하느님","하늘","하드웨어","하룻밤","하반기","하숙집","하순","하여튼","하지만","하천","하품","하필","학과","학교","학급","학기","학년","학력","학번","학부모","학비","학생","학술","학습","학용품","학원","학위","학자","학점","한계","한글","한꺼번에","한낮","한눈","한동안","한때","한라산","한마디","한문","한번","한복","한식","한여름","한쪽","할머니","할아버지","할인","함께","함부로","합격","합리적","항공","항구","항상","항의","해결","해군","해답","해당","해물","해석","해설","해수욕장","해안","핵심","핸드백","햄버거","햇볕","햇살","행동","행복","행사","행운","행위","향기","향상","향수","허락","허용","헬기","현관","현금","현대","현상","현실","현장","현재","현지","혈액","협력","형부","형사","형수","형식","형제","형태","형편","혜택","호기심","호남","호랑이","호박","호텔","호흡","혹시","홀로","홈페이지","홍보","홍수","홍차","화면","화분","화살","화요일","화장","화학","확보","확인","확장","확정","환갑","환경","환영","환율","환자","활기","활동","활발히","활용","활짝","회견","회관","회복","회색","회원","회장","회전","횟수","횡단보도","효율적","후반","후춧가루","훈련","훨씬","휴식","휴일","흉내","흐름","흑백","흑인","흔적","흔히","흥미","흥분","희곡","희망","희생","흰색","힘껏"]'
      );
    },
    5043: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '["ábaco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","acción","aceite","acelga","acento","aceptar","ácido","aclarar","acné","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","aéreo","afectar","afición","afinar","afirmar","ágil","agitar","agonía","agosto","agotar","agregar","agrio","agua","agudo","águila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacrán","alambre","alarma","alba","álbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodón","aliado","aliento","alivio","alma","almeja","almíbar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","ámbar","ámbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","andén","anemia","ángulo","anillo","ánimo","anís","anotar","antena","antiguo","antojo","anual","anular","anuncio","añadir","añejo","año","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","araña","arar","árbitro","árbol","arbusto","archivo","arco","arder","ardilla","arduo","área","árido","aries","armonía","arnés","aroma","arpa","arpón","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","áspero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","ático","atleta","átomo","atraer","atroz","atún","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avión","aviso","ayer","ayuda","ayuno","azafrán","azar","azote","azúcar","azufre","azul","baba","babor","bache","bahía","baile","bajar","balanza","balcón","balde","bambú","banco","banda","baño","barba","barco","barniz","barro","báscula","bastón","basura","batalla","batería","batir","batuta","baúl","bazar","bebé","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsái","borde","borrar","bosque","bote","botín","bóveda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufón","búho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzón","caballo","cabeza","cabina","cabra","cacao","cadáver","cadena","caer","café","caída","caimán","caja","cajón","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","cáncer","candil","canela","canguro","canica","canto","caña","cañón","caoba","caos","capaz","capitán","capote","captar","capucha","cara","carbón","cárcel","careta","carga","cariño","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","célebre","celoso","célula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","césped","cetro","chacal","chaleco","champú","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclón","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","ciprés","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","clínica","cobre","cocción","cochino","cocina","coco","código","codo","cofre","coger","cohete","cojín","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","cómodo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazón","corbata","corcho","cordón","corona","correr","coser","cosmos","costa","cráneo","cráter","crear","crecer","creído","crema","cría","crimen","cripta","crisis","cromo","crónica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupón","cúpula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","dátil","deber","débil","década","decir","dedo","defensa","definir","dejar","delfín","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvío","detalle","detener","deuda","día","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difícil","digno","dilema","diluir","dinero","directo","dirigir","disco","diseño","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","dragón","droga","ducha","duda","duelo","dueño","dulce","dúo","duque","durar","dureza","duro","ébano","ebrio","echar","eco","ecuador","edad","edición","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","élite","elixir","elogio","eludir","embudo","emitir","emoción","empate","empeño","empleo","empresa","enano","encargo","enchufe","encía","enemigo","enero","enfado","enfermo","engaño","enigma","enlace","enorme","enredo","ensayo","enseñar","entero","entrar","envase","envío","época","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espía","esposa","espuma","esquí","estar","este","estilo","estufa","etapa","eterno","ética","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","éxito","experto","explicar","exponer","extremo","fábrica","fábula","fachada","fácil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","faraón","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fértil","fervor","festín","fiable","fianza","fiar","fibra","ficción","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flúor","fobia","foca","fogata","fogón","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","frágil","franja","frase","fraude","freír","freno","fresa","frío","frito","fruta","fuego","fuente","fuerza","fuga","fumar","función","funda","furgón","furia","fusil","fútbol","futuro","gacela","gafas","gaita","gajo","gala","galería","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavilán","gemelo","gemir","gen","género","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gráfico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","grúa","grueso","grumo","grupo","guante","guapo","guardia","guerra","guía","guiño","guion","guiso","guitarra","gusano","gustar","haber","hábil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazaña","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","héroe","hervir","hielo","hierro","hígado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","húmedo","humilde","humo","hundir","huracán","hurto","icono","ideal","idioma","ídolo","iglesia","iglú","igual","ilegal","ilusión","imagen","imán","imitar","impar","imperio","imponer","impulso","incapaz","índice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","interés","íntimo","intuir","inútil","invierno","ira","iris","ironía","isla","islote","jabalí","jabón","jamón","jarabe","jardín","jarra","jaula","jazmín","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","júpiter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladrón","lagarto","lágrima","laguna","laico","lamer","lámina","lámpara","lana","lancha","langosta","lanza","lápiz","largo","larva","lástima","lata","látex","latir","laurel","lavar","lazo","leal","lección","leche","lector","leer","legión","legumbre","lejano","lengua","lento","leña","león","leopardo","lesión","letal","letra","leve","leyenda","libertad","libro","licor","líder","lidiar","lienzo","liga","ligero","lima","límite","limón","limpio","lince","lindo","línea","lingote","lino","linterna","líquido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","loción","loco","locura","lógica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","maíz","maldad","maleta","malla","malo","mamá","mambo","mamut","manco","mando","manejar","manga","maniquí","manjar","mano","manso","manta","mañana","mapa","máquina","mar","marco","marea","marfil","margen","marido","mármol","marrón","martes","marzo","masa","máscara","masivo","matar","materia","matiz","matriz","máximo","mayor","mazorca","mecha","medalla","medio","médula","mejilla","mejor","melena","melón","memoria","menor","mensaje","mente","menú","mercado","merengue","mérito","mes","mesón","meta","meter","método","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millón","mimo","mina","minero","mínimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","moción","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","moño","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","móvil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","muñeca","mural","muro","músculo","museo","musgo","música","muslo","nácar","nación","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","náusea","naval","nave","navidad","necio","néctar","negar","negocio","negro","neón","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","niñez","niño","nítido","nivel","nobleza","noche","nómina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","núcleo","nudillo","nudo","nuera","nueve","nuez","nulo","número","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","océano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oído","oír","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opción","ópera","opinar","oponer","optar","óptica","opuesto","oración","orador","oral","órbita","orca","orden","oreja","órgano","orgía","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadía","oscuro","osezno","oso","ostra","otoño","otro","oveja","óvulo","óxido","oxígeno","oyente","ozono","pacto","padre","paella","página","pago","país","pájaro","palabra","palco","paleta","pálido","palma","paloma","palpar","pan","panal","pánico","pantera","pañuelo","papá","papel","papilla","paquete","parar","parcela","pared","parir","paro","párpado","parque","párrafo","parte","pasar","paseo","pasión","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peatón","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldaño","pelea","peligro","pellejo","pelo","peluca","pena","pensar","peñón","peón","peor","pepino","pequeño","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pésimo","pestaña","pétalo","petróleo","pez","pezuña","picar","pichón","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","piña","piojo","pipa","pirata","pisar","piscina","piso","pista","pitón","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesía","poeta","polen","policía","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porción","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","príncipe","prisión","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","próximo","prueba","público","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmón","pulpo","pulso","puma","punto","puñal","puño","pupa","pupila","puré","quedar","queja","quemar","querer","queso","quieto","química","quince","quitar","rábano","rabia","rabo","ración","radical","raíz","rama","rampa","rancho","rango","rapaz","rápido","rapto","rasgo","raspa","rato","rayo","raza","razón","reacción","realidad","rebaño","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refrán","refugio","regalo","regir","regla","regreso","rehén","reino","reír","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","revés","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","rígido","rigor","rincón","riñón","río","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubí","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sábado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmón","salón","salsa","salto","salud","salvar","samba","sanción","sandía","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sartén","sastre","satán","sauna","saxofón","sección","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","señal","señor","separar","sepia","sequía","ser","serie","sermón","servir","sesenta","sesión","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","sílaba","silbar","silencio","silla","símbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","sólido","soltar","solución","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","sostén","sótano","suave","subir","suceso","sudor","suegra","suelo","sueño","suerte","sufrir","sujeto","sultán","sumar","superar","suplir","suponer","supremo","sur","surco","sureño","surgir","susto","sutil","tabaco","tabique","tabla","tabú","taco","tacto","tajo","talar","talco","talento","talla","talón","tamaño","tambor","tango","tanque","tapa","tapete","tapia","tapón","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazón","teatro","techo","tecla","técnica","tejado","tejer","tejido","tela","teléfono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teoría","terapia","terco","término","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburón","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","tímido","timo","tinta","tío","típico","tipo","tira","tirón","titán","títere","título","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","tórax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","tóxico","trabajo","tractor","traer","tráfico","trago","traje","tramo","trance","trato","trauma","trazar","trébol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tubería","tubo","tuerto","tumba","tumor","túnel","túnica","turbina","turismo","turno","tutor","ubicar","úlcera","umbral","unidad","unir","universo","uno","untar","uña","urbano","urbe","urgente","urna","usar","usuario","útil","utopía","uva","vaca","vacío","vacuna","vagar","vago","vaina","vajilla","vale","válido","valle","valor","válvula","vampiro","vara","variar","varón","vaso","vecino","vector","vehículo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vía","viaje","vibrar","vicio","víctima","vida","vídeo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","viñedo","violín","viral","virgo","virtud","visor","víspera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volcán","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]'
      );
    },
    70651: (e, t, r) => {
      var a = r(7967);
      function i(e, t, r) {
        var a = e[t] + e[r],
          i = e[t + 1] + e[r + 1];
        a >= 4294967296 && i++, (e[t] = a), (e[t + 1] = i);
      }
      function o(e, t, r, a) {
        var i = e[t] + r;
        r < 0 && (i += 4294967296);
        var o = e[t + 1] + a;
        i >= 4294967296 && o++, (e[t] = i), (e[t + 1] = o);
      }
      function n(e, t) {
        return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
      }
      function s(e, t, r, a, n, s) {
        var c = u[n],
          f = u[n + 1],
          h = u[s],
          l = u[s + 1];
        i(d, e, t), o(d, e, c, f);
        var p = d[a] ^ d[e],
          b = d[a + 1] ^ d[e + 1];
        (d[a] = b),
          (d[a + 1] = p),
          i(d, r, a),
          (p = d[t] ^ d[r]),
          (b = d[t + 1] ^ d[r + 1]),
          (d[t] = (p >>> 24) ^ (b << 8)),
          (d[t + 1] = (b >>> 24) ^ (p << 8)),
          i(d, e, t),
          o(d, e, h, l),
          (p = d[a] ^ d[e]),
          (b = d[a + 1] ^ d[e + 1]),
          (d[a] = (p >>> 16) ^ (b << 16)),
          (d[a + 1] = (b >>> 16) ^ (p << 16)),
          i(d, r, a),
          (p = d[t] ^ d[r]),
          (b = d[t + 1] ^ d[r + 1]),
          (d[t] = (b >>> 31) ^ (p << 1)),
          (d[t + 1] = (p >>> 31) ^ (b << 1));
      }
      var c = new Uint32Array([
          4089235720,
          1779033703,
          2227873595,
          3144134277,
          4271175723,
          1013904242,
          1595750129,
          2773480762,
          2917565137,
          1359893119,
          725511199,
          2600822924,
          4215389547,
          528734635,
          327033209,
          1541459225
        ]),
        f = new Uint8Array(
          [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            14,
            10,
            4,
            8,
            9,
            15,
            13,
            6,
            1,
            12,
            0,
            2,
            11,
            7,
            5,
            3,
            11,
            8,
            12,
            0,
            5,
            2,
            15,
            13,
            10,
            14,
            3,
            6,
            7,
            1,
            9,
            4,
            7,
            9,
            3,
            1,
            13,
            12,
            11,
            14,
            2,
            6,
            5,
            10,
            4,
            0,
            15,
            8,
            9,
            0,
            5,
            7,
            2,
            4,
            10,
            15,
            14,
            1,
            11,
            12,
            6,
            8,
            3,
            13,
            2,
            12,
            6,
            10,
            0,
            11,
            8,
            3,
            4,
            13,
            7,
            5,
            15,
            14,
            1,
            9,
            12,
            5,
            1,
            15,
            14,
            13,
            4,
            10,
            0,
            7,
            6,
            3,
            9,
            2,
            8,
            11,
            13,
            11,
            7,
            14,
            12,
            1,
            3,
            9,
            5,
            0,
            15,
            4,
            8,
            6,
            2,
            10,
            6,
            15,
            14,
            9,
            11,
            3,
            0,
            8,
            12,
            2,
            13,
            7,
            1,
            4,
            10,
            5,
            10,
            2,
            8,
            4,
            7,
            6,
            1,
            5,
            15,
            11,
            9,
            14,
            3,
            12,
            13,
            0,
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            14,
            10,
            4,
            8,
            9,
            15,
            13,
            6,
            1,
            12,
            0,
            2,
            11,
            7,
            5,
            3
          ].map(function (e) {
            return 2 * e;
          })
        ),
        d = new Uint32Array(32),
        u = new Uint32Array(32);
      function h(e, t) {
        var r = 0;
        for (r = 0; r < 16; r++) (d[r] = e.h[r]), (d[r + 16] = c[r]);
        for (
          d[24] = d[24] ^ e.t,
            d[25] = d[25] ^ (e.t / 4294967296),
            t && ((d[28] = ~d[28]), (d[29] = ~d[29])),
            r = 0;
          r < 32;
          r++
        )
          u[r] = n(e.b, 4 * r);
        for (r = 0; r < 12; r++)
          s(0, 8, 16, 24, f[16 * r + 0], f[16 * r + 1]),
            s(2, 10, 18, 26, f[16 * r + 2], f[16 * r + 3]),
            s(4, 12, 20, 28, f[16 * r + 4], f[16 * r + 5]),
            s(6, 14, 22, 30, f[16 * r + 6], f[16 * r + 7]),
            s(0, 10, 20, 30, f[16 * r + 8], f[16 * r + 9]),
            s(2, 12, 22, 24, f[16 * r + 10], f[16 * r + 11]),
            s(4, 14, 16, 26, f[16 * r + 12], f[16 * r + 13]),
            s(6, 8, 18, 28, f[16 * r + 14], f[16 * r + 15]);
        for (r = 0; r < 16; r++) e.h[r] = e.h[r] ^ d[r] ^ d[r + 16];
      }
      function l(e, t) {
        if (0 === e || e > 64)
          throw new Error('Illegal output length, expected 0 < length <= 64');
        if (t && t.length > 64)
          throw new Error(
            'Illegal key, expected Uint8Array with 0 < length <= 64'
          );
        for (
          var r = {
              b: new Uint8Array(128),
              h: new Uint32Array(16),
              t: 0,
              c: 0,
              outlen: e
            },
            a = 0;
          a < 16;
          a++
        )
          r.h[a] = c[a];
        var i = t ? t.length : 0;
        return (
          (r.h[0] ^= 16842752 ^ (i << 8) ^ e), t && (p(r, t), (r.c = 128)), r
        );
      }
      function p(e, t) {
        for (var r = 0; r < t.length; r++)
          128 === e.c && ((e.t += e.c), h(e, !1), (e.c = 0)),
            (e.b[e.c++] = t[r]);
      }
      function b(e) {
        for (e.t += e.c; e.c < 128; ) e.b[e.c++] = 0;
        h(e, !0);
        for (var t = new Uint8Array(e.outlen), r = 0; r < e.outlen; r++)
          t[r] = e.h[r >> 2] >> (8 * (3 & r));
        return t;
      }
      function m(e, t, r) {
        (r = r || 64), (e = a.normalizeInput(e));
        var i = l(r, t);
        return p(i, e), b(i);
      }
      e.exports = {
        blake2b: m,
        blake2bHex: function (e, t, r) {
          var i = m(e, t, r);
          return a.toHex(i);
        },
        blake2bInit: l,
        blake2bUpdate: p,
        blake2bFinal: b
      };
    },
    39962: (e, t, r) => {
      var a = r(7967);
      function i(e, t) {
        return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
      }
      function o(e, t, r, a, i, o) {
        (f[e] = f[e] + f[t] + i),
          (f[a] = n(f[a] ^ f[e], 16)),
          (f[r] = f[r] + f[a]),
          (f[t] = n(f[t] ^ f[r], 12)),
          (f[e] = f[e] + f[t] + o),
          (f[a] = n(f[a] ^ f[e], 8)),
          (f[r] = f[r] + f[a]),
          (f[t] = n(f[t] ^ f[r], 7));
      }
      function n(e, t) {
        return (e >>> t) ^ (e << (32 - t));
      }
      var s = new Uint32Array([
          1779033703,
          3144134277,
          1013904242,
          2773480762,
          1359893119,
          2600822924,
          528734635,
          1541459225
        ]),
        c = new Uint8Array([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          14,
          10,
          4,
          8,
          9,
          15,
          13,
          6,
          1,
          12,
          0,
          2,
          11,
          7,
          5,
          3,
          11,
          8,
          12,
          0,
          5,
          2,
          15,
          13,
          10,
          14,
          3,
          6,
          7,
          1,
          9,
          4,
          7,
          9,
          3,
          1,
          13,
          12,
          11,
          14,
          2,
          6,
          5,
          10,
          4,
          0,
          15,
          8,
          9,
          0,
          5,
          7,
          2,
          4,
          10,
          15,
          14,
          1,
          11,
          12,
          6,
          8,
          3,
          13,
          2,
          12,
          6,
          10,
          0,
          11,
          8,
          3,
          4,
          13,
          7,
          5,
          15,
          14,
          1,
          9,
          12,
          5,
          1,
          15,
          14,
          13,
          4,
          10,
          0,
          7,
          6,
          3,
          9,
          2,
          8,
          11,
          13,
          11,
          7,
          14,
          12,
          1,
          3,
          9,
          5,
          0,
          15,
          4,
          8,
          6,
          2,
          10,
          6,
          15,
          14,
          9,
          11,
          3,
          0,
          8,
          12,
          2,
          13,
          7,
          1,
          4,
          10,
          5,
          10,
          2,
          8,
          4,
          7,
          6,
          1,
          5,
          15,
          11,
          9,
          14,
          3,
          12,
          13,
          0
        ]),
        f = new Uint32Array(16),
        d = new Uint32Array(16);
      function u(e, t) {
        var r = 0;
        for (r = 0; r < 8; r++) (f[r] = e.h[r]), (f[r + 8] = s[r]);
        for (
          f[12] ^= e.t, f[13] ^= e.t / 4294967296, t && (f[14] = ~f[14]), r = 0;
          r < 16;
          r++
        )
          d[r] = i(e.b, 4 * r);
        for (r = 0; r < 10; r++)
          o(0, 4, 8, 12, d[c[16 * r + 0]], d[c[16 * r + 1]]),
            o(1, 5, 9, 13, d[c[16 * r + 2]], d[c[16 * r + 3]]),
            o(2, 6, 10, 14, d[c[16 * r + 4]], d[c[16 * r + 5]]),
            o(3, 7, 11, 15, d[c[16 * r + 6]], d[c[16 * r + 7]]),
            o(0, 5, 10, 15, d[c[16 * r + 8]], d[c[16 * r + 9]]),
            o(1, 6, 11, 12, d[c[16 * r + 10]], d[c[16 * r + 11]]),
            o(2, 7, 8, 13, d[c[16 * r + 12]], d[c[16 * r + 13]]),
            o(3, 4, 9, 14, d[c[16 * r + 14]], d[c[16 * r + 15]]);
        for (r = 0; r < 8; r++) e.h[r] ^= f[r] ^ f[r + 8];
      }
      function h(e, t) {
        if (!(e > 0 && e <= 32))
          throw new Error('Incorrect output length, should be in [1, 32]');
        var r = t ? t.length : 0;
        if (t && !(r > 0 && r <= 32))
          throw new Error('Incorrect key length, should be in [1, 32]');
        var a = {
          h: new Uint32Array(s),
          b: new Uint32Array(64),
          c: 0,
          t: 0,
          outlen: e
        };
        return (
          (a.h[0] ^= 16842752 ^ (r << 8) ^ e), r > 0 && (l(a, t), (a.c = 64)), a
        );
      }
      function l(e, t) {
        for (var r = 0; r < t.length; r++)
          64 === e.c && ((e.t += e.c), u(e, !1), (e.c = 0)),
            (e.b[e.c++] = t[r]);
      }
      function p(e) {
        for (e.t += e.c; e.c < 64; ) e.b[e.c++] = 0;
        u(e, !0);
        for (var t = new Uint8Array(e.outlen), r = 0; r < e.outlen; r++)
          t[r] = (e.h[r >> 2] >> (8 * (3 & r))) & 255;
        return t;
      }
      function b(e, t, r) {
        (r = r || 32), (e = a.normalizeInput(e));
        var i = h(r, t);
        return l(i, e), p(i);
      }
      e.exports = {
        blake2s: b,
        blake2sHex: function (e, t, r) {
          var i = b(e, t, r);
          return a.toHex(i);
        },
        blake2sInit: h,
        blake2sUpdate: l,
        blake2sFinal: p
      };
    },
    81395: (e, t, r) => {
      var a = r(70651),
        i = r(39962);
      e.exports = {
        blake2b: a.blake2b,
        blake2bHex: a.blake2bHex,
        blake2bInit: a.blake2bInit,
        blake2bUpdate: a.blake2bUpdate,
        blake2bFinal: a.blake2bFinal,
        blake2s: i.blake2s,
        blake2sHex: i.blake2sHex,
        blake2sInit: i.blake2sInit,
        blake2sUpdate: i.blake2sUpdate,
        blake2sFinal: i.blake2sFinal
      };
    },
    7967: (e, t, r) => {
      var a = r(48834).Buffer;
      function i(e) {
        return (4294967296 + e).toString(16).substring(1);
      }
      e.exports = {
        normalizeInput: function (e) {
          var t;
          if (e instanceof Uint8Array) t = e;
          else if (e instanceof a) t = new Uint8Array(e);
          else {
            if ('string' != typeof e)
              throw new Error('Input must be an string, Buffer or Uint8Array');
            t = new Uint8Array(a.from(e, 'utf8'));
          }
          return t;
        },
        toHex: function (e) {
          return Array.prototype.map
            .call(e, function (e) {
              return (e < 16 ? '0' : '') + e.toString(16);
            })
            .join('');
        },
        debugPrint: function (e, t, r) {
          for (var a = '\n' + e + ' = ', o = 0; o < t.length; o += 2) {
            if (32 === r)
              (a += i(t[o]).toUpperCase()),
                (a += ' '),
                (a += i(t[o + 1]).toUpperCase());
            else {
              if (64 !== r) throw new Error('Invalid size ' + r);
              (a += i(t[o + 1]).toUpperCase()), (a += i(t[o]).toUpperCase());
            }
            o % 6 == 4
              ? (a += '\n' + new Array(e.length + 4).join(' '))
              : o < t.length - 2 && (a += ' ');
          }
          console.log(a);
        },
        testSpeed: function (e, t, r) {
          for (
            var a = new Date().getTime(), i = new Uint8Array(t), o = 0;
            o < t;
            o++
          )
            i[o] = o % 256;
          var n = new Date().getTime();
          for (
            console.log('Generated random input in ' + (n - a) + 'ms'),
              a = n,
              o = 0;
            o < r;
            o++
          ) {
            var s = e(i),
              c = new Date().getTime(),
              f = c - a;
            (a = c),
              console.log(
                'Hashed in ' + f + 'ms: ' + s.substring(0, 20) + '...'
              ),
              console.log(
                Math.round((t / (1 << 20) / (f / 1e3)) * 100) / 100 +
                  ' MB PER SECOND'
              );
          }
        }
      };
    },
    62197: function (e, t, r) {
      !(function (e, t) {
        'use strict';
        function a(e, t) {
          if (!e) throw new Error(t || 'Assertion failed');
        }
        function i(e, t) {
          e.super_ = t;
          var r = function () {};
          (r.prototype = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e);
        }
        function o(e, t, r) {
          if (o.isBN(e)) return e;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== e &&
              (('le' !== t && 'be' !== t) || ((r = t), (t = 10)),
              this._init(e || 0, t || 10, r || 'be'));
        }
        var n;
        'object' == typeof e ? (e.exports = o) : (t.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          n = r(33196).Buffer;
        } catch (e) {}
        function s(e, t, r) {
          for (var a = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
            var n = e.charCodeAt(o) - 48;
            (a <<= 4),
              (a |=
                n >= 49 && n <= 54
                  ? n - 49 + 10
                  : n >= 17 && n <= 22
                  ? n - 17 + 10
                  : 15 & n);
          }
          return a;
        }
        function c(e, t, r, a) {
          for (var i = 0, o = Math.min(e.length, r), n = t; n < o; n++) {
            var s = e.charCodeAt(n) - 48;
            (i *= a), (i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
          }
          return i;
        }
        (o.isBN = function (e) {
          return (
            e instanceof o ||
            (null !== e &&
              'object' == typeof e &&
              e.constructor.wordSize === o.wordSize &&
              Array.isArray(e.words))
          );
        }),
          (o.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t;
          }),
          (o.min = function (e, t) {
            return e.cmp(t) < 0 ? e : t;
          }),
          (o.prototype._init = function (e, t, r) {
            if ('number' == typeof e) return this._initNumber(e, t, r);
            if ('object' == typeof e) return this._initArray(e, t, r);
            'hex' === t && (t = 16), a(t === (0 | t) && t >= 2 && t <= 36);
            var i = 0;
            '-' === (e = e.toString().replace(/\s+/g, ''))[0] && i++,
              16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i),
              '-' === e[0] && (this.negative = 1),
              this.strip(),
              'le' === r && this._initArray(this.toArray(), t, r);
          }),
          (o.prototype._initNumber = function (e, t, r) {
            e < 0 && ((this.negative = 1), (e = -e)),
              e < 67108864
                ? ((this.words = [67108863 & e]), (this.length = 1))
                : e < 4503599627370496
                ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                  (this.length = 2))
                : (a(e < 9007199254740992),
                  (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              'le' === r && this._initArray(this.toArray(), t, r);
          }),
          (o.prototype._initArray = function (e, t, r) {
            if ((a('number' == typeof e.length), e.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var o,
              n,
              s = 0;
            if ('be' === r)
              for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                (n = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)),
                  (this.words[o] |= (n << s) & 67108863),
                  (this.words[o + 1] = (n >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ('le' === r)
              for (i = 0, o = 0; i < e.length; i += 3)
                (n = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)),
                  (this.words[o] |= (n << s) & 67108863),
                  (this.words[o + 1] = (n >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this.strip();
          }),
          (o.prototype._parseHex = function (e, t) {
            (this.length = Math.ceil((e.length - t) / 6)),
              (this.words = new Array(this.length));
            for (var r = 0; r < this.length; r++) this.words[r] = 0;
            var a,
              i,
              o = 0;
            for (r = e.length - 6, a = 0; r >= t; r -= 6)
              (i = s(e, r, r + 6)),
                (this.words[a] |= (i << o) & 67108863),
                (this.words[a + 1] |= (i >>> (26 - o)) & 4194303),
                (o += 24) >= 26 && ((o -= 26), a++);
            r + 6 !== t &&
              ((i = s(e, t, r + 6)),
              (this.words[a] |= (i << o) & 67108863),
              (this.words[a + 1] |= (i >>> (26 - o)) & 4194303)),
              this.strip();
          }),
          (o.prototype._parseBase = function (e, t, r) {
            (this.words = [0]), (this.length = 1);
            for (var a = 0, i = 1; i <= 67108863; i *= t) a++;
            a--, (i = (i / t) | 0);
            for (
              var o = e.length - r,
                n = o % a,
                s = Math.min(o, o - n) + r,
                f = 0,
                d = r;
              d < s;
              d += a
            )
              (f = c(e, d, d + a, t)),
                this.imuln(i),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== n) {
              var u = 1;
              for (f = c(e, d, e.length, t), d = 0; d < n; d++) u *= t;
              this.imuln(u),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
          }),
          (o.prototype.copy = function (e) {
            e.words = new Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            (e.length = this.length),
              (e.negative = this.negative),
              (e.red = this.red);
          }),
          (o.prototype.clone = function () {
            var e = new o(null);
            return this.copy(e), e;
          }),
          (o.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (o.prototype.inspect = function () {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
          });
        var f = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000'
          ],
          d = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          u = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
          ];
        function h(e, t, r) {
          r.negative = t.negative ^ e.negative;
          var a = (e.length + t.length) | 0;
          (r.length = a), (a = (a - 1) | 0);
          var i = 0 | e.words[0],
            o = 0 | t.words[0],
            n = i * o,
            s = 67108863 & n,
            c = (n / 67108864) | 0;
          r.words[0] = s;
          for (var f = 1; f < a; f++) {
            for (
              var d = c >>> 26,
                u = 67108863 & c,
                h = Math.min(f, t.length - 1),
                l = Math.max(0, f - e.length + 1);
              l <= h;
              l++
            ) {
              var p = (f - l) | 0;
              (d +=
                ((n = (i = 0 | e.words[p]) * (o = 0 | t.words[l]) + u) /
                  67108864) |
                0),
                (u = 67108863 & n);
            }
            (r.words[f] = 0 | u), (c = 0 | d);
          }
          return 0 !== c ? (r.words[f] = 0 | c) : r.length--, r.strip();
        }
        (o.prototype.toString = function (e, t) {
          var r;
          if (((t = 0 | t || 1), 16 === (e = e || 10) || 'hex' === e)) {
            r = '';
            for (var i = 0, o = 0, n = 0; n < this.length; n++) {
              var s = this.words[n],
                c = (16777215 & ((s << i) | o)).toString(16);
              (r =
                0 != (o = (s >>> (24 - i)) & 16777215) || n !== this.length - 1
                  ? f[6 - c.length] + c + r
                  : c + r),
                (i += 2) >= 26 && ((i -= 26), n--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % t != 0; )
              r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var h = d[e],
              l = u[e];
            r = '';
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var b = p.modn(l).toString(e);
              r = (p = p.idivn(l)).isZero() ? b + r : f[h - b.length] + b + r;
            }
            for (this.isZero() && (r = '0' + r); r.length % t != 0; )
              r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          a(!1, 'Base should be between 2 and 36');
        }),
          (o.prototype.toNumber = function () {
            var e = this.words[0];
            return (
              2 === this.length
                ? (e += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (e += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  a(!1, 'Number can only safely store up to 53 bits'),
              0 !== this.negative ? -e : e
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (o.prototype.toBuffer = function (e, t) {
            return a(void 0 !== n), this.toArrayLike(n, e, t);
          }),
          (o.prototype.toArray = function (e, t) {
            return this.toArrayLike(Array, e, t);
          }),
          (o.prototype.toArrayLike = function (e, t, r) {
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            a(i <= o, 'byte array longer than desired length'),
              a(o > 0, 'Requested array length <= 0'),
              this.strip();
            var n,
              s,
              c = 'le' === t,
              f = new e(o),
              d = this.clone();
            if (c) {
              for (s = 0; !d.isZero(); s++)
                (n = d.andln(255)), d.iushrn(8), (f[s] = n);
              for (; s < o; s++) f[s] = 0;
            } else {
              for (s = 0; s < o - i; s++) f[s] = 0;
              for (s = 0; !d.isZero(); s++)
                (n = d.andln(255)), d.iushrn(8), (f[o - s - 1] = n);
            }
            return f;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (e) {
                return 32 - Math.clz32(e);
              })
            : (o.prototype._countBits = function (e) {
                var t = e,
                  r = 0;
                return (
                  t >= 4096 && ((r += 13), (t >>>= 13)),
                  t >= 64 && ((r += 7), (t >>>= 7)),
                  t >= 8 && ((r += 4), (t >>>= 4)),
                  t >= 2 && ((r += 2), (t >>>= 2)),
                  r + t
                );
              }),
          (o.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var t = e,
              r = 0;
            return (
              0 == (8191 & t) && ((r += 13), (t >>>= 13)),
              0 == (127 & t) && ((r += 7), (t >>>= 7)),
              0 == (15 & t) && ((r += 4), (t >>>= 4)),
              0 == (3 & t) && ((r += 2), (t >>>= 2)),
              0 == (1 & t) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
              t = this._countBits(e);
            return 26 * (this.length - 1) + t;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, t = 0; t < this.length; t++) {
              var r = this._zeroBits(this.words[t]);
              if (((e += r), 26 !== r)) break;
            }
            return e;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (e) {
            return 0 !== this.negative
              ? this.abs().inotn(e).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (e) {
            return this.testn(e - 1)
              ? this.notn(e).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var t = 0; t < e.length; t++)
              this.words[t] = this.words[t] | e.words[t];
            return this.strip();
          }),
          (o.prototype.ior = function (e) {
            return a(0 == (this.negative | e.negative)), this.iuor(e);
          }),
          (o.prototype.or = function (e) {
            return this.length > e.length
              ? this.clone().ior(e)
              : e.clone().ior(this);
          }),
          (o.prototype.uor = function (e) {
            return this.length > e.length
              ? this.clone().iuor(e)
              : e.clone().iuor(this);
          }),
          (o.prototype.iuand = function (e) {
            var t;
            t = this.length > e.length ? e : this;
            for (var r = 0; r < t.length; r++)
              this.words[r] = this.words[r] & e.words[r];
            return (this.length = t.length), this.strip();
          }),
          (o.prototype.iand = function (e) {
            return a(0 == (this.negative | e.negative)), this.iuand(e);
          }),
          (o.prototype.and = function (e) {
            return this.length > e.length
              ? this.clone().iand(e)
              : e.clone().iand(this);
          }),
          (o.prototype.uand = function (e) {
            return this.length > e.length
              ? this.clone().iuand(e)
              : e.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (e) {
            var t, r;
            this.length > e.length
              ? ((t = this), (r = e))
              : ((t = e), (r = this));
            for (var a = 0; a < r.length; a++)
              this.words[a] = t.words[a] ^ r.words[a];
            if (this !== t)
              for (; a < t.length; a++) this.words[a] = t.words[a];
            return (this.length = t.length), this.strip();
          }),
          (o.prototype.ixor = function (e) {
            return a(0 == (this.negative | e.negative)), this.iuxor(e);
          }),
          (o.prototype.xor = function (e) {
            return this.length > e.length
              ? this.clone().ixor(e)
              : e.clone().ixor(this);
          }),
          (o.prototype.uxor = function (e) {
            return this.length > e.length
              ? this.clone().iuxor(e)
              : e.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (e) {
            a('number' == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
              r = e % 26;
            this._expand(t), r > 0 && t--;
            for (var i = 0; i < t; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this.strip()
            );
          }),
          (o.prototype.notn = function (e) {
            return this.clone().inotn(e);
          }),
          (o.prototype.setn = function (e, t) {
            a('number' == typeof e && e >= 0);
            var r = (e / 26) | 0,
              i = e % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = t
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this.strip()
            );
          }),
          (o.prototype.iadd = function (e) {
            var t, r, a;
            if (0 !== this.negative && 0 === e.negative)
              return (
                (this.negative = 0),
                (t = this.isub(e)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== e.negative)
              return (
                (e.negative = 0),
                (t = this.isub(e)),
                (e.negative = 1),
                t._normSign()
              );
            this.length > e.length
              ? ((r = this), (a = e))
              : ((r = e), (a = this));
            for (var i = 0, o = 0; o < a.length; o++)
              (t = (0 | r.words[o]) + (0 | a.words[o]) + i),
                (this.words[o] = 67108863 & t),
                (i = t >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (t = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & t),
                (i = t >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (e) {
            var t;
            return 0 !== e.negative && 0 === this.negative
              ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
              : 0 === e.negative && 0 !== this.negative
              ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t)
              : this.length > e.length
              ? this.clone().iadd(e)
              : e.clone().iadd(this);
          }),
          (o.prototype.isub = function (e) {
            if (0 !== e.negative) {
              e.negative = 0;
              var t = this.iadd(e);
              return (e.negative = 1), t._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(e),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              a,
              i = this.cmp(e);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((r = this), (a = e)) : ((r = e), (a = this));
            for (var o = 0, n = 0; n < a.length; n++)
              (o = (t = (0 | r.words[n]) - (0 | a.words[n]) + o) >> 26),
                (this.words[n] = 67108863 & t);
            for (; 0 !== o && n < r.length; n++)
              (o = (t = (0 | r.words[n]) + o) >> 26),
                (this.words[n] = 67108863 & t);
            if (0 === o && n < r.length && r !== this)
              for (; n < r.length; n++) this.words[n] = r.words[n];
            return (
              (this.length = Math.max(this.length, n)),
              r !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (o.prototype.sub = function (e) {
            return this.clone().isub(e);
          });
        var l = function (e, t, r) {
          var a,
            i,
            o,
            n = e.words,
            s = t.words,
            c = r.words,
            f = 0,
            d = 0 | n[0],
            u = 8191 & d,
            h = d >>> 13,
            l = 0 | n[1],
            p = 8191 & l,
            b = l >>> 13,
            m = 0 | n[2],
            v = 8191 & m,
            g = m >>> 13,
            y = 0 | n[3],
            w = 8191 & y,
            k = y >>> 13,
            M = 0 | n[4],
            _ = 8191 & M,
            z = M >>> 13,
            x = 0 | n[5],
            A = 8191 & x,
            S = x >>> 13,
            j = 0 | n[6],
            I = 8191 & j,
            q = j >>> 13,
            E = 0 | n[7],
            B = 8191 & E,
            C = E >>> 13,
            R = 0 | n[8],
            P = 8191 & R,
            N = R >>> 13,
            O = 0 | n[9],
            L = 8191 & O,
            D = O >>> 13,
            U = 0 | s[0],
            T = 8191 & U,
            H = U >>> 13,
            F = 0 | s[1],
            Z = 8191 & F,
            J = F >>> 13,
            K = 0 | s[2],
            V = 8191 & K,
            X = K >>> 13,
            W = 0 | s[3],
            G = 8191 & W,
            Y = W >>> 13,
            Q = 0 | s[4],
            $ = 8191 & Q,
            ee = Q >>> 13,
            te = 0 | s[5],
            re = 8191 & te,
            ae = te >>> 13,
            ie = 0 | s[6],
            oe = 8191 & ie,
            ne = ie >>> 13,
            se = 0 | s[7],
            ce = 8191 & se,
            fe = se >>> 13,
            de = 0 | s[8],
            ue = 8191 & de,
            he = de >>> 13,
            le = 0 | s[9],
            pe = 8191 & le,
            be = le >>> 13;
          (r.negative = e.negative ^ t.negative), (r.length = 19);
          var me =
            (((f + (a = Math.imul(u, T))) | 0) +
              ((8191 & (i = ((i = Math.imul(u, H)) + Math.imul(h, T)) | 0)) <<
                13)) |
            0;
          (f = ((((o = Math.imul(h, H)) + (i >>> 13)) | 0) + (me >>> 26)) | 0),
            (me &= 67108863),
            (a = Math.imul(p, T)),
            (i = ((i = Math.imul(p, H)) + Math.imul(b, T)) | 0),
            (o = Math.imul(b, H));
          var ve =
            (((f + (a = (a + Math.imul(u, Z)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, J)) | 0) + Math.imul(h, Z)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, J)) | 0) + (i >>> 13)) | 0) +
              (ve >>> 26)) |
            0),
            (ve &= 67108863),
            (a = Math.imul(v, T)),
            (i = ((i = Math.imul(v, H)) + Math.imul(g, T)) | 0),
            (o = Math.imul(g, H)),
            (a = (a + Math.imul(p, Z)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, J)) | 0);
          var ge =
            (((f + (a = (a + Math.imul(u, V)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, X)) | 0) + Math.imul(h, V)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, X)) | 0) + (i >>> 13)) | 0) +
              (ge >>> 26)) |
            0),
            (ge &= 67108863),
            (a = Math.imul(w, T)),
            (i = ((i = Math.imul(w, H)) + Math.imul(k, T)) | 0),
            (o = Math.imul(k, H)),
            (a = (a + Math.imul(v, Z)) | 0),
            (i = ((i = (i + Math.imul(v, J)) | 0) + Math.imul(g, Z)) | 0),
            (o = (o + Math.imul(g, J)) | 0),
            (a = (a + Math.imul(p, V)) | 0),
            (i = ((i = (i + Math.imul(p, X)) | 0) + Math.imul(b, V)) | 0),
            (o = (o + Math.imul(b, X)) | 0);
          var ye =
            (((f + (a = (a + Math.imul(u, G)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, Y)) | 0) + Math.imul(h, G)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, Y)) | 0) + (i >>> 13)) | 0) +
              (ye >>> 26)) |
            0),
            (ye &= 67108863),
            (a = Math.imul(_, T)),
            (i = ((i = Math.imul(_, H)) + Math.imul(z, T)) | 0),
            (o = Math.imul(z, H)),
            (a = (a + Math.imul(w, Z)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(k, Z)) | 0),
            (o = (o + Math.imul(k, J)) | 0),
            (a = (a + Math.imul(v, V)) | 0),
            (i = ((i = (i + Math.imul(v, X)) | 0) + Math.imul(g, V)) | 0),
            (o = (o + Math.imul(g, X)) | 0),
            (a = (a + Math.imul(p, G)) | 0),
            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(b, G)) | 0),
            (o = (o + Math.imul(b, Y)) | 0);
          var we =
            (((f + (a = (a + Math.imul(u, $)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, ee)) | 0) + Math.imul(h, $)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, ee)) | 0) + (i >>> 13)) | 0) +
              (we >>> 26)) |
            0),
            (we &= 67108863),
            (a = Math.imul(A, T)),
            (i = ((i = Math.imul(A, H)) + Math.imul(S, T)) | 0),
            (o = Math.imul(S, H)),
            (a = (a + Math.imul(_, Z)) | 0),
            (i = ((i = (i + Math.imul(_, J)) | 0) + Math.imul(z, Z)) | 0),
            (o = (o + Math.imul(z, J)) | 0),
            (a = (a + Math.imul(w, V)) | 0),
            (i = ((i = (i + Math.imul(w, X)) | 0) + Math.imul(k, V)) | 0),
            (o = (o + Math.imul(k, X)) | 0),
            (a = (a + Math.imul(v, G)) | 0),
            (i = ((i = (i + Math.imul(v, Y)) | 0) + Math.imul(g, G)) | 0),
            (o = (o + Math.imul(g, Y)) | 0),
            (a = (a + Math.imul(p, $)) | 0),
            (i = ((i = (i + Math.imul(p, ee)) | 0) + Math.imul(b, $)) | 0),
            (o = (o + Math.imul(b, ee)) | 0);
          var ke =
            (((f + (a = (a + Math.imul(u, re)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, ae)) | 0) + Math.imul(h, re)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, ae)) | 0) + (i >>> 13)) | 0) +
              (ke >>> 26)) |
            0),
            (ke &= 67108863),
            (a = Math.imul(I, T)),
            (i = ((i = Math.imul(I, H)) + Math.imul(q, T)) | 0),
            (o = Math.imul(q, H)),
            (a = (a + Math.imul(A, Z)) | 0),
            (i = ((i = (i + Math.imul(A, J)) | 0) + Math.imul(S, Z)) | 0),
            (o = (o + Math.imul(S, J)) | 0),
            (a = (a + Math.imul(_, V)) | 0),
            (i = ((i = (i + Math.imul(_, X)) | 0) + Math.imul(z, V)) | 0),
            (o = (o + Math.imul(z, X)) | 0),
            (a = (a + Math.imul(w, G)) | 0),
            (i = ((i = (i + Math.imul(w, Y)) | 0) + Math.imul(k, G)) | 0),
            (o = (o + Math.imul(k, Y)) | 0),
            (a = (a + Math.imul(v, $)) | 0),
            (i = ((i = (i + Math.imul(v, ee)) | 0) + Math.imul(g, $)) | 0),
            (o = (o + Math.imul(g, ee)) | 0),
            (a = (a + Math.imul(p, re)) | 0),
            (i = ((i = (i + Math.imul(p, ae)) | 0) + Math.imul(b, re)) | 0),
            (o = (o + Math.imul(b, ae)) | 0);
          var Me =
            (((f + (a = (a + Math.imul(u, oe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, ne)) | 0) + Math.imul(h, oe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, ne)) | 0) + (i >>> 13)) | 0) +
              (Me >>> 26)) |
            0),
            (Me &= 67108863),
            (a = Math.imul(B, T)),
            (i = ((i = Math.imul(B, H)) + Math.imul(C, T)) | 0),
            (o = Math.imul(C, H)),
            (a = (a + Math.imul(I, Z)) | 0),
            (i = ((i = (i + Math.imul(I, J)) | 0) + Math.imul(q, Z)) | 0),
            (o = (o + Math.imul(q, J)) | 0),
            (a = (a + Math.imul(A, V)) | 0),
            (i = ((i = (i + Math.imul(A, X)) | 0) + Math.imul(S, V)) | 0),
            (o = (o + Math.imul(S, X)) | 0),
            (a = (a + Math.imul(_, G)) | 0),
            (i = ((i = (i + Math.imul(_, Y)) | 0) + Math.imul(z, G)) | 0),
            (o = (o + Math.imul(z, Y)) | 0),
            (a = (a + Math.imul(w, $)) | 0),
            (i = ((i = (i + Math.imul(w, ee)) | 0) + Math.imul(k, $)) | 0),
            (o = (o + Math.imul(k, ee)) | 0),
            (a = (a + Math.imul(v, re)) | 0),
            (i = ((i = (i + Math.imul(v, ae)) | 0) + Math.imul(g, re)) | 0),
            (o = (o + Math.imul(g, ae)) | 0),
            (a = (a + Math.imul(p, oe)) | 0),
            (i = ((i = (i + Math.imul(p, ne)) | 0) + Math.imul(b, oe)) | 0),
            (o = (o + Math.imul(b, ne)) | 0);
          var _e =
            (((f + (a = (a + Math.imul(u, ce)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, fe)) | 0) + Math.imul(h, ce)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, fe)) | 0) + (i >>> 13)) | 0) +
              (_e >>> 26)) |
            0),
            (_e &= 67108863),
            (a = Math.imul(P, T)),
            (i = ((i = Math.imul(P, H)) + Math.imul(N, T)) | 0),
            (o = Math.imul(N, H)),
            (a = (a + Math.imul(B, Z)) | 0),
            (i = ((i = (i + Math.imul(B, J)) | 0) + Math.imul(C, Z)) | 0),
            (o = (o + Math.imul(C, J)) | 0),
            (a = (a + Math.imul(I, V)) | 0),
            (i = ((i = (i + Math.imul(I, X)) | 0) + Math.imul(q, V)) | 0),
            (o = (o + Math.imul(q, X)) | 0),
            (a = (a + Math.imul(A, G)) | 0),
            (i = ((i = (i + Math.imul(A, Y)) | 0) + Math.imul(S, G)) | 0),
            (o = (o + Math.imul(S, Y)) | 0),
            (a = (a + Math.imul(_, $)) | 0),
            (i = ((i = (i + Math.imul(_, ee)) | 0) + Math.imul(z, $)) | 0),
            (o = (o + Math.imul(z, ee)) | 0),
            (a = (a + Math.imul(w, re)) | 0),
            (i = ((i = (i + Math.imul(w, ae)) | 0) + Math.imul(k, re)) | 0),
            (o = (o + Math.imul(k, ae)) | 0),
            (a = (a + Math.imul(v, oe)) | 0),
            (i = ((i = (i + Math.imul(v, ne)) | 0) + Math.imul(g, oe)) | 0),
            (o = (o + Math.imul(g, ne)) | 0),
            (a = (a + Math.imul(p, ce)) | 0),
            (i = ((i = (i + Math.imul(p, fe)) | 0) + Math.imul(b, ce)) | 0),
            (o = (o + Math.imul(b, fe)) | 0);
          var ze =
            (((f + (a = (a + Math.imul(u, ue)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, he)) | 0) + Math.imul(h, ue)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, he)) | 0) + (i >>> 13)) | 0) +
              (ze >>> 26)) |
            0),
            (ze &= 67108863),
            (a = Math.imul(L, T)),
            (i = ((i = Math.imul(L, H)) + Math.imul(D, T)) | 0),
            (o = Math.imul(D, H)),
            (a = (a + Math.imul(P, Z)) | 0),
            (i = ((i = (i + Math.imul(P, J)) | 0) + Math.imul(N, Z)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (a = (a + Math.imul(B, V)) | 0),
            (i = ((i = (i + Math.imul(B, X)) | 0) + Math.imul(C, V)) | 0),
            (o = (o + Math.imul(C, X)) | 0),
            (a = (a + Math.imul(I, G)) | 0),
            (i = ((i = (i + Math.imul(I, Y)) | 0) + Math.imul(q, G)) | 0),
            (o = (o + Math.imul(q, Y)) | 0),
            (a = (a + Math.imul(A, $)) | 0),
            (i = ((i = (i + Math.imul(A, ee)) | 0) + Math.imul(S, $)) | 0),
            (o = (o + Math.imul(S, ee)) | 0),
            (a = (a + Math.imul(_, re)) | 0),
            (i = ((i = (i + Math.imul(_, ae)) | 0) + Math.imul(z, re)) | 0),
            (o = (o + Math.imul(z, ae)) | 0),
            (a = (a + Math.imul(w, oe)) | 0),
            (i = ((i = (i + Math.imul(w, ne)) | 0) + Math.imul(k, oe)) | 0),
            (o = (o + Math.imul(k, ne)) | 0),
            (a = (a + Math.imul(v, ce)) | 0),
            (i = ((i = (i + Math.imul(v, fe)) | 0) + Math.imul(g, ce)) | 0),
            (o = (o + Math.imul(g, fe)) | 0),
            (a = (a + Math.imul(p, ue)) | 0),
            (i = ((i = (i + Math.imul(p, he)) | 0) + Math.imul(b, ue)) | 0),
            (o = (o + Math.imul(b, he)) | 0);
          var xe =
            (((f + (a = (a + Math.imul(u, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(u, be)) | 0) + Math.imul(h, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(h, be)) | 0) + (i >>> 13)) | 0) +
              (xe >>> 26)) |
            0),
            (xe &= 67108863),
            (a = Math.imul(L, Z)),
            (i = ((i = Math.imul(L, J)) + Math.imul(D, Z)) | 0),
            (o = Math.imul(D, J)),
            (a = (a + Math.imul(P, V)) | 0),
            (i = ((i = (i + Math.imul(P, X)) | 0) + Math.imul(N, V)) | 0),
            (o = (o + Math.imul(N, X)) | 0),
            (a = (a + Math.imul(B, G)) | 0),
            (i = ((i = (i + Math.imul(B, Y)) | 0) + Math.imul(C, G)) | 0),
            (o = (o + Math.imul(C, Y)) | 0),
            (a = (a + Math.imul(I, $)) | 0),
            (i = ((i = (i + Math.imul(I, ee)) | 0) + Math.imul(q, $)) | 0),
            (o = (o + Math.imul(q, ee)) | 0),
            (a = (a + Math.imul(A, re)) | 0),
            (i = ((i = (i + Math.imul(A, ae)) | 0) + Math.imul(S, re)) | 0),
            (o = (o + Math.imul(S, ae)) | 0),
            (a = (a + Math.imul(_, oe)) | 0),
            (i = ((i = (i + Math.imul(_, ne)) | 0) + Math.imul(z, oe)) | 0),
            (o = (o + Math.imul(z, ne)) | 0),
            (a = (a + Math.imul(w, ce)) | 0),
            (i = ((i = (i + Math.imul(w, fe)) | 0) + Math.imul(k, ce)) | 0),
            (o = (o + Math.imul(k, fe)) | 0),
            (a = (a + Math.imul(v, ue)) | 0),
            (i = ((i = (i + Math.imul(v, he)) | 0) + Math.imul(g, ue)) | 0),
            (o = (o + Math.imul(g, he)) | 0);
          var Ae =
            (((f + (a = (a + Math.imul(p, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, be)) | 0) + Math.imul(b, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(b, be)) | 0) + (i >>> 13)) | 0) +
              (Ae >>> 26)) |
            0),
            (Ae &= 67108863),
            (a = Math.imul(L, V)),
            (i = ((i = Math.imul(L, X)) + Math.imul(D, V)) | 0),
            (o = Math.imul(D, X)),
            (a = (a + Math.imul(P, G)) | 0),
            (i = ((i = (i + Math.imul(P, Y)) | 0) + Math.imul(N, G)) | 0),
            (o = (o + Math.imul(N, Y)) | 0),
            (a = (a + Math.imul(B, $)) | 0),
            (i = ((i = (i + Math.imul(B, ee)) | 0) + Math.imul(C, $)) | 0),
            (o = (o + Math.imul(C, ee)) | 0),
            (a = (a + Math.imul(I, re)) | 0),
            (i = ((i = (i + Math.imul(I, ae)) | 0) + Math.imul(q, re)) | 0),
            (o = (o + Math.imul(q, ae)) | 0),
            (a = (a + Math.imul(A, oe)) | 0),
            (i = ((i = (i + Math.imul(A, ne)) | 0) + Math.imul(S, oe)) | 0),
            (o = (o + Math.imul(S, ne)) | 0),
            (a = (a + Math.imul(_, ce)) | 0),
            (i = ((i = (i + Math.imul(_, fe)) | 0) + Math.imul(z, ce)) | 0),
            (o = (o + Math.imul(z, fe)) | 0),
            (a = (a + Math.imul(w, ue)) | 0),
            (i = ((i = (i + Math.imul(w, he)) | 0) + Math.imul(k, ue)) | 0),
            (o = (o + Math.imul(k, he)) | 0);
          var Se =
            (((f + (a = (a + Math.imul(v, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(v, be)) | 0) + Math.imul(g, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(g, be)) | 0) + (i >>> 13)) | 0) +
              (Se >>> 26)) |
            0),
            (Se &= 67108863),
            (a = Math.imul(L, G)),
            (i = ((i = Math.imul(L, Y)) + Math.imul(D, G)) | 0),
            (o = Math.imul(D, Y)),
            (a = (a + Math.imul(P, $)) | 0),
            (i = ((i = (i + Math.imul(P, ee)) | 0) + Math.imul(N, $)) | 0),
            (o = (o + Math.imul(N, ee)) | 0),
            (a = (a + Math.imul(B, re)) | 0),
            (i = ((i = (i + Math.imul(B, ae)) | 0) + Math.imul(C, re)) | 0),
            (o = (o + Math.imul(C, ae)) | 0),
            (a = (a + Math.imul(I, oe)) | 0),
            (i = ((i = (i + Math.imul(I, ne)) | 0) + Math.imul(q, oe)) | 0),
            (o = (o + Math.imul(q, ne)) | 0),
            (a = (a + Math.imul(A, ce)) | 0),
            (i = ((i = (i + Math.imul(A, fe)) | 0) + Math.imul(S, ce)) | 0),
            (o = (o + Math.imul(S, fe)) | 0),
            (a = (a + Math.imul(_, ue)) | 0),
            (i = ((i = (i + Math.imul(_, he)) | 0) + Math.imul(z, ue)) | 0),
            (o = (o + Math.imul(z, he)) | 0);
          var je =
            (((f + (a = (a + Math.imul(w, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, be)) | 0) + Math.imul(k, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(k, be)) | 0) + (i >>> 13)) | 0) +
              (je >>> 26)) |
            0),
            (je &= 67108863),
            (a = Math.imul(L, $)),
            (i = ((i = Math.imul(L, ee)) + Math.imul(D, $)) | 0),
            (o = Math.imul(D, ee)),
            (a = (a + Math.imul(P, re)) | 0),
            (i = ((i = (i + Math.imul(P, ae)) | 0) + Math.imul(N, re)) | 0),
            (o = (o + Math.imul(N, ae)) | 0),
            (a = (a + Math.imul(B, oe)) | 0),
            (i = ((i = (i + Math.imul(B, ne)) | 0) + Math.imul(C, oe)) | 0),
            (o = (o + Math.imul(C, ne)) | 0),
            (a = (a + Math.imul(I, ce)) | 0),
            (i = ((i = (i + Math.imul(I, fe)) | 0) + Math.imul(q, ce)) | 0),
            (o = (o + Math.imul(q, fe)) | 0),
            (a = (a + Math.imul(A, ue)) | 0),
            (i = ((i = (i + Math.imul(A, he)) | 0) + Math.imul(S, ue)) | 0),
            (o = (o + Math.imul(S, he)) | 0);
          var Ie =
            (((f + (a = (a + Math.imul(_, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(_, be)) | 0) + Math.imul(z, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(z, be)) | 0) + (i >>> 13)) | 0) +
              (Ie >>> 26)) |
            0),
            (Ie &= 67108863),
            (a = Math.imul(L, re)),
            (i = ((i = Math.imul(L, ae)) + Math.imul(D, re)) | 0),
            (o = Math.imul(D, ae)),
            (a = (a + Math.imul(P, oe)) | 0),
            (i = ((i = (i + Math.imul(P, ne)) | 0) + Math.imul(N, oe)) | 0),
            (o = (o + Math.imul(N, ne)) | 0),
            (a = (a + Math.imul(B, ce)) | 0),
            (i = ((i = (i + Math.imul(B, fe)) | 0) + Math.imul(C, ce)) | 0),
            (o = (o + Math.imul(C, fe)) | 0),
            (a = (a + Math.imul(I, ue)) | 0),
            (i = ((i = (i + Math.imul(I, he)) | 0) + Math.imul(q, ue)) | 0),
            (o = (o + Math.imul(q, he)) | 0);
          var qe =
            (((f + (a = (a + Math.imul(A, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(A, be)) | 0) + Math.imul(S, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(S, be)) | 0) + (i >>> 13)) | 0) +
              (qe >>> 26)) |
            0),
            (qe &= 67108863),
            (a = Math.imul(L, oe)),
            (i = ((i = Math.imul(L, ne)) + Math.imul(D, oe)) | 0),
            (o = Math.imul(D, ne)),
            (a = (a + Math.imul(P, ce)) | 0),
            (i = ((i = (i + Math.imul(P, fe)) | 0) + Math.imul(N, ce)) | 0),
            (o = (o + Math.imul(N, fe)) | 0),
            (a = (a + Math.imul(B, ue)) | 0),
            (i = ((i = (i + Math.imul(B, he)) | 0) + Math.imul(C, ue)) | 0),
            (o = (o + Math.imul(C, he)) | 0);
          var Ee =
            (((f + (a = (a + Math.imul(I, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(I, be)) | 0) + Math.imul(q, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(q, be)) | 0) + (i >>> 13)) | 0) +
              (Ee >>> 26)) |
            0),
            (Ee &= 67108863),
            (a = Math.imul(L, ce)),
            (i = ((i = Math.imul(L, fe)) + Math.imul(D, ce)) | 0),
            (o = Math.imul(D, fe)),
            (a = (a + Math.imul(P, ue)) | 0),
            (i = ((i = (i + Math.imul(P, he)) | 0) + Math.imul(N, ue)) | 0),
            (o = (o + Math.imul(N, he)) | 0);
          var Be =
            (((f + (a = (a + Math.imul(B, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(B, be)) | 0) + Math.imul(C, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(C, be)) | 0) + (i >>> 13)) | 0) +
              (Be >>> 26)) |
            0),
            (Be &= 67108863),
            (a = Math.imul(L, ue)),
            (i = ((i = Math.imul(L, he)) + Math.imul(D, ue)) | 0),
            (o = Math.imul(D, he));
          var Ce =
            (((f + (a = (a + Math.imul(P, pe)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(P, be)) | 0) + Math.imul(N, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((o = (o + Math.imul(N, be)) | 0) + (i >>> 13)) | 0) +
              (Ce >>> 26)) |
            0),
            (Ce &= 67108863);
          var Re =
            (((f + (a = Math.imul(L, pe))) | 0) +
              ((8191 & (i = ((i = Math.imul(L, be)) + Math.imul(D, pe)) | 0)) <<
                13)) |
            0;
          return (
            (f =
              ((((o = Math.imul(D, be)) + (i >>> 13)) | 0) + (Re >>> 26)) | 0),
            (Re &= 67108863),
            (c[0] = me),
            (c[1] = ve),
            (c[2] = ge),
            (c[3] = ye),
            (c[4] = we),
            (c[5] = ke),
            (c[6] = Me),
            (c[7] = _e),
            (c[8] = ze),
            (c[9] = xe),
            (c[10] = Ae),
            (c[11] = Se),
            (c[12] = je),
            (c[13] = Ie),
            (c[14] = qe),
            (c[15] = Ee),
            (c[16] = Be),
            (c[17] = Ce),
            (c[18] = Re),
            0 !== f && ((c[19] = f), r.length++),
            r
          );
        };
        function p(e, t, r) {
          return new b().mulp(e, t, r);
        }
        function b(e, t) {
          (this.x = e), (this.y = t);
        }
        Math.imul || (l = h),
          (o.prototype.mulTo = function (e, t) {
            var r = this.length + e.length;
            return 10 === this.length && 10 === e.length
              ? l(this, e, t)
              : r < 63
              ? h(this, e, t)
              : r < 1024
              ? (function (e, t, r) {
                  (r.negative = t.negative ^ e.negative),
                    (r.length = e.length + t.length);
                  for (var a = 0, i = 0, o = 0; o < r.length - 1; o++) {
                    var n = i;
                    i = 0;
                    for (
                      var s = 67108863 & a,
                        c = Math.min(o, t.length - 1),
                        f = Math.max(0, o - e.length + 1);
                      f <= c;
                      f++
                    ) {
                      var d = o - f,
                        u = (0 | e.words[d]) * (0 | t.words[f]),
                        h = 67108863 & u;
                      (s = 67108863 & (h = (h + s) | 0)),
                        (i +=
                          (n =
                            ((n = (n + ((u / 67108864) | 0)) | 0) +
                              (h >>> 26)) |
                            0) >>> 26),
                        (n &= 67108863);
                    }
                    (r.words[o] = s), (a = n), (n = i);
                  }
                  return 0 !== a ? (r.words[o] = a) : r.length--, r.strip();
                })(this, e, t)
              : p(this, e, t);
          }),
          (b.prototype.makeRBT = function (e) {
            for (
              var t = new Array(e), r = o.prototype._countBits(e) - 1, a = 0;
              a < e;
              a++
            )
              t[a] = this.revBin(a, r, e);
            return t;
          }),
          (b.prototype.revBin = function (e, t, r) {
            if (0 === e || e === r - 1) return e;
            for (var a = 0, i = 0; i < t; i++)
              (a |= (1 & e) << (t - i - 1)), (e >>= 1);
            return a;
          }),
          (b.prototype.permute = function (e, t, r, a, i, o) {
            for (var n = 0; n < o; n++) (a[n] = t[e[n]]), (i[n] = r[e[n]]);
          }),
          (b.prototype.transform = function (e, t, r, a, i, o) {
            this.permute(o, e, t, r, a, i);
            for (var n = 1; n < i; n <<= 1)
              for (
                var s = n << 1,
                  c = Math.cos((2 * Math.PI) / s),
                  f = Math.sin((2 * Math.PI) / s),
                  d = 0;
                d < i;
                d += s
              )
                for (var u = c, h = f, l = 0; l < n; l++) {
                  var p = r[d + l],
                    b = a[d + l],
                    m = r[d + l + n],
                    v = a[d + l + n],
                    g = u * m - h * v;
                  (v = u * v + h * m),
                    (m = g),
                    (r[d + l] = p + m),
                    (a[d + l] = b + v),
                    (r[d + l + n] = p - m),
                    (a[d + l + n] = b - v),
                    l !== s &&
                      ((g = c * u - f * h), (h = c * h + f * u), (u = g));
                }
          }),
          (b.prototype.guessLen13b = function (e, t) {
            var r = 1 | Math.max(t, e),
              a = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + a);
          }),
          (b.prototype.conjugate = function (e, t, r) {
            if (!(r <= 1))
              for (var a = 0; a < r / 2; a++) {
                var i = e[a];
                (e[a] = e[r - a - 1]),
                  (e[r - a - 1] = i),
                  (i = t[a]),
                  (t[a] = -t[r - a - 1]),
                  (t[r - a - 1] = -i);
              }
          }),
          (b.prototype.normalize13b = function (e, t) {
            for (var r = 0, a = 0; a < t / 2; a++) {
              var i =
                8192 * Math.round(e[2 * a + 1] / t) +
                Math.round(e[2 * a] / t) +
                r;
              (e[a] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return e;
          }),
          (b.prototype.convert13b = function (e, t, r, i) {
            for (var o = 0, n = 0; n < t; n++)
              (o += 0 | e[n]),
                (r[2 * n] = 8191 & o),
                (o >>>= 13),
                (r[2 * n + 1] = 8191 & o),
                (o >>>= 13);
            for (n = 2 * t; n < i; ++n) r[n] = 0;
            a(0 === o), a(0 == (-8192 & o));
          }),
          (b.prototype.stub = function (e) {
            for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
            return t;
          }),
          (b.prototype.mulp = function (e, t, r) {
            var a = 2 * this.guessLen13b(e.length, t.length),
              i = this.makeRBT(a),
              o = this.stub(a),
              n = new Array(a),
              s = new Array(a),
              c = new Array(a),
              f = new Array(a),
              d = new Array(a),
              u = new Array(a),
              h = r.words;
            (h.length = a),
              this.convert13b(e.words, e.length, n, a),
              this.convert13b(t.words, t.length, f, a),
              this.transform(n, o, s, c, a, i),
              this.transform(f, o, d, u, a, i);
            for (var l = 0; l < a; l++) {
              var p = s[l] * d[l] - c[l] * u[l];
              (c[l] = s[l] * u[l] + c[l] * d[l]), (s[l] = p);
            }
            return (
              this.conjugate(s, c, a),
              this.transform(s, c, h, o, a, i),
              this.conjugate(h, o, a),
              this.normalize13b(h, a),
              (r.negative = e.negative ^ t.negative),
              (r.length = e.length + t.length),
              r.strip()
            );
          }),
          (o.prototype.mul = function (e) {
            var t = new o(null);
            return (
              (t.words = new Array(this.length + e.length)), this.mulTo(e, t)
            );
          }),
          (o.prototype.mulf = function (e) {
            var t = new o(null);
            return (t.words = new Array(this.length + e.length)), p(this, e, t);
          }),
          (o.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
          }),
          (o.prototype.imuln = function (e) {
            a('number' == typeof e), a(e < 67108864);
            for (var t = 0, r = 0; r < this.length; r++) {
              var i = (0 | this.words[r]) * e,
                o = (67108863 & i) + (67108863 & t);
              (t >>= 26),
                (t += (i / 67108864) | 0),
                (t += o >>> 26),
                (this.words[r] = 67108863 & o);
            }
            return 0 !== t && ((this.words[r] = t), this.length++), this;
          }),
          (o.prototype.muln = function (e) {
            return this.clone().imuln(e);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (e) {
            var t = (function (e) {
              for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                var a = (r / 26) | 0,
                  i = r % 26;
                t[r] = (e.words[a] & (1 << i)) >>> i;
              }
              return t;
            })(e);
            if (0 === t.length) return new o(1);
            for (
              var r = this, a = 0;
              a < t.length && 0 === t[a];
              a++, r = r.sqr()
            );
            if (++a < t.length)
              for (var i = r.sqr(); a < t.length; a++, i = i.sqr())
                0 !== t[a] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (e) {
            a('number' == typeof e && e >= 0);
            var t,
              r = e % 26,
              i = (e - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var n = 0;
              for (t = 0; t < this.length; t++) {
                var s = this.words[t] & o,
                  c = ((0 | this.words[t]) - s) << r;
                (this.words[t] = c | n), (n = s >>> (26 - r));
              }
              n && ((this.words[t] = n), this.length++);
            }
            if (0 !== i) {
              for (t = this.length - 1; t >= 0; t--)
                this.words[t + i] = this.words[t];
              for (t = 0; t < i; t++) this.words[t] = 0;
              this.length += i;
            }
            return this.strip();
          }),
          (o.prototype.ishln = function (e) {
            return a(0 === this.negative), this.iushln(e);
          }),
          (o.prototype.iushrn = function (e, t, r) {
            var i;
            a('number' == typeof e && e >= 0),
              (i = t ? (t - (t % 26)) / 26 : 0);
            var o = e % 26,
              n = Math.min((e - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              c = r;
            if (((i -= n), (i = Math.max(0, i)), c)) {
              for (var f = 0; f < n; f++) c.words[f] = this.words[f];
              c.length = n;
            }
            if (0 === n);
            else if (this.length > n)
              for (this.length -= n, f = 0; f < this.length; f++)
                this.words[f] = this.words[f + n];
            else (this.words[0] = 0), (this.length = 1);
            var d = 0;
            for (f = this.length - 1; f >= 0 && (0 !== d || f >= i); f--) {
              var u = 0 | this.words[f];
              (this.words[f] = (d << (26 - o)) | (u >>> o)), (d = u & s);
            }
            return (
              c && 0 !== d && (c.words[c.length++] = d),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (o.prototype.ishrn = function (e, t, r) {
            return a(0 === this.negative), this.iushrn(e, t, r);
          }),
          (o.prototype.shln = function (e) {
            return this.clone().ishln(e);
          }),
          (o.prototype.ushln = function (e) {
            return this.clone().iushln(e);
          }),
          (o.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
          }),
          (o.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
          }),
          (o.prototype.testn = function (e) {
            a('number' == typeof e && e >= 0);
            var t = e % 26,
              r = (e - t) / 26,
              i = 1 << t;
            return !(this.length <= r || !(this.words[r] & i));
          }),
          (o.prototype.imaskn = function (e) {
            a('number' == typeof e && e >= 0);
            var t = e % 26,
              r = (e - t) / 26;
            if (
              (a(
                0 === this.negative,
                'imaskn works only with positive numbers'
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== t && r++,
              (this.length = Math.min(r, this.length)),
              0 !== t)
            ) {
              var i = 67108863 ^ ((67108863 >>> t) << t);
              this.words[this.length - 1] &= i;
            }
            return this.strip();
          }),
          (o.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
          }),
          (o.prototype.iaddn = function (e) {
            return (
              a('number' == typeof e),
              a(e < 67108864),
              e < 0
                ? this.isubn(-e)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < e
                  ? ((this.words[0] = e - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(e),
                    (this.negative = 1),
                    this)
                : this._iaddn(e)
            );
          }),
          (o.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
              (this.words[t] -= 67108864),
                t === this.length - 1
                  ? (this.words[t + 1] = 1)
                  : this.words[t + 1]++;
            return (this.length = Math.max(this.length, t + 1)), this;
          }),
          (o.prototype.isubn = function (e) {
            if ((a('number' == typeof e), a(e < 67108864), e < 0))
              return this.iaddn(-e);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(e), (this.negative = 1), this
              );
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var t = 0; t < this.length && this.words[t] < 0; t++)
                (this.words[t] += 67108864), (this.words[t + 1] -= 1);
            return this.strip();
          }),
          (o.prototype.addn = function (e) {
            return this.clone().iaddn(e);
          }),
          (o.prototype.subn = function (e) {
            return this.clone().isubn(e);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (e, t, r) {
            var i,
              o,
              n = e.length + r;
            this._expand(n);
            var s = 0;
            for (i = 0; i < e.length; i++) {
              o = (0 | this.words[i + r]) + s;
              var c = (0 | e.words[i]) * t;
              (s = ((o -= 67108863 & c) >> 26) - ((c / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (s = (o = (0 | this.words[i + r]) + s) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === s) return this.strip();
            for (a(-1 === s), s = 0, i = 0; i < this.length; i++)
              (s = (o = -(0 | this.words[i]) + s) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this.strip();
          }),
          (o.prototype._wordDiv = function (e, t) {
            var r = (this.length, e.length),
              a = this.clone(),
              i = e,
              n = 0 | i.words[i.length - 1];
            0 != (r = 26 - this._countBits(n)) &&
              ((i = i.ushln(r)), a.iushln(r), (n = 0 | i.words[i.length - 1]));
            var s,
              c = a.length - i.length;
            if ('mod' !== t) {
              ((s = new o(null)).length = c + 1),
                (s.words = new Array(s.length));
              for (var f = 0; f < s.length; f++) s.words[f] = 0;
            }
            var d = a.clone()._ishlnsubmul(i, 1, c);
            0 === d.negative && ((a = d), s && (s.words[c] = 1));
            for (var u = c - 1; u >= 0; u--) {
              var h =
                67108864 * (0 | a.words[i.length + u]) +
                (0 | a.words[i.length + u - 1]);
              for (
                h = Math.min((h / n) | 0, 67108863), a._ishlnsubmul(i, h, u);
                0 !== a.negative;

              )
                h--,
                  (a.negative = 0),
                  a._ishlnsubmul(i, 1, u),
                  a.isZero() || (a.negative ^= 1);
              s && (s.words[u] = h);
            }
            return (
              s && s.strip(),
              a.strip(),
              'div' !== t && 0 !== r && a.iushrn(r),
              { div: s || null, mod: a }
            );
          }),
          (o.prototype.divmod = function (e, t, r) {
            return (
              a(!e.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === e.negative
                ? ((s = this.neg().divmod(e, t)),
                  'mod' !== t && (i = s.div.neg()),
                  'div' !== t &&
                    ((n = s.mod.neg()), r && 0 !== n.negative && n.iadd(e)),
                  { div: i, mod: n })
                : 0 === this.negative && 0 !== e.negative
                ? ((s = this.divmod(e.neg(), t)),
                  'mod' !== t && (i = s.div.neg()),
                  { div: i, mod: s.mod })
                : 0 != (this.negative & e.negative)
                ? ((s = this.neg().divmod(e.neg(), t)),
                  'div' !== t &&
                    ((n = s.mod.neg()), r && 0 !== n.negative && n.isub(e)),
                  { div: s.div, mod: n })
                : e.length > this.length || this.cmp(e) < 0
                ? { div: new o(0), mod: this }
                : 1 === e.length
                ? 'div' === t
                  ? { div: this.divn(e.words[0]), mod: null }
                  : 'mod' === t
                  ? { div: null, mod: new o(this.modn(e.words[0])) }
                  : {
                      div: this.divn(e.words[0]),
                      mod: new o(this.modn(e.words[0]))
                    }
                : this._wordDiv(e, t)
            );
            var i, n, s;
          }),
          (o.prototype.div = function (e) {
            return this.divmod(e, 'div', !1).div;
          }),
          (o.prototype.mod = function (e) {
            return this.divmod(e, 'mod', !1).mod;
          }),
          (o.prototype.umod = function (e) {
            return this.divmod(e, 'mod', !0).mod;
          }),
          (o.prototype.divRound = function (e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
              a = e.ushrn(1),
              i = e.andln(1),
              o = r.cmp(a);
            return o < 0 || (1 === i && 0 === o)
              ? t.div
              : 0 !== t.div.negative
              ? t.div.isubn(1)
              : t.div.iaddn(1);
          }),
          (o.prototype.modn = function (e) {
            a(e <= 67108863);
            for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--)
              r = (t * r + (0 | this.words[i])) % e;
            return r;
          }),
          (o.prototype.idivn = function (e) {
            a(e <= 67108863);
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var i = (0 | this.words[r]) + 67108864 * t;
              (this.words[r] = (i / e) | 0), (t = i % e);
            }
            return this.strip();
          }),
          (o.prototype.divn = function (e) {
            return this.clone().idivn(e);
          }),
          (o.prototype.egcd = function (e) {
            a(0 === e.negative), a(!e.isZero());
            var t = this,
              r = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (
              var i = new o(1), n = new o(0), s = new o(0), c = new o(1), f = 0;
              t.isEven() && r.isEven();

            )
              t.iushrn(1), r.iushrn(1), ++f;
            for (var d = r.clone(), u = t.clone(); !t.isZero(); ) {
              for (
                var h = 0, l = 1;
                0 == (t.words[0] & l) && h < 26;
                ++h, l <<= 1
              );
              if (h > 0)
                for (t.iushrn(h); h-- > 0; )
                  (i.isOdd() || n.isOdd()) && (i.iadd(d), n.isub(u)),
                    i.iushrn(1),
                    n.iushrn(1);
              for (
                var p = 0, b = 1;
                0 == (r.words[0] & b) && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || c.isOdd()) && (s.iadd(d), c.isub(u)),
                    s.iushrn(1),
                    c.iushrn(1);
              t.cmp(r) >= 0
                ? (t.isub(r), i.isub(s), n.isub(c))
                : (r.isub(t), s.isub(i), c.isub(n));
            }
            return { a: s, b: c, gcd: r.iushln(f) };
          }),
          (o.prototype._invmp = function (e) {
            a(0 === e.negative), a(!e.isZero());
            var t = this,
              r = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (
              var i, n = new o(1), s = new o(0), c = r.clone();
              t.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var f = 0, d = 1;
                0 == (t.words[0] & d) && f < 26;
                ++f, d <<= 1
              );
              if (f > 0)
                for (t.iushrn(f); f-- > 0; )
                  n.isOdd() && n.iadd(c), n.iushrn(1);
              for (
                var u = 0, h = 1;
                0 == (r.words[0] & h) && u < 26;
                ++u, h <<= 1
              );
              if (u > 0)
                for (r.iushrn(u); u-- > 0; )
                  s.isOdd() && s.iadd(c), s.iushrn(1);
              t.cmp(r) >= 0 ? (t.isub(r), n.isub(s)) : (r.isub(t), s.isub(n));
            }
            return (i = 0 === t.cmpn(1) ? n : s).cmpn(0) < 0 && i.iadd(e), i;
          }),
          (o.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
              r = e.clone();
            (t.negative = 0), (r.negative = 0);
            for (var a = 0; t.isEven() && r.isEven(); a++)
              t.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; t.isEven(); ) t.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = t.cmp(r);
              if (i < 0) {
                var o = t;
                (t = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              t.isub(r);
            }
            return r.iushln(a);
          }),
          (o.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
          }),
          (o.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
          }),
          (o.prototype.andln = function (e) {
            return this.words[0] & e;
          }),
          (o.prototype.bincn = function (e) {
            a('number' == typeof e);
            var t = e % 26,
              r = (e - t) / 26,
              i = 1 << t;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, n = r; 0 !== o && n < this.length; n++) {
              var s = 0 | this.words[n];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[n] = s);
            }
            return 0 !== o && ((this.words[n] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (e) {
            var t,
              r = e < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this.strip(), this.length > 1)) t = 1;
            else {
              r && (e = -e), a(e <= 67108863, 'Number is too big');
              var i = 0 | this.words[0];
              t = i === e ? 0 : i < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (o.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (o.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var a = 0 | this.words[r],
                i = 0 | e.words[r];
              if (a !== i) {
                a < i ? (t = -1) : a > i && (t = 1);
                break;
              }
            }
            return t;
          }),
          (o.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
          }),
          (o.prototype.gt = function (e) {
            return 1 === this.cmp(e);
          }),
          (o.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
          }),
          (o.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
          }),
          (o.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
          }),
          (o.prototype.lt = function (e) {
            return -1 === this.cmp(e);
          }),
          (o.prototype.lten = function (e) {
            return this.cmpn(e) <= 0;
          }),
          (o.prototype.lte = function (e) {
            return this.cmp(e) <= 0;
          }),
          (o.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
          }),
          (o.prototype.eq = function (e) {
            return 0 === this.cmp(e);
          }),
          (o.red = function (e) {
            return new M(e);
          }),
          (o.prototype.toRed = function (e) {
            return (
              a(!this.red, 'Already a number in reduction context'),
              a(0 === this.negative, 'red works only with positives'),
              e.convertTo(this)._forceRed(e)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              a(
                this.red,
                'fromRed works only with numbers in reduction context'
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (e) {
            return (this.red = e), this;
          }),
          (o.prototype.forceRed = function (e) {
            return (
              a(!this.red, 'Already a number in reduction context'),
              this._forceRed(e)
            );
          }),
          (o.prototype.redAdd = function (e) {
            return (
              a(this.red, 'redAdd works only with red numbers'),
              this.red.add(this, e)
            );
          }),
          (o.prototype.redIAdd = function (e) {
            return (
              a(this.red, 'redIAdd works only with red numbers'),
              this.red.iadd(this, e)
            );
          }),
          (o.prototype.redSub = function (e) {
            return (
              a(this.red, 'redSub works only with red numbers'),
              this.red.sub(this, e)
            );
          }),
          (o.prototype.redISub = function (e) {
            return (
              a(this.red, 'redISub works only with red numbers'),
              this.red.isub(this, e)
            );
          }),
          (o.prototype.redShl = function (e) {
            return (
              a(this.red, 'redShl works only with red numbers'),
              this.red.shl(this, e)
            );
          }),
          (o.prototype.redMul = function (e) {
            return (
              a(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, e),
              this.red.mul(this, e)
            );
          }),
          (o.prototype.redIMul = function (e) {
            return (
              a(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, e),
              this.red.imul(this, e)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              a(this.red, 'redSqr works only with red numbers'),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              a(this.red, 'redISqr works only with red numbers'),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              a(this.red, 'redSqrt works only with red numbers'),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              a(this.red, 'redInvm works only with red numbers'),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              a(this.red, 'redNeg works only with red numbers'),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (e) {
            return (
              a(this.red && !e.red, 'redPow(normalNum)'),
              this.red._verify1(this),
              this.red.pow(this, e)
            );
          });
        var m = { k256: null, p224: null, p192: null, p25519: null };
        function v(e, t) {
          (this.name = e),
            (this.p = new o(t, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function g() {
          v.call(
            this,
            'k256',
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
          );
        }
        function y() {
          v.call(
            this,
            'p224',
            'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
          );
        }
        function w() {
          v.call(
            this,
            'p192',
            'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
          );
        }
        function k() {
          v.call(
            this,
            '25519',
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
          );
        }
        function M(e) {
          if ('string' == typeof e) {
            var t = o._prime(e);
            (this.m = t.p), (this.prime = t);
          } else
            a(e.gtn(1), 'modulus must be greater than 1'),
              (this.m = e),
              (this.prime = null);
        }
        function _(e) {
          M.call(this, e),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (v.prototype._tmp = function () {
          var e = new o(null);
          return (e.words = new Array(Math.ceil(this.n / 13))), e;
        }),
          (v.prototype.ireduce = function (e) {
            var t,
              r = e;
            do {
              this.split(r, this.tmp),
                (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (t > this.n);
            var a = t < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === a
                ? ((r.words[0] = 0), (r.length = 1))
                : a > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (v.prototype.split = function (e, t) {
            e.iushrn(this.n, 0, t);
          }),
          (v.prototype.imulK = function (e) {
            return e.imul(this.k);
          }),
          i(g, v),
          (g.prototype.split = function (e, t) {
            for (var r = 4194303, a = Math.min(e.length, 9), i = 0; i < a; i++)
              t.words[i] = e.words[i];
            if (((t.length = a), e.length <= 9))
              return (e.words[0] = 0), void (e.length = 1);
            var o = e.words[9];
            for (t.words[t.length++] = o & r, i = 10; i < e.length; i++) {
              var n = 0 | e.words[i];
              (e.words[i - 10] = ((n & r) << 4) | (o >>> 22)), (o = n);
            }
            (o >>>= 22),
              (e.words[i - 10] = o),
              0 === o && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
          }),
          (g.prototype.imulK = function (e) {
            (e.words[e.length] = 0),
              (e.words[e.length + 1] = 0),
              (e.length += 2);
            for (var t = 0, r = 0; r < e.length; r++) {
              var a = 0 | e.words[r];
              (t += 977 * a),
                (e.words[r] = 67108863 & t),
                (t = 64 * a + ((t / 67108864) | 0));
            }
            return (
              0 === e.words[e.length - 1] &&
                (e.length--, 0 === e.words[e.length - 1] && e.length--),
              e
            );
          }),
          i(y, v),
          i(w, v),
          i(k, v),
          (k.prototype.imulK = function (e) {
            for (var t = 0, r = 0; r < e.length; r++) {
              var a = 19 * (0 | e.words[r]) + t,
                i = 67108863 & a;
              (a >>>= 26), (e.words[r] = i), (t = a);
            }
            return 0 !== t && (e.words[e.length++] = t), e;
          }),
          (o._prime = function (e) {
            if (m[e]) return m[e];
            var t;
            if ('k256' === e) t = new g();
            else if ('p224' === e) t = new y();
            else if ('p192' === e) t = new w();
            else {
              if ('p25519' !== e) throw new Error('Unknown prime ' + e);
              t = new k();
            }
            return (m[e] = t), t;
          }),
          (M.prototype._verify1 = function (e) {
            a(0 === e.negative, 'red works only with positives'),
              a(e.red, 'red works only with red numbers');
          }),
          (M.prototype._verify2 = function (e, t) {
            a(0 == (e.negative | t.negative), 'red works only with positives'),
              a(e.red && e.red === t.red, 'red works only with red numbers');
          }),
          (M.prototype.imod = function (e) {
            return this.prime
              ? this.prime.ireduce(e)._forceRed(this)
              : e.umod(this.m)._forceRed(this);
          }),
          (M.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
          }),
          (M.prototype.add = function (e, t) {
            this._verify2(e, t);
            var r = e.add(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (M.prototype.iadd = function (e, t) {
            this._verify2(e, t);
            var r = e.iadd(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (M.prototype.sub = function (e, t) {
            this._verify2(e, t);
            var r = e.sub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (M.prototype.isub = function (e, t) {
            this._verify2(e, t);
            var r = e.isub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (M.prototype.shl = function (e, t) {
            return this._verify1(e), this.imod(e.ushln(t));
          }),
          (M.prototype.imul = function (e, t) {
            return this._verify2(e, t), this.imod(e.imul(t));
          }),
          (M.prototype.mul = function (e, t) {
            return this._verify2(e, t), this.imod(e.mul(t));
          }),
          (M.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
          }),
          (M.prototype.sqr = function (e) {
            return this.mul(e, e);
          }),
          (M.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if ((a(t % 2 == 1), 3 === t)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(e, r);
            }
            for (
              var i = this.m.subn(1), n = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              n++, i.iushrn(1);
            a(!i.isZero());
            var s = new o(1).toRed(this),
              c = s.redNeg(),
              f = this.m.subn(1).iushrn(1),
              d = this.m.bitLength();
            for (
              d = new o(2 * d * d).toRed(this);
              0 !== this.pow(d, f).cmp(c);

            )
              d.redIAdd(c);
            for (
              var u = this.pow(d, i),
                h = this.pow(e, i.addn(1).iushrn(1)),
                l = this.pow(e, i),
                p = n;
              0 !== l.cmp(s);

            ) {
              for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
              a(m < p);
              var v = this.pow(u, new o(1).iushln(p - m - 1));
              (h = h.redMul(v)), (u = v.redSqr()), (l = l.redMul(u)), (p = m);
            }
            return h;
          }),
          (M.prototype.invm = function (e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative
              ? ((t.negative = 0), this.imod(t).redNeg())
              : this.imod(t);
          }),
          (M.prototype.pow = function (e, t) {
            if (t.isZero()) return new o(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = e);
            for (var a = 2; a < r.length; a++) r[a] = this.mul(r[a - 1], e);
            var i = r[0],
              n = 0,
              s = 0,
              c = t.bitLength() % 26;
            for (0 === c && (c = 26), a = t.length - 1; a >= 0; a--) {
              for (var f = t.words[a], d = c - 1; d >= 0; d--) {
                var u = (f >> d) & 1;
                i !== r[0] && (i = this.sqr(i)),
                  0 !== u || 0 !== n
                    ? ((n <<= 1),
                      (n |= u),
                      (4 == ++s || (0 === a && 0 === d)) &&
                        ((i = this.mul(i, r[n])), (s = 0), (n = 0)))
                    : (s = 0);
              }
              c = 26;
            }
            return i;
          }),
          (M.prototype.convertTo = function (e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t;
          }),
          (M.prototype.convertFrom = function (e) {
            var t = e.clone();
            return (t.red = null), t;
          }),
          (o.mont = function (e) {
            return new _(e);
          }),
          i(_, M),
          (_.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
          }),
          (_.prototype.convertFrom = function (e) {
            var t = this.imod(e.mul(this.rinv));
            return (t.red = null), t;
          }),
          (_.prototype.imul = function (e, t) {
            if (e.isZero() || t.isZero())
              return (e.words[0] = 0), (e.length = 1), e;
            var r = e.imul(t),
              a = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(a).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (_.prototype.mul = function (e, t) {
            if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
            var r = e.mul(t),
              a = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(a).iushrn(this.shift),
              n = i;
            return (
              i.cmp(this.m) >= 0
                ? (n = i.isub(this.m))
                : i.cmpn(0) < 0 && (n = i.iadd(this.m)),
              n._forceRed(this)
            );
          }),
          (_.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((e = r.nmd(e)), this);
    },
    13973: (e, t, r) => {
      var a = r(77834).Buffer,
        i = r(54851).Transform,
        o = r(30214).s;
      function n(e) {
        i.call(this),
          (this.hashMode = 'string' == typeof e),
          this.hashMode
            ? (this[e] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null);
      }
      r(91285)(n, i),
        (n.prototype.update = function (e, t, r) {
          'string' == typeof e && (e = a.from(e, t));
          var i = this._update(e);
          return this.hashMode ? this : (r && (i = this._toString(i, r)), i);
        }),
        (n.prototype.setAutoPadding = function () {}),
        (n.prototype.getAuthTag = function () {
          throw new Error('trying to get auth tag in unsupported state');
        }),
        (n.prototype.setAuthTag = function () {
          throw new Error('trying to set auth tag in unsupported state');
        }),
        (n.prototype.setAAD = function () {
          throw new Error('trying to set aad in unsupported state');
        }),
        (n.prototype._transform = function (e, t, r) {
          var a;
          try {
            this.hashMode ? this._update(e) : this.push(this._update(e));
          } catch (e) {
            a = e;
          } finally {
            r(a);
          }
        }),
        (n.prototype._flush = function (e) {
          var t;
          try {
            this.push(this.__final());
          } catch (e) {
            t = e;
          }
          e(t);
        }),
        (n.prototype._finalOrDigest = function (e) {
          var t = this.__final() || a.alloc(0);
          return e && (t = this._toString(t, e, !0)), t;
        }),
        (n.prototype._toString = function (e, t, r) {
          if (
            (this._decoder ||
              ((this._decoder = new o(t)), (this._encoding = t)),
            this._encoding !== t)
          )
            throw new Error("can't switch encodings");
          var a = this._decoder.write(e);
          return r && (a += this._decoder.end()), a;
        }),
        (e.exports = n);
    },
    5634: (e, t, r) => {
      'use strict';
      (t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = r(95003)),
        (t.createHash = t.Hash = r(16162)),
        (t.createHmac = t.Hmac = r(50011));
      var a = r(24778),
        i = Object.keys(a),
        o = [
          'sha1',
          'sha224',
          'sha256',
          'sha384',
          'sha512',
          'md5',
          'rmd160'
        ].concat(i);
      t.getHashes = function () {
        return o;
      };
      var n = r(30499);
      (t.pbkdf2 = n.pbkdf2), (t.pbkdf2Sync = n.pbkdf2Sync);
      var s = r(93667);
      (t.Cipher = s.Cipher),
        (t.createCipher = s.createCipher),
        (t.Cipheriv = s.Cipheriv),
        (t.createCipheriv = s.createCipheriv),
        (t.Decipher = s.Decipher),
        (t.createDecipher = s.createDecipher),
        (t.Decipheriv = s.Decipheriv),
        (t.createDecipheriv = s.createDecipheriv),
        (t.getCiphers = s.getCiphers),
        (t.listCiphers = s.listCiphers);
      var c = r(67602);
      (t.DiffieHellmanGroup = c.DiffieHellmanGroup),
        (t.createDiffieHellmanGroup = c.createDiffieHellmanGroup),
        (t.getDiffieHellman = c.getDiffieHellman),
        (t.createDiffieHellman = c.createDiffieHellman),
        (t.DiffieHellman = c.DiffieHellman);
      var f = r(95263);
      (t.createSign = f.createSign),
        (t.Sign = f.Sign),
        (t.createVerify = f.createVerify),
        (t.Verify = f.Verify),
        (t.createECDH = r(95363));
      var d = r(8493);
      (t.publicEncrypt = d.publicEncrypt),
        (t.privateEncrypt = d.privateEncrypt),
        (t.publicDecrypt = d.publicDecrypt),
        (t.privateDecrypt = d.privateDecrypt);
      var u = r(69631);
      (t.randomFill = u.randomFill),
        (t.randomFillSync = u.randomFillSync),
        (t.createCredentials = function () {
          throw new Error(
            [
              'sorry, createCredentials is not implemented yet',
              'we accept pull requests',
              'https://github.com/crypto-browserify/crypto-browserify'
            ].join('\n')
          );
        }),
        (t.constants = {
          DH_CHECK_P_NOT_SAFE_PRIME: 2,
          DH_CHECK_P_NOT_PRIME: 1,
          DH_UNABLE_TO_CHECK_GENERATOR: 4,
          DH_NOT_SUITABLE_GENERATOR: 8,
          NPN_ENABLED: 1,
          ALPN_ENABLED: 1,
          RSA_PKCS1_PADDING: 1,
          RSA_SSLV23_PADDING: 2,
          RSA_NO_PADDING: 3,
          RSA_PKCS1_OAEP_PADDING: 4,
          RSA_X931_PADDING: 5,
          RSA_PKCS1_PSS_PADDING: 6,
          POINT_CONVERSION_COMPRESSED: 2,
          POINT_CONVERSION_UNCOMPRESSED: 4,
          POINT_CONVERSION_HYBRID: 6
        });
    },
    84387: (e, t, r) => {
      'use strict';
      (t.utils = r(94112)),
        (t.Cipher = r(43639)),
        (t.DES = r(4225)),
        (t.CBC = r(59692)),
        (t.EDE = r(4335));
    },
    59692: (e, t, r) => {
      'use strict';
      var a = r(79561),
        i = r(91285),
        o = {};
      function n(e) {
        a.equal(e.length, 8, 'Invalid IV length'), (this.iv = new Array(8));
        for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t];
      }
      (t.instantiate = function (e) {
        function t(t) {
          e.call(this, t), this._cbcInit();
        }
        i(t, e);
        for (var r = Object.keys(o), a = 0; a < r.length; a++) {
          var n = r[a];
          t.prototype[n] = o[n];
        }
        return (
          (t.create = function (e) {
            return new t(e);
          }),
          t
        );
      }),
        (o._cbcInit = function () {
          var e = new n(this.options.iv);
          this._cbcState = e;
        }),
        (o._update = function (e, t, r, a) {
          var i = this._cbcState,
            o = this.constructor.super_.prototype,
            n = i.iv;
          if ('encrypt' === this.type) {
            for (var s = 0; s < this.blockSize; s++) n[s] ^= e[t + s];
            for (
              o._update.call(this, n, 0, r, a), s = 0;
              s < this.blockSize;
              s++
            )
              n[s] = r[a + s];
          } else {
            for (
              o._update.call(this, e, t, r, a), s = 0;
              s < this.blockSize;
              s++
            )
              r[a + s] ^= n[s];
            for (s = 0; s < this.blockSize; s++) n[s] = e[t + s];
          }
        });
    },
    43639: (e, t, r) => {
      'use strict';
      var a = r(79561);
      function i(e) {
        (this.options = e),
          (this.type = this.options.type),
          (this.blockSize = 8),
          this._init(),
          (this.buffer = new Array(this.blockSize)),
          (this.bufferOff = 0);
      }
      (e.exports = i),
        (i.prototype._init = function () {}),
        (i.prototype.update = function (e) {
          return 0 === e.length
            ? []
            : 'decrypt' === this.type
            ? this._updateDecrypt(e)
            : this._updateEncrypt(e);
        }),
        (i.prototype._buffer = function (e, t) {
          for (
            var r = Math.min(this.buffer.length - this.bufferOff, e.length - t),
              a = 0;
            a < r;
            a++
          )
            this.buffer[this.bufferOff + a] = e[t + a];
          return (this.bufferOff += r), r;
        }),
        (i.prototype._flushBuffer = function (e, t) {
          return (
            this._update(this.buffer, 0, e, t),
            (this.bufferOff = 0),
            this.blockSize
          );
        }),
        (i.prototype._updateEncrypt = function (e) {
          var t = 0,
            r = 0,
            a = ((this.bufferOff + e.length) / this.blockSize) | 0,
            i = new Array(a * this.blockSize);
          0 !== this.bufferOff &&
            ((t += this._buffer(e, t)),
            this.bufferOff === this.buffer.length &&
              (r += this._flushBuffer(i, r)));
          for (
            var o = e.length - ((e.length - t) % this.blockSize);
            t < o;
            t += this.blockSize
          )
            this._update(e, t, i, r), (r += this.blockSize);
          for (; t < e.length; t++, this.bufferOff++)
            this.buffer[this.bufferOff] = e[t];
          return i;
        }),
        (i.prototype._updateDecrypt = function (e) {
          for (
            var t = 0,
              r = 0,
              a = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1,
              i = new Array(a * this.blockSize);
            a > 0;
            a--
          )
            (t += this._buffer(e, t)), (r += this._flushBuffer(i, r));
          return (t += this._buffer(e, t)), i;
        }),
        (i.prototype.final = function (e) {
          var t, r;
          return (
            e && (t = this.update(e)),
            (r =
              'encrypt' === this.type
                ? this._finalEncrypt()
                : this._finalDecrypt()),
            t ? t.concat(r) : r
          );
        }),
        (i.prototype._pad = function (e, t) {
          if (0 === t) return !1;
          for (; t < e.length; ) e[t++] = 0;
          return !0;
        }),
        (i.prototype._finalEncrypt = function () {
          if (!this._pad(this.buffer, this.bufferOff)) return [];
          var e = new Array(this.blockSize);
          return this._update(this.buffer, 0, e, 0), e;
        }),
        (i.prototype._unpad = function (e) {
          return e;
        }),
        (i.prototype._finalDecrypt = function () {
          a.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt');
          var e = new Array(this.blockSize);
          return this._flushBuffer(e, 0), this._unpad(e);
        });
    },
    4225: (e, t, r) => {
      'use strict';
      var a = r(79561),
        i = r(91285),
        o = r(94112),
        n = r(43639);
      function s() {
        (this.tmp = new Array(2)), (this.keys = null);
      }
      function c(e) {
        n.call(this, e);
        var t = new s();
        (this._desState = t), this.deriveKeys(t, e.key);
      }
      i(c, n),
        (e.exports = c),
        (c.create = function (e) {
          return new c(e);
        });
      var f = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
      (c.prototype.deriveKeys = function (e, t) {
        (e.keys = new Array(32)),
          a.equal(t.length, this.blockSize, 'Invalid key length');
        var r = o.readUInt32BE(t, 0),
          i = o.readUInt32BE(t, 4);
        o.pc1(r, i, e.tmp, 0), (r = e.tmp[0]), (i = e.tmp[1]);
        for (var n = 0; n < e.keys.length; n += 2) {
          var s = f[n >>> 1];
          (r = o.r28shl(r, s)), (i = o.r28shl(i, s)), o.pc2(r, i, e.keys, n);
        }
      }),
        (c.prototype._update = function (e, t, r, a) {
          var i = this._desState,
            n = o.readUInt32BE(e, t),
            s = o.readUInt32BE(e, t + 4);
          o.ip(n, s, i.tmp, 0),
            (n = i.tmp[0]),
            (s = i.tmp[1]),
            'encrypt' === this.type
              ? this._encrypt(i, n, s, i.tmp, 0)
              : this._decrypt(i, n, s, i.tmp, 0),
            (n = i.tmp[0]),
            (s = i.tmp[1]),
            o.writeUInt32BE(r, n, a),
            o.writeUInt32BE(r, s, a + 4);
        }),
        (c.prototype._pad = function (e, t) {
          for (var r = e.length - t, a = t; a < e.length; a++) e[a] = r;
          return !0;
        }),
        (c.prototype._unpad = function (e) {
          for (var t = e[e.length - 1], r = e.length - t; r < e.length; r++)
            a.equal(e[r], t);
          return e.slice(0, e.length - t);
        }),
        (c.prototype._encrypt = function (e, t, r, a, i) {
          for (var n = t, s = r, c = 0; c < e.keys.length; c += 2) {
            var f = e.keys[c],
              d = e.keys[c + 1];
            o.expand(s, e.tmp, 0), (f ^= e.tmp[0]), (d ^= e.tmp[1]);
            var u = o.substitute(f, d),
              h = s;
            (s = (n ^ o.permute(u)) >>> 0), (n = h);
          }
          o.rip(s, n, a, i);
        }),
        (c.prototype._decrypt = function (e, t, r, a, i) {
          for (var n = r, s = t, c = e.keys.length - 2; c >= 0; c -= 2) {
            var f = e.keys[c],
              d = e.keys[c + 1];
            o.expand(n, e.tmp, 0), (f ^= e.tmp[0]), (d ^= e.tmp[1]);
            var u = o.substitute(f, d),
              h = n;
            (n = (s ^ o.permute(u)) >>> 0), (s = h);
          }
          o.rip(n, s, a, i);
        });
    },
    4335: (e, t, r) => {
      'use strict';
      var a = r(79561),
        i = r(91285),
        o = r(43639),
        n = r(4225);
      function s(e, t) {
        a.equal(t.length, 24, 'Invalid key length');
        var r = t.slice(0, 8),
          i = t.slice(8, 16),
          o = t.slice(16, 24);
        this.ciphers =
          'encrypt' === e
            ? [
                n.create({ type: 'encrypt', key: r }),
                n.create({ type: 'decrypt', key: i }),
                n.create({ type: 'encrypt', key: o })
              ]
            : [
                n.create({ type: 'decrypt', key: o }),
                n.create({ type: 'encrypt', key: i }),
                n.create({ type: 'decrypt', key: r })
              ];
      }
      function c(e) {
        o.call(this, e);
        var t = new s(this.type, this.options.key);
        this._edeState = t;
      }
      i(c, o),
        (e.exports = c),
        (c.create = function (e) {
          return new c(e);
        }),
        (c.prototype._update = function (e, t, r, a) {
          var i = this._edeState;
          i.ciphers[0]._update(e, t, r, a),
            i.ciphers[1]._update(r, a, r, a),
            i.ciphers[2]._update(r, a, r, a);
        }),
        (c.prototype._pad = n.prototype._pad),
        (c.prototype._unpad = n.prototype._unpad);
    },
    94112: (e, t) => {
      'use strict';
      (t.readUInt32BE = function (e, t) {
        return (
          ((e[0 + t] << 24) | (e[1 + t] << 16) | (e[2 + t] << 8) | e[3 + t]) >>>
          0
        );
      }),
        (t.writeUInt32BE = function (e, t, r) {
          (e[0 + r] = t >>> 24),
            (e[1 + r] = (t >>> 16) & 255),
            (e[2 + r] = (t >>> 8) & 255),
            (e[3 + r] = 255 & t);
        }),
        (t.ip = function (e, t, r, a) {
          for (var i = 0, o = 0, n = 6; n >= 0; n -= 2) {
            for (var s = 0; s <= 24; s += 8)
              (i <<= 1), (i |= (t >>> (s + n)) & 1);
            for (s = 0; s <= 24; s += 8) (i <<= 1), (i |= (e >>> (s + n)) & 1);
          }
          for (n = 6; n >= 0; n -= 2) {
            for (s = 1; s <= 25; s += 8) (o <<= 1), (o |= (t >>> (s + n)) & 1);
            for (s = 1; s <= 25; s += 8) (o <<= 1), (o |= (e >>> (s + n)) & 1);
          }
          (r[a + 0] = i >>> 0), (r[a + 1] = o >>> 0);
        }),
        (t.rip = function (e, t, r, a) {
          for (var i = 0, o = 0, n = 0; n < 4; n++)
            for (var s = 24; s >= 0; s -= 8)
              (i <<= 1),
                (i |= (t >>> (s + n)) & 1),
                (i <<= 1),
                (i |= (e >>> (s + n)) & 1);
          for (n = 4; n < 8; n++)
            for (s = 24; s >= 0; s -= 8)
              (o <<= 1),
                (o |= (t >>> (s + n)) & 1),
                (o <<= 1),
                (o |= (e >>> (s + n)) & 1);
          (r[a + 0] = i >>> 0), (r[a + 1] = o >>> 0);
        }),
        (t.pc1 = function (e, t, r, a) {
          for (var i = 0, o = 0, n = 7; n >= 5; n--) {
            for (var s = 0; s <= 24; s += 8)
              (i <<= 1), (i |= (t >> (s + n)) & 1);
            for (s = 0; s <= 24; s += 8) (i <<= 1), (i |= (e >> (s + n)) & 1);
          }
          for (s = 0; s <= 24; s += 8) (i <<= 1), (i |= (t >> (s + n)) & 1);
          for (n = 1; n <= 3; n++) {
            for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (t >> (s + n)) & 1);
            for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (e >> (s + n)) & 1);
          }
          for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (e >> (s + n)) & 1);
          (r[a + 0] = i >>> 0), (r[a + 1] = o >>> 0);
        }),
        (t.r28shl = function (e, t) {
          return ((e << t) & 268435455) | (e >>> (28 - t));
        });
      var r = [
        14,
        11,
        17,
        4,
        27,
        23,
        25,
        0,
        13,
        22,
        7,
        18,
        5,
        9,
        16,
        24,
        2,
        20,
        12,
        21,
        1,
        8,
        15,
        26,
        15,
        4,
        25,
        19,
        9,
        1,
        26,
        16,
        5,
        11,
        23,
        8,
        12,
        7,
        17,
        0,
        22,
        3,
        10,
        14,
        6,
        20,
        27,
        24
      ];
      (t.pc2 = function (e, t, a, i) {
        for (var o = 0, n = 0, s = r.length >>> 1, c = 0; c < s; c++)
          (o <<= 1), (o |= (e >>> r[c]) & 1);
        for (c = s; c < r.length; c++) (n <<= 1), (n |= (t >>> r[c]) & 1);
        (a[i + 0] = o >>> 0), (a[i + 1] = n >>> 0);
      }),
        (t.expand = function (e, t, r) {
          var a = 0,
            i = 0;
          a = ((1 & e) << 5) | (e >>> 27);
          for (var o = 23; o >= 15; o -= 4) (a <<= 6), (a |= (e >>> o) & 63);
          for (o = 11; o >= 3; o -= 4) (i |= (e >>> o) & 63), (i <<= 6);
          (i |= ((31 & e) << 1) | (e >>> 31)),
            (t[r + 0] = a >>> 0),
            (t[r + 1] = i >>> 0);
        });
      var a = [
        14,
        0,
        4,
        15,
        13,
        7,
        1,
        4,
        2,
        14,
        15,
        2,
        11,
        13,
        8,
        1,
        3,
        10,
        10,
        6,
        6,
        12,
        12,
        11,
        5,
        9,
        9,
        5,
        0,
        3,
        7,
        8,
        4,
        15,
        1,
        12,
        14,
        8,
        8,
        2,
        13,
        4,
        6,
        9,
        2,
        1,
        11,
        7,
        15,
        5,
        12,
        11,
        9,
        3,
        7,
        14,
        3,
        10,
        10,
        0,
        5,
        6,
        0,
        13,
        15,
        3,
        1,
        13,
        8,
        4,
        14,
        7,
        6,
        15,
        11,
        2,
        3,
        8,
        4,
        14,
        9,
        12,
        7,
        0,
        2,
        1,
        13,
        10,
        12,
        6,
        0,
        9,
        5,
        11,
        10,
        5,
        0,
        13,
        14,
        8,
        7,
        10,
        11,
        1,
        10,
        3,
        4,
        15,
        13,
        4,
        1,
        2,
        5,
        11,
        8,
        6,
        12,
        7,
        6,
        12,
        9,
        0,
        3,
        5,
        2,
        14,
        15,
        9,
        10,
        13,
        0,
        7,
        9,
        0,
        14,
        9,
        6,
        3,
        3,
        4,
        15,
        6,
        5,
        10,
        1,
        2,
        13,
        8,
        12,
        5,
        7,
        14,
        11,
        12,
        4,
        11,
        2,
        15,
        8,
        1,
        13,
        1,
        6,
        10,
        4,
        13,
        9,
        0,
        8,
        6,
        15,
        9,
        3,
        8,
        0,
        7,
        11,
        4,
        1,
        15,
        2,
        14,
        12,
        3,
        5,
        11,
        10,
        5,
        14,
        2,
        7,
        12,
        7,
        13,
        13,
        8,
        14,
        11,
        3,
        5,
        0,
        6,
        6,
        15,
        9,
        0,
        10,
        3,
        1,
        4,
        2,
        7,
        8,
        2,
        5,
        12,
        11,
        1,
        12,
        10,
        4,
        14,
        15,
        9,
        10,
        3,
        6,
        15,
        9,
        0,
        0,
        6,
        12,
        10,
        11,
        1,
        7,
        13,
        13,
        8,
        15,
        9,
        1,
        4,
        3,
        5,
        14,
        11,
        5,
        12,
        2,
        7,
        8,
        2,
        4,
        14,
        2,
        14,
        12,
        11,
        4,
        2,
        1,
        12,
        7,
        4,
        10,
        7,
        11,
        13,
        6,
        1,
        8,
        5,
        5,
        0,
        3,
        15,
        15,
        10,
        13,
        3,
        0,
        9,
        14,
        8,
        9,
        6,
        4,
        11,
        2,
        8,
        1,
        12,
        11,
        7,
        10,
        1,
        13,
        14,
        7,
        2,
        8,
        13,
        15,
        6,
        9,
        15,
        12,
        0,
        5,
        9,
        6,
        10,
        3,
        4,
        0,
        5,
        14,
        3,
        12,
        10,
        1,
        15,
        10,
        4,
        15,
        2,
        9,
        7,
        2,
        12,
        6,
        9,
        8,
        5,
        0,
        6,
        13,
        1,
        3,
        13,
        4,
        14,
        14,
        0,
        7,
        11,
        5,
        3,
        11,
        8,
        9,
        4,
        14,
        3,
        15,
        2,
        5,
        12,
        2,
        9,
        8,
        5,
        12,
        15,
        3,
        10,
        7,
        11,
        0,
        14,
        4,
        1,
        10,
        7,
        1,
        6,
        13,
        0,
        11,
        8,
        6,
        13,
        4,
        13,
        11,
        0,
        2,
        11,
        14,
        7,
        15,
        4,
        0,
        9,
        8,
        1,
        13,
        10,
        3,
        14,
        12,
        3,
        9,
        5,
        7,
        12,
        5,
        2,
        10,
        15,
        6,
        8,
        1,
        6,
        1,
        6,
        4,
        11,
        11,
        13,
        13,
        8,
        12,
        1,
        3,
        4,
        7,
        10,
        14,
        7,
        10,
        9,
        15,
        5,
        6,
        0,
        8,
        15,
        0,
        14,
        5,
        2,
        9,
        3,
        2,
        12,
        13,
        1,
        2,
        15,
        8,
        13,
        4,
        8,
        6,
        10,
        15,
        3,
        11,
        7,
        1,
        4,
        10,
        12,
        9,
        5,
        3,
        6,
        14,
        11,
        5,
        0,
        0,
        14,
        12,
        9,
        7,
        2,
        7,
        2,
        11,
        1,
        4,
        14,
        1,
        7,
        9,
        4,
        12,
        10,
        14,
        8,
        2,
        13,
        0,
        15,
        6,
        12,
        10,
        9,
        13,
        0,
        15,
        3,
        3,
        5,
        5,
        6,
        8,
        11
      ];
      t.substitute = function (e, t) {
        for (var r = 0, i = 0; i < 4; i++)
          (r <<= 4), (r |= a[64 * i + ((e >>> (18 - 6 * i)) & 63)]);
        for (i = 0; i < 4; i++)
          (r <<= 4), (r |= a[256 + 64 * i + ((t >>> (18 - 6 * i)) & 63)]);
        return r >>> 0;
      };
      var i = [
        16,
        25,
        12,
        11,
        3,
        20,
        4,
        15,
        31,
        17,
        9,
        6,
        27,
        14,
        1,
        22,
        30,
        24,
        8,
        18,
        0,
        5,
        29,
        23,
        13,
        19,
        2,
        26,
        10,
        21,
        28,
        7
      ];
      (t.permute = function (e) {
        for (var t = 0, r = 0; r < i.length; r++)
          (t <<= 1), (t |= (e >>> i[r]) & 1);
        return t >>> 0;
      }),
        (t.padSplit = function (e, t, r) {
          for (var a = e.toString(2); a.length < t; ) a = '0' + a;
          for (var i = [], o = 0; o < t; o += r) i.push(a.slice(o, o + r));
          return i.join(' ');
        });
    },
    67602: (e, t, r) => {
      var a = r(48834).Buffer,
        i = r(32808),
        o = r(94509),
        n = r(30767),
        s = { binary: !0, hex: !0, base64: !0 };
      (t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function (
        e
      ) {
        var t = new a(o[e].prime, 'hex'),
          r = new a(o[e].gen, 'hex');
        return new n(t, r);
      }),
        (t.createDiffieHellman = t.DiffieHellman = function e(t, r, o, c) {
          return a.isBuffer(r) || void 0 === s[r]
            ? e(t, 'binary', r, o)
            : ((r = r || 'binary'),
              (c = c || 'binary'),
              (o = o || new a([2])),
              a.isBuffer(o) || (o = new a(o, c)),
              'number' == typeof t
                ? new n(i(t, o), o, !0)
                : (a.isBuffer(t) || (t = new a(t, r)), new n(t, o, !0)));
        });
    },
    30767: (e, t, r) => {
      var a = r(48834).Buffer,
        i = r(62197),
        o = new (r(46676))(),
        n = new i(24),
        s = new i(11),
        c = new i(10),
        f = new i(3),
        d = new i(7),
        u = r(32808),
        h = r(95003);
      function l(e, t) {
        return (
          (t = t || 'utf8'),
          a.isBuffer(e) || (e = new a(e, t)),
          (this._pub = new i(e)),
          this
        );
      }
      function p(e, t) {
        return (
          (t = t || 'utf8'),
          a.isBuffer(e) || (e = new a(e, t)),
          (this._priv = new i(e)),
          this
        );
      }
      e.exports = m;
      var b = {};
      function m(e, t, r) {
        this.setGenerator(t),
          (this.__prime = new i(e)),
          (this._prime = i.mont(this.__prime)),
          (this._primeLen = e.length),
          (this._pub = void 0),
          (this._priv = void 0),
          (this._primeCode = void 0),
          r
            ? ((this.setPublicKey = l), (this.setPrivateKey = p))
            : (this._primeCode = 8);
      }
      function v(e, t) {
        var r = new a(e.toArray());
        return t ? r.toString(t) : r;
      }
      Object.defineProperty(m.prototype, 'verifyError', {
        enumerable: !0,
        get: function () {
          return (
            'number' != typeof this._primeCode &&
              (this._primeCode = (function (e, t) {
                var r = t.toString('hex'),
                  a = [r, e.toString(16)].join('_');
                if (a in b) return b[a];
                var i,
                  h = 0;
                if (
                  e.isEven() ||
                  !u.simpleSieve ||
                  !u.fermatTest(e) ||
                  !o.test(e)
                )
                  return (
                    (h += 1),
                    (h += '02' === r || '05' === r ? 8 : 4),
                    (b[a] = h),
                    h
                  );
                switch ((o.test(e.shrn(1)) || (h += 2), r)) {
                  case '02':
                    e.mod(n).cmp(s) && (h += 8);
                    break;
                  case '05':
                    (i = e.mod(c)).cmp(f) && i.cmp(d) && (h += 8);
                    break;
                  default:
                    h += 4;
                }
                return (b[a] = h), h;
              })(this.__prime, this.__gen)),
            this._primeCode
          );
        }
      }),
        (m.prototype.generateKeys = function () {
          return (
            this._priv || (this._priv = new i(h(this._primeLen))),
            (this._pub = this._gen
              .toRed(this._prime)
              .redPow(this._priv)
              .fromRed()),
            this.getPublicKey()
          );
        }),
        (m.prototype.computeSecret = function (e) {
          var t = (e = (e = new i(e)).toRed(this._prime))
              .redPow(this._priv)
              .fromRed(),
            r = new a(t.toArray()),
            o = this.getPrime();
          if (r.length < o.length) {
            var n = new a(o.length - r.length);
            n.fill(0), (r = a.concat([n, r]));
          }
          return r;
        }),
        (m.prototype.getPublicKey = function (e) {
          return v(this._pub, e);
        }),
        (m.prototype.getPrivateKey = function (e) {
          return v(this._priv, e);
        }),
        (m.prototype.getPrime = function (e) {
          return v(this.__prime, e);
        }),
        (m.prototype.getGenerator = function (e) {
          return v(this._gen, e);
        }),
        (m.prototype.setGenerator = function (e, t) {
          return (
            (t = t || 'utf8'),
            a.isBuffer(e) || (e = new a(e, t)),
            (this.__gen = e),
            (this._gen = new i(e)),
            this
          );
        });
    },
    32808: (e, t, r) => {
      var a = r(95003);
      (e.exports = g), (g.simpleSieve = m), (g.fermatTest = v);
      var i = r(62197),
        o = new i(24),
        n = new (r(46676))(),
        s = new i(1),
        c = new i(2),
        f = new i(5),
        d = (new i(16), new i(8), new i(10)),
        u = new i(3),
        h = (new i(7), new i(11)),
        l = new i(4),
        p = (new i(12), null);
      function b() {
        if (null !== p) return p;
        var e = [];
        e[0] = 2;
        for (var t = 1, r = 3; r < 1048576; r += 2) {
          for (
            var a = Math.ceil(Math.sqrt(r)), i = 0;
            i < t && e[i] <= a && r % e[i] != 0;
            i++
          );
          (t !== i && e[i] <= a) || (e[t++] = r);
        }
        return (p = e), e;
      }
      function m(e) {
        for (var t = b(), r = 0; r < t.length; r++)
          if (0 === e.modn(t[r])) return 0 === e.cmpn(t[r]);
        return !0;
      }
      function v(e) {
        var t = i.mont(e);
        return 0 === c.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1);
      }
      function g(e, t) {
        if (e < 16) return new i(2 === t || 5 === t ? [140, 123] : [140, 39]);
        var r, p;
        for (t = new i(t); ; ) {
          for (r = new i(a(Math.ceil(e / 8))); r.bitLength() > e; ) r.ishrn(1);
          if ((r.isEven() && r.iadd(s), r.testn(1) || r.iadd(c), t.cmp(c))) {
            if (!t.cmp(f)) for (; r.mod(d).cmp(u); ) r.iadd(l);
          } else for (; r.mod(o).cmp(h); ) r.iadd(l);
          if (
            m((p = r.shrn(1))) &&
            m(r) &&
            v(p) &&
            v(r) &&
            n.test(p) &&
            n.test(r)
          )
            return r;
        }
      }
    },
    94509: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}'
      );
    },
    87554: (e, t, r) => {
      'use strict';
      var a = t;
      (a.version = r(13182).i8),
        (a.utils = r(18288)),
        (a.rand = r(82745)),
        (a.curve = r(48610)),
        (a.curves = r(41479)),
        (a.ec = r(38596)),
        (a.eddsa = r(39208));
    },
    48919: (e, t, r) => {
      'use strict';
      var a = r(62197),
        i = r(18288),
        o = i.getNAF,
        n = i.getJSF,
        s = i.assert;
      function c(e, t) {
        (this.type = e),
          (this.p = new a(t.p, 16)),
          (this.red = t.prime ? a.red(t.prime) : a.mont(this.p)),
          (this.zero = new a(0).toRed(this.red)),
          (this.one = new a(1).toRed(this.red)),
          (this.two = new a(2).toRed(this.red)),
          (this.n = t.n && new a(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function f(e, t) {
        (this.curve = e), (this.type = t), (this.precomputed = null);
      }
      (e.exports = c),
        (c.prototype.point = function () {
          throw new Error('Not implemented');
        }),
        (c.prototype.validate = function () {
          throw new Error('Not implemented');
        }),
        (c.prototype._fixedNafMul = function (e, t) {
          s(e.precomputed);
          var r = e._getDoubles(),
            a = o(t, 1, this._bitLength),
            i = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
          i /= 3;
          var n,
            c,
            f = [];
          for (n = 0; n < a.length; n += r.step) {
            c = 0;
            for (var d = n + r.step - 1; d >= n; d--) c = (c << 1) + a[d];
            f.push(c);
          }
          for (
            var u = this.jpoint(null, null, null),
              h = this.jpoint(null, null, null),
              l = i;
            l > 0;
            l--
          ) {
            for (n = 0; n < f.length; n++)
              (c = f[n]) === l
                ? (h = h.mixedAdd(r.points[n]))
                : c === -l && (h = h.mixedAdd(r.points[n].neg()));
            u = u.add(h);
          }
          return u.toP();
        }),
        (c.prototype._wnafMul = function (e, t) {
          var r = 4,
            a = e._getNAFPoints(r);
          r = a.wnd;
          for (
            var i = a.points,
              n = o(t, r, this._bitLength),
              c = this.jpoint(null, null, null),
              f = n.length - 1;
            f >= 0;
            f--
          ) {
            for (var d = 0; f >= 0 && 0 === n[f]; f--) d++;
            if ((f >= 0 && d++, (c = c.dblp(d)), f < 0)) break;
            var u = n[f];
            s(0 !== u),
              (c =
                'affine' === e.type
                  ? u > 0
                    ? c.mixedAdd(i[(u - 1) >> 1])
                    : c.mixedAdd(i[(-u - 1) >> 1].neg())
                  : u > 0
                  ? c.add(i[(u - 1) >> 1])
                  : c.add(i[(-u - 1) >> 1].neg()));
          }
          return 'affine' === e.type ? c.toP() : c;
        }),
        (c.prototype._wnafMulAdd = function (e, t, r, a, i) {
          var s,
            c,
            f,
            d = this._wnafT1,
            u = this._wnafT2,
            h = this._wnafT3,
            l = 0;
          for (s = 0; s < a; s++) {
            var p = (f = t[s])._getNAFPoints(e);
            (d[s] = p.wnd), (u[s] = p.points);
          }
          for (s = a - 1; s >= 1; s -= 2) {
            var b = s - 1,
              m = s;
            if (1 === d[b] && 1 === d[m]) {
              var v = [t[b], null, null, t[m]];
              0 === t[b].y.cmp(t[m].y)
                ? ((v[1] = t[b].add(t[m])),
                  (v[2] = t[b].toJ().mixedAdd(t[m].neg())))
                : 0 === t[b].y.cmp(t[m].y.redNeg())
                ? ((v[1] = t[b].toJ().mixedAdd(t[m])),
                  (v[2] = t[b].add(t[m].neg())))
                : ((v[1] = t[b].toJ().mixedAdd(t[m])),
                  (v[2] = t[b].toJ().mixedAdd(t[m].neg())));
              var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                y = n(r[b], r[m]);
              for (
                l = Math.max(y[0].length, l),
                  h[b] = new Array(l),
                  h[m] = new Array(l),
                  c = 0;
                c < l;
                c++
              ) {
                var w = 0 | y[0][c],
                  k = 0 | y[1][c];
                (h[b][c] = g[3 * (w + 1) + (k + 1)]), (h[m][c] = 0), (u[b] = v);
              }
            } else
              (h[b] = o(r[b], d[b], this._bitLength)),
                (h[m] = o(r[m], d[m], this._bitLength)),
                (l = Math.max(h[b].length, l)),
                (l = Math.max(h[m].length, l));
          }
          var M = this.jpoint(null, null, null),
            _ = this._wnafT4;
          for (s = l; s >= 0; s--) {
            for (var z = 0; s >= 0; ) {
              var x = !0;
              for (c = 0; c < a; c++)
                (_[c] = 0 | h[c][s]), 0 !== _[c] && (x = !1);
              if (!x) break;
              z++, s--;
            }
            if ((s >= 0 && z++, (M = M.dblp(z)), s < 0)) break;
            for (c = 0; c < a; c++) {
              var A = _[c];
              0 !== A &&
                (A > 0
                  ? (f = u[c][(A - 1) >> 1])
                  : A < 0 && (f = u[c][(-A - 1) >> 1].neg()),
                (M = 'affine' === f.type ? M.mixedAdd(f) : M.add(f)));
            }
          }
          for (s = 0; s < a; s++) u[s] = null;
          return i ? M : M.toP();
        }),
        (c.BasePoint = f),
        (f.prototype.eq = function () {
          throw new Error('Not implemented');
        }),
        (f.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (c.prototype.decodePoint = function (e, t) {
          e = i.toArray(e, t);
          var r = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return (
              6 === e[0]
                ? s(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && s(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw new Error('Unknown point format');
        }),
        (f.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (f.prototype._encode = function (e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray('be', t);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray('be', t));
        }),
        (f.prototype.encode = function (e, t) {
          return i.encode(this._encode(t), e);
        }),
        (f.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var t = { doubles: null, naf: null, beta: null };
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          );
        }),
        (f.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return (
            !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
          );
        }),
        (f.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], a = this, i = 0; i < t; i += e) {
            for (var o = 0; o < e; o++) a = a.dbl();
            r.push(a);
          }
          return { step: e, points: r };
        }),
        (f.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var t = [this],
              r = (1 << e) - 1,
              a = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            t[i] = t[i - 1].add(a);
          return { wnd: e, points: t };
        }),
        (f.prototype._getBeta = function () {
          return null;
        }),
        (f.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        });
    },
    37105: (e, t, r) => {
      'use strict';
      var a = r(18288),
        i = r(62197),
        o = r(91285),
        n = r(48919),
        s = a.assert;
      function c(e) {
        (this.twisted = 1 != (0 | e.a)),
          (this.mOneA = this.twisted && -1 == (0 | e.a)),
          (this.extended = this.mOneA),
          n.call(this, 'edwards', e),
          (this.a = new i(e.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new i(e.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new i(e.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 == (0 | e.c));
      }
      function f(e, t, r, a, o) {
        n.BasePoint.call(this, e, 'projective'),
          null === t && null === r && null === a
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              (this.z = a ? new i(a, 16) : this.curve.one),
              (this.t = o && new i(o, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }
      o(c, n),
        (e.exports = c),
        (c.prototype._mulA = function (e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e);
        }),
        (c.prototype._mulC = function (e) {
          return this.oneC ? e : this.c.redMul(e);
        }),
        (c.prototype.jpoint = function (e, t, r, a) {
          return this.point(e, t, r, a);
        }),
        (c.prototype.pointFromX = function (e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
            a = this.c2.redSub(this.a.redMul(r)),
            o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            n = a.redMul(o.redInvm()),
            s = n.redSqrt();
          if (0 !== s.redSqr().redSub(n).cmp(this.zero))
            throw new Error('invalid point');
          var c = s.fromRed().isOdd();
          return ((t && !c) || (!t && c)) && (s = s.redNeg()), this.point(e, s);
        }),
        (c.prototype.pointFromY = function (e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
            a = r.redSub(this.c2),
            o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            n = a.redMul(o.redInvm());
          if (0 === n.cmp(this.zero)) {
            if (t) throw new Error('invalid point');
            return this.point(this.zero, e);
          }
          var s = n.redSqrt();
          if (0 !== s.redSqr().redSub(n).cmp(this.zero))
            throw new Error('invalid point');
          return (
            s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e)
          );
        }),
        (c.prototype.validate = function (e) {
          if (e.isInfinity()) return !0;
          e.normalize();
          var t = e.x.redSqr(),
            r = e.y.redSqr(),
            a = t.redMul(this.a).redAdd(r),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
          return 0 === a.cmp(i);
        }),
        o(f, n.BasePoint),
        (c.prototype.pointFromJSON = function (e) {
          return f.fromJSON(this, e);
        }),
        (c.prototype.point = function (e, t, r, a) {
          return new f(this, e, t, r, a);
        }),
        (f.fromJSON = function (e, t) {
          return new f(e, t[0], t[1], t[2]);
        }),
        (f.prototype.inspect = function () {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>';
        }),
        (f.prototype.isInfinity = function () {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          );
        }),
        (f.prototype._extDbl = function () {
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr();
          r = r.redIAdd(r);
          var a = this.curve._mulA(e),
            i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            o = a.redAdd(t),
            n = o.redSub(r),
            s = a.redSub(t),
            c = i.redMul(n),
            f = o.redMul(s),
            d = i.redMul(s),
            u = n.redMul(o);
          return this.curve.point(c, f, u, d);
        }),
        (f.prototype._projDbl = function () {
          var e,
            t,
            r,
            a,
            i,
            o,
            n = this.x.redAdd(this.y).redSqr(),
            s = this.x.redSqr(),
            c = this.y.redSqr();
          if (this.curve.twisted) {
            var f = (a = this.curve._mulA(s)).redAdd(c);
            this.zOne
              ? ((e = n.redSub(s).redSub(c).redMul(f.redSub(this.curve.two))),
                (t = f.redMul(a.redSub(c))),
                (r = f.redSqr().redSub(f).redSub(f)))
              : ((i = this.z.redSqr()),
                (o = f.redSub(i).redISub(i)),
                (e = n.redSub(s).redISub(c).redMul(o)),
                (t = f.redMul(a.redSub(c))),
                (r = f.redMul(o)));
          } else
            (a = s.redAdd(c)),
              (i = this.curve._mulC(this.z).redSqr()),
              (o = a.redSub(i).redSub(i)),
              (e = this.curve._mulC(n.redISub(a)).redMul(o)),
              (t = this.curve._mulC(a).redMul(s.redISub(c))),
              (r = a.redMul(o));
          return this.curve.point(e, t, r);
        }),
        (f.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl();
        }),
        (f.prototype._extAdd = function (e) {
          var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            a = this.t.redMul(this.curve.dd).redMul(e.t),
            i = this.z.redMul(e.z.redAdd(e.z)),
            o = r.redSub(t),
            n = i.redSub(a),
            s = i.redAdd(a),
            c = r.redAdd(t),
            f = o.redMul(n),
            d = s.redMul(c),
            u = o.redMul(c),
            h = n.redMul(s);
          return this.curve.point(f, d, h, u);
        }),
        (f.prototype._projAdd = function (e) {
          var t,
            r,
            a = this.z.redMul(e.z),
            i = a.redSqr(),
            o = this.x.redMul(e.x),
            n = this.y.redMul(e.y),
            s = this.curve.d.redMul(o).redMul(n),
            c = i.redSub(s),
            f = i.redAdd(s),
            d = this.x
              .redAdd(this.y)
              .redMul(e.x.redAdd(e.y))
              .redISub(o)
              .redISub(n),
            u = a.redMul(c).redMul(d);
          return (
            this.curve.twisted
              ? ((t = a.redMul(f).redMul(n.redSub(this.curve._mulA(o)))),
                (r = c.redMul(f)))
              : ((t = a.redMul(f).redMul(n.redSub(o))),
                (r = this.curve._mulC(c).redMul(f))),
            this.curve.point(u, t, r)
          );
        }),
        (f.prototype.add = function (e) {
          return this.isInfinity()
            ? e
            : e.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(e)
            : this._projAdd(e);
        }),
        (f.prototype.mul = function (e) {
          return this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve._wnafMul(this, e);
        }),
        (f.prototype.mulAdd = function (e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
        }),
        (f.prototype.jmulAdd = function (e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
        }),
        (f.prototype.normalize = function () {
          if (this.zOne) return this;
          var e = this.z.redInvm();
          return (
            (this.x = this.x.redMul(e)),
            (this.y = this.y.redMul(e)),
            this.t && (this.t = this.t.redMul(e)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (f.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          );
        }),
        (f.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        }),
        (f.prototype.getY = function () {
          return this.normalize(), this.y.fromRed();
        }),
        (f.prototype.eq = function (e) {
          return (
            this === e ||
            (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()))
          );
        }),
        (f.prototype.eqXToP = function (e) {
          var t = e.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(t)) return !0;
          for (var r = e.clone(), a = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(a), 0 === this.x.cmp(t))) return !0;
          }
        }),
        (f.prototype.toP = f.prototype.normalize),
        (f.prototype.mixedAdd = f.prototype.add);
    },
    48610: (e, t, r) => {
      'use strict';
      var a = t;
      (a.base = r(48919)),
        (a.short = r(27715)),
        (a.mont = r(95125)),
        (a.edwards = r(37105));
    },
    95125: (e, t, r) => {
      'use strict';
      var a = r(62197),
        i = r(91285),
        o = r(48919),
        n = r(18288);
      function s(e) {
        o.call(this, 'mont', e),
          (this.a = new a(e.a, 16).toRed(this.red)),
          (this.b = new a(e.b, 16).toRed(this.red)),
          (this.i4 = new a(4).toRed(this.red).redInvm()),
          (this.two = new a(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
      }
      function c(e, t, r) {
        o.BasePoint.call(this, e, 'projective'),
          null === t && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new a(t, 16)),
              (this.z = new a(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }
      i(s, o),
        (e.exports = s),
        (s.prototype.validate = function (e) {
          var t = e.normalize().x,
            r = t.redSqr(),
            a = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
          return 0 === a.redSqrt().redSqr().cmp(a);
        }),
        i(c, o.BasePoint),
        (s.prototype.decodePoint = function (e, t) {
          return this.point(n.toArray(e, t), 1);
        }),
        (s.prototype.point = function (e, t) {
          return new c(this, e, t);
        }),
        (s.prototype.pointFromJSON = function (e) {
          return c.fromJSON(this, e);
        }),
        (c.prototype.precompute = function () {}),
        (c.prototype._encode = function () {
          return this.getX().toArray('be', this.curve.p.byteLength());
        }),
        (c.fromJSON = function (e, t) {
          return new c(e, t[0], t[1] || e.one);
        }),
        (c.prototype.inspect = function () {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' z: ' +
                this.z.fromRed().toString(16, 2) +
                '>';
        }),
        (c.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }),
        (c.prototype.dbl = function () {
          var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            r = e.redSub(t),
            a = e.redMul(t),
            i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
          return this.curve.point(a, i);
        }),
        (c.prototype.add = function () {
          throw new Error('Not supported on Montgomery curve');
        }),
        (c.prototype.diffAdd = function (e, t) {
          var r = this.x.redAdd(this.z),
            a = this.x.redSub(this.z),
            i = e.x.redAdd(e.z),
            o = e.x.redSub(e.z).redMul(r),
            n = i.redMul(a),
            s = t.z.redMul(o.redAdd(n).redSqr()),
            c = t.x.redMul(o.redISub(n).redSqr());
          return this.curve.point(s, c);
        }),
        (c.prototype.mul = function (e) {
          for (
            var t = e.clone(),
              r = this,
              a = this.curve.point(null, null),
              i = [];
            0 !== t.cmpn(0);
            t.iushrn(1)
          )
            i.push(t.andln(1));
          for (var o = i.length - 1; o >= 0; o--)
            0 === i[o]
              ? ((r = r.diffAdd(a, this)), (a = a.dbl()))
              : ((a = r.diffAdd(a, this)), (r = r.dbl()));
          return a;
        }),
        (c.prototype.mulAdd = function () {
          throw new Error('Not supported on Montgomery curve');
        }),
        (c.prototype.jumlAdd = function () {
          throw new Error('Not supported on Montgomery curve');
        }),
        (c.prototype.eq = function (e) {
          return 0 === this.getX().cmp(e.getX());
        }),
        (c.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (c.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        });
    },
    27715: (e, t, r) => {
      'use strict';
      var a = r(18288),
        i = r(62197),
        o = r(91285),
        n = r(48919),
        s = a.assert;
      function c(e) {
        n.call(this, 'short', e),
          (this.a = new i(e.a, 16).toRed(this.red)),
          (this.b = new i(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      function f(e, t, r, a) {
        n.BasePoint.call(this, e, 'affine'),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              a &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function d(e, t, r, a) {
        n.BasePoint.call(this, e, 'jacobian'),
          null === t && null === r && null === a
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new i(0)))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              (this.z = new i(a, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      o(c, n),
        (e.exports = c),
        (c.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r;
            if (e.beta) t = new i(e.beta, 16).toRed(this.red);
            else {
              var a = this._getEndoRoots(this.p);
              t = (t = a[0].cmp(a[1]) < 0 ? a[0] : a[1]).toRed(this.red);
            }
            if (e.lambda) r = new i(e.lambda, 16);
            else {
              var o = this._getEndoRoots(this.n);
              0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t))
                ? (r = o[0])
                : ((r = o[1]),
                  s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return {
              beta: t,
              lambda: r,
              basis: e.basis
                ? e.basis.map(function (e) {
                    return { a: new i(e.a, 16), b: new i(e.b, 16) };
                  })
                : this._getEndoBasis(r)
            };
          }
        }),
        (c.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : i.mont(e),
            r = new i(2).toRed(t).redInvm(),
            a = r.redNeg(),
            o = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
          return [a.redAdd(o).fromRed(), a.redSub(o).fromRed()];
        }),
        (c.prototype._getEndoBasis = function (e) {
          for (
            var t,
              r,
              a,
              o,
              n,
              s,
              c,
              f,
              d,
              u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              h = e,
              l = this.n.clone(),
              p = new i(1),
              b = new i(0),
              m = new i(0),
              v = new i(1),
              g = 0;
            0 !== h.cmpn(0);

          ) {
            var y = l.div(h);
            (f = l.sub(y.mul(h))), (d = m.sub(y.mul(p)));
            var w = v.sub(y.mul(b));
            if (!a && f.cmp(u) < 0)
              (t = c.neg()), (r = p), (a = f.neg()), (o = d);
            else if (a && 2 == ++g) break;
            (c = f), (l = h), (h = f), (m = p), (p = d), (v = b), (b = w);
          }
          (n = f.neg()), (s = d);
          var k = a.sqr().add(o.sqr());
          return (
            n.sqr().add(s.sqr()).cmp(k) >= 0 && ((n = t), (s = r)),
            a.negative && ((a = a.neg()), (o = o.neg())),
            n.negative && ((n = n.neg()), (s = s.neg())),
            [
              { a, b: o },
              { a: n, b: s }
            ]
          );
        }),
        (c.prototype._endoSplit = function (e) {
          var t = this.endo.basis,
            r = t[0],
            a = t[1],
            i = a.b.mul(e).divRound(this.n),
            o = r.b.neg().mul(e).divRound(this.n),
            n = i.mul(r.a),
            s = o.mul(a.a),
            c = i.mul(r.b),
            f = o.mul(a.b);
          return { k1: e.sub(n).sub(s), k2: c.add(f).neg() };
        }),
        (c.prototype.pointFromX = function (e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            a = r.redSqrt();
          if (0 !== a.redSqr().redSub(r).cmp(this.zero))
            throw new Error('invalid point');
          var o = a.fromRed().isOdd();
          return ((t && !o) || (!t && o)) && (a = a.redNeg()), this.point(e, a);
        }),
        (c.prototype.validate = function (e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            a = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(a).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (c.prototype._endoWnafMulAdd = function (e, t, r) {
          for (
            var a = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < e.length;
            o++
          ) {
            var n = this._endoSplit(t[o]),
              s = e[o],
              c = s._getBeta();
            n.k1.negative && (n.k1.ineg(), (s = s.neg(!0))),
              n.k2.negative && (n.k2.ineg(), (c = c.neg(!0))),
              (a[2 * o] = s),
              (a[2 * o + 1] = c),
              (i[2 * o] = n.k1),
              (i[2 * o + 1] = n.k2);
          }
          for (
            var f = this._wnafMulAdd(1, a, i, 2 * o, r), d = 0;
            d < 2 * o;
            d++
          )
            (a[d] = null), (i[d] = null);
          return f;
        }),
        o(f, n.BasePoint),
        (c.prototype.point = function (e, t, r) {
          return new f(this, e, t, r);
        }),
        (c.prototype.pointFromJSON = function (e, t) {
          return f.fromJSON(this, e, t);
        }),
        (f.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var r = this.curve,
                a = function (e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y);
                };
              (e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(a) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(a)
                  }
                });
            }
            return t;
          }
        }),
        (f.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                  }
                }
              ]
            : [this.x, this.y];
        }),
        (f.fromJSON = function (e, t, r) {
          'string' == typeof t && (t = JSON.parse(t));
          var a = e.point(t[0], t[1], r);
          if (!t[2]) return a;
          function i(t) {
            return e.point(t[0], t[1], r);
          }
          var o = t[2];
          return (
            (a.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [a].concat(o.doubles.points.map(i))
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [a].concat(o.naf.points.map(i))
              }
            }),
            a
          );
        }),
        (f.prototype.inspect = function () {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                '>';
        }),
        (f.prototype.isInfinity = function () {
          return this.inf;
        }),
        (f.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e)) return this.curve.point(null, null);
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t.redSqr().redISub(this.x).redISub(e.x),
            a = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, a);
        }),
        (f.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
            r = this.x.redSqr(),
            a = e.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(a),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            n = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, n);
        }),
        (f.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (f.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (f.prototype.mul = function (e) {
          return (
            (e = new i(e, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [e])
              : this.curve._wnafMul(this, e)
          );
        }),
        (f.prototype.mulAdd = function (e, t, r) {
          var a = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(a, i)
            : this.curve._wnafMulAdd(1, a, i, 2);
        }),
        (f.prototype.jmulAdd = function (e, t, r) {
          var a = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(a, i, !0)
            : this.curve._wnafMulAdd(1, a, i, 2, !0);
        }),
        (f.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (f.prototype.neg = function (e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var r = this.precomputed,
              a = function (e) {
                return e.neg();
              };
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(a) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(a)
              }
            };
          }
          return t;
        }),
        (f.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        o(d, n.BasePoint),
        (c.prototype.jpoint = function (e, t, r) {
          return new d(this, e, t, r);
        }),
        (d.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            a = this.y.redMul(t).redMul(e);
          return this.curve.point(r, a);
        }),
        (d.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (d.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            a = this.x.redMul(t),
            i = e.x.redMul(r),
            o = this.y.redMul(t.redMul(e.z)),
            n = e.y.redMul(r.redMul(this.z)),
            s = a.redSub(i),
            c = o.redSub(n);
          if (0 === s.cmpn(0))
            return 0 !== c.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var f = s.redSqr(),
            d = f.redMul(s),
            u = a.redMul(f),
            h = c.redSqr().redIAdd(d).redISub(u).redISub(u),
            l = c.redMul(u.redISub(h)).redISub(o.redMul(d)),
            p = this.z.redMul(e.z).redMul(s);
          return this.curve.jpoint(h, l, p);
        }),
        (d.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
            r = this.x,
            a = e.x.redMul(t),
            i = this.y,
            o = e.y.redMul(t).redMul(this.z),
            n = r.redSub(a),
            s = i.redSub(o);
          if (0 === n.cmpn(0))
            return 0 !== s.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var c = n.redSqr(),
            f = c.redMul(n),
            d = r.redMul(c),
            u = s.redSqr().redIAdd(f).redISub(d).redISub(d),
            h = s.redMul(d.redISub(u)).redISub(i.redMul(f)),
            l = this.z.redMul(n);
          return this.curve.jpoint(u, h, l);
        }),
        (d.prototype.dblp = function (e) {
          if (0 === e) return this;
          if (this.isInfinity()) return this;
          if (!e) return this.dbl();
          var t;
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for (t = 0; t < e; t++) r = r.dbl();
            return r;
          }
          var a = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            n = this.y,
            s = this.z,
            c = s.redSqr().redSqr(),
            f = n.redAdd(n);
          for (t = 0; t < e; t++) {
            var d = o.redSqr(),
              u = f.redSqr(),
              h = u.redSqr(),
              l = d.redAdd(d).redIAdd(d).redIAdd(a.redMul(c)),
              p = o.redMul(u),
              b = l.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(b),
              v = l.redMul(m);
            v = v.redIAdd(v).redISub(h);
            var g = f.redMul(s);
            t + 1 < e && (c = c.redMul(h)), (o = b), (s = g), (f = v);
          }
          return this.curve.jpoint(o, f.redMul(i), s);
        }),
        (d.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (d.prototype._zeroDbl = function () {
          var e, t, r;
          if (this.zOne) {
            var a = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              n = this.x.redAdd(i).redSqr().redISub(a).redISub(o);
            n = n.redIAdd(n);
            var s = a.redAdd(a).redIAdd(a),
              c = s.redSqr().redISub(n).redISub(n),
              f = o.redIAdd(o);
            (f = (f = f.redIAdd(f)).redIAdd(f)),
              (e = c),
              (t = s.redMul(n.redISub(c)).redISub(f)),
              (r = this.y.redAdd(this.y));
          } else {
            var d = this.x.redSqr(),
              u = this.y.redSqr(),
              h = u.redSqr(),
              l = this.x.redAdd(u).redSqr().redISub(d).redISub(h);
            l = l.redIAdd(l);
            var p = d.redAdd(d).redIAdd(d),
              b = p.redSqr(),
              m = h.redIAdd(h);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = b.redISub(l).redISub(l)),
              (t = p.redMul(l.redISub(e)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (d.prototype._threeDbl = function () {
          var e, t, r;
          if (this.zOne) {
            var a = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              n = this.x.redAdd(i).redSqr().redISub(a).redISub(o);
            n = n.redIAdd(n);
            var s = a.redAdd(a).redIAdd(a).redIAdd(this.curve.a),
              c = s.redSqr().redISub(n).redISub(n);
            e = c;
            var f = o.redIAdd(o);
            (f = (f = f.redIAdd(f)).redIAdd(f)),
              (t = s.redMul(n.redISub(c)).redISub(f)),
              (r = this.y.redAdd(this.y));
          } else {
            var d = this.z.redSqr(),
              u = this.y.redSqr(),
              h = this.x.redMul(u),
              l = this.x.redSub(d).redMul(this.x.redAdd(d));
            l = l.redAdd(l).redIAdd(l);
            var p = h.redIAdd(h),
              b = (p = p.redIAdd(p)).redAdd(p);
            (e = l.redSqr().redISub(b)),
              (r = this.y.redAdd(this.z).redSqr().redISub(u).redISub(d));
            var m = u.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (t = l.redMul(p.redISub(e)).redISub(m));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (d.prototype._dbl = function () {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            a = this.z,
            i = a.redSqr().redSqr(),
            o = t.redSqr(),
            n = r.redSqr(),
            s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
            c = t.redAdd(t),
            f = (c = c.redIAdd(c)).redMul(n),
            d = s.redSqr().redISub(f.redAdd(f)),
            u = f.redISub(d),
            h = n.redSqr();
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var l = s.redMul(u).redISub(h),
            p = r.redAdd(r).redMul(a);
          return this.curve.jpoint(d, l, p);
        }),
        (d.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            a = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            o = i.redSqr(),
            n = this.x.redAdd(t).redSqr().redISub(e).redISub(a),
            s = (n = (n = (n = n.redIAdd(n)).redAdd(n).redIAdd(n)).redISub(
              o
            )).redSqr(),
            c = a.redIAdd(a);
          c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
          var f = i.redIAdd(n).redSqr().redISub(o).redISub(s).redISub(c),
            d = t.redMul(f);
          d = (d = d.redIAdd(d)).redIAdd(d);
          var u = this.x.redMul(s).redISub(d);
          u = (u = u.redIAdd(u)).redIAdd(u);
          var h = this.y.redMul(f.redMul(c.redISub(f)).redISub(n.redMul(s)));
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var l = this.z.redAdd(n).redSqr().redISub(r).redISub(s);
          return this.curve.jpoint(u, h, l);
        }),
        (d.prototype.mul = function (e, t) {
          return (e = new i(e, t)), this.curve._wnafMul(this, e);
        }),
        (d.prototype.eq = function (e) {
          if ('affine' === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
          var a = t.redMul(this.z),
            i = r.redMul(e.z);
          return 0 === this.y.redMul(i).redISub(e.y.redMul(a)).cmpn(0);
        }),
        (d.prototype.eqXToP = function (e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;
          for (var a = e.clone(), i = this.curve.redN.redMul(t); ; ) {
            if ((a.iadd(this.curve.n), a.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (d.prototype.inspect = function () {
          return this.isInfinity()
            ? '<EC JPoint Infinity>'
            : '<EC JPoint x: ' +
                this.x.toString(16, 2) +
                ' y: ' +
                this.y.toString(16, 2) +
                ' z: ' +
                this.z.toString(16, 2) +
                '>';
        }),
        (d.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
    },
    41479: (e, t, r) => {
      'use strict';
      var a,
        i = t,
        o = r(34485),
        n = r(48610),
        s = r(18288).assert;
      function c(e) {
        'short' === e.type
          ? (this.curve = new n.short(e))
          : 'edwards' === e.type
          ? (this.curve = new n.edwards(e))
          : (this.curve = new n.mont(e)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = e.hash),
          s(this.g.validate(), 'Invalid curve'),
          s(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
      }
      function f(e, t) {
        Object.defineProperty(i, e, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var r = new c(t);
            return (
              Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !0,
                value: r
              }),
              r
            );
          }
        });
      }
      (i.PresetCurve = c),
        f('p192', {
          type: 'short',
          prime: 'p192',
          p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
          b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
          n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
          hash: o.sha256,
          gRed: !1,
          g: [
            '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
            '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811'
          ]
        }),
        f('p224', {
          type: 'short',
          prime: 'p224',
          p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
          a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
          b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
          n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
          hash: o.sha256,
          gRed: !1,
          g: [
            'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
            'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34'
          ]
        }),
        f('p256', {
          type: 'short',
          prime: null,
          p:
            'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
          a:
            'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
          b:
            '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
          n:
            'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
          hash: o.sha256,
          gRed: !1,
          g: [
            '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
            '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5'
          ]
        }),
        f('p384', {
          type: 'short',
          prime: null,
          p:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
          a:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
          b:
            'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
          n:
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
          hash: o.sha384,
          gRed: !1,
          g: [
            'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
            '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f'
          ]
        }),
        f('p521', {
          type: 'short',
          prime: null,
          p:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
          a:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
          b:
            '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
          n:
            '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
          hash: o.sha512,
          gRed: !1,
          g: [
            '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
            '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650'
          ]
        }),
        f('curve25519', {
          type: 'mont',
          prime: 'p25519',
          p:
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '76d06',
          b: '1',
          n:
            '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: o.sha256,
          gRed: !1,
          g: ['9']
        }),
        f('ed25519', {
          type: 'edwards',
          prime: 'p25519',
          p:
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          a: '-1',
          c: '1',
          d:
            '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
          n:
            '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
          hash: o.sha256,
          gRed: !1,
          g: [
            '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
            '6666666666666666666666666666666666666666666666666666666666666658'
          ]
        });
      try {
        a = r(47983);
      } catch (e) {
        a = void 0;
      }
      f('secp256k1', {
        type: 'short',
        prime: 'k256',
        p:
          'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
        a: '0',
        b: '7',
        n:
          'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
        h: '1',
        hash: o.sha256,
        beta:
          '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
        lambda:
          '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
        basis: [
          {
            a: '3086d221a7d46bcde86c90e49284eb15',
            b: '-e4437ed6010e88286f547fa90abfe4c3'
          },
          {
            a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
            b: '3086d221a7d46bcde86c90e49284eb15'
          }
        ],
        gRed: !1,
        g: [
          '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
          '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
          a
        ]
      });
    },
    38596: (e, t, r) => {
      'use strict';
      var a = r(62197),
        i = r(78873),
        o = r(18288),
        n = r(41479),
        s = r(82745),
        c = o.assert,
        f = r(22307),
        d = r(71798);
      function u(e) {
        if (!(this instanceof u)) return new u(e);
        'string' == typeof e &&
          (c(Object.prototype.hasOwnProperty.call(n, e), 'Unknown curve ' + e),
          (e = n[e])),
          e instanceof n.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (e.exports = u),
        (u.prototype.keyPair = function (e) {
          return new f(this, e);
        }),
        (u.prototype.keyFromPrivate = function (e, t) {
          return f.fromPrivate(this, e, t);
        }),
        (u.prototype.keyFromPublic = function (e, t) {
          return f.fromPublic(this, e, t);
        }),
        (u.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var t = new i({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || 'utf8',
                entropy: e.entropy || s(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || 'utf8',
                nonce: this.n.toArray()
              }),
              r = this.n.byteLength(),
              o = this.n.sub(new a(2));
            ;

          ) {
            var n = new a(t.generate(r));
            if (!(n.cmp(o) > 0)) return n.iaddn(1), this.keyFromPrivate(n);
          }
        }),
        (u.prototype._truncateToN = function (e, t) {
          var r = 8 * e.byteLength() - this.n.bitLength();
          return (
            r > 0 && (e = e.ushrn(r)),
            !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          );
        }),
        (u.prototype.sign = function (e, t, r, o) {
          'object' == typeof r && ((o = r), (r = null)),
            o || (o = {}),
            (t = this.keyFromPrivate(t, r)),
            (e = this._truncateToN(new a(e, 16)));
          for (
            var n = this.n.byteLength(),
              s = t.getPrivate().toArray('be', n),
              c = e.toArray('be', n),
              f = new i({
                hash: this.hash,
                entropy: s,
                nonce: c,
                pers: o.pers,
                persEnc: o.persEnc || 'utf8'
              }),
              u = this.n.sub(new a(1)),
              h = 0;
            ;
            h++
          ) {
            var l = o.k ? o.k(h) : new a(f.generate(this.n.byteLength()));
            if (
              !((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(u) >= 0)
            ) {
              var p = this.g.mul(l);
              if (!p.isInfinity()) {
                var b = p.getX(),
                  m = b.umod(this.n);
                if (0 !== m.cmpn(0)) {
                  var v = l.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                  if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                    var g =
                      (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0);
                    return (
                      o.canonical &&
                        v.cmp(this.nh) > 0 &&
                        ((v = this.n.sub(v)), (g ^= 1)),
                      new d({ r: m, s: v, recoveryParam: g })
                    );
                  }
                }
              }
            }
          }
        }),
        (u.prototype.verify = function (e, t, r, i) {
          (e = this._truncateToN(new a(e, 16))), (r = this.keyFromPublic(r, i));
          var o = (t = new d(t, 'hex')).r,
            n = t.s;
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
          if (n.cmpn(1) < 0 || n.cmp(this.n) >= 0) return !1;
          var s,
            c = n.invm(this.n),
            f = c.mul(e).umod(this.n),
            u = c.mul(o).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(f, r.getPublic(), u)).isInfinity() &&
                s.eqXToP(o)
            : !(s = this.g.mulAdd(f, r.getPublic(), u)).isInfinity() &&
                0 === s.getX().umod(this.n).cmp(o);
        }),
        (u.prototype.recoverPubKey = function (e, t, r, i) {
          c((3 & r) === r, 'The recovery param is more than two bits'),
            (t = new d(t, i));
          var o = this.n,
            n = new a(e),
            s = t.r,
            f = t.s,
            u = 1 & r,
            h = r >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
            throw new Error('Unable to find sencond key candinate');
          s = h
            ? this.curve.pointFromX(s.add(this.curve.n), u)
            : this.curve.pointFromX(s, u);
          var l = t.r.invm(o),
            p = o.sub(n).mul(l).umod(o),
            b = f.mul(l).umod(o);
          return this.g.mulAdd(p, s, b);
        }),
        (u.prototype.getKeyRecoveryParam = function (e, t, r, a) {
          if (null !== (t = new d(t, a)).recoveryParam) return t.recoveryParam;
          for (var i = 0; i < 4; i++) {
            var o;
            try {
              o = this.recoverPubKey(e, t, i);
            } catch (e) {
              continue;
            }
            if (o.eq(r)) return i;
          }
          throw new Error('Unable to find valid recovery factor');
        });
    },
    22307: (e, t, r) => {
      'use strict';
      var a = r(62197),
        i = r(18288).assert;
      function o(e, t) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc);
      }
      (e.exports = o),
        (o.fromPublic = function (e, t, r) {
          return t instanceof o ? t : new o(e, { pub: t, pubEnc: r });
        }),
        (o.fromPrivate = function (e, t, r) {
          return t instanceof o ? t : new o(e, { priv: t, privEnc: r });
        }),
        (o.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: 'Public key * N != O' }
            : { result: !1, reason: 'Public key is not a point' };
        }),
        (o.prototype.getPublic = function (e, t) {
          return (
            'string' == typeof e && ((t = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            t ? this.pub.encode(t, e) : this.pub
          );
        }),
        (o.prototype.getPrivate = function (e) {
          return 'hex' === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (o.prototype._importPrivate = function (e, t) {
          (this.priv = new a(e, t || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (o.prototype._importPublic = function (e, t) {
          if (e.x || e.y)
            return (
              'mont' === this.ec.curve.type
                ? i(e.x, 'Need x coordinate')
                : ('short' !== this.ec.curve.type &&
                    'edwards' !== this.ec.curve.type) ||
                  i(e.x && e.y, 'Need both x and y coordinate'),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            );
          this.pub = this.ec.curve.decodePoint(e, t);
        }),
        (o.prototype.derive = function (e) {
          return (
            e.validate() || i(e.validate(), 'public point not validated'),
            e.mul(this.priv).getX()
          );
        }),
        (o.prototype.sign = function (e, t, r) {
          return this.ec.sign(e, this, t, r);
        }),
        (o.prototype.verify = function (e, t) {
          return this.ec.verify(e, t, this);
        }),
        (o.prototype.inspect = function () {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          );
        });
    },
    71798: (e, t, r) => {
      'use strict';
      var a = r(62197),
        i = r(18288),
        o = i.assert;
      function n(e, t) {
        if (e instanceof n) return e;
        this._importDER(e, t) ||
          (o(e.r && e.s, 'Signature without r or s'),
          (this.r = new a(e.r, 16)),
          (this.s = new a(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function s() {
        this.place = 0;
      }
      function c(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        var a = 15 & r;
        if (0 === a || a > 4) return !1;
        for (var i = 0, o = 0, n = t.place; o < a; o++, n++)
          (i <<= 8), (i |= e[n]), (i >>>= 0);
        return !(i <= 127) && ((t.place = n), i);
      }
      function f(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
          t++;
        return 0 === t ? e : e.slice(t);
      }
      function d(e, t) {
        if (t < 128) e.push(t);
        else {
          var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
          for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
          e.push(t);
        }
      }
      (e.exports = n),
        (n.prototype._importDER = function (e, t) {
          e = i.toArray(e, t);
          var r = new s();
          if (48 !== e[r.place++]) return !1;
          var o = c(e, r);
          if (!1 === o) return !1;
          if (o + r.place !== e.length) return !1;
          if (2 !== e[r.place++]) return !1;
          var n = c(e, r);
          if (!1 === n) return !1;
          var f = e.slice(r.place, n + r.place);
          if (((r.place += n), 2 !== e[r.place++])) return !1;
          var d = c(e, r);
          if (!1 === d) return !1;
          if (e.length !== d + r.place) return !1;
          var u = e.slice(r.place, d + r.place);
          if (0 === f[0]) {
            if (!(128 & f[1])) return !1;
            f = f.slice(1);
          }
          if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1);
          }
          return (
            (this.r = new a(f)),
            (this.s = new a(u)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (n.prototype.toDER = function (e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = f(t),
              r = f(r);
            !(r[0] || 128 & r[1]);

          )
            r = r.slice(1);
          var a = [2];
          d(a, t.length), (a = a.concat(t)).push(2), d(a, r.length);
          var o = a.concat(r),
            n = [48];
          return d(n, o.length), (n = n.concat(o)), i.encode(n, e);
        });
    },
    39208: (e, t, r) => {
      'use strict';
      var a = r(34485),
        i = r(41479),
        o = r(18288),
        n = o.assert,
        s = o.parseBytes,
        c = r(851),
        f = r(6117);
      function d(e) {
        if (
          (n('ed25519' === e, 'only tested with ed25519 so far'),
          !(this instanceof d))
        )
          return new d(e);
        (e = i[e].curve),
          (this.curve = e),
          (this.g = e.g),
          this.g.precompute(e.n.bitLength() + 1),
          (this.pointClass = e.point().constructor),
          (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
          (this.hash = a.sha512);
      }
      (e.exports = d),
        (d.prototype.sign = function (e, t) {
          e = s(e);
          var r = this.keyFromSecret(t),
            a = this.hashInt(r.messagePrefix(), e),
            i = this.g.mul(a),
            o = this.encodePoint(i),
            n = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
            c = a.add(n).umod(this.curve.n);
          return this.makeSignature({ R: i, S: c, Rencoded: o });
        }),
        (d.prototype.verify = function (e, t, r) {
          (e = s(e)), (t = this.makeSignature(t));
          var a = this.keyFromPublic(r),
            i = this.hashInt(t.Rencoded(), a.pubBytes(), e),
            o = this.g.mul(t.S());
          return t.R().add(a.pub().mul(i)).eq(o);
        }),
        (d.prototype.hashInt = function () {
          for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t]);
          return o.intFromLE(e.digest()).umod(this.curve.n);
        }),
        (d.prototype.keyFromPublic = function (e) {
          return c.fromPublic(this, e);
        }),
        (d.prototype.keyFromSecret = function (e) {
          return c.fromSecret(this, e);
        }),
        (d.prototype.makeSignature = function (e) {
          return e instanceof f ? e : new f(this, e);
        }),
        (d.prototype.encodePoint = function (e) {
          var t = e.getY().toArray('le', this.encodingLength);
          return (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t;
        }),
        (d.prototype.decodePoint = function (e) {
          var t = (e = o.parseBytes(e)).length - 1,
            r = e.slice(0, t).concat(-129 & e[t]),
            a = 0 != (128 & e[t]),
            i = o.intFromLE(r);
          return this.curve.pointFromY(i, a);
        }),
        (d.prototype.encodeInt = function (e) {
          return e.toArray('le', this.encodingLength);
        }),
        (d.prototype.decodeInt = function (e) {
          return o.intFromLE(e);
        }),
        (d.prototype.isPoint = function (e) {
          return e instanceof this.pointClass;
        });
    },
    851: (e, t, r) => {
      'use strict';
      var a = r(18288),
        i = a.assert,
        o = a.parseBytes,
        n = a.cachedProperty;
      function s(e, t) {
        (this.eddsa = e),
          (this._secret = o(t.secret)),
          e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = o(t.pub));
      }
      (s.fromPublic = function (e, t) {
        return t instanceof s ? t : new s(e, { pub: t });
      }),
        (s.fromSecret = function (e, t) {
          return t instanceof s ? t : new s(e, { secret: t });
        }),
        (s.prototype.secret = function () {
          return this._secret;
        }),
        n(s, 'pubBytes', function () {
          return this.eddsa.encodePoint(this.pub());
        }),
        n(s, 'pub', function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        n(s, 'privBytes', function () {
          var e = this.eddsa,
            t = this.hash(),
            r = e.encodingLength - 1,
            a = t.slice(0, e.encodingLength);
          return (a[0] &= 248), (a[r] &= 127), (a[r] |= 64), a;
        }),
        n(s, 'priv', function () {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        n(s, 'hash', function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }),
        n(s, 'messagePrefix', function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (s.prototype.sign = function (e) {
          return (
            i(this._secret, 'KeyPair can only verify'), this.eddsa.sign(e, this)
          );
        }),
        (s.prototype.verify = function (e, t) {
          return this.eddsa.verify(e, t, this);
        }),
        (s.prototype.getSecret = function (e) {
          return (
            i(this._secret, 'KeyPair is public only'),
            a.encode(this.secret(), e)
          );
        }),
        (s.prototype.getPublic = function (e) {
          return a.encode(this.pubBytes(), e);
        }),
        (e.exports = s);
    },
    6117: (e, t, r) => {
      'use strict';
      var a = r(62197),
        i = r(18288),
        o = i.assert,
        n = i.cachedProperty,
        s = i.parseBytes;
      function c(e, t) {
        (this.eddsa = e),
          'object' != typeof t && (t = s(t)),
          Array.isArray(t) &&
            (t = {
              R: t.slice(0, e.encodingLength),
              S: t.slice(e.encodingLength)
            }),
          o(t.R && t.S, 'Signature without R or S'),
          e.isPoint(t.R) && (this._R = t.R),
          t.S instanceof a && (this._S = t.S),
          (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
          (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
      }
      n(c, 'S', function () {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        n(c, 'R', function () {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        n(c, 'Rencoded', function () {
          return this.eddsa.encodePoint(this.R());
        }),
        n(c, 'Sencoded', function () {
          return this.eddsa.encodeInt(this.S());
        }),
        (c.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (c.prototype.toHex = function () {
          return i.encode(this.toBytes(), 'hex').toUpperCase();
        }),
        (e.exports = c);
    },
    47983: (e) => {
      e.exports = {
        doubles: {
          step: 4,
          points: [
            [
              'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
              'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'
            ],
            [
              '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
              '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'
            ],
            [
              '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
              'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'
            ],
            [
              '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
              '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'
            ],
            [
              '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
              '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'
            ],
            [
              '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
              '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'
            ],
            [
              'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
              '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'
            ],
            [
              '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
              'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'
            ],
            [
              'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
              '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'
            ],
            [
              'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
              'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'
            ],
            [
              'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
              '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'
            ],
            [
              '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
              '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'
            ],
            [
              '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
              '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'
            ],
            [
              '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
              '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'
            ],
            [
              '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
              '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'
            ],
            [
              '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
              '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'
            ],
            [
              '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
              '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'
            ],
            [
              '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
              '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'
            ],
            [
              '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
              'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'
            ],
            [
              'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
              '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'
            ],
            [
              'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
              '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'
            ],
            [
              '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
              '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'
            ],
            [
              '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
              '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'
            ],
            [
              'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
              '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'
            ],
            [
              '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
              'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'
            ],
            [
              'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
              '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'
            ],
            [
              'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
              'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'
            ],
            [
              'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
              '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'
            ],
            [
              'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
              'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'
            ],
            [
              'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
              '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'
            ],
            [
              '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
              'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'
            ],
            [
              '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
              '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'
            ],
            [
              'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
              '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'
            ],
            [
              '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
              'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'
            ],
            [
              'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
              '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'
            ],
            [
              'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
              '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'
            ],
            [
              'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
              'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'
            ],
            [
              '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
              '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'
            ],
            [
              '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
              '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'
            ],
            [
              '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
              'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'
            ],
            [
              '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
              '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'
            ],
            [
              'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
              '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'
            ],
            [
              '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
              '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'
            ],
            [
              '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
              'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'
            ],
            [
              '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
              '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'
            ],
            [
              'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
              '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'
            ],
            [
              '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
              'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'
            ],
            [
              'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
              'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'
            ],
            [
              'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
              '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'
            ],
            [
              '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
              'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'
            ],
            [
              '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
              'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'
            ],
            [
              'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
              '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'
            ],
            [
              'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
              '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'
            ],
            [
              'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
              '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'
            ],
            [
              '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
              'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'
            ],
            [
              '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
              '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'
            ],
            [
              'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
              'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'
            ],
            [
              '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
              'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'
            ],
            [
              '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
              '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'
            ],
            [
              '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
              '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'
            ],
            [
              'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
              'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'
            ],
            [
              '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
              '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'
            ],
            [
              '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
              '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'
            ],
            [
              'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
              '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'
            ],
            [
              'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
              'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82'
            ]
          ]
        },
        naf: {
          wnd: 7,
          points: [
            [
              'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
              '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'
            ],
            [
              '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
              'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'
            ],
            [
              '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
              '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'
            ],
            [
              'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
              'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'
            ],
            [
              '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
              'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'
            ],
            [
              'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
              'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'
            ],
            [
              'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
              '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'
            ],
            [
              'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
              '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'
            ],
            [
              '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
              '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'
            ],
            [
              '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
              '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'
            ],
            [
              '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
              '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'
            ],
            [
              '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
              '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'
            ],
            [
              'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
              'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'
            ],
            [
              'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
              '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'
            ],
            [
              '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
              'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'
            ],
            [
              '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
              'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'
            ],
            [
              '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
              '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'
            ],
            [
              '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
              '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'
            ],
            [
              '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
              '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'
            ],
            [
              '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
              'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'
            ],
            [
              'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
              'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'
            ],
            [
              '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
              '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'
            ],
            [
              '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
              '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'
            ],
            [
              'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
              'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'
            ],
            [
              '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
              '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'
            ],
            [
              'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
              'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'
            ],
            [
              'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
              'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'
            ],
            [
              '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
              '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'
            ],
            [
              '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
              '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'
            ],
            [
              '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
              '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'
            ],
            [
              'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
              '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'
            ],
            [
              '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
              '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'
            ],
            [
              'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
              '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'
            ],
            [
              '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
              'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'
            ],
            [
              '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
              'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'
            ],
            [
              'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
              'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'
            ],
            [
              '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
              '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'
            ],
            [
              '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
              'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'
            ],
            [
              'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
              'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'
            ],
            [
              '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
              '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'
            ],
            [
              '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
              'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'
            ],
            [
              '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
              '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'
            ],
            [
              '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
              'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'
            ],
            [
              'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
              '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'
            ],
            [
              '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
              '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'
            ],
            [
              '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
              'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'
            ],
            [
              '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
              'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'
            ],
            [
              'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
              'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'
            ],
            [
              'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
              'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'
            ],
            [
              '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
              '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'
            ],
            [
              '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
              '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'
            ],
            [
              'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
              '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'
            ],
            [
              'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
              'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'
            ],
            [
              '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
              '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'
            ],
            [
              '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
              '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'
            ],
            [
              'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
              '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'
            ],
            [
              '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
              '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'
            ],
            [
              'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
              'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'
            ],
            [
              '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
              'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'
            ],
            [
              '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
              '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'
            ],
            [
              'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
              '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'
            ],
            [
              'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
              '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'
            ],
            [
              '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
              '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'
            ],
            [
              '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
              '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'
            ],
            [
              '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
              'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'
            ],
            [
              '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
              'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'
            ],
            [
              '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
              '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'
            ],
            [
              '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
              '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'
            ],
            [
              '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
              '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'
            ],
            [
              '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
              'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'
            ],
            [
              'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
              'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'
            ],
            [
              '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
              'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'
            ],
            [
              'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
              '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'
            ],
            [
              'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
              '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'
            ],
            [
              'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
              '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'
            ],
            [
              'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
              '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'
            ],
            [
              '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
              'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'
            ],
            [
              '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
              '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'
            ],
            [
              '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
              'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'
            ],
            [
              'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
              'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'
            ],
            [
              'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
              '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'
            ],
            [
              'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
              'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'
            ],
            [
              'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
              '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'
            ],
            [
              '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
              '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'
            ],
            [
              'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
              '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'
            ],
            [
              'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
              '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'
            ],
            [
              '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
              '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'
            ],
            [
              '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
              'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'
            ],
            [
              'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
              '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'
            ],
            [
              'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
              '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'
            ],
            [
              'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
              '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'
            ],
            [
              '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
              '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'
            ],
            [
              'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
              'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'
            ],
            [
              '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
              'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'
            ],
            [
              'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
              'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'
            ],
            [
              'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
              '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'
            ],
            [
              '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
              'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'
            ],
            [
              'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
              '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'
            ],
            [
              'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
              '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'
            ],
            [
              'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
              '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'
            ],
            [
              '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
              'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'
            ],
            [
              '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
              'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'
            ],
            [
              'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
              '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'
            ],
            [
              '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
              'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'
            ],
            [
              '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
              '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'
            ],
            [
              '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
              'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'
            ],
            [
              'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
              'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'
            ],
            [
              '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
              'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'
            ],
            [
              '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
              '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'
            ],
            [
              '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
              'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'
            ],
            [
              '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
              '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'
            ],
            [
              'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
              'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'
            ],
            [
              '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
              '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'
            ],
            [
              'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
              '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'
            ],
            [
              '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
              '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'
            ],
            [
              'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
              'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'
            ],
            [
              'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
              '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'
            ],
            [
              'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
              'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'
            ],
            [
              '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
              'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'
            ],
            [
              '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
              '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'
            ],
            [
              '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
              'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'
            ],
            [
              '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
              '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'
            ],
            [
              '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
              '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'
            ],
            [
              '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
              'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'
            ],
            [
              '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
              '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'
            ],
            [
              '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
              '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'
            ],
            [
              '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
              '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9'
            ]
          ]
        }
      };
    },
    18288: (e, t, r) => {
      'use strict';
      var a = t,
        i = r(62197),
        o = r(79561),
        n = r(43022);
      (a.assert = o),
        (a.toArray = n.toArray),
        (a.zero2 = n.zero2),
        (a.toHex = n.toHex),
        (a.encode = n.encode),
        (a.getNAF = function (e, t, r) {
          var a = new Array(Math.max(e.bitLength(), r) + 1);
          a.fill(0);
          for (var i = 1 << (t + 1), o = e.clone(), n = 0; n < a.length; n++) {
            var s,
              c = o.andln(i - 1);
            o.isOdd()
              ? ((s = c > (i >> 1) - 1 ? (i >> 1) - c : c), o.isubn(s))
              : (s = 0),
              (a[n] = s),
              o.iushrn(1);
          }
          return a;
        }),
        (a.getJSF = function (e, t) {
          var r = [[], []];
          (e = e.clone()), (t = t.clone());
          for (var a, i = 0, o = 0; e.cmpn(-i) > 0 || t.cmpn(-o) > 0; ) {
            var n,
              s,
              c = (e.andln(3) + i) & 3,
              f = (t.andln(3) + o) & 3;
            3 === c && (c = -1),
              3 === f && (f = -1),
              (n =
                0 == (1 & c)
                  ? 0
                  : (3 != (a = (e.andln(7) + i) & 7) && 5 !== a) || 2 !== f
                  ? c
                  : -c),
              r[0].push(n),
              (s =
                0 == (1 & f)
                  ? 0
                  : (3 != (a = (t.andln(7) + o) & 7) && 5 !== a) || 2 !== c
                  ? f
                  : -f),
              r[1].push(s),
              2 * i === n + 1 && (i = 1 - i),
              2 * o === s + 1 && (o = 1 - o),
              e.iushrn(1),
              t.iushrn(1);
          }
          return r;
        }),
        (a.cachedProperty = function (e, t, r) {
          var a = '_' + t;
          e.prototype[t] = function () {
            return void 0 !== this[a] ? this[a] : (this[a] = r.call(this));
          };
        }),
        (a.parseBytes = function (e) {
          return 'string' == typeof e ? a.toArray(e, 'hex') : e;
        }),
        (a.intFromLE = function (e) {
          return new i(e, 'hex', 'le');
        });
    },
    13182: (e) => {
      'use strict';
      e.exports = { i8: '6.5.4' };
    },
    84485: (e, t, r) => {
      'use strict';
      var a = r(77834).Buffer,
        i = r(45429).Transform;
      function o(e) {
        i.call(this),
          (this._block = a.allocUnsafe(e)),
          (this._blockSize = e),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1);
      }
      r(91285)(o, i),
        (o.prototype._transform = function (e, t, r) {
          var a = null;
          try {
            this.update(e, t);
          } catch (e) {
            a = e;
          }
          r(a);
        }),
        (o.prototype._flush = function (e) {
          var t = null;
          try {
            this.push(this.digest());
          } catch (e) {
            t = e;
          }
          e(t);
        }),
        (o.prototype.update = function (e, t) {
          if (
            ((function (e, t) {
              if (!a.isBuffer(e) && 'string' != typeof e)
                throw new TypeError('Data must be a string or a buffer');
            })(e),
            this._finalized)
          )
            throw new Error('Digest already called');
          a.isBuffer(e) || (e = a.from(e, t));
          for (
            var r = this._block, i = 0;
            this._blockOffset + e.length - i >= this._blockSize;

          ) {
            for (var o = this._blockOffset; o < this._blockSize; )
              r[o++] = e[i++];
            this._update(), (this._blockOffset = 0);
          }
          for (; i < e.length; ) r[this._blockOffset++] = e[i++];
          for (var n = 0, s = 8 * e.length; s > 0; ++n)
            (this._length[n] += s),
              (s = (this._length[n] / 4294967296) | 0) > 0 &&
                (this._length[n] -= 4294967296 * s);
          return this;
        }),
        (o.prototype._update = function () {
          throw new Error('_update is not implemented');
        }),
        (o.prototype.digest = function (e) {
          if (this._finalized) throw new Error('Digest already called');
          this._finalized = !0;
          var t = this._digest();
          void 0 !== e && (t = t.toString(e)),
            this._block.fill(0),
            (this._blockOffset = 0);
          for (var r = 0; r < 4; ++r) this._length[r] = 0;
          return t;
        }),
        (o.prototype._digest = function () {
          throw new Error('_digest is not implemented');
        }),
        (e.exports = o);
    },
    34485: (e, t, r) => {
      var a = t;
      (a.utils = r(50212)),
        (a.common = r(74495)),
        (a.sha = r(45530)),
        (a.ripemd = r(91396)),
        (a.hmac = r(15047)),
        (a.sha1 = a.sha.sha1),
        (a.sha256 = a.sha.sha256),
        (a.sha224 = a.sha.sha224),
        (a.sha384 = a.sha.sha384),
        (a.sha512 = a.sha.sha512),
        (a.ripemd160 = a.ripemd.ripemd160);
    },
    74495: (e, t, r) => {
      'use strict';
      var a = r(50212),
        i = r(79561);
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = 'big'),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (t.BlockHash = o),
        (o.prototype.update = function (e, t) {
          if (
            ((e = a.toArray(e, t)),
            this.pending
              ? (this.pending = this.pending.concat(e))
              : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - r, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = a.join32(e, 0, e.length - r, this.endian));
            for (var i = 0; i < e.length; i += this._delta32)
              this._update(e, i, i + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function (e) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(e)
          );
        }),
        (o.prototype._pad = function () {
          var e = this.pendingTotal,
            t = this._delta8,
            r = t - ((e + this.padLength) % t),
            a = new Array(r + this.padLength);
          a[0] = 128;
          for (var i = 1; i < r; i++) a[i] = 0;
          if (((e <<= 3), 'big' === this.endian)) {
            for (var o = 8; o < this.padLength; o++) a[i++] = 0;
            (a[i++] = 0),
              (a[i++] = 0),
              (a[i++] = 0),
              (a[i++] = 0),
              (a[i++] = (e >>> 24) & 255),
              (a[i++] = (e >>> 16) & 255),
              (a[i++] = (e >>> 8) & 255),
              (a[i++] = 255 & e);
          } else
            for (
              a[i++] = 255 & e,
                a[i++] = (e >>> 8) & 255,
                a[i++] = (e >>> 16) & 255,
                a[i++] = (e >>> 24) & 255,
                a[i++] = 0,
                a[i++] = 0,
                a[i++] = 0,
                a[i++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              a[i++] = 0;
          return a;
        });
    },
    15047: (e, t, r) => {
      'use strict';
      var a = r(50212),
        i = r(79561);
      function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        (this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(a.toArray(t, r));
      }
      (e.exports = o),
        (o.prototype._init = function (e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            i(e.length <= this.blockSize);
          for (var t = e.length; t < this.blockSize; t++) e.push(0);
          for (t = 0; t < e.length; t++) e[t] ^= 54;
          for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
            e[t] ^= 106;
          this.outer = new this.Hash().update(e);
        }),
        (o.prototype.update = function (e, t) {
          return this.inner.update(e, t), this;
        }),
        (o.prototype.digest = function (e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e);
        });
    },
    91396: (e, t, r) => {
      'use strict';
      var a = r(50212),
        i = r(74495),
        o = a.rotl32,
        n = a.sum32,
        s = a.sum32_3,
        c = a.sum32_4,
        f = i.BlockHash;
      function d() {
        if (!(this instanceof d)) return new d();
        f.call(this),
          (this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
          ]),
          (this.endian = 'little');
      }
      function u(e, t, r, a) {
        return e <= 15
          ? t ^ r ^ a
          : e <= 31
          ? (t & r) | (~t & a)
          : e <= 47
          ? (t | ~r) ^ a
          : e <= 63
          ? (t & a) | (r & ~a)
          : t ^ (r | ~a);
      }
      function h(e) {
        return e <= 15
          ? 0
          : e <= 31
          ? 1518500249
          : e <= 47
          ? 1859775393
          : e <= 63
          ? 2400959708
          : 2840853838;
      }
      function l(e) {
        return e <= 15
          ? 1352829926
          : e <= 31
          ? 1548603684
          : e <= 47
          ? 1836072691
          : e <= 63
          ? 2053994217
          : 0;
      }
      a.inherits(d, f),
        (t.ripemd160 = d),
        (d.blockSize = 512),
        (d.outSize = 160),
        (d.hmacStrength = 192),
        (d.padLength = 64),
        (d.prototype._update = function (e, t) {
          for (
            var r = this.h[0],
              a = this.h[1],
              i = this.h[2],
              f = this.h[3],
              d = this.h[4],
              g = r,
              y = a,
              w = i,
              k = f,
              M = d,
              _ = 0;
            _ < 80;
            _++
          ) {
            var z = n(o(c(r, u(_, a, i, f), e[p[_] + t], h(_)), m[_]), d);
            (r = d),
              (d = f),
              (f = o(i, 10)),
              (i = a),
              (a = z),
              (z = n(o(c(g, u(79 - _, y, w, k), e[b[_] + t], l(_)), v[_]), M)),
              (g = M),
              (M = k),
              (k = o(w, 10)),
              (w = y),
              (y = z);
          }
          (z = s(this.h[1], i, k)),
            (this.h[1] = s(this.h[2], f, M)),
            (this.h[2] = s(this.h[3], d, g)),
            (this.h[3] = s(this.h[4], r, y)),
            (this.h[4] = s(this.h[0], a, w)),
            (this.h[0] = z);
        }),
        (d.prototype._digest = function (e) {
          return 'hex' === e
            ? a.toHex32(this.h, 'little')
            : a.split32(this.h, 'little');
        });
      var p = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ],
        b = [
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ],
        m = [
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ],
        v = [
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ];
    },
    45530: (e, t, r) => {
      'use strict';
      (t.sha1 = r(35079)),
        (t.sha224 = r(63823)),
        (t.sha256 = r(68032)),
        (t.sha384 = r(25328)),
        (t.sha512 = r(20168));
    },
    35079: (e, t, r) => {
      'use strict';
      var a = r(50212),
        i = r(74495),
        o = r(40713),
        n = a.rotl32,
        s = a.sum32,
        c = a.sum32_5,
        f = o.ft_1,
        d = i.BlockHash,
        u = [1518500249, 1859775393, 2400959708, 3395469782];
      function h() {
        if (!(this instanceof h)) return new h();
        d.call(this),
          (this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
          ]),
          (this.W = new Array(80));
      }
      a.inherits(h, d),
        (e.exports = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 80),
        (h.padLength = 64),
        (h.prototype._update = function (e, t) {
          for (var r = this.W, a = 0; a < 16; a++) r[a] = e[t + a];
          for (; a < r.length; a++)
            r[a] = n(r[a - 3] ^ r[a - 8] ^ r[a - 14] ^ r[a - 16], 1);
          var i = this.h[0],
            o = this.h[1],
            d = this.h[2],
            h = this.h[3],
            l = this.h[4];
          for (a = 0; a < r.length; a++) {
            var p = ~~(a / 20),
              b = c(n(i, 5), f(p, o, d, h), l, r[a], u[p]);
            (l = h), (h = d), (d = n(o, 30)), (o = i), (i = b);
          }
          (this.h[0] = s(this.h[0], i)),
            (this.h[1] = s(this.h[1], o)),
            (this.h[2] = s(this.h[2], d)),
            (this.h[3] = s(this.h[3], h)),
            (this.h[4] = s(this.h[4], l));
        }),
        (h.prototype._digest = function (e) {
          return 'hex' === e
            ? a.toHex32(this.h, 'big')
            : a.split32(this.h, 'big');
        });
    },
    63823: (e, t, r) => {
      'use strict';
      var a = r(50212),
        i = r(68032);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
          ]);
      }
      a.inherits(o, i),
        (e.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function (e) {
          return 'hex' === e
            ? a.toHex32(this.h.slice(0, 7), 'big')
            : a.split32(this.h.slice(0, 7), 'big');
        });
    },
    68032: (e, t, r) => {
      'use strict';
      var a = r(50212),
        i = r(74495),
        o = r(40713),
        n = r(79561),
        s = a.sum32,
        c = a.sum32_4,
        f = a.sum32_5,
        d = o.ch32,
        u = o.maj32,
        h = o.s0_256,
        l = o.s1_256,
        p = o.g0_256,
        b = o.g1_256,
        m = i.BlockHash,
        v = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ];
      function g() {
        if (!(this instanceof g)) return new g();
        m.call(this),
          (this.h = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225
          ]),
          (this.k = v),
          (this.W = new Array(64));
      }
      a.inherits(g, m),
        (e.exports = g),
        (g.blockSize = 512),
        (g.outSize = 256),
        (g.hmacStrength = 192),
        (g.padLength = 64),
        (g.prototype._update = function (e, t) {
          for (var r = this.W, a = 0; a < 16; a++) r[a] = e[t + a];
          for (; a < r.length; a++)
            r[a] = c(b(r[a - 2]), r[a - 7], p(r[a - 15]), r[a - 16]);
          var i = this.h[0],
            o = this.h[1],
            m = this.h[2],
            v = this.h[3],
            g = this.h[4],
            y = this.h[5],
            w = this.h[6],
            k = this.h[7];
          for (n(this.k.length === r.length), a = 0; a < r.length; a++) {
            var M = f(k, l(g), d(g, y, w), this.k[a], r[a]),
              _ = s(h(i), u(i, o, m));
            (k = w),
              (w = y),
              (y = g),
              (g = s(v, M)),
              (v = m),
              (m = o),
              (o = i),
              (i = s(M, _));
          }
          (this.h[0] = s(this.h[0], i)),
            (this.h[1] = s(this.h[1], o)),
            (this.h[2] = s(this.h[2], m)),
            (this.h[3] = s(this.h[3], v)),
            (this.h[4] = s(this.h[4], g)),
            (this.h[5] = s(this.h[5], y)),
            (this.h[6] = s(this.h[6], w)),
            (this.h[7] = s(this.h[7], k));
        }),
        (g.prototype._digest = function (e) {
          return 'hex' === e
            ? a.toHex32(this.h, 'big')
            : a.split32(this.h, 'big');
        });
    },
    25328: (e, t, r) => {
      'use strict';
      var a = r(50212),
        i = r(20168);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3418070365,
            3238371032,
            1654270250,
            914150663,
            2438529370,
            812702999,
            355462360,
            4144912697,
            1731405415,
            4290775857,
            2394180231,
            1750603025,
            3675008525,
            1694076839,
            1203062813,
            3204075428
          ]);
      }
      a.inherits(o, i),
        (e.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function (e) {
          return 'hex' === e
            ? a.toHex32(this.h.slice(0, 12), 'big')
            : a.split32(this.h.slice(0, 12), 'big');
        });
    },
    20168: (e, t, r) => {
      'use strict';
      var a = r(50212),
        i = r(74495),
        o = r(79561),
        n = a.rotr64_hi,
        s = a.rotr64_lo,
        c = a.shr64_hi,
        f = a.shr64_lo,
        d = a.sum64,
        u = a.sum64_hi,
        h = a.sum64_lo,
        l = a.sum64_4_hi,
        p = a.sum64_4_lo,
        b = a.sum64_5_hi,
        m = a.sum64_5_lo,
        v = i.BlockHash,
        g = [
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
      function y() {
        if (!(this instanceof y)) return new y();
        v.call(this),
          (this.h = [
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209
          ]),
          (this.k = g),
          (this.W = new Array(160));
      }
      function w(e, t, r, a, i) {
        var o = (e & r) ^ (~e & i);
        return o < 0 && (o += 4294967296), o;
      }
      function k(e, t, r, a, i, o) {
        var n = (t & a) ^ (~t & o);
        return n < 0 && (n += 4294967296), n;
      }
      function M(e, t, r, a, i) {
        var o = (e & r) ^ (e & i) ^ (r & i);
        return o < 0 && (o += 4294967296), o;
      }
      function _(e, t, r, a, i, o) {
        var n = (t & a) ^ (t & o) ^ (a & o);
        return n < 0 && (n += 4294967296), n;
      }
      function z(e, t) {
        var r = n(e, t, 28) ^ n(t, e, 2) ^ n(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function x(e, t) {
        var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function A(e, t) {
        var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function S(e, t) {
        var r = n(e, t, 1) ^ n(e, t, 8) ^ c(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function j(e, t) {
        var r = s(e, t, 1) ^ s(e, t, 8) ^ f(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function I(e, t) {
        var r = s(e, t, 19) ^ s(t, e, 29) ^ f(e, t, 6);
        return r < 0 && (r += 4294967296), r;
      }
      a.inherits(y, v),
        (e.exports = y),
        (y.blockSize = 1024),
        (y.outSize = 512),
        (y.hmacStrength = 192),
        (y.padLength = 128),
        (y.prototype._prepareBlock = function (e, t) {
          for (var r = this.W, a = 0; a < 32; a++) r[a] = e[t + a];
          for (; a < r.length; a += 2) {
            var i =
                ((m = r[a - 4]),
                (v = r[a - 3]),
                (g = void 0),
                (g = n(m, v, 19) ^ n(v, m, 29) ^ c(m, v, 6)) < 0 &&
                  (g += 4294967296),
                g),
              o = I(r[a - 4], r[a - 3]),
              s = r[a - 14],
              f = r[a - 13],
              d = S(r[a - 30], r[a - 29]),
              u = j(r[a - 30], r[a - 29]),
              h = r[a - 32],
              b = r[a - 31];
            (r[a] = l(i, o, s, f, d, u, h, b)),
              (r[a + 1] = p(i, o, s, f, d, u, h, b));
          }
          var m, v, g;
        }),
        (y.prototype._update = function (e, t) {
          this._prepareBlock(e, t);
          var r,
            a,
            i,
            s = this.W,
            c = this.h[0],
            f = this.h[1],
            l = this.h[2],
            p = this.h[3],
            v = this.h[4],
            g = this.h[5],
            y = this.h[6],
            S = this.h[7],
            j = this.h[8],
            I = this.h[9],
            q = this.h[10],
            E = this.h[11],
            B = this.h[12],
            C = this.h[13],
            R = this.h[14],
            P = this.h[15];
          o(this.k.length === s.length);
          for (var N = 0; N < s.length; N += 2) {
            var O = R,
              L = P,
              D =
                ((i = void 0),
                (i = n((r = j), (a = I), 14) ^ n(r, a, 18) ^ n(a, r, 9)) < 0 &&
                  (i += 4294967296),
                i),
              U = A(j, I),
              T = w(j, 0, q, 0, B),
              H = k(0, I, 0, E, 0, C),
              F = this.k[N],
              Z = this.k[N + 1],
              J = s[N],
              K = s[N + 1],
              V = b(O, L, D, U, T, H, F, Z, J, K),
              X = m(O, L, D, U, T, H, F, Z, J, K);
            (O = z(c, f)),
              (L = x(c, f)),
              (D = M(c, 0, l, 0, v)),
              (U = _(0, f, 0, p, 0, g));
            var W = u(O, L, D, U),
              G = h(O, L, D, U);
            (R = B),
              (P = C),
              (B = q),
              (C = E),
              (q = j),
              (E = I),
              (j = u(y, S, V, X)),
              (I = h(S, S, V, X)),
              (y = v),
              (S = g),
              (v = l),
              (g = p),
              (l = c),
              (p = f),
              (c = u(V, X, W, G)),
              (f = h(V, X, W, G));
          }
          d(this.h, 0, c, f),
            d(this.h, 2, l, p),
            d(this.h, 4, v, g),
            d(this.h, 6, y, S),
            d(this.h, 8, j, I),
            d(this.h, 10, q, E),
            d(this.h, 12, B, C),
            d(this.h, 14, R, P);
        }),
        (y.prototype._digest = function (e) {
          return 'hex' === e
            ? a.toHex32(this.h, 'big')
            : a.split32(this.h, 'big');
        });
    },
    40713: (e, t, r) => {
      'use strict';
      var a = r(50212).rotr32;
      function i(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function o(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      function n(e, t, r) {
        return e ^ t ^ r;
      }
      (t.ft_1 = function (e, t, r, a) {
        return 0 === e
          ? i(t, r, a)
          : 1 === e || 3 === e
          ? n(t, r, a)
          : 2 === e
          ? o(t, r, a)
          : void 0;
      }),
        (t.ch32 = i),
        (t.maj32 = o),
        (t.p32 = n),
        (t.s0_256 = function (e) {
          return a(e, 2) ^ a(e, 13) ^ a(e, 22);
        }),
        (t.s1_256 = function (e) {
          return a(e, 6) ^ a(e, 11) ^ a(e, 25);
        }),
        (t.g0_256 = function (e) {
          return a(e, 7) ^ a(e, 18) ^ (e >>> 3);
        }),
        (t.g1_256 = function (e) {
          return a(e, 17) ^ a(e, 19) ^ (e >>> 10);
        });
    },
    50212: (e, t, r) => {
      'use strict';
      var a = r(79561),
        i = r(91285);
      function o(e, t) {
        return (
          55296 == (64512 & e.charCodeAt(t)) &&
          !(t < 0 || t + 1 >= e.length) &&
          56320 == (64512 & e.charCodeAt(t + 1))
        );
      }
      function n(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 16711680) |
            ((255 & e) << 24)) >>>
          0
        );
      }
      function s(e) {
        return 1 === e.length ? '0' + e : e;
      }
      function c(e) {
        return 7 === e.length
          ? '0' + e
          : 6 === e.length
          ? '00' + e
          : 5 === e.length
          ? '000' + e
          : 4 === e.length
          ? '0000' + e
          : 3 === e.length
          ? '00000' + e
          : 2 === e.length
          ? '000000' + e
          : 1 === e.length
          ? '0000000' + e
          : e;
      }
      (t.inherits = i),
        (t.toArray = function (e, t) {
          if (Array.isArray(e)) return e.slice();
          if (!e) return [];
          var r = [];
          if ('string' == typeof e)
            if (t) {
              if ('hex' === t)
                for (
                  (e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
                    (e = '0' + e),
                    i = 0;
                  i < e.length;
                  i += 2
                )
                  r.push(parseInt(e[i] + e[i + 1], 16));
            } else
              for (var a = 0, i = 0; i < e.length; i++) {
                var n = e.charCodeAt(i);
                n < 128
                  ? (r[a++] = n)
                  : n < 2048
                  ? ((r[a++] = (n >> 6) | 192), (r[a++] = (63 & n) | 128))
                  : o(e, i)
                  ? ((n =
                      65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++i))),
                    (r[a++] = (n >> 18) | 240),
                    (r[a++] = ((n >> 12) & 63) | 128),
                    (r[a++] = ((n >> 6) & 63) | 128),
                    (r[a++] = (63 & n) | 128))
                  : ((r[a++] = (n >> 12) | 224),
                    (r[a++] = ((n >> 6) & 63) | 128),
                    (r[a++] = (63 & n) | 128));
              }
          else for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
          return r;
        }),
        (t.toHex = function (e) {
          for (var t = '', r = 0; r < e.length; r++) t += s(e[r].toString(16));
          return t;
        }),
        (t.htonl = n),
        (t.toHex32 = function (e, t) {
          for (var r = '', a = 0; a < e.length; a++) {
            var i = e[a];
            'little' === t && (i = n(i)), (r += c(i.toString(16)));
          }
          return r;
        }),
        (t.zero2 = s),
        (t.zero8 = c),
        (t.join32 = function (e, t, r, i) {
          var o = r - t;
          a(o % 4 == 0);
          for (
            var n = new Array(o / 4), s = 0, c = t;
            s < n.length;
            s++, c += 4
          ) {
            var f;
            (f =
              'big' === i
                ? (e[c] << 24) | (e[c + 1] << 16) | (e[c + 2] << 8) | e[c + 3]
                : (e[c + 3] << 24) | (e[c + 2] << 16) | (e[c + 1] << 8) | e[c]),
              (n[s] = f >>> 0);
          }
          return n;
        }),
        (t.split32 = function (e, t) {
          for (
            var r = new Array(4 * e.length), a = 0, i = 0;
            a < e.length;
            a++, i += 4
          ) {
            var o = e[a];
            'big' === t
              ? ((r[i] = o >>> 24),
                (r[i + 1] = (o >>> 16) & 255),
                (r[i + 2] = (o >>> 8) & 255),
                (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24),
                (r[i + 2] = (o >>> 16) & 255),
                (r[i + 1] = (o >>> 8) & 255),
                (r[i] = 255 & o));
          }
          return r;
        }),
        (t.rotr32 = function (e, t) {
          return (e >>> t) | (e << (32 - t));
        }),
        (t.rotl32 = function (e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.sum32 = function (e, t) {
          return (e + t) >>> 0;
        }),
        (t.sum32_3 = function (e, t, r) {
          return (e + t + r) >>> 0;
        }),
        (t.sum32_4 = function (e, t, r, a) {
          return (e + t + r + a) >>> 0;
        }),
        (t.sum32_5 = function (e, t, r, a, i) {
          return (e + t + r + a + i) >>> 0;
        }),
        (t.sum64 = function (e, t, r, a) {
          var i = e[t],
            o = (a + e[t + 1]) >>> 0,
            n = (o < a ? 1 : 0) + r + i;
          (e[t] = n >>> 0), (e[t + 1] = o);
        }),
        (t.sum64_hi = function (e, t, r, a) {
          return (((t + a) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
        }),
        (t.sum64_lo = function (e, t, r, a) {
          return (t + a) >>> 0;
        }),
        (t.sum64_4_hi = function (e, t, r, a, i, o, n, s) {
          var c = 0,
            f = t;
          return (
            (c += (f = (f + a) >>> 0) < t ? 1 : 0),
            (c += (f = (f + o) >>> 0) < o ? 1 : 0),
            (e + r + i + n + (c += (f = (f + s) >>> 0) < s ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_4_lo = function (e, t, r, a, i, o, n, s) {
          return (t + a + o + s) >>> 0;
        }),
        (t.sum64_5_hi = function (e, t, r, a, i, o, n, s, c, f) {
          var d = 0,
            u = t;
          return (
            (d += (u = (u + a) >>> 0) < t ? 1 : 0),
            (d += (u = (u + o) >>> 0) < o ? 1 : 0),
            (d += (u = (u + s) >>> 0) < s ? 1 : 0),
            (e + r + i + n + c + (d += (u = (u + f) >>> 0) < f ? 1 : 0)) >>> 0
          );
        }),
        (t.sum64_5_lo = function (e, t, r, a, i, o, n, s, c, f) {
          return (t + a + o + s + f) >>> 0;
        }),
        (t.rotr64_hi = function (e, t, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (t.rotr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (t.shr64_hi = function (e, t, r) {
          return e >>> r;
        }),
        (t.shr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        });
    },
    78873: (e, t, r) => {
      'use strict';
      var a = r(34485),
        i = r(43022),
        o = r(79561);
      function n(e) {
        if (!(this instanceof n)) return new n(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var t = i.toArray(e.entropy, e.entropyEnc || 'hex'),
          r = i.toArray(e.nonce, e.nonceEnc || 'hex'),
          a = i.toArray(e.pers, e.persEnc || 'hex');
        o(
          t.length >= this.minEntropy / 8,
          'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
        ),
          this._init(t, r, a);
      }
      (e.exports = n),
        (n.prototype._init = function (e, t, r) {
          var a = e.concat(t).concat(r);
          (this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8));
          for (var i = 0; i < this.V.length; i++)
            (this.K[i] = 0), (this.V[i] = 1);
          this._update(a),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656);
        }),
        (n.prototype._hmac = function () {
          return new a.hmac(this.hash, this.K);
        }),
        (n.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0]);
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (n.prototype.reseed = function (e, t, r, a) {
          'string' != typeof t && ((a = r), (r = t), (t = null)),
            (e = i.toArray(e, t)),
            (r = i.toArray(r, a)),
            o(
              e.length >= this.minEntropy / 8,
              'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1);
        }),
        (n.prototype.generate = function (e, t, r, a) {
          if (this._reseed > this.reseedInterval)
            throw new Error('Reseed is required');
          'string' != typeof t && ((a = r), (r = t), (t = null)),
            r && ((r = i.toArray(r, a || 'hex')), this._update(r));
          for (var o = []; o.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (o = o.concat(this.V));
          var n = o.slice(0, e);
          return this._update(r), this._reseed++, i.encode(n, t);
        });
    },
    83669: (e, t, r) => {
      var a,
        i = r(34406);
      !(function () {
        'use strict';
        var o = 'input is invalid type',
          n = 'object' == typeof window,
          s = n ? window : {};
        s.JS_SHA3_NO_WINDOW && (n = !1);
        var c = !n && 'object' == typeof self;
        !s.JS_SHA3_NO_NODE_JS &&
        'object' == typeof i &&
        i.versions &&
        i.versions.node
          ? (s = r.g)
          : c && (s = self);
        var f = !s.JS_SHA3_NO_COMMON_JS && e.exports,
          d = r.amdO,
          u = !s.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
          h = '0123456789abcdef'.split(''),
          l = [4, 1024, 262144, 67108864],
          p = [0, 8, 16, 24],
          b = [
            1,
            0,
            32898,
            0,
            32906,
            2147483648,
            2147516416,
            2147483648,
            32907,
            0,
            2147483649,
            0,
            2147516545,
            2147483648,
            32777,
            2147483648,
            138,
            0,
            136,
            0,
            2147516425,
            0,
            2147483658,
            0,
            2147516555,
            0,
            139,
            2147483648,
            32905,
            2147483648,
            32771,
            2147483648,
            32770,
            2147483648,
            128,
            2147483648,
            32778,
            0,
            2147483658,
            2147483648,
            2147516545,
            2147483648,
            32896,
            2147483648,
            2147483649,
            0,
            2147516424,
            2147483648
          ],
          m = [224, 256, 384, 512],
          v = [128, 256],
          g = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
          y = { 128: 168, 256: 136 };
        (!s.JS_SHA3_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = function (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          }),
          !u ||
            (!s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
            (ArrayBuffer.isView = function (e) {
              return (
                'object' == typeof e &&
                e.buffer &&
                e.buffer.constructor === ArrayBuffer
              );
            });
        for (
          var w = function (e, t, r) {
              return function (a) {
                return new P(e, t, e).update(a)[r]();
              };
            },
            k = function (e, t, r) {
              return function (a, i) {
                return new P(e, t, i).update(a)[r]();
              };
            },
            M = function (e, t, r) {
              return function (t, a, i, o) {
                return S['cshake' + e].update(t, a, i, o)[r]();
              };
            },
            _ = function (e, t, r) {
              return function (t, a, i, o) {
                return S['kmac' + e].update(t, a, i, o)[r]();
              };
            },
            z = function (e, t, r, a) {
              for (var i = 0; i < g.length; ++i) {
                var o = g[i];
                e[o] = t(r, a, o);
              }
              return e;
            },
            x = function (e, t) {
              var r = w(e, t, 'hex');
              return (
                (r.create = function () {
                  return new P(e, t, e);
                }),
                (r.update = function (e) {
                  return r.create().update(e);
                }),
                z(r, w, e, t)
              );
            },
            A = [
              {
                name: 'keccak',
                padding: [1, 256, 65536, 16777216],
                bits: m,
                createMethod: x
              },
              {
                name: 'sha3',
                padding: [6, 1536, 393216, 100663296],
                bits: m,
                createMethod: x
              },
              {
                name: 'shake',
                padding: [31, 7936, 2031616, 520093696],
                bits: v,
                createMethod: function (e, t) {
                  var r = k(e, t, 'hex');
                  return (
                    (r.create = function (r) {
                      return new P(e, t, r);
                    }),
                    (r.update = function (e, t) {
                      return r.create(t).update(e);
                    }),
                    z(r, k, e, t)
                  );
                }
              },
              {
                name: 'cshake',
                padding: l,
                bits: v,
                createMethod: function (e, t) {
                  var r = y[e],
                    a = M(e, 0, 'hex');
                  return (
                    (a.create = function (a, i, o) {
                      return i || o
                        ? new P(e, t, a).bytepad([i, o], r)
                        : S['shake' + e].create(a);
                    }),
                    (a.update = function (e, t, r, i) {
                      return a.create(t, r, i).update(e);
                    }),
                    z(a, M, e, t)
                  );
                }
              },
              {
                name: 'kmac',
                padding: l,
                bits: v,
                createMethod: function (e, t) {
                  var r = y[e],
                    a = _(e, 0, 'hex');
                  return (
                    (a.create = function (a, i, o) {
                      return new N(e, t, i)
                        .bytepad(['KMAC', o], r)
                        .bytepad([a], r);
                    }),
                    (a.update = function (e, t, r, i) {
                      return a.create(e, r, i).update(t);
                    }),
                    z(a, _, e, t)
                  );
                }
              }
            ],
            S = {},
            j = [],
            I = 0;
          I < A.length;
          ++I
        )
          for (var q = A[I], E = q.bits, B = 0; B < E.length; ++B) {
            var C = q.name + '_' + E[B];
            if (
              (j.push(C),
              (S[C] = q.createMethod(E[B], q.padding)),
              'sha3' !== q.name)
            ) {
              var R = q.name + E[B];
              j.push(R), (S[R] = S[C]);
            }
          }
        function P(e, t, r) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = t),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (e << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3);
          for (var a = 0; a < 50; ++a) this.s[a] = 0;
        }
        function N(e, t, r) {
          P.call(this, e, t, r);
        }
        (P.prototype.update = function (e) {
          if (this.finalized) throw new Error('finalize already called');
          var t,
            r = typeof e;
          if ('string' !== r) {
            if ('object' !== r) throw new Error(o);
            if (null === e) throw new Error(o);
            if (u && e.constructor === ArrayBuffer) e = new Uint8Array(e);
            else if (!(Array.isArray(e) || (u && ArrayBuffer.isView(e))))
              throw new Error(o);
            t = !0;
          }
          for (
            var a,
              i,
              n = this.blocks,
              s = this.byteCount,
              c = e.length,
              f = this.blockCount,
              d = 0,
              h = this.s;
            d < c;

          ) {
            if (this.reset)
              for (this.reset = !1, n[0] = this.block, a = 1; a < f + 1; ++a)
                n[a] = 0;
            if (t)
              for (a = this.start; d < c && a < s; ++d)
                n[a >> 2] |= e[d] << p[3 & a++];
            else
              for (a = this.start; d < c && a < s; ++d)
                (i = e.charCodeAt(d)) < 128
                  ? (n[a >> 2] |= i << p[3 & a++])
                  : i < 2048
                  ? ((n[a >> 2] |= (192 | (i >> 6)) << p[3 & a++]),
                    (n[a >> 2] |= (128 | (63 & i)) << p[3 & a++]))
                  : i < 55296 || i >= 57344
                  ? ((n[a >> 2] |= (224 | (i >> 12)) << p[3 & a++]),
                    (n[a >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & a++]),
                    (n[a >> 2] |= (128 | (63 & i)) << p[3 & a++]))
                  : ((i =
                      65536 +
                      (((1023 & i) << 10) | (1023 & e.charCodeAt(++d)))),
                    (n[a >> 2] |= (240 | (i >> 18)) << p[3 & a++]),
                    (n[a >> 2] |= (128 | ((i >> 12) & 63)) << p[3 & a++]),
                    (n[a >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & a++]),
                    (n[a >> 2] |= (128 | (63 & i)) << p[3 & a++]));
            if (((this.lastByteIndex = a), a >= s)) {
              for (this.start = a - s, this.block = n[f], a = 0; a < f; ++a)
                h[a] ^= n[a];
              O(h), (this.reset = !0);
            } else this.start = a;
          }
          return this;
        }),
          (P.prototype.encode = function (e, t) {
            var r = 255 & e,
              a = 1,
              i = [r];
            for (r = 255 & (e >>= 8); r > 0; )
              i.unshift(r), (r = 255 & (e >>= 8)), ++a;
            return t ? i.push(a) : i.unshift(a), this.update(i), i.length;
          }),
          (P.prototype.encodeString = function (e) {
            var t,
              r = typeof e;
            if ('string' !== r) {
              if ('object' !== r) throw new Error(o);
              if (null === e) throw new Error(o);
              if (u && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!(Array.isArray(e) || (u && ArrayBuffer.isView(e))))
                throw new Error(o);
              t = !0;
            }
            var a = 0,
              i = e.length;
            if (t) a = i;
            else
              for (var n = 0; n < e.length; ++n) {
                var s = e.charCodeAt(n);
                s < 128
                  ? (a += 1)
                  : s < 2048
                  ? (a += 2)
                  : s < 55296 || s >= 57344
                  ? (a += 3)
                  : ((s =
                      65536 +
                      (((1023 & s) << 10) | (1023 & e.charCodeAt(++n)))),
                    (a += 4));
              }
            return (a += this.encode(8 * a)), this.update(e), a;
          }),
          (P.prototype.bytepad = function (e, t) {
            for (var r = this.encode(t), a = 0; a < e.length; ++a)
              r += this.encodeString(e[a]);
            var i = t - (r % t),
              o = [];
            return (o.length = i), this.update(o), this;
          }),
          (P.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var e = this.blocks,
                t = this.lastByteIndex,
                r = this.blockCount,
                a = this.s;
              if (
                ((e[t >> 2] |= this.padding[3 & t]),
                this.lastByteIndex === this.byteCount)
              )
                for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
              for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) a[t] ^= e[t];
              O(a);
            }
          }),
          (P.prototype.toString = P.prototype.hex = function () {
            this.finalize();
            for (
              var e,
                t = this.blockCount,
                r = this.s,
                a = this.outputBlocks,
                i = this.extraBytes,
                o = 0,
                n = 0,
                s = '';
              n < a;

            ) {
              for (o = 0; o < t && n < a; ++o, ++n)
                (e = r[o]),
                  (s +=
                    h[(e >> 4) & 15] +
                    h[15 & e] +
                    h[(e >> 12) & 15] +
                    h[(e >> 8) & 15] +
                    h[(e >> 20) & 15] +
                    h[(e >> 16) & 15] +
                    h[(e >> 28) & 15] +
                    h[(e >> 24) & 15]);
              n % t == 0 && (O(r), (o = 0));
            }
            return (
              i &&
                ((e = r[o]),
                (s += h[(e >> 4) & 15] + h[15 & e]),
                i > 1 && (s += h[(e >> 12) & 15] + h[(e >> 8) & 15]),
                i > 2 && (s += h[(e >> 20) & 15] + h[(e >> 16) & 15])),
              s
            );
          }),
          (P.prototype.arrayBuffer = function () {
            this.finalize();
            var e,
              t = this.blockCount,
              r = this.s,
              a = this.outputBlocks,
              i = this.extraBytes,
              o = 0,
              n = 0,
              s = this.outputBits >> 3;
            e = i ? new ArrayBuffer((a + 1) << 2) : new ArrayBuffer(s);
            for (var c = new Uint32Array(e); n < a; ) {
              for (o = 0; o < t && n < a; ++o, ++n) c[n] = r[o];
              n % t == 0 && O(r);
            }
            return i && ((c[o] = r[o]), (e = e.slice(0, s))), e;
          }),
          (P.prototype.buffer = P.prototype.arrayBuffer),
          (P.prototype.digest = P.prototype.array = function () {
            this.finalize();
            for (
              var e,
                t,
                r = this.blockCount,
                a = this.s,
                i = this.outputBlocks,
                o = this.extraBytes,
                n = 0,
                s = 0,
                c = [];
              s < i;

            ) {
              for (n = 0; n < r && s < i; ++n, ++s)
                (e = s << 2),
                  (t = a[n]),
                  (c[e] = 255 & t),
                  (c[e + 1] = (t >> 8) & 255),
                  (c[e + 2] = (t >> 16) & 255),
                  (c[e + 3] = (t >> 24) & 255);
              s % r == 0 && O(a);
            }
            return (
              o &&
                ((e = s << 2),
                (t = a[n]),
                (c[e] = 255 & t),
                o > 1 && (c[e + 1] = (t >> 8) & 255),
                o > 2 && (c[e + 2] = (t >> 16) & 255)),
              c
            );
          }),
          (N.prototype = new P()),
          (N.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), P.prototype.finalize.call(this)
            );
          });
        var O = function (e) {
          var t,
            r,
            a,
            i,
            o,
            n,
            s,
            c,
            f,
            d,
            u,
            h,
            l,
            p,
            m,
            v,
            g,
            y,
            w,
            k,
            M,
            _,
            z,
            x,
            A,
            S,
            j,
            I,
            q,
            E,
            B,
            C,
            R,
            P,
            N,
            O,
            L,
            D,
            U,
            T,
            H,
            F,
            Z,
            J,
            K,
            V,
            X,
            W,
            G,
            Y,
            Q,
            $,
            ee,
            te,
            re,
            ae,
            ie,
            oe,
            ne,
            se,
            ce,
            fe,
            de;
          for (a = 0; a < 48; a += 2)
            (i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
              (o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
              (n = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
              (s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
              (c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
              (f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
              (d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
              (u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
              (t =
                (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^
                ((n << 1) | (s >>> 31))),
              (r =
                (l = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^
                ((s << 1) | (n >>> 31))),
              (e[0] ^= t),
              (e[1] ^= r),
              (e[10] ^= t),
              (e[11] ^= r),
              (e[20] ^= t),
              (e[21] ^= r),
              (e[30] ^= t),
              (e[31] ^= r),
              (e[40] ^= t),
              (e[41] ^= r),
              (t = i ^ ((c << 1) | (f >>> 31))),
              (r = o ^ ((f << 1) | (c >>> 31))),
              (e[2] ^= t),
              (e[3] ^= r),
              (e[12] ^= t),
              (e[13] ^= r),
              (e[22] ^= t),
              (e[23] ^= r),
              (e[32] ^= t),
              (e[33] ^= r),
              (e[42] ^= t),
              (e[43] ^= r),
              (t = n ^ ((d << 1) | (u >>> 31))),
              (r = s ^ ((u << 1) | (d >>> 31))),
              (e[4] ^= t),
              (e[5] ^= r),
              (e[14] ^= t),
              (e[15] ^= r),
              (e[24] ^= t),
              (e[25] ^= r),
              (e[34] ^= t),
              (e[35] ^= r),
              (e[44] ^= t),
              (e[45] ^= r),
              (t = c ^ ((h << 1) | (l >>> 31))),
              (r = f ^ ((l << 1) | (h >>> 31))),
              (e[6] ^= t),
              (e[7] ^= r),
              (e[16] ^= t),
              (e[17] ^= r),
              (e[26] ^= t),
              (e[27] ^= r),
              (e[36] ^= t),
              (e[37] ^= r),
              (e[46] ^= t),
              (e[47] ^= r),
              (t = d ^ ((i << 1) | (o >>> 31))),
              (r = u ^ ((o << 1) | (i >>> 31))),
              (e[8] ^= t),
              (e[9] ^= r),
              (e[18] ^= t),
              (e[19] ^= r),
              (e[28] ^= t),
              (e[29] ^= r),
              (e[38] ^= t),
              (e[39] ^= r),
              (e[48] ^= t),
              (e[49] ^= r),
              (p = e[0]),
              (m = e[1]),
              (V = (e[11] << 4) | (e[10] >>> 28)),
              (X = (e[10] << 4) | (e[11] >>> 28)),
              (I = (e[20] << 3) | (e[21] >>> 29)),
              (q = (e[21] << 3) | (e[20] >>> 29)),
              (se = (e[31] << 9) | (e[30] >>> 23)),
              (ce = (e[30] << 9) | (e[31] >>> 23)),
              (F = (e[40] << 18) | (e[41] >>> 14)),
              (Z = (e[41] << 18) | (e[40] >>> 14)),
              (P = (e[2] << 1) | (e[3] >>> 31)),
              (N = (e[3] << 1) | (e[2] >>> 31)),
              (v = (e[13] << 12) | (e[12] >>> 20)),
              (g = (e[12] << 12) | (e[13] >>> 20)),
              (W = (e[22] << 10) | (e[23] >>> 22)),
              (G = (e[23] << 10) | (e[22] >>> 22)),
              (E = (e[33] << 13) | (e[32] >>> 19)),
              (B = (e[32] << 13) | (e[33] >>> 19)),
              (fe = (e[42] << 2) | (e[43] >>> 30)),
              (de = (e[43] << 2) | (e[42] >>> 30)),
              (te = (e[5] << 30) | (e[4] >>> 2)),
              (re = (e[4] << 30) | (e[5] >>> 2)),
              (O = (e[14] << 6) | (e[15] >>> 26)),
              (L = (e[15] << 6) | (e[14] >>> 26)),
              (y = (e[25] << 11) | (e[24] >>> 21)),
              (w = (e[24] << 11) | (e[25] >>> 21)),
              (Y = (e[34] << 15) | (e[35] >>> 17)),
              (Q = (e[35] << 15) | (e[34] >>> 17)),
              (C = (e[45] << 29) | (e[44] >>> 3)),
              (R = (e[44] << 29) | (e[45] >>> 3)),
              (x = (e[6] << 28) | (e[7] >>> 4)),
              (A = (e[7] << 28) | (e[6] >>> 4)),
              (ae = (e[17] << 23) | (e[16] >>> 9)),
              (ie = (e[16] << 23) | (e[17] >>> 9)),
              (D = (e[26] << 25) | (e[27] >>> 7)),
              (U = (e[27] << 25) | (e[26] >>> 7)),
              (k = (e[36] << 21) | (e[37] >>> 11)),
              (M = (e[37] << 21) | (e[36] >>> 11)),
              ($ = (e[47] << 24) | (e[46] >>> 8)),
              (ee = (e[46] << 24) | (e[47] >>> 8)),
              (J = (e[8] << 27) | (e[9] >>> 5)),
              (K = (e[9] << 27) | (e[8] >>> 5)),
              (S = (e[18] << 20) | (e[19] >>> 12)),
              (j = (e[19] << 20) | (e[18] >>> 12)),
              (oe = (e[29] << 7) | (e[28] >>> 25)),
              (ne = (e[28] << 7) | (e[29] >>> 25)),
              (T = (e[38] << 8) | (e[39] >>> 24)),
              (H = (e[39] << 8) | (e[38] >>> 24)),
              (_ = (e[48] << 14) | (e[49] >>> 18)),
              (z = (e[49] << 14) | (e[48] >>> 18)),
              (e[0] = p ^ (~v & y)),
              (e[1] = m ^ (~g & w)),
              (e[10] = x ^ (~S & I)),
              (e[11] = A ^ (~j & q)),
              (e[20] = P ^ (~O & D)),
              (e[21] = N ^ (~L & U)),
              (e[30] = J ^ (~V & W)),
              (e[31] = K ^ (~X & G)),
              (e[40] = te ^ (~ae & oe)),
              (e[41] = re ^ (~ie & ne)),
              (e[2] = v ^ (~y & k)),
              (e[3] = g ^ (~w & M)),
              (e[12] = S ^ (~I & E)),
              (e[13] = j ^ (~q & B)),
              (e[22] = O ^ (~D & T)),
              (e[23] = L ^ (~U & H)),
              (e[32] = V ^ (~W & Y)),
              (e[33] = X ^ (~G & Q)),
              (e[42] = ae ^ (~oe & se)),
              (e[43] = ie ^ (~ne & ce)),
              (e[4] = y ^ (~k & _)),
              (e[5] = w ^ (~M & z)),
              (e[14] = I ^ (~E & C)),
              (e[15] = q ^ (~B & R)),
              (e[24] = D ^ (~T & F)),
              (e[25] = U ^ (~H & Z)),
              (e[34] = W ^ (~Y & $)),
              (e[35] = G ^ (~Q & ee)),
              (e[44] = oe ^ (~se & fe)),
              (e[45] = ne ^ (~ce & de)),
              (e[6] = k ^ (~_ & p)),
              (e[7] = M ^ (~z & m)),
              (e[16] = E ^ (~C & x)),
              (e[17] = B ^ (~R & A)),
              (e[26] = T ^ (~F & P)),
              (e[27] = H ^ (~Z & N)),
              (e[36] = Y ^ (~$ & J)),
              (e[37] = Q ^ (~ee & K)),
              (e[46] = se ^ (~fe & te)),
              (e[47] = ce ^ (~de & re)),
              (e[8] = _ ^ (~p & v)),
              (e[9] = z ^ (~m & g)),
              (e[18] = C ^ (~x & S)),
              (e[19] = R ^ (~A & j)),
              (e[28] = F ^ (~P & O)),
              (e[29] = Z ^ (~N & L)),
              (e[38] = $ ^ (~J & V)),
              (e[39] = ee ^ (~K & X)),
              (e[48] = fe ^ (~te & ae)),
              (e[49] = de ^ (~re & ie)),
              (e[0] ^= b[a]),
              (e[1] ^= b[a + 1]);
        };
        if (f) e.exports = S;
        else {
          for (I = 0; I < j.length; ++I) s[j[I]] = S[j[I]];
          d &&
            (void 0 ===
              (a = function () {
                return S;
              }.call(t, r, t, e)) ||
              (e.exports = a));
        }
      })();
    },
    27993: (e, t, r) => {
      'use strict';
      var a = r(91285),
        i = r(84485),
        o = r(77834).Buffer,
        n = new Array(16);
      function s() {
        i.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878);
      }
      function c(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function f(e, t, r, a, i, o, n) {
        return (c((e + ((t & r) | (~t & a)) + i + o) | 0, n) + t) | 0;
      }
      function d(e, t, r, a, i, o, n) {
        return (c((e + ((t & a) | (r & ~a)) + i + o) | 0, n) + t) | 0;
      }
      function u(e, t, r, a, i, o, n) {
        return (c((e + (t ^ r ^ a) + i + o) | 0, n) + t) | 0;
      }
      function h(e, t, r, a, i, o, n) {
        return (c((e + (r ^ (t | ~a)) + i + o) | 0, n) + t) | 0;
      }
      a(s, i),
        (s.prototype._update = function () {
          for (var e = n, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t);
          var r = this._a,
            a = this._b,
            i = this._c,
            o = this._d;
          (r = f(r, a, i, o, e[0], 3614090360, 7)),
            (o = f(o, r, a, i, e[1], 3905402710, 12)),
            (i = f(i, o, r, a, e[2], 606105819, 17)),
            (a = f(a, i, o, r, e[3], 3250441966, 22)),
            (r = f(r, a, i, o, e[4], 4118548399, 7)),
            (o = f(o, r, a, i, e[5], 1200080426, 12)),
            (i = f(i, o, r, a, e[6], 2821735955, 17)),
            (a = f(a, i, o, r, e[7], 4249261313, 22)),
            (r = f(r, a, i, o, e[8], 1770035416, 7)),
            (o = f(o, r, a, i, e[9], 2336552879, 12)),
            (i = f(i, o, r, a, e[10], 4294925233, 17)),
            (a = f(a, i, o, r, e[11], 2304563134, 22)),
            (r = f(r, a, i, o, e[12], 1804603682, 7)),
            (o = f(o, r, a, i, e[13], 4254626195, 12)),
            (i = f(i, o, r, a, e[14], 2792965006, 17)),
            (r = d(
              r,
              (a = f(a, i, o, r, e[15], 1236535329, 22)),
              i,
              o,
              e[1],
              4129170786,
              5
            )),
            (o = d(o, r, a, i, e[6], 3225465664, 9)),
            (i = d(i, o, r, a, e[11], 643717713, 14)),
            (a = d(a, i, o, r, e[0], 3921069994, 20)),
            (r = d(r, a, i, o, e[5], 3593408605, 5)),
            (o = d(o, r, a, i, e[10], 38016083, 9)),
            (i = d(i, o, r, a, e[15], 3634488961, 14)),
            (a = d(a, i, o, r, e[4], 3889429448, 20)),
            (r = d(r, a, i, o, e[9], 568446438, 5)),
            (o = d(o, r, a, i, e[14], 3275163606, 9)),
            (i = d(i, o, r, a, e[3], 4107603335, 14)),
            (a = d(a, i, o, r, e[8], 1163531501, 20)),
            (r = d(r, a, i, o, e[13], 2850285829, 5)),
            (o = d(o, r, a, i, e[2], 4243563512, 9)),
            (i = d(i, o, r, a, e[7], 1735328473, 14)),
            (r = u(
              r,
              (a = d(a, i, o, r, e[12], 2368359562, 20)),
              i,
              o,
              e[5],
              4294588738,
              4
            )),
            (o = u(o, r, a, i, e[8], 2272392833, 11)),
            (i = u(i, o, r, a, e[11], 1839030562, 16)),
            (a = u(a, i, o, r, e[14], 4259657740, 23)),
            (r = u(r, a, i, o, e[1], 2763975236, 4)),
            (o = u(o, r, a, i, e[4], 1272893353, 11)),
            (i = u(i, o, r, a, e[7], 4139469664, 16)),
            (a = u(a, i, o, r, e[10], 3200236656, 23)),
            (r = u(r, a, i, o, e[13], 681279174, 4)),
            (o = u(o, r, a, i, e[0], 3936430074, 11)),
            (i = u(i, o, r, a, e[3], 3572445317, 16)),
            (a = u(a, i, o, r, e[6], 76029189, 23)),
            (r = u(r, a, i, o, e[9], 3654602809, 4)),
            (o = u(o, r, a, i, e[12], 3873151461, 11)),
            (i = u(i, o, r, a, e[15], 530742520, 16)),
            (r = h(
              r,
              (a = u(a, i, o, r, e[2], 3299628645, 23)),
              i,
              o,
              e[0],
              4096336452,
              6
            )),
            (o = h(o, r, a, i, e[7], 1126891415, 10)),
            (i = h(i, o, r, a, e[14], 2878612391, 15)),
            (a = h(a, i, o, r, e[5], 4237533241, 21)),
            (r = h(r, a, i, o, e[12], 1700485571, 6)),
            (o = h(o, r, a, i, e[3], 2399980690, 10)),
            (i = h(i, o, r, a, e[10], 4293915773, 15)),
            (a = h(a, i, o, r, e[1], 2240044497, 21)),
            (r = h(r, a, i, o, e[8], 1873313359, 6)),
            (o = h(o, r, a, i, e[15], 4264355552, 10)),
            (i = h(i, o, r, a, e[6], 2734768916, 15)),
            (a = h(a, i, o, r, e[13], 1309151649, 21)),
            (r = h(r, a, i, o, e[4], 4149444226, 6)),
            (o = h(o, r, a, i, e[11], 3174756917, 10)),
            (i = h(i, o, r, a, e[2], 718787259, 15)),
            (a = h(a, i, o, r, e[9], 3951481745, 21)),
            (this._a = (this._a + r) | 0),
            (this._b = (this._b + a) | 0),
            (this._c = (this._c + i) | 0),
            (this._d = (this._d + o) | 0);
        }),
        (s.prototype._digest = function () {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var e = o.allocUnsafe(16);
          return (
            e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e
          );
        }),
        (e.exports = s);
    },
    46676: (e, t, r) => {
      var a = r(62197),
        i = r(82745);
      function o(e) {
        this.rand = e || new i.Rand();
      }
      (e.exports = o),
        (o.create = function (e) {
          return new o(e);
        }),
        (o.prototype._randbelow = function (e) {
          var t = e.bitLength(),
            r = Math.ceil(t / 8);
          do {
            var i = new a(this.rand.generate(r));
          } while (i.cmp(e) >= 0);
          return i;
        }),
        (o.prototype._randrange = function (e, t) {
          var r = t.sub(e);
          return e.add(this._randbelow(r));
        }),
        (o.prototype.test = function (e, t, r) {
          var i = e.bitLength(),
            o = a.mont(e),
            n = new a(1).toRed(o);
          t || (t = Math.max(1, (i / 48) | 0));
          for (var s = e.subn(1), c = 0; !s.testn(c); c++);
          for (var f = e.shrn(c), d = s.toRed(o); t > 0; t--) {
            var u = this._randrange(new a(2), s);
            r && r(u);
            var h = u.toRed(o).redPow(f);
            if (0 !== h.cmp(n) && 0 !== h.cmp(d)) {
              for (var l = 1; l < c; l++) {
                if (0 === (h = h.redSqr()).cmp(n)) return !1;
                if (0 === h.cmp(d)) break;
              }
              if (l === c) return !1;
            }
          }
          return !0;
        }),
        (o.prototype.getDivisor = function (e, t) {
          var r = e.bitLength(),
            i = a.mont(e),
            o = new a(1).toRed(i);
          t || (t = Math.max(1, (r / 48) | 0));
          for (var n = e.subn(1), s = 0; !n.testn(s); s++);
          for (var c = e.shrn(s), f = n.toRed(i); t > 0; t--) {
            var d = this._randrange(new a(2), n),
              u = e.gcd(d);
            if (0 !== u.cmpn(1)) return u;
            var h = d.toRed(i).redPow(c);
            if (0 !== h.cmp(o) && 0 !== h.cmp(f)) {
              for (var l = 1; l < s; l++) {
                if (0 === (h = h.redSqr()).cmp(o))
                  return h.fromRed().subn(1).gcd(e);
                if (0 === h.cmp(f)) break;
              }
              if (l === s) return (h = h.redSqr()).fromRed().subn(1).gcd(e);
            }
          }
          return !1;
        });
    },
    51445: (e, t, r) => {
      'use strict';
      var a = r(48834).Buffer,
        i = r(91285),
        o = r(84485),
        n = new Array(16),
        s = [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ],
        c = [
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ],
        f = [
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ],
        d = [
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ],
        u = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        h = [1352829926, 1548603684, 1836072691, 2053994217, 0];
      function l() {
        o.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520);
      }
      function p(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function b(e, t, r, a, i, o, n, s) {
        return (p((e + (t ^ r ^ a) + o + n) | 0, s) + i) | 0;
      }
      function m(e, t, r, a, i, o, n, s) {
        return (p((e + ((t & r) | (~t & a)) + o + n) | 0, s) + i) | 0;
      }
      function v(e, t, r, a, i, o, n, s) {
        return (p((e + ((t | ~r) ^ a) + o + n) | 0, s) + i) | 0;
      }
      function g(e, t, r, a, i, o, n, s) {
        return (p((e + ((t & a) | (r & ~a)) + o + n) | 0, s) + i) | 0;
      }
      function y(e, t, r, a, i, o, n, s) {
        return (p((e + (t ^ (r | ~a)) + o + n) | 0, s) + i) | 0;
      }
      i(l, o),
        (l.prototype._update = function () {
          for (var e = n, t = 0; t < 16; ++t)
            e[t] = this._block.readInt32LE(4 * t);
          for (
            var r = 0 | this._a,
              a = 0 | this._b,
              i = 0 | this._c,
              o = 0 | this._d,
              l = 0 | this._e,
              w = 0 | this._a,
              k = 0 | this._b,
              M = 0 | this._c,
              _ = 0 | this._d,
              z = 0 | this._e,
              x = 0;
            x < 80;
            x += 1
          ) {
            var A, S;
            x < 16
              ? ((A = b(r, a, i, o, l, e[s[x]], u[0], f[x])),
                (S = y(w, k, M, _, z, e[c[x]], h[0], d[x])))
              : x < 32
              ? ((A = m(r, a, i, o, l, e[s[x]], u[1], f[x])),
                (S = g(w, k, M, _, z, e[c[x]], h[1], d[x])))
              : x < 48
              ? ((A = v(r, a, i, o, l, e[s[x]], u[2], f[x])),
                (S = v(w, k, M, _, z, e[c[x]], h[2], d[x])))
              : x < 64
              ? ((A = g(r, a, i, o, l, e[s[x]], u[3], f[x])),
                (S = m(w, k, M, _, z, e[c[x]], h[3], d[x])))
              : ((A = y(r, a, i, o, l, e[s[x]], u[4], f[x])),
                (S = b(w, k, M, _, z, e[c[x]], h[4], d[x]))),
              (r = l),
              (l = o),
              (o = p(i, 10)),
              (i = a),
              (a = A),
              (w = z),
              (z = _),
              (_ = p(M, 10)),
              (M = k),
              (k = S);
          }
          var j = (this._b + i + _) | 0;
          (this._b = (this._c + o + z) | 0),
            (this._c = (this._d + l + w) | 0),
            (this._d = (this._e + r + k) | 0),
            (this._e = (this._a + a + M) | 0),
            (this._a = j);
        }),
        (l.prototype._digest = function () {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var e = a.alloc ? a.alloc(20) : new a(20);
          return (
            e.writeInt32LE(this._a, 0),
            e.writeInt32LE(this._b, 4),
            e.writeInt32LE(this._c, 8),
            e.writeInt32LE(this._d, 12),
            e.writeInt32LE(this._e, 16),
            e
          );
        }),
        (e.exports = l);
    },
    74237: (e, t, r) => {
      const a = r(45387);
      (a.async = r(78739)), (e.exports = a);
    },
    78739: (e, t, r) => {
      const a = r(5634),
        { checkAndInit: i, smix: o } = r(55777);
      e.exports = async function (e, t, r, n, s, c, f, d) {
        const { XY: u, V: h, B32: l, x: p, _X: b, B: m, tickCallback: v } = i(
          e,
          t,
          r,
          n,
          s,
          c,
          f
        );
        for (var g = 0; g < s; g++)
          await o(m, 128 * g * n, n, r, h, u, b, l, p, v, d);
        return a.pbkdf2Sync(e, m, 1, c, 'sha256');
      };
    },
    45387: (e, t, r) => {
      const a = r(5634),
        { checkAndInit: i, smixSync: o } = r(55777);
      e.exports = function (e, t, r, n, s, c, f) {
        const { XY: d, V: u, B32: h, x: l, _X: p, B: b, tickCallback: m } = i(
          e,
          t,
          r,
          n,
          s,
          c,
          f
        );
        for (var v = 0; v < s; v++) o(b, 128 * v * n, n, r, u, d, p, h, l, m);
        return a.pbkdf2Sync(e, b, 1, c, 'sha256');
      };
    },
    55777: (e, t, r) => {
      var a = r(48834).Buffer;
      const i = r(5634),
        o = 2147483647;
      function n(e, t, r, a, i, o, n) {
        let s;
        for (d(e, t + 64 * (2 * a - 1), i, 0, 64), s = 0; s < 2 * a; s++)
          f(e, 64 * s, i, 0, 64), c(i, o, n), d(i, 0, e, r + 64 * s, 64);
        for (s = 0; s < a; s++) d(e, r + 2 * s * 64, e, t + 64 * s, 64);
        for (s = 0; s < a; s++)
          d(e, r + 64 * (2 * s + 1), e, t + 64 * (s + a), 64);
      }
      function s(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function c(e, t, r) {
        let a;
        for (a = 0; a < 16; a++)
          (t[a] = (255 & e[4 * a + 0]) << 0),
            (t[a] |= (255 & e[4 * a + 1]) << 8),
            (t[a] |= (255 & e[4 * a + 2]) << 16),
            (t[a] |= (255 & e[4 * a + 3]) << 24);
        for (d(t, 0, r, 0, 16), a = 8; a > 0; a -= 2)
          (r[4] ^= s(r[0] + r[12], 7)),
            (r[8] ^= s(r[4] + r[0], 9)),
            (r[12] ^= s(r[8] + r[4], 13)),
            (r[0] ^= s(r[12] + r[8], 18)),
            (r[9] ^= s(r[5] + r[1], 7)),
            (r[13] ^= s(r[9] + r[5], 9)),
            (r[1] ^= s(r[13] + r[9], 13)),
            (r[5] ^= s(r[1] + r[13], 18)),
            (r[14] ^= s(r[10] + r[6], 7)),
            (r[2] ^= s(r[14] + r[10], 9)),
            (r[6] ^= s(r[2] + r[14], 13)),
            (r[10] ^= s(r[6] + r[2], 18)),
            (r[3] ^= s(r[15] + r[11], 7)),
            (r[7] ^= s(r[3] + r[15], 9)),
            (r[11] ^= s(r[7] + r[3], 13)),
            (r[15] ^= s(r[11] + r[7], 18)),
            (r[1] ^= s(r[0] + r[3], 7)),
            (r[2] ^= s(r[1] + r[0], 9)),
            (r[3] ^= s(r[2] + r[1], 13)),
            (r[0] ^= s(r[3] + r[2], 18)),
            (r[6] ^= s(r[5] + r[4], 7)),
            (r[7] ^= s(r[6] + r[5], 9)),
            (r[4] ^= s(r[7] + r[6], 13)),
            (r[5] ^= s(r[4] + r[7], 18)),
            (r[11] ^= s(r[10] + r[9], 7)),
            (r[8] ^= s(r[11] + r[10], 9)),
            (r[9] ^= s(r[8] + r[11], 13)),
            (r[10] ^= s(r[9] + r[8], 18)),
            (r[12] ^= s(r[15] + r[14], 7)),
            (r[13] ^= s(r[12] + r[15], 9)),
            (r[14] ^= s(r[13] + r[12], 13)),
            (r[15] ^= s(r[14] + r[13], 18));
        for (a = 0; a < 16; ++a) t[a] = r[a] + t[a];
        for (a = 0; a < 16; a++) {
          let r = 4 * a;
          (e[r + 0] = (t[a] >> 0) & 255),
            (e[r + 1] = (t[a] >> 8) & 255),
            (e[r + 2] = (t[a] >> 16) & 255),
            (e[r + 3] = (t[a] >> 24) & 255);
        }
      }
      function f(e, t, r, a, i) {
        for (let o = 0; o < i; o++) r[a + o] ^= e[t + o];
      }
      function d(e, t, r, i, o) {
        if (a.isBuffer(e) && a.isBuffer(r)) e.copy(r, i, t, t + o);
        else for (; o--; ) r[i++] = e[t++];
      }
      e.exports = {
        checkAndInit: function (e, t, r, n, s, c, f) {
          if (0 === r || 0 != (r & (r - 1)))
            throw Error('N must be > 0 and a power of 2');
          if (r > o / 128 / n) throw Error('Parameter N is too large');
          if (n > o / 128 / s) throw Error('Parameter r is too large');
          let d,
            u = a.alloc(256 * n),
            h = a.alloc(128 * n * r),
            l = new Int32Array(16),
            p = new Int32Array(16),
            b = a.alloc(64),
            m = i.pbkdf2Sync(e, t, 1, 128 * s * n, 'sha256');
          if (f) {
            let e = s * r * 2,
              t = 0;
            d = function () {
              ++t,
                t % 1e3 == 0 &&
                  f({ current: t, total: e, percent: (t / e) * 100 });
            };
          }
          return { XY: u, V: h, B32: l, x: p, _X: b, B: m, tickCallback: d };
        },
        smix: async function (e, t, r, a, i, o, s, c, d, u, h) {
          h = h || 5e3;
          let l,
            p = 128 * r;
          for (e.copy(o, 0, t, t + p), l = 0; l < a; l++)
            o.copy(i, l * p, 0, 0 + p),
              l % h == 0 && (await new Promise((e) => setImmediate(e))),
              n(o, 0, p, r, s, c, d),
              u && u();
          for (l = 0; l < a; l++) {
            let e = 0 + 64 * (2 * r - 1);
            f(i, (o.readUInt32LE(e) & (a - 1)) * p, o, 0, p),
              l % h == 0 && (await new Promise((e) => setImmediate(e))),
              n(o, 0, p, r, s, c, d),
              u && u();
          }
          o.copy(e, t, 0, 0 + p);
        },
        smixSync: function (e, t, r, a, i, o, s, c, d, u) {
          let h,
            l = 128 * r;
          for (e.copy(o, 0, t, t + l), h = 0; h < a; h++)
            o.copy(i, h * l, 0, 0 + l), n(o, 0, l, r, s, c, d), u && u();
          for (h = 0; h < a; h++) {
            let e = 0 + 64 * (2 * r - 1);
            f(i, (o.readUInt32LE(e) & (a - 1)) * l, o, 0, l),
              n(o, 0, l, r, s, c, d),
              u && u();
          }
          o.copy(e, t, 0, 0 + l);
        }
      };
    },
    73327: (e, t, r) => {
      var a = r(77834).Buffer;
      function i(e, t) {
        (this._block = a.alloc(e)),
          (this._finalSize = t),
          (this._blockSize = e),
          (this._len = 0);
      }
      (i.prototype.update = function (e, t) {
        'string' == typeof e && ((t = t || 'utf8'), (e = a.from(e, t)));
        for (
          var r = this._block,
            i = this._blockSize,
            o = e.length,
            n = this._len,
            s = 0;
          s < o;

        ) {
          for (var c = n % i, f = Math.min(o - s, i - c), d = 0; d < f; d++)
            r[c + d] = e[s + d];
          (s += f), (n += f) % i == 0 && this._update(r);
        }
        return (this._len += o), this;
      }),
        (i.prototype.digest = function (e) {
          var t = this._len % this._blockSize;
          (this._block[t] = 128),
            this._block.fill(0, t + 1),
            t >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var r = 8 * this._len;
          if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
          else {
            var a = (4294967295 & r) >>> 0,
              i = (r - a) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8),
              this._block.writeUInt32BE(a, this._blockSize - 4);
          }
          this._update(this._block);
          var o = this._hash();
          return e ? o.toString(e) : o;
        }),
        (i.prototype._update = function () {
          throw new Error('_update must be implemented by subclass');
        }),
        (e.exports = i);
    },
    9065: (e, t, r) => {
      var a = (e.exports = function (e) {
        e = e.toLowerCase();
        var t = a[e];
        if (!t)
          throw new Error(e + ' is not supported (we accept pull requests)');
        return new t();
      });
      (a.sha = r(8820)),
        (a.sha1 = r(17885)),
        (a.sha224 = r(58321)),
        (a.sha256 = r(74424)),
        (a.sha384 = r(90213)),
        (a.sha512 = r(55596));
    },
    8820: (e, t, r) => {
      var a = r(91285),
        i = r(73327),
        o = r(77834).Buffer,
        n = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);
      function c() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function f(e) {
        return (e << 30) | (e >>> 2);
      }
      function d(e, t, r, a) {
        return 0 === e
          ? (t & r) | (~t & a)
          : 2 === e
          ? (t & r) | (t & a) | (r & a)
          : t ^ r ^ a;
      }
      a(c, i),
        (c.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (c.prototype._update = function (e) {
          for (
            var t,
              r = this._w,
              a = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              c = 0 | this._e,
              u = 0;
            u < 16;
            ++u
          )
            r[u] = e.readInt32BE(4 * u);
          for (; u < 80; ++u)
            r[u] = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16];
          for (var h = 0; h < 80; ++h) {
            var l = ~~(h / 20),
              p =
                0 |
                ((((t = a) << 5) | (t >>> 27)) +
                  d(l, i, o, s) +
                  c +
                  r[h] +
                  n[l]);
            (c = s), (s = o), (o = f(i)), (i = a), (a = p);
          }
          (this._a = (a + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (c + this._e) | 0);
        }),
        (c.prototype._hash = function () {
          var e = o.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = c);
    },
    17885: (e, t, r) => {
      var a = r(91285),
        i = r(73327),
        o = r(77834).Buffer,
        n = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);
      function c() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function f(e) {
        return (e << 5) | (e >>> 27);
      }
      function d(e) {
        return (e << 30) | (e >>> 2);
      }
      function u(e, t, r, a) {
        return 0 === e
          ? (t & r) | (~t & a)
          : 2 === e
          ? (t & r) | (t & a) | (r & a)
          : t ^ r ^ a;
      }
      a(c, i),
        (c.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (c.prototype._update = function (e) {
          for (
            var t,
              r = this._w,
              a = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              c = 0 | this._e,
              h = 0;
            h < 16;
            ++h
          )
            r[h] = e.readInt32BE(4 * h);
          for (; h < 80; ++h)
            r[h] =
              ((t = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16]) << 1) |
              (t >>> 31);
          for (var l = 0; l < 80; ++l) {
            var p = ~~(l / 20),
              b = (f(a) + u(p, i, o, s) + c + r[l] + n[p]) | 0;
            (c = s), (s = o), (o = d(i)), (i = a), (a = b);
          }
          (this._a = (a + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (c + this._e) | 0);
        }),
        (c.prototype._hash = function () {
          var e = o.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = c);
    },
    58321: (e, t, r) => {
      var a = r(91285),
        i = r(74424),
        o = r(73327),
        n = r(77834).Buffer,
        s = new Array(64);
      function c() {
        this.init(), (this._w = s), o.call(this, 64, 56);
      }
      a(c, i),
        (c.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (c.prototype._hash = function () {
          var e = n.allocUnsafe(28);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e
          );
        }),
        (e.exports = c);
    },
    74424: (e, t, r) => {
      var a = r(91285),
        i = r(73327),
        o = r(77834).Buffer,
        n = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ],
        s = new Array(64);
      function c() {
        this.init(), (this._w = s), i.call(this, 64, 56);
      }
      function f(e, t, r) {
        return r ^ (e & (t ^ r));
      }
      function d(e, t, r) {
        return (e & t) | (r & (e | t));
      }
      function u(e) {
        return (
          ((e >>> 2) | (e << 30)) ^
          ((e >>> 13) | (e << 19)) ^
          ((e >>> 22) | (e << 10))
        );
      }
      function h(e) {
        return (
          ((e >>> 6) | (e << 26)) ^
          ((e >>> 11) | (e << 21)) ^
          ((e >>> 25) | (e << 7))
        );
      }
      function l(e) {
        return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
      }
      a(c, i),
        (c.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (c.prototype._update = function (e) {
          for (
            var t,
              r = this._w,
              a = 0 | this._a,
              i = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              c = 0 | this._e,
              p = 0 | this._f,
              b = 0 | this._g,
              m = 0 | this._h,
              v = 0;
            v < 16;
            ++v
          )
            r[v] = e.readInt32BE(4 * v);
          for (; v < 64; ++v)
            r[v] =
              0 |
              (((((t = r[v - 2]) >>> 17) | (t << 15)) ^
                ((t >>> 19) | (t << 13)) ^
                (t >>> 10)) +
                r[v - 7] +
                l(r[v - 15]) +
                r[v - 16]);
          for (var g = 0; g < 64; ++g) {
            var y = (m + h(c) + f(c, p, b) + n[g] + r[g]) | 0,
              w = (u(a) + d(a, i, o)) | 0;
            (m = b),
              (b = p),
              (p = c),
              (c = (s + y) | 0),
              (s = o),
              (o = i),
              (i = a),
              (a = (y + w) | 0);
          }
          (this._a = (a + this._a) | 0),
            (this._b = (i + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (c + this._e) | 0),
            (this._f = (p + this._f) | 0),
            (this._g = (b + this._g) | 0),
            (this._h = (m + this._h) | 0);
        }),
        (c.prototype._hash = function () {
          var e = o.allocUnsafe(32);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e.writeInt32BE(this._h, 28),
            e
          );
        }),
        (e.exports = c);
    },
    90213: (e, t, r) => {
      var a = r(91285),
        i = r(55596),
        o = r(73327),
        n = r(77834).Buffer,
        s = new Array(160);
      function c() {
        this.init(), (this._w = s), o.call(this, 128, 112);
      }
      a(c, i),
        (c.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (c.prototype._hash = function () {
          var e = n.allocUnsafe(48);
          function t(t, r, a) {
            e.writeInt32BE(t, a), e.writeInt32BE(r, a + 4);
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            e
          );
        }),
        (e.exports = c);
    },
    55596: (e, t, r) => {
      var a = r(91285),
        i = r(73327),
        o = r(77834).Buffer,
        n = [
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
        ],
        s = new Array(160);
      function c() {
        this.init(), (this._w = s), i.call(this, 128, 112);
      }
      function f(e, t, r) {
        return r ^ (e & (t ^ r));
      }
      function d(e, t, r) {
        return (e & t) | (r & (e | t));
      }
      function u(e, t) {
        return (
          ((e >>> 28) | (t << 4)) ^
          ((t >>> 2) | (e << 30)) ^
          ((t >>> 7) | (e << 25))
        );
      }
      function h(e, t) {
        return (
          ((e >>> 14) | (t << 18)) ^
          ((e >>> 18) | (t << 14)) ^
          ((t >>> 9) | (e << 23))
        );
      }
      function l(e, t) {
        return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
      }
      function p(e, t) {
        return (
          ((e >>> 1) | (t << 31)) ^
          ((e >>> 8) | (t << 24)) ^
          ((e >>> 7) | (t << 25))
        );
      }
      function b(e, t) {
        return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
      }
      function m(e, t) {
        return (
          ((e >>> 19) | (t << 13)) ^
          ((t >>> 29) | (e << 3)) ^
          ((e >>> 6) | (t << 26))
        );
      }
      function v(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0;
      }
      a(c, i),
        (c.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (c.prototype._update = function (e) {
          for (
            var t = this._w,
              r = 0 | this._ah,
              a = 0 | this._bh,
              i = 0 | this._ch,
              o = 0 | this._dh,
              s = 0 | this._eh,
              c = 0 | this._fh,
              g = 0 | this._gh,
              y = 0 | this._hh,
              w = 0 | this._al,
              k = 0 | this._bl,
              M = 0 | this._cl,
              _ = 0 | this._dl,
              z = 0 | this._el,
              x = 0 | this._fl,
              A = 0 | this._gl,
              S = 0 | this._hl,
              j = 0;
            j < 32;
            j += 2
          )
            (t[j] = e.readInt32BE(4 * j)),
              (t[j + 1] = e.readInt32BE(4 * j + 4));
          for (; j < 160; j += 2) {
            var I = t[j - 30],
              q = t[j - 30 + 1],
              E = l(I, q),
              B = p(q, I),
              C = b((I = t[j - 4]), (q = t[j - 4 + 1])),
              R = m(q, I),
              P = t[j - 14],
              N = t[j - 14 + 1],
              O = t[j - 32],
              L = t[j - 32 + 1],
              D = (B + N) | 0,
              U = (E + P + v(D, B)) | 0;
            (U =
              ((U = (U + C + v((D = (D + R) | 0), R)) | 0) +
                O +
                v((D = (D + L) | 0), L)) |
              0),
              (t[j] = U),
              (t[j + 1] = D);
          }
          for (var T = 0; T < 160; T += 2) {
            (U = t[T]), (D = t[T + 1]);
            var H = d(r, a, i),
              F = d(w, k, M),
              Z = u(r, w),
              J = u(w, r),
              K = h(s, z),
              V = h(z, s),
              X = n[T],
              W = n[T + 1],
              G = f(s, c, g),
              Y = f(z, x, A),
              Q = (S + V) | 0,
              $ = (y + K + v(Q, S)) | 0;
            $ =
              (($ =
                (($ = ($ + G + v((Q = (Q + Y) | 0), Y)) | 0) +
                  X +
                  v((Q = (Q + W) | 0), W)) |
                0) +
                U +
                v((Q = (Q + D) | 0), D)) |
              0;
            var ee = (J + F) | 0,
              te = (Z + H + v(ee, J)) | 0;
            (y = g),
              (S = A),
              (g = c),
              (A = x),
              (c = s),
              (x = z),
              (s = (o + $ + v((z = (_ + Q) | 0), _)) | 0),
              (o = i),
              (_ = M),
              (i = a),
              (M = k),
              (a = r),
              (k = w),
              (r = ($ + te + v((w = (Q + ee) | 0), Q)) | 0);
          }
          (this._al = (this._al + w) | 0),
            (this._bl = (this._bl + k) | 0),
            (this._cl = (this._cl + M) | 0),
            (this._dl = (this._dl + _) | 0),
            (this._el = (this._el + z) | 0),
            (this._fl = (this._fl + x) | 0),
            (this._gl = (this._gl + A) | 0),
            (this._hl = (this._hl + S) | 0),
            (this._ah = (this._ah + r + v(this._al, w)) | 0),
            (this._bh = (this._bh + a + v(this._bl, k)) | 0),
            (this._ch = (this._ch + i + v(this._cl, M)) | 0),
            (this._dh = (this._dh + o + v(this._dl, _)) | 0),
            (this._eh = (this._eh + s + v(this._el, z)) | 0),
            (this._fh = (this._fh + c + v(this._fl, x)) | 0),
            (this._gh = (this._gh + g + v(this._gl, A)) | 0),
            (this._hh = (this._hh + y + v(this._hl, S)) | 0);
        }),
        (c.prototype._hash = function () {
          var e = o.allocUnsafe(64);
          function t(t, r, a) {
            e.writeInt32BE(t, a), e.writeInt32BE(r, a + 4);
          }
          return (
            t(this._ah, this._al, 0),
            t(this._bh, this._bl, 8),
            t(this._ch, this._cl, 16),
            t(this._dh, this._dl, 24),
            t(this._eh, this._el, 32),
            t(this._fh, this._fl, 40),
            t(this._gh, this._gl, 48),
            t(this._hh, this._hl, 56),
            e
          );
        }),
        (e.exports = c);
    },
    77567: (e, t, r) => {
      e.exports = { h32: r(37883), h64: r(63344) };
    },
    37883: (e, t, r) => {
      var a = r(48834).Buffer,
        i = r(42554).UINT32;
      i.prototype.xxh_update = function (e, t) {
        var r,
          a,
          i = n._low,
          s = n._high;
        (r = (a = e * i) >>> 16), (r += t * i), (r &= 65535), (r += e * s);
        var c = this._low + (65535 & a),
          f = c >>> 16,
          d = ((f += this._high + (65535 & r)) << 16) | (65535 & c);
        (f = (d = (d << 13) | (d >>> 19)) >>> 16),
          (r = (a = (c = 65535 & d) * (i = o._low)) >>> 16),
          (r += f * i),
          (r &= 65535),
          (r += c * (s = o._high)),
          (this._low = 65535 & a),
          (this._high = 65535 & r);
      };
      var o = i('2654435761'),
        n = i('2246822519'),
        s = i('3266489917'),
        c = i('668265263'),
        f = i('374761393');
      function d() {
        return 2 == arguments.length
          ? new d(arguments[1]).update(arguments[0]).digest()
          : this instanceof d
          ? void u.call(this, arguments[0])
          : new d(arguments[0]);
      }
      function u(e) {
        return (
          (this.seed = e instanceof i ? e.clone() : i(e)),
          (this.v1 = this.seed.clone().add(o).add(n)),
          (this.v2 = this.seed.clone().add(n)),
          (this.v3 = this.seed.clone()),
          (this.v4 = this.seed.clone().subtract(o)),
          (this.total_len = 0),
          (this.memsize = 0),
          (this.memory = null),
          this
        );
      }
      (d.prototype.init = u),
        (d.prototype.update = function (e) {
          var t,
            r = 'string' == typeof e;
          r &&
            ((e = (function (e) {
              for (var t = [], r = 0, a = e.length; r < a; r++) {
                var i = e.charCodeAt(r);
                i < 128
                  ? t.push(i)
                  : i < 2048
                  ? t.push(192 | (i >> 6), 128 | (63 & i))
                  : i < 55296 || i >= 57344
                  ? t.push(
                      224 | (i >> 12),
                      128 | ((i >> 6) & 63),
                      128 | (63 & i)
                    )
                  : (r++,
                    (i =
                      65536 + (((1023 & i) << 10) | (1023 & e.charCodeAt(r)))),
                    t.push(
                      240 | (i >> 18),
                      128 | ((i >> 12) & 63),
                      128 | ((i >> 6) & 63),
                      128 | (63 & i)
                    ));
              }
              return new Uint8Array(t);
            })(e)),
            (r = !1),
            (t = !0)),
            'undefined' != typeof ArrayBuffer &&
              e instanceof ArrayBuffer &&
              ((t = !0), (e = new Uint8Array(e)));
          var i = 0,
            o = e.length,
            n = i + o;
          if (0 == o) return this;
          if (
            ((this.total_len += o),
            0 == this.memsize &&
              (this.memory = r ? '' : t ? new Uint8Array(16) : new a(16)),
            this.memsize + o < 16)
          )
            return (
              r
                ? (this.memory += e)
                : t
                ? this.memory.set(e.subarray(0, o), this.memsize)
                : e.copy(this.memory, this.memsize, 0, o),
              (this.memsize += o),
              this
            );
          if (this.memsize > 0) {
            r
              ? (this.memory += e.slice(0, 16 - this.memsize))
              : t
              ? this.memory.set(e.subarray(0, 16 - this.memsize), this.memsize)
              : e.copy(this.memory, this.memsize, 0, 16 - this.memsize);
            var s = 0;
            r
              ? (this.v1.xxh_update(
                  (this.memory.charCodeAt(s + 1) << 8) |
                    this.memory.charCodeAt(s),
                  (this.memory.charCodeAt(s + 3) << 8) |
                    this.memory.charCodeAt(s + 2)
                ),
                (s += 4),
                this.v2.xxh_update(
                  (this.memory.charCodeAt(s + 1) << 8) |
                    this.memory.charCodeAt(s),
                  (this.memory.charCodeAt(s + 3) << 8) |
                    this.memory.charCodeAt(s + 2)
                ),
                (s += 4),
                this.v3.xxh_update(
                  (this.memory.charCodeAt(s + 1) << 8) |
                    this.memory.charCodeAt(s),
                  (this.memory.charCodeAt(s + 3) << 8) |
                    this.memory.charCodeAt(s + 2)
                ),
                (s += 4),
                this.v4.xxh_update(
                  (this.memory.charCodeAt(s + 1) << 8) |
                    this.memory.charCodeAt(s),
                  (this.memory.charCodeAt(s + 3) << 8) |
                    this.memory.charCodeAt(s + 2)
                ))
              : (this.v1.xxh_update(
                  (this.memory[s + 1] << 8) | this.memory[s],
                  (this.memory[s + 3] << 8) | this.memory[s + 2]
                ),
                (s += 4),
                this.v2.xxh_update(
                  (this.memory[s + 1] << 8) | this.memory[s],
                  (this.memory[s + 3] << 8) | this.memory[s + 2]
                ),
                (s += 4),
                this.v3.xxh_update(
                  (this.memory[s + 1] << 8) | this.memory[s],
                  (this.memory[s + 3] << 8) | this.memory[s + 2]
                ),
                (s += 4),
                this.v4.xxh_update(
                  (this.memory[s + 1] << 8) | this.memory[s],
                  (this.memory[s + 3] << 8) | this.memory[s + 2]
                )),
              (i += 16 - this.memsize),
              (this.memsize = 0),
              r && (this.memory = '');
          }
          if (i <= n - 16) {
            var c = n - 16;
            do {
              r
                ? (this.v1.xxh_update(
                    (e.charCodeAt(i + 1) << 8) | e.charCodeAt(i),
                    (e.charCodeAt(i + 3) << 8) | e.charCodeAt(i + 2)
                  ),
                  (i += 4),
                  this.v2.xxh_update(
                    (e.charCodeAt(i + 1) << 8) | e.charCodeAt(i),
                    (e.charCodeAt(i + 3) << 8) | e.charCodeAt(i + 2)
                  ),
                  (i += 4),
                  this.v3.xxh_update(
                    (e.charCodeAt(i + 1) << 8) | e.charCodeAt(i),
                    (e.charCodeAt(i + 3) << 8) | e.charCodeAt(i + 2)
                  ),
                  (i += 4),
                  this.v4.xxh_update(
                    (e.charCodeAt(i + 1) << 8) | e.charCodeAt(i),
                    (e.charCodeAt(i + 3) << 8) | e.charCodeAt(i + 2)
                  ))
                : (this.v1.xxh_update(
                    (e[i + 1] << 8) | e[i],
                    (e[i + 3] << 8) | e[i + 2]
                  ),
                  (i += 4),
                  this.v2.xxh_update(
                    (e[i + 1] << 8) | e[i],
                    (e[i + 3] << 8) | e[i + 2]
                  ),
                  (i += 4),
                  this.v3.xxh_update(
                    (e[i + 1] << 8) | e[i],
                    (e[i + 3] << 8) | e[i + 2]
                  ),
                  (i += 4),
                  this.v4.xxh_update(
                    (e[i + 1] << 8) | e[i],
                    (e[i + 3] << 8) | e[i + 2]
                  )),
                (i += 4);
            } while (i <= c);
          }
          return (
            i < n &&
              (r
                ? (this.memory += e.slice(i))
                : t
                ? this.memory.set(e.subarray(i, n), this.memsize)
                : e.copy(this.memory, this.memsize, i, n),
              (this.memsize = n - i)),
            this
          );
        }),
        (d.prototype.digest = function () {
          var e,
            t,
            r = this.memory,
            a = 'string' == typeof r,
            d = 0,
            u = this.memsize,
            h = new i();
          for (
            (e =
              this.total_len >= 16
                ? this.v1
                    .rotl(1)
                    .add(
                      this.v2
                        .rotl(7)
                        .add(this.v3.rotl(12).add(this.v4.rotl(18)))
                    )
                : this.seed.clone().add(f)).add(h.fromNumber(this.total_len));
            d <= u - 4;

          )
            a
              ? h.fromBits(
                  (r.charCodeAt(d + 1) << 8) | r.charCodeAt(d),
                  (r.charCodeAt(d + 3) << 8) | r.charCodeAt(d + 2)
                )
              : h.fromBits((r[d + 1] << 8) | r[d], (r[d + 3] << 8) | r[d + 2]),
              e.add(h.multiply(s)).rotl(17).multiply(c),
              (d += 4);
          for (; d < u; )
            h.fromBits(a ? r.charCodeAt(d++) : r[d++], 0),
              e.add(h.multiply(f)).rotl(11).multiply(o);
          return (
            (t = e.clone().shiftRight(15)),
            e.xor(t).multiply(n),
            (t = e.clone().shiftRight(13)),
            e.xor(t).multiply(s),
            (t = e.clone().shiftRight(16)),
            e.xor(t),
            this.init(this.seed),
            e
          );
        }),
        (e.exports = d);
    },
    63344: (e, t, r) => {
      var a = r(48834).Buffer,
        i = r(42554).UINT64,
        o = i('11400714785074694791'),
        n = i('14029467366897019727'),
        s = i('1609587929392839161'),
        c = i('9650029242287828579'),
        f = i('2870177450012600261');
      function d() {
        return 2 == arguments.length
          ? new d(arguments[1]).update(arguments[0]).digest()
          : this instanceof d
          ? void u.call(this, arguments[0])
          : new d(arguments[0]);
      }
      function u(e) {
        return (
          (this.seed = e instanceof i ? e.clone() : i(e)),
          (this.v1 = this.seed.clone().add(o).add(n)),
          (this.v2 = this.seed.clone().add(n)),
          (this.v3 = this.seed.clone()),
          (this.v4 = this.seed.clone().subtract(o)),
          (this.total_len = 0),
          (this.memsize = 0),
          (this.memory = null),
          this
        );
      }
      (d.prototype.init = u),
        (d.prototype.update = function (e) {
          var t,
            r = 'string' == typeof e;
          r &&
            ((e = (function (e) {
              for (var t = [], r = 0, a = e.length; r < a; r++) {
                var i = e.charCodeAt(r);
                i < 128
                  ? t.push(i)
                  : i < 2048
                  ? t.push(192 | (i >> 6), 128 | (63 & i))
                  : i < 55296 || i >= 57344
                  ? t.push(
                      224 | (i >> 12),
                      128 | ((i >> 6) & 63),
                      128 | (63 & i)
                    )
                  : (r++,
                    (i =
                      65536 + (((1023 & i) << 10) | (1023 & e.charCodeAt(r)))),
                    t.push(
                      240 | (i >> 18),
                      128 | ((i >> 12) & 63),
                      128 | ((i >> 6) & 63),
                      128 | (63 & i)
                    ));
              }
              return new Uint8Array(t);
            })(e)),
            (r = !1),
            (t = !0)),
            'undefined' != typeof ArrayBuffer &&
              e instanceof ArrayBuffer &&
              ((t = !0), (e = new Uint8Array(e)));
          var s = 0,
            c = e.length,
            f = s + c;
          if (0 == c) return this;
          if (
            ((this.total_len += c),
            0 == this.memsize &&
              (this.memory = r ? '' : t ? new Uint8Array(32) : new a(32)),
            this.memsize + c < 32)
          )
            return (
              r
                ? (this.memory += e)
                : t
                ? this.memory.set(e.subarray(0, c), this.memsize)
                : e.copy(this.memory, this.memsize, 0, c),
              (this.memsize += c),
              this
            );
          if (this.memsize > 0) {
            r
              ? (this.memory += e.slice(0, 32 - this.memsize))
              : t
              ? this.memory.set(e.subarray(0, 32 - this.memsize), this.memsize)
              : e.copy(this.memory, this.memsize, 0, 32 - this.memsize);
            var d = 0;
            r
              ? ((h = i(
                  (this.memory.charCodeAt(d + 1) << 8) |
                    this.memory.charCodeAt(d),
                  (this.memory.charCodeAt(d + 3) << 8) |
                    this.memory.charCodeAt(d + 2),
                  (this.memory.charCodeAt(d + 5) << 8) |
                    this.memory.charCodeAt(d + 4),
                  (this.memory.charCodeAt(d + 7) << 8) |
                    this.memory.charCodeAt(d + 6)
                )),
                this.v1.add(h.multiply(n)).rotl(31).multiply(o),
                (d += 8),
                (h = i(
                  (this.memory.charCodeAt(d + 1) << 8) |
                    this.memory.charCodeAt(d),
                  (this.memory.charCodeAt(d + 3) << 8) |
                    this.memory.charCodeAt(d + 2),
                  (this.memory.charCodeAt(d + 5) << 8) |
                    this.memory.charCodeAt(d + 4),
                  (this.memory.charCodeAt(d + 7) << 8) |
                    this.memory.charCodeAt(d + 6)
                )),
                this.v2.add(h.multiply(n)).rotl(31).multiply(o),
                (d += 8),
                (h = i(
                  (this.memory.charCodeAt(d + 1) << 8) |
                    this.memory.charCodeAt(d),
                  (this.memory.charCodeAt(d + 3) << 8) |
                    this.memory.charCodeAt(d + 2),
                  (this.memory.charCodeAt(d + 5) << 8) |
                    this.memory.charCodeAt(d + 4),
                  (this.memory.charCodeAt(d + 7) << 8) |
                    this.memory.charCodeAt(d + 6)
                )),
                this.v3.add(h.multiply(n)).rotl(31).multiply(o),
                (d += 8),
                (h = i(
                  (this.memory.charCodeAt(d + 1) << 8) |
                    this.memory.charCodeAt(d),
                  (this.memory.charCodeAt(d + 3) << 8) |
                    this.memory.charCodeAt(d + 2),
                  (this.memory.charCodeAt(d + 5) << 8) |
                    this.memory.charCodeAt(d + 4),
                  (this.memory.charCodeAt(d + 7) << 8) |
                    this.memory.charCodeAt(d + 6)
                )),
                this.v4.add(h.multiply(n)).rotl(31).multiply(o))
              : ((h = i(
                  (this.memory[d + 1] << 8) | this.memory[d],
                  (this.memory[d + 3] << 8) | this.memory[d + 2],
                  (this.memory[d + 5] << 8) | this.memory[d + 4],
                  (this.memory[d + 7] << 8) | this.memory[d + 6]
                )),
                this.v1.add(h.multiply(n)).rotl(31).multiply(o),
                (d += 8),
                (h = i(
                  (this.memory[d + 1] << 8) | this.memory[d],
                  (this.memory[d + 3] << 8) | this.memory[d + 2],
                  (this.memory[d + 5] << 8) | this.memory[d + 4],
                  (this.memory[d + 7] << 8) | this.memory[d + 6]
                )),
                this.v2.add(h.multiply(n)).rotl(31).multiply(o),
                (d += 8),
                (h = i(
                  (this.memory[d + 1] << 8) | this.memory[d],
                  (this.memory[d + 3] << 8) | this.memory[d + 2],
                  (this.memory[d + 5] << 8) | this.memory[d + 4],
                  (this.memory[d + 7] << 8) | this.memory[d + 6]
                )),
                this.v3.add(h.multiply(n)).rotl(31).multiply(o),
                (d += 8),
                (h = i(
                  (this.memory[d + 1] << 8) | this.memory[d],
                  (this.memory[d + 3] << 8) | this.memory[d + 2],
                  (this.memory[d + 5] << 8) | this.memory[d + 4],
                  (this.memory[d + 7] << 8) | this.memory[d + 6]
                )),
                this.v4.add(h.multiply(n)).rotl(31).multiply(o)),
              (s += 32 - this.memsize),
              (this.memsize = 0),
              r && (this.memory = '');
          }
          if (s <= f - 32) {
            var u = f - 32;
            do {
              var h;
              r
                ? ((h = i(
                    (e.charCodeAt(s + 1) << 8) | e.charCodeAt(s),
                    (e.charCodeAt(s + 3) << 8) | e.charCodeAt(s + 2),
                    (e.charCodeAt(s + 5) << 8) | e.charCodeAt(s + 4),
                    (e.charCodeAt(s + 7) << 8) | e.charCodeAt(s + 6)
                  )),
                  this.v1.add(h.multiply(n)).rotl(31).multiply(o),
                  (s += 8),
                  (h = i(
                    (e.charCodeAt(s + 1) << 8) | e.charCodeAt(s),
                    (e.charCodeAt(s + 3) << 8) | e.charCodeAt(s + 2),
                    (e.charCodeAt(s + 5) << 8) | e.charCodeAt(s + 4),
                    (e.charCodeAt(s + 7) << 8) | e.charCodeAt(s + 6)
                  )),
                  this.v2.add(h.multiply(n)).rotl(31).multiply(o),
                  (s += 8),
                  (h = i(
                    (e.charCodeAt(s + 1) << 8) | e.charCodeAt(s),
                    (e.charCodeAt(s + 3) << 8) | e.charCodeAt(s + 2),
                    (e.charCodeAt(s + 5) << 8) | e.charCodeAt(s + 4),
                    (e.charCodeAt(s + 7) << 8) | e.charCodeAt(s + 6)
                  )),
                  this.v3.add(h.multiply(n)).rotl(31).multiply(o),
                  (s += 8),
                  (h = i(
                    (e.charCodeAt(s + 1) << 8) | e.charCodeAt(s),
                    (e.charCodeAt(s + 3) << 8) | e.charCodeAt(s + 2),
                    (e.charCodeAt(s + 5) << 8) | e.charCodeAt(s + 4),
                    (e.charCodeAt(s + 7) << 8) | e.charCodeAt(s + 6)
                  )),
                  this.v4.add(h.multiply(n)).rotl(31).multiply(o))
                : ((h = i(
                    (e[s + 1] << 8) | e[s],
                    (e[s + 3] << 8) | e[s + 2],
                    (e[s + 5] << 8) | e[s + 4],
                    (e[s + 7] << 8) | e[s + 6]
                  )),
                  this.v1.add(h.multiply(n)).rotl(31).multiply(o),
                  (h = i(
                    (e[(s += 8) + 1] << 8) | e[s],
                    (e[s + 3] << 8) | e[s + 2],
                    (e[s + 5] << 8) | e[s + 4],
                    (e[s + 7] << 8) | e[s + 6]
                  )),
                  this.v2.add(h.multiply(n)).rotl(31).multiply(o),
                  (h = i(
                    (e[(s += 8) + 1] << 8) | e[s],
                    (e[s + 3] << 8) | e[s + 2],
                    (e[s + 5] << 8) | e[s + 4],
                    (e[s + 7] << 8) | e[s + 6]
                  )),
                  this.v3.add(h.multiply(n)).rotl(31).multiply(o),
                  (h = i(
                    (e[(s += 8) + 1] << 8) | e[s],
                    (e[s + 3] << 8) | e[s + 2],
                    (e[s + 5] << 8) | e[s + 4],
                    (e[s + 7] << 8) | e[s + 6]
                  )),
                  this.v4.add(h.multiply(n)).rotl(31).multiply(o)),
                (s += 8);
            } while (s <= u);
          }
          return (
            s < f &&
              (r
                ? (this.memory += e.slice(s))
                : t
                ? this.memory.set(e.subarray(s, f), this.memsize)
                : e.copy(this.memory, this.memsize, s, f),
              (this.memsize = f - s)),
            this
          );
        }),
        (d.prototype.digest = function () {
          var e,
            t,
            r = this.memory,
            a = 'string' == typeof r,
            d = 0,
            u = this.memsize,
            h = new i();
          for (
            this.total_len >= 32
              ? ((e = this.v1.clone().rotl(1)).add(this.v2.clone().rotl(7)),
                e.add(this.v3.clone().rotl(12)),
                e.add(this.v4.clone().rotl(18)),
                e.xor(this.v1.multiply(n).rotl(31).multiply(o)),
                e.multiply(o).add(c),
                e.xor(this.v2.multiply(n).rotl(31).multiply(o)),
                e.multiply(o).add(c),
                e.xor(this.v3.multiply(n).rotl(31).multiply(o)),
                e.multiply(o).add(c),
                e.xor(this.v4.multiply(n).rotl(31).multiply(o)),
                e.multiply(o).add(c))
              : (e = this.seed.clone().add(f)),
              e.add(h.fromNumber(this.total_len));
            d <= u - 8;

          )
            a
              ? h.fromBits(
                  (r.charCodeAt(d + 1) << 8) | r.charCodeAt(d),
                  (r.charCodeAt(d + 3) << 8) | r.charCodeAt(d + 2),
                  (r.charCodeAt(d + 5) << 8) | r.charCodeAt(d + 4),
                  (r.charCodeAt(d + 7) << 8) | r.charCodeAt(d + 6)
                )
              : h.fromBits(
                  (r[d + 1] << 8) | r[d],
                  (r[d + 3] << 8) | r[d + 2],
                  (r[d + 5] << 8) | r[d + 4],
                  (r[d + 7] << 8) | r[d + 6]
                ),
              h.multiply(n).rotl(31).multiply(o),
              e.xor(h).rotl(27).multiply(o).add(c),
              (d += 8);
          for (
            d + 4 <= u &&
            (a
              ? h.fromBits(
                  (r.charCodeAt(d + 1) << 8) | r.charCodeAt(d),
                  (r.charCodeAt(d + 3) << 8) | r.charCodeAt(d + 2),
                  0,
                  0
                )
              : h.fromBits(
                  (r[d + 1] << 8) | r[d],
                  (r[d + 3] << 8) | r[d + 2],
                  0,
                  0
                ),
            e.xor(h.multiply(o)).rotl(23).multiply(n).add(s),
            (d += 4));
            d < u;

          )
            h.fromBits(a ? r.charCodeAt(d++) : r[d++], 0, 0, 0),
              e.xor(h.multiply(f)).rotl(11).multiply(o);
          return (
            (t = e.clone().shiftRight(33)),
            e.xor(t).multiply(n),
            (t = e.clone().shiftRight(29)),
            e.xor(t).multiply(s),
            (t = e.clone().shiftRight(32)),
            e.xor(t),
            this.init(this.seed),
            e
          );
        }),
        (e.exports = d);
    }
  }
]);
