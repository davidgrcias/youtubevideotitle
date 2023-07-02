function videoTitle() {
  var videoID = 'eBrVii3SOqw'; // https://youtu.be/eBrVii3SOqw
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];

  var videoViews = video.statistics.viewCount.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  var videoLikes = video.statistics.likeCount.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  var videoDislikes = video.statistics.dislikeCount.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  var videoComments = video.statistics.commentCount.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  video.snippet.title = 
  'This Video Has ' + videoViews + ' Views, ' + videoLikes + ' Likes, ' + videoDislikes + ' Dislikes, And ' + videoComments + ' Comments';
  
  YouTube.Videos.update(video, part);
}
