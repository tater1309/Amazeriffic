var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content, $input, $button,
                i, $a, $link, baseText, $fullText,
				basehref, $fullhref;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
            } else if ($element.parent().is(":nth-child(4)")) {
                // slideshow
				$content = $("<div>");
				for (i = 0; i < 4 ; i++) {
					baseText = "ScreenShot " + (i+1);
					$fullText = baseText;
					basehref = "screenshots/image" + (i+1) + ".png";
					$fullhref = basehref;
					$content.append($("<p>")).append($("<a class='screenshot'></a>").attr('href',$fullhref).text($fullText));
				}
			}
            $("main .content").append($content);
			$(".screenshot").colorbox({rel:'screenshot', slideshow:true});
            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
