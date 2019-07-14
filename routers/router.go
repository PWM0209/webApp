package routers

import (
	"webApp/controllers"
	"github.com/astaxie/beego"
)

func init() {
   beego.Router("/*", &controllers.MainController{})
}
