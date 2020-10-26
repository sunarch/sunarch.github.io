/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


function Test() {
    this.title = "";
    this.datalist = [];
    this.question_current = 1;
    this.question_total = 0;

    this.load_preset = function(preset_data) {
        this.set_title(preset_data.title);
        this.set_datalist(preset_data.datalist);

        this.set_total_number(this.get_datalist().length);
        this.set_current_number(1);

        document.getElementById("title").innerHTML = this.get_title();
        document.getElementById("number-total").innerHTML = this.get_total_number();
    }

    this.load_preset_from_hash = function() {
        hash = window.location.hash.split("#")[1];
        console.log("LOG: hash: \"" + hash + "\"");
        if(hash) {
            this.load_preset(window[hash]);
        }
        else {
            // no hash
        }
    }

    this.get_title = function() {
        return this.title;
    }
    this.set_title = function(title) {
        this.title = title;
    }

    this.get_datalist = function() {
        return this.datalist;
    }
    this.set_datalist = function(datalist) {
        this.datalist = datalist;
    }

    this.get_current_number = function() {
        return this.question_current;
    }
    this.set_current_number = function(number) {
        this.question_current = number;
    }

    this.get_total_number = function() {
        return this.question_total;
    }
    this.set_total_number = function(number) {
        this.question_total = number;
    }

    this.get_current_prompt = function() {
        return this.get_datalist()[this.get_current_number()-1].prompt;
    }

    this.get_current_answer = function() {
        return this.get_datalist()[this.get_current_number()-1].answer;
    }

    this.get_current_url_picture = function() {
        return this.get_datalist()[this.get_current_number()-1].url_picture;
    }

    this.get_current_url_details = function() {
        return this.get_datalist()[this.get_current_number()-1].url_details;
    }

    this.move_next = function() {
        if(this.get_current_number() >= this.get_total_number()) {
            this.display_finish();
        }
        else {
            this.set_current_number(this.get_current_number() + 1);
        }
    }

    this.start = function() {
        this.display_question();
        document.getElementById("main-3-finish").style.display = "none";
        document.getElementById("main-1-start").style.display = "none";
        document.getElementById("main-2-test").style.display = "block";
    }

    this.next = function() {
        this.hide_answer();
        this.move_next();
        this.display_question();
    }

    this.display_question = function() {
        document.getElementById("number-current").innerHTML = this.get_current_number();
        document.getElementById("prompt").innerHTML = this.get_current_prompt();
        document.getElementById("answer").innerHTML = this.get_current_answer();
        document.getElementById("picture").src = this.get_current_url_picture();
        document.getElementById("weblink").href = this.get_current_url_details();
    }

    this.show_answer = function() {
        document.getElementsByClassName("answer-wrapper")[0].style.visibility = "visible";
    }

    this.hide_answer = function() {
        document.getElementsByClassName("answer-wrapper")[0].style.visibility = "hidden";
    }

    this.display_finish = function() {
        document.getElementById("main-2-test").style.display = "none";
        document.getElementById("main-3-finish").style.display = "block";
    }

    this.restart = function() {
        this.set_current_number(1);
        this.start();
    }

}
