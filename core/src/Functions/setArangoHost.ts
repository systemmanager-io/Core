export default function setArangoHost(entry: string) {
    /*
        This feels so goddamn wrong!
        I feel something is not right here
    */

    //Check if the entry is even filled
    if (entry === "") throw "No ARANGODB_HOST specified";

    console.log(entry);

    // Check for common Arango protocols
    if (entry.includes("tcp://")) return entry;
    if (entry.includes("ssl://")) return entry;
    if (entry.includes("unix://")) return entry;

    // If none of the if statements have passed add the tcp://
    entry = "tcp://" + entry;
    console.log(entry);
    return entry
}