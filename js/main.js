// 網頁的主程式寫在這裡
// ctrl+/

//選擇class是nav- link的元素
//並綁定點及事件
//$()=>jQuery函數function
//.+class
//#選id

$(".nav-link").click(function () {
    // 按鈕被點後要做的事...
    console.log("按鈕被點了")
    console.log("被點的按鈕是", this)
    // 取得目標
    // .attr("屬性名") 取得某個HTML屬性的值
    var target = $(this).attr("href")
    console.log("目標", target)
    // 取得移動座標
    var position = $(target).offset().top
    console.log("座標", position)
    // 執行動畫
    //.amimate(物件,時間)1000=1秒
    $("html,body").animate({
        scrollTop: position - 56
    }, 1000)
})