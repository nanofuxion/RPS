
$(document).ready(function () {

    $('[data-toggle="popover"]').popover({
        html: true,
        placement: "bottom",
        trigger: "hover",
        boundary: "window",
    });

    $(".help").attr("data-content",
    "<h5>I entered my name and hit submit but nothing happened?</h5>" +
    "</br>" +
    "<h6 class='mt-1 pt-1'>Sorry buddy you can't fly solo with this one grab a friend and send them the link</6>" +
    "<hr>" +
    "<h5>My friend keeps winning...</h5>" +
    "</br>" +
    "<h6 class='mt-1 pt-1'>Git GUD!</6>" +
    "<hr>" +
    "<h5>My friends' rock, paper and scissors look different, why?</h5>" +
    "</br>" +
    "<h6 class='mt-1 pt-1'>the rock paper and scissors icons are upscaled emojis, which makes them differ on various devices and platforms.</6>");
});






function _() {
    this.updateScore = function (player, num, strng) {
        if (strng) {
            let div0 = $("<div>");
            let text4 = $("<h4>").text(`Player${num}:  ${player}`);
            let text6 = $("<h6>").text(strng);
            div0.append(text4);
            div0.append(text6);
            $('.score').attr('data-content', div0.html());


            //return console.log(this);
        }
    }

 
    this.turns = function(num) {
        if (num) {
            let turn = $(".alert-warning.isDemo").clone();

            turn.removeClass("isDemo");
            turn.addClass("turnClass");
            turn.text("");
            $(".navbar").after(turn);  
            
            if ($(".turnClass").length >= 2)
			setTimeout(() => {
				$(".turnClass").eq(1).remove();
			}, 1000);

            return turn;

       }

    }
    this.ready = function(strng) {
        if (false) {
//      <strong>Game Read!</strong> Waiting for
        }

    }
    this.outcome = function(num) {
        if (true) {
            let outCome = $(".alert-success.isDemo").clone();

            outCome.removeClass("isDemo");
            outCome.addClass("winClass");
            outCome.text("");
            $(".navbar").after(outCome);  
            
			setTimeout(() => {
				$(".winClass").remove();
			}, 2000);

            return outCome;

        }
    }

    purge = function (className, classLenght) {
        if ($(className).length > classLenght)
        setTimeout(() => {
            $(className).eq(1).remove();
        }, 5000);
    }

}
// $("#hidden_content").