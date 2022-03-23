import DB from "../Config/db.js";

class Log {
    constructor(id, description, startTime, endTime) {
        this.id = id;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    save() {
        const query = `INSERT INTO logs(id, description, startTime, endTime)
        VALUES("${this.id}", "${this.description}", FROM_UNIXTIME(${this.startTime}), FROM_UNIXTIME(${this.endTime}))`;

        return DB.execute(query);
    }

    static findAll() {
        const query = `SELECT * FROM logs ORDER BY startTime ASC`;
        return DB.execute(query);
    }
}

export default Log;
