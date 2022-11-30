var app = angular.module("hastane", []);

app.controller("müşteriler", function($scope) {

  $scope.kullanicilar = [
  { tc:20123, adsoyad:'Ali Veli', tel:0555555, cinsiyet:'E' }
 ,{ tc:98579, adsoyad:'Esra Atak', tel:0553455, cinsiyet:'K' }
  ,{ tc:43534, adsoyad:'Veli Ali', tel:0555665, cinsiyet:'E' }
  ,{ tc:78998, adsoyad:'Kaan Demir', tel:0366555, cinsiyet:'E' }
  ,{ tc:34233, adsoyad:'Yaşar Şenay', tel:0545665, cinsiyet:'E' }
  ,{ tc:12434, adsoyad:'Ayşe Can', tel:0534565, cinsiyet:'K' }

  ];
  
  $scope.sifirla =function () {
    $scope.tc="";
    $scope.adsoyad="";
    $scope.tel="";
    $scope.cinsiyet="";
  }
  $scope.kullanicisil =function(sira) {
   $scope.kullanicilar.splice(sira,1);
  }

  $scope.kullaniciekle = function (gtc, gadsoyad,gtel,gcinsiyet) {
    $scope.kullanicilar.push({ tc:gtc, adsoyad:gadsoyad, tel:gtel, cinsiyet:gcinsiyet});
    $scope.sifirla();
}
  $scope.guncellenecekkullaniciid = -1;
  $scope.guncellemeverilerinidoldur = function(gelenveri,guncellenecekid) {
    $scope.tc=gelenveri.tc;
    $scope.adsoyad=gelenveri.adsoyad;
    $scope.tel=gelenveri.tel;
    $scope.cinsiyet=gelenveri.cinsiyet;
    $scope.guncellenecekkullaniciid = guncellenecekid;
  }
  $scope.kullaniciguncelle = function (ytc,yadsoyad,ytel,ycinsiyet) {
    $scope.kullanicilar[$scope.guncellenecekkullaniciid].tc = ytc;
    $scope.kullanicilar[$scope.guncellenecekkullaniciid].adsoyad = yadsoyad;
    $scope.kullanicilar[$scope.guncellenecekkullaniciid].tel = ytel;
    $scope.kullanicilar[$scope.guncellenecekkullaniciid].cinsiyet = ycinsiyet;


  }


  });