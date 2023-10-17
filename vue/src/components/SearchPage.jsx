import './SearchPage.css'
import aircon from './img/aircon.jpg'
import check from './img/check.jpg'
import door from './img/door.jpg'
import documentImg from './img/document.jpg'
import person from './img/person.jpg'
import email from './img/email.jpg'
import fuel from './img/fuel.jpg'
import plane from './img/plane.jpg'
import star from './img/star.png'
import suitcase from './img/suitcase.jpg'
import tire from './img/tire.jpg'
import transmission from './img/transmission.jpg'
import backCrumbArrow from './icons/backCrumbsArrow.svg'
import whiteArrow from './icons/whiteArrow.svg'
import car from "./icons/car.svg"
import order from "./icons/order.svg"
import login from "./icons/login.svg"
import eur from "./icons/RUS.svg"
import rus from "./icons/EUR.svg"
import lang from "./icons/langRUS.svg"
import strokes from './icons/strokes.svg'
import AT from './icons/AT.svg'
import ATact from './icons/ATact.svg'
import MT from './icons/MT.svg'
import MTact from './icons/MTact.svg'
import Climat from './icons/climat.svg'
import Climatact from './icons/climatact.svg'
import MiniCar from './icons/miniCar.svg'
import MiniCaract from './icons/miniCaract.svg'
import EcoCar from './icons/economCar.svg'
import EcoCaract from './icons/economCaract.svg'
import StandartCar from './icons/standartCar.svg'
import StandartCaract from './icons/standartCaract.svg'
import LuxCar from './icons/luxCar.svg'
import LuxCaract from './icons/luxCaract.svg'
import UniCar from './icons/uniCar.svg'
import UniCaract from './icons/uniCaract.svg'
import MinivanCar from './icons/minivanCar.svg'
import MinivanCaract from './icons/minivanCaract.svg'
import JeepCar from './icons/jeepCar.svg'
import JeepCaract from './icons/jeepCaract.svg'
import CupeCar from './icons/cupeCar.svg'
import CupeCaract from './icons/cupeCaract.svg'
import ExclusiveCar from './icons/exclusiveCar.svg'
import ExclusiveCaract from './icons/exclusiveCaract.svg'
import filterImg from './icons/filter.svg'
import removeWhite from './icons/removeWhite.svg'
import removeBlue from './icons/removeBlue.svg'
import whiteStar from './icons/whiteStar.svg'
import grayStar from './icons/grayStar.svg'
import filterChecked from './icons/filterChecked.svg'
import phone from './icons/greenPhone.svg'

const json = {
    "status": true,
    "countCars": 20,
    "maxPrice": 1977.1965,
    "minPrice": 271.46,
    "totalCarsCount": 124,
    "lastBottomCarsCount": 0,
    "lastTopCarsCount": 104,
    "suppliers": {
        "12": {
            "price": 271
        },
        "13000": {
            "price": 277
        },
        "17000": {
            "price": 280
        },
        "8000": {
            "price": 300
        },
        "9000": {
            "price": 300
        },
        "87000": {
            "price": 310
        },
        "147000": {
            "price": 327
        },
        "166000": {
            "price": 408
        }
    },
    "cars": [
        {
            "car": {
                "id": "S_CCAR_1384422_1384422____1",
                "name": "Compact (Nissan Versa)",
                "companyClass": "CCAR",
                "group": 5,
                "imageUrl": "https:\/\/www.sixt.de\/php\/fleet\/vehicleimage?grp=CCAR&liso=US&uci=42299",
                "classCode": "CCAR",
                "seats": "5",
                "doors": "4",
                "transmission": 2,
                "airco": true,
                "smallSuitcases": "2",
                "bigSuitcases": "1",
                "additionalInfo": "",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": "Компактный",
                "station": {
                    "id": 1384422,
                    "company": 12,
                    "wherePickUp": "DeskInTerminal",
                    "address": "Rental Car Center LAS, 7135 Gilespie St, Suite A, 89119-4273, Las Vegas",
                    "instructions": "On arrival, board the McCarran Car Rental shuttle bus, departing outside the Baggage Claim area. At the McCarran Rent-A-Car Center, proceed to the Advantage\/EZ\/SIXT counter space.\n\n ",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 7:00-23:59"
                    ],
                    "email1": "",
                    "email2": "Wholesaler-cs@sixt.com",
                    "phone1": "18887498227",
                    "phone2": "",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.05994,
                    "longitude": -115.16449
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 257.99178,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 220.1189,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 257.99178,
                "commision": 0,
                "total": 257.99178,
                "totalByCma": 257.99,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 271.46,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 231.61,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 271.46,
                "commision": 0,
                "total": 271.46,
                "totalByCma": 271.46,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "usdPrice": {
                "deposit": 271.46,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 231.61,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 271.46,
                "commision": 0,
                "total": 271.46,
                "totalByCma": 271.46,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "supplier": {
                "id": 12,
                "name": "SIXT ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "FullPrepaidWithMarkup",
                "stationId": 1384422
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [
                "LowDeposit"
            ],
            "carPromoDetailed": [],
            "carPromoOptions": [
                {
                    "code": "LowDeposit",
                    "localizedName": "Низкий депозит",
                    "priority": 1,
                    "category": "Car Info"
                }
            ],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "19077608",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 4,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 1,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "J_XXAR_1366608_1366608_96936058213___1",
                "name": "Dealers Choice",
                "companyClass": "XXAR",
                "group": 18,
                "imageUrl": "http:\/\/www.acerentacar.com\/CarPics\/XX.png",
                "classCode": "XXAR",
                "seats": "4",
                "doors": "2-5",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "bigSuitcases": "1",
                "type": "Особый",
                "station": {
                    "id": 1366608,
                    "company": 13000,
                    "wherePickUp": "ShuttleToLocation",
                    "address": "8755 South Las Vegas Blvd. Las Vegas, 89123",
                    "instructions": "See Rental conditions for pick up instruction. Shuttle to Location.\nUpon arrival at the Las Vegas Airport, please board the McCarran car rental shuttle bus from the baggage claim area.  When you exit the McCarran bus, go to the taxi\/off-site pick up area located just outside the car rental center and stand between sign number 4-8.  Shuttle runs approximately every 15 to 25 minutes during operating hours.\n",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 8:00-20:00"
                    ],
                    "email1": "",
                    "email2": "otacustomercare@acerentacar.com",
                    "phone1": "7027394711",
                    "phone2": "8778223872",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.0801,
                    "longitude": -115.152
                },
                "typeAll": "Special"
            },
            "price": {
                "deposit": 29.69193,
                "supplierDeposit": 0,
                "remainder": 233.24373,
                "basePrice": 162.51601,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 233.24373,
                "commision": 23.75354,
                "total": 262.93566,
                "totalByCma": 262.94,
                "currency": "EUR",
                "taxAmount": 70.72773,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": -1,
                "maxExcess": -1
            },
            "customerPrice": {
                "deposit": 31.24197,
                "supplierDeposit": 0,
                "remainder": 245.42,
                "basePrice": 171,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 245.42,
                "commision": 24.99357,
                "total": 276.66197,
                "totalByCma": 276.66,
                "currency": "USD",
                "taxAmount": 74.42,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": -1,
                "maxExcess": -1
            },
            "usdPrice": {
                "deposit": 31.24197,
                "supplierDeposit": 0,
                "remainder": 245.42,
                "basePrice": 171,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 245.42,
                "commision": 24.99357,
                "total": 276.66197,
                "totalByCma": 276.66,
                "currency": "USD",
                "taxAmount": 74.42,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": -1,
                "maxExcess": -1
            },
            "supplier": {
                "id": 13000,
                "name": "ACE Rent A Car ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "ProfitOnly",
                "stationId": 1366608
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "96936058213",
            "taxDataMode": "TaxCalculated",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 1073741824,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 74.42,
                    "priceEUR": 70.73,
                    "customerPrice": 74.42,
                    "priceUSD": 74.42
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "ProfitOnly",
            "carPopularity": 19,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "K_CCAR_1415803_1415803_EVROPA_VG1D__1",
                "name": "Ford Focus",
                "companyClass": "CCAR",
                "group": 5,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/62999cc0f72f4f27b0b23e1a826a6a5a.jpg",
                "classCode": "CCAR",
                "seats": "5",
                "doors": "5",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": true,
                "smallSuitcases": "",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": "Компактный",
                "station": {
                    "id": 1415803,
                    "company": 17000,
                    "wherePickUp": "DeskInTerminal",
                    "address": "7135 GILESPIE STREET, LAS VEGAS, 89119-1256",
                    "openingHours": [
                        "24h x 7"
                    ],
                    "email1": "",
                    "email2": "firstchoicees@hertz.com",
                    "phone1": "7022627700",
                    "phone2": "17022627758",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.080101,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 265.71,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 265.71,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 225.8535,
                "commision": 31.8852,
                "total": 265.71,
                "totalByCma": 265.71,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 279.6332,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 279.6332,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 237.68822,
                "commision": 33.55598,
                "total": 279.6332,
                "totalByCma": 279.6332,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "usdPrice": {
                "deposit": 279.6332,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 279.6332,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 237.68822,
                "commision": 33.55598,
                "total": 279.6332,
                "totalByCma": 279.6332,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "supplier": {
                "id": 17000,
                "name": "Hertz ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "ProfitOnly",
                "stationId": 1415803
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "EVROPA",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 2,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "K_ICAR_1415803_1415803_EVROPA_VG1D__1",
                "name": "Mazda 3",
                "companyClass": "ICAR",
                "group": 21,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/570fc92865d14b77b65c7754d313e2db.jpg",
                "classCode": "ICAR",
                "seats": "5",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": false,
                "smallSuitcases": "",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": null,
                "station": {
                    "id": 1415803,
                    "company": 17000,
                    "wherePickUp": "DeskInTerminal",
                    "address": "7135 GILESPIE STREET, LAS VEGAS, 89119-1256",
                    "openingHours": [
                        "24h x 7"
                    ],
                    "email1": "",
                    "email2": "firstchoicees@hertz.com",
                    "phone1": "7022627700",
                    "phone2": "17022627758",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.080101,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 267.96,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 267.96,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 227.766,
                "commision": 32.1552,
                "total": 267.96,
                "totalByCma": 267.96,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 282.0011,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 282.0011,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 239.70094,
                "commision": 33.84013,
                "total": 282.0011,
                "totalByCma": 282.0011,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "usdPrice": {
                "deposit": 282.0011,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 282.0011,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 239.70094,
                "commision": 33.84013,
                "total": 282.0011,
                "totalByCma": 282.0011,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "supplier": {
                "id": 17000,
                "name": "Hertz ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "ProfitOnly",
                "stationId": 1415803
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "EVROPA",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 1,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "K_ECAR_1415803_1415803_EVROPA_VG1D__1",
                "name": "Chevrolet Spark",
                "companyClass": "ECAR",
                "group": 3,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/6f54af0a4a7e40c4a1c91b419ac938db.png",
                "classCode": "ECAR",
                "seats": "4",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": false,
                "smallSuitcases": "1",
                "bigSuitcases": "1",
                "carTypeForWeb": [
                    "Econom"
                ],
                "type": "Эконом",
                "station": {
                    "id": 1415803,
                    "company": 17000,
                    "wherePickUp": "DeskInTerminal",
                    "address": "7135 GILESPIE STREET, LAS VEGAS, 89119-1256",
                    "openingHours": [
                        "24h x 7"
                    ],
                    "email1": "",
                    "email2": "firstchoicees@hertz.com",
                    "phone1": "7022627700",
                    "phone2": "17022627758",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.080101,
                    "longitude": -115.152
                },
                "typeAll": "Econom"
            },
            "price": {
                "deposit": 270.22,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 270.22,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 229.687,
                "commision": 32.4264,
                "total": 270.22,
                "totalByCma": 270.22,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 284.37953,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 284.37953,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 241.7226,
                "commision": 34.12554,
                "total": 284.37953,
                "totalByCma": 284.37953,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "usdPrice": {
                "deposit": 284.37953,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 284.37953,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 241.7226,
                "commision": 34.12554,
                "total": 284.37953,
                "totalByCma": 284.37953,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "supplier": {
                "id": 17000,
                "name": "Hertz ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "ProfitOnly",
                "stationId": 1415803
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "EVROPA",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 1,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "K_IFAR_1415803_1415803_EVROPA_VG1D__1",
                "name": "Nissan Rogue",
                "companyClass": "IFAR",
                "group": 22,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/0df27aa7d57e438bb4f68e7865cf361f.jpg",
                "classCode": "IFAR",
                "seats": "5",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": false,
                "smallSuitcases": "",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart",
                    "XD"
                ],
                "type": null,
                "station": {
                    "id": 1415803,
                    "company": 17000,
                    "wherePickUp": "DeskInTerminal",
                    "address": "7135 GILESPIE STREET, LAS VEGAS, 89119-1256",
                    "openingHours": [
                        "24h x 7"
                    ],
                    "email1": "",
                    "email2": "firstchoicees@hertz.com",
                    "phone1": "7022627700",
                    "phone2": "17022627758",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.080101,
                    "longitude": -115.152
                },
                "typeAll": "Standart,XD"
            },
            "price": {
                "deposit": 270.22,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 270.22,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 229.687,
                "commision": 32.4264,
                "total": 270.22,
                "totalByCma": 270.22,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 284.37953,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 284.37953,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 241.7226,
                "commision": 34.12554,
                "total": 284.37953,
                "totalByCma": 284.37953,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "usdPrice": {
                "deposit": 284.37953,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 284.37953,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 241.7226,
                "commision": 34.12554,
                "total": 284.37953,
                "totalByCma": 284.37953,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "supplier": {
                "id": 17000,
                "name": "Hertz ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "ProfitOnly",
                "stationId": 1415803
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "EVROPA",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 2,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "J_ICAR_1366608_1366608_96936058214___1",
                "name": "Toyota Corolla",
                "companyClass": "ICAR",
                "group": 21,
                "imageUrl": "http:\/\/www.acerentacar.com\/CarPics\/IC.png",
                "classCode": "ICAR",
                "seats": "5",
                "doors": "2-4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": null,
                "station": {
                    "id": 1366608,
                    "company": 13000,
                    "wherePickUp": "ShuttleToLocation",
                    "address": "8755 South Las Vegas Blvd. Las Vegas, 89123",
                    "instructions": "See Rental conditions for pick up instruction. Shuttle to Location.\nUpon arrival at the Las Vegas Airport, please board the McCarran car rental shuttle bus from the baggage claim area.  When you exit the McCarran bus, go to the taxi\/off-site pick up area located just outside the car rental center and stand between sign number 4-8.  Shuttle runs approximately every 15 to 25 minutes during operating hours.\n",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 8:00-20:00"
                    ],
                    "email1": "",
                    "email2": "otacustomercare@acerentacar.com",
                    "phone1": "7027394711",
                    "phone2": "8778223872",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.0801,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 30.58358,
                "supplierDeposit": 0,
                "remainder": 240.24808,
                "basePrice": 167.93321,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 240.24808,
                "commision": 24.46686,
                "total": 270.83166,
                "totalByCma": 270.83,
                "currency": "EUR",
                "taxAmount": 72.31487,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 300,
                "maxExcess": 300
            },
            "customerPrice": {
                "deposit": 32.18017,
                "supplierDeposit": 0,
                "remainder": 252.79,
                "basePrice": 176.7,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 252.79,
                "commision": 25.74413,
                "total": 284.97017,
                "totalByCma": 284.97,
                "currency": "USD",
                "taxAmount": 76.09,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 315.66122,
                "maxExcess": 315.66122
            },
            "usdPrice": {
                "deposit": 32.18017,
                "supplierDeposit": 0,
                "remainder": 252.79,
                "basePrice": 176.7,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 252.79,
                "commision": 25.74413,
                "total": 284.97017,
                "totalByCma": 284.97,
                "currency": "USD",
                "taxAmount": 76.09,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 315.66122,
                "maxExcess": 315.66122
            },
            "supplier": {
                "id": 13000,
                "name": "ACE Rent A Car ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "ProfitOnly",
                "stationId": 1366608
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "96936058214",
            "taxDataMode": "TaxCalculated",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 1073741824,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 76.09,
                    "priceEUR": 72.31,
                    "customerPrice": 76.09,
                    "priceUSD": 76.09
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "ProfitOnly",
            "carPopularity": 9,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "S_ICAR_1384422_1384422____1",
                "name": "Midsize (Nissan Sentra)",
                "companyClass": "ICAR",
                "group": 21,
                "imageUrl": "https:\/\/www.sixt.de\/php\/fleet\/vehicleimage?grp=ICAR&liso=US&uci=42299",
                "classCode": "ICAR",
                "seats": "5",
                "doors": "4",
                "transmission": 2,
                "airco": true,
                "smallSuitcases": "1",
                "bigSuitcases": "2",
                "additionalInfo": "",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": null,
                "station": {
                    "id": 1384422,
                    "company": 12,
                    "wherePickUp": "DeskInTerminal",
                    "address": "Rental Car Center LAS, 7135 Gilespie St, Suite A, 89119-4273, Las Vegas",
                    "instructions": "On arrival, board the McCarran Car Rental shuttle bus, departing outside the Baggage Claim area. At the McCarran Rent-A-Car Center, proceed to the Advantage\/EZ\/SIXT counter space.\n\n ",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 7:00-23:59"
                    ],
                    "email1": "",
                    "email2": "Wholesaler-cs@sixt.com",
                    "phone1": "18887498227",
                    "phone2": "",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.05994,
                    "longitude": -115.16449
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 271.54429,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 231.56155,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 271.54429,
                "commision": 0,
                "total": 271.54429,
                "totalByCma": 271.54,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 285.72,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 243.65,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 285.72,
                "commision": 0,
                "total": 285.72,
                "totalByCma": 285.72,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "usdPrice": {
                "deposit": 285.72,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 243.65,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 285.72,
                "commision": 0,
                "total": 285.72,
                "totalByCma": 285.72,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "supplier": {
                "id": 12,
                "name": "SIXT ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "FullPrepaidWithMarkup",
                "stationId": 1384422
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [
                "LowDeposit"
            ],
            "carPromoDetailed": [],
            "carPromoOptions": [
                {
                    "code": "LowDeposit",
                    "localizedName": "Низкий депозит",
                    "priority": 1,
                    "category": "Car Info"
                }
            ],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "19077608",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 4,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 1,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "S_SCAR_1384422_1384422____1",
                "name": "Standard (Toyota Corolla)",
                "companyClass": "SCAR",
                "group": 11,
                "imageUrl": "https:\/\/www.sixt.de\/php\/fleet\/vehicleimage?grp=SCAR&liso=US&uci=42299",
                "classCode": "SCAR",
                "seats": "5",
                "doors": "4",
                "transmission": 2,
                "airco": true,
                "smallSuitcases": "2",
                "bigSuitcases": "2",
                "additionalInfo": "",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": "Семейный",
                "station": {
                    "id": 1384422,
                    "company": 12,
                    "wherePickUp": "DeskInTerminal",
                    "address": "Rental Car Center LAS, 7135 Gilespie St, Suite A, 89119-4273, Las Vegas",
                    "instructions": "On arrival, board the McCarran Car Rental shuttle bus, departing outside the Baggage Claim area. At the McCarran Rent-A-Car Center, proceed to the Advantage\/EZ\/SIXT counter space.\n\n ",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 7:00-23:59"
                    ],
                    "email1": "",
                    "email2": "Wholesaler-cs@sixt.com",
                    "phone1": "18887498227",
                    "phone2": "",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.05994,
                    "longitude": -115.16449
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 273.32151,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 233.05365,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 273.32151,
                "commision": 0,
                "total": 273.32151,
                "totalByCma": 273.32,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 287.59,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 245.22,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 287.59,
                "commision": 0,
                "total": 287.59,
                "totalByCma": 287.59,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "usdPrice": {
                "deposit": 287.59,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 245.22,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 287.59,
                "commision": 0,
                "total": 287.59,
                "totalByCma": 287.59,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "supplier": {
                "id": 12,
                "name": "SIXT ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "FullPrepaidWithMarkup",
                "stationId": 1384422
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [
                "LowDeposit"
            ],
            "carPromoDetailed": [],
            "carPromoOptions": [
                {
                    "code": "LowDeposit",
                    "localizedName": "Низкий депозит",
                    "priority": 1,
                    "category": "Car Info"
                }
            ],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "19077608",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 4,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 1,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "S_FCAR_1384422_1384422____1",
                "name": "Full-size (Toyota Camry)",
                "companyClass": "FCAR",
                "group": 11,
                "imageUrl": "https:\/\/www.sixt.de\/php\/fleet\/vehicleimage?grp=FCAR&liso=US&uci=42299",
                "classCode": "FCAR",
                "seats": "5",
                "doors": "4",
                "transmission": 2,
                "airco": true,
                "smallSuitcases": "2",
                "bigSuitcases": "2",
                "additionalInfo": "",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": "Семейный",
                "station": {
                    "id": 1384422,
                    "company": 12,
                    "wherePickUp": "DeskInTerminal",
                    "address": "Rental Car Center LAS, 7135 Gilespie St, Suite A, 89119-4273, Las Vegas",
                    "instructions": "On arrival, board the McCarran Car Rental shuttle bus, departing outside the Baggage Claim area. At the McCarran Rent-A-Car Center, proceed to the Advantage\/EZ\/SIXT counter space.\n\n ",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 7:00-23:59"
                    ],
                    "email1": "",
                    "email2": "Wholesaler-cs@sixt.com",
                    "phone1": "18887498227",
                    "phone2": "",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.05994,
                    "longitude": -115.16449
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 274.98469,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 234.46023,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 274.98469,
                "commision": 0,
                "total": 274.98469,
                "totalByCma": 274.98,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 289.34,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 246.7,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 289.34,
                "commision": 0,
                "total": 289.34,
                "totalByCma": 289.34,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "usdPrice": {
                "deposit": 289.34,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 246.7,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 289.34,
                "commision": 0,
                "total": 289.34,
                "totalByCma": 289.34,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "supplier": {
                "id": 12,
                "name": "SIXT ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "FullPrepaidWithMarkup",
                "stationId": 1384422
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [
                "LowDeposit"
            ],
            "carPromoDetailed": [],
            "carPromoOptions": [
                {
                    "code": "LowDeposit",
                    "localizedName": "Низкий депозит",
                    "priority": 1,
                    "category": "Car Info"
                }
            ],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "19077608",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 4,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 4,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "J_SCAR_1366608_1366608_96936058215___1",
                "name": "Volkswagen Jetta",
                "companyClass": "SCAR",
                "group": 11,
                "imageUrl": "http:\/\/www.acerentacar.com\/CarPics\/RD.png",
                "classCode": "SCAR",
                "seats": "5",
                "doors": "2-4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": "Семейный",
                "station": {
                    "id": 1366608,
                    "company": 13000,
                    "wherePickUp": "ShuttleToLocation",
                    "address": "8755 South Las Vegas Blvd. Las Vegas, 89123",
                    "instructions": "See Rental conditions for pick up instruction. Shuttle to Location.\nUpon arrival at the Las Vegas Airport, please board the McCarran car rental shuttle bus from the baggage claim area.  When you exit the McCarran bus, go to the taxi\/off-site pick up area located just outside the car rental center and stand between sign number 4-8.  Shuttle runs approximately every 15 to 25 minutes during operating hours.\n",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 8:00-20:00"
                    ],
                    "email1": "",
                    "email2": "otacustomercare@acerentacar.com",
                    "phone1": "7027394711",
                    "phone2": "8778223872",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.0801,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 31.47524,
                "supplierDeposit": 0,
                "remainder": 247.25242,
                "basePrice": 173.35041,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 247.25242,
                "commision": 25.18018,
                "total": 278.72766,
                "totalByCma": 278.73,
                "currency": "EUR",
                "taxAmount": 73.90202,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 300,
                "maxExcess": 300
            },
            "customerPrice": {
                "deposit": 33.11837,
                "supplierDeposit": 0,
                "remainder": 260.16,
                "basePrice": 182.4,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 260.16,
                "commision": 26.49469,
                "total": 293.27837,
                "totalByCma": 293.28,
                "currency": "USD",
                "taxAmount": 77.76,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 315.66122,
                "maxExcess": 315.66122
            },
            "usdPrice": {
                "deposit": 33.11837,
                "supplierDeposit": 0,
                "remainder": 260.16,
                "basePrice": 182.4,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 260.16,
                "commision": 26.49469,
                "total": 293.27837,
                "totalByCma": 293.28,
                "currency": "USD",
                "taxAmount": 77.76,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 315.66122,
                "maxExcess": 315.66122
            },
            "supplier": {
                "id": 13000,
                "name": "ACE Rent A Car ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "ProfitOnly",
                "stationId": 1366608
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "96936058215",
            "taxDataMode": "TaxCalculated",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 1073741824,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 77.76,
                    "priceEUR": 73.9,
                    "customerPrice": 77.76,
                    "priceUSD": 77.76
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "ProfitOnly",
            "carPopularity": 3,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "K_SCAR_1415803_1415803_EVROPA_VG1D__1",
                "name": "Volkswagen Jetta",
                "companyClass": "SCAR",
                "group": 11,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/dbf699265e174517bf57efcd45276da4.png",
                "classCode": "SCAR",
                "seats": "5",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": false,
                "smallSuitcases": "",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": "Семейный",
                "station": {
                    "id": 1415803,
                    "company": 17000,
                    "wherePickUp": "DeskInTerminal",
                    "address": "7135 GILESPIE STREET, LAS VEGAS, 89119-1256",
                    "openingHours": [
                        "24h x 7"
                    ],
                    "email1": "",
                    "email2": "firstchoicees@hertz.com",
                    "phone1": "7022627700",
                    "phone2": "17022627758",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.080101,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 280.73,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 280.73,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 238.6205,
                "commision": 33.6876,
                "total": 280.73,
                "totalByCma": 280.73,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 295.44025,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 295.44025,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 251.12421,
                "commision": 35.45283,
                "total": 295.44025,
                "totalByCma": 295.44025,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "usdPrice": {
                "deposit": 295.44025,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 295.44025,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 251.12421,
                "commision": 35.45283,
                "total": 295.44025,
                "totalByCma": 295.44025,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "supplier": {
                "id": 17000,
                "name": "Hertz ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "ProfitOnly",
                "stationId": 1415803
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "EVROPA",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 1,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "K_FCAR_1415803_1415803_EVROPA_VG1D__1",
                "name": "Chevrolet Malibu",
                "companyClass": "FCAR",
                "group": 11,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/7bbc3e6039a64541ac4bc9e6523ca41a.png",
                "classCode": "FCAR",
                "seats": "5",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": false,
                "smallSuitcases": "2",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": "Семейный",
                "station": {
                    "id": 1415803,
                    "company": 17000,
                    "wherePickUp": "DeskInTerminal",
                    "address": "7135 GILESPIE STREET, LAS VEGAS, 89119-1256",
                    "openingHours": [
                        "24h x 7"
                    ],
                    "email1": "",
                    "email2": "firstchoicees@hertz.com",
                    "phone1": "7022627700",
                    "phone2": "17022627758",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.080101,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 280.73,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 280.73,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 238.6205,
                "commision": 33.6876,
                "total": 280.73,
                "totalByCma": 280.73,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 295.44025,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 295.44025,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 251.12421,
                "commision": 35.45283,
                "total": 295.44025,
                "totalByCma": 295.44025,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "usdPrice": {
                "deposit": 295.44025,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 295.44025,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 251.12421,
                "commision": 35.45283,
                "total": 295.44025,
                "totalByCma": 295.44025,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.48,
                "maxExcess": 210.48
            },
            "supplier": {
                "id": 17000,
                "name": "Hertz ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "ProfitOnly",
                "stationId": 1415803
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "EVROPA",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 0,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "S_IFAR_1384422_1384422____1",
                "name": "Midsize (Toyota RAV4)",
                "companyClass": "IFAR",
                "group": 22,
                "imageUrl": "https:\/\/www.sixt.de\/php\/fleet\/vehicleimage?grp=IFAR&liso=US&uci=42299",
                "classCode": "IFAR",
                "seats": "5",
                "doors": "4",
                "transmission": 2,
                "airco": true,
                "smallSuitcases": "2",
                "bigSuitcases": "2",
                "additionalInfo": "",
                "carTypeForWeb": [
                    "Standart",
                    "XD"
                ],
                "type": null,
                "station": {
                    "id": 1384422,
                    "company": 12,
                    "wherePickUp": "DeskInTerminal",
                    "address": "Rental Car Center LAS, 7135 Gilespie St, Suite A, 89119-4273, Las Vegas",
                    "instructions": "On arrival, board the McCarran Car Rental shuttle bus, departing outside the Baggage Claim area. At the McCarran Rent-A-Car Center, proceed to the Advantage\/EZ\/SIXT counter space.\n\n ",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 7:00-23:59"
                    ],
                    "email1": "",
                    "email2": "Wholesaler-cs@sixt.com",
                    "phone1": "18887498227",
                    "phone2": "",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.05994,
                    "longitude": -115.16449
                },
                "typeAll": "Standart,XD"
            },
            "price": {
                "deposit": 283.96583,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 242.0348,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 283.96583,
                "commision": 0,
                "total": 283.96583,
                "totalByCma": 283.97,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 200,
                "maxExcess": 200
            },
            "customerPrice": {
                "deposit": 298.79,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 254.67,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 298.79,
                "commision": 0,
                "total": 298.79,
                "totalByCma": 298.79,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "usdPrice": {
                "deposit": 298.79,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 254.67,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 298.79,
                "commision": 0,
                "total": 298.79,
                "totalByCma": 298.79,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 210.44081,
                "maxExcess": 210.44081
            },
            "supplier": {
                "id": 12,
                "name": "SIXT ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "FullPrepaidWithMarkup",
                "stationId": 1384422
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [
                "LowDeposit"
            ],
            "carPromoDetailed": [],
            "carPromoOptions": [
                {
                    "code": "LowDeposit",
                    "localizedName": "Низкий депозит",
                    "priority": 1,
                    "category": "Car Info"
                }
            ],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "19077608",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 4,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "FullPrepaidWithMarkup",
            "carPopularity": 5,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "D_IFAR_1335782_1335782_1006103SUL_OZSUL__1",
                "name": "Toyota Rav4",
                "companyClass": "IFAR",
                "group": 22,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/a64e64212aa84b939f2a494843ba96ad.png",
                "classCode": "IFAR",
                "seats": "5",
                "doors": "",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": true,
                "smallSuitcases": "2",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart",
                    "XD"
                ],
                "type": null,
                "station": {
                    "id": 1335782,
                    "company": 8000,
                    "wherePickUp": "ShuttleToLocation",
                    "address": "7135 GILESPIE STREET, LAS VEGAS, 89119",
                    "instructions": "Rental Car Pick up from Terminal 3: Blue and white McCarran Rent-A-Car shuttle buses depart approximately every five minutes for the three-miles trip to the Center and the car rental company of your choice. Follow signs to Ground Transportation from Baggage Claim on Level Zero. Proceed to the Rental Car Shuttle located outside West door 1 through 4 and East doors 5 through 8.",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 8:00-22:00"
                    ],
                    "email1": "test@test.com",
                    "email2": "HertzDTAGtourscustomerservice@hertz.com",
                    "phone1": "8664342226",
                    "phone2": "",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "blockedCardTypes": [],
                    "locationId": 14762,
                    "latitude": 36.0801,
                    "longitude": -115.152
                },
                "typeAll": "Standart,XD"
            },
            "price": {
                "deposit": 284.86661,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 252.69813,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 252.69813,
                "commision": 25.73478,
                "total": 284.86661,
                "totalByCma": 284.87,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 500,
                "maxExcess": 500
            },
            "customerPrice": {
                "deposit": 299.7378,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 265.89,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 265.89,
                "commision": 27.07824,
                "total": 299.7378,
                "totalByCma": 299.74,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "usdPrice": {
                "deposit": 299.7378,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 265.89,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 265.89,
                "commision": 27.07824,
                "total": 299.7378,
                "totalByCma": 299.74,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "supplier": {
                "id": 8000,
                "name": "Dollar ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "CarPrice",
                "stationId": 1335782
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "1006103SUL",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 1073741824,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "CarPrice",
            "carPopularity": 64,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "H_IFAR_1335786_1335786_1006102SUL_OZSUL__1",
                "name": "Jeep Patriot",
                "companyClass": "IFAR",
                "group": 22,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/71067d28acad418bb77f413295feb02b.png",
                "classCode": "IFAR",
                "seats": "5",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": false,
                "smallSuitcases": "1",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart",
                    "XD"
                ],
                "type": null,
                "station": {
                    "id": 1335786,
                    "company": 9000,
                    "wherePickUp": "DeskInTerminal",
                    "address": "7135 GILESPIE STREET, GILESPIE AND WARM SPRING ROAD, LAS VEGAS, 89119",
                    "instructions": "Desk in Terminal",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 8:00-22:00"
                    ],
                    "email1": "",
                    "email2": "hertzdtagtourscustomerservice@hertz.com",
                    "phone1": "8772830898",
                    "phone2": "7028969986",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.0801,
                    "longitude": -115.152
                },
                "typeAll": "Standart,XD"
            },
            "price": {
                "deposit": 284.86661,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 252.69813,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 252.69813,
                "commision": 25.73478,
                "total": 284.86661,
                "totalByCma": 284.87,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 500,
                "maxExcess": 500
            },
            "customerPrice": {
                "deposit": 299.7378,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 265.89,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 265.89,
                "commision": 27.07824,
                "total": 299.7378,
                "totalByCma": 299.74,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "usdPrice": {
                "deposit": 299.7378,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 265.89,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 265.89,
                "commision": 27.07824,
                "total": 299.7378,
                "totalByCma": 299.74,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "supplier": {
                "id": 9000,
                "name": "Thrifty ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "CarPrice",
                "stationId": 1335786
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [
                "Top"
            ],
            "carPromoDetailed": [],
            "carPromoOptions": [
                {
                    "code": "Top",
                    "localizedName": "Лидер продаж",
                    "priority": 1,
                    "category": "Car Price"
                }
            ],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "1006102SUL",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 1073741824,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "CarPrice",
            "carPopularity": 89,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "H_IDAR_1335786_1335786_1006102SUL_OZSUL__1",
                "name": "Toyota Corolla",
                "companyClass": "IDAR",
                "group": 21,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/5bcf5214626d43c393231c6b38cc557c.jpg",
                "classCode": "IDAR",
                "seats": "5",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": false,
                "smallSuitcases": "",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": null,
                "station": {
                    "id": 1335786,
                    "company": 9000,
                    "wherePickUp": "DeskInTerminal",
                    "address": "7135 GILESPIE STREET, GILESPIE AND WARM SPRING ROAD, LAS VEGAS, 89119",
                    "instructions": "Desk in Terminal",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 8:00-22:00"
                    ],
                    "email1": "",
                    "email2": "hertzdtagtourscustomerservice@hertz.com",
                    "phone1": "8772830898",
                    "phone2": "7028969986",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.0801,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 287.18076,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 254.75097,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 254.75097,
                "commision": 25.94384,
                "total": 287.18076,
                "totalByCma": 287.18,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 500,
                "maxExcess": 500
            },
            "customerPrice": {
                "deposit": 302.17276,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 268.05,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 268.05,
                "commision": 27.29821,
                "total": 302.17276,
                "totalByCma": 302.17,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "usdPrice": {
                "deposit": 302.17276,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 268.05,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 268.05,
                "commision": 27.29821,
                "total": 302.17276,
                "totalByCma": 302.17,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "supplier": {
                "id": 9000,
                "name": "Thrifty ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "CarPrice",
                "stationId": 1335786
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [
                "Top"
            ],
            "carPromoDetailed": [],
            "carPromoOptions": [
                {
                    "code": "Top",
                    "localizedName": "Лидер продаж",
                    "priority": 1,
                    "category": "Car Price"
                }
            ],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "1006102SUL",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 1073741824,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "CarPrice",
            "carPopularity": 2,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "D_IDAR_1335782_1335782_1006103SUL_OZSUL__1",
                "name": "Nissan Sentra",
                "companyClass": "IDAR",
                "group": 21,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/57b9d928e7524730afc216cf37ae2bcb.jpg",
                "classCode": "IDAR",
                "seats": "5",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": true,
                "smallSuitcases": "",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": null,
                "station": {
                    "id": 1335782,
                    "company": 8000,
                    "wherePickUp": "ShuttleToLocation",
                    "address": "7135 GILESPIE STREET, LAS VEGAS, 89119",
                    "instructions": "Rental Car Pick up from Terminal 3: Blue and white McCarran Rent-A-Car shuttle buses depart approximately every five minutes for the three-miles trip to the Center and the car rental company of your choice. Follow signs to Ground Transportation from Baggage Claim on Level Zero. Proceed to the Rental Car Shuttle located outside West door 1 through 4 and East doors 5 through 8.",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 8:00-22:00"
                    ],
                    "email1": "test@test.com",
                    "email2": "HertzDTAGtourscustomerservice@hertz.com",
                    "phone1": "8664342226",
                    "phone2": "",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "blockedCardTypes": [],
                    "locationId": 14762,
                    "latitude": 36.0801,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 287.18076,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 254.75097,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 254.75097,
                "commision": 25.94384,
                "total": 287.18076,
                "totalByCma": 287.18,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 500,
                "maxExcess": 500
            },
            "customerPrice": {
                "deposit": 302.17276,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 268.05,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 268.05,
                "commision": 27.29821,
                "total": 302.17276,
                "totalByCma": 302.17,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "usdPrice": {
                "deposit": 302.17276,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 268.05,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 268.05,
                "commision": 27.29821,
                "total": 302.17276,
                "totalByCma": 302.17,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "supplier": {
                "id": 8000,
                "name": "Dollar ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "CarPrice",
                "stationId": 1335782
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "1006103SUL",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 1073741824,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "CarPrice",
            "carPopularity": 1,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "H_ICAR_1335786_1335786_1006102SUL_OZSUL__1",
                "name": "Toyota Corolla",
                "companyClass": "ICAR",
                "group": 21,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/5bcf5214626d43c393231c6b38cc557c.jpg",
                "classCode": "ICAR",
                "seats": "5",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": false,
                "smallSuitcases": "",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": null,
                "station": {
                    "id": 1335786,
                    "company": 9000,
                    "wherePickUp": "DeskInTerminal",
                    "address": "7135 GILESPIE STREET, GILESPIE AND WARM SPRING ROAD, LAS VEGAS, 89119",
                    "instructions": "Desk in Terminal",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 8:00-22:00"
                    ],
                    "email1": "",
                    "email2": "hertzdtagtourscustomerservice@hertz.com",
                    "phone1": "8772830898",
                    "phone2": "7028969986",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "locationId": 14762,
                    "latitude": 36.0801,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 287.18076,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 254.75097,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 254.75097,
                "commision": 25.94384,
                "total": 287.18076,
                "totalByCma": 287.18,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 500,
                "maxExcess": 500
            },
            "customerPrice": {
                "deposit": 302.17276,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 268.05,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 268.05,
                "commision": 27.29821,
                "total": 302.17276,
                "totalByCma": 302.17,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "usdPrice": {
                "deposit": 302.17276,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 268.05,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 268.05,
                "commision": 27.29821,
                "total": 302.17276,
                "totalByCma": 302.17,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "supplier": {
                "id": 9000,
                "name": "Thrifty ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "CarPrice",
                "stationId": 1335786
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [
                "Top"
            ],
            "carPromoDetailed": [],
            "carPromoOptions": [
                {
                    "code": "Top",
                    "localizedName": "Лидер продаж",
                    "priority": 1,
                    "category": "Car Price"
                }
            ],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "1006102SUL",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 1073741824,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "CarPrice",
            "carPopularity": 135,
            "freeExtrasCount": 0
        },
        {
            "car": {
                "id": "D_ICAR_1335782_1335782_1006103SUL_OZSUL__1",
                "name": "Nissan Sentra",
                "companyClass": "ICAR",
                "group": 21,
                "imageUrl": "https:\/\/d2f9dw3b0opbul.cloudfront.net\/57b9d928e7524730afc216cf37ae2bcb.jpg",
                "classCode": "ICAR",
                "seats": "5",
                "doors": "4",
                "fuel": "NA",
                "transmission": 2,
                "airco": true,
                "airbag": true,
                "smallSuitcases": "",
                "bigSuitcases": "2",
                "carTypeForWeb": [
                    "Standart"
                ],
                "type": null,
                "station": {
                    "id": 1335782,
                    "company": 8000,
                    "wherePickUp": "ShuttleToLocation",
                    "address": "7135 GILESPIE STREET, LAS VEGAS, 89119",
                    "instructions": "Rental Car Pick up from Terminal 3: Blue and white McCarran Rent-A-Car shuttle buses depart approximately every five minutes for the three-miles trip to the Center and the car rental company of your choice. Follow signs to Ground Transportation from Baggage Claim on Level Zero. Proceed to the Rental Car Shuttle located outside West door 1 through 4 and East doors 5 through 8.",
                    "openingHours": [
                        "MoTuWeThFrSaSu: 8:00-22:00"
                    ],
                    "email1": "test@test.com",
                    "email2": "HertzDTAGtourscustomerservice@hertz.com",
                    "phone1": "8664342226",
                    "phone2": "",
                    "location": "Лас Вегас Аэропорт",
                    "locationAltName": "Las Vegas Airport",
                    "blockedCardTypes": [],
                    "locationId": 14762,
                    "latitude": 36.0801,
                    "longitude": -115.152
                },
                "typeAll": "Standart"
            },
            "price": {
                "deposit": 287.18076,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 254.75097,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 254.75097,
                "commision": 25.94384,
                "total": 287.18076,
                "totalByCma": 287.18,
                "currency": "EUR",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 500,
                "maxExcess": 500
            },
            "customerPrice": {
                "deposit": 302.17276,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 268.05,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 268.05,
                "commision": 27.29821,
                "total": 302.17276,
                "totalByCma": 302.17,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "usdPrice": {
                "deposit": 302.17276,
                "supplierDeposit": 0,
                "remainder": 0,
                "basePrice": 268.05,
                "aFPrice": 0,
                "aFExtraPrice": 0,
                "netPrice": 268.05,
                "commision": 27.29821,
                "total": 302.17276,
                "totalByCma": 302.17,
                "currency": "USD",
                "taxAmount": 0,
                "carRentalPriceInTakenCurr": 0,
                "maxDeposit": 526.10203,
                "maxExcess": 526.10203
            },
            "supplier": {
                "id": 8000,
                "name": "Dollar ",
                "rating": 0,
                "isFromAggregator": false,
                "aggregatorMappingId": 0,
                "depositType": "CarPrice",
                "stationId": 1335782
            },
            "isOnRequest": false,
            "carCount": 0,
            "carPromo": [],
            "carPromoDetailed": [],
            "carPromoOptions": [],
            "chauffeurService": false,
            "isOnlineCheckinAvailable": false,
            "freeExtras": [],
            "seasonExtras": [],
            "isCouponAvailable": true,
            "millageLimit": "Без ограничений",
            "millageLimitEn": "Unlimited",
            "fuelPolicy": 1,
            "supplierAccountNumber": "1006103SUL",
            "taxDataMode": "Unknown",
            "discountedInfo": "",
            "feesAndTaxes": [
                {
                    "feesAndTaxesType": 1073741824,
                    "feesAndTaxesMode": 1,
                    "supplierPrice": 0,
                    "priceEUR": 0,
                    "customerPrice": 0,
                    "priceUSD": 0
                }
            ],
            "isNonRefundable": false,
            "aggregated": false,
            "isFreeCancellation": false,
            "depInfo": "CarPrice",
            "carPopularity": 20,
            "freeExtrasCount": 0
        }
    ],
    "carIndex": 0
}
const SearchPage = () => {


    const cars = json.cars
    const carPrices = cars.map(item => item.customerPrice.totalByCma).sort((a, b) => a - b)
    const minPrice = Math.round(carPrices[0])
    const maxPrice = Math.round(carPrices[carPrices.length - 1])
    let activeFilters = []
    const filterOnClick = (id) => {

        let checkbox = document.getElementById(id)
        if (checkbox.className === 'customCheckbox') {
            checkbox.className = 'customCheckboxActive'
            activeFilters.push(id)
            document.getElementById('resetFilters').className = 'resetFilter'
            document.getElementById(`${id}CheckboxIcon`).classList.add(`visible`)
            document.getElementById(`${id}FilterContainer`).classList.add(`activeFilterContainer`)
            document.getElementById(`${id}FilterValue`).classList.add(`activeFilterValue`)
            document.getElementById(`${id}ActiveFilter`).className = 'activeFilter'

        } else {
            checkbox.className = 'customCheckbox'
            activeFilters = activeFilters.filter(item => item !== id)
            document.getElementById(`${id}CheckboxIcon`).classList.remove(`visible`)
            document.getElementById(`${id}FilterContainer`).classList.remove(`activeFilterContainer`)
            document.getElementById(`${id}FilterValue`).classList.remove(`activeFilterValue`)
            document.getElementById(`${id}ActiveFilter`).className = 'disableFilter'
            if (activeFilters.length === 0)
                document.getElementById('resetFilters').className = 'disableFilter'
        }
    }
    const clearFilters = () => {

        activeFilters.forEach(id => {
            let checkbox = document.getElementById(id)
            checkbox.className = 'customCheckbox'
            activeFilters = activeFilters.filter(item => item !== id)
            document.getElementById(`${id}CheckboxIcon`).classList.remove(`visible`)
            document.getElementById(`${id}FilterContainer`).classList.remove(`activeFilterContainer`)
            document.getElementById(`${id}FilterValue`).classList.remove(`activeFilterValue`)
            document.getElementById(`${id}ActiveFilter`).className = 'disableFilter'
            document.getElementById('resetFilters').className = 'disableFilter'
        })
        activeFilters = []
    }


    const filtersData = [
        {
            name: "Коробка Передач",
            filters: [
                {
                    id: "AT",
                    title: "Автоматичекская коробка",
                    icon: AT,
                    iconAct: ATact

                },
                {
                    id: "MT",
                    title: "Механическая коробка",
                    icon: MT,
                    iconAct: MTact
                }
            ]
        },
        {
            name: "Комплектация",
            filters: [
                {
                    id: "Climat",
                    title: "Кондиционер",
                    icon: Climat,
                    iconAct: Climatact
                }
            ]
        },
        {
            name: "Класс авто",
            filters: [
                {
                    id: "Mini",
                    title: "Мини",
                    icon: MiniCar,
                    iconAct: MiniCaract
                },
                {
                    id: "Eco",
                    title: "Эконом",
                    icon: EcoCar,
                    iconAct: EcoCaract
                },
                {
                    id: "Standart",
                    title: "Стандарт",
                    icon: StandartCar,
                    iconAct: StandartCaract
                },
                {
                    id: "Lux",
                    title: "Люкс",
                    icon: LuxCar,
                    iconAct: LuxCaract
                },
                {
                    id: "Uni",
                    title: "Уневирсал",
                    icon: UniCar,
                    iconAct: UniCaract
                },
                {
                    id: "Minivan",
                    title: "Минивэн",
                    icon: MinivanCar,
                    iconAct: MinivanCaract
                },
                {
                    id: "Jeep",
                    title: "Внедорожник",
                    icon: JeepCar,
                    iconAct: JeepCaract
                },
                {
                    id: "Cupe",
                    title: "Купэ / Кабрио",
                    icon: CupeCar,
                    iconAct: CupeCaract
                },
                {
                    id: "Exclusive",
                    title: "Особый",
                    icon: ExclusiveCar,
                    iconAct: ExclusiveCaract
                },
            ]
        },
        {
            name: "Прокатчики",
            filters: [
                {
                    id: "Alamo",
                    title: "Alamo",
                    rating: 8.9
                },
                {
                    id: "Europcar",
                    title: "Europcar",
                    rating: 8.2
                },
                {
                    id: "Thrifty",
                    title: "Thrifty",
                    rating: 7.8
                },
                {
                    id: "Dollar",
                    title: "Dollar",
                    rating: 7.2
                },
                {
                    id: "Hertz ",
                    title: "Hertz ",
                    rating: 4.0
                },
                {
                    id: "Fox",
                    title: "Fox Rent A Car Usa",
                    rating: 6.5
                },
            ]
        }
    ]
    const filtersNames = [].concat.apply([], filtersData.map(filterGroup => filterGroup.filters.map(filter => filter.id)))
    let sliderValue = minPrice

    // меняем при событии onChange вместо со стейтом и значение глобальной CSS переменной - для следования ценника на ползунком
    const handleChangeSliderValue = (event) => {
        sliderValue = event.target.value
        document.getElementById('sliderValue').innerHTML = `USD ${event.target.value}`
        document.getElementById('sliderValue').style = `left: calc(${(sliderValue - minPrice) / (maxPrice - minPrice) * 100}% - 15px);`
        document.getElementById('slider').value = event.target.value
        document.documentElement.style.setProperty('--slider-value', event.target.value)
    }

    const scrollToCar = (event) => {
        sliderValue = event.target.value
        let ref = ''
        cars.forEach(item => {
            if (item.customerPrice.totalByCma <= sliderValue) {
                // console.log(item.customerPrice.total)
                ref = item.car.id
            }
        })
        document.getElementById(ref).scrollIntoView()

    }

    const mobileNav = [
        {
            path: "/bookingcar-modal",
            svg: car,
            title: "Забронировать Авто"
        },
        {
            path: "/bookingcar-modal",
            svg: order,
            title: "Мои Бронирования"
        },
        {
            path: "/bookingcar-modal",
            svg: login,
            title: "Войти"
        },
        {
            path: "/bookingcar-modal",
            svg: phone,
            title: "Бронируйте по телефону"
        },
    ]

    const mobileNavSettings = [
        {
            path: "/bookingcar-modal",
            svg: rus,
            title: "Валюта"
        },
        {
            path: "/bookingcar-modal",
            svg: eur,
            title: "Язык"
        },
        {
            path: "/bookingcar-modal",
            svg: lang,
            title: "Место Проживания"
        },
    ]

    const mobileNavUseful = [
        {
            path: "/bookingcar-modal",
            title: "О Нас"
        },
        {
            path: "/bookingcar-modal",
            title: "Контакты"
        },
        {
            path: "/bookingcar-modal",
            title: "Информация"
        },
        {
            path: "/bookingcar-modal",
            title: "Отзывы"
        },
        {
            path: "/bookingcar-modal",
            title: "Вопросы"
        },
    ]
    const showMobileMenu = window.innerWidth < 500
    const outputCrumsData = [
        {
            id: "search",
            num: 1,
            title: "ПОИСК",
            subTitle: "Выберите машину"
        },
        {
            id: "options",
            num: 2,
            title: "ДЕТАЛИ",
            subTitle: "Выберите опции"
        },
        {
            id: "pay",
            num: 3,
            title: "ОПЛАТА",
            subTitle: "Произведите оплату"
        },
    ]

    const activeCrumb = 'search'
    let crumbsPartByMobile = outputCrumsData.filter(c => c.id === activeCrumb)


    const openTermsModal = () => true
    const removeFilter = (id) => {
        const checkbox = document.getElementById(id)
        checkbox.className = 'customCheckbox'
        activeFilters = activeFilters.filter(item => item !== id)
        document.getElementById(`${id}CheckboxIcon`).classList.remove(`visible`)
        document.getElementById(`${id}FilterContainer`).classList.remove(`activeFilterContainer`)
        document.getElementById(`${id}FilterValue`).classList.remove(`activeFilterValue`)
        document.getElementById(`${id}ActiveFilter`).className = 'disableFilter'
    }

    const filter = () => {
        cars.forEach(item => {
            const element = document.getElementById(item.car.id)
            element.remove()
        })
        cars.forEach(item => {
            const tag = document.createElement('div')

            tag.innerHTML = `
                <div class="car_container" id=${item.car.id}>
                    <div class="car_container_title">
                        <span>${item.car.name}</span>
                        <p>или ${item.car.companyClass}</p>
                        <div class="car_title_discount">
                            Сегодня вы экономите ${'20'}%
                        </div>
                        <div class="car_title_discount_mobile">
                            Вы экономите ${'20'}%
                        </div>
                    </div>
                    <div class="car_container_info">
                        <div class="car_info_img">
                            <div class="car_info_img">
                                <img src=${item.car.imageUrl} alt=${item.car.name}
                                     class=${'car_img'} />
                            </div>
                            <div
                                class="car_equipment_quantities car_equipment_quantities_mobile">
                                <div class="car_equipment_quantity">
                                    <img src=${person} alt=""/>${item.car.seats}
                                </div>
                                <div class="car_equipment_quantity">
                                    <img src=${door} alt=""/>${item.car.doors}
                                </div>
                                <div class="car_equipment_quantity">
                                    <img src=${suitcase}
                                         alt=""/>${item.car.bigSuitcases}
                                </div>
                            </div>
                        </div>
                        <div class="car_info_equipment">
                            <div class="car_equipment_quantities">
                                <div class="car_equipment_quantity">
                                    <img src=${person} alt=""/>${item.car.seats}
                                </div>
                                <div class="car_equipment_quantity">
                                    <img src=${door} alt=""/>${item.car.doors}
                                </div>
                                <div class="car_equipment_quantity">
                                    <img src=${suitcase}
                                         alt=""/>${item.car.bigSuitcases}
                                </div>
                            </div>
                            <div class="car_equipment_transmission">
                                <img src=${transmission} alt=""/>Коробка автомат
                            </div>
                            <div class="car_equipment_aircon">
                                <img src=${aircon} alt=""/>Кондиционер
                            </div>
                            <div class="car_equipment_tires">
                                <img src=${tire} alt=""/>Зимние Шины
                            </div>
                        </div>
                        <div class="car_info_price">
                            <div class="car_price_forday">
                                Цена за день
                            </div>
                            <div class="car_price_discount">
                                USD ${Math.round(item.price.total / 3)}
    
                            </div>
                            <div class="car_price_price">
                                USD ${Math.round(item.price.total / 3)}
                            </div>
                            <div class="car_price_forthreeday">
                                Цена за 3 дня
                                USD ${Math.round(item.price.totalByCma)}
                            </div>
                            <div class="car_price_email">
                                Отправить на Емайл
                                <img src=${email} alt=""/>
                            </div>
                        </div>
                    </div>
                    <hr class="car_container_hr car_container_hr_mobile"/>
                    <div class="car_info_equipment_mobile">
                        <div class="car_equipment_transmission">
                            <img src=${transmission} alt=""/>Коробка автомат
                        </div>
                        <div class="car_equipment_aircon">
                            <img src=${aircon} alt=""/>Кондиционер
                        </div>
                        <div class="car_equipment_tires">
                            <img src=${tire} alt=""/>Зимние Шины
                        </div>
                    </div>
                    <hr class="car_container_hr car_container_hr_first"/>
                    <div class="car_container_second">
                        <div class="car_second_supplierandrating">
                            <div class="car_second_supplier">
                            </div>
                            
                        </div>
                        <div class="car_second_terms">
                            <div class="car_second_term">
                                <img src=${plane} alt=""/>
                                Стойка в Терминале
                            </div>
                            <div class="car_second_term">
                                <img src=${fuel} alt=""/>
                                Полный/Полный
                            </div>
                            <div class="car_second_term" onClick=${'openTermsModal'}>
                                <img src=${documentImg} alt=""/>
                                Условия Аренды
                            </div>
                        </div>
                    </div>
                    <hr class="car_container_hr car_container_hr_second"/>
                    <div class="car_container_third">
                        <div class="car_third_conditions">
                            <div class="car_third_condition">
                                <img src=${check} alt=""/>Страховка от Повреждений
                            </div>
                            <div class="car_third_condition">
                                <img src=${check} alt=""/>Страховка от Третих Лиц
                            </div>
                            <div class="car_third_condition">
                                <img src=${check} alt=""/>Страховка от Кражы
                            </div>
                            <div class="car_third_condition">
                                <img src=${check} alt=""/>Страховка от Четвертых Лиц
                            </div>
                            <div class="car_third_condition">
                                <img src=${check} alt=""/>Бесплатный GPS
                            </div>
                        </div>
                        <button onClick=${'filter'}>ВЫБРАТЬ</button>
                    </div>
                </div>
            `
            const parent = document.getElementById('carList')
            parent.appendChild(tag)
        })


    }


    return (


        <div class="searchContainer">
            {
                showMobileMenu ?
                    <div class={'mobile_container'}>

                        {mobileNav.length && mobileNav.map(link =>
                            <a class={'navItem'} href={link.path}>
                                <img src={link.svg} alt="icon"/>
                                <span>{link.title}</span>
                            </a>)
                        }
                        <span class={'settings'}>Настройки</span>
                        {mobileNavSettings.length && mobileNavSettings.map(sets =>
                            <a class={'navItem'} href={sets.path}>
                                <img src={sets.svg} alt="icon"/>
                                <span>{sets.title}</span>
                            </a>)
                        }
                        <span class={'useful'}>Полезное</span>
                        {mobileNavUseful.length && mobileNavUseful.map(useful =>
                            <a class={'navItem'} href={useful.path}>
                                <span>{useful.title}</span>
                            </a>)
                        }
                    </div>
                    :
                    <>
                        <div class="centalBlock">
                            <div class="searchWrapper">
                                <div className={'searchLeft'}>
                                    <div className={'filtersContainer'}>
                                        <div class={'header'}>
                                            <img src={filterImg} alt="filter"/>
                                            <span onClick={() => changeActiveCrumb("asd")}>ФИЛЬТРЫ</span>
                                        </div>
                                        <div
                                            className={activeFilters.length ? 'activeFiltersContainer' : 'activeFiltersContainerEmpty'}>
                                            {/*{*/}

                                            {/*    activeFilters.length*/}
                                            {/*        ?*/}
                                            {/*        activeFilters.map(f =>*/}
                                            {/*            <div class={'activeFilter'} key={f}>*/}
                                            {/*                <span>{f}</span>*/}
                                            {/*                <img src={removeWhite} alt="removeWhite"*/}
                                            {/*                     class={'removeFilter'}*/}
                                            {/*                     onClick={() => removeFilter(f)}/>*/}
                                            {/*            </div>*/}
                                            {/*        )*/}
                                            {/*        :*/}
                                            {/*        null*/}

                                            {/*}*/}
                                            {/*{*/}
                                            {/*    activeFilters.length*/}
                                            {/*        ?*/}
                                            {/*        <div class={'resetFilter'}>*/}
                                            {/*            <span>Сбросить Все</span>*/}
                                            {/*            <img src={removeBlue} alt="removeBlue"*/}
                                            {/*                 class={'removeFilter'} onClick={() => resetFilters()}/>*/}
                                            {/*        </div>*/}
                                            {/*        : null*/}


                                            {/*}*/}
                                            {
                                                filtersNames.map(name =>
                                                    <div class={'disableFilter'} key={name} id={`${name}ActiveFilter`}>
                                                        <span>{name}</span>
                                                        <img src={removeWhite} alt="removeWhite"
                                                             class={'removeFilter'}
                                                             onClick={() => removeFilter(name)}/>
                                                    </div>
                                                )
                                            }
                                            <div class={'disabledResetFilters'} id={'resetFilters'}>
                                                <span>Сбросить Все</span>
                                                <img src={removeBlue} alt="removeBlue"
                                                     class={'removeFilter'} onClick={() => clearFilters()}/>
                                            </div>

                                        </div>
                                        <div class={'priceSlider'}>
                                            <span class={'priceSlider_title'}>Ценновая отметка</span>

                                            <div class={'sliderContainer'}>
                                                <span
                                                    id={'sliderValue'}
                                                >USD {sliderValue}</span>
                                                <input class={'slider'} type="range" value={sliderValue}
                                                       onInput={(event) => handleChangeSliderValue(event)}
                                                       min={minPrice} max={maxPrice} id={'slider'}
                                                       onChange={event => scrollToCar(event)}
                                                />
                                                <img src={strokes} alt="strokes" loading="lazy"/>
                                            </div>

                                            <div class={'priceRange'}>
                                                <span>USD {Math.round(minPrice)}</span>
                                                <span>USD {Math.round(maxPrice)}</span>
                                            </div>
                                        </div>
                                        {
                                            filtersData.length
                                            &&
                                            filtersData.map(f =>

                                                    <div class={'filterItem'}>
                                                        <span class={'filterTitle'}>{f.name}</span>

                                                        {
                                                            f.filters.map(i => {
                                                                    return (
                                                                        <div
                                                                            class={'filterContainer'}
                                                                            id={`${i.id}FilterContainer`}>
                                                                            <div class={'filterConatiner_leftPart'}>
                                                                                <div class={'checkboxContainer'}>
                                                                                    <div class={'customCheckbox'} id={i.id}
                                                                                         onClick={() => filterOnClick(i.id)}>
                                                                                        <img src={check} alt="checked"
                                                                                             class={'checkboxIcon'}
                                                                                             id={`${i.id}CheckboxIcon`}/>
                                                                                    </div>
                                                                                </div>

                                                                                <p class={'filterValue'}
                                                                                   id={`${i.id}FilterValue`}>{i.title}</p>
                                                                            </div>

                                                                            {
                                                                                i.icon
                                                                                &&
                                                                                <img
                                                                                    src={activeFilters.includes(i.id) ? i.iconAct : i.icon}
                                                                                    alt={i.icon} loading="lazy"
                                                                                    class={'filterActiveIcon'}
                                                                                />
                                                                                ||
                                                                                i.rating
                                                                                &&
                                                                                <div class={'ratingConatiner'}>
                                                                                    {
                                                                                        i.rating >= 8.2

                                                                                            ?

                                                                                            <div class={'wrapperOk'}>
                                                                                                <img src={whiteStar}
                                                                                                     alt="whiteStar"
                                                                                                     loading="lazy"/>
                                                                                                <span>{i.rating}</span>
                                                                                            </div>

                                                                                            :

                                                                                            i.rating < 8.2 && i.rating > 7.1

                                                                                                ?

                                                                                                <div class={'wrapperNorm'}>
                                                                                                    <img src={whiteStar}
                                                                                                         alt="whiteStar"
                                                                                                         loading="lazy"/>
                                                                                                    <span>{i.rating}</span>
                                                                                                </div>

                                                                                                :

                                                                                                <div class={'wrapperBad'}>
                                                                                                    <img src={grayStar}
                                                                                                         alt="grayStar"
                                                                                                         loading="lazy"/>
                                                                                                    <span
                                                                                                        style={{color: "#ACACAC"}}>{i.rating}</span>
                                                                                                </div>
                                                                                    }
                                                                                </div>
                                                                            }

                                                                        </div>
                                                                    )
                                                                }
                                                            )
                                                        }

                                                    </div>



                                                // <div class={'filterItem'}>
                                                //     <span class={'title'}>{f.name}</span>
                                                //     {
                                                //         f.filters.length
                                                //         &&
                                                //         f.filters.map(f =>
                                                //
                                                //             <div
                                                //                 class={activeFilters.includes(f.id) ? 'containerActive' : 'container'}>
                                                //                 <div class={'conatiner_leftPart'}>
                                                //                     {/*<FilterCheckBox*/}
                                                //                     {/*    addActiveFilter={props.addActiveFilter}*/}
                                                //                     {/*    filterId={f.id}*/}
                                                //                     {/*    activeFilters={props.activeFilters}/>*/}
                                                //                     <div class={'filterItem'}>
                                                //                         <span class={'title'}>{f.name}</span>
                                                //                         {
                                                //                             f.filters.length
                                                //                             &&
                                                //                             f.filters.map(f =>
                                                //                                 // <Filter filter={f} key={f.id}
                                                //                                 //         addActiveFilter={props.addActiveFilter}
                                                //                                 //         activeFilters={props.activeFilters}
                                                //                                 // />
                                                //                                 <div
                                                //                                     class={activeFilters.includes(f.id) ? 'containerActive' : 'container'}>
                                                //                                     <div class={'conatiner_leftPart'}>
                                                //                                         {/*<FilterCheckBox addActiveFilter={props.addActiveFilter} filterId={props.filter.id} activeFilters={props.activeFilters}/>*/}
                                                //                                         <span
                                                //                                             class={activeFilters.includes(f.id) ? 'titleActive' : 'title'}>{f.title}</span>
                                                //                                     </div>
                                                //
                                                //                                     {
                                                //                                         f.icon && <img
                                                //                                             src={activeFilters.includes(f.id) ? f.iconAct : f.icon}
                                                //                                             alt={f.icon} loading="lazy"
                                                //                                             class={'activeIcon'}/>
                                                //                                         || f.rating
                                                //                                         &&
                                                //                                         <div class={'conatiner'}>
                                                //                                             {
                                                //                                                 f.rating >= 8.2
                                                //
                                                //                                                     ?
                                                //
                                                //                                                     <div
                                                //                                                         class={'wrapperOk'}>
                                                //                                                         <img
                                                //                                                             src={whiteStar}
                                                //                                                             alt="whiteStar"
                                                //                                                             loading="lazy"/>
                                                //                                                         <span>{normalizeInt(f.rating)}</span>
                                                //                                                     </div>
                                                //
                                                //                                                     :
                                                //
                                                //                                                     f.rating < 8.2 && f.rating > 7.1
                                                //
                                                //                                                         ?
                                                //
                                                //                                                         <div
                                                //                                                             class={'wrapperNorm'}>
                                                //                                                             <img
                                                //                                                                 src={whiteStar}
                                                //                                                                 alt="whiteStar"
                                                //                                                                 loading="lazy"/>
                                                //                                                             <span>{normalizeInt(f.rating)}</span>
                                                //                                                         </div>
                                                //
                                                //                                                         :
                                                //
                                                //                                                         <div
                                                //                                                             class={'wrapperBad'}>
                                                //                                                             <img
                                                //                                                                 src={grayStar}
                                                //                                                                 alt="grayStar"
                                                //                                                                 loading="lazy"/>
                                                //                                                             <span
                                                //                                                                 style={{color: "#ACACAC"}}>{normalizeInt(f.rating)}</span>
                                                //                                                         </div>
                                                //                                             }
                                                //                                         </div>
                                                //                                     }
                                                //
                                                //                                 </div>
                                                //                             )
                                                //
                                                //                         }
                                                //                     </div>
                                                //                     <span
                                                //                         class={activeFilters.includes(f.id) ? 'titleActive' : 'title'}>{f.title}</span>
                                                //                 </div>
                                                //                 {
                                                //                     f.icon &&
                                                //                     <img
                                                //                         src={activeFilters.includes(f.id) ? f.iconAct : f.icon}
                                                //                         alt={f.icon} loading="lazy"
                                                //                         class={'activeIcon'}/>
                                                //                     ||
                                                //                     f.rating &&
                                                //                     // <Rating rating={f.rating}/>
                                                //                     <div class={'conatiner'}>
                                                //                         {
                                                //                             f.rating >= 8.2
                                                //
                                                //                                 ?
                                                //
                                                //                                 <div class={'wrapperOk'}>
                                                //                                     <img src={whiteStar} alt="whiteStar"
                                                //                                          loading="lazy"/>
                                                //                                     <span>{normalizeInt(f.rating)}</span>
                                                //                                 </div>
                                                //
                                                //                                 :
                                                //
                                                //                                 f.rating < 8.2 && f.rating > 7.1
                                                //
                                                //                                     ?
                                                //
                                                //                                     <div class={'wrapperNorm'}>
                                                //                                         <img src={whiteStar}
                                                //                                              alt="whiteStar"
                                                //                                              loading="lazy"/>
                                                //                                         <span>{normalizeInt(f.rating)}</span>
                                                //                                     </div>
                                                //
                                                //                                     :
                                                //
                                                //                                     <div class={'wrapperBad'}>
                                                //                                         <img src={grayStar}
                                                //                                              alt="grayStar"
                                                //                                              loading="lazy"/>
                                                //                                         <span
                                                //                                             style={{color: "#ACACAC"}}>{normalizeInt(f.rating)}</span>
                                                //                                     </div>
                                                //                         }
                                                //                     </div>
                                                //                 }
                                                //             </div>
                                                //         )
                                                //
                                                //     }
                                                // </div>
                                            )

                                        }
                                    </div>
                                    <div class={'phoneContainer'}>
                                        <div class={'phoneContainer_title'}>
                                            <span class={'phoneContainer_title__text'}>Бронируйте по телефону</span>
                                        </div>

                                        <div class={'phoneContainer_icon'}>
                                            <img src={phone} alt="phone" class={'phoneContainer_icon__img'}
                                                 loading="lazy"/>
                                        </div>

                                        <div class={'phoneContainer_footer'}>
                                            <span class={'phoneContainer_footer__number'}>+7 (495) 156-25-45</span>
                                            <span class={'phoneContainer_footer__id'}>ID номер: <span
                                                class={'_id'}>{'32-332244'}</span></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="searchRight">
                                    <div class={'outputCrumbs'}>
                                        {
                                            outputCrumsData.length
                                            &&
                                            outputCrumsData.map(d =>
                                                <div class={activeCrumb === d.id ? 'crumbsItemActive' : 'crumbsItem'}
                                                     key={d.id}>
                                                    <span class={'crumbsNum'}>{d.num}</span>
                                                    <div class={'crumbsData'}>
                                                        <span class={'crumsTitle'}>{d.title}</span>
                                                        <span class={'crumsSubTitle'}>{d.subTitle}</span>
                                                    </div>
                                                    {
                                                        d.id !== 'pay' &&
                                                        <img src={whiteArrow} class={'secondArrow'} alt=""/>
                                                    }
                                                </div>
                                            )
                                        }
                                        {
                                            crumbsPartByMobile.length
                                            &&
                                            crumbsPartByMobile.map(c =>
                                                <div class={'crumbsItem_mob'} key={c.id}>
                                                    {
                                                        c.id !== "search" && <img src={backCrumbArrow}
                                                                                  alt={''}
                                                                                  class={'backCrumbArrow'}/>
                                                    }
                                                    <div
                                                        class={c.id === "search" ? 'outputCrumsData_mob' : c.id === "options" ? 'outputCrumsData_mob__center' : c.id === "pay" ? 'outputCrumsData_mob__right' : ""}>
                                                        <span class={'title_mob'}>{c.title}</span>
                                                        <span class={'subTitle_mob'}>{c.subTitle}</span>
                                                    </div>
                                                    {
                                                        c.id === "search" || c.id === "options" &&
                                                        <img
                                                            src={whiteArrow}
                                                            alt={''}
                                                            class={'doneCrumbArrow'}
                                                        />
                                                    }
                                                </div>
                                            )
                                        }

                                    </div>
                                    <div class="outputInfoAndSort">

                                    </div>

                                    <div class="carList" id={'carList'}>
                                        {
                                            cars.map(item =>
                                                <>
                                                    {/*<div*/}
                                                    {/*    class={`${modalTermsContainer ? 'modal_terms_container_show' : 'modal_terms_container_hide'}`}>*/}
                                                    {/*    <div id="modal"*/}
                                                    {/*         class={`modal_terms ${modalTerms ? 'show' : 'hide'}`}>*/}
                                                    {/*        <div class="modal_terms_title">*/}
                                                    {/*            <span class="modal_title_text">Условия Аренды</span>*/}
                                                    {/*            <span class="close" onClick={closeTermsModal}>Х</span>*/}
                                                    {/*        </div>*/}
                                                    {/*        <hr/>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                    <div class="car_container" id={item.car.id}>
                                                        <div class="car_container_title">
                                                            <span>{item.car.name}</span>
                                                            <p>или {item.car.companyClass}</p>
                                                            <div class="car_title_discount">
                                                                Сегодня вы экономите {'20'}%
                                                            </div>
                                                            <div class="car_title_discount_mobile">
                                                                Вы экономите {'20'}%
                                                            </div>
                                                        </div>
                                                        <div class="car_container_info">
                                                            <div class="car_info_img">
                                                                <div class="car_info_img">
                                                                    <img src={item.car.imageUrl} alt={item.car.name}
                                                                         class={'car_img'}/>
                                                                </div>
                                                                <div
                                                                    class="car_equipment_quantities car_equipment_quantities_mobile">
                                                                    <div class="car_equipment_quantity">
                                                                        <img src={person} alt=""/>{item.car.seats}
                                                                    </div>
                                                                    <div class="car_equipment_quantity">
                                                                        <img src={door} alt=""/>{item.car.doors}
                                                                    </div>
                                                                    <div class="car_equipment_quantity">
                                                                        <img src={suitcase}
                                                                             alt=""/>{item.car.bigSuitcases}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="car_info_equipment">
                                                                <div class="car_equipment_quantities">
                                                                    <div class="car_equipment_quantity">
                                                                        <img src={person} alt=""/>{item.car.seats}
                                                                    </div>
                                                                    <div class="car_equipment_quantity">
                                                                        <img src={door} alt=""/>{item.car.doors}
                                                                    </div>
                                                                    <div class="car_equipment_quantity">
                                                                        <img src={suitcase}
                                                                             alt=""/>{item.car.bigSuitcases}
                                                                    </div>
                                                                </div>
                                                                <div class="car_equipment_transmission">
                                                                    <img src={transmission} alt=""/>Коробка автомат
                                                                </div>
                                                                <div class="car_equipment_aircon">
                                                                    <img src={aircon} alt=""/>Кондиционер
                                                                </div>
                                                                <div class="car_equipment_tires">
                                                                    <img src={tire} alt=""/>Зимние Шины
                                                                </div>
                                                            </div>
                                                            <div class="car_info_price">
                                                                <div class="car_price_forday">
                                                                    Цена за день
                                                                </div>
                                                                <div class="car_price_discount">
                                                                    USD {Math.round(item.price.total / 3)}

                                                                </div>
                                                                <div class="car_price_price">
                                                                    USD {Math.round(item.price.total / 3)}
                                                                </div>
                                                                <div class="car_price_forthreeday">
                                                                    Цена за 3 дня
                                                                    USD {Math.round(item.price.totalByCma)}
                                                                </div>
                                                                <div class="car_price_email">
                                                                    Отправить на Емайл
                                                                    <img src={email} alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr class="car_container_hr car_container_hr_mobile"/>
                                                        <div class="car_info_equipment_mobile">
                                                            <div class="car_equipment_transmission">
                                                                <img src={transmission} alt=""/>Коробка автомат
                                                            </div>
                                                            <div class="car_equipment_aircon">
                                                                <img src={aircon} alt=""/>Кондиционер
                                                            </div>
                                                            <div class="car_equipment_tires">
                                                                <img src={tire} alt=""/>Зимние Шины
                                                            </div>
                                                        </div>
                                                        <hr class="car_container_hr car_container_hr_first"/>
                                                        <div class="car_container_second">
                                                            <div class="car_second_supplierandrating">
                                                                <div class="car_second_supplier">
                                                                </div>
                                                                {/*{data.rating > 8 ?*/}
                                                                {/*    <div class="car_second_rating"*/}
                                                                {/*         style={{background: 'var(--Green, #49A01F)'}}>*/}
                                                                {/*        <img src={star} alt=""/>{data.rating}*/}
                                                                {/*    </div>*/}
                                                                {/*    :*/}
                                                                {/*    data.rating > 7 ?*/}
                                                                {/*        <div class="car_second_rating"*/}
                                                                {/*             style={{background: 'var(--Link-Blue, #1A62CF)'}}>*/}
                                                                {/*            <img src={star} alt=""/>{data.rating}*/}
                                                                {/*        </div>*/}
                                                                {/*        :*/}
                                                                {/*        <div class="car_second_rating"*/}
                                                                {/*             style={{background: 'var(--Subtle-Gray, #ACACAC)'}}>*/}
                                                                {/*            <img src={star} alt=""/>{data.rating}*/}
                                                                {/*        </div>*/}
                                                                {/*}*/}
                                                            </div>
                                                            <div class="car_second_terms">
                                                                <div class="car_second_term">
                                                                    <img src={plane} alt=""/>
                                                                    Стойка в Терминале
                                                                </div>
                                                                <div class="car_second_term">
                                                                    <img src={fuel} alt=""/>
                                                                    Полный/Полный
                                                                </div>
                                                                <div class="car_second_term" onClick={openTermsModal}>
                                                                    <img src={documentImg} alt=""/>
                                                                    Условия Аренды
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr class="car_container_hr car_container_hr_second"/>
                                                        <div class="car_container_third">
                                                            <div class="car_third_conditions">
                                                                <div class="car_third_condition">
                                                                    <img src={check} alt=""/>Страховка от Повреждений
                                                                </div>
                                                                <div class="car_third_condition">
                                                                    <img src={check} alt=""/>Страховка от Третих Лиц
                                                                </div>
                                                                <div class="car_third_condition">
                                                                    <img src={check} alt=""/>Страховка от Кражы
                                                                </div>
                                                                <div class="car_third_condition">
                                                                    <img src={check} alt=""/>Страховка от Четвертых Лиц
                                                                </div>
                                                                <div class="car_third_condition">
                                                                    <img src={check} alt=""/>Бесплатный GPS
                                                                </div>
                                                            </div>
                                                            <button onClick={filter}>ВЫБРАТЬ</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<Footer/>*/}
                    </>
            }
        </div>

    )
}

export default SearchPage

