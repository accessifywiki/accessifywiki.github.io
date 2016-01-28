#
# Pretty JSON filter for Jekyll/Liquid.
#
# Source: https://gist.github.com/joelverhagen/1850654
# NDF, 22 Jan 2016.
#
#require 'rubygems'
require 'json'

module JsonFilter
  def json(input)
    if input.is_a? String
      input.to_json
    else
      JSON.pretty_generate(input)
    end
  end

  Liquid::Template.register_filter self
end
