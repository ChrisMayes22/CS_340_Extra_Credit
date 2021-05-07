
class Question {
    /**
     * 
     * @param {String} prompt - question prompt
     * @param {Array} answers - array of objects with an answer prop and an explanation prop.
     *                          Note: Explanation must always start with "correct", "partially correct" or "incorrect"
     */

    constructor(prompt, answers){ 
        this.prompt = prompt;
        this.answers = answers;
    }
}
const questions = [
    new Question(
        "What is a database transaction?",
        [ 
            {
                answer: "A unit of work performed within a DBMS with ACID properties.",
                explanation: "Correct!"
            },
            {
                answer: "Any event that is recorded in a database log", 
                explanation: "Incorrect. While transactions might be logged in a write-ahead logging system, this is not required."
            },
            {
                answer: "A connection between a client and host in a database driven system",
                explanation: `Incorrect. A transaction can take place even on a database without host/client architecture, 
                such as a mainframe. The transaction has to do with how information is committed to a database, not the connection 
                that carries information.` 
            },
            {
                answer: "The transport of a packet between two databases across a network",
                explanation: `Incorrect. A transaction can take place even on a database without a network connection, 
                such as a mainframe. The transaction has to do with how information is committed to a database, not the connection 
                that carries information.` 
            }
        ]
    ),
    new Question(
        "What are the two main purposes of transactions having ACID compliance in a database?",
        [ 
            {
                answer: `To allow reliable units of work that are resilient to system failures, 
                and to isolate programs concurrently accessing a database.`,
                explanation: "Correct!"
            },
            {
                answer: "To facilitate saving data on a database and to ensure database security against malicious software",
                explanation: `Incorrect. Transactions are involved with how data is committed to a database, but transactions are more relevant to 
                data integrity than database security.`
            },
            {
                answer:  "To isolate programs concurrently accessing a database and to correct network errors",
                explanation: `Partially correct. ACID compliance does ensure that transactions are isolated, 
                but it is not concerned with correcting network errors.`
            },
            {
                answer: "To ensure data integrity and to create a permanent record of all interactions with the database",
                explanation: `Partially correct. Data integrity is a core concern for ACID compliance, but logging interactions 
                is not a concern addressed by ACID compliant transactions.`
            }
        ]
    ),
    new Question(
        "What does the phrase 'a transaction is atomic' mean?",
        [
            {
                answer: "The transaction either completes its effect totally or has no effect at all.",
                explanation: `Correct!`
            },
            {
                answer: "The transaction involves only a single operation consisting of a few instructions",
                explanation: "Incorrect. Atomic transactions can involve many operations."
            },
            {
                answer: "The transaction can involve many operations but must involve only a single query",
                explanation: "Partially correct. Atomic transactions can involve many operations and many queries."
            },
            {
                answer: "The transaction will only affect one entity on the database",
                explanation: "Incorrect. An atomic transaction could in theory affect multiple entities."
            }
        ]
    ),
    new Question(
        "What does the phrase 'a transaction is consistent' mean?",
        [
            {
                answer: "The transaction must conform to existing database constraints",
                explanation: "Correct!"
            },
            {
                answer: "The transaction always has exactly the same effect", 
                explanation: "Incorrect. For example, a given transaction might add $2.00 to an account while the next adds $5.00"
            },
            {
                answer: "The transaction's effects are always fully predictable",
                explanation: `Incorrect. Whether a transaction is predictable is not relevant to its consistency.`,
            },
            {
                answer: "The transaction's effect must get written to permanent storage",
                explanation: `Incorrect. A transaction can be ACID compliant and still fail due to an error. The important 
                thing is that a failed transaction commit no effects (and so be atomic).`
            }

        ]     
    ),
    new Question(
        "List four essential characteristics of a transaction.",
        [
            {
                answer: "Atomic, Consistent, Isolated, Durable",
                explanation: "Correct!"
            },
            {
                answer: "Atomic, Consistent, Isolated, Dependable",
                explanation: `Incorrect. Dependability is not part of ACID compliance.`
            },
            {
                answer: "Atomic, Consistent, Idempotent, Dependable",
                explanation: `Incorrect. Idempotent elements of a set don't change when multiplied by themselves, 
                which is not a property of ACID compliant transactions. Dependability is also not part of ACID compliance.`
            },
            {
                answer: "Atomic, Consistent, Idempotent, Durable",
                explanation: `Incorrect. Idempotent elements of a set don't change when multiplied by themselves, 
                which is not a property of ACID compliant transactions.`
            }
        ]
    ),
    new Question(
        "Which of the following is a good example of a failed but ACID compliant transaction?",
        [
            {
                answer: `Ariane Emory updates Grant's security clearance and data access through the 
                    base 1 system. Many transactions are handled by the base 1 system, but none interfere with 
                    Grant's update. Base 1 successfully executes a set of instructions for updating Grant's permissions.
                    However, base 1 loses power before the changes to Grant's data access can be updated. When power 
                    comes back on, neither Grant's security clearance nor his data access have been committed to the permanent
                    storage on the database.`,
                explanation: `Correct! Although the transaction fails, the result is NO effects are committed (demonstrating 
                    atomicity). Additionally, the transaction does not affect / is not affected by other transactions 
                    (isolation); the transaction does not violate any database constraints (consistency); and the transaction would
                     be saved into permanent storage if it succeeded (durability.)`
            },
            {
                answer: `Case attempts to update a repository by merging the Wintermute with the Neuromancer branch 
                    while deleting the original Wintermute branch. Many transactions are handled on the Wintermute 
                    repo, but they do not interfere with the merging. However, the Wintermute server loses power. 
                    When power is restored, the Neuromancer branch includes a merge from the Wintermute branch, but the 
                    original Wintermute branch still exists independently.`,
                explanation: `Incorrect. Although the transaction is isolated, consistent, and durable, it is not atomic. 
                    When the transaction is interrupted, some of the transaction's operations are successfully committed 
                    while others are not.`
            },
            {
                answer: `Max Renn attempts to schedule a broadcast for his TV station. His broadcast center handles many
                    transactions, but none interfere with his scheduling. He successfully saves the schedule and commits it
                    to the live scheduler. However, when power is lost, the new schedule is lost because it was held in RAM.`,
                explanation: `Incorrect. Although this transaction is atomic, consistent, and isolated, it is not durable. 
                    Once a transaction is committed, it should be permanent regardless of whether the system is interrupted. 
                    Generally, ACID compliant transactions take place in non-volatile memory.`
            },
            {
                answer: `Klara and Rick program a swarm of drones to collect data from the surrounding countryside.
                    One drone records 30 minutes of footage and tries to upload both the footage and its current position.
                    However, when it attempts to send its data, it fails
                    because the database is powered down. However, the drone can continue to make post requests and
                    eventually succeeds in delivering its payload when the power comes back up. An error causes
                    this drone's payload to overwrite and corrupt several other posts made by other drones, but both the video footage
                    and this drone's current location are successfully recorded.`,
                explanation: `Incorrect. Although the transaction is atomic, consistent, and durable, it is not 
                    isolated. Ideally, concurrent transactions should be indistinguishable from sequential transactions. 
                    In this case, however, concurrent operations corrupt each other.`
            }
        ]
    ),
    new Question(
        "What is the name for DBMS's that provide ACID properties for a bracketed set of db operations?",
        [
            {
                answer: "A transactional database",
                explanation: "Correct!"
            },
            {
                answer: "A relational database",
                explanation: `Incorrect. Relational databases are often ACID compliant, but ACID compliance 
                    describes how a DBMS handles transactions more than how the database structures its data, and 
                    some non-relational databases are ACID compliant. For example, Apache CouchDB is an ACID-compliant 
                    document-based database.`
            },
            {
                answer: "A SQL compliant database",
                explanation: `Incorrect. SQL is a type of query language. DBMS's that use SQL may or may not be ACID-compliant, 
                    and ACID-compliant NoSQL databases like Apache Couch exist.`
            },
            {
                answer: "An ODBC compliant database",
                explanation: `Incorrect. ODBC stands for Open Database Connectivity and describes an API standard that aims to be 
                portable across DBMS's and OS's.`
            }
        ]
    ),
    new Question(
        "The highest isolation level is serializability. Describe what this means.",
        [
            {
                answer: "Concurrent transactions are equivalent to sequential transactions",
                explanation: `Correct!`
            },
            {
                answer: "Concurrent transactions can read from but not write to a database",
                explanation: `Incorrect. Although this describes some ACID-compliant DBMS's like SQLit, most DBMS's like MySQL `
            },
            {
                answer: "Concurrent transactions are not permitted since transactions are required to be serial",
                explanation: `Incorrect. Serialized transactions' effects are EQUIVALENT to sequentially executed transactions, but they 
                    may not actually be sequential.`
            },
            {
                answer: "Concurruent transactions are not permitted to handle the same entities",
                explanation: `Incorrect. Although systems that use locks may implement something similar to this, some systems permit simultaneous 
                    write operations to the same data using multiversioning.`
            }

        ]
    ),
    new Question(
        "True or False: Once all the data manipulation and queries on a transaction have been executed, the trasaction is complete.",
        [
            {
                answer: "False: Transactions must then check for an error and either commit or rollback the change.",
                explanation: "Correct!"
            },
            {
                answer: "False: Transactions must also make a permanent log of the transaction in addition to executing the primary action.",
                explanation: "Incorrect. ACID compliance does not require logging, thought it might be used in write-ahead logging."
            },
            {
                answer: "True: By the time queries and data manipulation have been executed, the transaction will have updated the database.",
                explanation: `Incorrect. In order to maintain atomicity, transactions execute queries and data manipulation in one step, 
                    then check for errors in a second step, then commit or rollback changes all at once as a final step.`
            },
            {
                answer: "True: If an error is to occur, it will occur and be detected during the execution of the transaction's queries.",
                explanation: `Incorrect. In order to maintain atomicity, transactions execute queries and data manipulation in one step, 
                    then check for errors in a second step, then commit or rollback changes all at once as a final step.`
            }
        ]
    ),
    new Question(
        "Which of the following violate atomiticity:",
        [
            {
                
                answer: `Ash withdraws a caterpie from a PC, a copy transaction involving write and delete operations. 
                However, an error causes caterpie to be written to his party but not deleted in his PC storage.`,
                explanation: `Correct!`
            },
            {
                answer: `Asuka tries to power up the robot. However, her Freudian_Level is at 
                    01110011 01101001 01111000 01110100 01111001 00101101 01101110 01101001 01101110 01100101, 
                    and the robot's system requires a Freudian_Level of exactly 01110011 01101001 01111000 01110100 01111001 00101101 01101110 01101001 01101110 01100101. 
                    As a result, the robot's systems malfunction.`,
                explanation: `Incorrect. This is an example of a consistency violation. Transactions must not violate any 
                    constraints in the database.`
            },
            {
                answer: `Jordan Warrick requests a new PR clone. His request is successfully executed and marked as complete 
                    but is lost during a power failure because it is stored in RAM.`,
                explanation: `Incorrect. This is an example of a durability violation. Once a transaction's effects are committed, 
                    they must not be affected by system failures; they are usually written in non-volatile memory.`
            },
            {
                answer: `Marx and Hegel attempt to write to the same area of memory simultaneously. This leads to a corrupt write 
                    wherein Marx and Hegel's writes are combined: Hegel's payload string is reversed and then committed.`,
                explanation: `Incorrect. This is an example of an isolation violation. Concurrent transactions should act as though 
                    they are executed sequentially.`

            }
        ]
    ),
    new Question(
        "In write-ahead logging:",
        [
            {
                answer: "Durability is guaranteed by copying the original (unchanged) data to a log before updating the database.",
                explanation: `Correct`
            },
            {
                answer: `Durability is guaranteed by writing the new data to a partial copy of the database, which is activated 
                    when the transaction commits.`,
                explanation: `Incorrect. This describes shadow paging.`
            },
            {
                answer: "Durability is guaranteed by writing the new data to a log before updating the database.",
                explanation: `Incorrect. The ORIGINAL data is copied to a log.`
            },
            {
                answer: `Durability is guaranteed by copying the original (unchanged) data to a partial copy of the database before 
                updating the database.`,
                explanation: `Incorrect. In SHADOW PAGING, the NEW DATA is written to a partial copy of the database.`
            }
        ]
    ),
    new Question(
        "In multiversion concurrency control, when data is being processed for writing:",
        [
            {

                answer: "The database provides reader transactions with a previous, unchanged version of the data.",
                explanation: "Correct!"
            },
            {
                answer: `The data is marked by a 'lock' that notifies the DBMS not to allow the data to be modified until a given 
                    transaction succeeds or fails.`,
                explanation: "Incorrect. Lock systems and multiversion concurrency control are alternatives to each other."
            },
            {
                answer: "Writing transactions block reading transactions, but reading transactions permit other concurrent reading transactions.",
                explanation: "Incorrect. While this is implemented in some DBMS's like SQLite, it does not describe multiversion concurrency control."
            },
            {
                answer: `Several virtual databases run concurrent transactions that are serialized within the particular VDB. 
                    All virtual databases merge once all concurrent transactions are completed.`,
                explanation: `Incorrect. Virtualizing a database for every transaction in a concurrent set would be impractical.`
            }
        ]
    ),
    new Question(
        "True or False: Only relational databases are transactional.",
        [
            {
                answer: `False: Object databases can implement commit/rollback features with their variable-sized blobs, 
                thus implementing transactions on a non-relational database.`,
                explanation: `Correct.`
            },
            {
                answer: "False: noSQL databases have robust methods of achieving data integrity, which implies ACID compliance.",
                explanation: "Partially correct. While the statement is false, not all 'methods of achieving data integrity' guarantee ACID compliant."
            },
            {
                answer: "True: noSQL databases exist primarily to facilitate scalability and always sacrifice ACID compliance as a result.",
                explanation: `Incorrect. While this is generally true, some NoSQL databases such as Apache's CouchDB are ACID compliant.`
            },
            {
                answer: `True: Object databases contain variable sized blobs, which makes it impossible to implement all elements 
                    of ACID compliance simultaneously.`,
                explanation: `Incorrect. While it is more common for relational databases to be ACID compliant, some object databases are ACI compliant.`
            } 


        ]
    )
]

export default questions;