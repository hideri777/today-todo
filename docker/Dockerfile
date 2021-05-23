FROM php:7.4-apache

# PHPの設定ファイル
COPY ./php.ini /usr/local/etc/php/
# Apacheの設定ファイル
#COPY ./base.conf /etc/apache2/site-enabled/

# 書き方はまとめて書くようにしないとビルド時のエラーが出がち
RUN apt-get update && apt-get install -y \
    vim \
    unzip \
    libicu-dev \
    libpq-dev \
    libfreetype6-dev \ 
    libjpeg62-turbo-dev \
    libpng-dev \
    libjpeg-dev \
    # php7.4の場合はonigurumaが必要なのでインストール
    libonig-dev \
    && docker-php-ext-install pdo_mysql mysqli intl bcmath gd\
    && docker-php-ext-configure gd \
    --with-freetype=/usr/include/ \
    --with-jpeg=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && a2enmod rewrite

# Composerのインストール
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer
