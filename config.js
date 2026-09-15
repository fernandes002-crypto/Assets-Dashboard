const CONFIG = {

    /*
     * Use the SAME Google Web Client ID as your current working FM dashboard.
     */
    GOOGLE_CLIENT_ID: "50542963972-75ictdqcblqigj1iq30pobdqk06s1v93.apps.googleusercontent.com",

    /*
     * Main collection tracker workbook (read-only).
     * Looked up by name in the signed-in user's Drive: the app tries
     * PRIMARY_WORKBOOK_NAME first, and only falls back to
     * FALLBACK_WORKBOOK_NAME if that isn't found. Only MAIN_SHEET_NAME
     * is ever read from this workbook — nothing is ever written to it.
     */
    PRIMARY_WORKBOOK_NAME:
        "FM daily Tracker",

    FALLBACK_WORKBOOK_NAME:
        "Copy of FM daily Tracker",

    MAIN_SHEET_NAME:
        "FM collection tracker",

    /*
     * Assets Inventory Ledger - dedicated spreadsheet (opened directly by
     * ID, not searched by name) that is the single read/write source for
     * inventory and asset-movement data. INVENTORY_SHEET_NAME and
     * TRANSACTIONS_SHEET_NAME below both live in THIS spreadsheet.
     */
    INVENTORY_LEDGER_SHEET_ID:
        "1VC44seK6vR2IHl53Bn0NwentqRd8XwhSZJ0RtWB67uU",

    INVENTORY_LEDGER_NAME:
        "Assets Inventory Ledger",

    INVENTORY_SHEET_NAME:
        "Asset Inventory",

    TRANSACTIONS_SHEET_NAME:
        "Asset Transactions",

    CLIENT_LIST_SHEET_NAME:
        "Client List",

    LOCATION:
        "UB11",

    /*
     * Parent Google Drive folder that movement photos are filed under.
     * A new sub-folder named with the day's date (YYYY-MM-DD) is created
     * inside this folder automatically the first time a photo is uploaded
     * on a given day, and every photo taken that day is stored there.
     * https://drive.google.com/drive/folders/15NJveQRQ0WHR5FuR0E967dGs5bOBaPoH
     */
    DRIVE_PHOTOS_PARENT_FOLDER_ID:
        "15NJveQRQ0WHR5FuR0E967dGs5bOBaPoH",

    /*
     * NOTE: broadened from "drive.readonly" to full "drive" so the app can
     * create the daily date-folders and upload photos into them. Existing
     * signed-in users will be prompted once to re-grant access because the
     * scope changed.
     */
    OAUTH_SCOPES: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive"
    ].join(" ")

};
