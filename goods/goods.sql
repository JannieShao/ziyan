CREATE  DATABASE goods character set='utf8';

USE goods;

CREATE TABLE IF NOT EXISTS users(
    user_id         int            auto_increment,
    nick_name       varchar(20)    NOT NULL,
    password        varchar(24)    NOT NULL,
    email           varchar(50)    NOT NULL,
    points          int            default '0',
    name            varchar(12),
    sex             char(2),
    birthday        varchar(50),
    address         varchar(128),
    school          varchar(128),
    primary key (user_id)
);

CREATE TABLE IF NOT EXISTS needs_msg(
    n_id            int             auto_increment,
    user_id         int             NOT NULL,
    add_time        varchar(50)     NOT NULL,
    good_name       varchar(50)     NOT NULL，
    amount          int             NOT NULL,
    introduction    varchar(128),
    status          int             NOT NULL,
    primary key (n_id)
);

CREATE TABLE IF NOT EXISTS message(
    msg_id          int             auto_increment,
    from_id         int             NOT NULL,
    user_id         int             NOT NULL,
    send_time       varchar(50)     NOT NULL,
    content         varchar(128)    NOT NULL,
    msg_stauts      int             default '0',
    primary key (msg_id)
);

CREATE TABLE IF NOT EXISTS address(
    addr_id         int             auto_increment,
    user_id         int             NOT NULL,
    name            varchar(12)     NOT NULL,
    addr            varchar (50)    NOT NULL,
    tel             char(11)        NOT NULL,
    addr_status     int             default '0',
    primary key (addr_id)
);

CREATE TABLE IF NOT EXISTS goods(
    good_id         int             auto_increment,
    good_name       varchar(24)     NOT NULL,
    user_id         int             NOT NULL,
    good_price      varchar(50)     NOT NULL,
    sort_id         int             NOT NULL,
    condition       int             NOT NULL,
    sum             int             NOT NULL,
    introduction    varchar(128),
    good_status     int             default '0',
    primary key (good_id)
);

CREATE TABLE IF NOT EXISTS sorts(
    sort_id         int             auto_increment,
    sort_name       varchar(12)     NOT NULL,
    s_name          varchar(12),
    primary key (sort_id)
);

CREATE TABLE IF NOT EXISTS orders(
    order_id        int             auto_increment,
    addr_id         int             NOT NULL,
    express         varchar(24),
    exp_id          varchar(50),
    order_status    int,
    primary key (order_id)
);

CREATE TABLE IF NOT EXISTS orders_msg(
    id              int             auto_increment,
    order_id        int             NOT NULL,
    good_id         int             NOT NULL,
    sum             int             NOT NULL,
    price           varchar(50)     NOT NULL,
    primary key (id)
);

CREATE TABLE IF NOT EXISTS cars(
    car_id          int             auto_increment,
    user_id         int             NOT NULL,
    good_id         int             NOT NULL,
    sum             int             NOT NULL,
    primary key (car_id)
);