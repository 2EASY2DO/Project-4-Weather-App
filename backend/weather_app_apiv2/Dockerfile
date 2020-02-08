FROM ruby:2.6.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs ranger vim
RUN mkdir /myapp
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
EXPOSE 3000
