new Vue({
  el: "#app",
  data: {
    author: "d4rkdu0",
    authorLink: "https://github.com/xssed",
    musicText: "music",
    musicUrl:
      "https://www.xsser.cc/assets/canon.mp3",
    copyright: "© 2019",
    signature:
      "桃花坞里桃花庵，桃花庵下桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。",
    blogUrl: "https://www.xsser.cc",
    avatarUrl:
      "https://avatars0.githubusercontent.com/u/8002835",
    blogText: "d4rkdu0",
    leaveTitle: "点我点我",
    returnTitle: "就很开心",
    auth: "",
    authed: false,
    musicPlay: false,
    publicLinks: [
	  {
        type: "github",
        link: "https://github.com/xssed",
        name: "GitHub",
        iconClass: "icon-github",
		emoji:"",
      },
      {
        type: "mail",
        link: "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;amp;email=xsser@xsser.cc",
        name: "MAIL",
        iconClass: "icon-mail",
		emoji: "",
      },
	  {
        type: "lover",
        link: "https://www.xsser.cc/about_me.html",
        name: "lover",
        iconClass: "",/*fa fa-heart*/
		emoji:"❤️",
      },
      {
        type: "gogs",
        link: "https://github.com/xssed/owlcache",
        name: "gogs",
        iconClass: "",/*icon-smile*/
		emoji:"😃",
      },
      //{
      //  type: "portainer-io",
      //  link: "",
      //  name: "portainer-io",
      //  iconClass: "fa fa-codepen"
      //}
    ],
    privateLinks: []
  },
  head: {
    title: function() {
      return {
        inner: "d4rkdu0",
        separator: "·"
      };
    },
    meta: [
      { name: "description", c: "Welcome", id: "desc" }
    ],
    link: [
      {
        rel: "icon",
        href: "/favicon.png",
        sizes: "16x16",
        type: "image/x-icon"
      }
    ]
  },
  mounted() {
    // this.checkMusicPlay();
    // this.checkAuth();
    var OriginTitile = document.title,
      titleTime;
    var app = this;
    document.addEventListener("visibilitychange", function() {
      if (document.hidden) {
        document.title = app.leaveTitle;
        clearTimeout(titleTime);
      } else {
        document.title = app.returnTitle;
        titleTime = setTimeout(function() {
          document.title = OriginTitile;
        }, 2000);
      }
    });
  },
  methods: {
    checkAuth() {
      if (
        !!localStorage.homepageAuthForCSTaoOrFriend &&
        localStorage.homepageAuthForCSTaoOrFriend === this.auth
      )
        this.authed = true;
      else this.authed = false;
    },
    lockClicked () {
      this.checkAuth()
      if (this.authed) localStorage.homepageAuthForCSTaoOrFriend = null;
      else window.location = ''
      this.checkAuth()
    },
    musicClicked () {
      var audio = document.getElementById('bgm')
      if (!this.musicPlay) {
        localStorage.homepageMusicPlay = 1
        this.musicPlay = true
        if (audio !== null && audio.paused)
          audio.play()
      } else {
        localStorage.homepageMusicPlay = 0
        this.musicPlay = false
        if (audio !== null && !audio.paused)
          audio.pause()
      }
    },
    checkMusicPlay () {
      var audio = document.getElementById('bgm')
      if (localStorage.homepageMusicPlay && localStorage.homepageMusicPlay == 1) {
        this.musicPlay = true
        if (audio !== null && audio.paused)
          audio.play()
      }
      else {
        this.musicPlay = false
        if (audio !== null && !audio.paused)
          audio.pause()
      }
    }
  }
});
