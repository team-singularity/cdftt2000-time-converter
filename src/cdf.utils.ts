import Timestamp from "timestamp-nano";

export class CdfUtils {
    public static toTimestamp(nanoSecSinceJ2000: number): Timestamp {
        // 946684800 2020/01/01 00:00:00 in epoch time
        const unixTimeJ2000InSeconds = 946684800;
        const twelveHoursInSeconds = 43200;

        // TODO: mystery constant from CDF library
        const dTinNanoSecs = 32184000000;
        const leapSeconds = CdfUtils.leapSecondsfromJ2000(nanoSecSinceJ2000);

        return Timestamp.fromTimeT(unixTimeJ2000InSeconds + twelveHoursInSeconds - leapSeconds).addNano(nanoSecSinceJ2000 - dTinNanoSecs);
    }

    public static leapSecondsfromJ2000(nanoSecSinceJ2000: number): number {
        // hard coded leap seconds
        return 37;
    }
}