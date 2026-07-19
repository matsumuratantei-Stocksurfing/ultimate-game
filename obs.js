window.OBS_DATA = {
  "schemaVersion": 1,
  "updatedAt": "2026-07-20（W30定期実行: サイゼリヤを7/17確定終値に修正、US枠にUPSを補完追加=計8銘柄。JP残り2枠は価格確認可能な候補が見つからず未充足）",
  "observations": [
    {"id":"OBS-2026-W29-JP-7581","week":"2026-W29","market":"JP","ticker":"7581","name":"サイゼリヤ",
     "breakoutDate":"2026-07-16",
     "basePrice":{"value":7600,"date":"2026-07-17","tzBasis":"JST","source":"検索取得","isEstimate":true,"priceType":"終値","isAdjusted":true,"note":"7/20定期実行で確定値に修正（旧値: 7,780=ザラ場ストップ高水準）。7/17終値7,600円(+820円/+12.09%、検索確認)。ザラ場高値7,780円から失速して引けた"},
     "features":{"volumeRatio":null,"volumeSurge":true,"dist52wPct":0,"theme":"外食・値上げ検討表明＋3Q最高益","marketCapBucket":"中型","regime":{"vixBucket":"mid","trend":"down","fearGreed":43}},
     "selectionRule":"新高値ブレイク×出来高増加率上位5（機械的・v1）※出来高増加率が確認できないため『年初来/上場来高値更新×ストップ高・上昇率上位』との交差で代替",
     "checkpoints":{"w1":null,"w4":null},"dueW1":"2026-07-24","dueW4":"2026-08-14","status":"open"},

    {"id":"OBS-2026-W29-JP-150A","week":"2026-W29","market":"JP","ticker":"150A","name":"ＪＳＨ",
     "breakoutDate":"2026-07-16",
     "basePrice":{"value":462,"date":"2026-07-16","tzBasis":"JST","source":"検索取得","isEstimate":true,"priceType":"終値","isAdjusted":true,"note":"7/16前場ストップ高買い気配462円(+20.9%)のまま推移との報道。同日の年初来高値更新ランキング上位"},
     "features":{"volumeRatio":null,"volumeSurge":null,"dist52wPct":0,"theme":"半導体関連企業からの受注増・27年3月期上方修正","marketCapBucket":"小型","regime":{"vixBucket":"mid","trend":"down","fearGreed":43}},
     "selectionRule":"新高値ブレイク×出来高増加率上位5（機械的・v1）※同上の代替規則。S高気配のため出来高が実際は薄い可能性あり(volumeSurge=null)",
     "checkpoints":{"w1":null,"w4":null},"dueW1":"2026-07-24","dueW4":"2026-08-14","status":"open"},

    {"id":"OBS-2026-W29-JP-2371","week":"2026-W29","market":"JP","ticker":"2371","name":"カカクコム",
     "breakoutDate":"2026-07-16",
     "basePrice":{"value":3621,"date":"2026-07-16","tzBasis":"JST","source":"検索取得","isEstimate":true,"priceType":"終値","isAdjusted":true},
     "features":{"volumeRatio":null,"volumeSurge":null,"dist52wPct":0,"theme":"内需・ネットメディア（急落相場での逆行新高値）","marketCapBucket":"大型","regime":{"vixBucket":"mid","trend":"down","fearGreed":43}},
     "selectionRule":"新高値ブレイク×出来高増加率上位5（機械的・v1）※同上の代替規則（7/16年初来高値更新ランキング掲載）",
     "checkpoints":{"w1":null,"w4":null},"dueW1":"2026-07-24","dueW4":"2026-08-14","status":"open"},

    {"id":"OBS-2026-W29-US-PLD","week":"2026-W29","market":"US","ticker":"PLD","name":"Prologis",
     "breakoutDate":"2026-07-16",
     "basePrice":{"value":137.18,"date":"2026-07-16","tzBasis":"ET","source":"検索取得","isEstimate":true,"priceType":"終値","isAdjusted":true},
     "features":{"volumeRatio":null,"volumeSurge":null,"dist52wPct":0,"theme":"物流REIT・利下げ期待（S&P500新高値46銘柄中1日騰落率トップ+4.6%）","marketCapBucket":"大型","regime":{"vixBucket":"mid","trend":"down","fearGreed":43}},
     "selectionRule":"新高値ブレイク×出来高増加率上位5（機械的・v1）※出来高増加率が確認できないため『7/16 S&P500 52週高値銘柄×1日騰落率上位』で代替",
     "checkpoints":{"w1":null,"w4":null},"dueW1":"2026-07-24","dueW4":"2026-08-14","status":"open"},

    {"id":"OBS-2026-W29-US-UNP","week":"2026-W29","market":"US","ticker":"UNP","name":"Union Pacific",
     "breakoutDate":"2026-07-16",
     "basePrice":{"value":288.36,"date":"2026-07-15","tzBasis":"ET","source":"検索取得","isEstimate":true,"priceType":"終値","isAdjusted":true,"note":"7/16-17の終値未確認のため確認できた直近7/15終値を採用"},
     "features":{"volumeRatio":null,"volumeSurge":null,"dist52wPct":0,"theme":"鉄道・ディフェンシブ（+3.8% 1D、1年+32.5%）","marketCapBucket":"大型","regime":{"vixBucket":"mid","trend":"down","fearGreed":43}},
     "selectionRule":"新高値ブレイク×出来高増加率上位5（機械的・v1）※同上の代替規則",
     "checkpoints":{"w1":null,"w4":null},"dueW1":"2026-07-24","dueW4":"2026-08-14","status":"open"},

    {"id":"OBS-2026-W29-US-SBUX","week":"2026-W29","market":"US","ticker":"SBUX","name":"Starbucks",
     "breakoutDate":"2026-07-16",
     "basePrice":{"value":105.97,"date":"2026-07-17","tzBasis":"ET","source":"検索取得","isEstimate":true,"priceType":"終値","isAdjusted":true,"note":"7/17レンジ105.08-109.44、検索時点表示105.97を終値推定として採用"},
     "features":{"volumeRatio":null,"volumeSurge":null,"dist52wPct":-3.2,"theme":"外食・ターンアラウンド（+3.1% 1D）。7/17は反落","marketCapBucket":"大型","regime":{"vixBucket":"mid","trend":"down","fearGreed":43}},
     "selectionRule":"新高値ブレイク×出来高増加率上位5（機械的・v1）※同上の代替規則",
     "checkpoints":{"w1":null,"w4":null},"dueW1":"2026-07-24","dueW4":"2026-08-14","status":"open"},

    {"id":"OBS-2026-W29-US-V","week":"2026-W29","market":"US","ticker":"V","name":"Visa",
     "breakoutDate":"2026-07-16",
     "basePrice":{"value":358.30,"date":"2026-07-17","tzBasis":"ET","source":"検索取得","isEstimate":true,"priceType":"終値","isAdjusted":true},
     "features":{"volumeRatio":null,"volumeSurge":null,"dist52wPct":0,"theme":"決済・ディフェンシブグロース（+2.8% 1D、売上+14.4%・営業利益率67%）","marketCapBucket":"大型","regime":{"vixBucket":"mid","trend":"down","fearGreed":43}},
     "selectionRule":"新高値ブレイク×出来高増加率上位5（機械的・v1）※同上の代替規則（UPS/WELL/KOは価格未確認・データ矛盾によりスキップし次点繰り上げ）",
     "checkpoints":{"w1":null,"w4":null},"dueW1":"2026-07-24","dueW4":"2026-08-14","status":"open"},

    {"id":"OBS-2026-W29-US-UPS","week":"2026-W29","market":"US","ticker":"UPS","name":"United Parcel Service",
     "breakoutDate":"2026-07-16",
     "basePrice":{"value":117.72,"date":"2026-07-17","tzBasis":"ET","source":"検索取得","isEstimate":true,"priceType":"終値","isAdjusted":true,"note":"7/20定期実行で補完追加。7/16にS&P500 52週高値46銘柄リスト入り(Trefis、1D+3.8%)。7/17終値117.72ドル(+0.48%、検索確認)"},
     "features":{"volumeRatio":null,"volumeSurge":null,"dist52wPct":0,"theme":"物流・運輸（7/16の1D+3.8%、1年+25.8%。鉄道・運輸セクターに新高値集中の週）","marketCapBucket":"大型","regime":{"vixBucket":"mid","trend":"down","fearGreed":43}},
     "selectionRule":"新高値ブレイク×出来高増加率上位5（機械的・v1）※出来高増加率が確認できないため『7/16 S&P500 52週高値銘柄×1日騰落率上位』で代替。7/18収集時に価格未確認でスキップした次点を7/20に価格確認の上繰り上げ。dist52wPctは52週高値の正確な値が未確認のためブレイク日直後につき0と近似",
     "checkpoints":{"w1":null,"w4":null},"dueW1":"2026-07-24","dueW4":"2026-08-14","status":"open"}
  ]
};
