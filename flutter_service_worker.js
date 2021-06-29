'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "401989bdb296c3e7a539dcdc03226d2f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e940d90ec0d5e88106c8e0534095593c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f69bdc79fc9cae5c77b92cbe844bfb8a",
".git/logs/refs/heads/master": "f69bdc79fc9cae5c77b92cbe844bfb8a",
".git/logs/refs/remotes/origin/master": "6ec4226ce1f8204b72100558a74643f5",
".git/objects/00/7fa1afd58c34d40833d77906e78f4160998492": "f409821d2e9ffebfbabb778e40cf96b8",
".git/objects/01/22b42d23b5c5aab042e7a7dc38a883d721d757": "49ab5a854a846ad2a3f8c4305469f54d",
".git/objects/01/5db042afafcdd6e6a2b0d373cde510aa2cbe53": "9ab06bfca55e8bb7e8063322f9ecb619",
".git/objects/01/ceeaf00ac1d90311003b83cd1f5150cd55ab80": "d6db8eca61beb1b488c9dbc2155e1659",
".git/objects/01/e2d62e1f19707fffe6f59fb406673c1882de62": "df3b38d4e392f860b0f24847521cc085",
".git/objects/02/6c97b28287841bfda227d791f8d82f8075ad68": "95b266993c770ae22a71fdac13bda686",
".git/objects/03/29381a11182bf0a5a5f3bba9684d887b33a6b1": "bbe70b3c38093fdba64ebee371de3c26",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/aea3b6e26e987e6ebd63c93596774f3fcac7d3": "a6b37b4292486c41ac924f094bacff0b",
".git/objects/06/9dfd847f027b74b409525c2dafe07bb2f29bbe": "ab5f70338846032f251a2e7be63bc100",
".git/objects/06/d18509289e363c4334d4a2422dd5b2daf54aa5": "cf83995324809fcaedce50caae7b6198",
".git/objects/07/3e6a9ba31435637c16a9e59e3043989bb0f1a5": "b1424586cc0632cdaced249272d06bb0",
".git/objects/09/d95abcf541c671645cb9fb33b32f9f9d783497": "3b722f1f75a19e6aea41122afdf4e285",
".git/objects/0c/fe2c73b139d2403cc34eb987cfd21eac10ed4d": "a4f84fcccd4dc447a57daa5d83722e36",
".git/objects/0d/987bf0cc3a95e21bb2b10db73828124e70e9b7": "5d0cf630b28a0f7a50456fec95843481",
".git/objects/0e/18371e5a9647a7d85b017c2344a57fc545dd8a": "8077abf4e2efb4184682d65d438aa34c",
".git/objects/0e/36a9b4879c00eefa3bd70c0e5a3116861cbb34": "28dc787bb3fc71b8cd0f5f3111a8f09a",
".git/objects/0f/16021b88e3f77b41eb44857c5f76aa32d98793": "54967d12423ab85299d141192498ae0a",
".git/objects/13/fc60948344b2c8048ef94d40fdd7559feb5249": "4c67eb7a77bd63876dd68bb4c98660ad",
".git/objects/16/4586f6cec37b88cd383e33ad01abfd285b7a67": "ba68c36b9aa72708fb42b4ddc8367203",
".git/objects/18/c0a1584bf54b0dc7fbde7def0445dd13571025": "f6909b0eaefbecd734cd6a5936d20263",
".git/objects/19/698a5a152d5f2c299df7ddbc002990205bdaee": "6d1aa2a0093e468b0f3a308796ce29df",
".git/objects/1a/e63897e838361aa0d05dcafb0405284b0df48e": "c56b2e9cd9450070f5d7463f4cd4ad2e",
".git/objects/1b/a138b6fe2f89157544dc6aef6815887231e8ed": "2140b82a3813cd12b6c9f9e0a850cca3",
".git/objects/1b/b0e1b9d15eea092eaf336440e8fd12fa5ebfb8": "1123a0b8ba531a7956cf580be0280717",
".git/objects/1c/9bb6c76a665e73fb799d5b3d515a6ad6172c96": "a692f49f3a36f5bafc904d863acc7e21",
".git/objects/1d/5a2f87e7924eaef589ac6a41ab9c01c1c9fee2": "62f06aed40344bd8b22e6c32425bc742",
".git/objects/1e/57b4a1453655b470253df9aba175e7444b6046": "cf50b3b18f36b6231fa6b436e826285c",
".git/objects/1e/b773e2c77e91814c3c38a5638262fdd0d77494": "2ddaa25fd40cd50d8056f2e5d88e6314",
".git/objects/1f/10b74c2e373107b946cb2c4b0351c323bd6840": "6977bc9ba0d6b12915c876e62dee6c9a",
".git/objects/20/075b289a99303bfa52adcba0de063caf5dde86": "c2ba0c521dab4388655c94d77c5b8eaa",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/4e77263632d36e8ff601358d1f6ef6cf65028f": "4ad49d6a6e60d258bf9c2d6811bd4ce5",
".git/objects/22/8b4c01c4ef2edbc897d04740a701b80a820da6": "a2b6963ff9e487bbb6ce4f98c7922587",
".git/objects/22/abf38ab2f177845f9ab29d597d46116383264e": "b7f709d6c515277c5b79e5472f8f6343",
".git/objects/25/b23c59d0436e6fb2bedf63d342123b97644b00": "7ef47a8aeee580123b02a18578cfb17c",
".git/objects/26/918c2c612291a5dabacb96ccfec86688894a72": "ac9f71691ad87bbf4961c4ab365fd8e0",
".git/objects/26/a33ee47ccca00c6f1024a9ee5c5d97fc611cf0": "f1eb12ee42db8471edfc47523fd3e3ea",
".git/objects/27/288b7b717f7ee2e8bf92f87c18a7bee7dbe062": "e15a617dc8e1bcaa7a8bc619309b3249",
".git/objects/27/2cffdb8dbc746e5273ee262ea09d3cc171317d": "37630ff353cec34c9d5634d5f4046d7f",
".git/objects/27/3246512d59e259117982050741644dc9084d16": "bd9e4f061e63918f53849e668a2dcf90",
".git/objects/28/74253f46e0df7cbc38b6326ed2f10d249650b5": "314ad4435f41c77b5b446aede86053bd",
".git/objects/29/98f4b709178f829253f218352232f371c6b061": "d8c9ff659a7e0153c5ca7b886e015f01",
".git/objects/2a/6a49cf75e0529a179aab5c685ec4f0fe1d5d22": "0e7d917987354957cecc1a90bf64933a",
".git/objects/2c/7b58ed23b20a28c2e937a593a1ce93b543e323": "232fb2aa6c05b36e9205efa3b28e6957",
".git/objects/2c/ddcad6cbfc8231667d39d7e4b876f83e7526ee": "41b75060a59830455802c92e46f7d2e5",
".git/objects/2e/3b2d62e5374774927931e2f995e8dce52d27e3": "7224ff2e16b99d318fd50e5a13e2fe65",
".git/objects/30/12d3b6a093e8acb2f69494ed94cb6ac205bba6": "20b540d0d203afbd78051a3303b059ef",
".git/objects/31/a2a8dab6ed7ee4b11681c06d387d4b31fd3cc6": "27bca772be30daa62b1b8a40dd5d0a14",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/84c9e8c72752ae59604eb0efb2057f5c9dbf47": "7a22816753216ca41d6aabc92a630777",
".git/objects/32/b5a70a2ecfe19e2249ce5ac53d6937b57a9f1e": "627deeacba8071f0cb313cc6b9182ac6",
".git/objects/32/f44c8974d37b5fe3a378927f901ff6bc4c04ca": "d834da0c872c48fc266b05832679c6a7",
".git/objects/33/1c625b1777a09066821fa0e8c5a858f8434333": "a4bce91d43f54381533a5e8a74877da3",
".git/objects/33/d406da1fdf3d7a9d875cc365b683f236c3faf5": "b75849348a451e2ac68806855a3d7a8d",
".git/objects/35/269d146694ba3f560d89121c393470c0d7d674": "aa7947eb8a9071c32e047bce00d6150d",
".git/objects/35/6fdd3eeb944d922d7cd4f6164aa17bbc79337e": "9c15b77f7773d64fe1af7bb55bc1ccea",
".git/objects/35/9d4f0752f0c114c84bd2915db8276ee9effc33": "bc79bb99cf17d69ab428c6345dd153da",
".git/objects/35/ea13c6e16b9a967a0bdac4f634b847aeb96c93": "487eef1477e56834935359e54bee0042",
".git/objects/36/8f4e6383dc936d036e6a8663e262524b65cee9": "c49b3cd9f5b529cfbe7110b16976113e",
".git/objects/37/e8fad6829b26ba34afc08c90c8567bf829138e": "e5d79264a54a88d62b4075ed409d1e1c",
".git/objects/38/4b7133148441cb51f0e644a71e1371457b44a7": "ce34b6131ca49ffbc2d40930ab19daf3",
".git/objects/3c/a2b8976ba70bc9ed03612ac8ed45bf0eb43da9": "2f313c5261bd4fdedbabbcbddc30d404",
".git/objects/3d/9dd901ce1acfc09ee089bb75ada52b9a4f1842": "70fda2932dccf728e9c497f13a71ade1",
".git/objects/3d/a176d482694777239796a7c1cf0e170b80e06d": "0e1017c9182e9d499fb034d52a041721",
".git/objects/3e/0cfcbc45af6f2c2a2d963bad3aa8022bd0e182": "9a96043bb38c53005da3e62d5a96e964",
".git/objects/3f/32e4372eb99d03c03c845390c82178677dba79": "faaedb237b0cb298cb5398f504f1b68b",
".git/objects/41/1a57063425886154cbad747a7af5153f4751be": "d027905d394013629f24fff0d4726532",
".git/objects/41/e4860c7a295dcca0771175541ad37766a39da5": "8fab92c36c146ddaf9df9ef7a04dbd42",
".git/objects/42/c7dc7a16e48229ef3e160a0110312f899daaab": "086a4119d7b469dd72718ed699abebe9",
".git/objects/43/c5367238063794cbf3fcdc262c10733709cdec": "316fcdfcb4707f351b68de10909f79d1",
".git/objects/45/02af31114db8965d8a87c21de956ec3fbf7417": "d34e4da12682c396b11090f130e1790b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7565cf62353a1eec1300a699f80ebbd8948490": "9afe202a11f0e7a8037995da27feaea3",
".git/objects/47/43a200e48b31b5786eeeb958a96379e8ba9258": "f64d2e04d81950e8d071083c23030336",
".git/objects/47/8ea96c1246b5db542b6c9f881f278a29d1baa6": "55314b904236268dc2601690787beada",
".git/objects/4a/bda9488560cafdc81ac2a7b7dcd2fcdb096ff8": "97cb01ad5988a10575563e4db73dece7",
".git/objects/4b/210f1ada29bb2ce56fa1f97795a298d7ed948d": "273c998f7d709269083cf87160110605",
".git/objects/4d/0e65ba1e6bdb02bf3f85439696e1a153fbafa1": "fe6ca96e0bead9c48972cb07b301bdfb",
".git/objects/4d/fbf9ce8a58d00787d322d8646537a9c622871e": "d9c2cf39e75194ef5319f9f8ed41187b",
".git/objects/4e/4f3ac5c2192270bfc7a2fff22c7bb098bc0aac": "21e96b5ae44b3af420e97f4e30d3a90e",
".git/objects/4e/c0c8694cccfff98830202736d69c03d11bbe35": "d69f92de340e8a19c61e2e9496b51963",
".git/objects/51/f71c6a35e993b24fef4252c57291d453364f0c": "eba23a57eb8e2362f70879ab73f5ad74",
".git/objects/52/338bf187537f0a6c5d58557f3f09d91462963b": "87e9b7717769595aeaaaaa7dd5b56c2a",
".git/objects/54/ee7fa5c66ed6f68fe67cf9f35ad8d7fe128ad6": "ccbdcebd71967ae16007a9100cca17d3",
".git/objects/56/1b82b96595ffd16720a1da111dab2768c0931b": "ad1a00bd55979567a43e9bba19024322",
".git/objects/57/93c214b361c8921ab4dd711d0a6f93664ad03d": "cc699c2c9ae0a59499af5327e7d7f414",
".git/objects/5a/d6d9c00c730717a29433aeee879ad64ecaa16b": "f64d6774d236fad5ae95859dabb7541c",
".git/objects/5c/70915d9353f43f56af79c4fceb4ae6fbb63357": "ab36ba78004430945dbd6ef24e51fbb5",
".git/objects/5f/1faf4d205b17820e40c91d6ea6a917e1ca5539": "6357b492b60826b1004b01e0c2bb887e",
".git/objects/61/e9df8239b9891d4e44183acab4fa50921d0b8f": "b7abcce7fb3b94d15cc107f4b4382df4",
".git/objects/63/2a1bdf4e590491a70eff6c0d9da8e1b89a5134": "53e937044844645fc64e0ff80abf237b",
".git/objects/64/b7711cf04f46361504667800ef63b3a2bc1440": "0c1ab587a663942effa0367af355ebff",
".git/objects/66/06eeaba36ad4fab83c6d094bffac30123475cb": "31e3c1998f98383e314c1e94c8d35f47",
".git/objects/66/93366a26406bee48b4b1124aeb7117952b8a84": "91d49bc9c405083eaf97aa97c58fac07",
".git/objects/66/dba1fba5e77f3ede95a9b898453deb73351169": "87a335549c39995162427267562bf0fc",
".git/objects/69/4cee39b69b66fa0fed60a2ac702d7b774be50f": "3e42f58b96223868675899f00535bd1f",
".git/objects/6b/012f78786254099e24141008575e16081d7727": "e4bf837e90a93a8ee0fe291a2c5ae853",
".git/objects/6b/18a7b67beaaa4f387f061340f1cc1779b61fcc": "1c606b71fe6c837f98f0cb0aef689d1c",
".git/objects/6b/de59f2f4fc794e9351fbdf619db9a665d3a0af": "94a368dd7cb0ec6fb317a8b0b61a8a86",
".git/objects/70/c8cae1366119d3d59c60f3abf293c327c31579": "5c34eb706ea3e4347f183fd50e89874f",
".git/objects/71/91b6a583108c640a94783847e7ec0d8aed41f7": "156836c02f89b1985a25d6a768e3d035",
".git/objects/73/dbc995c51005dbb745f2a368fcf69dbbe08b1b": "a2386f5a0f9fe8feb582e5008073d9b4",
".git/objects/74/3a2073067d7decbc01b1c530e3f273dd3ac681": "4fd25e617bb1d4506ad76281c1513f26",
".git/objects/74/85f3c797c018481989a55e00c2c8cdc7b82964": "09e34b6e3824f8b5eace829190525fa5",
".git/objects/78/18307ed34cc68f3158eb91e93e86dd316b7d21": "29e03766017c2820e84dad28a6cbd4aa",
".git/objects/78/586faa95b5b5ee78994bf8691040eef93c0beb": "ccce7c99d8d4889745849c7a06468fdf",
".git/objects/78/cbf5cbbe0d4767db08e4b589d40321b3accde9": "582e5bf9f7cc1b76ad90d6f641bac94b",
".git/objects/78/f8f89028c6949e261ecbbd5350ea52a8560981": "cd197400d1a44da2050a03ad27292c3f",
".git/objects/79/09c3557a7a08ed6967395678b2f1386bdfedb2": "9c26ab59ad19153186722a00ae7dc631",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/fe17c1c48c8604a672b6c71eb180a2b8f68de2": "80abbae63d1608688a1d84bc329ddafd",
".git/objects/7c/c3484e921093c7477c8fe52cbb97e87011c718": "19eebbac6d5a44b1821056eb52d0db4f",
".git/objects/7e/f0a20b16f1f119db5248dee787e07ea27b71cc": "e6bb8a385c329ebea6c7151e37985a4e",
".git/objects/7f/115b2f3a26f6f9c75a487cb6faf378cee3a028": "3cd8b06807eda3561dc532a94d02d1c1",
".git/objects/80/7f26a89c9ba8ca7f23e24e67e5408c96e4bcaf": "96109760b50a118c3b9a944d99349be6",
".git/objects/81/0492b3e3b47962713421a0fbe2a78f2833b82d": "cd9f477360dc27cbea9e196d47bc9643",
".git/objects/81/41d3512e8ee7d782d4709ed7b269cf74c60419": "f32427d671c659d627b3044a32ffa8e3",
".git/objects/81/5b7b959356cc84d0eae7e8cd1cc4ca65808449": "b6abb4cb6c223be4f95b15abd89b04f6",
".git/objects/82/2e986baf3ef7eeaa2d98aa15832fbadd7fa9e0": "e07f72ec97c53cf8462603bcdaac4c55",
".git/objects/82/5d3a308ff965a863d33d9207ce2b47f67f2dcf": "93a7e67d55c04122fade9dcdd1297d93",
".git/objects/86/85e237b975ccfcb8372fc4e299af78f41e2748": "ed83a9aba27b405bbe2aa2cfe33d2278",
".git/objects/86/e43429e4b2751bad52e518a785a1b62ddd26e5": "3656c7537894c447192d0a46e68e769d",
".git/objects/87/a52929a42d78adf076a536ae78fbd13b367b6c": "4ecb64c35ad05e82471047a61067fae6",
".git/objects/88/4b7dfa3a1c92bc4cf8a0d764fff795263331e4": "55e27e01f3c5643437173a048c06668a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/98a2fac53f3ec3b97667dd392399b736ae968b": "5aa3fdb7d7f6d6092e73c8570e42b95c",
".git/objects/89/c3035541e937b99478db7118cdbf3d81c1efa0": "b7282a2291dea799ec2b121699076b12",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c888d884b56d00c6d2cfb31ba1ac62901164c4": "96d475abc88a7af9fcb24d03a502b190",
".git/objects/8d/a03d0f57ba6a409ab9aaad14dfed79e3953e28": "8561d7c3177f569590feee1fdd83bcf8",
".git/objects/8e/6b11cafbbb1cff0f3bcb74c4d6bac0a62a19f4": "86f2e3f5cece3fee8b3b24febd4e740d",
".git/objects/8e/9870248aaa9a58b5ec187eec4c8027465b202b": "ac0061e1be7d6f89087c539a9b63bb92",
".git/objects/8f/4a8b774564e2a744af91900a6d8670a1fe22b3": "8c21ab4795bd1bff5eabb12e89c3993f",
".git/objects/8f/d9d9197713fce3e4add1144a2b78b586a59942": "64177dc365c7e14e0268c0fe36e4c68a",
".git/objects/91/acb6fe6c1696787c7b8bc4efeda820997146ae": "4996275b3fb9ab1208878d389811ffb1",
".git/objects/91/ccadfb91f0563aa1fa31f8413aa8a841abcd55": "59b9550650d2f76320f17b295b48cde4",
".git/objects/92/790208b1ebf08b118c9950ccfb280027f60439": "9b34a28099273635453fb020bb962d2f",
".git/objects/94/01b2c62dcf2386c7bf6d19a09a82baaa953ab1": "4023dfe5296d6af642c3237d2c13415a",
".git/objects/94/48ff67a84cacdcb5f39d0ab4dcc56f819feb42": "a3ad504718f34036cd307539420a6bfe",
".git/objects/99/53ef8f4223d467c4b7606c26a18fec61d84785": "f5014c98b31a488a29e25a3976b81d9f",
".git/objects/9b/2030518c1e51cc35c8907c0c6e61da5433df66": "756b43187b2554fdbc52b7003e1a8a7e",
".git/objects/9f/abdee4d74b81693ec3b7ca12d1b2c709e69671": "e618cffae6052094f424a6b861280a4f",
".git/objects/a0/670ee2f0ecb025d8140a4c5d3c9f0336ac461c": "2ee6906ec21bc6b65abd418a5b49ddeb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/2619f0069f77aab8f031c7d8939584060e62a2": "d4f699f7bed6f4dc96e42795b9acd105",
".git/objects/a4/27717e9df58d12b39f8d3d645d8cb22dfcd54b": "49ad2df1b8611b5c49e8a25be26356e4",
".git/objects/a4/78cf5c7e12a97b10d9bde1f92c774f4cb4fd2c": "a98bb7b40e28af56c9a1b7ee02f7f3af",
".git/objects/a6/ad90766750111675ef858691757999d862bd0f": "08edbdc1fb71278c64ac00d50da69d5d",
".git/objects/a6/b82c13c630dd1cfc7b75dc56166ed5f5d1dda7": "ef8cb0041afa3dda7517fc0068ed4b48",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/c4750fcff841d4b56d97b33b75d14c9eaa8c4b": "5e302214691be37467d6723194e0ce1b",
".git/objects/a8/fb0a9dbe2d603303aee54de82ed8dfa478e384": "d504ab4d728e090987759b00b8ab8bd5",
".git/objects/aa/e5707c06de47394a2fe1a6d659415433ffc74f": "04cef0dc17ff7d83c7d9a5f4acecf951",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/6030e47e5495f4cf7c20279fdae82f4f0070a7": "8f94b9d4393a6c82e2349981d8cfcd27",
".git/objects/ac/ec229d66bc27d4785f872220f7492e50901e6d": "cc5564590e43dd5a43fdecd52bca855f",
".git/objects/ad/81f90caa84336610ec658bde225677c05ac132": "ec326d2c5055951a48ce99a68b101536",
".git/objects/b0/0ebcd1b02c73c84c8f4bab28bbbe7ed860ea98": "6a3b3805bb77d4eddf7d5a703819312e",
".git/objects/b1/5d34e3a0626ce667d2ea0c1fbbfbfe70f4f9a3": "865bb28a7d68796cf61d4021122c990f",
".git/objects/b4/2de2d5f9e35d884fbf85f36fe466852ee9c7ca": "7b0ef43bb538df8c5f43e6ac25aa3b94",
".git/objects/b4/6f0db668bd845cf26b10fe0356e8b65734516b": "0ee6bdf9ee257a885c80c1e92cfe4be7",
".git/objects/b5/5c81dfb9224a4c5b322f297ce3caa38163a309": "077f734850bf92d1dcb64789807bb487",
".git/objects/b5/86909cf0a439346840e8bbea52973802984773": "13b696b826ff8a453d5b327b24639a22",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/9f1963395933b80baec8a73d70090882bb4e2f": "b01735d7398013f610c4807af0da1385",
".git/objects/ba/09c5e731c7491cc7de0f8a135666213b38fded": "e0ad711e8cd0096fe756e253942b3419",
".git/objects/ba/841159da403894e983964895f619de0395bcb1": "983dd79340ef421ec3c97a558387efa7",
".git/objects/bb/7e7eda7566dfb256d8fb7506b3cd4721425366": "3350e90b15eb42e4dde483fa24eeab61",
".git/objects/bc/4c61da1d465d199789924f868325dc9ae04f02": "cad1f9900418910fe22b58bb6501b745",
".git/objects/be/e9f4c8fc22807bf6e339edfee27886f4aae500": "bfd7a783bb79df1c32d43dda0d332000",
".git/objects/bf/03ed8503b2d28cf9f2fc770c579df9a9a6b1e2": "56b357b764bb724f642b3415ae4b4c74",
".git/objects/c3/3345367fa9be92a4948db2e545e15237c55099": "84f501590c0cce9ae1f46eb0ecb07761",
".git/objects/c4/d75a51d328d7e0ecb70064238afd605ece1fdd": "f0c5274961c39a37221ab289eb6f1b33",
".git/objects/c5/841fa8ead47a9d63b12eedaae2893f2f20c1ac": "eb4af57434969d06c70a725440d1c647",
".git/objects/c5/ccaaee1569db97093cd49f7355a1450659e087": "bc66e2c440b5c92d67bb5e2636404828",
".git/objects/c6/88226cb2260736111732941944feb070750602": "9125c7384b4fc5a6419bcb703de63147",
".git/objects/c6/a22aeb2629c899fd79b3050da84a963a63a74f": "262100327d8fa84c63bc864de630a02b",
".git/objects/c8/8c0a081eeb949a6a28be5cc84fe5c76e858fe5": "e181ea9486d4794f6fa255c6da90e3ec",
".git/objects/c9/5dff759612f288ae19c490e3b00d22c911f70d": "9642025313bdaa481fbccd5c8e45eb0e",
".git/objects/ca/3794772f11e826bf4732ae38cabc9643740576": "faccdca5921cf55c6898ccbf146a8609",
".git/objects/cd/17336acd216681d8c0fccec6fbcd9ad00f1e93": "67488630a306dd15a5fe9cf49e3af019",
".git/objects/ce/2c47b41b86621a5632e384927db99220531a08": "d7295a3b07558649e25567f4389e4f90",
".git/objects/d0/3fbaacf034cdab0020518e1d01ff7943df629f": "92f5d344a8f628521621af7df39262a3",
".git/objects/d3/6ac3575b586a4b9b2d4b00aac16966cae4e22f": "13c2c02b9782b99b505145ac99ca0639",
".git/objects/d6/ab7666a89c29d1ef0f42f1e7342e2c3b0cf44a": "44eaa3fbc5d84f624bd5b07a14acaa85",
".git/objects/d6/b1d630da48712b9e186e7a4dc248e77595bf7e": "7cbcd9a24fecc2dcff671e872d901d7d",
".git/objects/d8/444b188d399d3104427339b5d2be1c39c8d9c8": "b53737af01ce44a4c906aed9f3412528",
".git/objects/d8/b82e46095ec45b037797579417a0b1a4f53008": "ba0c586c6ba78173404015f073f0a950",
".git/objects/dd/4af2b19012648827447a6fd91f8b2e20fea0ad": "f6e04e48ec800527bbf943590f81ed73",
".git/objects/dd/890aff78a0269a76f32b7e90a9cc18c57e71e2": "3c16d175d870d00a04b658ef197a2393",
".git/objects/df/cd90296f68b72fc5859339ba9d44a565808f27": "c696923a512ac74f6a93f40cead97aa1",
".git/objects/e1/cdb1933f0ba128cba4ac3a213229f8017dc7d5": "9d62a16b39e2d739c68a14c4475eb9cd",
".git/objects/e4/861657d7c32b57c9fce91bb7cbbe6fa3dd886e": "5b75a5ba5fa989b6546dabb751a258f5",
".git/objects/e5/29bf2bcc5e499853f2808c7e2ddd1c7d8ba1ee": "95916674f98863c1fba2718fe964dc1b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/9d3c9fc1c16880fc15ebad2df0ea77aff2086b": "aee066c633f9da736e864a19b1bc96e3",
".git/objects/e7/b8fc93523fe89d6863de0f2d1a6daf4d29c990": "7d7366ed3f21fc2068db11d546f03283",
".git/objects/e7/d2f0c42b939f19088476b5f40b571008b829ee": "30948e21e4149b963be76b130a5a1fce",
".git/objects/e8/11db65d54f744a2c82b27847b70a2ddc113057": "770b87775d318e4effab13bba4e31ecb",
".git/objects/e8/d1142dcd2a744ba137f9da5f3df81d35403b85": "7651dbfe4aae3dce9f4d1a36465d9c46",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/eb/2f80c27bf3e785abfd7fc7ea9329ee5a8d0a39": "f3209c50a949e55e485f1ae1e0116af3",
".git/objects/ee/12c4efaeee45b640bec2969ac3419e81888c43": "55abb0f98cf9414d5b66511bf5698362",
".git/objects/ee/9753fa7b50862f529656fc8a289ed0e4cd93f1": "0dcba583e36293bd9a0c1742e9f4b09b",
".git/objects/ef/5ced60b076ceb8302603b0f5022457d8b2d132": "a9625eefb183e33b38b07ec3aad38e84",
".git/objects/f0/6fd9161f7e99ef463fca67e2caa971a0479c3d": "031ae9d00ad792e8847c7cfded80afba",
".git/objects/f1/3783c727edeef8a7b5caf608718909f01ed238": "49dfdbff478ad1727f956ec8fc5cd438",
".git/objects/f1/472b82ff1e4f9c88c6a929e6bf24cf8230f36a": "5575fed24e110711c4a44a3c089c8050",
".git/objects/f3/a904a54d54c5d484fc388ba5657d197c2ba467": "9c6b7a1eb1fa8662071d6aa0346d1732",
".git/objects/f3/f01415cb178c3646cdaa2010bfb416049daf44": "ebd6ec009950c942797f3f615c1c3875",
".git/objects/f4/00feea51144614ccca20b208dc1ff67210183e": "6ffdb7f0353f4934a509a954364420ae",
".git/objects/f9/4acf859ce1bc5e1ed214a220f1993041e04092": "18bd1b84ca599c8015021e70343a3ebf",
".git/objects/fb/d27d7c6975c3df1aee92898fc0148134984aac": "b42a9bed987034d5904af2b1659ff26b",
".git/objects/fd/333a3388be4e6ebbf09dd3e0f4ade85bd6370d": "d912a65c622716d897abf00badb71e6e",
".git/objects/fe/a5b9374a446034772760cdea32942ad6a5cfef": "5bf5525eb8087a3752fc30a45ea6d727",
".git/objects/fe/dd0243473210976754dc61232c4528c965e157": "f9dbdb9f70edeac450eabb153514147e",
".git/refs/heads/master": "9f15022b6961905fc725ebc7d88d77fe",
".git/refs/remotes/origin/master": "9f15022b6961905fc725ebc7d88d77fe",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/Alltree/acbapho/BG.jpg": "67d05c2b75328913de2673eedee455ed",
"assets/images/Alltree/acbapho/branch.JPG": "8d986cb020773b2fad3277f8b4d2f388",
"assets/images/Alltree/acbapho/IMG_0125.JPG": "0ca6a53b154e2b93b35a36add3e081cd",
"assets/images/Alltree/acbapho/leaf.JPG": "70e7d1aa31a5bffb03fda593e1460d93",
"assets/images/Alltree/acbapho/tree.JPG": "9a150d76298bb0e13e41e7b9f54a7d38",
"assets/images/Alltree/art/artchongko/1.JPG": "20067a4f9513fdb16ecb851a1faadbbc",
"assets/images/Alltree/art/artchongko/2.JPG": "18aebd4008bfa1a6659b70e478ba5b18",
"assets/images/Alltree/art/artchongko/3.JPG": "0d4696f0b142bbf7b0fcc3a1cc6a0fea",
"assets/images/Alltree/art/artchongko/4.JPG": "a6cf35afeb5a0a57d39b09156454050f",
"assets/images/Alltree/art/artcocoa/1.jpg": "697890a02a2486201c85d568c6abd554",
"assets/images/Alltree/art/artcocoa/2.jpg": "2d716d2dac0ca13fa572963814265127",
"assets/images/Alltree/art/artcocoa/3.jpg": "778e1874cd52b6ead2943eba245b3cd1",
"assets/images/Alltree/art/artcocoa/char.jpg": "937e8c8df80d26c82d7c2082d8b39151",
"assets/images/Alltree/art/artcocoa/cocoatree.jpg": "3725eca81d20b88d3cdf2fb803655510",
"assets/images/Alltree/art/artcocoa/importance.png": "2cd3871d5a298275babb2e05b96a173b",
"assets/images/Alltree/art/artcocoa/Intropic.jpg": "0925f35c39dccc4229d6b494a9c7a67b",
"assets/images/Alltree/art/artcocoa/tall.jpg": "8e44ed3208b5c236bd9cc824d4be596a",
"assets/images/Alltree/art/artfuengfha/1.jpg": "6266e1fedc9a3755df89aea1aa30bb33",
"assets/images/Alltree/art/artfuengfha/2.jpg": "87871684741a2c19bbdd2d120068e8a1",
"assets/images/Alltree/art/artfuengfha/3.jpg": "5e6ff1648370d2fc7a81d86918443060",
"assets/images/Alltree/art/artfuengfha/care.jpg": "f00b07559416213b8d6488d844b1fcfe",
"assets/images/Alltree/art/artfuengfha/char.jpg": "a5c2a3f23e42bdf00f13999e92061f32",
"assets/images/Alltree/art/artfuengfha/importance.png": "6f1bdc10793956ad89f99179ec2c06f0",
"assets/images/Alltree/art/artfuengfha/Intropic.jpg": "055df679b5ef1a94f3085d2a24b87a5a",
"assets/images/Alltree/art/artfuengfha/tall.jpg": "de48142bb6de547b9bbf815cf6fa2641",
"assets/images/Alltree/art/artgruaybua/1.jpg": "e6994ac5b374b8f19980d08442863923",
"assets/images/Alltree/art/artgruaybua/11.JPG": "b0f6e6368984f784edb7e04ee85ffeca",
"assets/images/Alltree/art/artgruaybua/2.jpg": "4f75c2929ffa71b2a4d3bc65e8bab02d",
"assets/images/Alltree/art/artgruaybua/22.JPG": "4239ccb3fba19d5a4c78ea8c215c9cb8",
"assets/images/Alltree/art/artgruaybua/3.jpg": "e94ef3f718f6ddda71127e54fa817319",
"assets/images/Alltree/art/artgruaybua/33.JPG": "79f5bbdfa5dfd5a297508ace332a0c70",
"assets/images/Alltree/art/artgruaybua/44.JPG": "0dc6754420fe6b60c1f290979f1a0e42",
"assets/images/Alltree/art/artgruaybua/55.JPG": "ab57afdc4ee0fea5ad0018a09edf7b7d",
"assets/images/Alltree/art/artgruaybua/66.JPG": "5376653820ea2e6c2badac57761e0c4e",
"assets/images/Alltree/art/artgruaybua/77.JPG": "9b47c5f1a7cca741881bac1caa191f2d",
"assets/images/Alltree/art/artgruaybua/88.JPG": "fa8de41fab3069364afeac1edb00f21f",
"assets/images/Alltree/art/artgruaybua/char.jpg": "9a8f01ec161a882f70171c95ae535e82",
"assets/images/Alltree/art/artgruaybua/flower.jpg": "8e1b3da345cec25eedd240251422963c",
"assets/images/Alltree/art/artgruaybua/fruit.jpg": "469e4c9d5912ee242344af1e95cb1a06",
"assets/images/Alltree/art/artgruaybua/importance.png": "a6f20ce2016ad4318df0c542cfdf9e1c",
"assets/images/Alltree/art/artgruaybua/Intropic.jpg": "2e12eeb4ccd38a8dd9ee04234124140c",
"assets/images/Alltree/art/artgruaybua/tall.jpg": "fc520b40b2f789f075447a93ad9b148c",
"assets/images/Alltree/art/artgruaybua/%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%9A%E0%B8%B1%E0%B8%A7.jpg": "6cdbac5a91f88242ea828eff02dfe904",
"assets/images/Alltree/art/artkampu/1.JPG": "d38491314c157d294c49c68b098d1e68",
"assets/images/Alltree/art/artkampu/10.JPG": "b18baac1961deeff6db4e8a972f58027",
"assets/images/Alltree/art/artkampu/2.JPG": "c133bdb1ded0796359b568fa5d962b62",
"assets/images/Alltree/art/artkampu/3.JPG": "96ea7263fd0e4c4ee0749bd92b39c67a",
"assets/images/Alltree/art/artkampu/4.JPG": "1862755bd6103e2d121feaa80af46553",
"assets/images/Alltree/art/artkampu/5.JPG": "e6b65bb28febc07e9bbdc82e4a62ad3b",
"assets/images/Alltree/art/artkampu/6.JPG": "2aa96bdbf421b7ac9fe9e49760f75846",
"assets/images/Alltree/art/artkampu/7.JPG": "978f64b6ccea4abc38cfbbaaef24944e",
"assets/images/Alltree/art/artkampu/8.JPG": "d1545f4f6f34fd0a054ebc2cf0f2ec72",
"assets/images/Alltree/art/artkampu/9.JPG": "69cc3795a36e0ea51e54ebc7172371f1",
"assets/images/Alltree/art/artkampu/char.jpg": "67014f1ada59c15f7ac6aa95303c28e8",
"assets/images/Alltree/art/artkampu/cork.jpg": "d77c17785714c7ead5d9a92d54673482",
"assets/images/Alltree/art/artkampu/importance.png": "a3de9e84c1b42d9469595a6a787f8cbd",
"assets/images/Alltree/art/artkampu/Intropic.jpg": "cf1998365da00060c2edcddc64c2d74b",
"assets/images/Alltree/art/artkampu/leaves.jpg": "e479f108701344ebd8f083590a2f003e",
"assets/images/Alltree/art/artkampu/sprout.jpg": "dfc1e0b6872db6a2dec0799b798c10a3",
"assets/images/Alltree/art/artlelaodee/1.jpg": "f4179b9474d1cb003ae6f2720a86ec20",
"assets/images/Alltree/art/artlelaodee/2.jpg": "edc53b2d5264000315ad90d9de7cec6f",
"assets/images/Alltree/art/artlelaodee/3.jpg": "78883f1fdd418930fb47efda6a14fbb6",
"assets/images/Alltree/art/artlelaodee/char.jpg": "135760f882bf3e081a3f4f70d61e46ec",
"assets/images/Alltree/art/artlelaodee/Intropic.jpg": "c27ef2a58b6f5949224d08ae72dcff00",
"assets/images/Alltree/art/artlelaodee/lelao.jpg": "4fd37ebfcf0802317b334f21fbc74a11",
"assets/images/Alltree/art/artlelaodee/tall.jpg": "948f6c437d4673aeec355c29f79b0bba",
"assets/images/Alltree/art/artpalm/IMG_3502.HEIC": "2b69b830633aa5f886f3b11f1a914dcf",
"assets/images/Alltree/art/artpalm/IMG_3503.HEIC": "c35c2cc96596910e950ec24145da2745",
"assets/images/Alltree/art/artpalm/IMG_3504.HEIC": "0e2bb5be4ecf2c3b8651e3fc913de3e7",
"assets/images/Alltree/art/artpalm/IMG_3505.HEIC": "f9fabd59bd03536ee1874aac3ca901fd",
"assets/images/Alltree/art/artpalm/IMG_3506.HEIC": "f5eff443dd3f2e2b4e23a1cf60a1571a",
"assets/images/Alltree/art/artpalm/IMG_3507.HEIC": "5b9fbbdee823cff8f4b4a9a7d91745f9",
"assets/images/Alltree/art/artpalm/IMG_3508.HEIC": "25489d61b1568c4a41cacf089a931f7d",
"assets/images/Alltree/art/artpalm/%E0%B8%9B%E0%B8%B2%E0%B8%A1%E0%B8%A5%E0%B9%8C.jpg": "648125a2e3379596e17962f067e77f9e",
"assets/images/Alltree/art/artpamhanggrarog/1.jpg": "9fe8ca57e9391ea4f30a8933ad201e32",
"assets/images/Alltree/art/artpamhanggrarog/2.jpg": "94f0c6a8713e7dd7bbfc7cbd7d6ad245",
"assets/images/Alltree/art/artpamhanggrarog/3.jpg": "b7d7c8c137a5994ca5e70c120ddf8573",
"assets/images/Alltree/art/artpamhanggrarog/char.jpg": "d47ca763c9d4931c159726db69d21c9e",
"assets/images/Alltree/art/artpamhanggrarog/Intropic.jpg": "19e02413de4f94d44f045c63e407cb3d",
"assets/images/Alltree/art/artpamhanggrarog/tall.jpg": "f2c270c5149ad539fc1ca233b31a26a5",
"assets/images/Alltree/art/artpamhanggrarog/tree.jpg": "1bf8ff4e1643c8d6cf2831b9b986b9de",
"assets/images/Alltree/art/artpikul/1.jpg": "e04990dc0981b17a70764a3d8f892caa",
"assets/images/Alltree/art/artpikul/2.jpg": "1853f6533311a72e340740efa6781582",
"assets/images/Alltree/art/artpikul/3.jpg": "6551f745d8b6475307c62397928f344c",
"assets/images/Alltree/art/artpikul/4.jpg": "753b14d756433111b195685ff3cf16f9",
"assets/images/Alltree/art/artpikul/char.jpg": "64f28924a953a510b25c69bb8e869f90",
"assets/images/Alltree/art/artpikul/char1.jpg": "038e33d1ff81dd3d6472dcaa8ee26206",
"assets/images/Alltree/art/artpikul/char2.jpg": "62268558ff2ffad771dd2221fcb6a2a0",
"assets/images/Alltree/art/artpikul/importance.png": "3646ca2967b60ce874b2b352f625f2f1",
"assets/images/Alltree/art/artpikul/Intropic.jpg": "48b5ea68e4a2e2891e1bf8eec0d0d1c6",
"assets/images/Alltree/art/artpikul/tall.jpg": "6d1bd7ef2807fdadb9d68d17ef6ed93b",
"assets/images/Alltree/art/artsalalanga/1.jpg": "ee92b7ee5a7df7ea846e8a4f65566c6d",
"assets/images/Alltree/art/artsalalanga/2.jpg": "032584acf64354ee150fd327dd87412e",
"assets/images/Alltree/art/artsalalanga/3.jpg": "18e388471802a47cf992d63bea0e05ea",
"assets/images/Alltree/art/artsalalanga/char.jpg": "45d0eb801e75c3893bc812ebbe3046e9",
"assets/images/Alltree/art/artsalalanga/char2.jpg": "72dbe67385807ba29a64869393b9bf4b",
"assets/images/Alltree/art/artsalalanga/importance.png": "5031b8a041b95843a37b34e6344d2327",
"assets/images/Alltree/art/artsalalanga/Intropic.jpg": "1350ff0432162d05e331c912cdcb63ae",
"assets/images/Alltree/art/artsokraya/1.jpg": "bdd64d7f1a3fb8f4e360886f164fb44f",
"assets/images/Alltree/art/artsokraya/2.jpg": "e17ca51589934c703287fb1597f1ae66",
"assets/images/Alltree/art/artsokraya/3.jpg": "829f8957167a769da0f624a576b7386b",
"assets/images/Alltree/art/artsokraya/char.jpg": "33ef9ab55ae675dc4e9f593a42a4097e",
"assets/images/Alltree/art/artsokraya/importance.png": "a6f20ce2016ad4318df0c542cfdf9e1c",
"assets/images/Alltree/art/artsokraya/Intropic.jpg": "5f5573cfdd18e7d195c265b9e9fb5ab5",
"assets/images/Alltree/art/artsokraya/sokraya.jpg": "5564964c0b56888e9adc681c951caec4",
"assets/images/Alltree/art/arttongkwaw/branch.JPG": "6874ef7e2d7888822f4e49cb12de4272",
"assets/images/Alltree/art/arttongkwaw/Intropic..png": "e6e63c85da8269fe7e7851505aca3237",
"assets/images/Alltree/art/arttongkwaw/leaf.JPG": "970947be1860db228613bbf881d262e3",
"assets/images/Alltree/art/arttongkwaw/tree.JPG": "cdd4b2d3e17ff2e674aa6d1b88140590",
"assets/images/Alltree/gased/gasedpho/1.JPG": "0ca6a53b154e2b93b35a36add3e081cd",
"assets/images/Alltree/gased/gasedpho/2.JPG": "70e7d1aa31a5bffb03fda593e1460d93",
"assets/images/Alltree/gased/gasedpho/3.JPG": "9a150d76298bb0e13e41e7b9f54a7d38",
"assets/images/Alltree/gased/gasedpho/branch.JPG": "8d986cb020773b2fad3277f8b4d2f388",
"assets/images/Alltree/gased/gasedpho/Intropic.jpg": "e4f9bed222d46a7de95f75822439a482",
"assets/images/Alltree/gased/gasedsai/1.JPG": "d134f0142514366eaf980ea184352d0a",
"assets/images/Alltree/gased/gasedsai/2.JPG": "eeb4c341031cfefe246cbf9d39ec0584",
"assets/images/Alltree/gased/gasedsai/3.JPG": "451e1e98980641790a21e1f3a9deb861",
"assets/images/Alltree/gased/gasedsai/4.JPG": "8d986cb020773b2fad3277f8b4d2f388",
"assets/images/Alltree/gased/gasedsai/5.JPG": "9a150d76298bb0e13e41e7b9f54a7d38",
"assets/images/Alltree/gased/gasedsai/6.JPG": "4004914380f6a3d66c2d6408c20e7966",
"assets/images/Alltree/gased/gasedsai/7.JPG": "ff8ccaf8461c94dc40e8a85634c68cd8",
"assets/images/Alltree/gased/gasedsai/bad1.JPG": "1fc11061c967469e3e24b0e6be8369b5",
"assets/images/Alltree/gased/gasedsai/bad2.JPG": "04e02f8034e28b51150034794468d7d9",
"assets/images/Alltree/gased/gasedsai/cork1.JPG": "17525a1603b262a2f2994ea81c16200a",
"assets/images/Alltree/gased/gasedsai/leaf1.JPG": "8275c8c4002f1279ee1ed510757cd74d",
"assets/images/Alltree/gased/gasedsai/leaf10.JPG": "3a5053c7ff839a46582d462710dea06f",
"assets/images/Alltree/gased/gasedsai/leaf2.JPG": "966c6da35edf874ad8df1ee5855dac97",
"assets/images/Alltree/gased/gasedsai/leaf3.JPG": "70e7d1aa31a5bffb03fda593e1460d93",
"assets/images/Alltree/gased/gasedsai/leaf4.JPG": "4ee9f32042eac84099255d89d65a4b04",
"assets/images/Alltree/gased/gasedsai/leaf5.JPG": "9221634bc853754cba43c7ea891f2881",
"assets/images/Alltree/gased/gasedsai/leaf6.JPG": "d762b06e9a818dbaa98ef43b2ae77f76",
"assets/images/Alltree/gased/gasedsai/leaf7.JPG": "74f75fff234676697cd47bb8c6331e95",
"assets/images/Alltree/gased/gasedsai/leaf8.JPG": "10528435f16a5a351c3fdd871d923b35",
"assets/images/Alltree/gased/gasedsai/leaf9.JPG": "9246e5955ad4b9de8925896f007838fb",
"assets/images/Alltree/gased/gasedsai/size1.JPG": "68d2439eb3204333b0dc090d6d56218b",
"assets/images/Alltree/gased/gasedsai/size2.JPG": "7b8b2d06698a72c58e243ee47f41ecf2",
"assets/images/Alltree/gased/gasedtongkwawnailuang/1.JPG": "8634323bed73d695d595e80c1f1f28d9",
"assets/images/Alltree/gased/gasedtongkwawnailuang/10.JPG": "0bb493b9c1f7c826813d723053a3837b",
"assets/images/Alltree/gased/gasedtongkwawnailuang/11.JPG": "c82053021aecfab2b0d1a9dafc099c7e",
"assets/images/Alltree/gased/gasedtongkwawnailuang/12.JPG": "efb74e0cd089b43b407341fc20ce3eb6",
"assets/images/Alltree/gased/gasedtongkwawnailuang/13.JPG": "c12e4bf46a9739b843fc530a13aefbc4",
"assets/images/Alltree/gased/gasedtongkwawnailuang/14.JPG": "fb7375d3fd019d8e6dd96d35479b3b5f",
"assets/images/Alltree/gased/gasedtongkwawnailuang/2.JPG": "e0ebc14c740e1078aad168a3a3411a3a",
"assets/images/Alltree/gased/gasedtongkwawnailuang/3.JPG": "f790e47c2b91ba028db050586ae28028",
"assets/images/Alltree/gased/gasedtongkwawnailuang/4.JPG": "61e3905bc2958240bf8fb590bbecdd72",
"assets/images/Alltree/gased/gasedtongkwawnailuang/5.JPG": "55b258e915d43d0ebf6649565b635762",
"assets/images/Alltree/gased/gasedtongkwawnailuang/6.JPG": "5f8a812f256ac1897bf3236cbad83035",
"assets/images/Alltree/gased/gasedtongkwawnailuang/7.JPG": "81e8b098fcb25f5f152db5052f0fb5cc",
"assets/images/Alltree/gased/gasedtongkwawnailuang/8.JPG": "83696a2bb94fdd6c06408a5af381b455",
"assets/images/Alltree/gased/gasedtongkwawnailuang/9.JPG": "4e5a63d81d7359cae36cd6b8cdf352f5",
"assets/images/Alltree/gased/gasedtongkwawnailuang/bad1.JPG": "b2664b3ca04ebc11fa7a570d9c4ddc8a",
"assets/images/Alltree/gased/gasedtongkwawnailuang/bad2.JPG": "db5742104c22edc328f88b6af451d5d7",
"assets/images/Alltree/gased/gasedtongkwawnailuang/bad3.JPG": "b204189343865309f76fa772472743ea",
"assets/images/Alltree/gased/gasedtongkwawnailuang/leaf1.JPG": "bff29f4742c4dfd2ed2a4501da75986f",
"assets/images/Alltree/gased/gasedtongkwawnailuang/leaf2.JPG": "60513ab421380013d5b829f8b3519524",
"assets/images/Alltree/gased/gasedtongkwawnailuang/leaf3.JPG": "d03791ef32d74e00b0e3b40cac056585",
"assets/images/Alltree/gased/gasedtongkwawnailuang/size1.JPG": "9ba45e1b7d6038c44190613278e62380",
"assets/images/Alltree/gased/gasedtongkwawnailuang/size2.JPG": "f431c1769f5b6afcb1550872a9589524",
"assets/images/Alltree/gased/gasedtongkwawpatep/1.JPG": "f97698f0c3bca045f2e299d2b10b581e",
"assets/images/Alltree/gased/gasedtongkwawpatep/10.JPG": "cdd4b2d3e17ff2e674aa6d1b88140590",
"assets/images/Alltree/gased/gasedtongkwawpatep/2.JPG": "6874ef7e2d7888822f4e49cb12de4272",
"assets/images/Alltree/gased/gasedtongkwawpatep/3.JPG": "7178fe740cb82565e66478a6492a900c",
"assets/images/Alltree/gased/gasedtongkwawpatep/4.JPG": "970947be1860db228613bbf881d262e3",
"assets/images/Alltree/gased/gasedtongkwawpatep/5.JPG": "777ea4a8654c222739f04c066d7dd2bd",
"assets/images/Alltree/gased/gasedtongkwawpatep/6.JPG": "d01fad71b50ea94cc33951165badcbcb",
"assets/images/Alltree/gased/gasedtongkwawpatep/7.JPG": "f118a724dc7317e6e11d4e4f707b069c",
"assets/images/Alltree/gased/gasedtongkwawpatep/8.JPG": "a272843fc5afb8aadf8a431f2d5a20ac",
"assets/images/Alltree/gased/gasedtongkwawpatep/9.JPG": "c815e401c34e11db05fe5d10fce81832",
"assets/images/Alltree/gased/gasedtongkwawpatep/bad1.JPG": "253ea271414f18c857eebe441d485a31",
"assets/images/Alltree/gased/gasedtongkwawpatep/cork1.JPG": "433e5cfb7eb90d98df410fdd459ceb18",
"assets/images/Alltree/gased/gasedtongkwawpatep/leaf1.JPG": "f75fddf0ed727de2190bea1fe8617221",
"assets/images/Alltree/gased/gasedtongkwawpatep/leaf2.JPG": "7533841ddadda4c5bde30814d9e81cd3",
"assets/images/Alltree/gased/gasedtongkwawpatep/leaf3.JPG": "0c8b85883fdccd9c1b205d9bf36f85a6",
"assets/images/Alltree/gased/gasedtongkwawpatep/size1.JPG": "880ee2a3e319839e73ba5836443f05b3",
"assets/images/Alltree/gased/gasedtongkwawpatep/size2.JPG": "886e8c81ce91bb64f7d7e04d66b25b4d",
"assets/images/Alltree/gased/gasedtongkwawpatep/size3.JPG": "84597227d1b9a467c066e2a39f33e1c2",
"assets/images/faculty/art.png": "2a58b57d07b039578f0017d4b2a6fe0a",
"assets/images/faculty/pat.png": "f586dc85b08cbe3e6c72869d1ba49d3c",
"assets/images/faculty/tanta.png": "a427fc22e7286065ecc28ee1011beb13",
"assets/images/global/cmumap.png": "845b1544901155b4d57fa3ddf1c006f2",
"assets/images/global/Home.png": "918b8e0a4afdbe4ffeb998112a0db332",
"assets/images/global/map.png": "7c776b571c81eb0714745ffe041b0824",
"assets/images/global/placeholder.jpg": "85d07de956cbb70fc3260eca57a6c0af",
"assets/NOTICES": "fa82abc4e3bfa2c30c649f0fe8f77999",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "713035d035ea997e94356fed773f1709",
"/": "713035d035ea997e94356fed773f1709",
"main.dart.js": "b696b2daf503418296244c5f9448a731",
"manifest.json": "bcfd54b2ab72c44ad3c640fcaef8495b",
"version.json": "2325a89ab236748d7d9fcfc580485955"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
