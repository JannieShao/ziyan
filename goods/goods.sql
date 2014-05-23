CREATE  DATABASE goods character set='utf8';

USE goods;

-- status:
--     0: 账号被禁用
--     1：正常
CREATE TABLE IF NOT EXISTS users(
    user_id         int            auto_increment,
    nick_name       varchar(64)    NOT NULL,
    password        varchar(128)    NOT NULL,
    email           varchar(128)    NOT NULL,
    points          int            default '0',
    name            varchar(24),
    sex             char(1),
    birthday        varchar(64),
    school          varchar(128),
    tel             varchar(11),
    status          int             default '1',
    primary key (user_id)
);

-- status:
--     0: 发布中
--     1：交易成功

CREATE TABLE IF NOT EXISTS needs_msg(
    n_id            int             auto_increment,
    user_id         int             NOT NULL,
    add_time        varchar(50)     NOT NULL,
    good_name       varchar(50)     NOT NULL,
    amount          int             NOT NULL,
    introduction    varchar(512),
    school          varchar(128),
    status          int             default '0',
    primary key (n_id)
);

-- msg_status:
--     0: 未读
--     1：已读
--     2：发送者删除
--     3：接收者删除

CREATE TABLE IF NOT EXISTS message(
    msg_id          int             auto_increment,
    from_id         int             NOT NULL,
    user_id         int             NOT NULL,
    send_time       varchar(50)     NOT NULL,
    content         varchar(512)    NOT NULL,
    msg_status      int             default '0',
    primary key (msg_id)
);

-- addr_status:
--     0: 普通状态
--     1：默认地址

CREATE TABLE IF NOT EXISTS address(
    addr_id         int             auto_increment,
    user_id         int             NOT NULL,
    name            varchar(24)     NOT NULL,
    addr            varchar (128)    NOT NULL,
    tel             char(11)        NOT NULL,
    addr_status     int             default '0',
    primary key (addr_id)
);

-- good_status:
--     0: 上架
--     1：已下架

CREATE TABLE IF NOT EXISTS goods(
    good_id         int             auto_increment,
    good_name       varchar(64)     NOT NULL,
    user_id         int             NOT NULL,
    good_price      varchar(50)     NOT NULL,
    sort_id         int             NOT NULL,
    level           int             NOT NULL,
    sum             int             NOT NULL,
    introduction    varchar(512),
    img_path        varchar(512),
    good_status     int             default '0',
    primary key (good_id)
);

CREATE TABLE IF NOT EXISTS sorts(
    sort_id         int             auto_increment,
    s_name_a       varchar(64)     NOT NULL,
    s_name_b       varchar(64),
    s_name_c        varchar(64),
    s_name_d        varchar(64),
    primary key (sort_id)
);

-- order_status:
--     0: 新提交订单
--     1：已发货
--     2：已签收
--     3：待评价
--     4：交易关闭

CREATE TABLE IF NOT EXISTS orders(
    order_id        int             auto_increment,
    user_id         int             NOT NULL,
    addr_id         int             NOT NULL,
    express         varchar(64),
    exp_id          varchar(64),
    order_status    int             default '0',
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