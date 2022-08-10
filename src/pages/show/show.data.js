const show_data = [
    {
      id: 1,
      title: 'Cars',
      routeName: 'cars',
      items: [
        {
          id: 1,
          name: 'Rolls Royce',
          imageUrl: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/black-badge-ghost-2021/page-properties/Twin-Card-BB_RR21_RR21_Product_Page.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Bentley',
          imageUrl: 'https://www.wallpapertip.com/wmimgs/15-155598_cool-bentley-car-widescreen-desktop-image-bentley-continental.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'Bugatti',
          imageUrl: 'https://www.drivespark.com/wallimg/600x90/photos/2018-bugatti-divo/2018-bugatti-divo-hypercar-02.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Koenigsegg',
          imageUrl: 'https://free4kwallpapers.com/uploads/originals/2016/03/30/2016-koenigsegg-agera-final-one-of-one-wallpaper.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'BMW',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18
        },
        {
          id: 6,
          name: 'Mercedes',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Masarati',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Tesla',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Hyundai',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Bikes',
      routeName: 'bikes',
      items: [
        {
          id: 10,
          name: 'Harley Davidson',
          imageUrl: 'https://c4.wallpaperflare.com/wallpaper/854/136/948/motorcycles-harley-davidson-wallpaper-preview.jpg',
          price: 220
        },
        {
          id: 11,
          name: 'Royal Enfield',
          imageUrl: 'https://bd.gaadicdn.com/processedimages/royal-enfield/royal-enfield-classic/494X300/m_classic-500_11540276179.jpg?tr=h-48',
          price: 280
        },
        {
          id: 12,
          name: 'Ducati',
          imageUrl: 'https://i.pinimg.com/originals/9b/02/91/9b02910f1936bfe100383d90713a3abe.jpg',
          price: 110
        },
        {
          id: 13,
          name: 'BMW',
          imageUrl: 'https://w0.peakpx.com/wallpaper/574/85/HD-wallpaper-bmw-bike-car-thumbnail.jpg',
          price: 160
        },
        {
          id: 14,
          name: 'Ultraviolette',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Honda',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Benalli',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Aprilia',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Planes',
      routeName: 'planes',
      items: [
        {
          id: 18,
          name: 'Bombardier',
          imageUrl: 'https://img.aviationpros.com/files/base/cygnus/cavc/image/2021/04/16x9/bombardier.606db16a84085.png?auto=format,compress&w=500&h=281&fit=clip',
          price: 125
        },
        {
          id: 19,
          name: 'Gulfstream',
          imageUrl: 'https://www.gulfstream.com/assets/images/aircraft/g800/v_g800_a_mkt_004_Desktop.jpg',
          price: 90
        },
        {
          id: 20,
          name: 'Embraer',
          imageUrl: 'https://www.embraercommercialaviation.com/wp-content/uploads/2017/06/ERJ145XR.jpg',
          price: 90
        },
        {
          id: 21,
          name: 'Airbus',
          imageUrl: 'https://www.aerotime.aero/upload/files/airbus_acj_twotwenty.jpg',
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Yacht',
      routeName: 'yacht',
      items: [
        {
          id: 23,
          name: 'Feadship Viva',
          imageUrl: 'https://d2adoy6vr915pu.cloudfront.net/eyJidWNrZXQiOiJzdG9tcC1mZWFkc2hpcC1wcm9kIiwia2V5IjoiY3JhZnRcL3lhY2h0c1wvaW1hZ2VzXC9WaXZhLUNvcHlyaWdodC1GZWFkc2hpcC1EU0NfMzY4MS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMCwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJjb250YWluIn19fQ==',
          price: 25
        },
        {
          id: 24,
          name: 'Lurssen Nord',
          imageUrl: 'https://cdn.lurssen.com/images/new-build/the-yachts/nord/header.jpg?w=1920&q=60&fm=pjpeg',
          price: 20
        },
        {
          id: 25,
          name: 'Nobiskrug Sycara',
          imageUrl: 'https://www.nobiskrug.com/fileadmin/user_upload/fleet/hero-fleet-sycarav.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'Prestige 620S',
          imageUrl: 'https://photos.inautia.com/barcosOcasion/8/3/6/8/prestige-620s-58095020202656504865567054514565x.jpg',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Computers',
      routeName: 'computers',
      items: [
        {
          id: 30,
          name: 'Ryzen Threadripper',
          imageUrl: 'https://productimages.hepsiburada.net/s/21/375/9906994970674.jpg',
          price: 325
        },
        {
          id: 31,
          name: 'Ryzen 9 series',
          imageUrl: 'https://cdn.mos.cms.futurecdn.net/mnzNfoMcmVXme8vxENcyjm.jpg',
          price: 20
        },
        {
          id: 32,
          name: 'Ryzen 7 series',
          imageUrl: 'https://cdn.mos.cms.futurecdn.net/piojhRKWg42gNuL67kYdLK.jpg',
          price: 25
        },
        {
          id: 33,
          name: 'Ryzen 5 series',
          imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-bc7e2f4afa83cd49af216d6cea51364f-pjlq',
          price: 25
        },
        {
          id: 34,
          name: 'Ryzen 3 series',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Intel 9th Gen',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ];
  
  export default show_data;
  