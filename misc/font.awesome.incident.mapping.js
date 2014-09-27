/*
	Problem: I'm running low on time and want a unique way to associate particular markers 
	with particular incidents. I dont have time to do a 1 to 1 mapping, so I created a function
	that randomizes each incident to a unique color/icon. This function isn't used anywhere in the app.

	
	http://jsfiddle.net/vrg2L4qa/
*/

var randomFontAwesome = {
		faClass : ['flag', 'caret-down', 'flag', 'cube', 'camera-retro', 'file-image-o', 'spinner', 'check-square', 'credit-card', 'pie-chart', 'won', 'file-text-o', 'hand-o-right', 'play-circle', 'github', 'medkit', 'caret-down', 'flag', 'angellist', 'area-chart', 'at', 'bell-slash', 'bell-slash-o', 'bicycle', 'binoculars', 'birthday-cake', 'bus', 'calculator', 'cc', 'cc-amex', 'cc-discover', 'cc-mastercard', 'cc-paypal', 'cc-stripe', 'cc-visa', 'copyright', 'eyedropper', 'futbol-o', 'google-wallet', 'ils', 'ioxhost', 'lastfm', 'lastfm-square', 'line-chart', 'meanpath', 'newspaper-o', 'paint-brush', 'paypal', 'pie-chart', 'plug', 'shekel', 'sheqel', 'slideshare', 'soccer-ball-o', 'toggle-off', 'toggle-on', 'trash', 'tty', 'twitch', 'wifi', 'yelp', 'adjust', 'anchor', 'archive', 'area-chart', 'arrows', 'arrows-h', 'arrows-v', 'asterisk', 'at', 'automobile', 'ban', 'bank', 'bar-chart', 'bar-chart-o', 'barcode', 'bars', 'beer', 'bell', 'bell-o', 'bell-slash', 'bell-slash-o', 'bicycle', 'binoculars', 'birthday-cake', 'bolt', 'bomb', 'book', 'bookmark', 'bookmark-o', 'briefcase', 'bug', 'building', 'building-o', 'bullhorn', 'bullseye', 'bus', 'cab', 'calculator', 'calendar', 'calendar-o', 'camera', 'camera-retro', 'car', 'caret-square-o-down', 'caret-square-o-left', 'caret-square-o-right', 'caret-square-o-up', 'cc', 'certificate', 'check', 'check-circle', 'check-circle-o', 'check-square', 'check-square-o', 'child', 'circle', 'circle-o', 'circle-o-notch', 'circle-thin', 'clock-o', 'close', 'cloud', 'cloud-download', 'cloud-upload', 'code', 'code-fork', 'coffee', 'cog', 'cogs', 'comment', 'comment-o', 'comments', 'comments-o', 'compass', 'copyright', 'credit-card', 'crop', 'crosshairs', 'cube', 'cubes', 'cutlery', 'dashboard', 'database', 'desktop', 'dot-circle-o', 'download', 'edit', 'ellipsis-h', 'ellipsis-v', 'envelope', 'envelope-o', 'envelope-square', 'eraser', 'exchange', 'exclamation', 'exclamation-circle', 'exclamation-triangle', 'external-link', 'external-link-square', 'eye', 'eye-slash', 'eyedropper', 'fax', 'female', 'fighter-jet', 'file-archive-o', 'file-audio-o', 'file-code-o', 'file-excel-o', 'file-image-o', 'file-movie-o', 'file-pdf-o', 'file-photo-o', 'file-picture-o', 'file-powerpoint-o', 'file-sound-o', 'file-video-o', 'file-word-o', 'file-zip-o', 'film', 'filter', 'fire', 'fire-extinguisher', 'flag', 'flag-checkered', 'flag-o', 'flash', 'flask', 'folder', 'folder-o', 'folder-open', 'folder-open-o', 'frown-o', 'futbol-o', 'gamepad', 'gavel', 'gear', 'gears', 'gift', 'glass', 'globe', 'graduation-cap', 'group', 'hdd-o', 'headphones', 'heart', 'heart-o', 'history', 'home', 'image', 'inbox', 'info', 'info-circle', 'institution', 'key', 'keyboard-o', 'language', 'laptop', 'leaf', 'legal', 'lemon-o', 'level-down', 'level-up', 'life-bouy', 'life-buoy', 'life-ring', 'life-saver', 'lightbulb-o', 'line-chart', 'location-arrow', 'lock', 'magic', 'magnet', 'mail-forward', 'mail-reply', 'mail-reply-all', 'male', 'map-marker', 'meh-o', 'microphone', 'microphone-slash', 'minus', 'minus-circle', 'minus-square', 'minus-square-o', 'mobile', 'mobile-phone', 'money', 'moon-o', 'mortar-board', 'music', 'navicon', 'newspaper-o', 'paint-brush', 'paper-plane', 'paper-plane-o', 'paw', 'pencil', 'pencil-square', 'pencil-square-o', 'phone', 'phone-square', 'photo', 'picture-o', 'pie-chart', 'plane', 'plug', 'plus', 'plus-circle', 'plus-square', 'plus-square-o', 'power-off', 'print', 'puzzle-piece', 'qrcode', 'question', 'question-circle', 'quote-left', 'quote-right', 'random', 'recycle', 'refresh', 'remove', 'reorder', 'reply', 'reply-all', 'retweet', 'road', 'rocket', 'rss', 'rss-square', 'search', 'search-minus', 'search-plus', 'send', 'send-o', 'share', 'share-alt', 'share-alt-square', 'share-square', 'share-square-o', 'shield', 'shopping-cart', 'sign-in', 'sign-out', 'signal', 'sitemap', 'sliders', 'smile-o', 'soccer-ball-o', 'sort', 'sort-alpha-asc', 'sort-alpha-desc', 'sort-amount-asc', 'sort-amount-desc', 'sort-asc', 'sort-desc', 'sort-down', 'sort-numeric-asc', 'sort-numeric-desc', 'sort-up', 'space-shuttle', 'spinner', 'spoon', 'square', 'square-o', 'star', 'star-half', 'star-half-empty', 'star-half-full', 'star-half-o', 'star-o', 'suitcase', 'sun-o', 'support', 'tablet', 'tachometer', 'tag', 'tags', 'tasks', 'taxi', 'terminal', 'thumb-tack', 'thumbs-down', 'thumbs-o-down', 'thumbs-o-up', 'thumbs-up', 'ticket', 'times', 'times-circle', 'times-circle-o', 'tint', 'toggle-down', 'toggle-left', 'toggle-off', 'toggle-on', 'toggle-right', 'toggle-up', 'trash', 'trash-o', 'tree', 'trophy', 'truck', 'tty', 'umbrella', 'university', 'unlock', 'unlock-alt', 'unsorted', 'upload', 'user', 'users', 'video-camera', 'volume-down', 'volume-off', 'volume-up', 'warning', 'wheelchair', 'wifi', 'wrench', 'file', 'file-archive-o', 'file-audio-o', 'file-code-o', 'file-excel-o', 'file-image-o', 'file-movie-o', 'file-o', 'file-pdf-o', 'file-photo-o', 'file-picture-o', 'file-powerpoint-o', 'file-sound-o', 'file-text', 'file-text-o', 'file-video-o', 'file-word-o', 'file-zip-o', 'info-circle', 'circle-o-notch', 'cog', 'gear', 'refresh', 'spinner', 'check-square', 'check-square-o', 'circle', 'circle-o', 'dot-circle-o', 'minus-square', 'minus-square-o', 'plus-square', 'plus-square-o', 'square', 'square-o', 'cc-amex', 'cc-discover', 'cc-mastercard', 'cc-paypal', 'cc-stripe', 'cc-visa', 'credit-card', 'google-wallet', 'paypal', 'area-chart', 'bar-chart', 'bar-chart-o', 'line-chart', 'pie-chart', 'bitcoin', 'btc', 'cny', 'dollar', 'eur', 'euro', 'gbp', 'ils', 'inr', 'jpy', 'krw', 'money', 'rmb', 'rouble', 'rub', 'ruble', 'rupee', 'shekel', 'sheqel', 'try', 'turkish-lira', 'usd', 'won', 'yen', 'align-center', 'align-justify', 'align-left', 'align-right', 'bold', 'chain', 'chain-broken', 'clipboard', 'columns', 'copy', 'cut', 'dedent', 'eraser', 'file', 'file-o', 'file-text', 'file-text-o', 'files-o', 'floppy-o', 'font', 'header', 'indent', 'italic', 'link', 'list', 'list-alt', 'list-ol', 'list-ul', 'outdent', 'paperclip', 'paragraph', 'paste', 'repeat', 'rotate-left', 'rotate-right', 'save', 'scissors', 'strikethrough', 'subscript', 'superscript', 'table', 'text-height', 'text-width', 'th', 'th-large', 'th-list', 'underline', 'undo', 'unlink', 'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-o-down', 'arrow-circle-o-left', 'arrow-circle-o-right', 'arrow-circle-o-up', 'arrow-circle-right', 'arrow-circle-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows', 'arrows-alt', 'arrows-h', 'arrows-v', 'caret-down', 'caret-left', 'caret-right', 'caret-square-o-down', 'caret-square-o-left', 'caret-square-o-right', 'caret-square-o-up', 'caret-up', 'chevron-circle-down', 'chevron-circle-left', 'chevron-circle-right', 'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'hand-o-down', 'hand-o-left', 'hand-o-right', 'hand-o-up', 'long-arrow-down', 'long-arrow-left', 'long-arrow-right', 'long-arrow-up', 'toggle-down', 'toggle-left', 'toggle-right', 'toggle-up', 'arrows-alt', 'backward', 'compress', 'eject', 'expand', 'fast-backward', 'fast-forward', 'forward', 'pause', 'play', 'play-circle', 'play-circle-o', 'step-backward', 'step-forward', 'stop', 'youtube-play', 'warning', 'adn', 'android', 'angellist', 'apple', 'behance', 'behance-square', 'bitbucket', 'bitbucket-square', 'bitcoin', 'btc', 'cc-amex', 'cc-discover', 'cc-mastercard', 'cc-paypal', 'cc-stripe', 'cc-visa', 'codepen', 'css3', 'delicious', 'deviantart', 'digg', 'dribbble', 'dropbox', 'drupal', 'empire', 'facebook', 'facebook-square', 'flickr', 'foursquare', 'ge', 'git', 'git-square', 'github', 'github-alt', 'github-square', 'gittip', 'google', 'google-plus', 'google-plus-square', 'google-wallet', 'hacker-news', 'html5', 'instagram', 'ioxhost', 'joomla', 'jsfiddle', 'lastfm', 'lastfm-square', 'linkedin', 'linkedin-square', 'linux', 'maxcdn', 'meanpath', 'openid', 'pagelines', 'paypal', 'pied-piper', 'pied-piper-alt', 'pinterest', 'pinterest-square', 'qq', 'ra', 'rebel', 'reddit', 'reddit-square', 'renren', 'share-alt', 'share-alt-square', 'skype', 'slack', 'slideshare', 'soundcloud', 'spotify', 'stack-exchange', 'stack-overflow', 'steam', 'steam-square', 'stumbleupon', 'stumbleupon-circle', 'tencent-weibo', 'trello', 'tumblr', 'tumblr-square', 'twitch', 'twitter', 'twitter-square', 'vimeo-square', 'vine', 'vk', 'wechat', 'weibo', 'weixin', 'windows', 'wordpress', 'xing', 'xing-square', 'yahoo', 'yelp', 'youtube', 'youtube-play', 'youtube-square', 'ambulance', 'h-square', 'hospital-o', 'medkit', 'plus-square', 'stethoscope', 'user-md', 'wheelchair', 'flag', 'maxcdn'] , 
		color: ['red', 'blue', 'green', 'purple', 'orange', 'darkred', 'lightred', 'beige', 'darkblue', 'darkgreen', 'cadetblue', 'darkpurple', 'white', 'pink', 'lightblue', 'lightgreen', 'gray', 'black', 'lightgray']
	};

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var obj = [];
var count = 0;
$.get('https://data.seattle.gov/resource/3k2p-39jp.json?$select=initial_type_group,count(*)&$group=initial_type_group', function(data){
    $.each(data, function(k,x){
        count++;
        var num1 = randomIntFromInterval(0,randomFontAwesome.color.length - 1);
        var num2 = randomIntFromInterval(0,randomFontAwesome.faClass.length -1);
        var color = randomFontAwesome.color[num1];
        var faClass = randomFontAwesome.faClass[num2];
        console.log("'"+x.initial_type_group + "':{color:'"+color+"',icon:'"+faClass+"'},");
    })
            console.log(count);
})


/* output:
'MENTAL CALL':{color:'red',icon:'file-text-o'},
'MISCELLANEOUS':{color:'gray',icon:'share-alt'},
'undefined':{color:'lightblue',icon:'file-text-o'},
'SEX OFFENSE (NO RAPE)':{color:'darkblue',icon:'caret-up'},
'RECKLESS BURNING':{color:'darkblue',icon:'plus-square-o'},
'PUBLIC WATER':{color:'darkblue',icon:'rotate-left'},
'PARKS EXCLUSIONS':{color:'lightgreen',icon:'pencil-square-o'},
'GUN CALLS':{color:'lightgray',icon:'copy'},
'PROWLER':{color:'black',icon:'slideshare'},
'PERSON DOWN/INJURY':{color:'lightgreen',icon:'circle-o-notch'},
'VICE CALLS':{color:'purple',icon:'map-marker'},
'NOISE DISTURBANCE':{color:'orange',icon:'video-camera'},
'HARBOR CALLS':{color:'green',icon:'stack-overflow'},
'ANIMAL COMPLAINTS':{color:'darkblue',icon:'th-large'},
'ROBBERY':{color:'lightgreen',icon:'female'},
'ROAD RAGE':{color:'black',icon:'stethoscope'},
'PROPERTY - MISSING, FOUND':{color:'purple',icon:'check-square-o'},
'CASUALTIES':{color:'pink',icon:'vimeo-square'},
'NARCOTICS COMPLAINTS':{color:'darkgreen',icon:'align-center'},
'MISCELLANEOUS MISDEMEANORS':{color:'red',icon:'plus-square'},
'PERSONS - LOST, FOUND, MISSING':{color:'darkred',icon:'cloud'},
'ASSAULTS':{color:'pink',icon:'volume-up'},
'TREES DOWN':{color:'green',icon:'spotify'},
'FRAUD CALLS':{color:'pink',icon:'terminal'},
'PARKING VIOLATIONS':{color:'purple',icon:'unlock'},
'PROPERTY DAMAGE':{color:'orange',icon:'cloud-download'},
'DISTURBANCES':{color:'blue',icon:'ellipsis-v'},
'COMMERCIAL BURGLARIES':{color:'purple',icon:'angle-left'},
'HAZARDS':{color:'blue',icon:'microphone'},
'TRESPASS':{color:'cadetblue',icon:'angle-double-up'},
'THREATS, HARASSMENT':{color:'orange',icon:'plane'},
'THEFT':{color:'lightgreen',icon:'font'},
'TRAFFIC RELATED CALLS':{color:'lightgreen',icon:'chevron-up'},
'LIQUOR VIOLATIONS':{color:'orange',icon:'spotify'},
'WEAPONS CALLS':{color:'darkgreen',icon:'btc'},
'SUSPICIOUS CIRCUMSTANCES':{color:'red',icon:'angle-double-left'},
'RESIDENTIAL BURGLARIES':{color:'purple',icon:'circle'},
'AUTO RECOVERIES':{color:'blue',icon:'adn'}
*/
