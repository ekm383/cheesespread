const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      id="mcjs"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/20bb22ff7fdb4f70b68522c88/ea79e42edf326f5e7dbbf4f8d.js");`,
      }}
    />, //Injecting SalesIq Script on body of the page
  ])
}
