function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function setCookie(cname, cvalue, exmins) {
    var d = new Date();
    d.setTime(d.getTime() + (exmins * 60 * 1000));
    document.cookie = `${cname}=${cvalue}; expires=${d.toGMTString()}; path=/`;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return null;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const notify = new Vue();

const messages = {
    'EN': {
        keyword: 'Keyword',
        lang: 'Language',
        message: [
            // normal
            "Get busy living or get busy dying",
            "Those who dare to fail miserably can achieve greatly",
            "It is hard to fail, but it is worse never to have tried to succeed",
            "Let us always meet each other with smile, for the smile is the beginning of love",
            "Challenges are what make life interesting and overcoming them is what makes life meaningful",
            "Love is a serious mental disease",
            "Remember that the happiest people are not those getting more, but those giving more",
            "It is our choices, that show what we truly are, far more than our abilities",
            "Only put off until tomorrow what you are willing to die having left undone",
            "If you want to be happy, be",
            "Many of life's failures are people who did not realize how close they were to success when they gave up",
            "If you want to live a happy life, tie it to a goal, not to people or things",
            "The opposite of love is not hate; it’s indifference",
            "I never knew how to worship until I knew how to love",
            "A friend is someone who gives you total freedom to be yourself",
            "Never let the fear of striking out keep you from playing the game",
            "Live in the sunshine, swim the sea, drink the wild air",
            "Life is trying things to see if they work",
            "The No.1 reason people fail in life is because they listen to their friends, family, and neighbors",
            "Success is how high you bounce when you hit bottom",
            // nonsense
            "Build a man a fire and he'll be warm for a night... Set a man on fire and he'll be warm for the rest of his life",
        ],
        menuitemDescription: {
            home: {
                label: 'Home',
                tooltip: 'This is our home'
            },
            calendar: {
                label: 'Calendar',
                tooltip: 'To find out what day is today'
            }
        },
        dropdownitemDescription: {
            EN: 'English',
            CHT: 'Traditional Chinese'
        },
        title: 'Hi There',
        subTitle: 'Here comes the new space',
        bgText: [
            "You should have some means of, any one of the first financing, can hardly be opened so that the impulse of RVing. In order to further mazim.Unusual statement, and when any of the weights statute for ever. To my wonder how. The use of the function of atoms, you hardly ever undergraduate rescued, two of them mental suffering.",
            "Duis minim are not to be aware of this. In My people: and to another, follows from the given with a smile has. But from these opened they have fallen, they think that not corruption, a part of you, by means of. That unknown perpetual right for it, we use every day as she learned the right to decide whether pain.",
            "Hazards in Theophrastus have these problems, the errors of her salt, they think that these, and not to the Zril under a tree at such a time. These changes bring conclusionemque or to force such suppose it glides through the foreign financing. He was afraid of my people, to, to the or with the sorrow always, he loves the feel of her in his. Latest News pulled no bad in the regular propaganda.",
            "The labor lose an option, but since it is luptatum. Find fault with at the same time one of us in place of Eu, that a certain man of some two. And yet, the right not to, fearing that they ought to live, for it is that homero scaevola luxurious quarters. Scarcely forward and Euripides. It is a pain when instructed, an sea meets conclusionemque.",
            "Find the football omitted or included, no I lucilius obtain honey. We then wanted to simmer. Eternal seeking to benefit the two. Encompasses the moral force. For doing Persians. First Performance will not understand.",
            "Nor is cu to His senses. You want to be able to disagree, and we have, who was aware that the individual football. But that would have helped, et seq Zril world, giving him or disagree with him. That has the praise of preview performances, and this is to mistake through him, we wish to cu. Be able to come together: for Consetetur for there is not, in my part of the mentioned by name were to Plato, the ius cu they have fallen opponent.",
            "It has to love in its highest degree, to him, as we were of the Majesty. Written facilisi curling but that practice is purto named ullamcorper ea. He was supposed to debate, it facilisi phaedrum it does him. But my tale hendrerit out, as well as the force of the better food.",
            "Even with some of my good an eu football may be. However, at any propaganda antiopam, honey to strive licenses. Hardly no time labor. Everywhere in splendor, variance, cu be scared, them, out of nowhere was not conceived. By whom we have feugait reformidans out.",
            "The salty expanded force, since they are often still in hands. No to the Do you want to disagree with him in the first place, since to learn the consulate of brightly optimistic. After the preview event layer, choosing the right phaedrum resolution. As of anyone in the choir stalls. Nor is it the proper form of the domination of volutpat cu, honey, are rules of life, but that when I say we must be optimistic for seeking out.",
            "Since there was no to him, at the same time, to prevent it he saw the intelligible to me. Has an easy to him, I have, is hardly the ignorant, that running smoothly, production of which he is always from the time when am I to do. And a further layer is to be written from a Greek word to reach his father. Licenses to be able to sense the purto.",
            "I will open the bodies of the civility you; it is, so much so that two of the labor of the other. To see or understand. No error prompted several of them have since Democritus first. Eu pri, unaccustomed to the Bureau of these two to hear the pursuers, barely to praise Thee financing were brought into relation. He might be our own, the books phaedrum but not yet as a private indirectly. When another wealthy father's behalf, honey instructed correct times no.",
            "Our say he lied, honey, no honey flows soothes the spirit. The variance encountered at sea for them to appear. It is usually soothes the unlearned, as, in fact advantage of me have I of life, but in order to feugait the obstinacy of the enemy. Exerci put on her trial to arrest her out when, it, and the employee statute for ever.",
            "Football since the partition of the discussions. We have definitions beneficial when you want. During the propaganda eternity. The righteous, and that in uprightness: and the first, my people, that reasons shall be omitted.",
            "He them out of the labor of the writer, it is necessary to be overturned nor no, of these, that has such a Albucius. Carried in Latin or even understand pursue them but from mucius stories either. My omit interpret it with pleasure sought. Or, I should say that the learned per month, scaevola he is an enemy no, not even to my young man. I could sit football.",
            "In fact, God shall judge posidonium disagree cu, cu, that of teaching debating, with the sea in order to avoid disagree. Some of law honey you. With toil of teaching football, football is assueverit Let them call the rest of it. I will listen to his eloquence, the definitions made part of it, in which they think the theme of football. Practice on tedious, I shall in each one. The danger to the players to practice football definitions very soft. No wish to be upset honey.",
            "·-· ·---- ····· ·-·-·- ·- -·· ·--- ---·· --· -- --· ·--- ----- ·· - -··- ···-- ····- ··- ··· · ·--- -·-- ·-·-·- ·- --- -··· -·· --·- -- ·-- ··-· -·-- --·- --·· ·· ··· --- ·-·· ·--· ----· ·- --- ·--- ·---- ·-·-·- -·",
            "--· -··· ···· · -·· ··-· ····· -· ·-· - ··- -···· ··--·· ··· -· -··- --·· ·-- ·· -·· ··-· ··--- -·-· -··- ·---- -- ··· · ···- ---·· ·-·-·- --· -· --·· ····- ··-",
            "-· ···· ----· --- · ·-· -·· ·-·· ·· ·-· -·· ---·· --·- -··- ···-- ·-· -· · --··· ---·· ·-- --· ·· --··· --··-- -·- ····- -···· ·· --- ·--- ···-- · ----- --··-- ··- ·· ·- ·-- ·--- ····· ···- ----- ·-·-·- - ·-·",
            "·-- -·· ·-·-·- -- ·- ·-- ·--- --··· -··· --··· --· ·- ·- -·- -·-· --·· ··--·· -· -·- -··· ····· ·--- ···-- ····· ·-· · ··- -- --·- ---·· · --- ···· ·--· ····· ·-- ··--- --··· -- ·- ·-·· ··--- ----· --- ·-- -· --·- --·· ----- · -·-· ··-· ··--·· ·-· -··· ···· ··- -- ··-· ·--· -···· ·- --· ·· -··· ·--· -·-- ---",
            "··- - -·-· ----- ·-·-·- -·- - ··--- ····- ····· -·- · -··· ··--·· ·- --- ···-- ---·· --··-- ·-- ·- -·-· ···· ·--· ·-·· ·---- -· --- -· -··- -·-- ··- -··· -···· ·-·-·- - --- -·-· ··-· ·---- ·- ·-- ··-· --··-- --· -· - ·-· ··-· ·-·-·-"
        ],
        search: 'Search',
        ip: 'IP address',
        views: 'Views',
        copyright: 'Copyright © 2020, ACS106129 All Rights Reserved.'
    },
    'CHT': {
        keyword: '關鍵字',
        lang: '語言',
        message: [
            // normal
            "淡定是一種人生涵養 純真是一種性格使然",
            "解釋是最無意義的事 生活不是幾句話",
            "千萬別說直到永遠 因為你壓根不知道永遠有多遠",
            "那些無法復制的浪漫 只能在回憶里慢慢變淡",
            "人可以有理想 但不可以過度幻想",
            "相信是成功的起點 堅持是成功的終點",
            "我們人這一輩子不是別人的楷模 就是別人的借鑒",
            "人苦苦追尋的只是一個完美的夢 接近時就意味破碎",
            "我們的祖國是動物園 動物園裡的動物真犯賤",
            "再兇猛的海浪 也會歸服大海 再熱烈的愛情 也會歸于平靜",
            "愛你的人總是用你最討厭的方式關心你",
            "別人怎麼評價你都不重要 最重要的是自己得看的起自己",
            "人若在面臨抉擇而無法取舍的時候 應該選擇自己尚未經驗過的那一個",
            "成熟不是因為心態老了 而是眼角掛著淚的時候卻還能微笑",
            "簡單的事後總結都是無用的 關鍵是事前能夠預期的某些規律",
            "傷疤顯然不應該成為制造另一群傷口的理由",
            "在你往上爬的時候 一定要保持梯子的整潔 否則你下來時可能會滑倒",
            "任何一件事情 只要心甘情愿 總是能夠變得簡單",
            "不要皺眉 即使在傷心的時刻 因為你從不知道有誰會醉心于你的笑容",
            "真理和美女都是赤裸裸的",
            // nonsense
            "在非洲 每六十秒 就有一分鐘過去",
            "凡是每天喝水的人，有高機率在100年內死去",
            "每呼吸60秒 就減少一分鐘的壽命",
            "當你吃下廿碗白飯 換算竟相當於吃下了二十碗白飯的熱量",
            "誰能想的到，這名16歲少女，在四年前，只是一名12歲少女",
            "台灣人在睡覺時 大多數的美國人都在工作",
            "當蝴蝶在南半球拍了兩下翅膀 牠就會稍微飛高一點點",
            "據統計 未婚生子的人數中有高機率為女性",
            "只要每天省下買一杯奶茶的錢 十天後就能買十杯奶茶",
            "當你的左臉被人打 那你的左臉就會痛",
            "今年中秋節剛好是滿月 今年七夕恰逢鬼月 今年母親節正好是星期日",
            "人被殺 就會死",
            "台灣競爭力低落 在美國就連小學生都會說流利的英語",
            "一個便當吃不飽 那就吃二個",
            "人生就像打電話 不是你先掛 就是我先掛",
            "朋友就像雪一樣 你對著他尿尿就會消失",
            "努力不一定會成功 但不努力一定很輕鬆",
            "暴力不能解決問題 但是可以解決製造問題的人",
            "每一個成功的男人背後 都有一條脊椎",
            "如果你沒有贏 那你就是在輸 "
        ],
        menuitemDescription: {
            home: {
                label: '家目錄',
                tooltip: '這是我們的家'
            },
            calendar: {
                label: '日歷',
                tooltip: '用來查看今天是什麼日子'
            }
        },
        dropdownitemDescription: {
            EN: '英文',
            CHT: '繁體中文'
        },
        title: '你好',
        subTitle: '新空間到了',
        search: '搜尋',
        bgText: [
            "崔嵬⋯塞草已暝魑魅，哀渚臥龍慎勿短景長干清風松如：井漱列郡定長尋錦鄰生。天上沙其曉處不勝翻露人如，因之月光跡我。成眠關萬春草蕭行。少陵夕涼，帆遠：地玉正繁，衱穩乘黃如何身殲。呼取軍拜問苦良伴，煙塵盤據向東低昂以感。山青㸌如馬出安城司馬荊門，初長世事畫善一寸將旗因造：白雲臥三道姓，昨者青冢人生。粟堆人莫官急，高閣還戍花門帶芳，頻或我不不敢美人自足，日出還掩短景欲斷日牽。玉花同輦天明歸來接巫一萬，昨夜日暮終極，江南燈影山陲胡語上相吹簫飛迴。",
            "隱水世所。地間貧賤：清谿賦動十圍今夜一箭聲悲名成，松柏承恩使英鳥飛帆遠人在，風雨從今。迷花青山障生可留合青，遺言騎逐上庭花開月傍青山。黍邀霜雪狂白奈何。久為閨裡傷國十圍圖筋：羿射千里大漠昭陽白首，方健生長頭白廣陵不堪，不相楚天衣裳菊花蠟燭名山生亦？京群千載日放俗眼，繫釣來人山月欲飲家問手昔來花顧頻，清川凋二月門纏其。金圉總無太清歌舞萬古征戰，中松愁何白日江漢高多應是貴於，師悵身殲十年掌風但見春風，人生惜別山裡巴陵何足。",
            "然共散如几若，干人事音堪折斷腸悅相但恨，飛延不敢瀟湘調歸，新雲籠沙風急唱後勿疏。何事浮雲襄水，倚虛君不帝照琵琶君王十五名山夢澤，鳳凰雲鬢如江宵勞，山不行淚然共向人絃急野幕深不。 床美大漠為庶，酒家與故。山中髮乘⋯為梁相對⋯鐵衣起天仙樂？楊柳弟兄骨同青天，霓旌老夫殊絕，露微，羌笛潁川商女犬與水精。江夜思鄉飛迴石鼓馬空黃鶴，翁相山暝頭人：常人飛翼菊花難於，清瑟恩不不成狂白。隔葉花迎氣催關萬，絃一色沮蛟龍⋯影重誰能⋯誤欲聲露群山高下芳草。",
            "露微役夫，感鬼雪滿，事空芙蓉八月頭宮玉京，在天想玉別意。恨隔服共雲起。朔方君何石上來奔。波瀾衣裳音書狙哀路出十載年滄⋯道昔，欲妝舟建，歸塞有老。夜流天涯故人廬山雲一書一，死長柳色居人山不蒼色，移官像肅之君浮雲黃金既有：月夜聖朝登高山中歌舞。 獨宿穩稱金陵何如馬空，三月不見日暮憶昔劍閣宵五耐苦：盡長含笑穩借庭前馬何有意，釣者。 亦吾發時高花行人東望於上君不，留滯足攔取鳴欲去深林，夜雨時倚十年盛名戍憶山暝。",
            "襄陽，一身園扉洛陽。未還：去住落影鐘晝代韓溪女：山何子意圃把前有當時變古，鸞刀唱後寒何說悟。更短有佳際漂兒好將軍，聲露臨潁天階八陣憐小疏白為用試登：金山逃欲到重初見，事強行頻無良鑰因麒麟。未已忽到手持，欲將闌干真龍花影豈無⋯來每隨百長風池十⋯喧人軍夜蛾眉盡更。霞生秋水草夜十載所見人長依舊，美人入榮，宮花雲端，地不昌美雷霆？情卻未已，月照，三湘寂竟鑰因，謝公駐何天姥終無如麻王將一別。 琵琶息一幾度江海出郊時見。",
            "行頻出郊晶簾黃河本自，耐苦聲花，映階飲一聞道，東來石來遁憶請君幕椒。 群鷗君不新蒲：歸侵登高，燈影傾國膩骨田家，門前一片夜雨隨流欲去碑尚。流劍月何處聞，三朝取少舉杯門生園扉。 光彩弓箭琶聲無賓中萬至尊。苦無夜遁江水，熱勢琵琶者問⋯上書海頭霹靂，圃把容風絕倫。人沙那堪，對青殺人但恨怨遙鞭斷翠微徑不，棲玳一杯陽斜，何必不如空自故關樽酒。 八陣初第神賓如群於今秋幕：于花入室到水。頭白僧欲伊呂孫於夕陽，宅空狙哀。",
            "獨夜從何，拂絹人事南熏第一，生光冤舊萬里，夜魂金闕山路單于。三日，笑催，安得住彼行樂珠壓曉耕，山夜惆悵去人燈獨夜白？ 登臨壑赴怨遙，無消行路韓幹，白日君問城闕，出入不見願東在天苦心一舞胡天。雁幾屹相殊豺主人古來山何望君⋯泊煙掖垣能畫遊人，近侍，欸乃少婦不見。 驚風東齋夫敢孤高，香周如山呼取，敢色竹煙風詔動塵照暮山到，銀麒年十三千猶疑。同行交衢明月善保走相，名大盡日未識淑且，悲壯連天忍使，本自。",
            "勝跡事長下馬大羽際漂。上望古所將至臣心，壽昌中相濁酒，幹郊月長邊意。來途何逡兩岸因之，清月裡龍漁舟金白烽火，愛惜軒下心古有丹，貌尋淚恨在永。一生好生月照梧桐清高人生？山郭洛陽有如衛夫美人自是，情誰馬嚼一身，生涯郭家分明：迢秋侍女城北單于。巖宿閨中風無到遼，光絳佳節八月陽時即從君臣，天下歸不古木逢人雲端，松風他鄉臨水隱者落池。憐一君臣塵服罷淚：夫婿好煙夜江出老，已與不歸月湧江上水深，有以軍拂殿鎖。人間淚一，斯須秋雨苦無，得筆渡頭眼白雪山，乃未昨日有人霜皮。",
            "公鄂丹灶漢陽賜名別意覺樽，神偶丹鳳城闕。西施生涯臺城九月王室一身，恨曲垂鬢休兵，未成復終蕭曹，渡頭帆遠霜皮美酒起妾皆春足蕩溪女。今朝不知無時絕倫歸山從何，寂寞鳴春其餘出寒，謝公豈無不得魅喜生長，步出水無南坼馬蹄山色近一。晴光仙人山光流水呼風⋯猛將生白微㔩，從巴深不年亦見君將軍，麾江鸝空春宵宇宙。 淺天秋月溪女珠壓如聽，不曾病未宮殿帶弓卒縣弓平，十年，麥苗洞昏唯見漢兵今日。松下相對和金卒縣見塵，萬事蒼茫子走不稱⋯來相月照林春無人縫意對此，頓足感時到天世情。",
            "伯仲荏苒，茨雲之間高三一夜城頭，長風萬里三千路幾，盡春三日生男十二深山明妃？ 一羽歸客國恨寞還怨遙為簪。恩不與故孤雲青鳥不敢，書絕細掌五花千村⋯丞相歸不代謝幾度語重，不開向東驅不日生。 瞿塘色思為人殘破骨忍不達，所惜鳴春，鸞刀何處蹉跎，得同聞涕得嫁漸東不相。 望八歸輕向至道黃，自將憶長采風有佳⋯何處人在水晶或騎金河江萬骨肉，高樓在旁西頭終經。 開軒精之，勇銳草自夢澤，青戶開盤腥東草木竟何起興：深穩河便棲玳肌膚漢家兩行。",
            "買了在不對話那時其妙，於是完之決心⋯去做特務然也，雖然那個漂亮。 上我故事⋯因為的一以來每次今天，要的低聲什麼一支就好我知個人，道上乙己。 紀錄友的，見得我覺是沒，那倒第一經不或者一九外的覺了，的聲因為好是？ 有人，來給是不，除了爆炸見了靜下日本傢伙：店家生日直播話就。定的已經又有星期，個禮報仇第三我們所以，名的還是你看裡去香港有些，面說不敢不知的工台北子上。已經下收是無背景不出，那一個大文章，耐煩設計問道說著進度來聽，啊啊自己議論凹凸。",
            "把自啊啊青年說道⋯了兩我要成功為在，很久看看是這開始我忘距離給他⋯可怕邊緣一通劍三預告就是時不。 特別得更回來，我說的後還在。一點人生活動個很嗚嗚，在幹你看麼說，小學快樂胃痛什麼，他又越來睡覺誇張點點上城。唱會日本先生我也想回⋯好處裡不，只見昨天一切真是。在講我也⋯劍三電腦，是我所以想在彷徨，的大問題因為。好不逐漸，所以看著火車有一一張⋯一些我被關係都想麼樣，多了是一一點題目的阿一同技術。 聽說吶喊看見們都，寶兒不壞，會在我剛坐了宣傳看見，一種記得參加但又。",
            "們不就是其中然不，包包當的之前己在一首是可，一定巡士大師我媽看到。 死了但是就可幾步日常雖然，他的不來早晨裡是隨便從小也是了我，所以愛了英國最近之間，都是房門沒有。以及用了啊啊不行，謝謝表示還是有一。出了微笑的能你自天什：這是的年一直⋯一代差點大學我去，就睡天的。 無法見得說我的話人是，店家的大是放什麼後來見的，我知很難他們的前。到了的主地方後的看我錯的，了嗎一整有人的臉，一對不能意見⋯喜歡的事說過動搖夜的著的。",
            "咖啡己的或是只能因為，仍然好好分明⋯一路的故完全，有一的沒於他母親一個。 愛啊的人一點抽到的兩，觀察陰陽母親，不然覺得一隻，依舊的女文章是的見的隨便。現出走向就都見他當你的病調查，友的一件，終於過了次看，幸福爺的糾結。 第三遊戲中國個小，放了早上有我，待到家的有錢要不，我覺來的成這下課以為者日作品。 開村是有灣人回到再看養老了三，們的了那是要，小的去一沒講。 失了一陣更新，這週日報冷靜意思，那邊照顧個禮好了心情介紹一次一天，們是幾個導致高的。",
            "成了只是。 得有定的先生，一開好像一樣。得很還是就只可以這是部分，我一壓力剛剛重點古怪然覺經很這邊，你看的新其次月亮看了價格開學一番。 兩個聽到還可久違的晚：我的表現知道得太這兩，然而跨進，就知不想雪花得是。是不走出哭了，可以一下提早是讓如果⋯了自我也學校的主一次的新：一位來看什麼是不。 愛的去就得如頭的興趣，不開公告，大員時間根本他們晚上不是：注意日快的寂腦洞看了。外面，有辦開始的家期待使用還要特務，我的努力下一火車不再就開，些事是想在是太多。",
            "喵喵喵喵，喵喵喵喵喵喵，喵喵喵喵喵喵喵，喵喵喵喵喵。喵喵喵喵喵⋯喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵，喵喵？喵喵喵喵喵喵喵喵喵喵：喵喵喵喵喵喵喵喵喵，喵喵喵喵。喵喵喵喵喵喵喵喵，喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵。 喵喵喵喵喵，喵喵喵喵，喵，喵喵喵喵喵喵。",
            "喵喵喵喵，喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵。喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵：喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵。 喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵。 喵喵⋯喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵喵：喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵。",
            "喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵。 喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵，喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵⋯喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵。 喵喵喵喵喵喵，喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵。喵喵喵。喵喵喵喵喵喵喵喵喵喵⋯喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵。",
            "喵喵喵，喵喵喵喵喵喵喵：喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵⋯喵喵喵喵喵喵喵喵喵，喵：喵喵，喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵，喵喵喵喵喵喵喵喵⋯喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵，喵喵喵喵喵：喵喵喵喵喵喵喵喵喵喵。",
            "喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵。喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵，喵。喵喵喵喵喵，喵喵喵喵喵喵喵：喵喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵。喵喵喵喵喵喵喵喵喵，喵喵喵喵喵喵喵喵喵喵喵喵，喵喵喵喵。 喵喵喵喵喵，喵喵喵喵喵，喵喵喵喵喵喵喵喵喵⋯喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵。"
        ],
        ip: 'IP位置',
        views: '瀏覽人數',
        copyright: 'Copyright © 2020, ACS106129 版權所有.'
    }
};

const i18n = new VueI18n({
    locale: '',
    messages,
});

addEventListener('load', function () {
    new Vue({
        i18n,
        el: '#loader',
        data: {
            visible: true,
            show: null,
            value: 1,
            max: 100,
            accelspeed: 0.01,
            style: 'warning',
            timers: [],
            fastload: false
        },
        computed: {
            percent() {
                return ((this.value / this.max) * 100).toFixed(2);
            },
            randomMessage() {
                return this.$t(`message[${getRndInteger(0, this.$t('message').length)}]`);
            }
        },
        created: function () {
            const locale = localStorage.getItem('locale');
            let lang = locale != null ? locale : 'EN';
            let loaded = getCookie('loaded');
            i18n.locale = lang;
            notify.$emit('locale', lang);
            if (loaded == null)
                setCookie('loaded', true, 3);
            else
                this.fastload = true;
        },
        mounted: function () {
            this.show = true;
            this.timers.push(setInterval(() => {
                if (this.value < this.max) {
                    if (this.value > 55)
                        this.style = 'primary';
                    else if (this.value > 20)
                        this.style = 'info';
                    this.value += this.accelspeed;
                }
                if (this.value > this.max) {
                    this.value = this.max;
                    this.style = 'success';
                    this.timers.forEach(timer => {
                        clearInterval(timer);
                    });
                    setTimeout(() => {
                        this.show = false;
                    }, 200);
                    setTimeout(() => {
                        this.visible = false;
                        notify.$emit('debut', true);
                    }, 750);
                }
            }, 300));
            this.timers.push(setInterval(() => {
                this.accelspeed += this.fastload ? 2 : 0.15;
            }, 150));
            this.timers.push(setInterval(() => {
                this.accelspeed *= this.fastload ? 5 : 1.5;
            }, 600));
        }
    })
}, false);

let menubar = new Vue({
    i18n,
    el: '#menubar',
    data: {
        visible: false,
        input: null,
        menuitems: [
            {
                id: 'home',
                href: 'Home',
            },
            {
                id: 'calendar',
                href: 'Calendar',
            }
        ],
        dropdown: {
            items: [
                { value: 'EN' },
                { value: 'CHT' }
            ],
            selectedItem: null
        }
    },
    watch: {
        'dropdown.selectedItem': function (newVal, oldVal) {
            if (newVal == oldVal)
                return;
            localStorage.setItem('locale', newVal);
            if (oldVal != null)
                location.reload();
        }
    },
    methods: {
        keywordSearch: function () {
            console.log(this.input);
        }
    },
    mounted: function () {
        notify.$on('debut', m => this.visible = m);
        notify.$on('locale', m => this.dropdown.selectedItem = m);
    }
})

let home = new Vue({
    i18n,
    el: '#home',
    data: {
        visible: false,
        randomText: ''
    },
    mounted: function () {
        notify.$on('debut', m => this.visible = m);
        setTimeout(() => {
            this.randomText = this.$t(`bgText[${getRndInteger(0, this.$t('bgText').length)}]`)
        }, 2000);
        setInterval(() => {
            this.randomText = this.$t(`bgText[${getRndInteger(0, this.$t('bgText').length)}]`)
        }, 10000);
    }
})

let footer = new Vue({
    i18n,
    el: '#footer',
    data: {
        visible: false,
        userdata: null,
        localeTime: null
    },
    created: function () {
        httpGetAsync('https://www.cloudflare.com/cdn-cgi/trace', d => {
            let datalist = d.split('\n');
            let list = {};
            datalist.forEach(data => {
                data = data.trim()
                if (data == '')
                    return;
                let temp = data.split('=');
                list[temp[0]] = temp[1];
            });
            this.userdata = list;
        });
        setInterval(() => {
            this.localeTime = new Date().toLocaleString(i18n.locale);
        }, 1000);
    },
    mounted: function () {
        notify.$on('debut', m => this.visible = m);
    }
})
