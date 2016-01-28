#
# Validate JSON search-index.
#
# @nfreear, 25 January 2016.
#
require 'json'

begin
  json_file = './_site/fix/index.json'
  # Was: json_file = './_site/search-index.json'
  data = JSON.parse( File.read( json_file ) )
  puts "JSON parser OK, in #{json_file}"
  puts data[ 'time' ]
rescue JSON::ParserError => ex
  Kernel.abort("JSON parser error, in #{json_file}")  # Exit 1.
  # Was: puts "Parser error: #{ex.message}"
end
