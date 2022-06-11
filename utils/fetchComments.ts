export const fetchComments = async(tweetId:string) =>{
 const res = await fetch(`/api/getComments?tweetId=${tweetId}`)
}

"banner1": {
 "padding-bottom": "60",
 "padding-bottom-mob": "20",
 "padding-horz": "40",
 "padding-horz-mob": "20",
 "desktop-img-src": "img/pro/banner1.jpg",
 "mobile-img-src": "img/pro/banner1-mob.jpg",
 "width": "520",
 "height": "250",
 "alt-text": "Improve productivity and comfort",
 "url": "https://www.officeworks.com.au/shop/officeworks/c/furniture?cm_mmc=ac:edm:customertheme:eofy23|edm2|202206|cta_furniture",
 "label": "Furniture CTA"
},
banner1: <%= eofy_edm2_b2b.banner1 %>
{{> banner-image banner1 }}
