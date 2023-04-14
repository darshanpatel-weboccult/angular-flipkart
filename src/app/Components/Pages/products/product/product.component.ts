import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product, ProductService } from "src/app/Shared/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  animations: [
    trigger("fade", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("250ms 1s", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("250ms 1s", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ProductComponent implements OnInit {
  productId!: number;
  product!: Product;
  showcaseImageIds: number[] = [];
  currentShowcaseId: number = 0;
  showReadMore:boolean = true;
  specifications: {
    category: string;
    details: { name: string; value: string }[];
  }[] = [
    {
      category: "General",
      details: [
        {
          name: "In The Box",
          value: "Handset, Sim Ejection Pin, USB Cable, Manual",
        },
        {
          name: "Model Number",
          value: "SM-S911BZKBINS",
        },
        {
          name: "Model Name",
          value: "Galaxy S23 5G",
        },
        {
          name: "Color",
          value: "Phantom Black",
        },
        {
          name: "Browse Type",
          value: "Smartphones",
        },
        {
          name: "SIM Type",
          value: "Dual Sim",
        },
        {
          name: "Hybrid Sim Slot",
          value: "Yes",
        },
        {
          name: "Touchscreen",
          value: "Yes",
        },
        {
          name: "OTG Compatible",
          value: "Yes",
        },
        {
          name: "Quick Charging",
          value: "Yes",
        },
      ],
    },
    {
      category: "Display Features",
      details: [
        {
          name: "Display Size",
          value: "15.49 cm (6.1 inch)",
        },
        {
          name: "Resolution",
          value: "2340 x 1080 Pixels",
        },
        {
          name: "Resolution Type",
          value: "Full HD+",
        },
        {
          name: "GPU",
          value: "Qualcomm Adreno 740",
        },
        {
          name: "Display Type",
          value: "Full HD+ Dynamic AMOLED 2X",
        },
        {
          name: "HD Game Support",
          value: "Yes",
        },
        {
          name: "Other Display Features",
          value: "Adaptive Refresh Rate: 48 Hz - 120Hz",
        },
      ],
    },
    {
      category: "Os & Processor Features",
      details: [
        {
          name: "Operating System",
          value: "Android 13",
        },
        {
          name: "Processor Type",
          value: "Qualcomm Snapdragon 8 Gen 2",
        },
        {
          name: "Processor Core",
          value: "Octa Core",
        },
        {
          name: "Primary Clock Speed",
          value: "3.36 GHz",
        },
        {
          name: "Secondary Clock Speed",
          value: "3.36 GHz",
        },
        {
          name: "Operating Frequency",
          value: "2G GSM: 850/900/1800/1900 MHz",
        },
      ],
    },
    {
      category: "Memory & Storage Features",
      details: [
        {
          name: "Internal Storage",
          value: "128 GB",
        },
        {
          name: "RAM",
          value: "8 GB",
        },
        {
          name: "Total Memory",
          value: "128 GB",
        },
      ],
    },
    {
      category: "Camera Features",
      details: [
        {
          name: "Primary Camera Available",
          value: "Yes",
        },
        {
          name: "Primary Camera",
          value: "50MP + 10MP + 12MP",
        },
        {
          name: "Primary Camera Features",
          value:
            "Camera Feature: AR Zone, Bixby Vison, Director's View, Food, Hyperlapse, Night, Panorama, Photo, Portrait, Video Feature: Portrait Video, Pro, Pro Video, Single Take, Slow Motion, Super Slow Mo, Video",
        },
        {
          name: "Optical Zoom",
          value: "Yes",
        },
        {
          name: "Secondary Camera Available",
          value: "Yes",
        },
        {
          name: "Secondary Camera",
          value: "12MP Front Camera",
        },
        {
          name: "Secondary Camera Features",
          value: "NA",
        },
        {
          name: "Flash",
          value: "Yes",
        },
        {
          name: "HD Recording",
          value: "Yes",
        },
        {
          name: "Full HD Recording",
          value: "Yes",
        },
        {
          name: "Video Recording",
          value: "Yes",
        },
        {
          name: "Video Recording Resolution",
          value: "7680 x 4320 pixel",
        },
        {
          name: "Digital Zoom",
          value: "Upto 30x",
        },
        {
          name: "Frame Rate",
          value: "30 fps",
        },
        {
          name: "Image Editor",
          value: "Yes",
        },
        {
          name: "Dual Camera Lens",
          value: "Primary Camera",
        },
      ],
    },
    {
      category: "Call Features",
      details: [
        {
          name: "Call Wait/Hold",
          value: "Yes",
        },
        {
          name: "Hands Free",
          value: "Yes",
        },
        {
          name: "Video Call Support",
          value: "Yes",
        },
        {
          name: "Call Divert",
          value: "Yes",
        },
        {
          name: "Phone Book",
          value: "Yes",
        },
        {
          name: "Call Timer",
          value: "Yes",
        },
        {
          name: "Speaker Phone",
          value: "Yes",
        },
        {
          name: "Call Records",
          value: "Yes",
        },
        {
          name: "Logs",
          value: "Yes",
        },
      ],
    },
    {
      category: "Connectivity Features",
      details: [
        {
          name: "Network Type",
          value: "5G, 4G, 3G, 2G",
        },
        {
          name: "Supported Networks",
          value: "5G, 4G LTE, WCDMA, GSM",
        },
        {
          name: "Internet Connectivity",
          value: "Yes",
        },
        {
          name: "3G Speed",
          value: "5.76 Mbps",
        },
        {
          name: "GPRS",
          value: "Yes",
        },
        {
          name: "Micro USB Port",
          value: "Yes",
        },
        {
          name: "Micro USB Version",
          value: "USB 3.2 Gen 1",
        },
        {
          name: "Bluetooth Support",
          value: "Yes",
        },
        {
          name: "Bluetooth Version",
          value: "v5.3",
        },
        {
          name: "Wi-Fi",
          value: "Yes",
        },
        {
          name: "Wi-Fi Version",
          value:
            "802.11 a/b/g/n/ac/ax (2.4 GHz | 5 GHz 6 GHz), HE160, MIMO, 1024-QAM",
        },
        {
          name: "Wi-Fi Hotspot",
          value: "Yes",
        },
        {
          name: "NFC",
          value: "Yes",
        },
        {
          name: "USB Tethering",
          value: "Yes",
        },
        {
          name: "USB Connectivity",
          value: "Yes",
        },
        {
          name: "EDGE",
          value: "Yes",
        },
        {
          name: "Audio Jack",
          value: "Type-C",
        },
        {
          name: "Map Support",
          value: "Yes",
        },
        {
          name: "GPS Support",
          value: "Yes",
        },
      ],
    },
    {
      category: "Other Details",
      details: [
        {
          name: "Smartphone",
          value: "Yes",
        },
        {
          name: "Touchscreen Type",
          value: "Full Touch Capacitance",
        },
        {
          name: "SIM Size",
          value: "Nano Sim",
        },
        {
          name: "User Interface",
          value: "One UI 5.1 (Based on Android 13)",
        },
        {
          name: "Social Networking Phone",
          value: "Yes",
        },
        {
          name: "Instant Message",
          value: "Yes",
        },
        {
          name: "Business Phone",
          value: "No",
        },
        {
          name: "Removable Battery",
          value: "No",
        },
        {
          name: "MMS",
          value: "Yes",
        },
        {
          name: "SMS",
          value: "Yes",
        },
        {
          name: "Voice Input",
          value: "Yes",
        },
        {
          name: "Graphics PPI",
          value: "425 PPI",
        },
        {
          name: "Predictive Text Input",
          value: "Yes",
        },
        {
          name: "SIM Access",
          value: "Dual/Single",
        },
        {
          name: "Sensors",
          value:
            "Accelerometer, Barometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, Light Sensor, Proximity Sensor",
        },
        {
          name: "Browser",
          value: "Google Chrome, Samsung S-Browser 19.0",
        },
        {
          name: "Ringtones Format",
          value:
            "MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE",
        },
        {
          name: "Other Features",
          value:
            "Armor Aluminum Frame, Gorilla Glass Victus 2, Water Resistant IP68, Samsung Health, Samsung Wallet",
        },
      ],
    },
    {
      category: "Multimedia Features",
      details: [
        {
          name: "FM Radio",
          value: "No",
        },
        {
          name: "FM Radio Recording",
          value: "No",
        },
        {
          name: "Audio Formats",
          value:
            "MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE",
        },
        {
          name: "Music Player",
          value: "Yes",
        },
        {
          name: "Video Formats",
          value: "MP4, M4V, 3GP, 3G2, AVI, FLV, MKV, WEBM",
        },
      ],
    },
    {
      category: "Battery & Power Features",
      details: [
        {
          name: "Battery Capacity",
          value: "3900 mAh",
        },
        {
          name: "Dual Battery",
          value: "No",
        },
      ],
    },
    {
      category: "Dimensions",
      details: [
        {
          name: "Width",
          value: "70.9 mm",
        },
        {
          name: "Height",
          value: "146.3 mm",
        },
        {
          name: "Depth",
          value: "7.6 mm",
        },
        {
          name: "Weight",
          value: "168 g",
        },
      ],
    },
    {
      category: "Warranty",
      details: [
        {
          name: "Warranty Summary",
          value:
            "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories",
        },
        {
          name: "Covered in Warranty",
          value:
            "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories",
        },
        {
          name: "Domestic Warranty",
          value: "1 Year",
        },
      ],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      if (!params["id"]) return;
      if (isNaN(params["id"])) {
        this.router.navigate(["../"], { relativeTo: this.route });
      }
      this.productId = this.currentShowcaseId = Number(params["id"]);
      this.showcaseImageIds = new Array(6)
        .fill(0)
        .map((item, index) => (this.productId + index) % 16);
    });
    let product = await this.productService.getProductById(this.productId);
    if (!product) {
      this.router.navigate(["../"], { relativeTo: this.route });
      return;
    }
    this.product = product;
    document.title = product.title;
  }
}
