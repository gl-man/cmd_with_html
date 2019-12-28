var width = 0,
    next_flag = 0,
    counter = 0,
    objInterval,
    timeout,
    interval,
    consoleText_counter = 0,
    console_timer,
    hailtext_source = "hailstate.exe",
    socialprint_source = "print(sponsors.txt)",
    socialprint_text = "coca-cola<br />nvidia<br />tespa<br />talos energy<br />twitch<br />ibuypower",
    question_source = 'choice=input("Would you like to discover something amazing?")',
    contact_source = ".onclick: contact",
    hover_source = ".onhover: print(socialmedia.txt)";


var timerID;

function textCompare(src, sel) {
    // .onclick: contact
    // choice=input("Would you like to discover something amazing?")
    // .onhover: print(socialmedia.txt)
    const click = /^( )*(\.onclick\: contact)( )*$/igm;
    const choice = /^( )*(choice\=input\(\"Would you like to discover something amazing\?\"\))( )*$/igm;
    const hover = /^( )*(\.onhover\: print\(socialmedia\.txt\))( )*$/igm;

    switch (sel) {
        case "choice":
            return choice.test(src);
        case "hover":
            return hover.test(src);
        case "click":
            return click.test(src);
        default:
            return false;
    }
}

function choice(handle) {
    const val = handle.val();
    if (textCompare(val, "choice")) {
        const position = handle.offset();
        const height = handle.innerHeight();
        $(".yes-no").css("display", "flex");
        $(".yes-no").css("left", position.left);
        $(".yes-no").css("top", position.top + height);
    }
}

function textHover(e) {
    const val = $(this).val();
    if (textCompare(val, "hover")) {
        const position = $(this).offset();
        const height = $(this).innerHeight();
        $(".dropdown-content").css("display", "block");
        $(".dropdown-content").css("left", position.left);
        $(".dropdown-content").css("top", position.top + height);
    }
}

function textClick(e) {
    e.stopPropagation();
    const val = $(this).val();
    if (textCompare(val, "click")) {
        window.location.href = "mailto:example@email.com";
    }
    choice($(this));
}

function yes_window(e) {
    clearInterval(console_timer);
    e.stopPropagation();
    $(".yes-no").css("display", "none");
    $(".dropdown-content").css("display", "none");
    showComputer(e);
}

function close_no_window(e) {
    clearInterval(console_timer);
    $(".middle-show").text(":(");
    $("#main-body").empty().css('cursor', 'normal');
    $(".computer-question").css("display", "none");
    $(".computer-container").css("display", "block");
    $(".hailstate-panel").css("display", "none");
    $(".socialprint-panel").css("display", "none");
    $(".question-panel").css("display", "none");
    $(".contact-panel").css("display", "none");
    $(".hover-panel").css("display", "none");
    $(".computer-container > .middle-show").css("display", "block");
    $(".computer-container > .computer-img").css("display", "none");
    setTimeout(() => {
        e.stopPropagation();
        open(location, "_self").close();
    }, 1500);
}

function close_window(e) {
    e.stopPropagation();
    open(location, "_self").close();
}

function showComputer(e) {
    clearInterval(console_timer);
    $(".hailstate-panel").css("display", "none");
    $(".socialprint-panel").css("display", "none");
    $(".question-panel").css("display", "none");
    $(".contact-panel").css("display", "none");
    $(".hover-panel").css("display", "none");

    $(".computer-question").css("display", "flex");
}

function showComputerYes(e) {
    $(".computer-question").css("display", "none");
    next_flag = 2;
    $("#main-body").empty().css('cursor', 'normal');
    $(".computer-container").css("display", "block");
    
    $(".hailstate-panel").css("display", "none");
    $(".socialprint-panel").css("display", "none");
    $(".question-panel").css("display", "none");
    $(".contact-panel").css("display", "none");
    $(".hover-panel").css("display", "none");
    $(".computer-container > .middle-show").css("display", "block");
    $(".computer-container > .computer-img").css("display", "none");
    setTimeout(() => {
        $(".computer-container > .middle-show").css("display", "none");
        $(".computer-container > .computer-img").css("display", "block");
    }, 1500);
}

function gotoDesktop(e) {
    $(".computer-container").css("display", "none");
    $(".desktop").css("display", "block");
    $("body").css("background-color", "rgb(36, 128, 129)");
    $("body").css("text-align", "left");
}

function showConsole(e) {
    clearInterval();
    $(".progress-panel").remove();
    $("body").css("background-color", "black");
    $(".progress-panel").hide();
    $(".hailstate-panel").show();
    console_timer = setInterval(function() {
        consoleText_counter++;
        if (consoleText_counter <= 15)
        {
            $(".hailstate-text").text(hailtext_source.substring(0, consoleText_counter));
            if (consoleText_counter % 2)
                $(".hailstate-caret").css("color", "transparent");
            else
                $(".hailstate-caret").css("color", "white");
        }
        else
        {
            $(".hailstate-caret").css("color", "transparent");
            clearInterval(console_timer);
            showSocialprint();
        }
    }, 100);
}

function showSocialprint() {
    $(".socialprint-panel").show();
    consoleText_counter = 0;
    console_timer = setInterval(function() {
        consoleText_counter++;
        if (consoleText_counter <= 19)
        {
            $(".socialprint-text").text(socialprint_source.substring(0, consoleText_counter));
            if (consoleText_counter % 2)
                $(".socialprint-caret").css("color", "transparent");
            else
                $(".socialprint-caret").css("color", "white");
        }
        else
        {
            $(".socialprint-caret").css("color", "transparent");
            clearInterval(console_timer);
            $(".socialprint-source").html(socialprint_text);
            showQuestion();
        }
    }, 100);
}

function showQuestion() {
    $(".question-panel").show();
    consoleText_counter = 0;
    console_timer = setInterval(function() {
        consoleText_counter++;
        if (consoleText_counter <= 61)
        {
            $(".question-text").text(question_source.substring(0, consoleText_counter));
            if (consoleText_counter % 2)
                $(".question-caret").css("color", "transparent");
            else
                $(".question-caret").css("color", "white");
        }
        else
        {
            $(".question-caret").css("color", "transparent");
            clearInterval(console_timer);
            $(".yes-no").show();
            $(".yes-no").css("display", "flex");
            showContact();
        }
    }, 100);
}

function showContact() {
    $(".contact-panel").show();
    consoleText_counter = 0;
    console_timer = setInterval(function() {
        consoleText_counter++;
        if (consoleText_counter <= 17)
        {
            $(".contact-text").text(contact_source.substring(0, consoleText_counter));
            if (consoleText_counter % 2)
                $(".contact-caret").css("color", "transparent");
            else
                $(".contact-caret").css("color", "white");
        }
        else
        {
            $(".contact-caret").css("color", "transparent");
            clearInterval(console_timer);
            showHover();
        }
    }, 100);
}

function contactClick() {
    window.location.href = "mailto:example@email.com";
}

function showHover() {
    $(".hover-panel").show();
    consoleText_counter = 0;
    console_timer = setInterval(function() {
        consoleText_counter++;
        if (consoleText_counter <= 32)
        {
            $(".hover-text").text(hover_source.substring(0, consoleText_counter));
            if (consoleText_counter % 2)
                $(".hover-caret").css("color", "transparent");
            else
                $(".hover-caret").css("color", "white");
        }
        else
        {
            $(".hover-caret").css("color", "transparent");
            clearInterval(console_timer);
        }
    }, 100);
}

function showDropdown() {
    //$(".dropdown-content").css("display", "block");
}

function intervalFunc() {
    width += 1;
    $(".progress-panel .progress-bar").css("width", width + "px");
    $(".progress-panel .percent-text").text(parseInt(width / 2) + "%");
    if (width == 200) {
        next_flag = 1;
        showConsole();
    }
    if (width >= 190 && width <= 200) {
        clearInterval(objInterval);
        objInterval = setInterval(intervalFunc, 100);
        for (var i = 1; i <= 5; i++) {
            counter++;
            if (counter < 50) {
                var newProgressPanel = `<div class="progress-panel" style="left: ${50 - counter}%; top: ${50 + counter}%"><div class="progress-show"><div class="progress-bar" style="width: ${width}px;"><p class="percent-text">${parseInt(width / 2) + "%"}</p></div></div></div>`;
                $(newProgressPanel).appendTo("#main-body");
            }
        }
    }
}

$(document).ready(function() {
    objInterval = setInterval(intervalFunc, 10);
    // $(".hailstate-text").mousedown(showComputer);
    $(".yes-show").mousedown(showComputerYes);
    $(".no-show").mousedown(close_no_window);
    $(".computer-container").mousedown(gotoDesktop);
    $(".dropdown-content").mouseout(popup_mouse_out).mousedown(stopPropagation);

    $(".yes-no #yes").click(showComputerYes);
    $(".yes-no #no").click(close_no_window);
    $(".yes-no").mousedown(stopPropagation);

    // $(".main-body").mousedown(function(event) {
    //     $(".yes-no").css("display", "none");
    //     $(".dropdown-content").css("display", "none");
    //     clearTimeout(console_timer);
    //     $(".hailstate-text").text(hailtext_source);
    //     if (next_flag == 1) {
    //         var newTextArea = `<textarea class="text" type="text" rows="1" wrap="off"></textarea>`;
    //         var newDiv = `<div class="text-area-container" style="left: calc(${event.clientX}px - 1rem); top: calc(${event.clientY}px - 1rem);"></div>`;

    //         const appendedDivArea = $(newDiv)
    //             .appendTo("#main-body")
    //             .append(newTextArea);
    //         const appendedTextArea = appendedDivArea.children("textarea");
    //         appendedDivArea.mousedown(stopPropagation);
    //         appendedTextArea
    //             .click(textClick)
    //             .mouseenter(textHover)
    //             .mouseout(textOut)
    //             .keyup(keyUp)
    //             .on("click", function() {
    //                 $el = $(appendedTextArea[0]);
    //                 var fontSize = $el.css("font-size");
    //                 var fontFamily = $el.css("font-family");
    //                 var caretIndex = $el[0].selectionStart;
    //                 var text = $el.val().substring(0, caretIndex);
    //                 var row = text.split('\n').length;
    //                 var col = (text.split('\n'))[row - 1].length;
    //                 var font = fontSize + " " + fontFamily;
    //                 var canvas = $el.data("carretCanvas");
    //                 text = (text.split('\n'))[row - 1];
    //                 var total_row = $el.val().split('\n').length;
    //                 //cache the canvas for performance reasons
    //                 //it is a good idea to invalidate if the input size changes because of the browser text resize/zoom)
    //                 if (canvas == null) {
    //                     canvas = document.createElement("canvas");
    //                     $el.data("carretCanvas", canvas);
    //                     var ctx = canvas.getContext("2d");
    //                     ctx.font = font;
    //                     ctx.strokeStyle = $el.css("color");
    //                     ctx.lineWidth = Math.ceil(parseInt(fontSize));
    //                     ctx.beginPath();
    //                     ctx.moveTo(0, -5);
    //                     //aproximate width of the caret
    //                     ctx.lineTo(parseInt(fontSize), -5);
    //                     ctx.stroke();
    //                 }
    //                 var offsetLeft = canvas.getContext("2d").measureText(text).width + parseInt($el.css("padding-left"));
    //                 var offsetTop = $el.height()/total_row * row + parseInt($el.css("padding-top"));
    //                 var background =  "#000 url(" + canvas.toDataURL() + ") no-repeat " +
    //                     (offsetLeft - $el.scrollLeft()) + "px " +
    //                     (offsetTop) + "px";
    //                 $('.text').css("background", "none");
    //                 $el.css("background", background);
    //             })
    //             .on("input", function() {
    //                 // console.log(hey);
    //                 $(this)
    //                     .width(1)
    //                     .height(1)
    //                     .width(this.scrollWidth + 10)
    //                     .height(this.scrollHeight);

    //                 $el = $(appendedTextArea[0]);
    //                 var fontSize = $el.css("font-size");
    //                 var fontFamily = $el.css("font-family");
    //                 var caretIndex = $el[0].selectionStart;
    //                 var text = $el.val().substring(0, caretIndex);
    //                 var row = text.split('\n').length;
    //                 var col = (text.split('\n'))[row - 1].length;
    //                 var font = fontSize + " " + fontFamily;
    //                 var canvas = $el.data("carretCanvas");
    //                 text = (text.split('\n'))[row - 1];
    //                 var total_row = $el.val().split('\n').length;
    //                 //cache the canvas for performance reasons
    //                 //it is a good idea to invalidate if the input size changes because of the browser text resize/zoom)
    //                 if (canvas == null) {
    //                     canvas = document.createElement("canvas");
    //                     $el.data("carretCanvas", canvas);
    //                     var ctx = canvas.getContext("2d");
    //                     ctx.font = font;
    //                     ctx.strokeStyle = $el.css("color");
    //                     ctx.lineWidth = Math.ceil(parseInt(fontSize));
    //                     ctx.beginPath();
    //                     ctx.moveTo(0, -5);
    //                     //aproximate width of the caret
    //                     ctx.lineTo(parseInt(fontSize), -5);
    //                     ctx.stroke();
    //                 }
    //                 var offsetLeft = canvas.getContext("2d").measureText(text).width + parseInt($el.css("padding-left"));
    //                 var offsetTop = $el.height()/total_row * row + parseInt($el.css("padding-top"));
    //                 var background =  "#000 url(" + canvas.toDataURL() + ") no-repeat " +
    //                     (offsetLeft - $el.scrollLeft()) + "px " +
    //                     (offsetTop) + "px";
    //                 $('.text').css("background", "none");
    //                 $el.css("background", background);
    //             });
    //         timeout = setTimeout(() => {
    //             appendedTextArea.focus();
    //             $el = $(appendedTextArea[0]);
    //             var fontSize = $el.css("font-size");
    //             var fontFamily = $el.css("font-family");
    //             var caretIndex = $el[0].selectionStart;
    //             var text = $el.val().substring(0, caretIndex);
    //             var row = text.split('\n').length;
    //             var col = (text.split('\n'))[row - 1].length;
    //             var font = fontSize + " " + fontFamily;
    //             var canvas = $el.data("carretCanvas");
    //             text = (text.split('\n'))[row - 1];
    //             var total_row = $el.val().split('\n').length;
    //             //cache the canvas for performance reasons
    //             //it is a good idea to invalidate if the input size changes because of the browser text resize/zoom)
    //             if (canvas == null) {
    //                 canvas = document.createElement("canvas");
    //                 $el.data("carretCanvas", canvas);
    //                 var ctx = canvas.getContext("2d");
    //                 ctx.font = font;
    //                 ctx.strokeStyle = $el.css("color");
    //                 ctx.lineWidth = Math.ceil(parseInt(fontSize));
    //                 ctx.beginPath();
    //                 ctx.moveTo(0, -5);
    //                 //aproximate width of the caret
    //                 ctx.lineTo(parseInt(fontSize), -5);
    //                 ctx.stroke();
    //             }
    //             var offsetLeft = canvas.getContext("2d").measureText(text).width + parseInt($el.css("padding-left"));
    //             var offsetTop = $el.height()/total_row * row + parseInt($el.css("padding-top"));
    //             var background =  "#000 url(" + canvas.toDataURL() + ") no-repeat " +
    //                 (offsetLeft - $el.scrollLeft()) + "px " +
    //                 (offsetTop) + "px";
    //             $('.text').css("background", "none");
    //             $el.css("background", background);
    //         }, 200);
    //         if (!interval) {
    //           interval = setInterval(function() {
    //             $("textarea").each((index, el) => {
    //               var $el = $(el);
    //               if ($el.css("background-blend-mode") != "normal") {
    //                 $el.css("background-blend-mode", "normal");
    //               } else {
    //                 $el.css("background-blend-mode", "color-burn");
    //               }
    //             });
    //           }, 500);
    //         }
    //     }
    // });
});

function keyUp(evt) {
    choice($(this));
    const handle = $(this);
    if ( textCompare(handle.val(), "choice") || textCompare(handle.val(), "hover") || textCompare(handle.val(), "click") ) {
      var blink_text = setTimeout(function() {
        if (handle.css("display") != "none")
        {
          handle.css("display", "none");
        }
        else if (handle.css("display") == "none")
        {
          handle.css("display", "block");
          clearTimeout(blink_text);
        }
      }, 500);
    }
}

function stopPropagation(evt) {
    evt.stopPropagation();
}

function popup_mouse_out(evt) {
    // console.log("popup_mouse_out");
}

function textOut(evt) {
    // console.log("textOut");
}