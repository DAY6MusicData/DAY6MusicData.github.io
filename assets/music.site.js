function musicsite(site, theme) {

  // device 검출
  var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

  // one-click link
  var melon = "melonapp://play/?ctype=1&menuid=0&cid=";
  var melon_ipad = "melonipad://play/?ctype=1&menuid=0&cid=";
  var genie_iphone = "ktolleh00167://landing/?landing_type=31&landing_target=";
  var genie_android = "cromegenie://scan/?landing_type=31&landing_target=";
  var bugs = "bugs3://app/tracks/lists?title=전체듣기&miniplay=Y&track_ids=";
  var vibe = "vibe://listen?version=3&trackIds=";

  // song-id
  var melon_songid = new Array();
  var genie_songid = new Array();
  var bugs_songid = new Array();
  var vibe_songid = new Array();
  var flo_image = new Array();

  // 0 - pick
  melon_songid[0] = "31927275,31295149,7844372,31927279,30772000,33210835,30771999,32586847,8120285,30399494,32892358,30658626,32115582,32115576,32586850,31149437,32586853,8120284,32115585,30617942,30285386,31149441,30189030,30457472,30232719,7844374,31149438,30658627,32586848,8120286,31481700";
  genie_songid[0] = "89220627;88233287;84964151;89220631;87591823;91978161;87591822;90194895;86112661;87121534;90756155;87463141;89472166;89472160;90194898;88072514;90194901;86112660;89472169;87415867;86990353;88072518;86866729;87185619;86931930;84964153;88072515;87463142;90194896;86112662;88455413";
  bugs_songid[0] = "31650949|31225862|4551004|31650953|30872543|32124930|30872542|31908732|30203513|30646155|32006767|30800908|31728999|31728993|31908735|31120687|31908738|30203512|31729002|30772387|30573081|31120691|30511021|30677528|30540153|4551006|31120688|30800909|31908733|30203514|31360122";
  vibe_songid[0] = "27852478,21712039,5701352,27852482,20121084,44037981,20121086,40319205,6049323,17736000,41909365,19183554,30184806,30165478,40319207,21408915,40319210,6049322,30184811,18939330,16473415,21408917,16035923,17836615,16081363,5701361,21408920,19183552,40319204,6049324,23177552";
  flo_image[0] = "https://day6.kr/playlist/pick.png"

  // 4 - love
  melon_songid[4] = "31927275,30771999,30711863,30772000,31295149,30507915,30399494,33210835,31927276,30345503,30233080,30345502";
  genie_songid[4] = "89220627;87591822;87527109;87591823;88233287;87264764;87121534;91978161;89220628;87064419;86931931;87064418";
  bugs_songid[4] = "31650949|30872542|30833862|30872543|31225862|30708337|30646155|32124930|31650950|30612024|30540154|30612023";
  vibe_songid[4] = "27852478,20121086,19738184,20121084,21712039,18419728,17736000,44037981,27852479,17409156,16081364,17409146";
  flo_image[4] = "https://day6.kr/playlist/love.png"

  // melon : 1 // genie : 2 // bugs : 3 // vibe : 4 // flo : 5
  // site = a / theme = b

  var music_site_url;

  if (mobile){
    // mobile
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: '좋았어요!🎉'
    })
  }
  else {
      // other
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: '지원하지 않는 디바이스예요.😔'
    })
  }
  var userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.search("android") > -1) {
    //android
    if(site == 1) music_site_url = melon + melon_songid[theme];
    else if(site == 2) music_site_url = genie_android + genie_songid[theme];
    else if(site == 3) music_site_url = bugs + bugs_songid[theme];
    else if(site == 4) music_site_url = vibe + vibe_songid[theme];
    if(site < 5) location.href = music_site_url;
    else{
      Swal.fire({
        icon: 'success',
        title: '발급 완료!🎉',
        text: '위의 이미지를 저장하고 플로에서 플레이리스트를 만드세요!',
        imageUrl: flo_image[theme],
        imageHeight: 1000,
        imageAlt: 'Playlist image',
        confirmButtonText: '알겠어요!'
      })
    }
  }
  else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1)) {
    // iphone
    if(site == 1) music_site_url = melon + melon_songid[theme];
    else if(site == 2) music_site_url = genie_iphone + genie_songid[theme];
    else if(site == 3) music_site_url = bugs + bugs_songid[theme];
    else if(site == 4) music_site_url = vibe + vibe_songid[theme];
    if(site < 5) location.href = music_site_url;
    else{
      Swal.fire({
        icon: 'success',
        title: '발급 완료!🎉',
        text: '위의 이미지를 저장하고 플로에서 플레이리스트를 만드세요!',
        imageUrl: flo_image[theme],
        imageHeight: 1000,
        imageAlt: 'Playlist image',
        confirmButtonText: '알겠어요!'
      })
    }
    location.href = music_site_url;
  }
  else if (userAgent.search("ipad") > -1) {
    // ipad
    if(site == 1) music_site_url = melon_ipad + melon_songid[theme];
    else if(site == 2) music_site_url = genie_iphone + genie_songid[theme];
    else if(site == 3) music_site_url = bugs + bugs_songid[theme];
    else if(site == 4) music_site_url = vibe + vibe_songid[theme];
    if(site < 5) location.href = music_site_url;
    else{
      Swal.fire({
        icon: 'success',
        title: '발급 완료!🎉',
        text: '위의 이미지를 저장하고 플로에서 플레이리스트를 만드세요!',
        imageUrl: flo_image[theme],
        imageHeight: 1000,
        imageAlt: 'Playlist image',
        confirmButtonText: '알겠어요!'
      })
    }
    location.href = music_site_url;
  }
}

function site_btn (what_playlist)
{

  document.write("<div style="width: 100%; text-align: justify; margin-bottom: 24px;">");
  <!-- melon -->
  document.write("<a href="#none" onclick="musicsite(1,what_playlist);"><img src="/img/site/melon.png" title="멜론" class="musicsite_btn" style="width: 48px;"></a>");
  <!-- genie -->
  document.write("<a href="#none" onclick="musicsite(2,what_playlist);"><img src="/img/site/genie.png" title="지니" class="musicsite_btn" style="width: 48px;"></a>");
  <!-- bugs -->
  document.write("<a href="#none" onclick="musicsite(3,what_playlist);"><img src="/img/site/bugs.png" title="벅스" class="musicsite_btn" style="width: 48px;"></a>");
  <!-- vibe -->
  document.write("<a href="#none" onclick="musicsite(4,what_playlist);"><img src="/img/site/vibe.png" title="바이브" class="musicsite_btn" style="width: 48px;"></a>");
  <!-- flo -->
  document.write("<a href="#none" onclick="musicsite(5,what_playlist);"><img src="/img/site/flo.png" title="플로" class="musicsite_btn" style="width: 48px;"></a>");

  document.write("</div>");

}
