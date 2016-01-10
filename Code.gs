// Bias the geocoding results in favor of these geographic regions.
// The regions are specified as ccTLD codes.
// 
// See: https://en.wikipedia.org/wiki/Country_code_top-level_domain
//
// Used:
// https://mbrownnyc.wordpress.com/misc/iso-3166-cctld-csv/
// http://www.convertcsv.com/csv-to-json.htm
// to generate the functions for menu item handling.
/*
var REGIONS = {
  "Afghanistan": "af",
  "Aland Islands": "ax",
  "Albania": "al",
  "Algeria": "dz",
  "American Samoa": "as",
  "Andorra": "ad",
  "Angola": "ao",
  "Anguilla": "ai",
  "Antarctica": "aq",
  "Antigua and Barbuda": "ag",
  "Argentina": "ar",
  "Armenia": "am",
  "Aruba": "aw",
  "Ascension Island": "ac",
  "Australia": "au",
  "Austria": "at",
  "Azerbaijan": "az",
  "Bahamas": "bs",
  "Bahrain": "bh",
  "Bangladesh": "bd",
  "Barbados": "bb",
  "Belarus": "by",
  "Belgium": "be",
  "Belize": "bz",
  "Benin": "bj",
  "Bermuda": "bm",
  "Bhutan": "bt",
  "Bolivia": "bo",
  "Bosnia and Herzegovina": "ba",
  "Botswana": "bw",
  "Bouvet Island": "bv",
  "Brazil": "br",
  "British Indian Ocean Territory": "io",
  "Brunei Darussalam": "bn",
  "Bulgaria": "bg",
  "Burkina Faso": "bf",
  "Burundi": "bi",
  "Cambodia": "kh",
  "Cameroon": "cm",
  "Canada": "ca",
  "Cape Verde": "cv",
  "Cayman Islands": "ky",
  "Central African Republic": "cf",
  "Chad": "td",
  "Chile": "cl",
  "China": "cn",
  "Christmas Island": "cx",
  "Cocos (Keeling) Islands": "cc",
  "Colombia": "co",
  "Comoros": "km",
  "Congo": "cg",
  "Cook Islands": "ck",
  "Costa Rica": "cr",
  "Cote d'Ivoire": "ci",
  "Croatia": "hr",
  "Cuba": "cu",
  "Cyprus": "cy",
  "Czech Republic": "cz",
  "Democratic People's Republic of Korea (North Korea)": "kp",
  "Denmark": "dk",
  "Djibouti": "dj",
  "Dominica": "dm",
  "Dominican Republic": "do",
  "Ecuador": "ec",
  "Egypt": "eg",
  "El Salvador": "sv",
  "Equatorial Guinea": "gq",
  "Eritrea": "er",
  "Estonia": "ee",
  "Ethiopia": "et",
  "European Union": "eu",
  "Falkland Islands (Malvinas)": "fk",
  "Faroe Islands": "fo",
  "Federated States of Micronesia": "fm",
  "Fiji": "fj",
  "Finland": "fi",
  "France": "fr",
  "French Guiana": "gf",
  "French Polynesia": "pf",
  "French Southern Territories": "tf",
  "Gabon": "ga",
  "Gambia": "gm",
  "Georgia": "ge",
  "Germany": "de",
  "Ghana": "gh",
  "Gibraltar": "gi",
  "Greece": "gr",
  "Greenland": "gl",
  "Grenada": "gd",
  "Guadeloupe": "gp",
  "Guam": "gu",
  "Guatemala": "gt",
  "Guernsey": "gg",
  "Guinea": "gn",
  "Guinea-Bissau": "gw",
  "Guyana": "gy",
  "Haiti": "ht",
  "Heard Island and McDonald Islands": "hm",
  "Holy See (Vatican City State)": "va",
  "Honduras": "hn",
  "Hong Kong": "hk",
  "Hungary": "hu",
  "Iceland": "is",
  "India": "in",
  "Indonesia": "id",
  "Iraq": "iq",
  "Ireland": "ie",
  "Islamic Republic of Iran": "ir",
  "Isle of Man": "im",
  "Israel": "il",
  "Italy": "it",
  "Jamaica": "jm",
  "Japan": "jp",
  "Jersey": "je",
  "Jordan": "jo",
  "Kazakhstan": "kz",
  "Kenya": "ke",
  "Kiribati": "ki",
  "Kuwait": "kw",
  "Kyrgyzstan": "kg",
  "Lao People's Democratic Republic": "la",
  "Latvia": "lv",
  "Lebanon": "lb",
  "Lesotho": "ls",
  "Liberia": "lr",
  "Libyan Arab Jamahiriya": "ly",
  "Liechtenstein": "li",
  "Lithuania": "lt",
  "Luxembourg": "lu",
  "Macao": "mo",
  "Madagascar": "mg",
  "Malawi": "mw",
  "Malaysia": "my",
  "Maldives": "mv",
  "Mali": "ml",
  "Malta": "mt",
  "Marshall Islands": "mh",
  "Martinique": "mq",
  "Mauritania": "mr",
  "Mauritius": "mu",
  "Mayotte": "yt",
  "Mexico": "mx",
  "Moldova": "md",
  "Monaco": "mc",
  "Mongolia": "mn",
  "Montenegro": "me",
  "Montserrat": "ms",
  "Morocco": "ma",
  "Mozambique": "mz",
  "Myanmar": "mm",
  "Namibia": "na",
  "Nauru": "nr",
  "Nepal": "np",
  "Netherlands": "nl",
  "Netherlands Antilles": "an",
  "New Caledonia": "nc",
  "New Zealand": "nz",
  "Nicaragua": "ni",
  "Niger": "ne",
  "Nigeria": "ng",
  "Niue": "nu",
  "Norfolk Island": "nf",
  "Northern Mariana Islands": "mp",
  "Norway": "no",
  "Oman": "om",
  "Pakistan": "pk",
  "Palau": "pw",
  "Palestinian Territory (occupied)": "ps",
  "Panama": "pa",
  "Papua New Guinea": "pg",
  "Paraguay": "py",
  "Peru": "pe",
  "Philippines": "ph",
  "Pitcairn": "pn",
  "Poland": "pl",
  "Portugal": "pt",
  "Portuguese Timor": "tp",
  "Puerto Rico": "pr",
  "Qatar": "qa",
  "Republic of Korea (South Korea)": "kr",
  "Reunion": "re",
  "Romania": "ro",
  "Russian Federation": "ru",
  "Rwanda": "rw",
  "Saint Barthelemy": "bl",
  "Saint Helena": "sh",
  "Saint Kitts and Nevis": "kn",
  "Saint Lucia": "lc",
  "Saint Martin": "mf",
  "Saint Pierre and Miquelon": "pm",
  "Saint Vincent and the Grenadines": "vc",
  "Samoa": "ws",
  "San Marino": "sm",
  "Sao Tome and Principe": "st",
  "Saudi Arabia": "sa",
  "Senegal": "sn",
  "Serbia": "rs",
  "Seychelles": "sc",
  "Sierra Leone": "sl",
  "Singapore": "sg",
  "Slovakia": "sk",
  "Slovenia": "si",
  "Solomon Islands": "sb",
  "Somalia": "so",
  "South Africa": "za",
  "South Georgia and the South Sandwich Islands": "gs",
  "Soviet Union": "su",
  "Spain": "es",
  "Sri Lanka": "lk",
  "Sudan": "sd",
  "Suriname": "sr",
  "Svalbard and Jan Mayen": "sj",
  "Swaziland": "sz",
  "Sweden": "se",
  "Switzerland": "ch",
  "Syrian Arab Republic": "sy",
  "Taiwan": "tw",
  "Tajikistan": "tj",
  "Thailand": "th",
  "The Democratic Republic of the Congo": "cd",
  "The Former Yugoslav Republic of Macedonia": "mk",
  "Timor-Leste": "tl",
  "Togo": "tg",
  "Tokelau": "tk",
  "Tonga": "to",
  "Trinidad and Tobago": "tt",
  "Tunisia": "tn",
  "Turkey": "tr",
  "Turkmenistan": "tm",
  "Turks and Caicos Islands": "tc",
  "Tuvalu": "tv",
  "Uganda": "ug",
  "Ukraine": "ua",
  "United Arab Emirates": "ae",
  "United Kingdom": "uk",
  "United Kingdom": "gb",
  "United Republic of Tanzania ": "tz",
  "United States": "us",
  "United States Minor Outlying Islands": "um",
  "Uruguay": "uy",
  "Uzbekistan": "uz",
  "Vanuatu": "vu",
  "Venezuela": "ve",
  "Viet Nam": "vn",
  "Virgin Islands  British": "vg",
  "Virgin Islands  US": "vi",
  "Wallis and Futuna": "wf",
  "Western Sahara": "eh",
  "Yemen": "ye",
  "Yugoslavia": "yu",
  "Zambia": "zm",
  "Zimbabwe": "zw"
};

function cctldClicked_af() {
  cctldClicked('af');
}

function cctldClicked_ax() {
  cctldClicked('ax');
}

function cctldClicked_al() {
  cctldClicked('al');
}

function cctldClicked_dz() {
  cctldClicked('dz');
}

function cctldClicked_as() {
  cctldClicked('as');
}

function cctldClicked_ad() {
  cctldClicked('ad');
}

function cctldClicked_ao() {
  cctldClicked('ao');
}

function cctldClicked_ai() {
  cctldClicked('ai');
}

function cctldClicked_aq() {
  cctldClicked('aq');
}

function cctldClicked_ag() {
  cctldClicked('ag');
}

function cctldClicked_ar() {
  cctldClicked('ar');
}

function cctldClicked_am() {
  cctldClicked('am');
}

function cctldClicked_aw() {
  cctldClicked('aw');
}

function cctldClicked_ac() {
  cctldClicked('ac');
}

function cctldClicked_au() {
  cctldClicked('au');
}

function cctldClicked_at() {
  cctldClicked('at');
}

function cctldClicked_az() {
  cctldClicked('az');
}

function cctldClicked_bs() {
  cctldClicked('bs');
}

function cctldClicked_bh() {
  cctldClicked('bh');
}

function cctldClicked_bd() {
  cctldClicked('bd');
}

function cctldClicked_bb() {
  cctldClicked('bb');
}

function cctldClicked_by() {
  cctldClicked('by');
}

function cctldClicked_be() {
  cctldClicked('be');
}

function cctldClicked_bz() {
  cctldClicked('bz');
}

function cctldClicked_bj() {
  cctldClicked('bj');
}

function cctldClicked_bm() {
  cctldClicked('bm');
}

function cctldClicked_bt() {
  cctldClicked('bt');
}

function cctldClicked_bo() {
  cctldClicked('bo');
}

function cctldClicked_ba() {
  cctldClicked('ba');
}

function cctldClicked_bw() {
  cctldClicked('bw');
}

function cctldClicked_bv() {
  cctldClicked('bv');
}

function cctldClicked_br() {
  cctldClicked('br');
}

function cctldClicked_io() {
  cctldClicked('io');
}

function cctldClicked_bn() {
  cctldClicked('bn');
}

function cctldClicked_bg() {
  cctldClicked('bg');
}

function cctldClicked_bf() {
  cctldClicked('bf');
}

function cctldClicked_bi() {
  cctldClicked('bi');
}

function cctldClicked_kh() {
  cctldClicked('kh');
}

function cctldClicked_cm() {
  cctldClicked('cm');
}

function cctldClicked_ca() {
  cctldClicked('ca');
}

function cctldClicked_cv() {
  cctldClicked('cv');
}

function cctldClicked_ky() {
  cctldClicked('ky');
}

function cctldClicked_cf() {
  cctldClicked('cf');
}

function cctldClicked_td() {
  cctldClicked('td');
}

function cctldClicked_cl() {
  cctldClicked('cl');
}

function cctldClicked_cn() {
  cctldClicked('cn');
}

function cctldClicked_cx() {
  cctldClicked('cx');
}

function cctldClicked_cc() {
  cctldClicked('cc');
}

function cctldClicked_co() {
  cctldClicked('co');
}

function cctldClicked_km() {
  cctldClicked('km');
}

function cctldClicked_cg() {
  cctldClicked('cg');
}

function cctldClicked_ck() {
  cctldClicked('ck');
}

function cctldClicked_cr() {
  cctldClicked('cr');
}

function cctldClicked_ci() {
  cctldClicked('ci');
}

function cctldClicked_hr() {
  cctldClicked('hr');
}

function cctldClicked_cu() {
  cctldClicked('cu');
}

function cctldClicked_cy() {
  cctldClicked('cy');
}

function cctldClicked_cz() {
  cctldClicked('cz');
}

function cctldClicked_kp() {
  cctldClicked('kp');
}

function cctldClicked_dk() {
  cctldClicked('dk');
}

function cctldClicked_dj() {
  cctldClicked('dj');
}

function cctldClicked_dm() {
  cctldClicked('dm');
}

function cctldClicked_do() {
  cctldClicked('do');
}

function cctldClicked_ec() {
  cctldClicked('ec');
}

function cctldClicked_eg() {
  cctldClicked('eg');
}

function cctldClicked_sv() {
  cctldClicked('sv');
}

function cctldClicked_gq() {
  cctldClicked('gq');
}

function cctldClicked_er() {
  cctldClicked('er');
}

function cctldClicked_ee() {
  cctldClicked('ee');
}

function cctldClicked_et() {
  cctldClicked('et');
}

function cctldClicked_eu() {
  cctldClicked('eu');
}

function cctldClicked_fk() {
  cctldClicked('fk');
}

function cctldClicked_fo() {
  cctldClicked('fo');
}

function cctldClicked_fm() {
  cctldClicked('fm');
}

function cctldClicked_fj() {
  cctldClicked('fj');
}

function cctldClicked_fi() {
  cctldClicked('fi');
}

function cctldClicked_fr() {
  cctldClicked('fr');
}

function cctldClicked_gf() {
  cctldClicked('gf');
}

function cctldClicked_pf() {
  cctldClicked('pf');
}

function cctldClicked_tf() {
  cctldClicked('tf');
}

function cctldClicked_ga() {
  cctldClicked('ga');
}

function cctldClicked_gm() {
  cctldClicked('gm');
}

function cctldClicked_ge() {
  cctldClicked('ge');
}

function cctldClicked_de() {
  cctldClicked('de');
}

function cctldClicked_gh() {
  cctldClicked('gh');
}

function cctldClicked_gi() {
  cctldClicked('gi');
}

function cctldClicked_gr() {
  cctldClicked('gr');
}

function cctldClicked_gl() {
  cctldClicked('gl');
}

function cctldClicked_gd() {
  cctldClicked('gd');
}

function cctldClicked_gp() {
  cctldClicked('gp');
}

function cctldClicked_gu() {
  cctldClicked('gu');
}

function cctldClicked_gt() {
  cctldClicked('gt');
}

function cctldClicked_gg() {
  cctldClicked('gg');
}

function cctldClicked_gn() {
  cctldClicked('gn');
}

function cctldClicked_gw() {
  cctldClicked('gw');
}

function cctldClicked_gy() {
  cctldClicked('gy');
}

function cctldClicked_ht() {
  cctldClicked('ht');
}

function cctldClicked_hm() {
  cctldClicked('hm');
}

function cctldClicked_va() {
  cctldClicked('va');
}

function cctldClicked_hn() {
  cctldClicked('hn');
}

function cctldClicked_hk() {
  cctldClicked('hk');
}

function cctldClicked_hu() {
  cctldClicked('hu');
}

function cctldClicked_is() {
  cctldClicked('is');
}

function cctldClicked_in() {
  cctldClicked('in');
}

function cctldClicked_id() {
  cctldClicked('id');
}

function cctldClicked_iq() {
  cctldClicked('iq');
}

function cctldClicked_ie() {
  cctldClicked('ie');
}

function cctldClicked_ir() {
  cctldClicked('ir');
}

function cctldClicked_im() {
  cctldClicked('im');
}

function cctldClicked_il() {
  cctldClicked('il');
}

function cctldClicked_it() {
  cctldClicked('it');
}

function cctldClicked_jm() {
  cctldClicked('jm');
}

function cctldClicked_jp() {
  cctldClicked('jp');
}

function cctldClicked_je() {
  cctldClicked('je');
}

function cctldClicked_jo() {
  cctldClicked('jo');
}

function cctldClicked_kz() {
  cctldClicked('kz');
}

function cctldClicked_ke() {
  cctldClicked('ke');
}

function cctldClicked_ki() {
  cctldClicked('ki');
}

function cctldClicked_kw() {
  cctldClicked('kw');
}

function cctldClicked_kg() {
  cctldClicked('kg');
}

function cctldClicked_la() {
  cctldClicked('la');
}

function cctldClicked_lv() {
  cctldClicked('lv');
}

function cctldClicked_lb() {
  cctldClicked('lb');
}

function cctldClicked_ls() {
  cctldClicked('ls');
}

function cctldClicked_lr() {
  cctldClicked('lr');
}

function cctldClicked_ly() {
  cctldClicked('ly');
}

function cctldClicked_li() {
  cctldClicked('li');
}

function cctldClicked_lt() {
  cctldClicked('lt');
}

function cctldClicked_lu() {
  cctldClicked('lu');
}

function cctldClicked_mo() {
  cctldClicked('mo');
}

function cctldClicked_mg() {
  cctldClicked('mg');
}

function cctldClicked_mw() {
  cctldClicked('mw');
}

function cctldClicked_my() {
  cctldClicked('my');
}

function cctldClicked_mv() {
  cctldClicked('mv');
}

function cctldClicked_ml() {
  cctldClicked('ml');
}

function cctldClicked_mt() {
  cctldClicked('mt');
}

function cctldClicked_mh() {
  cctldClicked('mh');
}

function cctldClicked_mq() {
  cctldClicked('mq');
}

function cctldClicked_mr() {
  cctldClicked('mr');
}

function cctldClicked_mu() {
  cctldClicked('mu');
}

function cctldClicked_yt() {
  cctldClicked('yt');
}

function cctldClicked_mx() {
  cctldClicked('mx');
}

function cctldClicked_md() {
  cctldClicked('md');
}

function cctldClicked_mc() {
  cctldClicked('mc');
}

function cctldClicked_mn() {
  cctldClicked('mn');
}

function cctldClicked_me() {
  cctldClicked('me');
}

function cctldClicked_ms() {
  cctldClicked('ms');
}

function cctldClicked_ma() {
  cctldClicked('ma');
}

function cctldClicked_mz() {
  cctldClicked('mz');
}

function cctldClicked_mm() {
  cctldClicked('mm');
}

function cctldClicked_na() {
  cctldClicked('na');
}

function cctldClicked_nr() {
  cctldClicked('nr');
}

function cctldClicked_np() {
  cctldClicked('np');
}

function cctldClicked_nl() {
  cctldClicked('nl');
}

function cctldClicked_an() {
  cctldClicked('an');
}

function cctldClicked_nc() {
  cctldClicked('nc');
}

function cctldClicked_nz() {
  cctldClicked('nz');
}

function cctldClicked_ni() {
  cctldClicked('ni');
}

function cctldClicked_ne() {
  cctldClicked('ne');
}

function cctldClicked_ng() {
  cctldClicked('ng');
}

function cctldClicked_nu() {
  cctldClicked('nu');
}

function cctldClicked_nf() {
  cctldClicked('nf');
}

function cctldClicked_mp() {
  cctldClicked('mp');
}

function cctldClicked_no() {
  cctldClicked('no');
}

function cctldClicked_om() {
  cctldClicked('om');
}

function cctldClicked_pk() {
  cctldClicked('pk');
}

function cctldClicked_pw() {
  cctldClicked('pw');
}

function cctldClicked_ps() {
  cctldClicked('ps');
}

function cctldClicked_pa() {
  cctldClicked('pa');
}

function cctldClicked_pg() {
  cctldClicked('pg');
}

function cctldClicked_py() {
  cctldClicked('py');
}

function cctldClicked_pe() {
  cctldClicked('pe');
}

function cctldClicked_ph() {
  cctldClicked('ph');
}

function cctldClicked_pn() {
  cctldClicked('pn');
}

function cctldClicked_pl() {
  cctldClicked('pl');
}

function cctldClicked_pt() {
  cctldClicked('pt');
}

function cctldClicked_tp() {
  cctldClicked('tp');
}

function cctldClicked_pr() {
  cctldClicked('pr');
}

function cctldClicked_qa() {
  cctldClicked('qa');
}

function cctldClicked_kr() {
  cctldClicked('kr');
}

function cctldClicked_re() {
  cctldClicked('re');
}

function cctldClicked_ro() {
  cctldClicked('ro');
}

function cctldClicked_ru() {
  cctldClicked('ru');
}

function cctldClicked_rw() {
  cctldClicked('rw');
}

function cctldClicked_bl() {
  cctldClicked('bl');
}

function cctldClicked_sh() {
  cctldClicked('sh');
}

function cctldClicked_kn() {
  cctldClicked('kn');
}

function cctldClicked_lc() {
  cctldClicked('lc');
}

function cctldClicked_mf() {
  cctldClicked('mf');
}

function cctldClicked_pm() {
  cctldClicked('pm');
}

function cctldClicked_vc() {
  cctldClicked('vc');
}

function cctldClicked_ws() {
  cctldClicked('ws');
}

function cctldClicked_sm() {
  cctldClicked('sm');
}

function cctldClicked_st() {
  cctldClicked('st');
}

function cctldClicked_sa() {
  cctldClicked('sa');
}

function cctldClicked_sn() {
  cctldClicked('sn');
}

function cctldClicked_rs() {
  cctldClicked('rs');
}

function cctldClicked_sc() {
  cctldClicked('sc');
}

function cctldClicked_sl() {
  cctldClicked('sl');
}

function cctldClicked_sg() {
  cctldClicked('sg');
}

function cctldClicked_sk() {
  cctldClicked('sk');
}

function cctldClicked_si() {
  cctldClicked('si');
}

function cctldClicked_sb() {
  cctldClicked('sb');
}

function cctldClicked_so() {
  cctldClicked('so');
}

function cctldClicked_za() {
  cctldClicked('za');
}

function cctldClicked_gs() {
  cctldClicked('gs');
}

function cctldClicked_su() {
  cctldClicked('su');
}

function cctldClicked_es() {
  cctldClicked('es');
}

function cctldClicked_lk() {
  cctldClicked('lk');
}

function cctldClicked_sd() {
  cctldClicked('sd');
}

function cctldClicked_sr() {
  cctldClicked('sr');
}

function cctldClicked_sj() {
  cctldClicked('sj');
}

function cctldClicked_sz() {
  cctldClicked('sz');
}

function cctldClicked_se() {
  cctldClicked('se');
}

function cctldClicked_ch() {
  cctldClicked('ch');
}

function cctldClicked_sy() {
  cctldClicked('sy');
}

function cctldClicked_tw() {
  cctldClicked('tw');
}

function cctldClicked_tj() {
  cctldClicked('tj');
}

function cctldClicked_th() {
  cctldClicked('th');
}

function cctldClicked_cd() {
  cctldClicked('cd');
}

function cctldClicked_mk() {
  cctldClicked('mk');
}

function cctldClicked_tl() {
  cctldClicked('tl');
}

function cctldClicked_tg() {
  cctldClicked('tg');
}

function cctldClicked_tk() {
  cctldClicked('tk');
}

function cctldClicked_to() {
  cctldClicked('to');
}

function cctldClicked_tt() {
  cctldClicked('tt');
}

function cctldClicked_tn() {
  cctldClicked('tn');
}

function cctldClicked_tr() {
  cctldClicked('tr');
}

function cctldClicked_tm() {
  cctldClicked('tm');
}

function cctldClicked_tc() {
  cctldClicked('tc');
}

function cctldClicked_tv() {
  cctldClicked('tv');
}

function cctldClicked_ug() {
  cctldClicked('ug');
}

function cctldClicked_ua() {
  cctldClicked('ua');
}

function cctldClicked_ae() {
  cctldClicked('ae');
}

function cctldClicked_uk() {
  cctldClicked('uk');
}

function cctldClicked_gb() {
  cctldClicked('gb');
}

function cctldClicked_tz() {
  cctldClicked('tz');
}

function cctldClicked_us() {
  cctldClicked('us');
}

function cctldClicked_um() {
  cctldClicked('um');
}

function cctldClicked_uy() {
  cctldClicked('uy');
}

function cctldClicked_uz() {
  cctldClicked('uz');
}

function cctldClicked_vu() {
  cctldClicked('vu');
}

function cctldClicked_ve() {
  cctldClicked('ve');
}

function cctldClicked_vn() {
  cctldClicked('vn');
}

function cctldClicked_vg() {
  cctldClicked('vg');
}

function cctldClicked_vi() {
  cctldClicked('vi');
}

function cctldClicked_wf() {
  cctldClicked('wf');
}

function cctldClicked_eh() {
  cctldClicked('eh');
}

function cctldClicked_ye() {
  cctldClicked('ye');
}

function cctldClicked_yu() {
  cctldClicked('yu');
}

function cctldClicked_zm() {
  cctldClicked('zm');
}

function cctldClicked_zw() {
  cctldClicked('zw');
}

function cctldClicked(region) {
  Logger.log(region);
}

function nop() {
}

function generateRegionMenu() {
  var regionMenuItems = [];
  
  regionMenuItems.push({ name: 'Currently Selected: ' + getGeocodingRegion(), functionName: 'nop' });
  regionMenuItems.push(null);
  
  for (var key in REGIONS) {
    // regionMenuItems.push({ name: key, functionName: 'cctldClicked_' + REGIONS[key]});
  }
  
  return regionMenuItems;
}
*/

function getGeocodingRegion() {
  return PropertiesService.getDocumentProperties().getProperty('GEOCODING_REGION') || 'us';
}

/*
function setGeocodingRegion(region) {
  PropertiesService.getDocumentProperties().setProperty('GEOCODING_REGION', region);
  updateMenu();
}

function promptForGeocodingRegion() {
  var ui = SpreadsheetApp.getUi();

  var result = ui.prompt(
    'Set the Geocoding Country Code (currently: ' + getGeocodingRegion() + ')',
    'Enter the 2-letter country code (ccTLD) that you would like ' +
    'the Google geocoder to search first for results. ' +
    'For example: Use \'uk\' for the United Kingdom, \'us\' for the United States, etc. ' +
    'For more country codes, see: https://en.wikipedia.org/wiki/Country_code_top-level_domain',
    ui.ButtonSet.OK_CANCEL
  );

  // Process the user's response.
  if (result.getSelectedButton() == ui.Button.OK) {
    setGeocodingRegion(result.getResponseText());
  }
}
*/

function addressToPosition() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cells = sheet.getActiveRange();
  
  // Must have selected 3 columns (Address, Lat, Lng).
  // Must have selected at least 1 row.

  if (cells.getNumColumns() != 3) {
    Logger.log("Must select at least 3 columns: Address, Lat, Lng columns.");
    return;
  }
  
  var addressColumn = 1;
  var addressRow;
  
  var latColumn = addressColumn + 1;
  var lngColumn = addressColumn + 2;
  
  var geocoder = Maps.newGeocoder().setRegion(getGeocodingRegion());
  var location;
  
  for (addressRow = 1; addressRow <= cells.getNumRows(); ++addressRow) {
    var address = cells.getCell(addressRow, addressColumn).getValue();
    
    // Geocode the address and plug the lat, lng pair into the 
    // 2nd and 3rd elements of the current range row.
    location = geocoder.geocode(address);
   
    // Only change cells if geocoder seems to have gotten a 
    // valid response.
    if (location.status == 'OK') {
      lat = location["results"][0]["geometry"]["location"]["lat"];
      lng = location["results"][0]["geometry"]["location"]["lng"];
      
      cells.getCell(addressRow, latColumn).setValue(lat);
      cells.getCell(addressRow, lngColumn).setValue(lng);
    }
  }
};

function positionToAddress() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cells = sheet.getActiveRange();
  
  // Must have selected 3 columns (Address, Lat, Lng).
  // Must have selected at least 1 row.

  if (cells.getNumColumns() != 3) {
    Logger.log("Must select at least 3 columns: Address, Lat, Lng columns.");
    return;
  }

  var addressColumn = 1;
  var addressRow;
  
  var latColumn = addressColumn + 1;
  var lngColumn = addressColumn + 2;
  
  var geocoder = Maps.newGeocoder().setRegion(getGeocodingRegion());
  var location;
  
  for (addressRow = 1; addressRow <= cells.getNumRows(); ++addressRow) {
    var lat = cells.getCell(addressRow, latColumn).getValue();
    var lng = cells.getCell(addressRow, lngColumn).getValue();
    
    // Geocode the lat, lng pair to an address.
    location = geocoder.reverseGeocode(lat, lng);
   
    // Only change cells if geocoder seems to have gotten a 
    // valid response.
    Logger.log(location.status);
    if (location.status == 'OK') {
      var address = location["results"][0]["formatted_address"];

      cells.getCell(addressRow, addressColumn).setValue(address);
    }
  }  
};

function generateMenu() {
  // var setGeocodingRegionMenuItem = 'Set Geocoding Region (Currently: ' + getGeocodingRegion() + ')';
  
  // {
  //   name: setGeocodingRegionMenuItem,
  //   functionName: "promptForGeocodingRegion"
  // },
  
  var entries = [{
    name: "Geocode Selected Cells (Address to   Lat, Long)",
    functionName: "addressToPosition"
  },
  {
    name: "Geocode Selected Cells (Address from Lat, Long)",
    functionName: "positionToAddress"
  }];
  
  return entries;
}

function updateMenu() {
  SpreadsheetApp.getActiveSpreadsheet().updateMenu('Geocode', generateMenu())
}

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the readRows() function specified above.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 *
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
  SpreadsheetApp.getActiveSpreadsheet().addMenu('Geocode', generateMenu());
  // SpreadsheetApp.getActiveSpreadsheet().addMenu('Region',  generateRegionMenu());
  // SpreadsheetApp.getUi()
  //   .createMenu();
};

