

function TagsInput(options){


    this.list = options['_list'];
    this.tag_list = [];

    var container = document.querySelector('.tags-container');

    //console.log(container.children.length);

    //console.log(container.childNodes[2]);
    //console.log(container.children[2]);

    //console.log(container.childNodes.length);

    _customEvents = 'onPreAdded onAdded onPreRemoved onRemoved onTransform'.split(' '),

        _customEvents.forEach(function (name) {
            //_log(options);
            container.addEventListener(name, options[name] , false);
        });


    //


    var txt = document.getElementById('tag_txt');

    var self = this;
    txt.addEventListener('keyup',function(evt){
        e = evt || window.event;
        if (e.keyCode == 13){
            self.addTag(this.value)
            this.value = '';
        }

        self.showSuggestionList(this.value);
    });

    container.addEventListener("click",function(evt){


        if(evt.target.classList.contains("tags-container")){
            document.getElementById('tag_txt').focus();
        }


        if(!evt.target.classList.contains("tag-close")) return;

        var target = evt.target.getAttribute('data-item');

        var container = document.querySelector('.tags-container');
        var el = document.getElementById(target);
        container.removeChild(el);

        var event = new Event('onRemove');
        container.dispatchEvent(event);

        el = null;
        //container.removeChild(container.children[target]);

        //console.log(target);
        //console.log(evt.target.tagName);

    });


    var suggest = document.querySelector('.tag-suggestions');
    suggest.addEventListener('click',function(evt){
        var target = evt.target.getAttribute('data');
        self.addTag(target);
    });

    /*
     var items = document.querySelector('.tags-container .tagelement');

     items.addEventListener('click',function(evt){
     console.log('clicked');
     });
     */
}


function prepend(parentEl,childEl){

}


TagsInput.prototype.addTag = function(tagTxt){
    var container = document.querySelector('.tags-container');

    var event = new Event('onTransform');
    event.tag_text = tagTxt;
    container.dispatchEvent(event);


    //_log("Inside It-----> " + event.tag_text);


    var wrapper = document.createElement('span');
    wrapper.classList.add('tag-el');
    var textnode = document.createTextNode(tagTxt);
    wrapper.setAttribute('id', tagTxt );
    wrapper.appendChild(textnode);


    var close_btn = document.createElement('span');
    close_btn.classList.add('tag-close');
    close_btn.setAttribute('data-item', tagTxt );
    var close_txt = document.createTextNode('X');
    close_btn.appendChild(close_txt);

    wrapper.appendChild(close_btn);

    //container.appendChild(wrapper);

    container.insertBefore(wrapper,container.children[container.children.length-1]);

    var event = new Event('onAdded');
    event.tag_text = tagTxt;
    container.dispatchEvent(event);

    //console.log(container.children.length);

    //container.children[container.children.length].appendChild()

    //container.children.length

    //container.children.length

    //container.insertBefore(wrapper,container.firstChild);

    //container.




    /*

     // fetch our section element
     var section = document.querySelector("section");

     // create our span element
     var span = document.createElement("span");

     // prepend our span eleemnt to our section element
     section.insertBefore( span, section.firstChild );
     */
}


TagsInput.prototype.removeTag = function(tagTxt){

}


TagsInput.prototype.showSuggestionList = function(tagTxt){
    //_log(this.list);

    //_log(tagTxt);
    if(tagTxt){
        var keyword = new RegExp(tagTxt);
        var lst = [];
        this.list.forEach(function(val){
            if (keyword.test(val)) {
                //if(/r/.test(val)){
                lst.push(val);
            }
        });
        _log(lst);
    }

}