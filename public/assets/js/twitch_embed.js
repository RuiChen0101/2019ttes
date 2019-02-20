jQuery(function($){
  $.get('https://api.twitch.tv/kraken/streams/?client_id=l0vnzza1qmgq679uyaok9hk9lh81yu&channel=taipeitech_esports_club', function(channel) {
    if (channel["streams"] != null) {
      console.log("onlive");
    } else {
      console.log("nothing");
    }
  });
});
new Twitch.Embed("twitch-embed", {
  width: '100%',
  height: '100%',
  layout: "video",
  channel: "taipeitech_esports_club"
});
