

export default {
  data () {
    return {
      publicKey: `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIGs2dvgRPJl/zMLAUeZgLP2ouCvuXcg
65LI3KsUDl40UwATyxaX2ZxgytcrGFk8KRwcRiexEhbRlytedqbKVsMCAwEAAQ==
-----END PUBLIC KEY-----`,
      privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIBOQIBAAJBAIGs2dvgRPJl/zMLAUeZgLP2ouCvuXcg65LI3KsUDl40UwATyxaX
2ZxgytcrGFk8KRwcRiexEhbRlytedqbKVsMCAwEAAQJAdg98Dc5il1o7fSpQ0PI1
liM/aVczgP1M3MfY+Dz7U9H5zzFHX3zasyFTu505i4Ia75DEU3Ik5MNAJsajC7Li
KQIhANTmbAIJK0H5VPqYMvNKIPKcFcNghQzM5O6WCBx/Rff3AiEAm+1JhWfMQIXo
zcH7yn4QWg6EjpfUK/Es3sWgp8seHJUCIACtz3BeOR4XvnaiH595AAvmBYe++g2l
ZaGBJvt4SG/XAiA2h4IppEYa3nmu00MB6po/VEppL5GkmGAvu/9WDsOGDQIgJdXi
+Bf8g9tQUSeiK6kGqKeZfbA49Qot3NWxA/VxGXI=
-----END RSA PRIVATE KEY-----`,
      jsencrypt: () => import('jsencrypt')
    }
  },
  methods: {
    /* 获取加密密码公钥 */
    async  _getPublicKey (password) {
      let { JSEncrypt } = await this.jsencrypt()
      let encryptor = new JSEncrypt();
      encryptor.setPublicKey(this.publicKey)
      return encryptor.encrypt(password)
    },
    async _parsingKey (password) {
      let { JSEncrypt } = await this.jsencrypt()
      let decryptor = new JSEncrypt();
      decryptor.setPrivateKey(this.privateKey);
      return decryptor.decrypt(password)
    }
  }
}
