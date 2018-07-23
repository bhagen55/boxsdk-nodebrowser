const boxSDK = require('box-node-sdk');
exports.boxSDK = boxSDK;

// OAuth / JWT application credentials
const jwtClientId = exports.jwtClientId = '2vh7bo0vgbbkp3ehzb9kfwty16rmnqm7';
const jwtClientSecret = exports.jwtClientSecret = 'pNJpnUEz8auL2ylw5rYko1JvpUiFeD7D';

// Account information
const publicKeyId = exports.publicKeyId = '6rqewzls';
const enterpriseId = exports.enterpriseId = '65117761';

// Keys
const keyPath = exports.privateKeyPath = 'private.pem';
const keyPass = exports.keyPass = 'e8310321ca50a50eea935f1b64f46d62';
const keySecret = '-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIDD3LbJ/7VYkCAggA\nMBQGCCqGSIb3DQMHBAiM3n9Sgc27xwSCBMiJMWxpHT4/AnkFfulA4Tb7HVdO1L01\nV//aZ9HdHXFI3psqlSmf8x6c7VdYDSm9Nyba+iKT8HB7d9glCkUlfGwNcxOAed8Q\n/7JE2/LZijLBSY2HLVxVzbo+/GFjpiHO4CSmFRJVrT5akwMkZjEgZpDJ0zKOm4NE\nSsy+bjOH9wVfnJ8DnTCzyq/0cwzR1SPHwH7bSxV3rdeFeCZ5ZLvB6kDgVLAt3Dzr\nJi101I3DiU7U2KHVhRW7TsNG8W2hZQuZ6IbJfROkOYXeaeETOJDdE6fYyKjaB+xM\nz4JR13rCrZS/bJCsqKW4kR/rA7V9BRmHphpwUYy2syySborUZIHsbVqtwrhgN1MT\nrU77Ny5A1Vfy8yzcgV8Zz05pQfi1EnUZTEEQ/bmxKp2DLQII+RSwM7xoYcIfQt27\neIDWKHA4Y2hvdCxIyox1dZfiXzzuyXMUpXZhfhiMwC7rbOnPBR3moArxx9oRNx3/\nnPQ/JhL1nZy0JmI8eHCot+mDrmKROLV9PSv5NWbKxGvCBfRJ6g60kIp4bFHWIwYR\n3glQ5gKuGNgp/2Wtx1MzgwOlR8RtJ1ADaRlB4SX+Lrnw0bQLc5azOJ0NMNbdsEAP\nrigfFrOx1E/3fD6ngswcd40ilR8kCx3ki8Mp/hVkdba4EGtah8yyPnoNn9ArlTOA\nlUGmi4EYSUJP60XhF25WxIQMqayA4I9EBUJ6zhcTYNrFZmKyzzxpFMnSdmVz5aoA\nioXvlgMffV8GFZ9vv0RSHm1Hdw7zaWwjXhAe+JG9w1t2LdXcPU7d0CzfaMRIxalI\nkOYfq1FZBwU8OgdmFfuaZWQHBYBA2GVk81QJYm3ZcBa1SlQ+zeFIjcu0v1Szlr6V\n6abxe8N8wN+rW/3YjcLcqSkAtGvwAgHCIWTpuV0/mJiOprQtFp6fXKb0lsanRWzB\ndMZjlLwaUgVlFkDTUxNp+Xjlbn5R9ke35Hpv2u/Cy2UM/P79dd61WDg1bQkK9QY2\n1DzVOB25kGr3dHBd+A3Kp7a1V3MurwVQYKsRdRA4xvtjko8vPyBfFdN1IcX2ePp5\n6Q1I+HfGmj+fjggOAdeq7ffodiG7tkKKugwstdGITR41yXd9+n1Qtycx6/9NvMyL\nyBJ6rG0VeiJAOF5mf+RLgXP2p1Iemns6be3CoWZftfI8Z4Ebcr5X3tqalX9HEEoW\n6XtySReHOjoKb6H2v++1FWyjfhGMt9DAWgx7VF1l9d0IeTp6V5MuvPgnxW7y9Kp1\n5gxlun5/Co0AmwKw+w1n3FSb7/IaYbftImbrfHtAcqLTTFPcnulbCYOZ0E8iljHP\nkcGIEiiXn3Ukb5kumde4Tt1FIbwnxGJAzhXiZ5UkogAK1yr1jhKNMJp6tr3kpgMY\nGNQDvBhxYTBZJ/HLrOcesUGRjdg/EDBDArXS05ypoRtV/SwFthXkCj9dbS18sp5F\nzVN2nlKiyeyc7RWxqL5Vdx+qVm4Z8RLqIO+5WrulSeeRJpAudTb/wKMdH2bEiU6T\nYky1Ca2MklB6OrGv92hdvBoqvshIgBtvrD79QmptBskAhIqKUckp7NGENKT9TreD\njpXvoDWFWAdg3PgJF1qIxPxzDQOTwl8qHvWNAHWV8tyI+YsLhk+MXs+G/2tA3XDp\nRKY=\n-----END ENCRYPTED PRIVATE KEY-----\n';

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
