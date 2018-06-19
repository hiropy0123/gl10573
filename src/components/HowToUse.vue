<template>
  <section id="how_to_use">
    <h2 class="imageHeadline"><img src="images/how_to_use-title.png" alt="グリーンライナーのご利用方法"></h2>
    <div id="how_to_use_tab_field">
      <nav class="tab">
        <ul class="tabs">
          <li class="tab-list" data-tab-active=""><a href="#use01"><img src="images/htu-01-on.png" alt="利用条件"></a></li>
          <li class="tab-list" data-tab-active=""><a href="#use02"><img src="images/htu-02-off.png" alt="出発日"></a></li>
          <li class="tab-list" data-tab-active=""><a href="#use03"><img src="images/htu-03-off.png" alt="旅行代金"></a></li>
          <li class="tab-list" data-tab-active=""><a href="#use04"><img src="images/htu-04-off.png" alt="申込・利用の流れ"></a></li>
        </ul>
      </nav>

      <div id="how_to_use_contents_field">
        <div id="use01" class="tab-content">
          <h3>ご利用にあたり、下記を全て満たしていることが条件となります。</h3>
          <ol>
            <li>
              <span>十日町市内での農業体験、棚田保全、大地の芸術祭運営ボランティア活動（こへび隊等）や、 十日町市主（共）催イベントや地域おこし協力隊等の団体が実施するボランティア活動に参加すること</span>
            </li>
            <li>
              <span>1泊以上十日町市内の有料宿泊施設を利用すること</span>
            </li>
          </ol>
          <p class="attention">※予約後に利用条件と異なる事が判明した場合は予約を取り消します。</p>
          <div class="text-link-green"><a href="#accommodations" class="smoothscroll">宿泊施設一覧はこちら</a></div>
        </div>
        <div id="use02" class="tab-content" style="display:none;">
          <img src="images/departure.png" alt="出発日">
        </div>
        <div id="use03" class="tab-content" style="display:none;">
          <div class="fee">
            <img src="images/fee.png" alt="おひとり様 2,000円">
            <p>大人・小人同額／３才未満幼児：無料 ※バスの座席は確保されません。</p>
          </div>
          <table class="fee-table">
            <tbody>
              <tr>
                <th>募集人数</th>
                <td>各日45名様</td>
              </tr>
              <tr>
                <th>最少催行人員</th>
                <td>各日5名様</td>
              </tr>
              <tr>
                <th>利用予定宿泊機関</th>
                <td>宿泊は含まれておりません。<br>　 お客様ご自身で十日町市内の宿泊施設をご手配ください。</td>
              </tr>
              <tr>
                <th>添乗員</th>
                <td>添乗員：同行しません。</td>
              </tr>
            </tbody>
          </table>
          <div class="text-link-green"><a href="#accommodations" class="smoothscroll">宿泊施設一覧はこちら</a></div>
        </div>
        <div id="use04" class="tab-content" style="display:none;">
          <ol class="flow">
            <li><span class="flow-li">農業体験・ボランティア施設および宿泊施設のお申込み<span class="u-text-small">（お客様ご自身でご手配ください）</span></span></li>
            <li><span class="flow-li">下のボタンからご予約ページへ</span></li>
            <li><span class="flow-li">バスにご乗車時、係員に予約確認メールをご提示ください。<span class="u-text-small">※受信したメール画面または印刷したもの、いずれかをご提示ください。</span></span></li>
            <li><span class="flow-li">十日町市内で農業体験・ボランティア活動・市内宿泊施設のご宿泊。<span class="text-link-green"><a href="#accommodations" class="smoothscroll">宿泊施設一覧はこちら</a></span></span></li>
            <li><span class="flow-li">バスにご乗車時、十日町市内宿泊施設の領収書等をご提示ください。</span></li>
          </ol>
          <p class="details">
              ・グリーンライナーのご予約は、ご出発の5日前までに旅の発見サイトからお申込みください。<br>
              　※満席または催行中止等の場合は受付できない場合がございます。お早目にお申込みください。<br>
              ・お電話でのお申込みは承っておりません。<br>
              ・5日前までのお取消しは、旅の発見サイト内で承ります。<br>
              　※4日前～前日までのお取消しは、ご予約時の受付完了メールに記載の主催者、<br>
              　　株式会社近畿日本ツーリスト関東 長岡支店へ営業時間内（月～金 9:00～17:45）にご連絡ください。<br>
              　※出発当日のお取消しは、予約完了メールに記載の緊急連絡先までご連絡ください。<br>
              　※お客様のご都合によるお取消しは、ご出発日の20日前より所定の取消料を申し受けます。
          </p>
        </div>
      </div>
    </div>

    <p class="u-text-small">
      ※この旅行は十日町市「平成30年度 緑の直行便グリーンライナー運行事業」により実施致します。バス運行経費の一部を十日町市が補助しています。
    </p>

    <div class="imageButton">
      <a href="http://tabihatsu.jp/program/98717.html"><img src="images/reserve_here.png" alt="ご予約はこちらから"></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'how-to-use',
  data: function() {
    return {

    }
  },
  props: [],
  methods: {
    
  }
}
</script>
