## @jaccomeijer/oauth2-grants 6.29.0

## 6.29.0 (2021-08-05)


### Features

* add optional flow field to code-token ([f2c2017](https://github.com/jaccomeijer/oauth2-grants/commit/f2c20170e2fb43b95907709098e7a10819cd5b70))
* split authorize response into two separate methods, get and persist ([e54b219](https://github.com/jaccomeijer/oauth2-grants/commit/e54b2192e856b84c0df84b21b9d069797f1eadf1))


### Bug Fixes

* don't multiply getTime() by 1000 ([0e5cf96](https://github.com/jaccomeijer/oauth2-grants/commit/0e5cf96018c0ee2a4d101aa5e9a90b80727818f5))


### Code Refactoring

* create token body on once place only ([4372610](https://github.com/jaccomeijer/oauth2-grants/commit/4372610bede82e9943d59efec18e3c5474e0ed75))
* export authorize and token endpoints separately ([50bfed5](https://github.com/jaccomeijer/oauth2-grants/commit/50bfed5e378dd0d9f293f9f7d25f029b2586eb5d))
* remove context and use apis ([60ab2e3](https://github.com/jaccomeijer/oauth2-grants/commit/60ab2e398999267a24159cb597d0343ec2f4f226))
* renam to modelberry ([c31a75f](https://github.com/jaccomeijer/oauth2-grants/commit/c31a75f217e47c512d45695e9f137e04cf314ba3))
* rename tsconfig.packages.json into tsconfig.json ([051a5fb](https://github.com/jaccomeijer/oauth2-grants/commit/051a5fbedabe06fe150489a6402fd0ac2b71f134))


### Commits

* add context ([c8a082c](https://github.com/jaccomeijer/oauth2-grants/commit/c8a082c095cf3848024a9b7e065f675c25a54a24))
* add jwt type ([402b6c8](https://github.com/jaccomeijer/oauth2-grants/commit/402b6c82d380f079e5e9d78efff720ecaf28c5fe))
* add types for possible other methods to api ([636a5d4](https://github.com/jaccomeijer/oauth2-grants/commit/636a5d4a8194dccf0ec352f8020ee67c8fc50fe5))
* added filter valid scopes ([105b260](https://github.com/jaccomeijer/oauth2-grants/commit/105b26052eb577a437018b3606610eda01693774))
* allow flowState to contain sub objects ([130befe](https://github.com/jaccomeijer/oauth2-grants/commit/130befee02eec890990599295e06d1004b93142c))
* allow scopes as input ([54bc1b6](https://github.com/jaccomeijer/oauth2-grants/commit/54bc1b6c51afb77c1bae575e11f730557e756bb6))
* always add id-token ([977e06a](https://github.com/jaccomeijer/oauth2-grants/commit/977e06a283ded3a8f7dd4850c2f863dee9bdf96c))
* better user handling by authorize endpoint ([b9203f0](https://github.com/jaccomeijer/oauth2-grants/commit/b9203f0c89aea0d539b27a30be9766b0f975b364))
* check for rediret uri origin only ([066a850](https://github.com/jaccomeijer/oauth2-grants/commit/066a8500b00806d907d423701d5b530e2c17aa7d))
* collection api fixes ([b271523](https://github.com/jaccomeijer/oauth2-grants/commit/b2715235dcc4728212114fe190b087b7530b35bd))
* fix audience claim ([2a35d12](https://github.com/jaccomeijer/oauth2-grants/commit/2a35d12ffc0e18167b462012c5b0ffb4c2558da0))
* fix auth token revoke ([97ce8c6](https://github.com/jaccomeijer/oauth2-grants/commit/97ce8c6e2a0b9dd6aec4212715d62bead06da1d8))
* fix bad import ([624af5b](https://github.com/jaccomeijer/oauth2-grants/commit/624af5bbb84b958d427adc02416e50603f4777f6))
* fix build ([01030d4](https://github.com/jaccomeijer/oauth2-grants/commit/01030d4e4e825a727710783c2cc3790ab708c5d1))
* fix expires rounding down to seconds ([0cf604a](https://github.com/jaccomeijer/oauth2-grants/commit/0cf604aa9992fe017a3a0dc536a4e9a210b1e24b))
* fix expiresAt ([1b274ed](https://github.com/jaccomeijer/oauth2-grants/commit/1b274edcf0af21ab83f31ae09cff084fa80978cb))
* fix grant_type parameter ([7f575b7](https://github.com/jaccomeijer/oauth2-grants/commit/7f575b73d6a6ba291130b2537d0289be615e9e74))
* fix import error ([c675691](https://github.com/jaccomeijer/oauth2-grants/commit/c675691278d7c9bd0cee6fab8d4d38b5c8656934))
* fix npm install ([1bdc9b7](https://github.com/jaccomeijer/oauth2-grants/commit/1bdc9b73382f7d9d352a20241a18622dd98a6177))
* fix redirect uri check ([40591a8](https://github.com/jaccomeijer/oauth2-grants/commit/40591a843c8aaada8da9ebb743c04d4845fdb28d))
* fix refresh token ([e295b52](https://github.com/jaccomeijer/oauth2-grants/commit/e295b52bdb65a2b59cf1e2db6cb3ae7677dc870d))
* fix token revoke arguments ([9e725fd](https://github.com/jaccomeijer/oauth2-grants/commit/9e725fd0f458dd24261dc39f96fd32b6026b9cee))
* fix undefined scope ([bf36481](https://github.com/jaccomeijer/oauth2-grants/commit/bf3648149deacb3d18e864a53699f219f7641d2e))
* fixed aud, iss and jti claims ([44acf6c](https://github.com/jaccomeijer/oauth2-grants/commit/44acf6c0eab949b0aedcb82549eee23b6c7b18a7))
* implement authorize url ([4d8a830](https://github.com/jaccomeijer/oauth2-grants/commit/4d8a8303bee28c912ccac7691211be195260e58e))
* implement id token ([633aff6](https://github.com/jaccomeijer/oauth2-grants/commit/633aff60b629cdbac1c520c4160f7459aa439786))
* implement max age ([c3c4239](https://github.com/jaccomeijer/oauth2-grants/commit/c3c42398442cc6cfa1921ade0aad732a7a19d63c))
* implement refresh code grant ([2e5b11d](https://github.com/jaccomeijer/oauth2-grants/commit/2e5b11de65aa3d63907e1fb0d62be8b52f04c0a9))
* implemented request to client ([084b142](https://github.com/jaccomeijer/oauth2-grants/commit/084b1420761ade506d0641860531d1e9f09cac3c))
* improve error types ([1eea30c](https://github.com/jaccomeijer/oauth2-grants/commit/1eea30c7b307f075573bbf4e438b15177d6a413d))
* improve types ([36ee675](https://github.com/jaccomeijer/oauth2-grants/commit/36ee6758f9eba8e01e94efced5b521290e330e88))
* improved jwt api ([ee3803d](https://github.com/jaccomeijer/oauth2-grants/commit/ee3803d386773931aadb86229cdd82688d73934e))
* improved jwt verify sign error handling ([963a22a](https://github.com/jaccomeijer/oauth2-grants/commit/963a22aa02b0955477c3c2b2d5ac7379c43994d8))
* pass request to collectionApi ([8289999](https://github.com/jaccomeijer/oauth2-grants/commit/8289999f770dced5dccaf137bcaf14d1ba579bf4))
* remove client credentials ([85a6374](https://github.com/jaccomeijer/oauth2-grants/commit/85a637477db62e7b1b5d6a6bf74d1a97ac725dc8))
* remove console.log ([cc57e7d](https://github.com/jaccomeijer/oauth2-grants/commit/cc57e7d41d1ab3a29473dfe3086953251ff21be7))
* remove email_verified field ([d703f33](https://github.com/jaccomeijer/oauth2-grants/commit/d703f3360b98d7a301ab445a385a87d0e5ad2f65))
* remove react refs ([93ed019](https://github.com/jaccomeijer/oauth2-grants/commit/93ed019704a29a60c41cbec8034819ad0289ead6))
* removed comment ([4766d29](https://github.com/jaccomeijer/oauth2-grants/commit/4766d29d786c0022d76044af4be5193ef86ba575))
* rename flow into flowState and authCode into codeToken ([c6b5e20](https://github.com/jaccomeijer/oauth2-grants/commit/c6b5e20a0c0cce867943a8da2f34093ae8a82b58))
* rename into collection ([af744be](https://github.com/jaccomeijer/oauth2-grants/commit/af744be86e1829d5e22c2f7de87011a9dc5674dd))
* rename into oauth2-response-generator ([02d55ba](https://github.com/jaccomeijer/oauth2-grants/commit/02d55baf302887e4a7c0a786b7d6498fc2093ece))
* require query parameter, not the body parameter ([1799fa9](https://github.com/jaccomeijer/oauth2-grants/commit/1799fa93590dd446707588f6d991f6b610e60df3))
* set id token audience to client id ([4fc539d](https://github.com/jaccomeijer/oauth2-grants/commit/4fc539d189b78b9358d79c50f1650e5c53bdf119))
* setup dev env ([bbe89da](https://github.com/jaccomeijer/oauth2-grants/commit/bbe89da7ff687919466d4a9745e2e686b8c721d9))
* setup response generator ([9198652](https://github.com/jaccomeijer/oauth2-grants/commit/9198652ed71a097c94aa70925e767ccbe251ef97))
* sync license across projects for clarity ([b6a0343](https://github.com/jaccomeijer/oauth2-grants/commit/b6a03431a2e279e62073adf7ad8772e0ceb8226e))
* update generator ([c7c6fca](https://github.com/jaccomeijer/oauth2-grants/commit/c7c6fca06c1a5393779155230205da9faf32a239))
* update license ([9d5b685](https://github.com/jaccomeijer/oauth2-grants/commit/9d5b6859796f2dfeef3ce7757e615ff4397f8f92))
* use scopes from storage during authorization token request ([15eaa34](https://github.com/jaccomeijer/oauth2-grants/commit/15eaa34255aae3f327d6b0a87d4c5281dee5d121))


