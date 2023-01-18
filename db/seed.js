require('dotenv').config();
const { employees, financials, companies } = require('./seedData.js');
const { pool } = require('./client.js');

// drop tables
const dropTables = async () => {
  try {
    console.log('Dropping Tables...');
    return await pool.query(`
      DROP TABLE IF EXISTS users;  
      DROP TABLE IF EXISTS employees;
      DROP TABLE IF EXISTS financials;
      DROP TABLE IF EXISTS companies;
    `);
  } catch (error) {
    console.error(error);
  }
};
// create tables
const createTables = async () => {
  try {
    console.log('Creating Tables...');
    await pool.query(`create table companies (
    id VARCHAR(50) UNIQUE NOT NULL,
    company_name VARCHAR(255) UNIQUE NOT NULL,
    industry VARCHAR(255),
    market_cap VARCHAR(50),
    logo_img VARCHAR(255),
    street_address VARCHAR(255),
    state VARCHAR(50),
    phone VARCHAR(50)
  );
  
  create table financials (
    id SERIAL PRIMARY KEY,
    company_id VARCHAR(50) REFERENCES companies(id),
    quarter VARCHAR(50),
    cogs VARCHAR(50),
    profit_margin VARCHAR(50),
    revenue VARCHAR(50)
);

create table employees (
  id SERIAL PRIMARY KEY,
  company_id VARCHAR(50) REFERENCES companies(id),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  avatar VARCHAR(255),
  department VARCHAR(255),
  title VARCHAR(255)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`);
  } catch (error) {
    console.error(error);
  }
};
// insert dummy data
const insertCompanies = async () => {
  const valuesString = Object.keys(companies[0])
    .map((key, index) => {
      return `$${index + 1}`;
    })
    .join(', ');

  try {
    console.log('Inserting Companies...');
    const promises = companies.map((company) => {
      return pool.query(
        `
        INSERT INTO companies (id, company_name, industry, market_cap, logo_img, street_address, state, phone)
        VALUES (${valuesString});
        `,
        Object.values(company)
      );
    });

    await Promise.all(promises);
    console.log('Companies Inserted!');
  } catch (error) {
    console.log('Error Inserting Companies!');
    console.error(error);
  }
};
const insertFinancials = async () => {
  const valuesString = Object.keys(financials[0])
    .map((key, index) => {
      return `$${index + 1}`;
    })
    .join(', ');

  try {
    console.log('Inserting Financials...');
    const promises = financials.map((financial) => {
      return pool.query(
        `
        INSERT INTO financials (company_id, quarter, cogs, profit_margin, revenue)
        VALUES (${valuesString});
        `,
        Object.values(financial)
      );
    });
    await Promise.all(promises);
    console.log('Financials Inserted!');
  } catch (error) {
    console.log('Error Inserting Financials!');
    console.error(error);
  }
};
const insertEmployees = async () => {
  const valuesString = Object.keys(employees[0])
    .map((key, index) => {
      return `$${index + 1}`;
    })
    .join(', ');

  try {
    console.log('Inserting Employees...');
    const promises = employees.map((employee) => {
      return pool.query(
        `
    INSERT INTO employees (first_name, last_name, email, avatar, department, title, company_id)
    VALUES (${valuesString});
    `,
        Object.values(employee)
      );
    });

    await Promise.all(promises);
    console.log('Employees Inserted!');
  } catch (error) {
    console.log('Error Inserting Employees!');
    console.error(error);
  }
};

const seed = async () => {
  try {
    await dropTables();
    await createTables();
    await insertCompanies();
    await insertFinancials();
    await insertEmployees();
  } catch (error) {
    console.error('Error Seeding the DB!');
  } finally {
    console.log('Closing Pool...');
    pool.end();
  }
};

seed();

module.exports = {
  seed,
};

// Get new queries for financials by replacing the company_id from mock data with allIds
// const allIds = [{"id":"21ImC8IUCp19m&QEfdBbg"},{"id":"739bStMZKr28j&IV4PGuj"},{"id":"53FyQxFNZe88o&KGeWrae"},{"id":"48jJZAVGXs57k&P9nPRif"},{"id":"22E0GiH81b92r&B2uk7vf"},{"id":"49phRJKT8t50v&ONnHfjq"},{"id":"43t3T9X09v76t&BInmQtp"},{"id":"50ZcOIAL0u65y&JKVYgbu"},{"id":"13DSSYNH7d10c&IONcLii"},{"id":"083jSxV4Kn27m&PKAJxpg"},{"id":"632gWmIW6r17i&EQNsenm"},{"id":"19NeYUPUEr56e&JOGhDqv"},{"id":"14fbAJQ2Fp19m&ADscUuc"},{"id":"53AUR0WASu35y&WV5lGit"},{"id":"13vtH7JC5b60r&X4i6enh"},{"id":"59mPV2KFKl58r&SAc66do"},{"id":"23J6TgD8Kg94o&EM457ae"},{"id":"02yWGrT2Xg21s&IWgRycf"},{"id":"400IDTJKAd95v&UZqdqls"},{"id":"76J2I6WFZm61y&IBlT8jf"},{"id":"97SsVUFKHd64f&YMNjTvq"},{"id":"45tVCWH9Rm76b&Q5bX3dx"},{"id":"12JDCBN2Or68b&AAG11dg"},{"id":"577bJcR33f45p&Z5q3cpq"},{"id":"07ipYvIP7e64j&TGglpts"},{"id":"428pIbM5Ss76y&VJpvxjq"},{"id":"868hAXNXQe78f&XS9PSgn"},{"id":"70f7ZcNATt29c&QFvRzng"},{"id":"04okEhJSNt44u&HBXpzao"},{"id":"62dtX9VX9l88z&YV0Uzoz"},{"id":"910qTyP49b71q&MPlU6mr"},{"id":"08x4TaL28u78k&AJtTfsw"},{"id":"309dFEHPPk45a&QDWxwqp"},{"id":"331hJRPXYr79o&M7G2bfr"},{"id":"62KzUgS82v99c&CAtvbch"},{"id":"47kfPhGVLn25p&GT0k6pk"},{"id":"04R7LXR6Ia65a&VZCGyih"},{"id":"23tCDNIO6r20t&ATAVNof"},{"id":"25MAF3H85e61z&Z5XF6iv"},{"id":"73umWxKTVi38d&J5mbqmx"},{"id":"67NNCAFZMz76g&JTWWEoi"},{"id":"08r7D1L16m59w&UVWnqcy"},{"id":"96GeBHQRDr38c&D0PgGlr"},{"id":"46knS6KGSv42k&M6Kysyi"},{"id":"83LZWkH80z52j&N6qVGlj"},{"id":"27X1B7HT4h19s&HUZmXek"},{"id":"51Z8EhVQEm53v&KYb7ied"},{"id":"59KjVfWVZv59g&JTaXorq"},{"id":"79xnY9ZSHw42x&OGcsmsz"},{"id":"52FpTXTY4a98l&B3jbfde"},{"id":"08RkRmSV3s48w&DXngexw"},{"id":"50mfIHZTKm51o&K2JTTih"},{"id":"01fsNyJEDs52b&X0kXMwm"},{"id":"73idM7QP4o66t&JMmL4ai"},{"id":"93srUSL1Yt42j&KSlsVpb"},{"id":"70ayDADAXw95w&QGbVqon"},{"id":"29CPLQZX7l27l&ATXLyth"},{"id":"70EADpH7Hg39g&BUqA6cz"},{"id":"43h5VGVUEi65v&BNxpCtd"},{"id":"87N2BZIELb65b&MOChEjy"},{"id":"50uwRmJP0r92g&XLGoIlf"},{"id":"04CXGBD95p64j&GFsHzvf"},{"id":"80IvXlPHJo49z&FHORuqr"},{"id":"85bSJLHJ5s79o&DDEMGej"},{"id":"56FbAoF7Td09a&WO4mOlk"},{"id":"04hlFAJB4f44l&BTr83se"},{"id":"83okZLL6Yw26b&X41lsvr"},{"id":"33QARoW9Jk32a&LWSjenb"},{"id":"42BRYEJNWl10r&N0WA7ol"},{"id":"056qHnE87u36l&KDxSwxn"},{"id":"79aZGAET2g29f&VJis6nj"},{"id":"9986DuWY1j97c&U0GLgio"},{"id":"37wmWQCCZp61x&TOjaIzn"},{"id":"21IyLCU9Mj23n&YFs0zno"},{"id":"06gISyNBJz59v&KWDIAjb"},{"id":"46s1XpUKKn53u&XWT5vir"},{"id":"92AWJaTG8d09a&V8MOTew"},{"id":"94cWX6LWOf35e&IP5WRix"},{"id":"32uYVnR21e34g&CWi72go"},{"id":"37zoFSZ0Qp21b&KIdHmia"},{"id":"0196K6DELx87x&C16Mxue"},{"id":"49uTYIALKv36c&IMfFGho"},{"id":"98TkZdFYDm27z&SEP61wf"},{"id":"75thXYSTSt13u&R9VIEtb"},{"id":"01HaCOUE4u11b&G4NpYns"},{"id":"24ObOmV14d68x&CKRzzdu"},{"id":"78VLC4RK7u54c&E4cYDxs"},{"id":"2721TSRQKs74b&ITIsPwk"},{"id":"02iEPuHXUe30m&WAjyazb"},{"id":"62K5FzHLTz46t&MRCe0sm"},{"id":"98ZfSVVC8q34w&VJ36qcx"},{"id":"23rRVxB4Cg76j&J3dMyal"},{"id":"87XnAhJDFp70e&Q4jwgxs"},{"id":"40v8F0NIYr72v&ZCQETgf"},{"id":"39RpBmNQUi74u&MBAsNvn"},{"id":"72GQBpJOFv27j&FYQJLra"},{"id":"39ckZ3XONk29k&XBE15zr"}]

// let newqueries = financialQueries.map((query, idx) => {
//     return query.substring(0, 82) + `('${allIds[idx].id}', ` + query.substring(83)
// })
// console.log(newqueries)
