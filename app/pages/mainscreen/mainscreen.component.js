"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var color_1 = require("color");
var core_1 = require("@angular/core");
var bluetooth = require("nativescript-bluetooth");
var MainscreenComponent = /** @class */ (function () {
    function MainscreenComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isBluetoothConnected = false;
        this.isConnected = false;
    }
    MainscreenComponent.prototype.onButtonTap = function () {
        console.log("Button was pressed");
        this.isConnected = !this.isConnected;
        var BlueToothStatusBar = this.BlueToothStatusBar.nativeElement;
        BlueToothStatusBar.animate({
            backgroundColor: this.isConnected ? new color_1.Color("green") : new color_1.Color("red"),
            duration: 1000
        });
        //   bluetooth.isBluetoothEnabled().then(enabled => {
        //     if (!enabled) {
        //         console.log("disabled")
        //     } else {
        //       console.log("georgi")
        //     }
        // });
        //   debugger;
        // bluetooth.isBluetoothEnabled().then(
        //   enabled => enabled ? alert("Evala") : alert("please enable")
        // );
        bluetooth.startScanning({
            serviceUUIDs: [],
            seconds: 5,
            onDiscovered: function (peripheral) {
                alert("Periperhal found with UUID: " + peripheral.UUID);
                bluetooth.connect({
                    UUID: peripheral.UUID,
                    onConnected: function (peripheral) {
                        alert('Connected');
                        //here you can navigate to the controller view
                    },
                    onDisconnected: function (peripheral) {
                        alert('Device Disconnected');
                        //here you can navigate to the scan view
                    }
                });
                //if success
                //change to successful
                //esle
                // Problem connecting to the device. Try again
            },
            skipPermissionCheck: false
        }).then(function () {
            alert("No device found. Make sure you are in your car and try again");
        }, function (err) {
            alert("error while scanning: " + err);
        });
    };
    MainscreenComponent.prototype.connect = function (UUID) {
        bluetooth.connect({
            UUID: UUID,
            onConnected: function (peripheral) {
                alert('Connected');
                //here you can navigate to the controller view
            },
            onDisconnected: function (peripheral) {
                alert('Device Disconnected');
                //here you can navigate to the scan view
            }
        });
    };
    __decorate([
        core_1.ViewChild("BlueToothStatusBar"),
        __metadata("design:type", core_1.ElementRef)
    ], MainscreenComponent.prototype, "BlueToothStatusBar", void 0);
    MainscreenComponent = __decorate([
        core_1.Component({
            selector: "mainscreen",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/mainscreen/mainscreen.html",
            styleUrls: ["./pages/mainscreen/mainscreen-common.css", "./pages/mainscreen/mainscreen.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], MainscreenComponent);
    return MainscreenComponent;
}());
exports.MainscreenComponent = MainscreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtEQUE2RDtBQUM3RCwwQ0FBeUM7QUFDekMsK0JBQThCO0FBRTlCLHNDQUF5RTtBQUV6RSxrREFBcUQ7QUFVckQ7SUFxRkUsNkJBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFuRnBFLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQWdGL0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFLbEIsQ0FBQztJQWxGRCx5Q0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXJDLElBQUksa0JBQWtCLEdBQVMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztRQUNyRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDdkIsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxLQUFLLENBQUM7WUFDekUsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBRUwscURBQXFEO1FBQ3JELHNCQUFzQjtRQUN0QixrQ0FBa0M7UUFDbEMsZUFBZTtRQUNmLDhCQUE4QjtRQUM5QixRQUFRO1FBQ1IsTUFBTTtRQUVOLGNBQWM7UUFFZCx1Q0FBdUM7UUFDdkMsaUVBQWlFO1FBQ2pFLEtBQUs7UUFFTCxTQUFTLENBQUMsYUFBYSxDQUFDO1lBQ3RCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsWUFBWSxFQUFFLFVBQVUsVUFBVTtnQkFDaEMsS0FBSyxDQUFDLDhCQUE4QixHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFeEQsU0FBUyxDQUFDLE9BQU8sQ0FBQztvQkFDaEIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO29CQUNyQixXQUFXLEVBQUUsVUFBQyxVQUFzQjt3QkFDbEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNuQiw4Q0FBOEM7b0JBQ2hELENBQUM7b0JBQ0QsY0FBYyxFQUFFLFVBQUMsVUFBc0I7d0JBQ3JDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO3dCQUM3Qix3Q0FBd0M7b0JBQzFDLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO2dCQUdGLFlBQVk7Z0JBQ1osc0JBQXNCO2dCQUV0QixNQUFNO2dCQUVOLDhDQUE4QztZQUdoRCxDQUFDO1lBQ0QsbUJBQW1CLEVBQUUsS0FBSztTQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7UUFDeEUsQ0FBQyxFQUFFLFVBQVUsR0FBRztZQUNkLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCxxQ0FBTyxHQUFQLFVBQVEsSUFBWTtRQUNsQixTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2hCLElBQUksRUFBRSxJQUFJO1lBQ1YsV0FBVyxFQUFFLFVBQUMsVUFBc0I7Z0JBQ2xDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbkIsOENBQThDO1lBQ2hELENBQUM7WUFDRCxjQUFjLEVBQUUsVUFBQyxVQUFzQjtnQkFDckMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzdCLHdDQUF3QztZQUMxQyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdnQztRQUFoQyxnQkFBUyxDQUFDLG9CQUFvQixDQUFDO2tDQUFxQixpQkFBVTttRUFBQztJQWpGbkQsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsMENBQTBDLEVBQUUsbUNBQW1DLENBQUM7U0FDN0YsQ0FBQzt5Q0FzRjRCLGVBQU0sRUFBdUIsMEJBQVc7T0FyRnpELG1CQUFtQixDQXdGL0I7SUFBRCwwQkFBQztDQUFBLEFBeEZELElBd0ZDO0FBeEZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCBibHVldG9vdGggPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtYmx1ZXRvb3RoJyk7XHJcblxyXG5pbXBvcnQgeyBQZXJpcGhlcmFsIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJsdWV0b290aCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYWluc2NyZWVuXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbWFpbnNjcmVlbi9tYWluc2NyZWVuLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvbWFpbnNjcmVlbi9tYWluc2NyZWVuLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL21haW5zY3JlZW4vbWFpbnNjcmVlbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluc2NyZWVuQ29tcG9uZW50IHtcclxuICB1c2VyY2hlOiBVc2VyO1xyXG4gIGlzQmx1ZXRvb3RoQ29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG5cclxuICBvbkJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xyXG4gICAgdGhpcy5pc0Nvbm5lY3RlZCA9ICF0aGlzLmlzQ29ubmVjdGVkO1xyXG5cclxuICAgIGxldCBCbHVlVG9vdGhTdGF0dXNCYXIgPSA8Vmlldz50aGlzLkJsdWVUb290aFN0YXR1c0Jhci5uYXRpdmVFbGVtZW50O1xyXG4gICAgQmx1ZVRvb3RoU3RhdHVzQmFyLmFuaW1hdGUoe1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0Nvbm5lY3RlZCA/IG5ldyBDb2xvcihcImdyZWVuXCIpIDogbmV3IENvbG9yKFwicmVkXCIpLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICB9KTtcclxuICAgXHJcbiAgLy8gICBibHVldG9vdGguaXNCbHVldG9vdGhFbmFibGVkKCkudGhlbihlbmFibGVkID0+IHtcclxuICAvLyAgICAgaWYgKCFlbmFibGVkKSB7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImRpc2FibGVkXCIpXHJcbiAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJnZW9yZ2lcIilcclxuICAvLyAgICAgfVxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyAgIGRlYnVnZ2VyO1xyXG5cclxuICAvLyBibHVldG9vdGguaXNCbHVldG9vdGhFbmFibGVkKCkudGhlbihcclxuICAvLyAgIGVuYWJsZWQgPT4gZW5hYmxlZCA/IGFsZXJ0KFwiRXZhbGFcIikgOiBhbGVydChcInBsZWFzZSBlbmFibGVcIilcclxuICAvLyApO1xyXG5cclxuICBibHVldG9vdGguc3RhcnRTY2FubmluZyh7XHJcbiAgICBzZXJ2aWNlVVVJRHM6IFtdLFxyXG4gICAgc2Vjb25kczogNSxcclxuICAgIG9uRGlzY292ZXJlZDogZnVuY3Rpb24gKHBlcmlwaGVyYWwpIHtcclxuICAgICAgYWxlcnQoXCJQZXJpcGVyaGFsIGZvdW5kIHdpdGggVVVJRDogXCIgKyBwZXJpcGhlcmFsLlVVSUQpO1xyXG5cclxuICAgICAgYmx1ZXRvb3RoLmNvbm5lY3Qoe1xyXG4gICAgICAgIFVVSUQ6IHBlcmlwaGVyYWwuVVVJRCxcclxuICAgICAgICBvbkNvbm5lY3RlZDogKHBlcmlwaGVyYWw6IFBlcmlwaGVyYWwpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KCdDb25uZWN0ZWQnKTtcclxuICAgICAgICAgIC8vaGVyZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoZSBjb250cm9sbGVyIHZpZXdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRGlzY29ubmVjdGVkOiAocGVyaXBoZXJhbDogUGVyaXBoZXJhbCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoJ0RldmljZSBEaXNjb25uZWN0ZWQnKTtcclxuICAgICAgICAgIC8vaGVyZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoZSBzY2FuIHZpZXdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgICAgLy9pZiBzdWNjZXNzXHJcbiAgICAgIC8vY2hhbmdlIHRvIHN1Y2Nlc3NmdWxcclxuXHJcbiAgICAgIC8vZXNsZVxyXG5cclxuICAgICAgLy8gUHJvYmxlbSBjb25uZWN0aW5nIHRvIHRoZSBkZXZpY2UuIFRyeSBhZ2FpblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgc2tpcFBlcm1pc3Npb25DaGVjazogZmFsc2VcclxuICB9KS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgYWxlcnQoXCJObyBkZXZpY2UgZm91bmQuIE1ha2Ugc3VyZSB5b3UgYXJlIGluIHlvdXIgY2FyIGFuZCB0cnkgYWdhaW5cIik7XHJcbiAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgYWxlcnQoXCJlcnJvciB3aGlsZSBzY2FubmluZzogXCIgKyBlcnIpO1xyXG4gIH0pO1xyXG5cclxufVxyXG5cclxuY29ubmVjdChVVUlEOiBzdHJpbmcpIHtcclxuICBibHVldG9vdGguY29ubmVjdCh7XHJcbiAgICBVVUlEOiBVVUlELFxyXG4gICAgb25Db25uZWN0ZWQ6IChwZXJpcGhlcmFsOiBQZXJpcGhlcmFsKSA9PiB7XHJcbiAgICAgIGFsZXJ0KCdDb25uZWN0ZWQnKTtcclxuICAgICAgLy9oZXJlIHlvdSBjYW4gbmF2aWdhdGUgdG8gdGhlIGNvbnRyb2xsZXIgdmlld1xyXG4gICAgfSxcclxuICAgIG9uRGlzY29ubmVjdGVkOiAocGVyaXBoZXJhbDogUGVyaXBoZXJhbCkgPT4ge1xyXG4gICAgICBhbGVydCgnRGV2aWNlIERpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAvL2hlcmUgeW91IGNhbiBuYXZpZ2F0ZSB0byB0aGUgc2NhbiB2aWV3XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuXHJcbkBWaWV3Q2hpbGQoXCJCbHVlVG9vdGhTdGF0dXNCYXJcIikgQmx1ZVRvb3RoU3RhdHVzQmFyOiBFbGVtZW50UmVmO1xyXG5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gICAgXHJcbiAgfVxyXG59XHJcbiJdfQ==