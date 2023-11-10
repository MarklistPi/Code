
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrd3hncHp2YnFpcXd0dnN4cmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMjExMjIsImV4cCI6MjAxMjc5NzEyMn0.MlRXdglIhgohpa7ULcXoAjOzyEY_OgY_0zHsCXN0Geg')


const { data, error } = await supabase
  .from('users')
  .select()

  
const { } = await supabase
.from('users')
.insert({ id: 1, name: 'joao' })