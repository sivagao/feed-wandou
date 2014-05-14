angular.module('ionicApp', ['ionic'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('restaurants', {
                url: '/',
                templateUrl: 'restaurants.html',
                controller: 'restaurantsCtrl'
            })
            .state('restaurant', {
                url: '/restaurant/:name',
                templateUrl: 'restaurant.html',
                controller: 'restaurantCtrl'
            })
            .state('dash', {
                url: '/dash/:name',
                templateUrl: 'dash.html',
                controller: 'dashCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'profile.html',
                controller: 'profileCtrl'
            })

        $urlRouterProvider.otherwise('/');
    })
    .controller('orderCtrl', function($scope, $rootScope, $ionicPopup) {
        $rootScope.todayOrder = {
            dashes: [],
            sum: 0
        };

        $rootScope.$watch('todayOrder.dashes', function(val) {
            if (!val) return;
            $rootScope.todayOrder.sum = 0;
            angular.forEach(val, function(dash) {
                $rootScope.todayOrder.sum += dash.price * dash.count;
            });
        }, true);

        $scope.haveOrderHandler = function() {
            $ionicPopup.confirm({
                title: '确定要下单吗？',
                content: '吃不完，崔阿姨搞死你哦！'
            }).then(function(res) {
                if (res) {
                    console.log('You are sure');
                    // http the order?!
                } else {
                    console.log('You are not sure');
                }
            });
        };
    })
    .controller('restaurantsCtrl', function($scope, $state) {
        $scope.viewRestaurant = function(restaurant) {
            $state.go('restaurant', {
                name: restaurant.name
            });
        };
        $scope.restaurants =
            [{
            "url": "data/\u5927\u5634\u6881\u9505\u8d34\u7ca5\u94fa",
            "cname": "\u5927\u5634\u6881\u9505\u8d34\u7ca5\u94fa",
            "name": "\u5927\u5634\u6881\u9505\u8d34\u7ca5\u94fa"
        }, {
            "url": "data/\u6b63\u4e00\u5473",
            "cname": "\u6b63\u4e00\u5473",
            "name": "\u6b63\u4e00\u5473"
        }, {
            "url": "data/\u514b\u91cc\u6728\u9f50",
            "cname": "\u514b\u91cc\u6728\u9f50",
            "name": "\u514b\u91cc\u6728\u9f50"
        }, {
            "url": "data/\u5408\u5229\u5c4b",
            "cname": "\u5408\u5229\u5c4b",
            "name": "\u5408\u5229\u5c4b"
        }, {
            "url": "data/\u5409\u91ce\u5bb6",
            "cname": "\u5409\u91ce\u5bb6",
            "name": "\u5409\u91ce\u5bb6"
        }, {
            "url": "data/\u771f\u529f\u592b",
            "cname": "\u771f\u529f\u592b",
            "name": "\u771f\u529f\u592b"
        }, {
            "url": "data/\u5eb7\u4ed4\u4e91\u541e\u9762",
            "cname": "\u5eb7\u4ed4\u4e91\u541e\u9762",
            "name": "\u5eb7\u4ed4\u4e91\u541e\u9762"
        }, {
            "url": "data/\u4e1c\u65b9\u997a\u5b50\u738b",
            "cname": "\u4e1c\u65b9\u997a\u5b50\u738b",
            "name": "\u4e1c\u65b9\u997a\u5b50\u738b"
        }, {
            "url": "data/\u8d5b\u767e\u5473",
            "cname": "\u8d5b\u767e\u5473",
            "name": "\u8d5b\u767e\u5473"
        }, {
            "url": "data/\u6c38\u548c\u5927\u738b",
            "cname": "\u6c38\u548c\u5927\u738b",
            "name": "\u6c38\u548c\u5927\u738b"
        }, {
            "url": "data/\u9ea6\u5f53\u52b3",
            "cname": "\u9ea6\u5f53\u52b3",
            "name": "\u9ea6\u5f53\u52b3"
        }, {
            "url": "data/\u4e00\u54c1\u4e09\u7b11",
            "cname": "\u4e00\u54c1\u4e09\u7b11",
            "name": "\u4e00\u54c1\u4e09\u7b11"
        }, {
            "url": "data/\u6ca1\u540d\u513f\u751f\u714e",
            "cname": "\u6ca1\u540d\u513f\u751f\u714e",
            "name": "\u6ca1\u540d\u513f\u751f\u714e"
        }, {
            "url": "data/\u548c\u5408\u8c37",
            "cname": "\u548c\u5408\u8c37",
            "name": "\u548c\u5408\u8c37"
        }, {
            "url": "data/\u80af\u5fb7\u57fa",
            "cname": "\u80af\u5fb7\u57fa",
            "name": "\u80af\u5fb7\u57fa"
        }, {
            "url": "data/\u5eb7\u5e08\u5085\u79c1\u623f\u725b\u8089\u9762",
            "cname": "\u5eb7\u5e08\u5085\u79c1\u623f\u725b\u8089\u9762",
            "name": "\u5eb7\u5e08\u5085\u79c1\u623f\u725b\u8089\u9762"
        }, {
            "url": "data/\u5b8f\u72b6\u5143\u7ca5\u5e97",
            "cname": "\u5b8f\u72b6\u5143\u7ca5\u5e97",
            "name": "\u5b8f\u72b6\u5143\u7ca5\u5e97"
        }, {
            "url": "data/\u5609\u548c\u4e00\u54c1\u7ca5",
            "cname": "\u5609\u548c\u4e00\u54c1\u7ca5",
            "name": "\u5609\u548c\u4e00\u54c1\u7ca5"
        }];

    })
    .controller('restaurantCtrl', function($scope, $rootScope) {
        console.log('restaurantCtrl');


        var dataDashes =
            [{
            "category": "\u7f8e\u5473\u6c64\u7fb9",
            "dishes": [{
                "price": 1200,
                "name": "\u767d\u83dc\u8c46\u8150\u6c64"
            }, {
                "price": 1000,
                "name": "\u897f\u7ea2\u67ff\u9e21\u86cb\u6c64"
            }, {
                "price": 1400,
                "name": "\u4eac\u5473\u7599\u7629\u6c64"
            }, {
                "price": 1400,
                "name": "\u86cb\u82b1\u6817\u7c73\u7fb9"
            }, {
                "price": 1200,
                "name": "\u9178\u8fa3\u6c64"
            }]
        }, {
            "category": "\u7cbe\u7f8e\u4e3b\u98df",
            "dishes": [{
                "price": 1000,
                "name": "\u8001\u5317\u4eac\u70b8\u9171\u9762"
            }, {
                "price": 2600,
                "name": "\u5927\u5634\u6881\u718f\u8089\u5927\u997c"
            }, {
                "price": 1200,
                "name": "\u8001\u5317\u4eac\u7cca\u997c"
            }, {
                "price": 1000,
                "name": "\u8001\u5317\u4eac\u8304\u4e01\u9762"
            }, {
                "price": 1000,
                "name": "\u8001\u5317\u4eac\u6253\u5364\u9762"
            }, {
                "price": 1000,
                "name": "\u9171\u6cb9\u7092\u9762"
            }, {
                "price": 1000,
                "name": "\u9e21\u86cb\u7092\u996d"
            }, {
                "price": 1200,
                "name": "\u626c\u5dde\u7092\u996d"
            }, {
                "price": 1200,
                "name": "\u7ea2\u70e7\u725b\u8089\u9762"
            }, {
                "price": 200,
                "name": "\u7c73\u996d"
            }]
        }, {
            "category": "\u725b\u8089\u7cfb\u5217",
            "dishes": [{
                "price": 600,
                "name": "\u725b\u8089\u5927\u8471(\u4e24)"
            }, {
                "price": 600,
                "name": "\u725b\u8089\u5c0f\u767d\u83dc(\u4e24)"
            }, {
                "price": 600,
                "name": "\u725b\u8089\u897f\u846b\u82a6(\u4e24)"
            }, {
                "price": 600,
                "name": "\u725b\u8089\u80e1\u841d\u535c(\u4e24)"
            }, {
                "price": 600,
                "name": "\u725b\u8089\u6241\u8c46(\u4e24)"
            }, {
                "price": 600,
                "name": "\u725b\u8089\u6d0b\u8471(\u4e24)"
            }, {
                "price": 600,
                "name": "\u725b\u8089\u8304\u5b50(\u4e24)"
            }, {
                "price": 600,
                "name": "\u725b\u8089\u5c16\u6912(\u4e24)"
            }, {
                "price": 600,
                "name": "\u725b\u8089\u9178\u83dc(\u4e24)"
            }]
        }, {
            "category": "\u7f8a\u8089\u7cfb\u5217",
            "dishes": [{
                "price": 600,
                "name": "\u7f8a\u8089\u5927\u8471(\u4e24)"
            }, {
                "price": 600,
                "name": "\u7f8a\u8089\u897f\u846b\u82a6(\u4e24)"
            }, {
                "price": 600,
                "name": "\u7f8a\u8089\u80e1\u841d\u535c(\u4e24)"
            }, {
                "price": 600,
                "name": "\u7f8a\u8089\u6241\u8c46(\u4e24)"
            }, {
                "price": 600,
                "name": "\u7f8a\u8089\u5c16\u6912(\u4e24)"
            }, {
                "price": 600,
                "name": "\u7f8a\u8089\u5357\u74dc(\u4e24)"
            }, {
                "price": 600,
                "name": "\u7f8a\u8089\u97ed\u83dc(\u4e24)"
            }, {
                "price": 600,
                "name": "\u7f8a\u8089\u9178\u83dc(\u4e24)"
            }]
        }, {
            "category": "\u7d20\u9985\u7cfb\u5217",
            "dishes": [{
                "price": 900,
                "name": "\u9e21\u86cb\u5c16\u6912(\u4e24)"
            }, {
                "price": 900,
                "name": "\u9e21\u86cb\u97ed\u83dc(\u4e24)"
            }, {
                "price": 900,
                "name": "\u9e21\u86cb\u897f\u846b\u82a6(\u4e24)"
            }, {
                "price": 900,
                "name": "\u9e21\u86cb\u5357\u74dc(\u4e24)"
            }, {
                "price": 900,
                "name": "\u5c16\u6912\u8304\u5b50(\u4e24)"
            }, {
                "price": 1000,
                "name": "\u7d20\u4e09\u9c9c(\u4e24)"
            }, {
                "price": 900,
                "name": "\u867e\u76ae\u5c0f\u767d\u83dc(\u4e24)"
            }]
        }, {
            "category": "\u732a\u8089\u7cfb\u5217",
            "dishes": [{
                "price": 500,
                "name": "\u732a\u8089\u5927\u8471(\u4e24)"
            }, {
                "price": 500,
                "name": "\u732a\u8089\u97ed\u83dc(\u4e24)"
            }, {
                "price": 500,
                "name": "\u732a\u8089\u8334\u9999(\u4e24)"
            }, {
                "price": 500,
                "name": "\u732a\u8089\u767d\u83dc(\u4e24)"
            }, {
                "price": 500,
                "name": "\u732a\u8089\u6241\u8c46(\u4e24)"
            }, {
                "price": 500,
                "name": "\u732a\u8089\u5c16\u6912(\u4e24)"
            }, {
                "price": 500,
                "name": "\u732a\u8089\u8304\u5b50(\u4e24)"
            }, {
                "price": 1000,
                "name": "\u732a\u8089\u5c0f\u767d\u83dc(\u4e24)"
            }, {
                "price": 500,
                "name": "\u732a\u8089\u897f\u846b\u82a6(\u4e24)"
            }, {
                "price": 600,
                "name": "\u732a\u8089\u4e09\u9c9c(\u4e24)"
            }, {
                "price": 600,
                "name": "\u732a\u8089\u82a5\u83dc(\u4e24)"
            }, {
                "price": 600,
                "name": "\u732a\u8089\u9999\u83c7(\u4e24)"
            }, {
                "price": 600,
                "name": "\u732a\u8089\u9178\u83dc(\u4e24)"
            }, {
                "price": 600,
                "name": "\u867e\u4ec1\u51ac\u83c7(\u4e24)"
            }]
        }, {
            "category": "\u53ef\u53e3\u751c\u7ca5",
            "dishes": [{
                "price": 700,
                "name": "\u7ea2\u67a3\u9ed1\u829d\u9ebb\u7ca5(\u7897)"
            }, {
                "price": 600,
                "name": "\u94f6\u8033\u96ea\u68a8\u7ea2\u67a3\u7ca5(\u7897)"
            }, {
                "price": 600,
                "name": "\u5927\u9ea6\u5c0f\u67a3\u5c71\u836f\u7ca5(\u7897)"
            }, {
                "price": 500,
                "name": "\u91d1\u74dc\u767e\u5408\u7ca5(\u7897)"
            }, {
                "price": 600,
                "name": "\u94f6\u8033\u83b2\u5b50\u7ea2\u67a3\u7ca5(\u7897)"
            }, {
                "price": 500,
                "name": "\u8377\u53f6\u83b2\u5b50\u7ca5(\u7897)"
            }, {
                "price": 800,
                "name": "\u517b\u751f\u4e94\u4ec1\u7ca5(\u7897)"
            }, {
                "price": 600,
                "name": "\u7ea2\u67a3\u82a6\u835f\u96ea\u68a8\u7ca5(\u7897)"
            }, {
                "price": 600,
                "name": "\u7ea2\u8c46\u858f\u7c73\u767e\u5408\u7ca5(\u7897)"
            }, {
                "price": 600,
                "name": "\u6842\u82b1\u5c71\u836f\u7cef\u7c73\u7ca5(\u7897)"
            }, {
                "price": 400,
                "name": "\u68d2\u6e23\u7ca5(\u7897)"
            }]
        }, {
            "category": "\u517b\u751f\u54b8\u7ca5",
            "dishes": [{
                "price": 1800,
                "name": "\u6781\u54c1\u7ca5(\u7897)"
            }, {
                "price": 700,
                "name": "\u751f\u6eda\u732a\u809d\u7ca5(\u7897)"
            }, {
                "price": 800,
                "name": "\u751f\u6eda\u725b\u8089\u7ca5(\u7897)"
            }, {
                "price": 600,
                "name": "\u83e0\u83dc\u732a\u809d\u7ca5(\u7897)"
            }, {
                "price": 400,
                "name": "\u83e0\u83dc\u7ca5(\u7897)"
            }, {
                "price": 500,
                "name": "\u67b8\u675e\u91ce\u83dc\u7ca5(\u7897)"
            }, {
                "price": 600,
                "name": "\u76ae\u86cb\u7626\u8089\u7ca5(\u7897)"
            }, {
                "price": 400,
                "name": "\u852c\u83dc\u7ca5(\u7897)"
            }, {
                "price": 500,
                "name": "\u4ec0\u9526\u83cc\u83c7\u7ca5(\u7897)"
            }, {
                "price": 600,
                "name": "\u54b8\u86cb\u9c7c\u4e38\u87f9\u67f3\u7ca5(\u7897)"
            }]
        }, {
            "category": "\u7eff\u8272\u517b\u989c\u65f6\u852c",
            "dishes": [{
                "price": 1600,
                "name": "\u6e05\u7092\u6cb9\u83dc"
            }, {
                "price": 1800,
                "name": "\u9999\u83c7\u6cb9\u83dc"
            }, {
                "price": 1200,
                "name": "\u9178\u8fa3\u571f\u8c46\u4e1d"
            }, {
                "price": 1200,
                "name": "\u709d\u7092\u571f\u8c46\u4e1d"
            }, {
                "price": 1200,
                "name": "\u918b\u6e9c\u571f\u8c46\u4e1d"
            }, {
                "price": 1600,
                "name": "\u6e05\u7092\u82e6\u74dc"
            }, {
                "price": 1800,
                "name": "\u9e21\u86cb\u82e6\u74dc"
            }, {
                "price": 1600,
                "name": "\u6e05\u7092\u6cb9\u9ea6\u83dc"
            }, {
                "price": 2200,
                "name": "\u8c46\u8c49\u9cae\u9c7c\u6cb9\u9ea6\u83dc"
            }, {
                "price": 1200,
                "name": "\u9178\u8fa3\u5927\u767d\u83dc"
            }, {
                "price": 1200,
                "name": "\u918b\u6e9c\u5927\u767d\u83dc"
            }, {
                "price": 1200,
                "name": "\u6e05\u7092\u5927\u767d\u83dc"
            }, {
                "price": 1500,
                "name": "\u6e05\u7092\u5706\u751f\u83dc"
            }, {
                "price": 1800,
                "name": "\u869d\u6cb9\u5706\u751f\u83dc"
            }, {
                "price": 1800,
                "name": "\u6e05\u7092\u897f\u5170\u82b1"
            }, {
                "price": 1800,
                "name": "\u849c\u8338\u897f\u5170\u82b1"
            }, {
                "price": 1800,
                "name": "\u5e72\u7178\u56db\u5b63\u8c46"
            }, {
                "price": 2200,
                "name": "\u6984\u83dc\u8089\u788e\u56db\u5b63\u8c46"
            }, {
                "price": 1600,
                "name": "\u6e05\u7092\u5706\u767d\u83dc"
            }, {
                "price": 1600,
                "name": "\u70ae\u7092\u5706\u767d\u83dc"
            }]
        }, {
            "category": "\u7cbe\u54c1\u51c9\u83dc",
            "dishes": [{
                "price": 2200,
                "name": "\u814a\u516b\u849c\u6ce1\u51e4\u722a"
            }, {
                "price": 1900,
                "name": "\u8707\u5934\u767d\u83dc\u5fc3"
            }, {
                "price": 1200,
                "name": "\u4e1c\u5317\u5927\u62c9\u76ae"
            }, {
                "price": 1200,
                "name": "\u59dc\u6c41\u677e\u82b1\u86cb"
            }, {
                "price": 2900,
                "name": "\u65e0\u4e3a\u9171\u677f\u9e2d"
            }, {
                "price": 1600,
                "name": "\u6c34\u679c\u6c99\u62c9"
            }, {
                "price": 1200,
                "name": "\u5de7\u62cc\u7b0b\u4e1d"
            }, {
                "price": 1500,
                "name": "\u7f8e\u6781\u9ed1\u6728\u8033"
            }, {
                "price": 2200,
                "name": "\u624b\u6495\u7f8a\u809a"
            }, {
                "price": 1000,
                "name": "\u76ae\u86cb\u8c46\u8150"
            }, {
                "price": 1600,
                "name": "\u4e73\u722a\u6cbe\u9171"
            }, {
                "price": 1000,
                "name": "\u8001\u918b\u82b1\u751f\u7c73"
            }, {
                "price": 1000,
                "name": "\u70b8\u82b1\u751f\u7c73"
            }, {
                "price": 1200,
                "name": "\u5bb6\u4e61\u6742\u62cc\u83dc"
            }, {
                "price": 1200,
                "name": "\u9999\u693f\u82d7\u62cc\u9ed1\u8c46\u76ae"
            }, {
                "price": 1600,
                "name": "\u82a5\u83dc\u4e09\u4e1d"
            }, {
                "price": 1600,
                "name": "\u4e1c\u6d77\u957f\u5bff\u83dc"
            }, {
                "price": 2900,
                "name": "\u84dd\u8393\u6842\u82b1\u5c71\u836f"
            }, {
                "price": 2200,
                "name": "\u6d9d\u6c41\u7d20\u4ec0\u9526"
            }, {
                "price": 1200,
                "name": "\u5de7\u62cc\u91d1\u9488\u83c7"
            }, {
                "price": 1200,
                "name": "\u5ddd\u5317\u51c9\u7c89"
            }, {
                "price": 1600,
                "name": "\u6c49\u5821\u8c46\u8150"
            }, {
                "price": 1500,
                "name": "\u70e7\u6c41\u5c0f\u76ae\u86cb"
            }, {
                "price": 1200,
                "name": "\u9165\u9999\u9e21\u86cb\u5e72"
            }, {
                "price": 1000,
                "name": "\u4e94\u9999\u8c46\u8150\u4e1d"
            }, {
                "price": 1000,
                "name": "\u62cd\u9ec4\u74dc"
            }, {
                "price": 1600,
                "name": "\u5927\u62cc\u83dc"
            }, {
                "price": 1600,
                "name": "\u9178\u8fa3\u6839\u7c89"
            }, {
                "price": 1600,
                "name": "\u51c9\u62cc\u4e1d\u74dc\u5c16"
            }, {
                "price": 1200,
                "name": "\u660e\u76ee\u7f8a\u809d\u62cc\u82e6\u83ca"
            }, {
                "price": 1200,
                "name": "\u9ec4\u8c46\u9171\u62fc\u8c46\u5377"
            }, {
                "price": 2900,
                "name": "\u9e45\u80d7\u7116\u5b50"
            }, {
                "price": 1000,
                "name": "\u8001\u575b\u6ce1\u83dc"
            }, {
                "price": 1000,
                "name": "\u7206\u814c\u841d\u535c\u76ae"
            }]
        }, {
            "category": "\u5e72\u9505\u98d8\u9999",
            "dishes": [{
                "price": 3900,
                "name": "\u5e72\u9505\u725b\u86d9"
            }, {
                "price": 2600,
                "name": "\u5e72\u9505\u83dc\u82b1\u5e72"
            }, {
                "price": 3600,
                "name": "\u5e72\u9505\u4ed4\u9e21"
            }, {
                "price": 3800,
                "name": "\u5e72\u9505\u725b\u8089\u8150\u7af9"
            }, {
                "price": 3600,
                "name": "\u5e72\u9505\u9e21\u9e2d\u6742"
            }, {
                "price": 3900,
                "name": "\u5e72\u9505\u80a5\u80a0"
            }, {
                "price": 2900,
                "name": "\u5e72\u9505\u8336\u6811\u83c7"
            }, {
                "price": 2000,
                "name": "\u5e72\u9505\u5a03\u5a03\u83dc"
            }, {
                "price": 4900,
                "name": "\u5e72\u9505\u624b\u6495\u9e21"
            }]
        }, {
            "category": "\u6e58\u5473\u6e58\u60c5",
            "dishes": [{
                "price": 2900,
                "name": "\u5c0f\u7092\u9e21\u6742\u9e2d\u6742"
            }, {
                "price": 1900,
                "name": "\u5c0f\u7092\u83dc\u82b1\u5e72"
            }, {
                "price": 1600,
                "name": "\u5c0f\u7092\u8304\u4e01"
            }, {
                "price": 1900,
                "name": "\u5c0f\u7092\u5fb7\u5b57\u9999\u5e72"
            }, {
                "price": 1900,
                "name": "\u5c0f\u7092\u9ed1\u6728\u8033"
            }, {
                "price": 1900,
                "name": "\u7802\u9505\u5a03\u5a03\u83dc"
            }, {
                "price": 1900,
                "name": "\u5c0f\u7092\u809d\u5c16"
            }, {
                "price": 2900,
                "name": "\u6e58\u5473\u5c0f\u7092\u8089"
            }, {
                "price": 1900,
                "name": "\u5e72\u9505\u571f\u8c46\u7247"
            }, {
                "price": 3900,
                "name": "\u5c0f\u7092\u9ec4\u725b\u8089"
            }]
        }, {
            "category": "\u7cbe\u7f8e\u5bb6\u5e38\u83dc",
            "dishes": [{
                "price": 3900,
                "name": "\u4e94\u8c37\u6742\u7cae\u5305"
            }, {
                "price": 1900,
                "name": "\u5bab\u7206\u9e21\u4e01"
            }, {
                "price": 1900,
                "name": "\u5730\u76ae\u7092\u9e21\u86cb"
            }, {
                "price": 4200,
                "name": "\u849c\u70e7\u809a\u6761"
            }, {
                "price": 2200,
                "name": "\u7ea2\u70e7\u65e5\u672c\u8c46\u8150"
            }, {
                "price": 2900,
                "name": "\u6c34\u716e\u8089"
            }, {
                "price": 1800,
                "name": "\u70b8\u591a\u6625\u9c7c"
            }, {
                "price": 2000,
                "name": "\u6e9c\u8089\u7247"
            }, {
                "price": 1600,
                "name": "\u8089\u6cab\u8c46\u5634\u7092\u7c89\u6761"
            }, {
                "price": 1900,
                "name": "\u9999\u5e72\u82a6\u84bf"
            }, {
                "price": 1600,
                "name": "\u9ebb\u5a46\u8c46\u8150"
            }, {
                "price": 3900,
                "name": "\u8336\u6811\u83c7\u7092\u732a\u809a"
            }, {
                "price": 2600,
                "name": "\u91ce\u5c71\u83cc\u5c0f\u7092"
            }, {
                "price": 2900,
                "name": "\u9505\u4ed4\u9999\u83dc\u4e38\u5b50"
            }, {
                "price": 2800,
                "name": "\u8106\u9995\u7092\u70e4\u8089"
            }, {
                "price": 1900,
                "name": "\u6728\u987b\u8089"
            }, {
                "price": 3200,
                "name": "\u6c34\u716e\u725b\u8089"
            }, {
                "price": 1800,
                "name": "\u70e7\u8304\u5b50"
            }, {
                "price": 2200,
                "name": "\u677e\u4ec1\u7389\u7c73"
            }, {
                "price": 1800,
                "name": "\u8089\u6cab\u7c89\u4e1d\u5c0f\u767d\u83dc"
            }, {
                "price": 1900,
                "name": "\u5bb6\u5e38\u8c46\u8150"
            }, {
                "price": 3900,
                "name": "\u897f\u7ea2\u67ff\u725b\u8169"
            }, {
                "price": 2200,
                "name": "\u4eac\u9171\u8089\u4e1d"
            }, {
                "price": 3600,
                "name": "\u7cd6\u918b\u91cc\u808c"
            }, {
                "price": 1900,
                "name": "\u9c7c\u9999\u8089\u4e1d"
            }, {
                "price": 2900,
                "name": "\u9505\u4ed4\u841d\u535c\u80a5\u725b\u5377"
            }, {
                "price": 2900,
                "name": "\u9999\u8fa3\u9c7f\u9c7c\u987b"
            }, {
                "price": 1800,
                "name": "\u5730\u4e09\u9c9c"
            }, {
                "price": 3900,
                "name": "\u9505\u4ed4\u4e0a\u6c64\u6742\u83cc"
            }, {
                "price": 1900,
                "name": "\u5b5c\u7136\u9999\u8fa3\u9f99\u7b4b"
            }, {
                "price": 2900,
                "name": "\u53cc\u83cc\u7206\u725b\u67f3"
            }]
        }, {
            "category": "\u672c\u5e97\u63a8\u8350",
            "dishes": [{
                "price": 2900,
                "name": "\u9ebb\u8fa3\u9999\u9505"
            }, {
                "price": 4900,
                "name": "\u8d35\u5dde\u9178\u6c64\u9c7c"
            }, {
                "price": 3900,
                "name": "\u91d1\u6c64\u80a5\u725b"
            }, {
                "price": 3100,
                "name": "\u6ce1\u6912\u725b\u67f3"
            }, {
                "price": 4900,
                "name": "\u65b0\u6d3e\u6c34\u716e\u9c7c"
            }, {
                "price": 3600,
                "name": "\u9ebb\u8fa3\u9999\u9505\u9e21"
            }, {
                "price": 4900,
                "name": "\u9ebb\u8fa3\u998b\u86d9"
            }]
        }, {
            "category": "\u672c\u5e97\u62db\u724c",
            "dishes": [{
                "price": 4900,
                "name": "\u9171\u8154\u9aa8(\u4efd)"
            }, {
                "price": 4900,
                "name": "\u9171\u68d2\u9aa8(\u4efd)"
            }]
        }, {
            "category": "\u8001\u5317\u4eac\u56db\u559c\u7897",
            "dishes": [{
                "price": 3900,
                "name": "\u5c0f\u7897\u7096\u725b\u8089"
            }, {
                "price": 1600,
                "name": "\u5c0f\u7897\u70b8\u8c46\u6ce1"
            }, {
                "price": 1900,
                "name": "\u5c0f\u7897\u5c0f\u9165\u8089"
            }, {
                "price": 1900,
                "name": "\u5c0f\u7897\u7096\u540a\u5b50"
            }]
        }, {
            "category": "\u8001\u5317\u4eac\u98ce\u5473",
            "dishes": [{
                "price": 5900,
                "name": "\u8001\u5317\u4eac\u70e7\u7f8a\u8089"
            }, {
                "price": 4900,
                "name": "\u4eac\u5473\u70e4\u7f8a\u8089"
            }, {
                "price": 3800,
                "name": "\u6817\u5b50\u9e21"
            }, {
                "price": 3900,
                "name": "\u7206\u809a"
            }, {
                "price": 1800,
                "name": "\u8001\u5317\u4eac\u7116\u9165\u9c7c"
            }, {
                "price": 1900,
                "name": "\u7092\u809d\u5c16"
            }, {
                "price": 3800,
                "name": "\u70c2\u849c\u80a5\u80a0"
            }, {
                "price": 1200,
                "name": "\u9ebb\u8c46\u8150\u7f8a\u6cb9"
            }, {
                "price": 1200,
                "name": "\u9ebb\u8c46\u8150\u7d20\u6cb9"
            }, {
                "price": 1200,
                "name": "\u8001\u5317\u4eac\u8c46\u9171"
            }, {
                "price": 800,
                "name": "\u82a5\u8309\u58a9"
            }, {
                "price": 2900,
                "name": "\u918b\u6e9c\u6728\u987b"
            }, {
                "price": 1900,
                "name": "\u7092\u5408\u83dc"
            }]
        }];

        var viewDashes = [];
        angular.forEach(dataDashes, function(category) {
            viewDashes.push({
                category: category.category,
                isCategory: true
            });
            angular.forEach(category.dishes, function(dash) {
                viewDashes.push({
                    price: dash.price / 100,
                    name: dash.name,
                    count: 0
                });
            });
        });
        $scope.viewDashes = viewDashes;

        $scope.getItemHeight = function(item) {
            return item.isCategory ? 40 : 100;
        };

        $scope.countHandler = function(item, type) {
            if (type == 'plus') {
                item.count = item.count + 1;
            } else {
                if (!item.count) return;
                item.count = item.count - 1;
            };
            if (!item.count) return;
            $rootScope.todayOrder.dashes.push(item);
        };
    })
    .controller('dashCtrl', function($scope) {
        console.log('restaurantCtrl');
    })
    .controller('profileCtrl', function($scope) {
        console.log('restaurantCtrl');
    });