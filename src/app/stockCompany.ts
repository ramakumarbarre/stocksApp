
export class StockCompanyClass {
    private _id: number;
    private _company: string;
    private _open: string;
    private _high: string;
    private _low: string;
    private _close: string;
    private _volume: string;
    


    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get company(): string {
        return this._company;
    }

    set company(company: string) {
        this._company = company;
    }

    get open(): string {
        return this._open;
    }

    set open(open: string) {
        this._open = open;
    }

    get high(): string {
        return this._high;
    }

    set high(high: string) {
        this._high = high;
    }

    get low(): string {
        return this._low;
    }

    set low(low: string) {
        this._low = low;
    }

    get close(): string {
        return this._close;
    }

    set close(close: string) {
        this._close = close;
    }

    get volume(): string {
        return this._volume;
    }
    set volume(volume: string) {
        this._volume = volume;
    }

}

