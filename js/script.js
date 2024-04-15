var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var id = button.id;
            if (id === 'head') {
                window.location.href = 'headphones.html';
            } else if (id === 'tablet') {
                window.location.href = 'tablets.html';
            } else if (id === 'laptop') {
                window.location.href = 'laptops.html';
            }
        });
    }
);
// var buttons2 = document.querySelectorAll('#button2');
//     buttons2.forEach(function(button) {
//         button.addEventListener('click', function() {
//             var id = button.id;
//             if (id === 'head') {
//                 window.location.href = 'headphones.html';
//             } else if (id === 'tablet') {
//                 window.location.href = 'tablets.html';
//             } else if (id === 'laptop') {
//                 window.location.href = 'laptops.html';
//             }
//         });
//     }
// );


var tabletButton = document.querySelectorAll('#button2 t');
    tabletButton.forEach(function(button) {
        button.addEventListener('click', function() {
            var class1 = button.class1;
            if (class1 === 'budget') {
                window.location.href = '';
            } else if (id === 'intermediate') {
                window.location.href = '';
            } else if (id === 'expensive') {
                window.location.href = '';
            }
        });
    }
);

var headphonesButton = document.querySelectorAll('#button2 h');
    headphonesButton.forEach(function(button) {
        button.addEventListener('click', function() {
            var class1 = button.class;
            if (class1 === 'budget') {
                window.location.href = '';
            } else if (id === 'intermediate') {
                window.location.href = '';
            } else if (id === 'expensive') {
                window.location.href = '';
            }
        });
    }
);

var headphonesButton = document.querySelectorAll('#button2 h');
    headphonesButton.forEach(function(button) {
        button.addEventListener('click', function() {
            var class1 = button.class;
            if (class1 === 'budget') {
                window.location.href = 'tablets.html';
            } else if (id === 'intermediate') {
                window.location.href = '';
            } else if (id === 'expensive') {
                window.location.href = '';
            }
        });
    }
);


var laptopButtons = document.querySelectorAll('.button2');

laptopButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var id = button.id;
        if (id === 'bh') {
            window.location.href = 'https://www.target.com/p/jbl-tune-on-ear-bluetooth-wireless-headphones-510bt-black/-/A-82291396?ref=tgt_adv_xsp&AFID=bing&fndsrc=tgtao&DFA=71700000012717169&CPNG=PLA_Electronics%2BShopping%7CElectronics_Ecomm_Hardlines&adgroup=SC_Electronics&LID=700000001230728pgs&LNM=PRODUCT_GROUP&network=o&device=c&location=&targetid=pla-4585375806959391&ds_rl=1246978&ds_rl=1248099&ref=tgt_adv_XS000000&AFID=bing_pla_df&CPNG=PLA_Electronics%2BShopping%7CElectronics_Ecomm_Hardlines&adgroup=SC_Electronics&LID=700000001230728pbs&network=s&device=c&querystring=JBL%20Tune%20510BT%3A%20Wireless%20Bluetooth%20On-Ear%20Headphones%20With%20Purebass%20Sound%20-%20With%20Cleaning%20Cloth%20-%20Black&msclkid=1421f5af7a831106ac7e93b2e7a548a5&gclid=1421f5af7a831106ac7e93b2e7a548a5&gclsrc=3p.ds'; // JBL Tune 510BT
        } else if (id === 'ih') {
            window.location.href = 'https://www.macys.com/shop/product/sony-whch710n-wireless-bluetooth-noise-canceling-over-the-ear-headphones-bundle?ID=17736707&pla_country=US&CAGPSPN=pla'; // sony whcn710n
        } else if (id === 'eh') {
            window.location.href = 'https://www.bestbuy.com/site/bose-quietcomfort-45-wireless-noise-cancelling-over-the-ear-headphones-triple-black/6471291.p?skuId=6471291&cmp=RMX&extStoreId='; // bose quietcomfort 45
        }
        else if (id === 'bt') { // samsung galaxy tab a7
            window.location.href = 'https://www.walmart.com/ip/Samsung-Galaxy-Tab-A7-32GB-10-4-Wi-Fi-Gray-SM-T500NZABXAR/577387799?wmlspartner=wlpa&selectedSellerId=101448643&adid=22222222222000000000&wmlspartner=wmtlabs&wl0=e&wl1=o&wl2=c&wl3=10352200394&wl4=pla-1103028060075&wl5=&wl6=&wl7=&wl10=Walmart&wl11=Online&wl12=577387799_10001467995&wl14=Samsung%20Galaxy%20Tab%20A7&veh=sem&msclkid=bac13e04f36b1c421fa358196d9adc10&gclid=bac13e04f36b1c421fa358196d9adc10&gclsrc=3p.ds'; 
        }
        else if (id === 'it') {
            window.location.href = 'https://www.amazon.com/Microsoft-Surface-10-5-Inch-Windows-Bundled/dp/B088H24L61/ref=asc_df_B088H24L61?tag=bingshoppinga-20&linkCode=df0&hvadid=79920941254458&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583520405087163&psc=1';
        }
        else if (id === 'et') {
            window.location.href = 'https://www.target.com/p/apple-ipad-air-10-9-inch-wi-fi-only-256gb-2022-5th-generation-space-gray/-/A-77616342?ref=tgt_adv_xsp&AFID=bing&fndsrc=tgtao&DFA=71700000027789225&CPNG=PLA_Electronics_Priority%2BShopping%7CElectronics_Ecomm_Hardlines&adgroup=Electronics_Priority+TCINs&LID=700000001230728pgs&LNM=PRODUCT_GROUP&network=o&device=c&location=&targetid=pla-4585581968147050&ds_rl=1246978&msclkid=eb176f6e450d170e6fd50973daebae53&gclid=eb176f6e450d170e6fd50973daebae53&gclsrc=3p.ds';
        }
        else if (id === 'bl') {
            window.location.href = 'https://www.walmart.com/ip/Lenovo-IdeaPad-1-14-Laptop-14-0-HD-Display-Intel-Celeron-N4020-1-1-GHz-4GB-RAM-64GB-eMMC-1TB-SSD-Storage-UHD-Graphics-600-Win-11-S-Mode-Cloud-Grey-Ma/5257103874?wmlspartner=wlpa&selectedSellerId=14771&adid=22222222222000000000&wmlspartner=wmtlabs&wl0=e&wl1=o&wl2=c&wl3=10352200394&wl4=pla-1103028060075&wl5=&wl6=&wl7=&wl10=Walmart&wl11=Online&wl12=5257103874_10000015501&wl14=Lenovo%20IdeaPad%20Laptop&veh=sem&msclkid=02bfcf7ab850140aa2fea96718c9c9a0&gclid=02bfcf7ab850140aa2fea96718c9c9a0&gclsrc=3p.ds';
        }
        else if (id === 'il') {
            window.location.href = 'https://www.dell.com/en-us/shop/cty/pdp/spd/inspiron-15-3530-laptop/useichbts3530gmhb?tfcid=54833114&'; 
        }
        else if (id === 'el') {
            window.location.href = 'https://www.bhphotovideo.com/c/product/1793757-REG/apple_mbp14m304sl_14_macbook_pro_m3.html?ap=y&smp=y&msclkid=9e0e51e3a97511990f6537fe08e49f7e';
        }
        });
    }
);



// FORM
