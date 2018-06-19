<template>
  <section id="accommodations">
    <div class="accommodations-head">
      <h2 class="imageHeadline"><img src="images/accommodations-title.png" alt="十日町市内の宿泊施設一覧"></h2>
      <div class="f-row">
        <div class="f-col">
          <figure><img src="images/area-map.png" alt="十日町市エリアマップ"></figure>
        </div>
        <div class="f-col">
          <h3 class="imageHeadline"><img src="images/accommodations-head02.png" alt="エリア別に宿泊施設を見る"></h3>
          <ul class="area-selectors">
            <li class="area-selector area-all active" data-area="all">全エリア</li>
            <li class="area-selector area-tokamachi" data-area="tokamachi">十日町エリア</li>
            <li class="area-selector area-kawanishi" data-area="kawanishi">川西エリア</li>
            <li class="area-selector area-nakasato" data-area="nakasato">中里エリア</li>
            <li class="area-selector area-matsudai" data-area="matsudai">松代エリア</li>
            <li class="area-selector area-matsunoyama" data-area="matsunoyama">松之山エリア</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /.accommodations-head -->

    <div class="count"><span id="area-display"></span>の宿泊施設  <span id="area-count-denominator"></span>軒中 <span id="area-count-numerator"></span>軒</div>
    <!-- insert w/ js -->
    <div id="accommodations_list">

<!-- =================  ここから  ======================= -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/haradaya_ryokan/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation001.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">原田屋旅館</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-752-2121</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/hotel_mukadeya/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation002.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">ホテルむかでや</div>
    <div class="accommodation_type">和室/洋室</div>
  </a>
  <div class="accommodation_tel">025-757-1177</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/ryokan_shimizuya/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation003.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">旅館清水屋</div>
    <div class="accommodation_type">和室/洋室</div>
  </a>
  <div class="accommodation_tel">025-752-2477</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/shimizu/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation004.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">ホテル＆ダイニング しみず</div>
    <div class="accommodation_type">和室/洋室</div>
  </a>
  <div class="accommodation_tel">025-752-2058</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/yoshimoto_ryokan/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation005.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">よし本旅館</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-752-2767</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/shinkou/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation006.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">ビジネスホテル信江</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-757-8396</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/hotel_newtokamachi/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation007.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">ホテルニュー十日町</div>
    <div class="accommodation_type">洋室</div>
  </a>
  <div class="accommodation_tel">025-752-7400</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/ichibankan/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation008.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">壱番館</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-757-8837</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/hayamaso/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation009.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">ハヤマ荘</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-757-5760</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/kamiya/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation010.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">かみや</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-757-6896</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/kakura/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation011.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">かくら</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">070-4000-4199</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/bandai/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation012.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">萬代</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-752-6627</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/hyakunennnoyakata/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation013.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">百年の館</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-761-7123</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/kakinokian/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation014.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">柿の木庵</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-789-3390</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/hachane/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation015.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">ゲストハウス ハチャネ</div>
    <div class="accommodation_type">洋室</div>
  </a>
  <div class="accommodation_tel">025-755-5777</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/koryukan/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation016.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">十日町ふれあいの宿 交流館</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-752-3289</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi_hotspring/yasuragi/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation017.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">心の宿 やすらぎ</div>
    <div class="accommodation_type">和室/十日町温泉郷</div>
  </a>
  <div class="accommodation_tel">025-757-1547</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi_hotspring/yumotoso/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation018.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">湯元荘</div>
    <div class="accommodation_type">和室/十日町温泉郷</div>
  </a>
  <div class="accommodation_tel">025-752-2169</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/atema_hotspring/belnatio/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation019.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">当間高原リゾート ベルナティオ</div>
    <div class="accommodation_type">和室／洋室/あてま温泉</div>
  </a>
  <div class="accommodation_tel">025-758-4888</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="tokamachi">
  <a href="http://www.tokamachishikankou.jp/stay/tokamachi/outland/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation020.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag tokamachi">十日町エリア</div>
    </div>
    <div class="accommodation_name">アウトランド</div>
    <div class="accommodation_type">キャンプ場</div>
  </a>
  <div class="accommodation_tel">025-755-2067</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="kawanishi">
  <a href="http://www.tokamachishikankou.jp/stay/kawanishi/house-of-light/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation021.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag kawanishi">川西エリア</div>
    </div>
    <div class="accommodation_name">光の館 -House of Light-</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-761-1090</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="kawanishi">
  <a href="http://www.tokamachishikankou.jp/stay/kawanishi/daichi/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation022.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag kawanishi">川西エリア</div>
    </div>
    <div class="accommodation_name">農家民宿大地</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-768-3583</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="kawanishi">
  <a href="http://www.tokamachishikankou.jp/stay/kawanishi/fushiguro_cottage/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation023.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag kawanishi">川西エリア</div>
    </div>
    <div class="accommodation_name">節黒城跡コテージ</div>
    <div class="accommodation_type"></div>
  </a>
  <div class="accommodation_tel">025-768-4419</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="kawanishi">
  <a href="http://www.tokamachishikankou.jp/stay/kawanishi/fushiguro_bungalow/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation024.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag kawanishi">川西エリア</div>
    </div>
    <div class="accommodation_name">節黒城跡バンガロー</div>
    <div class="accommodation_type"></div>
  </a>
  <div class="accommodation_tel">025-768-4419</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="kawanishi">
  <a href="http://www.city.tokamachi.lg.jp/kanko/K019/K021/1454068576984.html" target="_blank">
    <div class="s-image">
      <img src="images/accommodation025.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag kawanishi">川西エリア</div>
    </div>
    <div class="accommodation_name">キャンパス白倉</div>
    <div class="accommodation_type"></div>
  </a>
  <div class="accommodation_tel">025-768-4951</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/nakasato/murayamaso/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation055.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">村山荘</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-763-3757</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/nakasato/keizanso/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation056.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">渓山荘</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-763-3762</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/nakasato/hayashiya_ryokan/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation057.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">林屋旅館</div>
    <div class="accommodation_type">和室/洋室</div>
  </a>
  <div class="accommodation_tel">025-763-2016</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/nakasato/nakaya/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation058.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">中屋</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-763-4087</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/nakasato/sanzen/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation026.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">農家民宿　三左衛門（さんぜん）</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-761-3721</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/nakasato/juuchioike_park/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation027.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">重地大池自然観察広場</div>
    <div class="accommodation_type"></div>
  </a>
  <div class="accommodation_tel">025-763-3001</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/nakasato/%E6%B8%85%E7%94%B0%E5%B1%B1%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4%E3%80%80%E3%82%B3%E3%83%86%E3%83%BC%E3%82%B8/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation028.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">清田山キャンプ場</div>
    <div class="accommodation_type">洋室</div>
  </a>
  <div class="accommodation_tel">025-763-3001</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/kiyotsukyo_hotspring/kiyotsukan/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation029.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">清津館</div>
    <div class="accommodation_type">和室/日帰り入浴/清津峡温泉郷</div>
  </a>
  <div class="accommodation_tel">025-763-2181</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/kiyotsukyo_hotspring/hotel_setoguchi/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation030.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">いろりとほたるの宿せとぐち</div>
    <div class="accommodation_type">和室/日帰り入浴/清津峡温泉郷</div>
  </a>
  <div class="accommodation_tel">025-763-2431</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="nakasato">
  <a href="http://www.tokamachishikankou.jp/stay/miyanakajima_hotspring/mion_nakasato/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation031.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag nakasato">中里エリア</div>
    </div>
    <div class="accommodation_name">ミオンなかさと</div>
    <div class="accommodation_type">和室/日帰り入浴/宮中島温泉</div>
  </a>
  <div class="accommodation_tel">025-763-4811</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsudai">
  <a href="http://www.tokamachishikankou.jp/stay/matsudai/hinminka_mirai/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation032.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsudai">松代エリア</div>
    </div>
    <div class="accommodation_name">貸民家みらい</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-597-2561</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsudai">
  <a href="http://www.tokamachishikankou.jp/stay/matsudai/matsuwaso/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation033.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsudai">松代エリア</div>
    </div>
    <div class="accommodation_name">青少年研修センター 松和荘</div>
    <div class="accommodation_type">和室/洋室</div>
  </a>
  <div class="accommodation_tel">025-597-2301</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsudai">
  <a href="http://www.tokamachishikankou.jp/stay/matsudai/dappihouse/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation034.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsudai">松代エリア</div>
    </div>
    <div class="accommodation_name">脱皮する家</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-761-7767</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsudai">
  <a href="http://www.tokamachishikankou.jp/stay/matsudai/yamanoie/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation035.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsudai">松代エリア</div>
    </div>
    <div class="accommodation_name">山ノ家ドミトリー</div>
    <div class="accommodation_type">洋室</div>
  </a>
  <div class="accommodation_tel">025-595-6770</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsudai">
  <a href="http://www.tokamachishikankou.jp/stay/shibatouge_hotspring/shibatouge_unkai/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation036.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsudai">松代エリア</div>
    </div>
    <div class="accommodation_name">まつだい芝峠温泉　雲海</div>
    <div class="accommodation_type">和室/洋室/日帰り入浴/芝峠温泉</div>
  </a>
  <div class="accommodation_tel">025-597-3939</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsudai">
  <a href="http://www.city.tokamachi.lg.jp/shisetsu/S009/S010/1455501962857.html" target="_blank">
    <div class="s-image">
      <img src="images/accommodation037.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsudai">松代エリア</div>
    </div>
    <div class="accommodation_name">芝峠コテージ</div>
    <div class="accommodation_type"></div>
  </a>
  <div class="accommodation_tel">025-597-3939</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsudai">
  <a href="http://www.tokamachishikankou.jp/sports/camp/matsudaijoseki_park" target="_blank">
    <div class="s-image">
      <img src="images/accommodation038.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsudai">松代エリア</div>
    </div>
    <div class="accommodation_name">松代城跡公園キャンプ場</div>
    <div class="accommodation_type"></div>
  </a>
  <div class="accommodation_tel">025-597-2220</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsudai">
  <!-- <a href="javascript:void(0)" target="_blank"> -->
    <div class="s-image no-link">
      <img src="images/accommodation060.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsudai">松代エリア</div>
    </div>
    <div class="accommodation_name">トロノキハウス</div>
    <div class="accommodation_type"></div>
  <!-- </a> -->
  <div class="accommodation_tel">090-9379-8407</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <!-- <a href="javascript:void(0)" target="_blank"> -->
    <div class="s-image no-link">
      <img src="images/accommodation059.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">花立</div>
    <div class="accommodation_type"></div>
  <!-- </a> -->
  <div class="accommodation_tel">025-596-3270</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama/sanshohouse/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation039.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">三省ハウス</div>
    <div class="accommodation_type">洋室</div>
  </a>
  <div class="accommodation_tel">025-596-3854</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama/greenhouse_satomi/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation040.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">グリーンハウス里美</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-596-3492</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama/dreamhouse/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation041.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">夢の家</div>
    <div class="accommodation_type">和室</div>
  </a>
  <div class="accommodation_tel">025-761-7767</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/hinanoyado_chitose/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation042.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">ひなの宿 ちとせ</div>
    <div class="accommodation_type">和室/洋室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2525</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/tamakiya_ryokan/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation043.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">酒の宿 玉城屋</div>
    <div class="accommodation_type">和室/洋室/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2057</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/ryounkaku/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation044.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">凌雲閣</div>
    <div class="accommodation_type">和室/洋室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2100</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/shirakawaya/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation045.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">白川屋</div>
    <div class="accommodation_type">和室/日帰り温泉/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2003</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/fukuzumi/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation046.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">山の森のホテル ふくずみ</div>
    <div class="accommodation_type">和室/洋室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2323</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/izumiya/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation047.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">和泉屋</div>
    <div class="accommodation_type">和室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2001</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/nomoto_ryokan/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation048.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">野本旅館</div>
    <div class="accommodation_type">和室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2013</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/ryokan_myojo/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation049.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">旅館明星</div>
    <div class="accommodation_type">和室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2544</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/komeya_ryokan/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation050.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">こめや旅館</div>
    <div class="accommodation_type">和室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2163</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/birdgarden/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation051.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">キャンプ場ゲストハウス<br>ばーどがーでん</div>
    <div class="accommodation_type">和室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-3055</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/riverside_yunoshima/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation052.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">渋海リバーサイド ゆのしま</div>
    <div class="accommodation_type">和室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-3205</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.tokamachishikankou.jp/stay/matsunoyama_hotspring/miyoshiya/" target="_blank">
    <div class="s-image">
      <img src="images/accommodation053.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">自炊の宿 みよしや</div>
    <div class="accommodation_type">和室/日帰り入浴/松之山温泉</div>
  </a>
  <div class="accommodation_tel">025-596-2017</div>
</div>
<!-- /loop -->

<!-- loop -->
<div class="accommodation_info" data-area="matsunoyama">
  <a href="http://www.echigo-tsumari.jp/facility/stay/s_australiahouse1" target="_blank">
    <div class="s-image">
      <img src="images/accommodation054.jpg" alt="宿泊施設のイメージ">
      <div class="area-tag matsunoyama">松之山エリア</div>
    </div>
    <div class="accommodation_name">オーストラリアハウス</div>
    <div class="accommodation_type"></div>
  </a>
  <div class="accommodation_tel">025-761-7767</div>
</div>
<!-- /loop -->



<!-- =================  ここまで  ======================= -->
    </div>
    <!-- / #accommodations_list -->

    <div id="view-more-load" class="imageButton">
      <img src="images/read-more-green.png" alt="もっと見る">
    </div>
  </section>
</template>

<script>
export default {
  name: 'accommodation',
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>

</style>
