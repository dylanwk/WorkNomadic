// src/types/leaflet.d.ts
import "leaflet";

declare module "leaflet" {
  namespace Icon {
    export class Default extends Icon {
      _getIconUrl?: string;
    }
  }
}
