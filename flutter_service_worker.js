'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"favicon.png": "7d00e6adb83f5760b01e9fc07a1cc391",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "cd3d19d4d8b1e67b54baa82827f06d02",
"main.dart.js": "f745b0dc24f963e89c244b35cb2fdcf9",
".git/index": "1d63b10392142a43f76cd44b0a5ab166",
".git/logs/HEAD": "b8e5e9717ee78c764e5008462d535c66",
".git/logs/refs/remotes/origin/main": "6fd49d0499655b9838452f61813c2448",
".git/logs/refs/heads/main": "9afd3ef38ab0406bd00f4e54af61e754",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/objects/ad/3b9d26f90209cde55de61f0db832a4c4857170": "808032f7ef1d47bac815a0ce3467679b",
".git/objects/ad/2b15dd84004e51b69b938266db06ff50da5fdd": "4635ee3028ee79722ad3681cee53f499",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/369ad5dbef5dee05823b72ac8c33b082746623": "b6b65ed701b609e8da6561da9a53e104",
".git/objects/84/d2eabb96bec2a52f0dd3f9505557afa9993dad": "5458399d93bb5bc75c801dd80369d072",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/a8/195636e4116217fb5bb0d742d561b60ee46102": "018a6ba87112c035ba2ea275200ec50a",
".git/objects/a8/61429f630ef48671000bcdbb081110374f4fae": "e77bf2c2fbbceb9de8c28b3577ee3707",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/50/75c6ed4dc7342cc7a577402eaf6bf6028f0623": "8bb9284c225e0faf28b9c09eb2a186f4",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/aec95876e341f2bc83d8ad1f68906679e1e89e": "6943e2827544c5fdd01cadeec98c456a",
".git/objects/43/3e881886e52279a439bd0fad41985a5f371182": "7bbcc9559b1e04146244c16c8f21fd5a",
".git/objects/d8/81bf9088ba0d5b1e4964434c0bd2ca9e64b86f": "36105fe5f93e530ee443efb7859157d0",
".git/objects/d8/af4290233aba14f9752611846e83c77d02b51b": "d16904c57751a07dce76ebdf58067025",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/c4/3c5cb385cdd4fb81b3086253b07ed0ef9523d0": "e47dcbe111595ef1a00cbba60130f136",
".git/objects/06/8a70e25ec600015590612a47b40b651dbdedfc": "8d29cd2533c3ec1fef440aaf341bf7a3",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/bc/04b713c82cd40e01daf02fc418d4837df41899": "9c3d957f58d54526bf83636f855c0729",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/e4/88be5002c8c217af9f8998979bf3e9791a6e13": "715b4ffcb9f859b57a3681234daff697",
".git/objects/ee/9fc70d3b02ab111404378188860d7bfc9bb3b5": "15e539bd38bdd3cb20e902b12a7ab3ea",
".git/objects/38/b1127f8baf4098dbdb4e29be6f0408dabff27c": "c5c64437dedac109a1568026608f7aa9",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/64/8b4365f0a458c21495a848b69208be976534b1": "6e90a970c1e4484cf0bf5744d14c5d22",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/6d/76d32ec5456ca056e1e0fa4da7e5767462c214": "afded4288af091a591e1523849ca4bd4",
".git/objects/15/17b3666a9fcc74b7ad329a7d6133e7e95096af": "ce01e0f876310ce3240a90e5c08890e9",
".git/objects/a3/e336501a0ed9acd75374f5e238c4d528e88078": "e73ec3e226e8ef488c7cbba5473578b2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/27/3d1a8fd934321f8b0e982d0641ebefdf7ff365": "7e8d15956f933a66527826a0c4453be4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/26/b6dd18aeab8e937219c5e814d8151f5456f653": "5dd5b31e3ef90cb26bf61f266fad62a4",
".git/objects/26/090b0469c89d36b87e405d83541bf37fe98ccc": "19f68ac8ca8d20fa678d69da1b79c8c0",
".git/objects/ea/7537b06c08e5404729958a5e12ce80961c98af": "c1e0022382eadc4ca08e7c5185d32e69",
".git/objects/9f/48349134e241e2770d27d51ec044e2a6b7bee7": "2b42b4fd1857f4443140f4583807a18a",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/5f/27f8e22099160f8a04ea1a9ec82dcd42474c5f": "4e94ba9c91b677d932f35edd328d7f22",
".git/objects/28/ae99dd108bf8be860e2ab107efeda9faedbc1d": "27cd50cd2f49071cd6694e18c8d8645f",
".git/objects/28/0f1739fd0f32d1cd50ab0868c14e8a2cd8285f": "d6fc14297af384c23cf64aed67fc43ed",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/a7/4eee2e894d9800aaafdc84c36cddbc3a13c8c0": "ebd2e1a251ceebaefb9bffa6dc8fe5e5",
".git/objects/a7/bf2941f2dbfc02f9cfe0964bc6369e0033990c": "2081fc5d9d83181a9a001a521ec1e339",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/d5/01e44e4f9407fc0432ea1c1fb6c589266f0b1f": "074c0e7edaf98f0fc43ede7352b88875",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/abfcfa7ceee79a8672b93b36836674029c3aae": "73ce1b0a6c559dddf210d5be3b4ae03e",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/c8/8de5894fe4ec519666782ac13d4f353de988cc": "498df0ceb721f89bd0870347f109c8b2",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/53/cfd3ad3f49185a43948cfc43b1afc0c466aac8": "37af53acf33186c33677b4b717bfd3ea",
".git/objects/53/5e15a16edce0ffc7e158ab778167025950c090": "be2d531f92f268093c5bdc70b3cded17",
".git/objects/34/1c295dddb350637238750252ce2182e42cf486": "520157ec5928a4a9f3b9e7ca912f9ad6",
".git/objects/ff/ec2b1177a095a067f68de677d83829fa9286e5": "86b67dcb5bf889c74d427afbd54c947d",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/75/06615dcc4a9af4033d75a44f85dab968b29ade": "3009027b3ca2649fdcf55a7d63a2b87c",
".git/objects/9a/16a51e6923224a7b451b84cb4ed716929c175f": "73c06f3c8434f2cd68bc733aa9137f96",
".git/objects/d9/cb8fb99624f4f097cec050e067092cc3020176": "18743405d95b3c7cdda7ed65a5f7a23a",
".git/objects/01/5a4c2a4125ceb61c57add4a1a9257c4caa0eb3": "e740f5973494f35c43fa739b9a0bc0de",
".git/objects/31/e33fbc78e64b336da3e9b4e089dece6ea2926a": "4c4b19c480c1fa9c57fc0e429a916286",
".git/objects/c9/b982f90632e34fca3635d14e929c61e72a1593": "a330fdfd7927ffe4f8a7cf74f8d45d78",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/60/2c525ec4226a85166f8f01c18bc41ab6605a37": "4a66dd275345736c724cba3ddf222c0b",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/9e/9d80655a0b42b4e8ed7aac2b031a68a804d3d2": "7310b84409640e630be08038031619bf",
".git/objects/1c/4e9ad05e20c1ed94f38d1efd66e20a25a90eeb": "9f767d98413cc8f67a8b79fd48fbb226",
".git/objects/1c/60cb96c21fdd64cddae39bb8a82219f6a472f3": "dea44fc92a41361bdf99bc198cf27bc2",
".git/objects/d0/53abd6518848d7d2d5808c9cbb5f466adc6657": "347c63b5cfb59079bf620effdca29be8",
".git/objects/d0/b9a9f63e5bb0da9af46facf749e5dcf56fc443": "4674f254c1682ca4d93b4e2dd60a4709",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b2/d3ef8212b7e4560e984a81f5617fd17ed4c141": "267de12f73280535aefc97b7b5527c2f",
".git/objects/b2/4f85fccd4299423dad5e58282d587ed8a02935": "da09959415182e5178df9a271ed45855",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/5a/04b2c0d52ec339edb7afbecf2fb4ccddb2cbe7": "a628e358e28c437c4fa3b63bef68184b",
".git/objects/a5/a7fd72daf533e47e5c38ce1386b7c3aaf04f30": "e8d965d3b2f50180e50ee7e17c66be86",
".git/objects/a5/a8257f031f60134e80ffc2cbdba29ea4949bac": "79b8dd25ea46e4ce5e15fa8c6986c2f3",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/5d/ce27c508584398ca9409684e121824599c2c44": "81a58d56687881fd6236fc0bcd7dd8b7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ce/dfafd4e3509dda4adf97e5ca7d0c50117da365": "db5520f21ca182044a93ebe25c785319",
".git/objects/c5/92707738881a585147d2994abbe8963edb28f6": "9ed7247699461d9fc3115bee27c93929",
".git/objects/0f/008d5317cac785b9bd351a6093abec4f46f1b9": "a118e76dba50f385d234245699a713d8",
".git/objects/e7/85cc9c473753165b6445fa16aebaf82a9f98a6": "4883377a34c8d603886eb135f005698f",
".git/objects/9d/8c8088c30202add03fcfb4e6cb8a9ff4acd6a8": "e59c323c3181e200f59458c0653b91f9",
".git/objects/9d/10e2d96d67e505a830cd1e7a2e64c429eb75ce": "ad96a5bfc832836a6b0a967c0ff98d3f",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/47/647fa39b92aff1905eb50cb7caa92cc2491130": "30daee431798f3793c1af16de9363035",
".git/objects/49/e5e36ad67bd390bc30a04cead4447855a01e41": "8ef8377cfaaf4729c79365f11a7ebd33",
".git/objects/49/50051bc29e10269087dbb6bbb8c09ae6193575": "f13b4acac33258ee8781a4bec4cfc9c4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ef3237ff6c43f8904581b113bcce7b9cbd6c9b": "f04cab4128367e2d678b980506a7ee3b",
".git/objects/48/c8624e031a79f3f9eb9123b27524f720cc069c": "e19b3a7d0f5c873db6c789a263027726",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/1d/bec2e91e5b478585d09968774aa268404a32a7": "d17c9a82186ea1686415f00b07f54407",
".git/objects/aa/362e5b322b852f5a1010b5a58d2b6917b17991": "fc99b27b2e839117c484d20bb6dd384f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/0b/e79724d47230b46dcb0c295dfacc351950abde": "0f25fc7b212376bf846f7996ead9275d",
".git/objects/b4/a0ad7b1f4238a17ff73476fd88f4217a561306": "ce5de3416e77fb1df18b0ebbbf293ef8",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/70/c5aa5744bcd67dc5f46b4dc8fd3cffb8adb160": "1836b0db070bfe9f1251338ada6400e0",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/17/b28f7398732cdf5bf4f51a3d92671af7519e32": "a42e8da9e89eea6364bf68f338f3c8f6",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/85/faa50cd314ddf9a20b1aacc6cddf372436fe6b": "39e808d9da293ece9bc7fe897f92b0e6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/10/f585435d9d9f4fb6d3b54e6c66ac7bb54b35ce": "c5b4bdc5f67f254537f45879cbcd9edf",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/4e/82d9733f11052765df2c5875d675eb3c9a748e": "9d2cee3d9ad2b3ab59c1b64f5d73e394",
".git/objects/d7/3b30b51852fdaa292e64645491fb369cdbcfb3": "e0c0e2a5954a4209587d3e7b24427649",
".git/objects/86/1ee10999c82427909df5c85ff4ccc064c4dcb4": "912335210b14151a1c547b294d748858",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/7ca4b4965653fc74387928a3061c745e7d392c": "5cc9d0480c4756bcea9e27b6b6f5428c",
".git/objects/90/20c90c7a264d0ee56b4b918cfc096d26581cca": "d0083d5e350191044f4de371d10deecf",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/df7a7bba84f47580f26654ca165d4d2809684e": "a82e5373cc9eed809c98a329e290619f",
".git/objects/35/47d8176a84f82b1b33ec540f2bb68f1dc0d700": "eed38337b0ed56853231c8985506f126",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/8a/89a49402c26a063267fd22a29cd0d0204b4a27": "e9de459d687ada577e5deeff6fae13d8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/62/0093bd30084c9b467fee677d880978da5c3b81": "915a48852eaff13af789984ceef66f22",
".git/objects/58/5b78270894e15f3eed6ff2d7ee6742668d4b2f": "437ed5e1d4f3aff0904bdf5f7c52e7df",
".git/objects/dc/5537e177b97819cd93910caee44bc03890e097": "00249d1a9da85afbd7d59446f429b1d4",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/6a/053f7f25a30a2959808ccf61fe642b43f11c02": "0bf501f2f1300a4043bf1eec77c87de8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/COMMIT_EDITMSG": "016bbc350a2ce65d1b095623736a1401",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "79adb2cfc72e0cb9edce1e19c57285c7",
".git/refs/remotes/origin/main": "bc584a411b9958358e5300c2ff6bbb83",
".git/refs/heads/main": "bc584a411b9958358e5300c2ff6bbb83",
"manifest.json": "dfa7aeb8d5621879ef7231821eab5090",
"index.html": "d79d91d98979519efcbf3c00870f933a",
"/": "d79d91d98979519efcbf3c00870f933a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0e6e98529eaf71e3bf61fc91452f698c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/u_credit_card/fonts/OCR-A-regular.ttf": "426fbbd15636b132aafe10f83c816e3f",
"assets/packages/u_credit_card/assets/images/amex.png": "78a87e922e4af6db197310737ef9b9fe",
"assets/packages/u_credit_card/assets/images/chip.png": "c7c92244ce8c689f6ac515b9569bb09f",
"assets/packages/u_credit_card/assets/images/nfc.png": "d0e0c4bc69cb7005c10ce684f0603468",
"assets/packages/u_credit_card/assets/images/visa_logo.png": "8ce71663ec640331057e5b42cacc1994",
"assets/packages/u_credit_card/assets/images/discover.png": "b66abb29035e7fa885cb565c4aedfb30",
"assets/packages/u_credit_card/assets/images/master_card.png": "fe807bce353d0bc60f09a60409236255",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/AssetManifest.json": "d7629f929e7a93689e4cc3253bc40ce7",
"assets/fonts/MaterialIcons-Regular.otf": "7e1b46eab5aa0fba079e40043520ace2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8390e92363e05a61f29b2d833c7f02a5",
"assets/assets/money-tick-svgrepo-com%25201.svg": "34c0be6d40216f5df3db3ce23412dea1",
"assets/assets/eye-visibility-visible-hide-hidden-show-watch-svgrepo-com%25201.svg": "64d520faa5ea7bf865001ff6330d29a9",
"assets/assets/niche%2520space%2520(13).png": "b7b1809828a7bb683d38a8c376c20c3a",
"assets/assets/money-remove-svgrepo-com%25201.svg": "28e4db303e137b3f96c27ae3d7ae1e92",
"assets/assets/eye-slash-visibility-visible-hide-hidden-show-watch-svgrepo-com%25201.svg": "e0b3c3572adf67bc4a7295f48214169a",
"assets/assets/giftCard.svg": "040e7fd1498ee095cf8df10be03f8f2d",
"assets/assets/bell-svgrepo-com%25201.svg": "438d97ef2c2d2011948c255a6793be28",
"assets/assets/withdraw.svg": "3212cd3305162333ed7a2d46435f6ac4",
"assets/assets/edit-svgrepo-com%2520(1)%25201.svg": "2c96709c37deae1ed49776c4b178f16a",
"assets/assets/money-time-svgrepo-com%25201.svg": "502028400dd898ac4c236c52fc798c6c",
"assets/assets/qr-scan-svgrepo-com.svg": "d904ad93bbb01350e5eea857c53ec252",
"assets/assets/card.svg": "4f390216bb27fd67c2acc41b9c89679c",
"assets/assets/debit-card%2520(1).svg": "aa0506977bf1fcc4c6267f0753d3dcc9",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/gift.svg": "f054a00de404dae5227b80eb023f0ea6",
"assets/assets/add-circle-svgrepo-com%25201.svg": "8397d19d41563df4726c9f6c23b18621",
"assets/assets/sendMoney.svg": "3dfb89264692cde35238b46c36737ea7",
"assets/assets/lock-password-svgrepo-com%25201.svg": "67bee0c810e5cc2991b26d44998745fe",
"assets/assets/withdrawCash.svg": "59a156bb24d4d732ac8385df1997c289",
"assets/assets/send.png": "5616488162f847ce37e7dc4f60b6d288",
"assets/assets/exchange-arrows-svgrepo-com%25201.svg": "0e2d07a944c02923f3098724519e85b7",
"assets/assets/buyAirtime.svg": "d73ccebf262731e35a2d4525a58e03a4",
"assets/assets/Currency.svg": "2fc47ea97187a1106abb1d0284fb6a2b",
"assets/assets/card.png": "4b2d168c29fd87b05b41014e876a5130",
"assets/assets/bell.svg": "9dd6eb279606aaf23e344466e2025f0f",
"assets/assets/nichespace14.PNG": "3e72437c7ba6b107a35e4ef00d8a518a",
"assets/assets/send.jpg": "ee0666c644845db595556a422b0c035f",
"assets/assets/CardDesign.png": "8816d22cc07f9d3e4c07e40fc743571f",
"assets/assets/qr-scan-2-svgrepo-com.svg": "14e4f3185a8260e36dff285d9904e022",
"assets/assets/requestCash.svg": "97981d5d7d8038fda0c954ec71139e1c",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252009.37.05.jpeg": "d88a5f6ecfd8b6f556ed12372252278a",
"assets/images/tick.png": "009fb24a4a812c836cb527f95af1f975",
"assets/images/fail.jpg": "c3e4418c7b62f58317cefa32238e982e",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252010.20.03.jpeg": "0badb1e96bb0329ce39b771b2ad5b6e0",
"assets/images/impalapay.jpg": "7d00e6adb83f5760b01e9fc07a1cc391",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252009.37.04%2520(2).jpeg": "e4732c5dc094ed3864d91297c41b96e6",
"assets/images/impala-removebg-preview.png": "92c15bbce04cd68e21a7c0edd8ed53c9",
"assets/images/kenya.png": "a409bf76af98f2b969f04be006420ab5",
"assets/images/avatar.png": "7d6a74b6b7c87e8fd01238ae10aca489",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252009.37.04.jpeg": "dfeefdf8e464c924540c7d004e0dd293",
"assets/images/card.png": "4b2d168c29fd87b05b41014e876a5130",
"assets/images/download.jpeg": "7d19a1c7323e096b30fd2c4283a3eded",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252010.20.03%2520(1).jpeg": "621775e663e9af54c1b03408b927773e",
"assets/images/impalapay-removebg-preview.png": "dd2b528dc64e840d60593d72d25bd283",
"assets/images/visa.png": "0e64720fd8c1c2832434285315841a02",
"assets/FontManifest.json": "86cda367ffebd2ded37438ccf17a925f",
"assets/NOTICES": "0f9cd8236f97f564f93e16be93a58f4e",
"assets/AssetManifest.bin.json": "4bcb57f974986fb5948fa289ceca5596",
"flutter_bootstrap.js": "f40a445aad46037bc86c20f54a7c977e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
