const boxSDK = require('box-node-sdk');
exports.boxSDK = boxSDK;

// OAuth / JWT application credentials
const jwtClientId = exports.jwtClientId = '2vh7bo0vgbbkp3ehzb9kfwty16rmnqm7';
const jwtClientSecret = exports.jwtClientSecret = 'pNJpnUEz8auL2ylw5rYko1JvpUiFeD7D';

// Account information
const publicKeyId = exports.publicKeyId = 'xywsapr3';
const enterpriseId = exports.enterpriseId = '65117761';

// Keys
const keyPath = exports.privateKeyPath = 'private.pem';
const keyPass = exports.keyPass = '2d11d8c2c8a1418563dd2e909732bbef';
const privKey = exports.privKey = '-----BEGIN ENCRYPTED PRIVATE KEY-----\n'+
'MIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIWPisOiA83LwCAggA\n'+
'MBQGCCqGSIb3DQMHBAiGdcf0uzBmAASCBMge7Xl6WAhlXbGn+lSI2T5F13hT0zSg\n'+
'gs9oxvtiy9pwksk6ghggJMXHrgEMHSmCk4xRWRZ8OrcVPQkniX53hk/Udn67xRQ3\n'+
's7s0ihFJpw+5KbGrE55b5uUVk9l89mDGVvfgDJ+0yrUcKvWotDilWlDkcCdnc7XI\n'+
'dmZ0ew0i8FTYWLVwHx79oNKSmKHIeaxJL58yam1JpU/b404BBHsjbw9icAJnVWL7\n'+
'9ZotvyuNB46n2LmFs/wsxMT4WpWEmmKWFihqK19/qoN0RnBDVM86eqF48qD/Wnyg\n'+
'2tMs6HuDOYWnfN0CrvrBgvMPTsrGsz3mk8qSWiPKnT8jyEWUWkdzTOh32sLwNA8k\n'+
'lPPmYvRQLe/a2IvL3Xd7MtN+DZy68BLcs4p18PF2+m3u+JJ79rQsfzeJ3kUD5HqL\n'+
'8K4Cnsld3R3A7XHwQZlHRdQmYYwSXZI15IC4C8aBhHZ9czGmP055aa6R+237wh5I\n'+
'3U2OOzvbTW+7kBwixA/eF7gjjc19xxWLXb47b+mt4pZrxKq/5BmMHCg3+S+VoSDg\n'+
'WSVptoJwo0DQ9qxzLzUgaBWpdT2VZ3VCR8Jm5wVTkX0LCi5jglNHXp93fmcZDNNS\n'+
'3ymjaFLxUhhOEwHtpap+XAiG9aWJwG1YbjmcL7G1Yk0mLmK2syZMYNmKvhzCi3mD\n'+
'0GRg5zumIsjHB1uWwinMvs0XM2exOc6fGwZz3kpGkqPM6dxz9XaTDiVEDrxYcVkH\n'+
'nhdpIlypM8ipjsl2P6yStkKdOH5RdA41pePagkC4imeQee+n7m814V/1BVBuKMq1\n'+
'VqtKRv7RvWpOLklglVQf87YGaqWqvFKfMCp1mhWCTNLXCNlhrLri81I9uONYxwtQ\n'+
'BdP28s3vg3xO8OEDkl7EhmCYeEdNUEEeqCOwT8wfwQPUnAN7wWYNTgDDbDB1Pi7P\n'+
'kxz1fD/T+UzyaNHC0SVtdMFrxIW9qfllzB34kYyws9VXir2QeiyF518OH0BlCvDK\n'+
'ydkadFceTSqcmJTM2j4vYluoGpmUcYSdgm2rfqph2arz/OFEEngnH5sRQLUVEXgu\n'+
'u0DW3hydPVg+HHe68hjYJhFFmza+SnWEfbOsJCDolZ3WckdIsLWiIo0hdPucwBYA\n'+
'M7N8LXxDjj0yEZFu0KY7kJsJ0lNjMKWMJV/GHqn31gAeFT0OfNkDGKsXI1mK5p0D\n'+
'ABubMdtHrOhMU2wZOlb6TTiXbjJPVJFVD+jpIET0EzE623TRkarbEzV53AX3sN3r\n'+
'MhNyFdJLoMe4FydrGYvpfajZvrbQBCZ9ll+4GMMitK4eiM+yhK/7WsY8iZ7Ty6c5\n'+
'rNCmOUoqcUytUlYXeE+I4gFd8YLdGdzEZHD4USybDyFpr7HS7zF4YZ8fwFUXGBeD\n'+
'wH0Unoq5qUT9RLwQNDRc9lHNi5IZFfyR8vHfKEYzv/HCLd8jH05tBfmlmQ4FDKK1\n'+
'zPANUTq2zYjpfpzPKxRSZ3CevuemurxV5H0RdSifoq6B4VS/ydk7J2EZQYpb5yiG\n'+
'3GzzE7SwCvWmNdr8f1ybblFz6Z9bnc6vDtMG0HflhQYUa1O0e9y/lnLx3u13PPhp\n'+
'nTSPPoI4xayQtAzpM/jqeXJi/l2LYMUwVz6nYcXAvqZEV//6gz8d+c213QDDRThu\n'+
'YZo=\n-----END ENCRYPTED PRIVATE KEY-----\n';
const keySecret = '2d11d8c2c8a1418563dd2e909732bbef';

// Element UI Scopes
const tokenScopes = exports.tokenScopes = {
  contentExplorer: 'base_explorer item_preview item_download item_share',
  contentPicker: 'base_picker item_share item_upload',
  contentPreview: 'base_preview item_download annotation_edit annotation_view_all annotation_view_self',
  contentUploader: 'base_upload'
}

// Element UI ID configurations (either folder or file ID to display)
const elementIds = exports.elementIds = {
  contentExplorer: '0',
  contentPicker: '##FOLDER ID##',
  contentPreview: '##FILE ID##',
  contentUploader: '##FOLDER ID##'
}
