
$(document).ready(function () {

    $('[data-toggle="popover"]').popover({
        html: true,
        placement: "bottom",
        trigger: "hover",
        boundary: "window",
    });
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