Pod::Spec.new do |s|

  s.name         = "LEGO-SDK-Plugin-FOO"
  s.version      = "0.0.1"
  s.summary      = "A short description of LEGO-SDK-Plugin-FOO."
  s.description  = <<-DESC
                   DESC
  s.homepage     = "http://EXAMPLE/LEGO-SDK-Plugin-FOO"
  s.license      = "MIT (example)"
  s.author             = { "PonyCui"}
  s.platform     = :ios, "8.0"
  s.source       = { :git => "http://EXAMPLE/LEGO-SDK-Plugin-FOO.git" }
  s.source_files  = "ios/Source/*.{h,m}"
  s.requires_arc = true

end
