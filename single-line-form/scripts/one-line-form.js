

    /*
    * Helper functions
    */

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key]
            }
        }
        return a
    }





    /*
    *   One Line Form
    */

    function oneLineForm(el, options){
        this.el = document.getElementById(el);
        this.answer_list = [];
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
    }

    oneLineForm.prototype.options = {
        onSubmit: function() {
            return false
        }
    };

    oneLineForm.prototype._init = function(){
        this.pointer = 0;
        //this.current_step = this.pointer + 1;
        this.next_btn = this.el.querySelector("button.next");
        this.previous_btn = this.el.querySelector("button.prev");
        this.progressbar = this.el.querySelector("div.progress");
        this.error = this.el.querySelector("span.error-message");
        this.textfield = this.el.querySelector("input");
        this.field_status = this.el.querySelector("span.number");
        this.current_field_number = this.field_status.querySelector("span.number-current");
        this.total_field_numbers = this.field_status.querySelector("span.number-total");
        this.label = this.el.querySelector(".label-container label");

        this.total_fields = this.options.fields.length;
        this.current_field_number.innerHTML = Number(this.pointer + 1);
        this.total_field_numbers.innerHTML = this.total_fields;




        // init values added
        this.label.innerHTML = this.options.fields[0].label;

        this._initEvents();
    }


    oneLineForm.prototype._initEvents = function(){
        var self = this, onFocusFn = function(){
            this.removeEventListener("focus", onFocusFn);
            self.next_btn.classList.add("show");
        };

        this.textfield.addEventListener("focus", onFocusFn );

        this.next_btn.addEventListener("click", function(ev) {
            ev.preventDefault();
            self._nextField();
        });

        this.previous_btn.addEventListener("click", function(ev) {
            ev.preventDefault();
            self._previousField();
        });

        this.el.addEventListener("keydown", function(ev) {
            var keyCode = ev.keyCode || ev.which;
            if (keyCode === 13) {
                ev.preventDefault();
                self._nextField();
            }
        });

    }

    oneLineForm.prototype._nextField = function(){
        // did you work here
        var self = this;
        if(this.pointer  < this.total_fields - 1){

            if(this.textfield.value === ""){
                this.error.classList.add('show');
                this.error.innerHTML = "Please enter the field";
                return false;
            }

            if(this.error.classList.contains('show')){
                this.error.classList.remove('show');
            }

            this.answer_list[this.options.fields[this.pointer].name] = this.textfield.value;
            this.textfield.value = "";
            this.pointer++;

            this._updateStatus();
            this._updateNumbers();
        }else{
            var timeOut = setTimeout(function(){
                self._submitForm();
                clearTimeout(timeOut);
            }, 500);
            this.pointer++;
        }
        this._progressBar();
    }


    oneLineForm.prototype._updateStatus = function(){
        this.current_field_number.innerHTML = Number(this.pointer + 1);
        this.label.innerHTML = this.options.fields[this.pointer].label;
        (this.pointer > 0) ? this.previous_btn.classList.add('show'): this.previous_btn.classList.remove('show');
        var previous_value = this.answer_list[this.options.fields[this.pointer].name];
        if (previous_value === undefined) return;
        this.textfield.value = previous_value;
    }


    oneLineForm.prototype._previousField = function(){
        this.pointer--;
        this._updateStatus();
        this._progressBar();
        this._updateNumbers();
    }

    oneLineForm.prototype._progressBar = function(){
        this.progressbar.style.width = this.pointer * (100 / this.total_fields) + "%"
    }

    oneLineForm.prototype._updateNumbers = function(){
        //console.log(this.pointer);
        //console.log(this.answer_list);
    }

    oneLineForm.prototype._submitForm = function(){
        this.el.style.display = 'none';
        document.getElementById('final-message').style.display = 'block';
        console.log("Just Submit in some delay");
    }



