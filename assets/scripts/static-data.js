




/*
*  contact-us
*/

var contact_me = {
    h1 : "Have a Idea that you want to transform into online business? ",
    //paragraph:"Let’s get in touch. <br/> <table style='width:100%'> <tr><td style='width:40%'><strong>Email:</strong> <a href='mailto:bleak.unseen@gmail.com?Subject=Hello' target='_top'>bleak.unseen@gmail.com</a></td> <td style='width:20%'><strong>Skype:</strong> m_kamranshahzad  </td> <td style='width:20%'><strong>Cell:</strong> +92 343 526 4443 </td> </tr><tbody> </tbody></table> "
    paragraph: "Let’s get in touch. <div style='text-align=center;'><strong>Email:</strong> <a href='mailto:bleak.unseen@gmail.com?Subject=Hello' target='_top'>bleak.unseen@gmail.com</a> <br/> <strong>Cell:</strong> +92 343 526 4443 <br/> <strong>Skype:</strong> m_kamranshahzad </div>"
};








/*
*  Header
*/

var header_data = {
        title: "kamranshahzad.github.io",
        tagline: "Sr. Software Solution Architect",
        links:[
            {label:'Home',url:'http://kamranshahzad.github.io'},
            {label:'Projects',url:'http://kamranshahzad.github.io/#projectsContainer'},
            {label:'Articles',url:'http://kamranshahzad.github.io/#articleContainer'},
            {label:'About',url:'http://kamranshahzad.github.io/#aboutContainer'},
            {label:'Contact',url:'http://kamranshahzad.github.io/#contactContainer'},
        ]
    };


/*
*   Footer links
* */

var footer_links = {
    links:[
        {label:"",url:"https://twitter.com/kamran_shahzed",icon:"fa fa-twitter"},
        {label:"",url:"https://www.facebook.com/profile.php?id=100008768106919&fref=ts",icon:"fa fa-facebook"},
        {label:"",url:"https://pk.linkedin.com/pub/kamran-shahzad/98/a16/47",icon:"fa fa-linkedin"},
        {label:"",url:"https://plus.google.com/+KamranShahzads",icon:"fa fa-google-plus"},
        {label:"",url:"http://stackoverflow.com/users/4730183/kamran-shahzad",icon:"fa fa-stack-overflow"},
        {label:"",url:"http://codepen.io/kamranshahzad/",icon:"fa fa-codepen"},
        {label:"",url:"https://github.com/kamranshahzad",icon:"fa fa-git"},
    ]
};






/*
*   Blog articles list
* */


var article_note = {note:"I have written articles for my open source components. These articles/tutorials will help developers to better understand the code/workflow and how they can use these open source components in their projects."};


var articals = [
    {title:"First Step: The Future (Part-4)",url:"http://kamranshahzad.github.io/blog/first-step_the-future-part-4.html"},
    {title:"First Step: Life Cycle, Code and Performance of “SmartControls” (Part-3)",url:"http://kamranshahzad.github.io/blog/first-step_life-cycle-code-and-performance-of-smartcontrols-part-3.html"},
    {title:"First Step: An Overview of first Commercial Component  (Part-2)",url:"http://kamranshahzad.github.io/blog/first-step_an-overview-of-first-commercial-component-part-2.html"},
    {title:"First Step: Why Component Development?  (Part-1)",url:"http://kamranshahzad.github.io/blog/first-step_why-component-development-part-1.html"},
    //{title:"Create a simple theme using LayoutBundle (Symfony)",url:"http://kamranshahzad.github.io/blog/create-a-simple-theme-using-layoutbundle.html"},
   // {title:"The concept behind LayoutBundle (Symfony)",url:"http://kamranshahzad.github.io/blog/the-concept-behind-layoutbundle.html"},
];



var article_list = {
    articles : [
        {date: '17 March,2016',title : "First Step: The Future (Part-4)",url:"http://kamranshahzad.github.io/blog/first-step_the-future-part-4.html"},
        {date: '16 March,2016',title : "First Step: Life Cycle, Code and Performance of “SmartControls” (Part-3)",url:"http://kamranshahzad.github.io/blog/first-step_life-cycle-code-and-performance-of-smartcontrols-part-3.html"},
        {date: '15 March,2016',title : "First Step: An Overview of first Commercial Component  (Part-2)",url:"http://kamranshahzad.github.io/blog/first-step_an-overview-of-first-commercial-component-part-2.html"},
        {date: '14 March,2016',title : "First Step: Why Component Development?  (Part-1)",url:"http://kamranshahzad.github.io/blog/first-step_why-component-development-part-1.html"},
        {date: '24 August,2015',title : "Create a simple theme using LayoutBundle (Symfony)",url:"http://kamranshahzad.github.io/blog/create-a-simple-theme-using-layoutbundle.html"},
        {date: '23 August,2015',title : "The concept behind LayoutBundle (Symfony)",url:"http://kamranshahzad.github.io/blog/the-concept-behind-layoutbundle.html"},
    ]
};







/*
*   Projects
*/
var projects = [
    {
        title:'LayoutBundle',
        icon:'fa fa-desktop',
        bgclass:'b-color-1',
        url: "https://github.com/kamranshahzad/LayoutBundle",
        description: 'LayoutBundle help users build layout with pace and provide support for fully customized multi-themes.' ,
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/LayoutBundle'},{label:'knpbundles',url:'http://knpbundles.com/kamranshahzad/LayoutBundle'}
        ]
    },
    {
        title:'XmlFormBundle',
        icon:'fa fa-newspaper-o',
        bgclass:'b-color-2',
        url: "https://github.com/kamranshahzad/XmlFormBundle",
        description: 'This bundle helps to build forms quickly using xml configuration files in Symfony2',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/XmlFormBundle'},{label:'knpbundles',url:'http://www.knpbundles.com/kamranshahzad/XmlFormBundle'}
        ]
    },
    {
        title:'PassbookBundle',
        icon:'fa fa-mobile',
        bgclass:'b-color-3',
        url: "https://github.com/kamranshahzad/PassbookBundle",
        description: 'Rest API for building passes & coupons',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/PassbookBundle'},{label:'knpbundles',url:'http://www.knpbundles.com/kamranshahzad/PassbookBundle'}
        ]
    },
    {
        title:'TagsInput',
        icon:'fa fa-tag',
        bgclass:'b-color-4',
        url: "http://kamranshahzad.github.io/tagsinput/",
        description: 'Simple VanillaJS component for inputing tags.' ,
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/TagsInput'},{label:'npmjs',url:'#'}
        ]
    },
    {
        title:'Single Line Form',
        icon:'fa fa-square-o',
        bgclass:'b-color-5',
        url: "http://kamranshahzad.github.io/single-line-form/",
        description: 'Stylish one field form with multi-step and progress bar.' ,
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/single-line-form'},{label:'npmjs',url:'#'}
        ]
    },
    {
        title:'ContactsBundle',
        icon:'fa fa-envelope',
        bgclass:'b-color-6',
        url: "https://github.com/kamranshahzad/ContactsBundle",
        description: 'This bundle help to build forms quickly using xml config files' ,
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/ContactsBundle'},{label:'knpbundles',url:'http://www.knpbundles.com/kamranshahzad/ContactsBundle'}
        ]
    },
    {
        title:'TaxonomyBundle',
        icon:'fa fa-sitemap',
        bgclass:'b-color-7',
        url: "https://github.com/kamranshahzad/TaxonomyBundle",
        description: 'This bundle manages nested categories' ,
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/TaxonomyBundle'},{label:'knpbundles',url:'http://www.knpbundles.com/kamranshahzad/TaxonomyBundle'}
        ]
    },
    {
        title:'GroupChoiceListBundle',
        icon:'fa fa-list-ul',
        bgclass:'b-color-8',
        url: "https://github.com/kamranshahzad/GroupChoiceListBundle",
        description: 'Custom choice form type helps to display data in groups.' ,
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/GroupChoiceListBundle'},{label:'knpbundles',url:'http://www.knpbundles.com/kamranshahzad/GroupChoiceListBundle'}
        ]
    },
    {
        title:'CodesnippetBundle',
        icon:'fa fa-code',
        bgclass:'b-color-9',
        url: "https://github.com/kamranshahzad/CodesnippetBundle",
        description: 'Custom choice form type helps to display data in groups.' ,
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/CodesnippetBundle'},{label:'knpbundles',url:'http://www.knpbundles.com/kamranshahzad/CodesnippetBundle'}
        ]
    },
    {
        title:'Passbook UI',
        icon:'fa fa-newspaper-o',
        bgclass:'b-color-10',
        url: "https://github.com/kamranshahzad/passbook-ui",
        description: 'A Wordpress plugin for passbook coupons & passes management' ,
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/passbook-ui'}
        ]
    },
];




var inline_projects = [
    {
        title:'UserBundle',
        url: 'https://github.com/kamranshahzad/UserBundle',
        description:'A complete user management/registration/login system',
        technology: 'Symfony2',
        color: 'color-1',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/UserBundle'}, {label:'knpbundles',url:'#'}
        ]
    },
    {
        title:'CodeMirrorBundle',
        url: 'https://github.com/kamranshahzad/code-mirror-bundle',
        description:'A helper bundle for create codemirror code editor field.',
        technology: 'Symfony2',
        color: 'color-1',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/code-mirror-bundle'}, {label:'knpbundles',url:'#'}
        ]
    },
    {
        title:'TagsBundle',
        url: 'https://github.com/kamranshahzad/TagsBundle',
        description:'Tags fields',
        technology: 'Symfony2',
        color: 'color-1',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/TagsBundle'}, {label:'knpbundles',url:'#'}
        ]
    },
    {
        title:'UtilBundle',
        url: 'https://github.com/kamranshahzad/UtilBundle',
        description:'A helper bundle to build applications using symfony2',
        technology: 'Symfony2',
        color: 'color-1',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/UtilBundle'}, {label:'knpbundles',url:'http://www.knpbundles.com/kamranshahzad/UtilBundle'}
        ]
    },
    {
        title:'BaseJS',
        url: 'https://github.com/kamranshahzad/BaseJS',
        description:'This library provide basic VanillaJS functions',
        technology: 'Javascript',
        color: 'color-4',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/BaseJS'}
        ]
    },
    {
        title:'ThemeBundle',
        url: 'https://github.com/kamranshahzad/BaseJS',
        description:'A sample theme for LayoutBundle',
        technology: 'Symfony2',
        color: 'color-1',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/BaseJS'}, {label:'knpbundles',url:'#'}
        ]
    },
    {
        title:'LinkBundle',
        url: 'https://github.com/kamranshahzad/LinkBundle',
        description:'This bundle store usefull links',
        technology: 'Symfony2',
        color: 'color-1',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/LinkBundle'}, {label:'knpbundles',url:'#'}
        ]
    },
    {
        title:'OrganizationBundle',
        url: 'https://github.com/kamranshahzad/OrganizationBundle',
        description:'This bundle store orgonizations',
        technology: 'Symfony2',
        color: 'color-1',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/OrganizationBundle'}, {label:'knpbundles',url:'http://www.knpbundles.com/kamranshahzad/OrganizationBundle'}
        ]
    },
    {
        title:'BaseUtilJS',
        url: '#',
        description:'A VanillaJS library have some use-full functions.',
        technology: 'Javascript',
        color: 'color-4',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/BaseUtilJS'},{label:'npmjs',url:'#'}
        ]
    },
    {
        title:'DomJS',
        url: 'https://github.com/kamranshahzad/DomJS',
        description:'A VanillaJS helper library for traversing DOM',
        technology: 'Javascript',
        color: 'color-4',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/DomJS'}
        ]
    },
    {
        title:'JSForms',
        url: 'https://github.com/kamranshahzad/FormJS',
        description:'A javascript library for building dynamic forms',
        technology: 'Javascript',
        color: 'color-4',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/FormJS'}
        ]
    },
    {
        title:'BackboneForms',
        url: 'https://github.com/kamranshahzad/backbone-forms',
        description:'A backbone helpers for building dynamic forms',
        technology: 'BackboneJS',
        color: 'color-3',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/backbone-forms'}
        ]
    },
    {
        title:'SettingBundle',
        url: 'https://github.com/kamranshahzad/SettingBundle',
        description:'Bundles setting helper forms',
        technology: 'Symfony2',
        color: 'color-1',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/SettingBundle'}, {label:'knpbundles',url:'http://knpbundles.com/kamranshahzad/SettingBundle'}
        ]
    },
    {
        title:'File Input',
        url: 'https://github.com/kamranshahzad/file-input',
        description:'Standardizes the file input field for all browsers',
        technology: 'JQuery',
        color: 'color-2',
        links:[
            {label:'github',url:'https://github.com/kamranshahzad/file-input'}
        ]
    },
];